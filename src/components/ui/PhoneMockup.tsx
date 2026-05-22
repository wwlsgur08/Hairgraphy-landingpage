import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  className?: string;
  children?: React.ReactNode;
}

export function PhoneMockup({ className, children }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative w-[280px] rounded-[40px] border-[6px] border-text-primary bg-white overflow-hidden",
        className
      )}
      style={{ aspectRatio: "9 / 19.5" }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-text-primary rounded-full z-10" />
      {/* Screen content */}
      <div className="w-full h-full overflow-hidden">{children}</div>
    </div>
  );
}
