import Link from "next/link";
import { getAllContent, getAllTags } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Search } from "@/components/Search";
import { buildSearchIndex } from "@/lib/search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Technical articles and deep dives",
};

export default function ArticlesPage() {
  const articles = getAllContent("articles");
  const tags = getAllTags("articles");
  const searchIndex = buildSearchIndex();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6">Articles</h1>
        <Search index={searchIndex} />
      </div>

      {tags.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/articles/tag/${tag}`}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

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
            {article.frontmatter.tags && article.frontmatter.tags.length > 0 && (
              <div className="flex gap-2 mt-4 flex-wrap">
                {article.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
