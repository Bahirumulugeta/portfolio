import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../utils/sendEmail";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ message: "Please complete every field." });
  }

  try {
    await sendEmail({
      to: process.env.NOTIFY_EMAIL || "bahirumulugeta1@gmail.com",
      subject: `${name.trim()} sent you a message from Portfolio`,
      template: "contactMessage",
      templateData: {
        Name: name.trim(),
        Email: email.trim(),
        Message: message.trim(),
      },
    });
    return res.status(200).json({ message: "Your message was sent successfully." });
  } catch (err) {
    console.error("Contact email failed:", err);
    return res.status(500).json({
      message: "There was an error sending your message.",
    });
  }
}
