"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  AnimatePresence,
} from "motion/react";
import { Camera, FileText, Users } from "lucide-react";
import { RecordCardMotion } from "@/components/sections/hero/RecordCardMotion";

type Step = {
  copy: string;
  Visual: () => ReactNode;
};

function PhotoPileVisual() {
  const tiles = [
    { left: 30, top: 50, rot: -8 },
    { left: 110, top: 20, rot: 5 },
    { left: 60, top: 150, rot: -3 },
    { left: 150, top: 130, rot: 9 },
  ];
  return (
    <div className="relative w-[300px] h-[360px] mx-auto">
      {tiles.map((t, i) => (
        <div
          key={i}
          className="absolute w-[140px] h-[180px] rounded-xl border border-border bg-card overflow-hidden shadow-sm"
          style={{ left: t.left, top: t.top, transform: `rotate(${t.rot}deg)` }}
        >
          <div className="w-full h-full bg-gradient-to-br from-text-tertiary/15 to-text-tertiary/5 flex items-center justify-center">
            <Camera
              className="w-6 h-6 text-text-tertiary/40"
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MemoScatterVisual() {
  const memos = [
    { text: "9N + 8.3 / 30분", x: 20, y: 40, rot: -7 },
    { text: "톤다운 0.5", x: 170, y: 30, rot: 6 },
    { text: "방치 25분", x: 60, y: 140, rot: -3 },
    { text: "처음보다 5톤 밝게", x: 30, y: 240, rot: 8 },
    { text: "메이크업 위주", x: 160, y: 220, rot: -4 },
  ];
  return (
    <div className="relative w-[300px] h-[360px] mx-auto">
      {memos.map((m, i) => (
        <div
          key={i}
          className="absolute inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border-light shadow-sm"
          style={{ left: m.x, top: m.y, transform: `rotate(${m.rot}deg)` }}
        >
          <FileText
            className="w-3.5 h-3.5 text-text-tertiary shrink-0"
            aria-hidden="true"
          />
          <span className="text-sm font-medium text-text-primary whitespace-nowrap">
            {m.text}
          </span>
        </div>
      ))}
    </div>
  );
}

function EmptyCustomerVisual() {
  return (
    <div className="relative w-[300px] h-[360px] mx-auto flex items-center justify-center">
      <div className="w-[260px] h-[300px] rounded-xl border-2 border-dashed border-border bg-card/40 p-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-text-tertiary/10 flex items-center justify-center">
            <Users
              className="w-5 h-5 text-text-tertiary/40"
              aria-hidden="true"
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-3 rounded-full bg-text-tertiary/15 w-3/4" />
            <div className="h-2 rounded-full bg-text-tertiary/10 w-1/2" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-2 text-text-tertiary/50">
          <span className="text-2xl">?</span>
          <span className="text-xs">기록 없음</span>
        </div>
      </div>
    </div>
  );
}

function CombinedVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  return (
    <div ref={ref} className="w-[320px] h-[400px] mx-auto">
      {inView ? (
        <RecordCardMotion />
      ) : (
        <div className="w-full h-full" aria-hidden="true" />
      )}
    </div>
  );
}

const STEPS: Step[] = [
  { copy: "사진은 갤러리에 묻히고", Visual: PhotoPileVisual },
  { copy: "레시피는 메모장에 흩어지고", Visual: MemoScatterVisual },
  { copy: "고객 기록은 기억에 남습니다", Visual: EmptyCustomerVisual },
  {
    copy: "Hairgraphy는 이걸 하나의 기록으로 묶습니다.",
    Visual: CombinedVisual,
  },
];

const STEP_INTERVAL_MS = 3000;

export function ProblemSolutionScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // 데스크탑 섹션이 화면에 충분히 보일 때만 자동 순환 (off-screen 에서 불필요한 갱신 방지)
  useEffect(() => {
    if (reduce) return;
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(!!entry?.isIntersecting);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce]);

  useEffect(() => {
    if (!isInView || reduce) return;
    const id = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, STEP_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isInView, reduce]);

  // reduced-motion: 모든 step을 정적 row stack으로
  if (reduce) {
    return (
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-16 md:space-y-20">
          {STEPS.map((s, i) => {
            const Visual = s.Visual;
            const isLast = i === STEPS.length - 1;
            return (
              <div
                key={s.copy}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div>
                  <span
                    className={`text-xs font-bold mb-3 block ${
                      isLast ? "text-coral" : "text-text-tertiary"
                    }`}
                  >
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`text-xl md:text-3xl font-bold leading-tight ${
                      isLast ? "text-text-primary" : "text-text-primary"
                    }`}
                  >
                    {s.copy}
                  </h3>
                </div>
                <div className="flex justify-center">
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Desktop: 시간 기반 자동 순환 (스크롤락 없음) */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative bg-surface"
        aria-label="문제에서 해결로 이어지는 단계별 설명"
      >
        <div className="h-screen flex items-center overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-2 gap-12 items-center">
            {/* 좌측 카피 */}
            <div className="relative h-[320px]">
              {STEPS.map((s, i) => {
                const isLast = i === STEPS.length - 1;
                const active = i === activeStep;
                return (
                  <motion.div
                    key={s.copy}
                    className="absolute inset-0 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{
                      opacity: active ? 1 : 0,
                      y: active ? 0 : 16,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <span
                      className={`text-sm font-bold mb-4 ${
                        isLast ? "text-coral" : "text-text-tertiary"
                      }`}
                    >
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-3xl xl:text-4xl font-bold text-text-primary leading-tight">
                      {s.copy}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            {/* 우측 비주얼 */}
            <div className="relative h-[450px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute"
                >
                  {(() => {
                    const Visual = STEPS[activeStep].Visual;
                    return <Visual />;
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet: vertical stack with fade-in */}
      <section
        className="lg:hidden py-16 md:py-20 bg-surface"
        aria-label="문제에서 해결로 이어지는 단계별 설명"
      >
        <div className="max-w-3xl mx-auto px-4 space-y-16 md:space-y-20">
          {STEPS.map((s, i) => {
            const Visual = s.Visual;
            const isLast = i === STEPS.length - 1;
            return (
              <motion.div
                key={s.copy}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center gap-6"
              >
                <div>
                  <span
                    className={`text-xs font-bold mb-2 block ${
                      isLast ? "text-coral" : "text-text-tertiary"
                    }`}
                  >
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary leading-tight">
                    {s.copy}
                  </h3>
                </div>
                <Visual />
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
