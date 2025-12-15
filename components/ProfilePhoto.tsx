"use client";

import { useState, useEffect } from "react";

export function ProfilePhoto() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Check if image exists before showing it
    const img = new Image();
    img.onload = () => setShowImage(true);
    img.onerror = () => setShowImage(false);
    img.src = "/profile.jpg";
  }, []);

  return (
    <div className="relative pb-8">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg">
        {showImage ? (
          <img
            src="/profile.jpg"
            alt="Anand Kumar Vedantham"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              AKV
            </span>
          </div>
        )}
      </div>
      {/* Badges */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-1 flex-wrap justify-center max-w-[200px]">
        {["Azure", "AI", "DevSecOps"].map((badge) => (
          <span
            key={badge}
            className="px-2 py-0.5 text-xs font-medium bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-sm"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

