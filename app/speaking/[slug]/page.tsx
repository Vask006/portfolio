import { notFound } from "next/navigation";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXContent } from "@/components/MDXContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getContentSlugs("speaking");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const talk = getContentBySlug("speaking", slug);

  if (!talk) {
    return {
      title: "Talk Not Found",
    };
  }

  return {
    title: talk.frontmatter.title,
    description: talk.frontmatter.description,
    openGraph: {
      title: talk.frontmatter.title,
      description: talk.frontmatter.description,
      type: "article",
      publishedTime: talk.frontmatter.date,
      tags: talk.frontmatter.tags,
    },
  };
}

export default async function SpeakingPage({ params }: PageProps) {
  const { slug } = await params;
  const talk = getContentBySlug("speaking", slug);

  if (!talk) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/speaking"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to Speaking
      </Link>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{talk.frontmatter.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <time dateTime={talk.frontmatter.date}>
            {formatDate(talk.frontmatter.date)}
          </time>
          <span>{talk.readingTime} min read</span>
        </div>
        {talk.frontmatter.tags && talk.frontmatter.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {talk.frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/speaking/tag/${tag}`}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXContent source={talk.content} />
      </div>
    </article>
  );
}
