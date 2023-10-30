/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    NEXTAUTH_SECRET: "5019bb484c4977a38ac25e03c8593957",
    NEXTAUTH_URL: "http://localhost:3000/",
    GOOGLE_CLIENT_ID: "363679978329-q8t3qeobl13vm41nc3n8bani42pt87k2.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;