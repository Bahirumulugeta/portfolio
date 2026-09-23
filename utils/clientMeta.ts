export const RESUME_PATH = "/Bahiru-Resume.pdf";
export const RESUME_FILENAME = "Bahiru-Resume.pdf";

export const collectClientMeta = () => ({
  page: typeof window !== "undefined" ? window.location.href : "",
  referrer: typeof document !== "undefined" ? document.referrer || "Direct" : "Direct",
  userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "Unknown",
  time: new Date().toISOString(),
});

export const notifyPortfolioEvent = async (
  type: "view" | "resume",
  extra: Record<string, string> = {}
) => {
  try {
    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        ...collectClientMeta(),
        ...extra,
      }),
    });
  } catch {
    // Notification should never block browsing or downloads.
  }
};
