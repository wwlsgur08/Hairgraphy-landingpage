"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            디자이너들의 이야기
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            비공개 테스트로 진행한 디자이너 분들의 후기예요
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
