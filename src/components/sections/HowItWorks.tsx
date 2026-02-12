"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            3단계로 시작하세요
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            간단한 설정만으로 모든 기능을 바로 사용할 수 있어요
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-4 md:gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-[2px] bg-white/10" />

          {STEPS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.2}>
              <div className="text-center relative">
                {/* Step number */}
                <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full bg-coral/20 flex items-center justify-center mx-auto mb-4 md:mb-6 relative z-10">
                  <span className="text-coral text-xl md:text-2xl font-bold">
                    {step.number}
                  </span>
                </div>
                {/* Icon */}
                <div className="mb-3 md:mb-4">
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white/80 mx-auto" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-xs md:text-base leading-relaxed hidden md:block">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
