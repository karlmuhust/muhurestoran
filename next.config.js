/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  distDir: ".next",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
