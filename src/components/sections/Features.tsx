"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            디자이너를 위한 스마트 기능
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            헤어그래피 하나로 고객 상담부터 시술, 관리까지 완벽하게
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {FEATURES.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <Link
                href={feature.href ?? "/"}
                className="block group"
                aria-label={`${feature.title} 상세 페이지 이동`}
              >
                <FeatureCard {...feature} />
                <span className="mt-2 inline-flex text-xs md:text-sm font-semibold text-coral group-hover:underline">
                  자세히 보기
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
