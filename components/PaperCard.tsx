"use client";

import { useState } from "react";
import Link from "next/link";

export interface PaperCardProps {
  title: string;
  slug?: string;
  authors: string[];
  journal_or_conference: string;
  year: number;
  abstract: string;
  tags: string[];
  citations?: number;
  citationSource?: string;
  pdf_link?: string;
  publisher_link?: string;
  scholar_link?: string;
}

export function PaperCard({
  title,
  slug,
  authors,
  journal_or_conference,
  year,
  abstract,
  tags,
  citations,
  citationSource = "Google Scholar",
  pdf_link,
  publisher_link,
  scholar_link,
}: PaperCardProps) {
  const [isAbstractExpanded, setIsAbstractExpanded] = useState(false);

  // Abstract preview: ~240 characters (approximately 2-3 lines)
  const abstractPreviewLength = 240;
  const shouldTruncate = abstract.length > abstractPreviewLength;
  const abstractPreview = abstract.substring(0, abstractPreviewLength).trim();
  const needsEllipsis = abstract.length > abstractPreviewLength && !abstractPreview.endsWith(".") && !abstractPreview.endsWith("!") && !abstractPreview.endsWith("?");

  // Check if any links exist
  const hasLinks = pdf_link || publisher_link || scholar_link;

  return (
    <div className="p-6 border-l-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
      {/* Title */}
      {slug ? (
        <Link
          href={`/articles/${slug}`}
          className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 leading-tight block transition-colors"
        >
          {title}
        </Link>
      ) : (
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 leading-tight">
          {title}
        </h3>
      )}

      {/* Authors */}
      <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        {authors.join(", ")}
      </div>

      {/* Journal/Conference and Year */}
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 space-y-1">
        <div>
          <span className="font-medium">{journal_or_conference}</span>
        </div>
        <div className="text-xs">
          <span>{year}</span>
        </div>
      </div>

      {/* Citation Line */}
      {citations !== undefined && citations !== null && (
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-4">
          {scholar_link ? (
            <>
              Cited by <span className="font-medium">{citations}</span> ·{" "}
              <a
                href={scholar_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 underline decoration-gray-400 dark:decoration-gray-600 hover:decoration-gray-600 dark:hover:decoration-gray-400 transition-colors"
              >
                {citationSource}
              </a>
            </>
          ) : (
            <>
              Cited by <span className="font-medium">{citations}</span>
            </>
          )}
        </div>
      )}

      {/* Abstract */}
      <div className="mb-4">
        <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {isAbstractExpanded ? (
            <div className="whitespace-pre-line">{abstract}</div>
          ) : (
            <div>
              {shouldTruncate ? (
                <>
                  {abstractPreview}
                  {needsEllipsis ? "..." : ""}
                </>
              ) : (
                abstract
              )}
            </div>
          )}
        </div>
        {shouldTruncate && (
          <button
            onClick={() => setIsAbstractExpanded(!isAbstractExpanded)}
            aria-expanded={isAbstractExpanded}
            aria-label={isAbstractExpanded ? "Collapse abstract" : "Expand abstract"}
            className="mt-2 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500 dark:hover:decoration-gray-400 transition-colors"
          >
            {isAbstractExpanded ? "Show less" : "Read abstract"}
          </button>
        )}
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-normal bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Links Row */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        {hasLinks ? (
          <div className="flex items-center gap-3 flex-wrap">
            {pdf_link && (
              <a
                href={pdf_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-900 rounded transition-colors"
              >
                Download PDF
              </a>
            )}
            {publisher_link && (
              <a
                href={publisher_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
              >
                Publisher
              </a>
            )}
            {scholar_link && (
              <a
                href={scholar_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
              >
                Scholar
              </a>
            )}
          </div>
        ) : (
          <p className="text-xs text-gray-500 dark:text-gray-500 italic">
            Links will be added soon.
          </p>
        )}
      </div>
    </div>
  );
}
