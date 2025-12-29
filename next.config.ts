import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: false, // <-- Désactive les badges et flèches dev
  // Optimisations de performance
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  turbopack: {
    rules: {
      // Si tu veux complètement supprimer Orchids, commente ou supprime ce loader
      "*.{jsx,tsx}": {
        // loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
