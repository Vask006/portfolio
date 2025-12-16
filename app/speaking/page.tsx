import type { Metadata } from "next";
import { speakingTalks, getFeaturedTalk, getOtherTalks } from "@/src/data/speaking";

export const metadata: Metadata = {
  title: "Speaking | Anand Kumar Vedantham",
  description:
    "Invited talks and presentations on security-first architecture, cloud, AI, and enterprise systems.",
  openGraph: {
    title: "Speaking | Anand Kumar Vedantham",
    description:
      "Invited talks and presentations on security-first architecture, cloud, AI, and enterprise systems.",
    type: "website",
  },
};

// JSON-LD structured data for featured talk
function getStructuredData(talk: ReturnType<typeof getFeaturedTalk>) {
  if (!talk) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: talk.title,
    description: talk.summary?.join(" ") || talk.title,
    startDate: "2025-08-19",
    endDate: "2025-08-20",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: talk.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: talk.location,
      },
    },
    organizer: {
      "@type": "Organization",
      name: talk.organizer,
    },
    performer: {
      "@type": "Person",
      name: "Anand Kumar Vedantham",
    },
    about: {
      "@type": "Thing",
      name: "Enterprise Security Architecture",
    },
  };
}

export default function SpeakingPage() {
  const featuredTalk = getFeaturedTalk();
  const otherTalks = getOtherTalks();
  const structuredData = getStructuredData(featuredTalk);

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Speaking
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Invited talks and presentations on security-first architecture, cloud, AI, and enterprise systems.
          </p>
        </div>

        {/* Featured Talk Section */}
        {featuredTalk && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Featured Talk
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {featuredTalk.title}
              </h3>
              <div className="space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Event:</span> {featuredTalk.event}
                </p>
                <p>
                  <span className="font-semibold">Organizer:</span> {featuredTalk.organizer}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {featuredTalk.date}
                </p>
                <p>
                  <span className="font-semibold">Location:</span> {featuredTalk.location}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {featuredTalk.officialPageUrl && (
                  <a
                    href={featuredTalk.officialPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  >
                    Official Page
                  </a>
                )}
                {featuredTalk.videoUrl && (
                  <a
                    href={featuredTalk.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Watch Video
                  </a>
                )}
                {featuredTalk.slidesPdf && (
                  <a
                    href={featuredTalk.slidesPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Download Slides (PDF)
                  </a>
                )}
                {featuredTalk.slidesPptx && (
                  <a
                    href={featuredTalk.slidesPptx}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Download Slides (PPTX)
                  </a>
                )}
              </div>

              {/* Talk Summary */}
              {featuredTalk.summary && featuredTalk.summary.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Talk Summary
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    {featuredTalk.summary.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why This Talk Matters */}
              {featuredTalk.whyItMatters && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Why This Talk Matters
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {featuredTalk.whyItMatters}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* More Talks Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            More Talks
          </h2>
          {otherTalks.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {otherTalks.map((talk, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    {talk.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                    <p>
                      <span className="font-semibold">Event:</span> {talk.event}
                    </p>
                    <p>
                      <span className="font-semibold">Date:</span> {talk.date}
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span> {talk.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {talk.officialPageUrl && (
                      <a
                        href={talk.officialPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Official Page →
                      </a>
                    )}
                    {talk.videoUrl && (
                      <a
                        href={talk.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Watch Video →
                      </a>
                    )}
                    {talk.slidesPdf && (
                      <a
                        href={talk.slidesPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Slides (PDF) →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                More talks coming soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
