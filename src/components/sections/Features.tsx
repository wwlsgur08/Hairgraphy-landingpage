"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            흩어진 시술 기록을, 다시 쓰이는 자산으로.
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Hairgraphy의 핵심 기능
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {FEATURES.map((feature, index) => {
            const Wrapper = feature.href
              ? ({ children }: { children: React.ReactNode }) => (
                  <Link
                    href={feature.href!}
                    className="block group"
                    aria-label={`${feature.title} 상세 페이지 이동`}
                  >
                    {children}
                    <span className="mt-2 inline-flex text-xs md:text-sm font-semibold text-coral group-hover:underline">
                      자세히 보기
                    </span>
                  </Link>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="block">{children}</div>
                );

            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <Wrapper>
                  <FeatureCard {...feature} />
                </Wrapper>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mt-8 md:mt-10 flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-coral/5 border border-coral/15 max-w-3xl mx-auto">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-coral/15 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4 md:w-5 md:h-5 text-coral" aria-hidden="true" />
            </div>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              개인 디자이너의 기록은 개인의 자산입니다. Hairgraphy는 고객별 시술 기록과 메모를
              디자이너 개인 공간에 안전하게 쌓을 수 있도록 설계되었습니다.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
