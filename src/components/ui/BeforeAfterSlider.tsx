"use client";

import { useCallback, useRef, useState } from "react";
import { Camera, ScanFace } from "lucide-react";

interface BeforeAfterSliderProps {
  className?: string;
}

/**
 * TODO: 실제 데모 이미지로 교체 — public/images/before-after-original.jpg,
 * public/images/before-after-anon.jpg 가 추가되면 BeforePanel/AfterPanel을
 * <Image src=... fill /> 로 바꿔주세요. 현재는 톤 placeholder 사용.
 */

function BeforePanel() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-text-tertiary/20 via-text-tertiary/10 to-text-tertiary/5 flex items-center justify-center">
      <Camera
        className="w-12 h-12 text-text-tertiary/40"
        aria-hidden="true"
      />
    </div>
  );
}

function AfterPanel() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-coral/15 via-coral/8 to-coral/5 flex items-center justify-center">
      <ScanFace className="w-12 h-12 text-coral/50" aria-hidden="true" />
    </div>
  );
}

export function BeforeAfterSlider({ className }: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(55);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

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
        "relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden border border-border-light bg-card select-none touch-none cursor-ew-resize",
        className ?? "",
      ].join(" ")}
      role="slider"
      aria-label="얼굴 변경 전후 비교 슬라이더"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onMouseDown={(e) => {
        isDraggingRef.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => {
        if (isDraggingRef.current) updateFromClientX(e.clientX);
      }}
      onMouseUp={() => {
        isDraggingRef.current = false;
      }}
      onMouseLeave={() => {
        isDraggingRef.current = false;
      }}
      onTouchStart={(e) => {
        updateFromClientX(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        updateFromClientX(e.touches[0].clientX);
      }}
      onClick={(e) => updateFromClientX(e.clientX)}
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
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-text-primary/80 text-white text-xs font-semibold">
          원본
        </span>
      </div>

      {/* After (AI 변경) — 좌측에서 pos% 만큼 보임 */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <AfterPanel />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-coral text-white text-xs font-semibold">
          AI 얼굴 변경
        </span>
      </div>

      {/* 가운데 핸들 */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-coral pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-coral border-4 border-white shadow-md flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
            <path
              fill="currentColor"
              className="text-white"
              d="M8.59 7.41 7.17 8.83 10.34 12l-3.17 3.17 1.42 1.42L13.17 12 8.59 7.41zm6.82 0L13.99 8.83 17.16 12l-3.17 3.17 1.42 1.42L20 12l-4.59-4.59z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
