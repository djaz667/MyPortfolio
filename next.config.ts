import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },

  outputFileTracingRoot: path.resolve(__dirname),

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  devIndicators: false,

  // ⚠️ IMPORTANT : on supprime TOUT ce qui causait l’erreur
  // swcMinify ❌
  // experimental.optimizeCss ❌
  // critters ❌

  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        // loaders: [] // volontairement vide
      },
    },
  },
};

export default nextConfig;
