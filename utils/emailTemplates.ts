export const templates = {
  portfolioView: `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#0F172A;font-family:Arial,sans-serif;color:#F8FAFC;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#1E293B;border-radius:16px;padding:28px;">
      <tr><td>
        <p style="margin:0 0 8px;color:#22C55E;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Portfolio alert</p>
        <h1 style="margin:0 0 16px;font-size:22px;">Someone viewed your portfolio</h1>
        <p style="margin:0 0 8px;color:#CBD5E1;line-height:1.6;">Time: {{Time}}</p>
        <p style="margin:0 0 8px;color:#CBD5E1;line-height:1.6;">Page: {{Page}}</p>
        <p style="margin:0 0 8px;color:#CBD5E1;line-height:1.6;">Referrer: {{Referrer}}</p>
        <p style="margin:0 0 8px;color:#CBD5E1;line-height:1.6;">Location hint: {{Location}}</p>
        <p style="margin:0;color:#94A3B8;font-size:13px;line-height:1.6;">Device: {{UserAgent}}</p>
      </td></tr>
    </table>
  </body>
</html>`,
  resumeDownload: `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#0F172A;font-family:Arial,sans-serif;color:#F8FAFC;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#1E293B;border-radius:16px;padding:28px;">
      <tr><td>
        <p style="margin:0 0 8px;color:#22C55E;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Resume alert</p>
        <h1 style="margin:0 0 16px;font-size:22px;">Someone downloaded your CV</h1>
        <p style="margin:0 0 8px;color:#CBD5E1;line-height:1.6;">Time: {{Time}}</p>
        <p style="margin:0 0 8px;color:#CBD5E1;line-height:1.6;">File: {{File}}</p>
        <p style="margin:0 0 8px;color:#CBD5E1;line-height:1.6;">Referrer: {{Referrer}}</p>
        <p style="margin:0;color:#94A3B8;font-size:13px;line-height:1.6;">Device: {{UserAgent}}</p>
      </td></tr>
    </table>
  </body>
</html>`,
  contactMessage: `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#0F172A;font-family:Arial,sans-serif;color:#F8FAFC;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#1E293B;border-radius:16px;padding:28px;">
      <tr><td>
        <p style="margin:0 0 8px;color:#22C55E;font-size:12px;letter-spacing:2px;text-transform:uppercase;">New message</p>
        <h1 style="margin:0 0 16px;font-size:22px;">{{Name}} wrote from your portfolio</h1>
        <p style="margin:0 0 8px;color:#CBD5E1;line-height:1.6;">Email: {{Email}}</p>
        <p style="margin:0;color:#F8FAFC;line-height:1.7;white-space:pre-wrap;">{{Message}}</p>
      </td></tr>
    </table>
  </body>
</html>`,
} as const;

export type EmailTemplate = keyof typeof templates;

export const loadTemplate = (
  template: EmailTemplate,
  templateData: Record<string, string> = {}
) => {
  let html = templates[template];
  Object.entries(templateData).forEach(([key, value]) => {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), value);
  });
  return html;
};
