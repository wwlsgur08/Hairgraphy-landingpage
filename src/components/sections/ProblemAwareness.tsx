"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  Image as ImageIcon,
  StickyNote,
  MessageCircle,
  Grid3x3,
} from "lucide-react";

type Item = {
  icon: typeof ImageIcon;
  caption: string;
  rotateDesktop: string;
  translateDesktop: string;
  Preview: () => React.ReactElement;
};

const GalleryPreview = () => (
  <div className="grid grid-cols-2 gap-1 aspect-[4/3] w-full">
    <div className="rounded-md bg-gradient-to-br from-text-tertiary/15 to-text-tertiary/5" />
    <div className="rounded-md bg-gradient-to-br from-text-tertiary/20 to-text-tertiary/10" />
    <div className="rounded-md bg-gradient-to-br from-text-tertiary/10 to-text-tertiary/5" />
    <div className="rounded-md bg-gradient-to-br from-text-tertiary/25 to-text-tertiary/10" />
  </div>
);

const MemoPreview = () => (
  <div className="aspect-[4/3] w-full rounded-md bg-amber-50/70 border border-amber-200/60 p-3 flex flex-col gap-2 justify-center">
    <div className="h-2 rounded-full bg-amber-300/40 w-[85%]" />
    <div className="h-2 rounded-full bg-amber-300/40 w-[60%]" />
    <div className="h-2 rounded-full bg-amber-300/40 w-[92%]" />
    <div className="h-2 rounded-full bg-amber-300/40 w-[45%]" />
  </div>
);

const MemoryPreview = () => (
  <div className="aspect-[4/3] w-full rounded-md bg-text-tertiary/5 p-3 flex flex-col gap-2 justify-center opacity-70">
    <div className="self-start max-w-[80%] px-3 py-2 rounded-2xl rounded-bl-sm bg-card border border-border-light">
      <div className="flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary/60" />
      </div>
    </div>
    <div className="self-end max-w-[60%] px-3 py-2 rounded-2xl rounded-br-sm bg-coral/10 border border-coral/15">
      <div className="h-1.5 rounded-full bg-coral/30 w-full" />
    </div>
  </div>
);

const InstaPreview = () => (
  <div className="grid grid-cols-3 gap-0.5 aspect-[4/3] w-full">
    {Array.from({ length: 9 }).map((_, i) => (
      <div
        key={i}
        className="rounded-sm bg-gradient-to-br from-text-tertiary/15 to-text-tertiary/5"
      />
    ))}
  </div>
);

const ITEMS: Item[] = [
  {
    icon: ImageIcon,
    caption: "갤러리에는 사진이 쌓이고,",
    rotateDesktop: "md:-rotate-[3deg]",
    translateDesktop: "md:translate-y-2",
    Preview: GalleryPreview,
  },
  {
    icon: StickyNote,
    caption: "레시피는 메모장에 흩어지고,",
    rotateDesktop: "md:rotate-[2deg]",
    translateDesktop: "md:-translate-y-3",
    Preview: MemoPreview,
  },
  {
    icon: MessageCircle,
    caption: "고객 반응은 기억에 남고,",
    rotateDesktop: "md:-rotate-[2deg]",
    translateDesktop: "md:-translate-y-1",
    Preview: MemoryPreview,
  },
  {
    icon: Grid3x3,
    caption: "인스타 업로드는 또 따로 고민합니다.",
    rotateDesktop: "md:rotate-[3deg]",
    translateDesktop: "md:translate-y-4",
    Preview: InstaPreview,
  },
];

export function ProblemAwareness() {
  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      {/* 옅은 페리윙클 블롭 — 거의 안 보일 정도 */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-coral/[0.04] blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative">
        <ScrollReveal className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-snug">
            지금 이런 식으로
            <br className="md:hidden" />
            {" "}기록하고 있지 않나요?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 md:gap-12 max-w-3xl md:max-w-4xl mx-auto">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            const Preview = item.Preview;
            return (
              <ScrollReveal key={item.caption} delay={index * 0.08}>
                <div
                  className={[
                    "bg-card rounded-xl border border-border p-4 md:p-5 shadow-sm",
                    "transition-transform duration-300 hover:-translate-y-1",
                    item.rotateDesktop,
                    item.translateDesktop,
                  ].join(" ")}
                >
                  <Preview />
                  <div className="flex items-center gap-2 mt-4">
                    <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                      <Icon
                        className="w-3.5 h-3.5 md:w-4 md:h-4 text-coral"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="text-sm md:text-base font-semibold text-text-primary">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
