import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBookBySlug,
  getAllBookSlugs,
} from "@/src/data/books";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBookSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  const description = book.subtitle
    ? `${book.subtitle} ${book.summary[0]?.substring(0, 100)}...`
    : book.summary[0]?.substring(0, 150) || "";

  return {
    title: book.title,
    description,
    openGraph: {
      title: book.title,
      description,
      type: "book",
    },
  };
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const maxCountryTotal = Math.max(
    ...book.metrics.byCountry.map((c) => c.total)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/books"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to Books
      </Link>

      <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-8">
        {/* Cover Image */}
        <div className="flex-shrink-0">
          <img
            src={book.cover.src}
            alt={book.cover.alt}
            width={200}
            height={300}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Book Info */}
        <div>
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {book.title}
          </h1>
          {book.subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {book.subtitle}
            </p>
          )}
          <div className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-semibold">Author:</span> {book.author}
            </p>
            <p>
              <span className="font-semibold">Format:</span> {book.format}
            </p>
          </div>

          {/* Amazon Link */}
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 mb-8"
            aria-label={`Buy ${book.title} on Amazon`}
          >
            Buy on Amazon
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          About This Book
        </h2>
        <div className="space-y-4">
          {book.summary.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Impact Snapshot */}
      <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Impact Snapshot
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Total Units
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {book.metrics.totalUnits}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              eBook Units
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {book.metrics.ebookUnits}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Print Units
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {book.metrics.printUnits}
            </p>
          </div>
        </div>
      </div>

      {/* Country Sales */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Country Sales
        </h2>
        <div className="space-y-3">
          {book.metrics.byCountry.map((country) => {
            const percentage =
              maxCountryTotal > 0
                ? (country.total / maxCountryTotal) * 100
                : 0;
            return (
              <div key={country.country}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {country.country}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {country.total}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footnote */}
      <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
        Sales figures are author-reported snapshots and may change over time.
      </p>
    </div>
  );
}
