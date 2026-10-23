import mongoose from "mongoose";
import { Quota } from "server/mongo";
import { NextApiRequest } from "next";
import { toPublicQuota, PublicQuota } from "server/lib/publicQuota";

export default async function calculateQuota(
  req: NextApiRequest
): Promise<PublicQuota> {
  const username = String(req.headers["x-replit-user-name"] || "");
  let hasApiKey = false;
  let usage = 0;
  const total = Number(process.env.DEFAULT_QUOTA_LIMIT) || 100;

  try {
    if (username && mongoose.connection.readyState === 1) {
      const quota = await Quota.findOne({ username }).select(
        "apiKey responseCount"
      );
      if (quota) {
        hasApiKey = Boolean(quota.apiKey);
        usage = quota.responseCount || 0;
      }
    }
  } catch {
    // Quota lookup is best-effort. Never include secrets in the result.
  }

  return toPublicQuota({ total, usage, hasApiKey });
}
