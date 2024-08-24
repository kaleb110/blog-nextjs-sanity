// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Existing configuration
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  },
  images: {
    remotePatterns: ["firebasestorage.googleapis.com", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**", // Matches all images served from Sanity
      },
    ],
  },

  // MDX Configuration
  pageExtensions: ["js", "jsx", "ts", "tsx", "md"],

  // Add more configurations here
};

export default nextConfig;
