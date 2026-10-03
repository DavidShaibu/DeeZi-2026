import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/zoom",
        headers: [
          {
            key: "Permissions-Policy",
            value:
              'camera=(self "https://yale.zoom.us"), microphone=(self "https://yale.zoom.us"), display-capture=(self "https://yale.zoom.us"), fullscreen=(self "https://yale.zoom.us")',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
