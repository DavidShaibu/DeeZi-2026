import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/zoom",
        destination: "/livestream",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
