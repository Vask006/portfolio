import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedTalk, getAllTalks } from "@/src/data/speaking";

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

// JSON-LD structured data for featured talk (Speech/Event)
function getStructuredData(talk: ReturnType<typeof getFeaturedTalk>) {
  if (!talk) return null;

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Speech", "Event"],
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

  if (talk.videoUrl) {
    structuredData.video = {
      "@type": "VideoObject",
      url: talk.videoUrl,
    };
  }

  return structuredData;
}

export default function SpeakingPage() {
  const featuredTalk = getFeaturedTalk();
  const allTalks = getAllTalks();
  const otherTalks = allTalks.filter(talk => !talk.featured);
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
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {featuredTalk.title}
                </h3>
                {featuredTalk.talkType && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                    {featuredTalk.talkType}
                  </span>
                )}
              </div>
              
              {/* Topics/Tags as Pills */}
              {featuredTalk.topics && featuredTalk.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredTalk.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

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
                {featuredTalk.audience && (
                  <p className="text-gray-700 dark:text-gray-300">
                    {featuredTalk.audience}
                  </p>
                )}
              </div>

              {/* Slides Availability Badge */}
              {(featuredTalk.hasPdf || featuredTalk.hasPptx) && (
                <div className="mb-6">
                  {featuredTalk.hasPdf && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 mr-2">
                      Slides available
                    </span>
                  )}
                  {!featuredTalk.hasPdf && featuredTalk.hasPptx && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      PPTX available
                    </span>
                  )}
                </div>
              )}

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
                {featuredTalk.externalLinks && featuredTalk.externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                {featuredTalk.hasPdf && featuredTalk.slidesPdf && (
                  <a
                    href={encodeURI(featuredTalk.slidesPdf)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Download Slides (PDF)
                  </a>
                )}
                {featuredTalk.hasPptx && featuredTalk.slidesPptx && (
                  <a
                    href={encodeURI(featuredTalk.slidesPptx)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Download Slides (PPTX)
                  </a>
                )}
                {!featuredTalk.hasPdf && !featuredTalk.hasPptx && (featuredTalk.slidesPdf || featuredTalk.slidesPptx) && (
                  <span className="inline-flex items-center justify-center px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">
                    Slides coming soon
                  </span>
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

              {/* Highlights */}
              {featuredTalk.highlights && featuredTalk.highlights.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Highlights
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    {featuredTalk.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
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
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {talk.title}
                    </h3>
                    {talk.talkType && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                        {talk.talkType}
                      </span>
                    )}
                  </div>
                  
                  {/* Topics/Tags as Pills */}
                  {talk.topics && talk.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {talk.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Abstract */}
                  {talk.abstract && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {talk.abstract}
                    </p>
                  )}

                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                    <p>
                      <span className="font-semibold">Event:</span> {talk.eventName || talk.event}
                    </p>
                    <p>
                      <span className="font-semibold">Date:</span> {talk.date}
                    </p>
                    {talk.location && (
                      <p>
                        <span className="font-semibold">Location:</span> {talk.location}
                      </p>
                    )}
                  </div>
                  {/* Slides Availability Badge */}
                  {(talk.hasPdf || talk.hasPptx) && (
                    <div className="mb-3">
                      {talk.hasPdf && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 mr-2">
                          Slides available
                        </span>
                      )}
                      {!talk.hasPdf && talk.hasPptx && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          PPTX available
                        </span>
                      )}
                    </div>
                  )}
                  {/* Action Buttons - Event, Video, Slides */}
                  <div className="flex flex-wrap gap-2">
                    {(talk.eventUrl || talk.officialPageUrl) && (
                      <a
                        href={talk.eventUrl || talk.officialPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Event →
                      </a>
                    )}
                    {(talk.videoUrl || talk.youtubeUrl) && (
                      <a
                        href={talk.videoUrl || talk.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Video →
                      </a>
                    )}
                    {talk.hasPdf && (talk.slidesPdf || talk.slidesPdfUrl) && (
                      <a
                        href={encodeURI(talk.slidesPdf || talk.slidesPdfUrl || "")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Slides →
                      </a>
                    )}
                    {talk.hasPptx && talk.slidesPptx && (
                      <a
                        href={encodeURI(talk.slidesPptx)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Slides (PPTX) →
                      </a>
                    )}
                    {!talk.hasPdf && !talk.hasPptx && (talk.slidesPdf || talk.slidesPdfUrl || talk.slidesPptx) && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Slides coming soon
                      </span>
                    )}
                    {talk.slug && (
                      <Link
                        href={`/speaking/${talk.slug}`}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Details →
                      </Link>
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
