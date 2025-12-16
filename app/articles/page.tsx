import type { Metadata } from "next";
import ArticlesClient from "./articles-client";

export const metadata: Metadata = {
  title: "Research & Technical Publications",
  description: "Published research papers and academic publications",
};

export default function ArticlesPage() {
  return <ArticlesClient />;
}
