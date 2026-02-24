import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/q",
        destination: "https://hairgraphy.site",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
