import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaShieldAlt, FaRobot, FaChartLine, FaArrowRight, FaUpload, FaFileAlt, FaClock } from 'react-icons/fa';
import Link from "next/link";

export default function AuspicesAISandboxPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Section spacing="lg">
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="lg">AuspicesAI Sandbox</GradientHeading>
            <p className="text-xl text-muted-foreground mt-4">
              Advanced malware analysis platform powered by AI for comprehensive threat intelligence.
            </p>
          </GlassSection>
        </Container>
      </Section>

      {/* Product Overview */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <GlassSection className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <GradientHeading size="md" className="mb-6">
                    What is AuspicesAI Sandbox?
                  </GradientHeading>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our AI powered sandbox environment provides a secure, isolated space to analyze suspicious files and malware. 
                    Upload any file and receive detailed analysis reports including behavioral patterns, IOCs, and threat intelligence 
                    within minutes.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Built with advanced machine learning algorithms, our sandbox can detect even the most sophisticated threats 
                    and provide actionable insights for your security team.
                  </p>
                  <Button size="lg" className="group" asChild>
                    <Link href="https://sandbox.auspicesai.com" target="_blank" rel="noopener noreferrer">
                      Try It Now
                      <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <GlassSection className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <FaUpload className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Upload & Analyze</h4>
                          <p className="text-sm text-muted-foreground">
                            Simply drag and drop suspicious files for instant analysis
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <FaRobot className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">AI Analysis</h4>
                          <p className="text-sm text-muted-foreground">
                            Advanced AI algorithms analyze behavior and extract intelligence
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <FaFileAlt className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Detailed Reports</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive reports with IOCs, behaviors, and recommendations
                          </p>
                        </div>
                      </div>
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
              <GradientHeading size="md" className="mb-4">Key Features</GradientHeading>
              <p className="text-muted-foreground text-lg">
                Everything you need for comprehensive malware analysis
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GlassSection className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <FaShieldAlt className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Automated Payload Extraction</h3>
                <p className="text-muted-foreground">
                  Automatically extract and analyze payloads from complex malware samples with AI precision.
                </p>
              </GlassSection>
              
              <GlassSection className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <FaRobot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Behavioral Analysis</h3>
                <p className="text-muted-foreground">
                  Monitor and analyze malware behavior in real-time within our secure sandbox environment.
                </p>
              </GlassSection>
              
              <GlassSection className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <FaChartLine className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Threat Intelligence Reports</h3>
                <p className="text-muted-foreground">
                  Generate detailed threat intelligence reports with actionable insights and IOCs.
                </p>
              </GlassSection>
              
              <GlassSection className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <FaClock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Fast Analysis</h3>
                <p className="text-muted-foreground">
                  Get comprehensive analysis results in minutes, not hours or days.
                </p>
              </GlassSection>
              
              <GlassSection className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <FaUpload className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Multiple File Formats</h3>
                <p className="text-muted-foreground">
                  Support for various file types including executables, documents, and archives.
                </p>
              </GlassSection>
              
              <GlassSection className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <FaFileAlt className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">API Integration</h3>
                <p className="text-muted-foreground">
                  Integrate our sandbox into your existing security workflows with our REST API.
                </p>
              </GlassSection>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="md" className="mb-4">Ready to Analyze?</GradientHeading>
            <p className="text-lg text-muted-foreground mb-8">
              Start analyzing suspicious files today with our AI powered sandbox environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="https://sandbox.auspicesai.com" target="_blank" rel="noopener noreferrer">
                  Try AuspicesAI Sandbox
                  <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </GlassSection>
        </Container>
      </Section>
    </div>
  );
}
