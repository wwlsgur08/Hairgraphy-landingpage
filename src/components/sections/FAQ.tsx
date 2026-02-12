"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            궁금한 점이 있으시면 확인해 보세요
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion items={FAQ_ITEMS} />
        </ScrollReveal>
      </div>
    </section>
  );
}
