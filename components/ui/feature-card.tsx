import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-3xl p-6",
      "bg-white/5 backdrop-blur-xl border border-white/10",
      "shadow-lg shadow-black/5",
      "hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/10",
      "transition-all duration-500 ease-out",
      className
    )}>
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-4">
        {/* Icon container */}
        <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground/90">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
