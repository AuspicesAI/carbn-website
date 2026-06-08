import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FeatureItem } from "@/components/ui/feature-item";
import { ContentCard } from "@/components/ui/content-card";
import { Button } from "@/components/ui/button";
import {
  FaShieldAlt,
  FaRobot,
  FaChartLine,
  FaArrowRight,
  FaUpload,
  FaFileAlt,
  FaClock,
  FaCloud,
  FaLock,
  FaSearch,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";

export default function CarbnSandboxPage() {
  return (
    <div className="space-y-16">
      <PageHero
        title="Carbn Sandbox"
        description="Automated malware analysis and threat intelligence platform powered by AI."
      />

      {/* Product Overview */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <GlassSection className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <GradientHeading size="md" className="mb-6">
                    What is Carbn Sandbox?
                  </GradientHeading>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our AI powered sandbox environment provides a secure,
                    isolated space to analyze suspicious files and malware.
                    Upload any file and receive detailed analysis reports
                    including behavioral patterns, IOCs, and threat intelligence
                    within minutes.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Built with advanced machine learning algorithms, our sandbox
                    can detect even the most sophisticated threats and provide
                    actionable insights for your security team.
                  </p>
                  <Button size="lg" className="group" asChild>
                    <Link
                      href="https://sandbox.carbn.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try It Now
                      <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <GlassSection className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                    <div className="space-y-6">
                      <FeatureItem icon={<FaShieldAlt />}>
                        Automated Payload Extraction
                      </FeatureItem>
                      <FeatureItem icon={<FaRobot />}>
                        Behavioral Analysis
                      </FeatureItem>
                      <FeatureItem icon={<FaChartLine />}>
                        Threat Intelligence Reports
                      </FeatureItem>
                      <FeatureItem icon={<FaCloud />}>
                        Cloud-Based Processing
                      </FeatureItem>
                      <FeatureItem icon={<FaLock />}>
                        Secure Environment
                      </FeatureItem>
                      <FeatureItem icon={<FaClock />}>
                        Real-time Analysis
                      </FeatureItem>
                    </div>
                  </GlassSection>
                </div>
              </div>
            </GlassSection>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GradientHeading size="md" className="mb-4">
                Key Features
              </GradientHeading>
              <p className="text-muted-foreground text-lg">
                Everything you need for comprehensive malware analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ContentCard
                icon={<FaUpload />}
                title="Upload Files"
                description="Easily upload suspicious files for comprehensive analysis."
              />
              <ContentCard
                icon={<FaSearch />}
                title="Automated Analysis"
                description="Our AI-powered engine automatically analyzes and categorizes threats."
              />
              <ContentCard
                icon={<FaFileAlt />}
                title="Detailed Reports"
                description="Receive comprehensive reports with actionable insights and recommendations."
              />
              <ContentCard
                icon={<FaDatabase />}
                title="Threat Intelligence"
                description="Access our continuously updated threat intelligence database."
              />
              <ContentCard
                icon={<FaShieldAlt />}
                title="Secure Processing"
                description="All analysis is performed in isolated, secure environments."
              />
              <ContentCard
                icon={<FaUsers />}
                title="Team Collaboration"
                description="Share findings and collaborate with your security team."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="md" className="mb-4">
              Ready to Analyze?
            </GradientHeading>
            <p className="text-lg text-muted-foreground mb-8">
              Start analyzing suspicious files today with our AI powered sandbox
              environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link
                  href="https://sandbox.carbn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Carbn Sandbox
                  <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </GlassSection>
        </Container>
      </Section>
    </div>
  );
}
