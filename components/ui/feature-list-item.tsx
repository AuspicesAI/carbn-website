import { cn } from "@/lib/utils";

interface FeatureListItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FeatureListItem({ children, className }: FeatureListItemProps) {
  return (
    <li className={cn("flex items-center gap-2", className)}>
      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
      {children}
    </li>
  );
}
