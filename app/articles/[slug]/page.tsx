import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/src/data/articles";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXContent } from "@/components/MDXContent";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Get both research papers and MDX articles
  const researchArticles = getAllArticles();
  const mdxSlugs = getContentSlugs("articles");
  
  const researchParams = researchArticles.map((article) => ({ slug: article.slug }));
  const mdxParams = mdxSlugs.map((slug) => ({ slug }));
  
  return [...researchParams, ...mdxParams];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Check research papers first
  const researchArticle = getArticleBySlug(slug);
  if (researchArticle) {
    return {
      title: `${researchArticle.title} | Research & Technical Publications`,
      description: researchArticle.summary,
      openGraph: {
        title: researchArticle.title,
        description: researchArticle.summary,
        type: "article",
        publishedTime: researchArticle.year.toString(),
        tags: researchArticle.focus,
      },
    };
  }
  
  // Fall back to MDX content
  const mdxArticle = getContentBySlug("articles", slug);
  if (mdxArticle) {
    return {
      title: mdxArticle.frontmatter.title,
      description: mdxArticle.frontmatter.description,
      openGraph: {
        title: mdxArticle.frontmatter.title,
        description: mdxArticle.frontmatter.description,
        type: "article",
        publishedTime: mdxArticle.frontmatter.date,
        tags: mdxArticle.frontmatter.tags,
      },
    };
  }

  return {
    title: "Article Not Found",
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Check research papers first
  const researchArticle = getArticleBySlug(slug);
  if (researchArticle) {
    const hasLinks = researchArticle.links.pdf || researchArticle.links.publisher || researchArticle.links.scholar;

    return (
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/articles"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500 dark:hover:decoration-gray-400 transition-colors mb-8 inline-block"
        >
          ← Back to Articles
        </Link>

        <header className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
          <h1 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100 leading-tight">
            {researchArticle.title}
          </h1>

          {/* Authors */}
          <div className="text-base text-gray-700 dark:text-gray-300 mb-3">
            {researchArticle.authors.join(", ")}
          </div>

          {/* Publication and Year */}
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
            <div>
              <span className="font-medium">{researchArticle.publication}</span>
            </div>
            <div className="text-xs">
              <span>{researchArticle.year}</span>
            </div>
          </div>

          {/* Citation Line */}
          {researchArticle.citations !== undefined && researchArticle.citations !== null && (
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {researchArticle.links.scholar ? (
                <>
                  Cited by <span className="font-medium">{researchArticle.citations}</span> ·{" "}
                  <a
                    href={researchArticle.links.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 underline decoration-gray-400 dark:decoration-gray-600 hover:decoration-gray-600 dark:hover:decoration-gray-400 transition-colors"
                  >
                    {researchArticle.citationSource || "Google Scholar"}
                  </a>
                </>
              ) : (
                <>
                  Cited by <span className="font-medium">{researchArticle.citations}</span>
                </>
              )}
            </div>
          )}

          {/* Tags */}
          {researchArticle.focus.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {researchArticle.focus.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-normal bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Abstract Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Abstract
          </h2>
          <div className="text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {researchArticle.abstract}
          </div>
        </section>

        {/* Links Section */}
        <section className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Links
          </h2>
          {hasLinks ? (
            <div className="flex items-center gap-3 flex-wrap">
              {researchArticle.links.pdf && (
                <a
                  href={researchArticle.links.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-900 rounded transition-colors"
                >
                  Download PDF
                </a>
              )}
              {researchArticle.links.publisher && (
                <a
                  href={researchArticle.links.publisher}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
                >
                  Publisher
                </a>
              )}
              {researchArticle.links.scholar && (
                <a
                  href={researchArticle.links.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
                >
                  Scholar
                </a>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">
              Links will be added soon.
            </p>
          )}
        </section>
      </article>
    );
  }

  // Fall back to MDX content
  const mdxArticle = getContentBySlug("articles", slug);
  if (mdxArticle) {
    return (
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/articles"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Back to Articles
        </Link>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{mdxArticle.frontmatter.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
            <time dateTime={mdxArticle.frontmatter.date}>
              {formatDate(mdxArticle.frontmatter.date)}
            </time>
            <span>{mdxArticle.readingTime} min read</span>
          </div>
          {mdxArticle.frontmatter.tags && mdxArticle.frontmatter.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {mdxArticle.frontmatter.tags.map((tag) => (
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
          <MDXContent source={mdxArticle.content} />
        </div>
      </article>
    );
  }

  notFound();
}
