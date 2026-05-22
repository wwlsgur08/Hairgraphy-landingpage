"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import Link from "next/link";

export function DownloadCTA() {
  return (
    <section id="download" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-3 md:mb-4">
            오늘의 시술을 그냥 사진으로 남기지 마세요.
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
            레시피, 고객 히스토리, 포트폴리오까지
            <br />
            Hairgraphy에 함께 쌓아보세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://apps.apple.com/kr/app/hairgraphy/id6758673452"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-coral text-white hover:bg-coral-dark transition-colors duration-200 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-white/80">App Store</div>
                <div className="text-sm font-semibold -mt-0.5">무료로 시작하기</div>
              </div>
            </a>
            <Link
              href="/android"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-card text-text-primary hover:bg-background border border-border transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M3.18 23.48c-.48-.28-.77-.8-.77-1.36V1.88c0-.56.29-1.08.77-1.36l11.15 11.48L3.18 23.48zM15.55 15.21l-2.46-2.52 2.46-2.52 3.51 2.03c.51.29.51.77 0 1.07l-3.51 1.94zM13.09 12l-9.12 9.38 12.6-7.28L13.09 12zM13.09 12L3.97 2.62l12.6 7.27L13.09 12z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-text-tertiary">Google Play</div>
                <div className="text-sm font-semibold -mt-0.5">무료로 시작하기</div>
              </div>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
