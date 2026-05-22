"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  Camera,
  FileText,
  Users,
  Calendar,
  Share2,
  ChevronRight,
} from "lucide-react";

const STEPS = [
  { icon: Camera, label: "시술 사진 업로드" },
  { icon: FileText, label: "레시피 / 메모 기록" },
  { icon: Users, label: "고객 히스토리에 자동 정리" },
  { icon: Calendar, label: "다음 방문 때 바로 확인" },
  { icon: Share2, label: "인스타 캡션으로 포트폴리오 업로드" },
];

export function DailyWorkflow() {
  return (
    <section id="workflow" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-3 md:mb-4">
            시술 직후 30초 기록이, 다음 상담 자료가 됩니다
          </h2>
        </ScrollReveal>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-3 md:hidden max-w-md mx-auto">
          {STEPS.map((step, index) => (
            <ScrollReveal key={step.label} delay={index * 0.06}>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border-light bg-card">
                <div className="w-9 h-9 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-4 h-4 text-coral" />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xs font-bold text-coral shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold text-text-primary">
                    {step.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Desktop: horizontal flow with chevrons */}
        <div className="hidden md:flex items-stretch justify-between gap-2">
          {STEPS.map((step, index) => (
            <div
              key={step.label}
              className="flex items-stretch gap-2 flex-1 last:flex-none"
            >
              <ScrollReveal delay={index * 0.08} className="flex-1">
                <div className="h-full flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-border-light bg-card">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-coral" />
                  </div>
                  <span className="text-xs font-bold text-coral">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold text-text-primary leading-snug">
                    {step.label}
                  </p>
                </div>
              </ScrollReveal>
              {index < STEPS.length - 1 && (
                <div className="flex items-center text-text-tertiary shrink-0">
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
