import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  crossOrigin: "anonymous",
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https", // Allows only HTTPS
        hostname: "**", // Allows any hostname
        port: "", // No restriction on port
        pathname: "/**", // Allows any path
      },
      {
        protocol: "http", // Allows only HTTP
        hostname: "**", // Allows any hostname
        port: "", // No restriction on port
        pathname: "/**", // Allows any path
      },
    ],
  },
};

export default nextConfig;
