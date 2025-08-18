import { GlassSection } from "@/components/ui/glass-section";
import { GlassyIcon } from "@/components/ui/glassy-icon";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconSize?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function ContentCard({
  icon,
  title,
  description,
  iconSize = "md",
  className,
  children,
}: ContentCardProps) {
  return (
    <GlassSection className={cn("p-6", className)}>
      <div className="text-center">
        <GlassyIcon icon={icon} size={iconSize} className="mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {children}
      </div>
    </GlassSection>
  );
}
