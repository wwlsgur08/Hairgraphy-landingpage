import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/seo-content";
import { pretendard } from "./fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#FFFDFA",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "헤어그래피 - 헤어 디자이너를 위한 올인원 앱",
    template: "%s | 헤어그래피",
  },
  description:
    "AI 헤어 분석, 포트폴리오 관리, 고객관리, 스타일북, 레시피 계산기까지. 헤어 디자이너의 모든 것을 하나의 앱에서.",
  keywords: [
    "헤어그래피",
    "헤어 디자이너",
    "미용실 앱",
    "포트폴리오",
    "고객관리",
    "AI 헤어분석",
    "헤어스타일",
    "미용사 앱",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "헤어그래피 - 헤어 디자이너를 위한 올인원 앱",
    description:
      "AI 얼굴 비식별화부터 AI 인스타 작성 도우미, 포트폴리오, 고객 히스토리 관리까지. 헤어 디자이너의 모든 것을 하나의 앱에서.",
    url: SITE_URL,
    siteName: "헤어그래피",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "헤어그래피",
    description: "헤어 디자이너를 위한 올인원 앱",
    images: ["/twitter-image"],
  },
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>{children}</body>
    </html>
  );
}
