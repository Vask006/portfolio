"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-gray-100"
            >
              Home
            </Link>
            <div className="hidden md:flex gap-6">
              <Link
                href="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Blog
              </Link>
              <Link
                href="/articles"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Articles
              </Link>
              <Link
                href="/books"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Books
              </Link>
              <Link
                href="/speaking"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Speaking
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Projects
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
