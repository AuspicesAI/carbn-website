import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
      "bg-gradient-to-r from-purple-100/20 via-white/15 to-purple-100/20 dark:from-purple-800/15 dark:via-white/8 dark:to-purple-800/15",
      "backdrop-blur-sm border border-purple-300/50 dark:border-purple-400/35",
      "text-foreground/80 shadow-[0_2px_8px_rgba(147,51,234,0.1)] dark:shadow-[0_2px_8px_rgba(147,51,234,0.15)]",
      className
    )}>
      {children}
    </div>
  )
}
