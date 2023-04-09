/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://i.pinimg.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
