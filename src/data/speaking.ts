export type Talk = {
  title: string;
  event: string;
  organizer: string;
  date: string;
  location: string;
  officialPageUrl?: string;
  videoUrl?: string;
  slidesPdf?: string;
  slidesPptx?: string;
  summary?: string[];
  whyItMatters?: string;
  featured?: boolean;
};

export const speakingTalks: Talk[] = [
  // Add speaking engagements here
  // Example structure:
  // {
  //   title: "Your Talk Title",
  //   event: "Event Name",
  //   organizer: "Organizer Name",
  //   date: "2024-01-20",
  //   location: "City, Country",
  //   officialPageUrl: "https://example.com",
  //   videoUrl: "https://example.com/video",
  //   slidesPdf: "/speaking/slides.pdf",
  //   summary: ["Key point 1", "Key point 2"],
  //   whyItMatters: "Why this talk is important...",
  //   featured: true,
  // },
];

export function getFeaturedTalk(): Talk | null {
  return speakingTalks.find((talk) => talk.featured) || null;
}

export function getOtherTalks(): Talk[] {
  return speakingTalks.filter((talk) => !talk.featured);
}
