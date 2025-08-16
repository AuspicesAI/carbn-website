import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaShieldAlt, FaRobot, FaChartLine, FaArrowRight } from 'react-icons/fa';
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Section spacing="lg">
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="lg">Our Products</GradientHeading>
            <p className="text-xl text-muted-foreground mt-4">
              Our products are designed to help you protect your digital assets and infrastructure.
            </p>
          </GlassSection>
        </Container>
      </Section>

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
                    Upload suspicious files and get comprehensive analysis reports in minutes. Our AI powered sandbox environment safely executes and analyzes malware to extract IOCs, behaviors, and threat intelligence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group" asChild>
                      <Link href="https://sandbox.auspicesai.com" target="_blank" rel="noopener noreferrer">
                        Try It Now
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/products/auspicesai-sandbox">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <GlassSection className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <FaShieldAlt className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">Automated Payload Extraction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <FaRobot className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">Behavioral Analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <FaChartLine className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">Threat Intelligence Reports</span>
                      </div>
                    </div>
                  </GlassSection>
                </div>
              </div>
            </GlassSection>
          </div>
        </Container>
      </Section>

      {/* Coming Soon Products */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GradientHeading size="md" className="mb-4">Coming Soon</GradientHeading>
              <p className="text-muted-foreground text-lg">
                New products and services are on the way!
              </p>
            </div>
            
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GlassSection className="p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium">
                    <FaClock className="w-3 h-3" />
                    Soon
                  </div>
                </div>
                <IconCard
                  icon={<FaRobot />}
                  title="AI Incident Response"
                  description="Intelligent automation that responds to security incidents instantly, minimizing damage and reducing response time from hours to seconds."
                />
                <Button variant="outline" className="w-full mt-4" disabled>
                  Notify Me
                </Button>
              </GlassSection>
              
              <GlassSection className="p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium">
                    <FaClock className="w-3 h-3" />
                    Soon
                  </div>
                </div>
                <IconCard
                  icon={<FaCloud />}
                  title="Cloud Security Suite"
                  description="Comprehensive cloud protection with AI driven monitoring, compliance management, and secure infrastructure deployment."
                />
                <Button variant="outline" className="w-full mt-4" disabled>
                  Notify Me
                </Button>
              </GlassSection>
              
              <GlassSection className="p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium">
                    <FaClock className="w-3 h-3" />
                    Soon
                  </div>
                </div>
                <IconCard
                  icon={<FaLock />}
                  title="Zero Trust Platform"
                  description="Implementation of zero trust security models with AI enhanced verification and continuous monitoring capabilities."
                />
                <Button variant="outline" className="w-full mt-4" disabled>
                  Notify Me
                </Button>
              </GlassSection>
            </div> */}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="md" className="mb-4">Ready to Secure Your Future?</GradientHeading>
            <p className="text-lg text-muted-foreground mb-6">
              Have a specific concern? We’re ready to build a custom solution immediately.
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
