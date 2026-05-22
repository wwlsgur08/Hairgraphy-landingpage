"use client";

import { cn } from "@/lib/utils";

const STORE_URLS = {
  apple: "https://apps.apple.com/kr/app/hairgraphy/id6758673452",
  google: "",
};

interface StoreButtonProps {
  store: "apple" | "google";
  className?: string;
}

export function StoreButton({ store, className }: StoreButtonProps) {
  return (
    <a
      href={STORE_URLS[store]}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card text-text-primary hover:bg-background border border-border transition-colors duration-200 cursor-pointer",
        className
      )}
    >
      {store === "apple" ? (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M3.18 23.48c-.48-.28-.77-.8-.77-1.36V1.88c0-.56.29-1.08.77-1.36l11.15 11.48L3.18 23.48zM15.55 15.21l-2.46-2.52 2.46-2.52 3.51 2.03c.51.29.51.77 0 1.07l-3.51 1.94zM13.09 12l-9.12 9.38 12.6-7.28L13.09 12zM13.09 12L3.97 2.62l12.6 7.27L13.09 12z" />
        </svg>
      )}
      <div className="text-left">
        <div className="text-[10px] text-text-tertiary">
          {store === "apple" ? "App Store에서" : "Google Play에서"}
        </div>
        <div className="text-sm font-semibold -mt-0.5">
          {store === "apple" ? "다운로드" : "다운로드"}
        </div>
      </div>
    </a>
  );
}
