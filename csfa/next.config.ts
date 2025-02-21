import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Rota no frontend
        destination: "http://localhost:8800/:path*", // Rota do backend
      },
    ];
  },
};