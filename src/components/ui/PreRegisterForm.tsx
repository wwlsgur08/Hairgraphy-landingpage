"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, CheckCircle, Loader2 } from "lucide-react";

interface PreRegisterFormProps {
  variant?: "light" | "dark";
}

export function PreRegisterForm({ variant = "light" }: PreRegisterFormProps) {
  const [instagramId, setInstagramId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = instagramId.trim().replace(/^@/, "");
    if (!id) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instagramId: id }),
      });
      if (res.ok) {
        setStatus("success");
        localStorage.setItem("hairgraphy_registered", id);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-2"
      >
        <CheckCircle className={`w-10 h-10 ${isDark ? "text-coral" : "text-coral"}`} />
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-primary"}`}>
          사전 예약 완료!
        </p>
        <p className={`text-sm ${isDark ? "text-white/60" : "text-text-secondary"}`}>
          출시되면 @{instagramId.replace(/^@/, "")} 으로 알려드릴게요
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <p className={`text-sm mb-3 ${isDark ? "text-white/60" : "text-text-secondary"}`}>
        인스타그램 ID만 입력하면 사전 예약 완료!
      </p>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Instagram
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
              isDark ? "text-white/40" : "text-text-secondary"
            }`}
          />
          <input
            type="text"
            value={instagramId}
            onChange={(e) => {
              setInstagramId(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="@instagram_id"
            className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all ${
              isDark
                ? "bg-white/10 text-white placeholder:text-white/30 border border-white/10 focus:border-coral"
                : "bg-white text-primary placeholder:text-text-secondary/50 border border-border-light focus:border-coral"
            }`}
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading" || !instagramId.trim()}
          className="px-5 py-3 bg-coral hover:bg-coral/90 text-white font-semibold rounded-xl text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 cursor-pointer"
        >
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "사전 예약"
          )}
        </button>
      </div>
      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-400 text-xs mt-2"
          >
            오류가 발생했어요. 다시 시도해 주세요.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
