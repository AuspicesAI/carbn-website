import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl p-6",
        "bg-gradient-to-br from-purple-50/15 via-white/15 to-purple-100/15 dark:bg-gradient-to-br dark:from-purple-900/8 dark:via-white/5 dark:to-purple-800/8 backdrop-blur-xl border border-purple-300/50 dark:border-purple-400/25",
        "shadow-[0_8px_32px_rgba(147,51,234,0.1),0_8px_32px_rgba(255,255,255,0.12)] dark:shadow-[0_8px_32px_rgba(147,51,234,0.15),0_8px_32px_rgba(0,0,0,0.1)]",
        "hover:bg-gradient-to-br hover:from-purple-50/20 hover:via-white/20 hover:to-purple-100/20 dark:hover:bg-gradient-to-br dark:hover:from-purple-900/12 dark:hover:via-white/10 dark:hover:to-purple-800/12 hover:border-purple-300/60 dark:hover:border-purple-400/35 hover:shadow-[0_12px_40px_rgba(147,51,234,0.15),0_12px_40px_rgba(255,255,255,0.15)] dark:hover:shadow-[0_12px_40px_rgba(147,51,234,0.2),0_12px_40px_rgba(0,0,0,0.15)]",
        "transition-all duration-500 ease-out",
        className,
      )}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-100/12 dark:from-purple-800/8 via-transparent to-purple-50/8 dark:to-purple-900/5 opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-4">
        {/* Icon container */}
        <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground/90">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
