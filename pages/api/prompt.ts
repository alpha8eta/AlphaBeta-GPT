import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import isReplAuthed from "../../server/lib/auth/isReplAuthed";
import { Quota, Response } from "server/mongo";
import calculateQuota from "server/lib/calculateQuota";
import generateResponse from "server/lib/generateResponse";

const app = nc();

app.use(isReplAuthed);
app.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { prompt, history } = req.body;
  const username = String(req.headers["x-replit-user-name"] || "");
  const bio = req.headers["x-replit-user-bio"];
  const roles = String(req.headers["x-replit-user-roles"]);

  if (
    typeof prompt === "string" &&
    Array.isArray(history) &&
    history.every((e) => typeof e === "string")
  ) {
    const { total, usage, hasApiKey } = await calculateQuota(req);
    if (!hasApiKey && usage >= total) {
      res.status(429).json({
        success: true,
        answer: `You've used up your quota of ${total} responses.  If you would like to increase your quota, you can add your own OpenAI API key in settings, or [tip this Repl](https://ai.repl.page/__repl).
        
Alternatively, you can try out [Ghostwriter Chat](https://replit.com/site/ghostwriter).`,
      });
      return;
    }

    const userContext =
      `The human speaking to you has a username of ${username}. ` +
      (bio ? `The human describes themself with "${bio}". ` : "") +
      (roles
        ? `The human has the following roles on their Replit account: ${roles
            .split(",")
            .join(", ")}`
        : "");

    let userApiKey: string | undefined;
    try {
      const quota = username
        ? await Quota.findOne({ username }).select("apiKey")
        : null;
      if (quota?.apiKey) {
        userApiKey = quota.apiKey;
      }
    } catch {
      userApiKey = undefined;
    }

    const resp = await generateResponse({
      history,
      question: prompt,
      apiKey: userApiKey,
      userContext,
    });

    if (typeof resp === "string") {
      const PromptLog = new Response({
        prompt,
        response: resp,
        username,
      });

      await PromptLog.save();

      res.status(200).json({
        success: true,
        answer: resp,
      });
    } else {
      res.status(500).json({
        success: false,
        answer: null,
        message: "Internal Server Error, Please try again",
      });
    }
  } else {
    res.status(400).json({
      success: false,
      answer: null,
      message: "Invalid request body",
    });
  }
});

export default app;
