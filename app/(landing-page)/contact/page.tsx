"use client";

import { useState } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text-area";
import { Label } from "@/components/ui/label";
import { GlassyIcon } from "@/components/ui/glassy-icon";
import {
  FaEnvelope,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject,
        message: formData.message,
        to_name: "AuspicesAI Team",
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error: any) {
      console.error("Failed to send email:", error);
      const errorMessage =
        error?.text || error?.message || "Unknown error occurred";
      alert(
        `Failed to send message: ${errorMessage}. Please try again or contact us directly at contact@auspicesai.com`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-16">
        <Section spacing="lg">
          <Container>
            <GlassSection className="max-w-2xl mx-auto p-8 md:p-12 text-center">
              {/* <GlassyIcon icon={<FaCheckCircle />} size="xl" className="mx-auto mb-6" /> */}
              <GradientHeading size="lg" className="mb-4">
                Message Sent!
              </GradientHeading>
              <p className="text-xl text-muted-foreground mb-6">
                Thank you for contacting us. We&apos;ll get back to you within
                24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
            </GlassSection>
          </Container>
        </Section>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Section spacing="lg" className="pb-12">
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="lg">Contact Us</GradientHeading>
            <p className="text-xl text-muted-foreground mt-4">
              Have a question? Send us a message and we&apos;ll get back to you
              as soon as possible.
            </p>
          </GlassSection>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section className="py-0 pb-24">
        <Container>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlassSection className="p-8">
              <GradientHeading size="md" className="mb-6">
                Send us a Message
              </GradientHeading>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={70}
                      required
                      className="bg-background/50 border-border/50 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={250}
                      className="bg-background/50 border-border/50 backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 backdrop-blur-sm"
                      maxLength={19}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      maxLength={50}
                      required
                      className="bg-background/50 border-border/50 backdrop-blur-sm"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={1500}
                    className="bg-background/50 border-border/50 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your cybersecurity needs or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <FaPaperPlane className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </GlassSection>

            {/* Contact Information */}
            <div className="space-y-8">
              <GlassSection className="p-8">
                <GradientHeading size="md" className="mb-6">
                  Get in Touch
                </GradientHeading>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <GlassyIcon icon={<FaEnvelope />} size="sm" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:contact@auspicesai.com"
                        className="text-muted-foreground underline hover:text-primary transition-colors"
                        aria-label="Send email to contact@auspicesai.com"
                      >
                        contact@auspicesai.com
                      </a>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <GlassyIcon icon={<FaMapMarkerAlt />} size="sm" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">Amman, Jordan</p>
                      <p className="text-sm text-muted-foreground">
                        Serving clients globally
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <GlassyIcon icon={<FaUser />} size="sm" />
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">Sunday - Thursday</p>
                      <p className="text-sm text-muted-foreground">
                        9:00 AM - 6:00 PM (GMT+3)
                      </p>
                    </div>
                  </div>
                </div>
              </GlassSection>

              <GlassSection className="p-8">
                <GradientHeading size="sm" className="mb-4">
                  Why Choose AuspicesAI?
                </GradientHeading>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    AI powered cybersecurity solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    24/7 expert support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Custom solutions for your needs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Proven track record in cybersecurity
                  </li>
                </ul>
              </GlassSection>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
