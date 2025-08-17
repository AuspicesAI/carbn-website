import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import Link from "next/link";

const blogPosts = [
  {
    id: "ai-cybersecurity-future",
    title: "The Future of AI in Cybersecurity",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the cybersecurity landscape and what it means for businesses.",
    date: "2024-01-15",
    author: "Yousef Musabeh",
    readTime: "5 min read",
    tags: ["AI", "Cybersecurity", "Future Tech"],
  },
  {
    id: "zero-trust-architecture",
    title: "Implementing Zero Trust Architecture in Modern Organizations",
    excerpt:
      "A comprehensive guide to understanding and implementing zero trust security models in today's digital landscape.",
    date: "2024-01-10",
    author: "Saud Smadi",
    readTime: "8 min read",
    tags: ["Zero Trust", "Security", "Architecture"],
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Section spacing="lg" className="pb-12">
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="lg">AuspicesAI Blog</GradientHeading>
            <p className="text-xl text-muted-foreground mt-4">
              Stay updated with the latest insights, trends, and innovations in
              AI and security.
            </p>
          </GlassSection>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="py-0 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post) => (
              <GlassSection
                key={post.id}
                className="p-8 hover:shadow-lg transition-shadow"
              >
                <article>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/blog/${post.id}`} className="group">
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </GlassSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section
      <Section>
        <Container>
          <GlassSection className="max-w-4xl mx-auto p-8 md:p-12 text-center">
            <GradientHeading size="md" className="mb-4">Want to Stay Updated?</GradientHeading>
            <p className="text-muted-foreground">
              Follow our blog for the latest insights in AI powered cybersecurity and industry trends.
            </p>
          </GlassSection>
        </Container>
      </Section> */}
    </div>
  );
}
