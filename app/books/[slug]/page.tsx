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
  const slugs = getContentSlugs("books");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getContentBySlug("books", slug);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: book.frontmatter.title,
    description: book.frontmatter.description,
    openGraph: {
      title: book.frontmatter.title,
      description: book.frontmatter.description,
      type: "article",
      publishedTime: book.frontmatter.date,
      tags: book.frontmatter.tags,
    },
  };
}

export default async function BookPage({ params }: PageProps) {
  const { slug } = await params;
  const book = getContentBySlug("books", slug);

  if (!book) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/books"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to Books
      </Link>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{book.frontmatter.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <time dateTime={book.frontmatter.date}>
            {formatDate(book.frontmatter.date)}
          </time>
          <span>{book.readingTime} min read</span>
        </div>
        {book.frontmatter.tags && book.frontmatter.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {book.frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/books/tag/${tag}`}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXContent source={book.content} />
      </div>
    </article>
  );
}
