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
      <Footer />
    </>
  );
}
