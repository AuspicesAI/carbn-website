import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Badge } from "./badge";

interface ProductShowcaseProps {
  badge: string;
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  primaryAction: ReactNode;
  secondaryAction: ReactNode;
  mockup: ReactNode;
  className?: string;
}

export function ProductShowcase({
  badge,
  title,
  description,
  features,
  primaryAction,
  secondaryAction,
  mockup,
  className
}: ProductShowcaseProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-3xl p-8",
      "bg-gradient-to-br from-purple-50/15 via-white/15 to-purple-100/15 dark:bg-gradient-to-br dark:from-purple-900/8 dark:via-white/5 dark:to-purple-800/8 backdrop-blur-xl border border-purple-300/50 dark:border-purple-400/25",
      "shadow-[0_8px_32px_rgba(147,51,234,0.1),0_8px_32px_rgba(255,255,255,0.12)] dark:shadow-[0_8px_32px_rgba(147,51,234,0.15),0_8px_32px_rgba(0,0,0,0.1)]",
      className
    )}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/12 dark:from-purple-800/8 via-transparent to-purple-200/12 dark:to-purple-700/8 rounded-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 dark:via-white/20 to-transparent" />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          {/* Badge */}
          <Badge>{badge}</Badge>
          
          {/* Title & Description */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white/80 bg-clip-text text-transparent leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50/12 via-white/12 to-purple-50/12 dark:bg-gradient-to-r dark:from-purple-900/8 dark:via-white/5 dark:to-purple-900/8 backdrop-blur-sm border border-purple-300/40 dark:border-purple-400/25">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-600 mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground/90 mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {primaryAction}
            {secondaryAction}
          </div>
        </div>
        
        {/* Mockup */}
        <div className="relative">
          {mockup}
        </div>
      </div>
    </div>
  );
}
