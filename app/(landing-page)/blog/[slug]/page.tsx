import { GradientHeading } from "@/components/ui/gradient-heading";
import { GlassSection } from "@/components/ui/glass-section";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { MarkdownRenderer } from "@/lib/markdown";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-16">
      {/* Article Header */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <GlassSection className="p-8 md:p-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <GradientHeading size="lg" className="mb-6">
                {post.title}
              </GradientHeading>

              <div className="flex items-center gap-4 text-muted-foreground">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </GlassSection>
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <GlassSection className="p-8 md:p-12">
              <article>
                <MarkdownRenderer content={post.content} />
              </article>
            </GlassSection>
          </div>
        </Container>
      </Section>
    </div>
  );
}
