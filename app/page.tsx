import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { getFeaturedProjects } from "@/lib/projects";
import { formatDate } from "@/lib/utils";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { Search } from "@/components/Search";
import { buildSearchIndex } from "@/lib/search";

export default function HomePage() {
  const recentBlog = getAllContent("blog").slice(0, 3);
  const featuredProjects = getFeaturedProjects();
  const searchIndex = buildSearchIndex();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Anand Kumar Vedantham
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Software Architect | Cloud, AI & Enterprise Systems
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I architect security-first, enterprise-grade platforms on Azure and write about cloud architecture, AI, and digital transformation. My work focuses on scalable systems, governance, and DevSecOps practices that make security measurable from design through operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                View Projects
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Read Articles
              </Link>
            </div>
            
            {/* Connect Section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Connect
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:vask006@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email: vask006@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <span>📧</span>
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anand006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://medium.com/@vask006"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium profile"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <span>✍️</span>
                  <span>Medium</span>
                </a>
                <a
                  href="https://www.facebook.com/anand.kumar.vedantham.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook profile"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <span>📘</span>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/anandkumarvedantham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <span>📷</span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          {/* Profile Photo */}
          <div className="flex-shrink-0 order-1 md:order-2 flex justify-center md:justify-end">
            <ProfilePhoto />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-12">
        <Search index={searchIndex} />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Blog Posts</h2>
          <div className="space-y-4">
            {recentBlog.map((post) => (
              <Link
                key={post.slug}
                href="/blog"
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
