import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
        <GradientHeading size="lg">Our Products</GradientHeading>
        <p className="text-xl text-muted-foreground mt-4">
          Have a specific concern? We’re ready to build a custom solution immediately.
        </p>
      </GlassSection>
    </div>
  );
}
