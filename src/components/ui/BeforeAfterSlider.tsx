"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  className?: string;
}

function BeforePanel() {
  return (
    <Image
      src="/images/before.png"
      alt="AI 얼굴 변경 전 — 원본 시술 사진"
      fill
      sizes="(max-width: 768px) 80vw, 300px"
      className="object-cover"
      priority
    />
  );
}

function AfterPanel() {
  return (
    <Image
      src="/images/after.png"
      alt="AI 얼굴 변경 후 — 얼굴만 자연스럽게 변경"
      fill
      sizes="(max-width: 768px) 80vw, 300px"
      className="object-cover"
    />
  );
}

export function BeforeAfterSlider({ className }: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    const next = Math.max(0, Math.min(100, ratio * 100));
    setPos(next);
  }, []);

  return (
    <div
      ref={containerRef}
      className={[
        "relative w-full max-w-[300px] aspect-[1569/3394] rounded-[2rem] overflow-hidden border border-border-light bg-card select-none touch-none",
        dragging ? "cursor-grabbing" : "cursor-grab",
        className ?? "",
      ].join(" ")}
      role="slider"
      aria-label="얼굴 변경 전후 비교 슬라이더"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        setDragging(true);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
        updateFromClientX(e.clientX);
      }}
      onPointerUp={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
        setDragging(false);
      }}
      onPointerCancel={() => setDragging(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setPos((p) => Math.max(0, p - 4));
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          setPos((p) => Math.min(100, p + 4));
        } else if (e.key === "Home") {
          e.preventDefault();
          setPos(0);
        } else if (e.key === "End") {
          e.preventDefault();
          setPos(100);
        }
      }}
    >
      {/* Before (원본) — 전체에 깔림 */}
      <div className="absolute inset-0">
        <BeforePanel />
        <span className="absolute top-[14%] left-3 px-2.5 py-1 rounded-md bg-text-primary/80 text-white text-xs font-semibold z-10">
          원본
        </span>
      </div>

      {/* After (AI 변경) — 좌측에서 pos% 만큼 보임 */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <AfterPanel />
        <span className="absolute top-[14%] left-3 px-2.5 py-1 rounded-md bg-coral text-white text-xs font-semibold z-10">
          AI 얼굴 변경
        </span>
      </div>

      {/* 가운데 핸들 */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div
          className={[
            "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-coral border-4 border-white shadow-lg flex items-center justify-center transition-transform duration-150",
            dragging ? "scale-110" : "scale-100",
          ].join(" ")}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path
              fill="#fff"
              d="M8.59 7.41 7.17 8.83 10.34 12l-3.17 3.17 1.42 1.42L13.17 12 8.59 7.41zm6.82 0L13.99 8.83 17.16 12l-3.17 3.17 1.42 1.42L20 12l-4.59-4.59z"
            />
          </svg>
        </div>
        {/* 드래그 안내 — 처음에만 보였다가 잡으면 사라짐 */}
        <span
          className={[
            "absolute left-1/2 -translate-x-1/2 bottom-[12%] whitespace-nowrap px-3 py-1.5 rounded-full bg-text-primary/85 text-white text-xs font-semibold shadow-md transition-opacity duration-300",
            dragging ? "opacity-0" : "opacity-100",
          ].join(" ")}
        >
          ← 드래그해서 비교 →
        </span>
      </div>
    </div>
  );
}
