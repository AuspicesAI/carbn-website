import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CTASectionProps {
  badge: string;
  title: string;
  description: string;
  primaryAction: ReactNode;
  secondaryAction: ReactNode;
  stats: Array<{
    value: string;
    label: string;
    sublabel: string;
  }>;
  className?: string;
}

export function CTASection({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats,
  className
}: CTASectionProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-3xl p-8 text-center",
      "bg-white/5 backdrop-blur-xl border border-white/10",
      "shadow-lg shadow-black/5",
      className
    )}>
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-600/30 to-transparent" />
      
      <div className="relative z-10 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 backdrop-blur-sm border border-primary/20">
          <span className="text-primary font-medium text-sm">{badge}</span>
        </div>
        
        {/* Title & Description */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          {primaryAction}
          {secondaryAction}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground/90 mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
