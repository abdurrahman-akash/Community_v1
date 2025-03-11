import type { NextConfig } from "next";

module.exports = {
  images: {
    domains: ["cdn.pixabay.com"], // ✅ Allow images from Pixabay
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
