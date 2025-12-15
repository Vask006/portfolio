import { checkPublicFileExists } from "@/lib/utils";

// To add a new book, append a new object to the books array following the structure below.

export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  format: string;
  amazonUrl: string;
  cover: {
    src: string; // prefer png if exists, otherwise svg
    alt: string;
  };
  summary: string[]; // paragraphs
  metrics: {
    totalUnits: number;
    ebookUnits: number;
    printUnits: number;
    byCountry: {
      country: string;
      ebook: number;
      print: number;
      total: number;
    }[];
  };
}

/**
 * Get the cover image path, preferring PNG over SVG.
 * Falls back to SVG if PNG doesn't exist.
 */
function getCoverPath(pngPath: string, svgPath: string): string {
  if (checkPublicFileExists(pngPath)) {
    return pngPath;
  }
  return svgPath;
}

export const books: Book[] = [
  {
    slug: "telematics-revolution",
    title: "The Telematics Revolution: Driving Connectivity and Insights",
    subtitle: "Exploring the intersection of technology and connectivity in a rapidly evolving world",
    author: "Anand Kumar Vedantham",
    format: "Kindle Edition",
    amazonUrl: "https://a.co/d/93iGy1V",
    cover: {
      src: getCoverPath(
        "/books/telematics-cover.png",
        "/books/telematics-cover.svg"
      ),
      alt: "Cover of The Telematics Revolution",
    },
    summary: [
      "This book examines the evolution of telematics as a foundational technology shaping connected vehicles, intelligent infrastructure, and data-driven systems. It explores how cloud platforms, IoT, AI, and emerging connectivity technologies enable large-scale telemetry, predictive analytics, and real-time decision-making across industries.",
      "Drawing on enterprise and platform-level perspectives, it addresses architectural patterns, integration strategies, and governance challenges associated with telematics adoption, including security, data privacy, and scalability. It is intended for technologists, architects, and decision-makers working with complex, connected systems.",
    ],
    metrics: {
      totalUnits: 44,
      ebookUnits: 27,
      printUnits: 17,
      byCountry: [
        { country: "United States", ebook: 21, print: 14, total: 35 },
        { country: "United Kingdom", ebook: 2, print: 1, total: 3 },
        { country: "Germany", ebook: 0, print: 2, total: 2 },
        { country: "India", ebook: 2, print: 0, total: 2 },
        { country: "Canada", ebook: 1, print: 0, total: 1 },
        { country: "Japan", ebook: 1, print: 0, total: 1 },
      ],
    },
  },
  {
    slug: "focused-agility",
    title: "Focused Agility",
    subtitle: "How \"One Thing at a Time\" and Agile Principles Drive Deep Work and Real Results",
    author: "Anand Kumar Vedantham",
    format: "Kindle Edition",
    amazonUrl: "https://a.co/d/g0HhGxA",
    cover: {
      src: getCoverPath(
        "/books/focused-agility-cover.png",
        "/books/focused-agility-cover.svg"
      ),
      alt: "Cover of Focused Agility",
    },
    summary: [
      "This book explores how principles from Agile software development and cognitive science can be applied to improve focus, execution, and outcomes in complex work environments.",
      "It introduces practical frameworks for reducing cognitive overload, prioritizing effectively, and designing sustainable work rhythms for individuals and teams. It is intended for professionals and leaders seeking structured, outcome-driven approaches to productivity.",
    ],
    metrics: {
      totalUnits: 50,
      ebookUnits: 48,
      printUnits: 2,
      byCountry: [
        { country: "United States", ebook: 29, print: 1, total: 30 },
        { country: "India", ebook: 9, print: 0, total: 9 },
        { country: "Germany", ebook: 7, print: 0, total: 7 },
        { country: "France", ebook: 2, print: 0, total: 2 },
        { country: "Canada", ebook: 0, print: 1, total: 1 },
        { country: "Japan", ebook: 1, print: 0, total: 1 },
      ],
    },
  },
  // ============================================================================
  // TEMPLATE FOR ADDING NEW BOOKS
  // ============================================================================
  // To add a new book, copy the template below, uncomment it, and fill in your details.
  // Make sure to:
  // 1. Add cover images to public/books/ (both PNG and SVG formats recommended)
  // 2. Update the slug to be URL-friendly (lowercase, hyphens instead of spaces)
  // 3. Ensure totalUnits = sum of all country totals
  // 4. Ensure ebookUnits + printUnits = totalUnits
  //
  // {
  //   slug: "your-book-slug",
  //   title: "Your Book Title",
  //   subtitle: "Optional subtitle text", // Optional field
  //   author: "Author Name",
  //   format: "Kindle Edition", // Options: "Kindle Edition", "Paperback", "Hardcover", etc.
  //   amazonUrl: "https://a.co/d/your-amazon-link",
  //   cover: {
  //     src: getCoverPath(
  //       "/books/your-book-cover.png",  // PNG file path
  //       "/books/your-book-cover.svg"   // SVG fallback path
  //     ),
  //     alt: "Cover of Your Book Title",
  //   },
  //   summary: [
  //     "First paragraph of your book summary.",
  //     "Second paragraph of your book summary.",
  //     // Add more paragraphs as needed
  //   ],
  //   metrics: {
  //     totalUnits: 0,        // Sum of all country totals
  //     ebookUnits: 0,        // Sum of all country ebook units
  //     printUnits: 0,        // Sum of all country print units
  //     byCountry: [
  //       { country: "United States", ebook: 0, print: 0, total: 0 },
  //       { country: "United Kingdom", ebook: 0, print: 0, total: 0 },
  //       { country: "Germany", ebook: 0, print: 0, total: 0 },
  //       { country: "India", ebook: 0, print: 0, total: 0 },
  //       { country: "Canada", ebook: 0, print: 0, total: 0 },
  //       { country: "Japan", ebook: 0, print: 0, total: 0 },
  //       // Add more countries as needed
  //       // Note: total = ebook + print for each country
  //     ],
  //   },
  // },
];

/**
 * Get all books.
 */
export function getAllBooks(): Book[] {
  return books;
}

/**
 * Get a book by slug.
 */
export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

/**
 * Get all book slugs for static generation.
 */
export function getAllBookSlugs(): string[] {
  return books.map((book) => book.slug);
}
