import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/portfolio"); empty for local dev and Vercel.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
