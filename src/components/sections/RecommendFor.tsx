"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Scissors, TrendingUp, Clock, Instagram, Users } from "lucide-react";

const TARGETS = [
  { icon: Scissors, title: "시술 사진 올리고 싶은데 모델 구하기가 어려운 분" },
  { icon: Instagram, title: "인스타 감성 캡션 쓰는 게 어려운 분" },
  { icon: Clock, title: "동시에 여러 고객 시술 타이머가 필요한 분" },
  { icon: Users, title: "고객별 시술 기록을 체계적으로 관리하고 싶은 분" },
  { icon: TrendingUp, title: "나만의 포트폴리오와 시술 기록들을 쉽고 빠르게 검색하고 싶으신 분" },
];

export function RecommendFor() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            이런 분께 추천해요
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            하나라도 해당된다면, 헤어그래피가 딱이에요
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-3 md:gap-4 max-w-2xl mx-auto">
          {TARGETS.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className="flex items-center gap-3 md:gap-4 p-4 md:py-5 md:px-6 rounded-xl border border-border-light hover:-translate-y-0.5 transition-transform duration-300">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-coral" />
                </div>
                <p className="text-sm md:text-base font-bold text-text-primary">
                  {item.title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
