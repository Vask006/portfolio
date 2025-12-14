import fs from "fs";
import path from "path";

export interface Project {
  title: string;
  description: string;
  url?: string;
  github?: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

const projectsPath = path.join(process.cwd(), "content", "projects.json");

export function getProjects(): Project[] {
  if (!fs.existsSync(projectsPath)) {
    return [];
  }

  try {
    const fileContents = fs.readFileSync(projectsPath, "utf8");
    const data = JSON.parse(fileContents);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}
