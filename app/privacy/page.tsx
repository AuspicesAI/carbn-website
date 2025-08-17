import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-3xl mx-auto">
          <GlassSection className="p-8 md:p-12 space-y-8">
            <GradientHeading size="lg" as="h1">
              Privacy Policy
            </GradientHeading>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="grid gap-6">
              <section>
                <h2 className="text-lg font-semibold">What we collect</h2>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Account: name, email</li>
                  <li>Auth: managed by AWS Cognito (tokens, IDs)</li>
                  <li>Usage: pages, features used, device info</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold">How we use it</h2>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Provide and secure the service</li>
                  <li>Account communications (e.g., critical updates)</li>
                  <li>Improve performance and reliability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold">Security</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Data is protected with industry-standard controls and
                  AWS-managed services. Access is restricted and audited.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">Your choices</h2>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Request access, correction, or deletion</li>
                  <li>Manage communication preferences</li>
                  <li>Opt-out of non-essential analytics where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold">Contact</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  support@auspicesai.com
                </p>
              </section>
            </div>
          </GlassSection>
        </div>
      </Container>
    </Section>
  );
}
