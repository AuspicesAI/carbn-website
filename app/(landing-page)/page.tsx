import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { ProductShowcase } from "@/components/ui/product-showcase";
import { BrowserMockup } from "@/components/ui/browser-mockup";
import { CTASection } from "@/components/ui/cta-section";
import {
  Shield,
  Zap,
  Eye,
  Target,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FeaturesGrid } from "@/components/ui/features-grid";

export default function IndexPage() {
  return (
    <>
      <Hero
        capsuleText="Defensive solutions that keep you protected"
        title="Security That Is Not Artificial"
        subtitle="Concerned about AI tools such as code generating models being used to breach your security?"
        primaryCtaText="Try Free Malware Sandbox"
        primaryCtaLink="https://sandbox.auspicesai.com"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/products"
        credits={
          <>
            Have a specific concern? We&apos;re ready to build a custom solution
            immediately.
          </>
        }
      />

      {/* Why Choose Us Section */}
      <Section spacing="lg">
        <Container>
          <SectionHeader
            title="Why AI Security Matters Now"
            description="As AI tools become more sophisticated, so do the threats. Stay ahead with defensive solutions built by security experts."
          />
          <FeaturesGrid
            items={[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Advanced Threat Detection",
                description:
                  "Identify AI-generated malware and sophisticated attack vectors before they compromise your systems.",
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Real-Time Analysis",
                description:
                  "Get instant insights with our automated analysis platform that works 24/7 to keep you protected.",
              },
              {
                icon: <Eye className="w-8 h-8 text-primary" />,
                title: "Deep Visibility",
                description:
                  "Understand exactly what threats are targeting your organization with detailed forensic analysis.",
              },
              {
                icon: <Target className="w-8 h-8 text-primary" />,
                title: "Precision Defense",
                description:
                  "Custom solutions tailored to your specific security challenges and threat landscape.",
              },
            ]}
          />
        </Container>
      </Section>

      {/* Featured Product Section */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-7xl mx-auto">
            <ProductShowcase
              badge="Featured Product"
              title="Automated Malware Analysis"
              description="Upload suspicious files and get comprehensive analysis reports in minutes. Our AI powered sandbox environment safely executes and analyzes malware to extract IOCs, behaviors, and threat intelligence."
              features={[
                {
                  title: "Automated Payload Extraction",
                  description:
                    "Advanced deobfuscation and unpacking techniques",
                },
                {
                  title: "Behavioral Analysis",
                  description:
                    "Isolated sandbox environment with full monitoring",
                },
                {
                  title: "Threat Intelligence",
                  description: "IOC extraction and YARA rule generation",
                },
              ]}
              primaryAction={
                <Button size="lg" className="text-lg px-8 py-4" asChild>
                  <Link
                    href="https://sandbox.auspicesai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Free Sandbox <ExternalLink className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              }
              mockup={<BrowserMockup />}
            />
          </div>
        </Container>
      </Section>

      {/* Call to Action Section */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-5xl mx-auto">
            <CTASection
              badge="Start Your Security Journey"
              title="Ready to Secure Your Digital Assets?"
              description="Don't take our word for it, try it out for yourself."
              primaryAction={
                <Button size="lg" className="text-lg px-10 py-5" asChild>
                  <Link
                    href="https://sandbox.auspicesai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Free Analysis{" "}
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              }
              secondaryAction={
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-5 dark:shadow-none hover:dark:shadow-none"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              }
              stats={[
                {
                  value: "✨",
                  label: "Free to Use",
                  sublabel: "No hidden costs or limitations",
                },
                {
                  value: "⚙️",
                  label: "Automated Analysis",
                  sublabel: "Upload files and leave it to us",
                },
                {
                  value: "🤖",
                  label: "AI Powered",
                  sublabel: "Ask questions and get answers",
                },
              ]}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
