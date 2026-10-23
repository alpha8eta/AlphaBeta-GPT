import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import isReplAuthed from "server/lib/auth/isReplAuthed";
import { Quota } from "server/mongo";

const app = nc();

app.use(isReplAuthed);
app.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const username = String(req.headers["x-replit-user-name"] || "");
  const quota = await Quota.findOne({
    username,
  });

  if (quota) {
    quota.apiKey = null;
    await quota.save();
    res.json({
      success: true,
      message: "API key removed successfully",
    });
    return;
  }

  res.json({
    success: false,
    message: "Cannot remove an api key that doesn't exist",
  });
});

export default app;
