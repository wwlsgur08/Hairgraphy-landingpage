"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const HERO_SCREENS = [
  { src: "/images/1-1.png", alt: "앱 메인 화면" },
  { src: "/images/1-2.png", alt: "앱 화면 2" },
  { src: "/images/1-3.png", alt: "앱 화면 3" },
  { src: "/images/1-4.png", alt: "앱 화면 4" },
  { src: "/images/1-5.png", alt: "앱 화면 5" },
  { src: "/images/1-6.png", alt: "앱 화면 6" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SCREENS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[100dvh] flex items-center pt-16 md:pt-[72px] relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-coral/15 blur-[80px] md:blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge>헤어 디자이너를 위한 올인원 앱</Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight mt-5 md:mt-6 mb-4 md:mb-6"
            >
              당신의 헤어 디자인,
              <br />
              <span className="text-coral">헤어그래피</span>로 완성하세요
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-text-secondary leading-relaxed mb-6 md:mb-8 max-w-lg"
            >
              AI 얼굴 비식별화부터 AI 인스타 작성 도우미, 포트폴리오, 고객 히스토리 관리까지.
              {" "}헤어 디자이너의 모든 것을 하나의 앱에서.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="https://apps.apple.com/kr/app/hairgraphy/id6758673452"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="coral" size="lg">
                  App Store에서 다운로드
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup className="w-[180px] md:w-[300px]">
                <div className="w-full h-full relative overflow-hidden">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={current}
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" as const }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={HERO_SCREENS[current].src}
                        alt={HERO_SCREENS[current].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 180px, 300px"
                        priority={current === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* Dot indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {HERO_SCREENS.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          i === current
                            ? "bg-coral w-4"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </PhoneMockup>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
