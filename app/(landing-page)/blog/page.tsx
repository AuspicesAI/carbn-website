import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { StatusBadge } from "@/components/ui/status-badge";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

// To create a new blog post run: node scripts/new-blog-post.js
export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <div className="space-y-16">
      <PageHero
        title="AuspicesAI Blog"
        description="Stay updated with the latest insights, trends, and innovations in AI and security."
      />

      {/* Blog Posts Grid */}
      <Section className="py-0 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post) => (
              <GlassSection
                key={post.slug}
                className="p-8 hover:shadow-lg transition-shadow"
              >
                <article>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <StatusBadge key={tag}>{tag}</StatusBadge>
                    ))}
                  </div>

                  <Link href={`/blog/${post.slug}`} className="group">
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
