// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Existing configuration
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
