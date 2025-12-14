import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ContentType = "blog" | "articles" | "books" | "speaking";

export interface ContentFrontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  author?: string;
  [key: string]: unknown;
}

export interface ContentItem {
  slug: string;
  frontmatter: ContentFrontmatter;
  readingTime: number;
  content: string;
}

const contentDirectory = path.join(process.cwd(), "content");

export function getContentSlugs(type: ContentType): string[] {
  const typeDirectory = path.join(contentDirectory, type);
  if (!fs.existsSync(typeDirectory)) {
    return [];
  }
  return fs
    .readdirSync(typeDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getContentBySlug(
  type: ContentType,
  slug: string
): ContentItem | null {
  const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as ContentFrontmatter,
    readingTime: Math.ceil(stats.minutes),
    content,
  };
}

export function getAllContent(type: ContentType): ContentItem[] {
  const slugs = getContentSlugs(type);
  return slugs
    .map((slug) => getContentBySlug(type, slug))
    .filter((item): item is ContentItem => item !== null)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      return dateB - dateA;
    });
}

export function getAllTags(type?: ContentType): string[] {
  const types: ContentType[] = type
    ? [type]
    : ["blog", "articles", "books", "speaking"];
  const allTags = new Set<string>();

  types.forEach((t) => {
    const content = getAllContent(t);
    content.forEach((item) => {
      item.frontmatter.tags?.forEach((tag) => allTags.add(tag));
    });
  });

  return Array.from(allTags).sort();
}

export function getContentByTag(
  type: ContentType,
  tag: string
): ContentItem[] {
  return getAllContent(type).filter((item) =>
    item.frontmatter.tags?.includes(tag)
  );
}
