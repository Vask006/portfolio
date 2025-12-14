import Link from "next/link";
import { getContentByTag, getAllTags } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags("articles");
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Articles Tagged: ${tag}`,
    description: `All articles tagged with ${tag}`,
  };
}

export default async function ArticlesTagPage({ params }: PageProps) {
  const { tag } = await params;
  const articles = getContentByTag("articles", tag);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/articles"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to Articles
      </Link>
      <h1 className="text-4xl font-bold mb-8">
        Articles Tagged: <span className="text-blue-600 dark:text-blue-400">{tag}</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{article.frontmatter.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {article.frontmatter.description}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{formatDate(article.frontmatter.date)}</span>
              <span>{article.readingTime} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
