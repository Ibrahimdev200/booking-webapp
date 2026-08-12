/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'upload.wikimedia.org'
    ],
    unoptimized: true
  }
};

module.exports = nextConfig;
