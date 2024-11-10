import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
      {
        protocol: 'https',
        hostname: 'skillforge.com',
      },
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
      // Add the photosnow.org domain here
      {
        protocol: 'https',
        hostname: 'photosnow.org', // Add this line
      },
    ],
  },
};

export default nextConfig;
