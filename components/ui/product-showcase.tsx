import { cn } from "@/lib/utils";
import { ReactNode } from "react";

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
      "bg-white/5 backdrop-blur-xl border border-white/10",
      "shadow-lg shadow-black/5",
      className
    )}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 backdrop-blur-sm border border-primary/20">
            <span className="text-primary font-medium text-sm">{badge}</span>
          </div>
          
          {/* Title & Description */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent leading-tight">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
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
