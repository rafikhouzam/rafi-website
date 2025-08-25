import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: __dirname },
  async redirects() {
    return [
    ];
  },
};

export default config;
