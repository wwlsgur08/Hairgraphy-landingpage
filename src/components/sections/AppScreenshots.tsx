"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const SCREENSHOTS = [
  { src: "/images/1.png", alt: "쉽고 빠른 헤어 기록" },
  { src: "/images/2.png", alt: "AI 얼굴 비식별화" },
  { src: "/images/3.png", alt: "인스타 캡션 작성 AI" },
  { src: "/images/4.png", alt: "멀티 시술 타이머" },
  { src: "/images/5.png", alt: "고객 히스토리" },
  { src: "/images/6.png", alt: "나만의 비밀 노트" },
];

export function AppScreenshots() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            디자이너를 위한 다양한 기능들
          </h2>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll carousel - centered */}
      <div
        className="flex gap-3 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 justify-start lg:justify-center px-4 md:px-6 scrollbar-hide"
      >
        {SCREENSHOTS.map((shot, index) => (
          <ScrollReveal
            key={shot.src}
            delay={index * 0.1}
            className="snap-center shrink-0"
          >
            <div className="w-[130px] md:w-[260px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={260}
                height={563}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 130px, 260px"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
