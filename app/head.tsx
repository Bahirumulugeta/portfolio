const SITE_URL = "https://bahiru.vercel.app";
const TITLE = "Bahiru Mulugeta | Senior Full-Stack Software Engineer";
const DESCRIPTION =
  "Senior full-stack engineer in Addis Ababa with 5+ years shipping React, Next.js, and Node.js products. Open to remote and full-time roles.";
const IMAGE = `${SITE_URL}/og-image.png`;

export default function Head() {
  return (
    <>
      <title>{TITLE}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={DESCRIPTION} />
      <meta
        name="keywords"
        content="Bahiru Mulugeta, Senior Full-Stack Engineer, Next.js, React, Node.js, TypeScript, Ethiopia, portfolio"
      />
      <meta name="author" content="Bahiru Mulugeta" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#070B14" />
      <link rel="canonical" href={SITE_URL} />
      <link rel="alternate" hrefLang="en" href={SITE_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Bahiru Mulugeta" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={IMAGE} />
      <meta property="og:image:secure_url" content={IMAGE} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1376" />
      <meta property="og:image:height" content="768" />
      <meta
        property="og:image:alt"
        content="Bahiru Mulugeta, Senior Full-Stack Software Engineer"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bahiru_mulugeta" />
      <meta name="twitter:creator" content="@bahiru_mulugeta" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE} />
      <meta
        name="twitter:image:alt"
        content="Bahiru Mulugeta, Senior Full-Stack Software Engineer"
      />

      <meta name="application-name" content="Bahiru Mulugeta" />
      <meta name="apple-mobile-web-app-title" content="Bahiru Mulugeta" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="icon" href="/icon-b.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  );
}
