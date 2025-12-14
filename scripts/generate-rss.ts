import fs from "fs";
import path from "path";
import { getAllContent } from "../lib/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const blogPosts = getAllContent("blog");
const articles = getAllContent("articles");
const books = getAllContent("books");
const speaking = getAllContent("speaking");

const allContent = [
  ...blogPosts.map((post) => ({ ...post, type: "blog" })),
  ...articles.map((article) => ({ ...article, type: "articles" })),
  ...books.map((book) => ({ ...book, type: "books" })),
  ...speaking.map((talk) => ({ ...talk, type: "speaking" })),
].sort((a, b) => {
  const dateA = new Date(a.frontmatter.date).getTime();
  const dateB = new Date(b.frontmatter.date).getTime();
  return dateB - dateA;
});

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Portfolio</title>
    <description>Personal portfolio and blog</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${allContent
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.frontmatter.title)}</title>
      <description>${escapeXml(item.frontmatter.description)}</description>
      <link>${baseUrl}/${item.type}/${item.slug}</link>
      <guid>${baseUrl}/${item.type}/${item.slug}</guid>
      <pubDate>${new Date(item.frontmatter.date).toUTCString()}</pubDate>
      ${item.frontmatter.tags?.map((tag) => `<category>${escapeXml(tag)}</category>`).join("") || ""}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const outDir = path.join(process.cwd(), "out");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, "rss.xml"), rss);
