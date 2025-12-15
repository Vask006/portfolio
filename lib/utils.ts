import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import fs from "fs";
import path from "path";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

/**
 * Check if a file exists in the public directory at build time.
 * Static-export compatible - only works during build/SSG.
 */
export function checkPublicFileExists(filePath: string): boolean {
  try {
    // Remove leading slash if present
    const cleanPath = filePath.startsWith("/") ? filePath.slice(1) : filePath;
    const fullPath = path.join(process.cwd(), "public", cleanPath);
    return fs.existsSync(fullPath);
  } catch {
    return false;
  }
}
