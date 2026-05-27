"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const HERO_SCREENS = [
  { src: "/images/1-1.png", alt: "헤어그래피 앱 메인 화면 - 헤어 디자이너 시술 기록" },
  { src: "/images/1-2.png", alt: "헤어그래피 시술 기록 입력 화면 - 사진과 메모로 30초 기록" },
  { src: "/images/1-3.png", alt: "헤어그래피 고객 관리 화면 - 시술 이력 타임라인" },
  { src: "/images/1-4.png", alt: "헤어그래피 포트폴리오 화면 - 디자이너 작업물 정리" },
  { src: "/images/1-5.png", alt: "헤어그래피 AI 얼굴 비식별화 화면 - 초상권 부담 없는 SNS 업로드" },
  { src: "/images/1-6.png", alt: "헤어그래피 멀티 타이머 화면 - 동시 시술 시간 관리" },
];

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
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge>헤어 디자이너를 위한 기록 앱</Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-4xl lg:text-[44px] font-bold leading-tight mt-5 md:mt-6 mb-4 md:mb-6"
            >
              좋은 시술이 한 번으로 끝나지 않게.
              <br className="hidden md:block" />
              {" "}매일의 시술을 나의 <span className="text-coral">포트폴리오 자산</span>으로.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-text-secondary leading-relaxed mb-6 md:mb-8 max-w-xl"
            >
              Hairgraphy는 헤어 디자이너가 매일의 시술을 기록하고, 다시 찾고,
              {" "}상담과 인스타 업로드에 바로 활용할 수 있게 돕는 개인 기록 앱입니다.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <Link href="/android">
                <Button variant="primary" size="lg">
                  Android 다운로드
                </Button>
              </Link>
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

          {/* Phone mockup — 6개 화면 자동 순환 */}
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
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === current ? "bg-coral w-4" : "bg-white/50 w-1.5"
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
