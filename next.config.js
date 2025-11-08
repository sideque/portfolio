/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // NO basePath for Vercel - remove the conditional entirely
  // basePath will break Vercel deployments

  images: {
    unoptimized: true, // ✅ required for static export
  },

  pwa: {
    dest: "public",
    runtimeCaching,
  },

  output: "export",
};

module.exports = withPWA(nextConfig);
