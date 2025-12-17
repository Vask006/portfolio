import type { BlogPost } from "@/src/data/blog";

interface BlogPostCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
}

export function BlogPostCard({ post, variant = "default" }: BlogPostCardProps) {
  const isFeatured = variant === "featured";

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
        isFeatured ? "md:col-span-1" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3
          className={`font-semibold text-gray-900 dark:text-gray-100 pr-2 ${
            isFeatured ? "text-xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>
        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded flex-shrink-0">
          {post.source}
        </span>
      </div>

      {post.excerpt && (
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
          {post.excerpt}
        </p>
      )}

      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        {post.date && <span>{post.date}</span>}
        {post.readingTime && <span>{post.readingTime}</span>}
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4">
        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
          Read on Medium →
        </span>
      </div>
    </a>
  );
}


