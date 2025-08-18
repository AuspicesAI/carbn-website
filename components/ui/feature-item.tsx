import { cn } from "@/lib/utils";

interface FeatureItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  iconSize?: "sm" | "md" | "lg";
  className?: string;
}

export function FeatureItem({
  icon,
  children,
  iconSize = "md",
  className,
}: FeatureItemProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const iconClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "rounded-full bg-primary/20 flex items-center justify-center",
          sizeClasses[iconSize],
        )}
      >
        <div className={cn("text-primary", iconClasses[iconSize])}>{icon}</div>
      </div>
      <span className="text-sm text-muted-foreground">{children}</span>
    </div>
  );
}
