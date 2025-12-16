import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { getFeaturedProjects } from "@/lib/projects";
import { formatDate } from "@/lib/utils";
import { Search } from "@/components/Search";
import { buildSearchIndex } from "@/lib/search";

export default function HomePage() {
  const recentBlog = getAllContent("blog").slice(0, 3);
  const featuredProjects = getFeaturedProjects();
  const searchIndex = buildSearchIndex();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Developer, writer, and lifelong learner.
        </p>
        <Search index={searchIndex} />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Blog Posts</h2>
          <div className="space-y-4">
            {recentBlog.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-semibold mb-2">{post.frontmatter.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {post.frontmatter.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{formatDate(post.frontmatter.date)}</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all posts →
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex gap-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Visit →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </div>
  );
}
