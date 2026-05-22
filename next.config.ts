import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 이미지 최적화 - AVIF 우선, WebP fallback. PNG/JPG 원본은 그대로 두고 next/image가 변환해서 서빙.
  images: {
    formats: ["image/avif", "image/webp"],
    // 일반적인 디바이스 너비. next/image의 sizes 속성과 함께 작동.
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 180, 256, 300, 384],
    // 변환된 이미지를 30일간 캐싱
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // 압축 ON (기본값이지만 명시)
  compress: true,
  // Powered-By 헤더 제거 (불필요 노출)
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/q",
        destination: "https://hairgraphy.site",
        permanent: false,
      },
      {
        source: "/a",
        destination: "/android",
        permanent: false,
      },
    ];
  },
  async headers() {
    // Universal Links / App Links 검증 파일은 JSON Content-Type 강제
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
      {
        source: "/.well-known/assetlinks.json",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
