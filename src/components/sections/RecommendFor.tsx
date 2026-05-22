"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  Image as ImageIcon,
  MessageSquare,
  FlaskConical,
  ShieldCheck,
  Instagram,
  TrendingUp,
} from "lucide-react";

const TARGETS = [
  {
    icon: ImageIcon,
    title: "시술 사진은 많은데, 정작 상담 때 보여줄 사진을 못 찾는 분",
  },
  {
    icon: MessageSquare,
    title: "“지난번처럼 해주세요”라는 말이 부담스러운 분",
  },
  {
    icon: FlaskConical,
    title: "컬러/펌 레시피를 기억과 감에만 의존하고 있는 분",
  },
  {
    icon: ShieldCheck,
    title: "좋은 결과 사진을 올리고 싶지만 얼굴 노출 허락이 늘 걸리는 분",
  },
  {
    icon: Instagram,
    title: "인스타를 해야 하는 건 알지만, 업로드 문구에서 자주 멈추는 분",
  },
  {
    icon: TrendingUp,
    title: "내 작업을 그냥 사진첩이 아니라 포트폴리오 자산으로 쌓고 싶은 분",
  },
];

export function RecommendFor() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            이런 순간이 반복된다면, Hairgraphy가 필요합니다.
          </h2>
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
