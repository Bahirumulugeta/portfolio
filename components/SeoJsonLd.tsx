const SITE_URL = "https://bahiru.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Bahiru Mulugeta Mekonnen",
      url: SITE_URL,
      image: `${SITE_URL}/cropped.jpg`,
      jobTitle: "Senior Full-Stack Software Engineer",
      email: "mailto:bahirumulugeta1@gmail.com",
      telephone: "+251948750343",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Addis Ababa Science and Technology University",
      },
      sameAs: [
        "https://www.linkedin.com/in/bahiru-mulugeta-60b40a194/",
        "https://github.com/Bahirumulugeta",
        "https://twitter.com/bahiru_mulugeta",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Bahiru Mulugeta",
      description:
        "Senior full-stack engineer in Addis Ababa with 5+ years shipping React, Next.js, and Node.js products.",
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

const SeoJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
);

export default SeoJsonLd;
