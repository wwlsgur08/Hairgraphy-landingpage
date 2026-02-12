"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PreRegisterForm } from "@/components/ui/PreRegisterForm";

export function DownloadCTA() {
  return (
    <section id="download" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background coral glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-coral/10 blur-[80px] md:blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            사전 예약하고 먼저 만나보세요
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
            출시 알림을 가장 먼저 받아보세요
          </p>
          <div className="flex justify-center">
            <PreRegisterForm variant="dark" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
