"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ExternalLink } from "lucide-react";

export function AIFaceSwapCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Coral glow effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-coral/10 blur-[80px] md:blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
      />

      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            AI 얼굴 변경 기능을 지금 바로 체험해 보세요
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
            헤어그래피의 핵심 기능인 AI 얼굴 비식별화를 미리 경험할 수 있어요.
            {" "}헤어는 그대로, 얼굴만 자연스럽게 변경됩니다.
          </p>
          <a
            href="https://face-swap-web-liart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-coral hover:bg-coral/90 text-white font-semibold rounded-xl text-base md:text-lg transition-colors cursor-pointer group"
            aria-label="AI 얼굴 변경 기능 체험하기 (새 창에서 열림)"
          >
            AI 체험하기
            <ExternalLink
              className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
