"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ExternalLink } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

export function AIFaceSwapCTA() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-3 md:mb-4 leading-tight">
              좋은 시술 사진,
              <br className="hidden md:block" />
              {" "}얼굴 허락 때문에 멈추지 않게.
            </h2>
            <p className="text-text-secondary text-base md:text-lg mb-6 md:mb-8 max-w-xl">
              헤어는 그대로 두고, 얼굴만 자연스럽게 변경해보세요.
              {" "}슬라이더를 좌우로 움직여 결과를 비교할 수 있어요.
            </p>
            <a
              href="https://face-swap-web-liart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-coral hover:bg-coral-dark text-white font-semibold rounded-xl text-base md:text-lg transition-colors cursor-pointer group"
              aria-label="사진으로 바로 체험하기 (새 창에서 열림)"
            >
              사진으로 바로 체험하기
              <ExternalLink
                className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col items-center lg:items-end gap-3">
              <BeforeAfterSlider />
              <p className="text-xs md:text-sm text-text-tertiary text-center lg:text-right max-w-md">
                헤어는 그대로, 얼굴만 자연스럽게
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
