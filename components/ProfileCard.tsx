import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <Image
            src="/profile.jpg"
            alt="Anand Kumar Vedantham"
            width={120}
            height={120}
            className="rounded-full border-2 border-gray-200 dark:border-gray-700"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          Anand Kumar Vedantham
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Software Architect
        </p>
        <div className="w-full border-t border-gray-200 dark:border-gray-800 pt-4 space-y-2">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Specializing in cloud, AI, and enterprise-scale systems
          </p>
        </div>
      </div>
    </div>
  );
}
