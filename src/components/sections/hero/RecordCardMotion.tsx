"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Camera, Calendar, Beaker, User, FileText } from "lucide-react";

interface PieceDef {
  key: string;
  /** final left (px) within the 320x400 container */
  left: number;
  /** final top (px) within the 320x400 container */
  top: number;
  /** scattered start offset from final */
  offsetX: number;
  offsetY: number;
  rotateStart: number;
  zIndex: number;
  delay: number;
  render: () => ReactNode;
}

const PIECES: PieceDef[] = [
  {
    key: "photo",
    left: 50,
    top: 30,
    offsetX: -60,
    offsetY: -30,
    rotateStart: -10,
    zIndex: 1,
    delay: 0,
    render: () => (
      <div className="w-[220px] h-[130px] rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="w-full h-full bg-gradient-to-br from-text-tertiary/15 to-text-tertiary/5 flex items-center justify-center">
          <Camera className="w-7 h-7 text-text-tertiary/40" aria-hidden="true" />
        </div>
      </div>
    ),
  },
  {
    key: "date",
    left: 200,
    top: 50,
    offsetX: 60,
    offsetY: -40,
    rotateStart: 14,
    zIndex: 3,
    delay: 0.08,
    render: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-coral text-white shadow-sm">
        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="text-xs font-semibold">11.18 火</span>
      </div>
    ),
  },
  {
    key: "recipe",
    left: 85,
    top: 180,
    offsetX: -100,
    offsetY: 20,
    rotateStart: -7,
    zIndex: 2,
    delay: 0.16,
    render: () => (
      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border-light shadow-sm">
        <Beaker className="w-4 h-4 text-coral shrink-0" aria-hidden="true" />
        <span className="text-sm font-semibold text-text-primary">9N + 8.3 / 30분</span>
      </div>
    ),
  },
  {
    key: "customer",
    left: 50,
    top: 240,
    offsetX: 120,
    offsetY: 40,
    rotateStart: 11,
    zIndex: 2,
    delay: 0.24,
    render: () => (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-coral/10 border border-coral/20">
        <User className="w-3 h-3 text-coral" aria-hidden="true" />
        <span className="text-xs font-semibold text-coral">김O원님</span>
      </div>
    ),
  },
  {
    key: "note",
    left: 130,
    top: 290,
    offsetX: -90,
    offsetY: 60,
    rotateStart: -5,
    zIndex: 2,
    delay: 0.32,
    render: () => (
      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border-light shadow-sm max-w-[170px]">
        <FileText className="w-4 h-4 text-coral shrink-0" aria-hidden="true" />
        <span className="text-xs text-text-primary">처음보다 5톤 밝게</span>
      </div>
    ),
  },
];

export function RecordCardMotion() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-[320px] h-[400px] mx-auto select-none">
      {/* 정돈된 단계에서 등장하는 통합 카드 보더 */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-2 top-4 bottom-6 rounded-2xl border border-border-light bg-card/40 pointer-events-none"
        initial={reduce ? false : { opacity: 0 }}
        animate={
          reduce ? { opacity: 1 } : { opacity: [0, 0, 0.6, 1] }
        }
        transition={
          reduce
            ? undefined
            : {
                duration: 3.4,
                times: [0, 0.4, 0.75, 1],
                ease: "easeOut",
              }
        }
      />

      {PIECES.map((p) => {
        const initial = reduce
          ? false
          : {
              x: p.offsetX,
              y: p.offsetY,
              rotate: p.rotateStart,
              opacity: 0,
            };
        const animate = reduce
          ? { x: 0, y: 0, rotate: 0, opacity: 1 }
          : {
              x: [p.offsetX, p.offsetX, 0, 0],
              y: [p.offsetY, p.offsetY, 0, 0],
              rotate: [p.rotateStart, p.rotateStart, 0, 0],
              opacity: [0, 1, 1, 1],
            };
        const transition = reduce
          ? undefined
          : {
              duration: 3.2,
              times: [0, 0.25, 0.7, 1],
              ease: "easeOut" as const,
              delay: p.delay,
            };

        return (
          <motion.div
            key={p.key}
            className="absolute"
            style={{ left: p.left, top: p.top, zIndex: p.zIndex }}
            initial={initial}
            animate={animate}
            transition={transition}
          >
            {p.render()}
          </motion.div>
        );
      })}
    </div>
  );
}
