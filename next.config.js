/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withVideos = require("next-videos")

module.exports = {
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "source.unsplash.com" },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = withVideos()
module.exports = nextConfig
