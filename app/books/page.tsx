import Link from "next/link";
import { getAllBooks } from "@/src/data/books";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Selected books on connected systems, architecture, security-first design, and execution frameworks.",
};

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Books
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Selected books on connected systems, architecture, security-first
          design, and execution frameworks.
        </p>
      </div>

      {/* Book Cards */}
      <div className="space-y-16 mb-16">
        {books.map((book) => {
          const maxCountryTotal = Math.max(
            ...book.metrics.byCountry.map((c) => c.total)
          );

          return (
            <div
              key={book.slug}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-white dark:bg-gray-900"
            >
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
                  <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {book.title}
                  </h2>
                  {book.subtitle && (
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                      {book.subtitle}
                    </p>
                  )}
                  <div className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <p>
                      <span className="font-semibold">Author:</span>{" "}
                      {book.author}
                    </p>
                    <p>
                      <span className="font-semibold">Format:</span>{" "}
                      {book.format}
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="mb-6 space-y-3">
                    {book.summary.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                      aria-label={`Buy ${book.title} on Amazon`}
                    >
                      Amazon
                    </a>
                    <Link
                      href={`/books/${book.slug}`}
                      className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Impact Snapshot */}
              <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Impact Snapshot
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Total Units
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {book.metrics.totalUnits}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      eBook Units
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {book.metrics.ebookUnits}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Print Units
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {book.metrics.printUnits}
                    </p>
                  </div>
                </div>
              </div>

              {/* Country Sales */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Country Sales
                </h3>
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
            </div>
          );
        })}
      </div>

      {/* Footnote */}
      <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
        Sales figures are author-reported snapshots and may change over time.
      </p>
    </div>
  );
}
