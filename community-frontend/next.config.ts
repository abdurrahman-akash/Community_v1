import type { NextConfig } from "next";
import path from "path";

module.exports = {
  images: {
    domains: ["cdn.pixabay.com"], // ✅ Allow images from Pixabay
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
