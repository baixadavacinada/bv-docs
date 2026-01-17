/** @type {import('next').NextConfig} */
const basePath = "/bv-docs";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
