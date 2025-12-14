"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SearchIndexItem } from "@/lib/search";

interface SearchProps {
  index: SearchIndexItem[];
}

export function Search({ index }: SearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return index
      .filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
      )
      .slice(0, 10);
  }, [query, index]);

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {item.type}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
