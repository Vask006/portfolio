import { papers, type Paper, type PaperCategory, type PaperLinks } from "./papers";

// Re-export types for backward compatibility
export type ArticleCategory = PaperCategory;

export type Article = {
  slug: string;
  title: string;
  authors: string[];
  publication: string;
  year: number;
  citations?: number;
  citationSource?: string; // Default: "Google Scholar"
  focus: string[];
  summary: string; // 1–2 sentence contribution-focused description
  abstract: string; // Full abstract text
  category: ArticleCategory;
  links: {
    pdf?: string;
    publisher?: string;
    scholar?: string;
  };
  featured?: boolean;
};

/**
 * Generate a summary from abstract (first sentence or first ~150 characters)
 */
function generateSummary(abstract: string): string {
  // Try to get the first sentence
  const firstSentence = abstract.match(/^[^.!?]+[.!?]/);
  if (firstSentence && firstSentence[0].length <= 200) {
    return firstSentence[0].trim();
  }
  // Otherwise, take first 150 characters
  const preview = abstract.substring(0, 150).trim();
  return preview.endsWith(".") ? preview : preview + "...";
}

/**
 * Transform Paper data to Article format
 */
function paperToArticle(paper: Paper): Article {
  return {
    slug: paper.slug,
    title: paper.title,
    authors: paper.authors || ["Anand Kumar Vedantham"],
    publication: paper.publication || "Academic Publication",
    year: paper.year,
    citations: paper.citations,
    citationSource: paper.citationSource || "Google Scholar",
    focus: paper.tags,
    summary: generateSummary(paper.abstract),
    abstract: paper.abstract,
    category: paper.category,
    links: {
      pdf: paper.links.pdf,
      publisher: paper.links.publisher,
      scholar: paper.links.scholar,
    },
    featured: paper.featured ?? false,
  };
}

/**
 * Get all articles (transformed from papers)
 */
export const articles: Article[] = papers.map(paperToArticle);

export function getAllArticles(): Article[] {
  return articles;
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllFocusTags(): string[] {
  const tags = new Set<string>();
  articles.forEach((article) => {
    article.focus.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getArticlesByFocusTag(tag: string): Article[] {
  return articles.filter((article) => article.focus.includes(tag));
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getAllCategories(): ArticleCategory[] {
  return ["Enterprise Architecture", "Cloud & DevOps", "AI & Data", "IoT & Mobility"];
}

export function getArticlesGroupedByCategory(): Record<ArticleCategory, Article[]> {
  const categories = getAllCategories();
  const grouped: Record<ArticleCategory, Article[]> = {
    "Enterprise Architecture": [],
    "Cloud & DevOps": [],
    "AI & Data": [],
    "IoT & Mobility": [],
  };

  articles.forEach((article) => {
    grouped[article.category].push(article);
  });

  // Sort articles within each category by year (descending)
  categories.forEach((category) => {
    grouped[category].sort((a, b) => b.year - a.year);
  });

  return grouped;
}
