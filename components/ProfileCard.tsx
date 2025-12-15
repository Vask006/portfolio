"use client";

import { useState } from "react";

export function ProfileCard() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg mb-4">
          {!imageError ? (
            <img
              src="/profile.jpg"
              alt="Anand Kumar Vedantham"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">AKV</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-2">
          Anand Kumar Vedantham
        </h3>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-4">
          Software Architect
        </p>
        <p className="text-xs text-center text-gray-500 dark:text-gray-500 mb-4">
          Cloud, AI & Enterprise Systems
        </p>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Quick Highlights
        </h4>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>• 19+ years of experience</li>
          <li>• Enterprise architecture & frameworks</li>
          <li>• Cloud-native & AI systems</li>
          <li>• Security-first design</li>
          <li>• Technical thought leadership</li>
        </ul>
      </div>
    </div>
  );
}

