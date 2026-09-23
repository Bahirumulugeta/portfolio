import type { NextApiRequest, NextApiResponse } from "next";
import { notifyOwner } from "../../utils/sendEmail";

type Data = { message: string };

const lastSent = new Map<string, number>();

const getClientIp = (req: NextApiRequest) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return req.socket.remoteAddress || "unknown";
};

const canSend = (key: string, cooldownMs: number) => {
  const now = Date.now();
  const previous = lastSent.get(key) || 0;
  if (now - previous < cooldownMs) return false;
  lastSent.set(key, now);
  return true;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { type, page, referrer, userAgent, time, file } = req.body || {};
  if (type !== "view" && type !== "resume") {
    return res.status(400).json({ message: "Invalid event type" });
  }

  const ip = getClientIp(req);
  const cooldown = type === "view" ? 30 * 60 * 1000 : 5 * 60 * 1000;
  if (!canSend(`${ip}:${type}`, cooldown)) {
    return res.status(200).json({ message: "Already notified" });
  }

  const safe = (value: unknown, fallback: string) =>
    typeof value === "string" && value.trim() ? value.slice(0, 500) : fallback;

  try {
    if (type === "view") {
      await notifyOwner("Someone viewed your portfolio", "portfolioView", {
        Time: safe(time, new Date().toISOString()),
        Page: safe(page, "Unknown"),
        Referrer: safe(referrer, "Direct"),
        Location: ip,
        UserAgent: safe(userAgent, "Unknown"),
      });
    } else {
      await notifyOwner("Someone downloaded your CV", "resumeDownload", {
        Time: safe(time, new Date().toISOString()),
        File: safe(file, "Bahiru-Resume.pdf"),
        Referrer: safe(referrer, "Direct"),
        UserAgent: safe(userAgent, "Unknown"),
      });
    }

    return res.status(200).json({ message: "Notification sent" });
  } catch (error) {
    console.error("Event email failed:", error);
    return res.status(500).json({ message: "Failed to send notification" });
  }
}
