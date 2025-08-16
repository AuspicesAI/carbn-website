import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Badge } from "./badge";

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
      "bg-gradient-to-br from-purple-50/15 via-white/15 to-purple-100/15 dark:bg-gradient-to-br dark:from-purple-900/8 dark:via-white/5 dark:to-purple-800/8 backdrop-blur-xl border border-purple-300/50 dark:border-purple-400/25",
      "shadow-[0_8px_32px_rgba(147,51,234,0.1),0_8px_32px_rgba(255,255,255,0.12)] dark:shadow-[0_8px_32px_rgba(147,51,234,0.15),0_8px_32px_rgba(0,0,0,0.1)]",
      className
    )}>
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/12 dark:from-purple-800/8 via-transparent to-purple-200/12 dark:to-purple-700/8 rounded-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 dark:via-white/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-600/40 dark:via-purple-600/30 to-transparent" />
      
      <div className="relative z-10 space-y-8">
        {/* Badge */}
        <Badge>{badge}</Badge>
        
        {/* Title & Description */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white/80 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
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
            <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/12 via-white/12 to-purple-50/12 dark:bg-gradient-to-br dark:from-purple-900/8 dark:via-white/5 dark:to-purple-900/8 backdrop-blur-sm border border-purple-300/40 dark:border-purple-400/25">
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
