import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import isReplAuthed from "server/lib/auth/isReplAuthed";
import { Quota } from "server/mongo";

const app = nc();

app.use(isReplAuthed);
app.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { apiKey } = req.body;
  if (apiKey && typeof apiKey === "string" && apiKey.startsWith("sk-")) {
    const username = String(req.headers["x-replit-user-name"] || "");
    const quota = await Quota.findOne({
      username,
    });

    if (quota) {
      quota.apiKey = apiKey;
      await quota.save();
      res.json({
        success: true,
        message: "API key updated successfully",
      });
    } else {
      const newQuota = new Quota({
        username,
        responseCount: 0,
        apiKey,
      });
      await newQuota.save();
      res.json({
        success: true,
        message: "API key updated successfully",
      });
    }
  } else {
    if (!apiKey || apiKey.length === 0) {
      res.json({
        success: false,
        message: "Please provide an OpenAI apiKey",
      });
    } else {
      res.json({
        success: false,
        message: "Please provide a valid OpenAI apiKey",
      });
    }
  }
});

export default app;
