/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Updated for your new repository
  basePath: '/my-new-portfolio',

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
