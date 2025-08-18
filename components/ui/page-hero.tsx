import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
  spacing?: "sm" | "md" | "lg";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl";
}

export function PageHero({
  title,
  description,
  className,
  spacing = "lg",
  maxWidth = "4xl",
}: PageHeroProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
  };

  return (
    <Section spacing={spacing} className={cn("pb-6", className)}>
      <Container>
        <div className={cn("mx-auto text-center", maxWidthClasses[maxWidth])}>
          <GradientHeading size="lg">{title}</GradientHeading>
          {description && (
            <p className="text-xl text-muted-foreground mt-4">{description}</p>
          )}
        </div>
      </Container>
    </Section>
  );
}
