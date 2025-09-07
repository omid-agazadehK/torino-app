/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "torino-api-sitc.onrender.com",
        port: "",
        pathname: "/static/images/**",
      },
    ],
  },
};

export default nextConfig;
