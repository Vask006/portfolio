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
];

export function getFeaturedTalk(): Talk | null {
  return speakingTalks.find((talk) => talk.featured) || null;
}

export function getOtherTalks(): Talk[] {
  return speakingTalks.filter((talk) => !talk.featured);
}




