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
  const slugs = getContentSlugs("articles");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getContentBySlug("articles", slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      type: "article",
      publishedTime: article.frontmatter.date,
      tags: article.frontmatter.tags,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getContentBySlug("articles", slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/articles"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to Articles
      </Link>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{article.frontmatter.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <time dateTime={article.frontmatter.date}>
            {formatDate(article.frontmatter.date)}
          </time>
          <span>{article.readingTime} min read</span>
        </div>
        {article.frontmatter.tags && article.frontmatter.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {article.frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/articles/tag/${tag}`}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXContent source={article.content} />
      </div>
    </article>
  );
}
