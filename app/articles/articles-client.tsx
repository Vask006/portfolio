"use client";

import {
  getAllArticles,
  getFeaturedArticles,
  type Article,
} from "@/src/data/articles";
import { PaperCard } from "@/components/PaperCard";

export default function ArticlesClient() {
  const allArticles = getAllArticles();
  const featuredArticles = getFeaturedArticles();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-4xl font-light mb-4 text-gray-900 dark:text-gray-100 tracking-tight">
          Research & Technical Publications
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light">
          Published research contributions in system-level architecture, distributed systems,
          and enterprise technology. These works present architectural frameworks, system designs,
          and applied research addressing technical challenges in large-scale software systems,
          data governance, and distributed computing infrastructure.
        </p>
      </div>

      {/* Featured Publications Section */}
      {featuredArticles.length > 0 && (
        <section className="mb-16">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-2 mb-6">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 tracking-wide">
              Featured Publications
            </h2>
          </div>
          <div className="space-y-0">
            {featuredArticles.map((article) => (
              <PaperCard
                key={article.slug}
                title={article.title}
                slug={article.slug}
                authors={article.authors}
                journal_or_conference={article.publication}
                year={article.year}
                abstract={article.abstract}
                tags={article.focus}
                citations={article.citations}
                citationSource={article.citationSource}
                pdf_link={article.links.pdf}
                publisher_link={article.links.publisher}
                scholar_link={article.links.scholar}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Publications Section */}
      <section>
        <div className="border-b border-gray-200 dark:border-gray-800 pb-2 mb-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 tracking-wide">
            All Publications
          </h2>
        </div>
        <div className="space-y-0">
          {allArticles.map((article) => (
            <PaperCard
              key={article.slug}
              title={article.title}
              slug={article.slug}
              authors={article.authors}
              journal_or_conference={article.publication}
              year={article.year}
              abstract={article.abstract}
              tags={article.focus}
              citations={article.citations}
              citationSource={article.citationSource}
              pdf_link={article.links.pdf}
              publisher_link={article.links.publisher}
              scholar_link={article.links.scholar}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
