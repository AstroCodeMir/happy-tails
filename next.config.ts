/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // ✅ allows all Unsplash paths
      },
    ],
  },
};

export default nextConfig;
