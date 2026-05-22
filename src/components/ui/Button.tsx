import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "coral" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer",
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary-light",
        variant === "coral" &&
          "bg-coral text-white hover:bg-coral-dark",
        variant === "outline" &&
          "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
