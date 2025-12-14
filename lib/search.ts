import { getAllContent, ContentType } from "./content";
import { getProjects } from "./projects";

export interface SearchIndexItem {
  id: string;
  type: ContentType | "project";
  title: string;
  description: string;
  slug: string;
  tags?: string[];
  url: string;
}

export function buildSearchIndex(): SearchIndexItem[] {
  const index: SearchIndexItem[] = [];

  // Add content items
  const contentTypes: ContentType[] = ["blog", "articles", "books", "speaking"];
  contentTypes.forEach((type) => {
    const items = getAllContent(type);
    items.forEach((item) => {
      index.push({
        id: `${type}-${item.slug}`,
        type,
        title: item.frontmatter.title,
        description: item.frontmatter.description,
        slug: item.slug,
        tags: item.frontmatter.tags,
        url: `/${type}/${item.slug}`,
      });
    });
  });

  // Add projects
  const projects = getProjects();
  projects.forEach((project) => {
    index.push({
      id: `project-${project.title.toLowerCase().replace(/\s+/g, "-")}`,
      type: "project",
      title: project.title,
      description: project.description,
      slug: project.title.toLowerCase().replace(/\s+/g, "-"),
      tags: project.tags,
      url: project.url || "#",
    });
  });

  return index;
}
