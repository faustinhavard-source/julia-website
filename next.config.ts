import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.JULIA_STATIC_PREVIEW === "1" ? "export" : undefined,
};

export default nextConfig;
