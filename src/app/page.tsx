import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
// TODO: 사용자 요청으로 임시 비활성. 향후 디자인 개선 후 복원 예정.
// import { ProblemAwareness } from "@/components/sections/ProblemAwareness";
import { ProblemSolutionScroll } from "@/components/sections/ProblemSolutionScroll";
import { Features } from "@/components/sections/Features";
import { AIFaceSwapCTA } from "@/components/sections/AIFaceSwapCTA";
import { DailyWorkflow } from "@/components/sections/DailyWorkflow";
import { RecommendFor } from "@/components/sections/RecommendFor";
import { AppScreenshots } from "@/components/sections/AppScreenshots";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { Footer } from "@/components/layout/Footer";
import { FAQ_ITEMS } from "@/lib/constants";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "헤어그래피",
    url: "https://hairgraphy.site",
    logo: "https://hairgraphy.site/images/logo.png",
    sameAs: ["https://www.instagram.com/"],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "헤어그래피",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    inLanguage: "ko-KR",
    url: "https://hairgraphy.site",
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
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* TODO: 사용자 요청으로 임시 비활성. 향후 디자인 개선 후 복원 예정. */}
        {/* <ProblemAwareness /> */}
        <ProblemSolutionScroll />
        <Features />
        <AIFaceSwapCTA />
        <DailyWorkflow />
        <RecommendFor />
        <AppScreenshots />
        <Testimonials />
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
