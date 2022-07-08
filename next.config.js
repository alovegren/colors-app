/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FAVORITE_MOVIE: process.env.FAVORITE_MOVIE,
  }
}

module.exports = nextConfig
