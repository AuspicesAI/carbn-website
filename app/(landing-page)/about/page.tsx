import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { TeamMember } from "@/components/ui/team-member";
import { GlassyIcon } from "@/components/ui/glassy-icon";
import { FaEye, FaBullseye, FaCheck, FaUserClock, FaUsers, FaStar, FaLightbulb, FaRegHandshake } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Section spacing="lg">
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="lg">About Us</GradientHeading>
            <p className="text-xl text-muted-foreground mt-4">
              Welcome to AuspicesAI, a startup bridging the gap between cybersecurity and AI.
            </p>
          </GlassSection>
        </Container>
      </Section>

      {/* Mission & Vision Section */}
      <Section>
        <Container>
          <div className='flex lg:flex-row sm:flex-col gap-8 max-w-4xl mx-auto'>
            <GlassSection className="p-8 flex-1">
              <div className="text-center">
                <GlassyIcon icon={<FaBullseye />} size="lg" className="mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create cybersecurity solutions that advance cybersecurity in Jordan and beyond by leveraging AI technology.
                </p>
              </div>
            </GlassSection>
            <GlassSection className="p-8 flex-1">
              <div className="text-center">
                <GlassyIcon icon={<FaEye />} size="lg" className="mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in AI powered cybersecurity solutions, setting industry standards for innovation and trust.
                </p>
              </div>
            </GlassSection>
          </div>
        </Container>
      </Section>

      {/* Company Story Section */}
      <Section>
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12">
            <GradientHeading size="md" className="text-center mb-8">It All Began in 2023</GradientHeading>
            <p className="text-lg text-muted-foreground text-center leading-8">
              When AuspicesAI was founded by two first year university students who saw a gap in
              local and global market for security, specially when LLMs got popular. Driven by a vision to address this
              need, they launched the startup to provide cybersecurity solutions. What
              started as a university project has evolved into a provider of AI powered security technologies.
            </p>
          </GlassSection>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GradientHeading size="md" className="mb-4">The Values We Uphold</GradientHeading>
              <p className="text-muted-foreground text-lg">
                The Core Principles That Drive Our Commitment and Services to Excellence and Customer Success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GlassSection className="p-6">
                <div className="text-center">
                  <GlassyIcon icon={<FaLightbulb />} size="md" className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We strive to push the boundaries of technology to create cutting-edge solutions.
                  </p>
                </div>
              </GlassSection>
              <GlassSection className="p-6">
                <div className="text-center">
                  <GlassyIcon icon={<FaRegHandshake />} size="md" className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    We uphold the highest standards of honesty and transparency.
                  </p>
                </div>
              </GlassSection>
              <GlassSection className="p-6">
                <div className="text-center">
                  <GlassyIcon icon={<FaStar />} size="md" className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    We are dedicated to delivering superior quality in all our work.
                  </p>
                </div>
              </GlassSection>
              <GlassSection className="p-6">
                <div className="text-center">
                  <GlassyIcon icon={<FaUsers />} size="md" className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Customer-Centricity</h3>
                  <p className="text-muted-foreground">
                    We prioritize understanding and meeting the unique needs of our clients.
                  </p>
                </div>
              </GlassSection>
              <GlassSection className="p-6">
                <div className="text-center">
                  <GlassyIcon icon={<FaUserClock />} size="md" className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Responsiveness</h3>
                  <p className="text-muted-foreground">
                    We provide timely support and solutions to address our clients&rsquo; needs and challenges.
                  </p>
                </div>
              </GlassSection>
              <GlassSection className="p-6">
                <div className="text-center">
                  <GlassyIcon icon={<FaCheck />} size="md" className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">Reliability</h3>
                  <p className="text-muted-foreground">
                    We ensure our systems and services consistently perform at their best, providing dependable protection and support.
                  </p>
                </div>
              </GlassSection>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GradientHeading size="md" className="mb-4">Meet the Founders</GradientHeading>
              <p className="text-lg text-muted-foreground">
                Get to Know the Founders Who Launched AuspicesAI
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <TeamMember
                imageSrc="/yousef.jpg"
                name="Yousef Musabeh"
                title="Startup Chief Executive Officer"
                bio="Yousef Musabeh leads our AI initiatives as CEO and AI Leader. His extensive expertise in AI engineering and MLOps are key to developing and refining our advanced cybersecurity solutions. Yousef's dedication ensures that our technology remains innovative and effective in addressing today's security challenges."
                socialLinks={{
                  instagram: 'https://instagram.com/yousinator0x01',
                  linkedin: 'https://linkedin.com/in/yousef-musabeh',
                  github: 'https://github.com/Yousinator'
                }}
              />
              <TeamMember
                imageSrc="/saud.jpg"
                name="Saud Smadi"
                title="Startup Chief Technology Officer"
                bio="Saud Smadi, our CTO and Head of Cybersecurity, is responsible for overseeing our technology and security strategies. His deep knowledge in security engineering and DevSecOps plays a crucial role in building and maintaining our secure solutions. Saud's focus on cloud security and automation ensures that our systems are robust and reliable."
                socialLinks={{
                  linkedin: 'https://linkedin.com/in/saud-smadi',
                  github: 'https://github.com/smadi0x86'
                }}
              />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
