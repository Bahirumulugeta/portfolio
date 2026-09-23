import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { EmailTemplate, loadTemplate, templates } from "./emailTemplates";

const notifyEmail =
  process.env.NOTIFY_EMAIL ||
  process.env.SMTP_FROM ||
  "bahirumulugeta1@gmail.com";

export const sendEmail = async (options: {
  to: string;
  subject: string;
  message?: string;
  template?: EmailTemplate;
  templateData?: Record<string, string>;
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  } as SMTPTransport.Options);

  const mailOptions: nodemailer.SendMailOptions = {
    from: `Bahiru Mulugeta <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: options.to,
    subject: options.subject,
  };

  if (options.template && templates[options.template]) {
    mailOptions.html = loadTemplate(options.template, options.templateData || {});
  } else if (options.message) {
    mailOptions.text = options.message;
  }

  await transporter.sendMail(mailOptions);
};

export const notifyOwner = async (
  subject: string,
  template: EmailTemplate,
  templateData: Record<string, string>
) => {
  await sendEmail({
    to: notifyEmail,
    subject,
    template,
    templateData,
  });
};
