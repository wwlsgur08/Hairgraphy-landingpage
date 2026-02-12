import type { Testimonial } from "@/types";

export function TestimonialCard({ name, role, quote }: Testimonial) {
  return (
    <div className="bg-card rounded-xl p-4 md:p-6 border border-border-light relative pl-8 md:pl-10">
      {/* Coral accent bar */}
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-coral rounded-r-full" />
      <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-3 md:mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center">
          <span className="text-coral font-bold text-sm">{name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-text-primary text-sm">{name}</p>
          <p className="text-text-tertiary text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
