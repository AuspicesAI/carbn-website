import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success" | "info";
  className?: string;
}

export function StatusBadge({
  icon,
  children,
  variant = "default",
  className,
}: StatusBadgeProps) {
  const variantClasses = {
    default: "bg-primary/10 text-primary",
    warning: "bg-orange-500/10 text-orange-500",
    success: "bg-green-500/10 text-green-500",
    info: "bg-blue-500/10 text-blue-500",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
        variantClasses[variant],
        className,
      )}
    >
      {icon && <div className="w-3 h-3">{icon}</div>}
      {children}
    </div>
  );
}
