/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withVideos = require("next-videos")

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { hostname: "source.unsplash.com" },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = withVideos()
module.exports = nextConfig
