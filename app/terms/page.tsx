import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function TermsPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-3xl mx-auto">
          <GlassSection className="p-8 md:p-12 space-y-8">
            <GradientHeading size="lg" as="h1">Terms of Service</GradientHeading>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="grid gap-6">
              <section>
                <h2 className="text-lg font-semibold">1. Agreement</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  By using our services, you agree to these Terms and our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">2. Use of service</h2>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Do not misuse, disrupt, or attempt to breach security.</li>
                  <li>Comply with applicable laws and third-party rights.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold">3. Accounts</h2>
                <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Provide accurate information and keep credentials secure.</li>
                  <li>You are responsible for activity under your account.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold">4. Intellectual property</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We retain all rights to our content, software, and branding. You may not copy or
                  redistribute except as permitted by law or with our written consent.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">5. Termination</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We may suspend or terminate access for violations or risks to the service.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">6. Disclaimers</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Service is provided &quot;as is&quot; without warranties. To the extent permitted by law,
                  we disclaim implied warranties and limit liability.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold">7. Contact</h2>
                <p className="mt-3 text-sm text-muted-foreground">support@auspicesai.com</p>
              </section>
            </div>
          </GlassSection>
        </div>
      </Container>
    </Section>
  );
}
