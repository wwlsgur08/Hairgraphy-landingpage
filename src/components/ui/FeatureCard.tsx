import type { Feature } from "@/types";

export function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="bg-card rounded-xl p-4 md:p-8 hover:-translate-y-1 transition-transform duration-300 border border-border-light">
      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
          <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-coral" />
        </div>
        <h3 className="text-sm md:text-lg font-bold text-text-primary">{title}</h3>
      </div>
      <p className="text-text-secondary text-xs md:text-base leading-relaxed">{description}</p>
    </div>
  );
}
