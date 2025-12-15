import { notFound } from "next/navigation";
import { getTalkBySlug, getAllSlugs } from "@/src/data/speaking";
import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);

  if (!talk) {
    return {
      title: "Talk Not Found",
    };
  }

  return {
    title: `${talk.title} | Speaking | Anand Kumar Vedantham`,
    description: talk.abstract || talk.summary?.join(" ") || talk.title,
    openGraph: {
      title: talk.title,
      description: talk.abstract || talk.summary?.join(" ") || talk.title,
      type: "article",
      publishedTime: talk.date,
      tags: talk.topics,
    },
  };
}

function extractYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export default async function SpeakingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);

  if (!talk) {
    notFound();
  }

  const youtubeId = talk.youtubeUrl || talk.videoUrl 
    ? extractYouTubeId(talk.youtubeUrl || talk.videoUrl || "")
    : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/speaking"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to Speaking
      </Link>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            {talk.title}
          </h1>
          {talk.talkType && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
              {talk.talkType}
            </span>
          )}
        </div>

        {/* Topics/Tags as Pills */}
        {talk.topics && talk.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {talk.topics.map((topic, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
          <p>
            <span className="font-semibold">Event:</span> {talk.eventName || talk.event}
          </p>
          <p>
            <span className="font-semibold">Organizer:</span> {talk.organizer}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {talk.date}
          </p>
          {talk.location && (
            <p>
              <span className="font-semibold">Location:</span> {talk.location}
            </p>
          )}
          {talk.audience && (
            <p className="text-gray-600 dark:text-gray-400">
              {talk.audience}
            </p>
          )}
        </div>

        {/* Event Proof Link */}
        {(talk.eventUrl || talk.officialPageUrl) && (
          <div className="mb-6">
            <a
              href={talk.eventUrl || talk.officialPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View Conference Page →
            </a>
          </div>
        )}
      </header>

      {/* Abstract */}
      {talk.abstract && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Abstract
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {talk.abstract}
          </p>
        </div>
      )}

      {/* Embedded YouTube Video */}
      {youtubeId && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Video
          </h2>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={talk.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Key Sections */}
      {talk.keySections && talk.keySections.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Key Sections
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            {talk.keySections.map((section, index) => (
              <li key={index} className="text-lg">{section}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Outcomes */}
      {talk.outcomes && talk.outcomes.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Outcomes & Impact
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            {talk.outcomes.map((outcome, index) => (
              <li key={index} className="text-lg">{outcome}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Download Slides Button */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Slides
        </h2>
        {talk.hasPdf && (talk.slidesPdf || talk.slidesPdfUrl) ? (
          <a
            href={encodeURI(talk.slidesPdf || talk.slidesPdfUrl || "")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Download Slides (PDF)
          </a>
        ) : talk.hasPptx && talk.slidesPptx ? (
          <a
            href={encodeURI(talk.slidesPptx)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Download Slides (PPTX)
          </a>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Slides coming soon
          </p>
        )}
      </div>

      {/* Summary */}
      {talk.summary && talk.summary.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Summary
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            {talk.summary.map((point, index) => (
              <li key={index} className="text-lg">{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Why This Talk Matters */}
      {talk.whyItMatters && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Why This Talk Matters
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {talk.whyItMatters}
          </p>
        </div>
      )}
    </article>
  );
}
