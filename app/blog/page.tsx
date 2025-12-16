"use client";

import { useState, useMemo } from "react";
import { getAllBlogPosts, getFeaturedBlogPosts, getAllTags, type BlogPost } from "@/src/data/blog";
import { BlogPostCard } from "@/components/BlogPostCard";

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();
  const allAvailableTags = getAllTags();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Filter posts based on search and tag
  const filteredPosts = useMemo(() => {
    let filtered = allPosts.filter((post) => !post.featured);

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(query)
      );
    }

    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    // Sort alphabetically by title
    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [allPosts, searchQuery, selectedTag]);

  const filteredFeaturedPosts = useMemo(() => {
    let filtered = featuredPosts;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(query)
      );
    }

    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    return filtered;
  }, [featuredPosts, searchQuery, selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl">
          Writing on cloud architecture, enterprise systems, AI, governance,
          DevSecOps, and integration patterns.
        </p>

        {/* Follow on Medium Link */}
        <div className="mb-8">
          <a
            href="https://medium.com/@vask006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span>Follow on Medium</span>
            <span>→</span>
          </a>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search posts by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Tag Filter Dropdown */}
          <div className="sm:w-64">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Tags</option>
              {allAvailableTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tag Chips (Alternative filter UI) */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag("")}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === ""
                  ? "bg-blue-600 dark:bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            {allAvailableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? "bg-blue-600 dark:bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      {filteredFeaturedPosts.length > 0 && (
        <section className="mb-16">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-2 mb-6">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 tracking-wide">
              Featured
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredFeaturedPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} variant="featured" />
            ))}
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section>
        <div className="border-b border-gray-200 dark:border-gray-800 pb-2 mb-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 tracking-wide">
            All Posts
          </h2>
        </div>
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} variant="default" />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No posts found matching your filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
