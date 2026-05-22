"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";

const LINES = [
  "갤러리에는 사진이 쌓이고,",
  "레시피는 메모장에 흩어지고,",
  "고객 반응은 기억에 남고,",
  "인스타 업로드는 또 따로 고민합니다.",
];

export function ProblemAwareness() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary">
            지금 이런 식으로 기록하고 있지 않나요?
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-card rounded-xl border border-border-light p-6 md:p-10 relative">
            <span
              aria-hidden="true"
              className="absolute left-4 md:left-6 top-2 md:top-3 text-coral text-5xl md:text-6xl font-serif leading-none select-none"
            >
              &ldquo;
            </span>
            <ul className="space-y-3 md:space-y-4 pl-6 md:pl-10">
              {LINES.map((line) => (
                <li
                  key={line}
                  className="text-base md:text-xl font-semibold text-text-primary leading-relaxed"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
