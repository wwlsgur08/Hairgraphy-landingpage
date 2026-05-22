"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import Link from "next/link";
import { StoreButton } from "@/components/ui/StoreButton";

export function DownloadCTA() {
  return (
    <section id="download" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-3 md:mb-4">
            지금 바로 다운로드하세요
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
            App Store와 Android에서 헤어그래피를 만나보세요
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/android"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card text-text-primary hover:bg-background border border-border transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M3.18 23.48c-.48-.28-.77-.8-.77-1.36V1.88c0-.56.29-1.08.77-1.36l11.15 11.48L3.18 23.48zM15.55 15.21l-2.46-2.52 2.46-2.52 3.51 2.03c.51.29.51.77 0 1.07l-3.51 1.94zM13.09 12l-9.12 9.38 12.6-7.28L13.09 12zM13.09 12L3.97 2.62l12.6 7.27L13.09 12z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-text-tertiary">Android</div>
                <div className="text-sm font-semibold -mt-0.5">다운로드</div>
              </div>
            </Link>
            <StoreButton store="apple" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
