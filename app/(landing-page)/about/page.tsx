import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { TeamMember } from "@/components/ui/team-member";
import { GlassyIcon } from "@/components/ui/glassy-icon";
import { PageHero } from "@/components/ui/page-hero";
import { ContentCard } from "@/components/ui/content-card";
import {
  Eye,
  ExternalLink,
  Shield,
  Target,
  Zap,
  Sparkles,
  Settings,
  Bot,
} from "lucide-react";
import Image from "next/image";
import {
  FaEye,
  FaBullseye,
  FaCheck,
  FaUserClock,
  FaUsers,
  FaStar,
  FaLightbulb,
  FaRegHandshake,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="About Us"
        description="Welcome to Carbn, a startup bridging the gap between cybersecurity and AI."
      />

      {/* Mission & Vision Section */}
      <Section spacing="sm">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <GlassSection className="p-6 flex-1">
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To create cybersecurity solutions that advance cybersecurity
                    in Jordan and beyond by leveraging AI technology.
                  </p>
                </div>
              </GlassSection>
              <GlassSection className="p-6 flex-1">
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the global leader in AI powered cybersecurity
                    solutions, setting industry standards for innovation and
                    trust.
                  </p>
                </div>
              </GlassSection>
            </div>
          </div>
        </Container>
      </Section>

      {/* Company Story Section */}
      <Section>
        <Container>
          <GlassSection className="max-w-6xl mx-auto p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <GradientHeading
                  size="lg"
                  className="text-left ml-0 pl-0"
                  center={false}
                >
                  It All Began in 2023
                </GradientHeading>
                <p className="text-lg text-muted-foreground leading-8">
                  When Carbn was founded by two first year university students
                  who saw a gap in local and global market for security,
                  specially when LLMs got popular. Driven by a vision to address
                  this need, they launched the startup to provide cybersecurity
                  solutions. What started as a university project has evolved
                  into a provider of AI powered security technologies.
                </p>
              </div>
              <div className="relative lg:order-last order-first">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/founders.jpeg"
                    alt="Carbn Founders working together"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover aspect-[4/5] object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-purple-500/10 rounded-3xl" />
                  <div className="absolute inset-0 ring-1 ring-white/20 rounded-3xl" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-primary/15 rounded-full blur-2xl" />
              </div>
            </div>
          </GlassSection>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GradientHeading size="md" className="mb-4">
                The Values We Uphold
              </GradientHeading>
              <p className="text-muted-foreground text-lg">
                The Core Principles That Drive Our Commitment and Services to
                Excellence and Customer Success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ContentCard
                icon={<FaLightbulb />}
                title="Innovation"
                description="We strive to push the boundaries of technology to create cutting-edge solutions."
              />
              <ContentCard
                icon={<FaRegHandshake />}
                title="Integrity"
                description="We uphold the highest standards of honesty and transparency."
              />
              <ContentCard
                icon={<FaStar />}
                title="Excellence"
                description="We are dedicated to delivering superior quality in all our work."
              />
              <ContentCard
                icon={<FaUsers />}
                title="Customer-Centricity"
                description="We prioritize understanding and meeting the unique needs of our clients."
              />
              <ContentCard
                icon={<FaUserClock />}
                title="Responsiveness"
                description="We provide timely support and solutions to address our clients' needs and challenges."
              />
              <ContentCard
                icon={<FaCheck />}
                title="Reliability"
                description="We ensure our systems and services consistently perform at their best, providing dependable protection and support."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GradientHeading size="md" className="mb-4">
                Meet the Founders
              </GradientHeading>
              <p className="text-lg text-muted-foreground">
                Get to Know the Founders Who Launched Carbn
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <TeamMember
                imageSrc="/yousef.jpg"
                name="Yousef Musabeh"
                title="Startup Chief Executive Officer"
                bio="Yousef Musabeh leads our AI initiatives as CEO and AI Leader. His extensive expertise in AI engineering and MLOps are key to developing and refining our advanced cybersecurity solutions. Yousef's dedication ensures that our technology remains innovative and effective in addressing today's security challenges."
                socialLinks={{
                  instagram: "https://instagram.com/yousinator0x01",
                  linkedin: "https://linkedin.com/in/yousef-musabeh",
                  github: "https://github.com/Yousinator",
                }}
              />
              <TeamMember
                imageSrc="/saud.jpg"
                name="Saud Smadi"
                title="Startup Chief Technology Officer"
                bio="Saud Smadi, our CTO and Head of Cybersecurity, is responsible for overseeing our technology and security strategies. His deep knowledge in security engineering and DevSecOps plays a crucial role in building and maintaining our secure solutions. Saud's focus on cloud security and automation ensures that our systems are robust and reliable."
                socialLinks={{
                  linkedin: "https://linkedin.com/in/saud-smadi",
                  github: "https://github.com/smadi0x86",
                }}
              />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
