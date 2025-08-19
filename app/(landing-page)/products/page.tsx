import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FeatureItem } from "@/components/ui/feature-item";
import { Button } from "@/components/ui/button";
import {
  FaArrowRight,
  FaRocket,
  FaLaptop,
  FaCloud,
  FaExternalLinkAlt,
  FaMask,
  FaBrain,
} from "react-icons/fa";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Our Products"
        description="Our products are designed to help you protect your digital assets and infrastructure."
      />

      {/* Featured Product */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <GlassSection className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Available Now
                  </div> */}
                  <GradientHeading size="md" className="mb-4">
                    AuspicesAI Sandbox
                  </GradientHeading>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Upload suspicious files and get comprehensive analysis
                    reports in minutes. Our AI powered sandbox environment
                    safely executes and analyzes malware to extract IOCs,
                    behaviors, and threat intelligence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group" asChild>
                      <Link
                        href="https://sandbox.auspicesai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Try It Now
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="dark:shadow-none hover:dark:shadow-none"
                    >
                      <Link href="/products/auspicesai-sandbox">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <GlassSection className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                    <div className="space-y-4">
                      <FeatureItem icon={<FaExternalLinkAlt />}>
                        Automated Payload Extraction
                      </FeatureItem>
                      <FeatureItem icon={<FaMask />}>
                        Behavioral Analysis
                      </FeatureItem>
                      <FeatureItem icon={<FaBrain />}>
                        Threat Intelligence Reports
                      </FeatureItem>
                    </div>
                  </GlassSection>
                </div>
              </div>
            </GlassSection>
          </div>
        </Container>
      </Section>

      {/* Research & Innovation */}
      <Section spacing="sm">
        <Container>
          <div className="max-w-6xl mx-auto">
            <GlassSection className="p-8 md:p-12 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-xl animate-pulse" />
                <div
                  className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-primary/15 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 backdrop-blur-sm border border-primary/30 mb-6">
                  <FaRocket className="w-4 h-4 text-primary mr-2 animate-bounce" />
                  <span className="text-primary font-semibold text-sm">
                    Building In Progress
                  </span>
                </div>

                <GradientHeading size="lg" className="mb-6">
                  We are doing it the right way
                </GradientHeading>

                <p className="text-muted-foreground text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                  Stop wasting time and money on old technologies. We&apos;re building it the right way.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-purple-600/5 backdrop-blur-sm border border-primary/10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center mb-4">
                      <FaLaptop className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-3 text-lg">
                      Endpoint Security
                    </h4>
                    <p className="text-muted-foreground text-center leading-relaxed">
                        Ever dreamt of an EDR/XDR solution that won&apos;t cost you an arm and a leg? We are working on it.
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-purple-600/5 backdrop-blur-sm border border-primary/10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center mb-4">
                      <FaBrain className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-3 text-lg">
                      Threat Intelligence
                    </h4>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Gathering bulk data from the dark web and OSINT sources to provide insights and alerts.
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-purple-600/5 backdrop-blur-sm border border-primary/10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center mb-4">
                      <FaCloud className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-3 text-lg">
                      Cloud Security
                    </h4>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      The cloud is not immune to attacks. We are here to help you secure your cloud environment.
                    </p>
                  </div>
                </div>
              </div>
            </GlassSection>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="md" className="mb-4">
              Ready to Secure Your Future?
            </GradientHeading>
            <p className="text-lg text-muted-foreground mb-6">
              Have a specific concern? We&apos;re ready to build a custom
              solution immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Contact
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </GlassSection>
        </Container>
      </Section>
    </div>
  );
}
