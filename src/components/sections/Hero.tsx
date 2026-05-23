"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RecordCardMotion } from "@/components/sections/hero/RecordCardMotion";

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

          {/* Record card motion — 흩어진 조각 → 정돈된 기록 카드 */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <RecordCardMotion />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
