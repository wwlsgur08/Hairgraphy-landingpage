import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { pretendard } from "./fonts";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { NaverAnalytics } from "@/components/analytics/NaverAnalytics";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#FFFDFA",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hairgraphy.site"),
  title: {
    default: "헤어그래피 - 매일의 시술이 포트폴리오가 돼요",
    template: "%s | 헤어그래피",
  },
  description:
    "헤어 디자이너의 매일을 기록으로 남기는 앱. 시술 사진·고객 메모·인스타 캡션을 한곳에서. AI 얼굴 비식별화, 음성 시술 메모, 미용실 멀티 타이머까지.",
  keywords: [
    "헤어그래피",
    "헤어 디자이너",
    "헤어디자이너 앱",
    "헤어 포트폴리오",
    "시술 기록",
    "미용실 앱",
    "미용사 앱",
    "헤어 디자이너 고객관리",
    "미용실 멀티 타이머",
    "AI 얼굴 비식별화",
    "디자이너 MBTI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "헤어그래피 - 매일의 시술이 포트폴리오가 돼요",
    description:
      "헤어 디자이너의 매일을 기록으로 남기는 앱. 시술 사진·고객 메모·인스타 캡션을 한곳에서. AI 얼굴 비식별화, 음성 시술 메모까지.",
    url: "https://hairgraphy.site",
    siteName: "헤어그래피",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "헤어그래피 - 매일의 시술이 포트폴리오가 돼요",
    description: "헤어 디자이너의 매일을 기록으로 남기는 앱. AI 얼굴 비식별화, 음성 시술 메모, 인스타 캡션까지.",
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
  other: {
    // Mobile app deep-link hints (KakaoTalk, Facebook, Twitter 모두 al:* 메타 인식)
    "al:ios:url": "hairgraphy://",
    "al:ios:app_name": "헤어그래피",
    "al:android:url": "hairgraphy://",
    "al:android:package": "com.hairgraphy.app",
    "al:android:app_name": "헤어그래피",
    "al:web:should_fallback": "true",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        {children}
        <Analytics />
        <GoogleAnalytics />
        <NaverAnalytics />
      </body>
    </html>
  );
}
