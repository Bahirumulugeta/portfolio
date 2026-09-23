/** @type {import('next').NextConfig} */
process.env.NEXT_TELEMETRY_DISABLED = "1";

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
      "img.icons8.com",
      "raw.githubusercontent.com",
      "i.imgur.com",
      "img.freepik.com",
      "media.geeksforgeeks.org",
    ],
  },
};

module.exports = nextConfig;
