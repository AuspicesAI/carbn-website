import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
        <GradientHeading size="lg">Contact Us</GradientHeading>
        <p className="text-xl text-muted-foreground mt-4">
          Have a question? Contact us now!
        </p>
      </GlassSection>
    </div>
  );
}