import { GlassyIcon } from "@/components/ui/glassy-icon";
import { cn } from "@/lib/utils";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function ContactInfoItem({
  icon,
  title,
  content,
  subtitle,
  className,
}: ContactInfoItemProps) {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      <GlassyIcon icon={icon} size="sm" />
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <div className="text-muted-foreground">{content}</div>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
