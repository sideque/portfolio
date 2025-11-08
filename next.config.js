/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Only use basePath for production builds (GitHub Pages), not for dev or Vercel
  ...(process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS && { 
    basePath: '/my-new-portfolio' 
  }),

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
