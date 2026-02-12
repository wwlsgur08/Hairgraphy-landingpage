import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { RecommendFor } from "@/components/sections/RecommendFor";

import { AppScreenshots } from "@/components/sections/AppScreenshots";
import { Testimonials } from "@/components/sections/Testimonials";
import { AIFaceSwapCTA } from "@/components/sections/AIFaceSwapCTA";
import { FAQ } from "@/components/sections/FAQ";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { Footer } from "@/components/layout/Footer";
import { FAQ_ITEMS } from "@/lib/constants";
import { BLOG_POSTS, FEATURE_PAGES, SITE_URL } from "@/lib/seo-content";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "헤어그래피",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: ["https://www.instagram.com/"],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "헤어그래피",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    inLanguage: "ko-KR",
    url: SITE_URL,
    description:
      "헤어 디자이너를 위한 AI 얼굴 비식별화, 포트폴리오, 고객관리, 멀티 타이머, 인스타 캡션 작성 기능 제공",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "헤어그래피 주요 기능 페이지",
    itemListElement: FEATURE_PAGES.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/features/${item.slug}`,
      name: item.heroTitle,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "헤어그래피 블로그 가이드",
    itemListElement: BLOG_POSTS.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AppScreenshots />
        <Features />
        <RecommendFor />
        <Testimonials />
        <AIFaceSwapCTA />
        <FAQ />
        <DownloadCTA />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Footer />
    </>
  );
}
