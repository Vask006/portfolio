import { checkPublicFileExists } from "@/lib/utils";

export interface ExternalLink {
  label: string;
  url: string;
}

export interface SpeakingTalk {
  slug: string;
  title: string;
  speaker?: string;
  event: string;
  eventName?: string;
  eventUrl?: string;
  organizer: string;
  date: string;
  location: string;
  officialPageUrl?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  slidesPdf?: string;
  slidesPdfUrl?: string;
  slidesPptx?: string;
  summary?: string[];
  abstract?: string;
  keySections?: string[];
  outcomes?: string[];
  whyItMatters?: string;
  featured?: boolean;
  // New optional fields
  audience?: string;
  talkType?: "Keynote" | "Session" | "Workshop";
  topics?: string[];
  externalLinks?: ExternalLink[];
  highlights?: string[];
  // Availability flags (set at build time)
  hasPdf?: boolean;
  hasPptx?: boolean;
}

export const speakingTalks: SpeakingTalk[] = [
  {
    slug: "security-first-enterprise-systems",
    title: "Architecting Security-First Enterprise Systems: From Design to DevSecOps at Scale",
    speaker: "Anand Kumar Vedantham",
    event: "SEI Secure Software by Design 2025",
    eventName: "SEI Secure Software by Design 2025",
    eventUrl: "https://www.sei.cmu.edu/library/secure-software-by-design-2025-presentations/",
    organizer: "Carnegie Mellon University Software Engineering Institute (SEI)",
    date: "August 19–20, 2025",
    location: "Arlington, VA",
    officialPageUrl: "https://www.sei.cmu.edu/library/secure-software-by-design-2025-presentations/",
    videoUrl: "https://www.youtube.com/watch?v=vkqSZAOVg3U",
    youtubeUrl: "https://www.youtube.com/watch?v=vkqSZAOVg3U",
    slidesPdf: "/speaking/Architecting Security-First Enterprise Systems.pdf",
    slidesPdfUrl: "/speaking/Architecting Security-First Enterprise Systems.pdf",
    slidesPptx: "/speaking/sei-secure-by-design-2025-architecting-security-first-enterprise-systems.pptx",
    talkType: "Session",
    audience: "Audience: ~100 industry professionals (two-day conference).",
    topics: [
      "Security-First",
      "Threat Modeling",
      "Policy-as-Code",
      "CI/CD Scans",
      "SOAR",
      "DevSecOps",
      "Metrics"
    ],
    abstract: "Security-first is a lifecycle approach from design to operations with measurable impact. This session presents a reference architecture for embedding security into enterprise systems from the ground up, covering design principles, DevSecOps practices, and operational metrics that demonstrate real-world effectiveness.",
    keySections: [
      "Why Security-First Now?",
      "Security-First Lifecycle (Design → Dev → DevSecOps → Ops)",
      "Use-Case Snapshots",
      "Metrics That Matter"
    ],
    outcomes: [
      "Reduced vulnerability backlog by 60% through proactive threat modeling",
      "Improved Mean Time to Remediate (MTTR) by 45% with automated pipeline controls",
      "Reduced audit preparation time by 50% through policy-as-code and evidence automation",
      "Achieved 99.5% compliance rate in production deployments",
      "Decreased security-related incidents by 40% year-over-year"
    ],
    summary: [
      "Security as a design principle, not an afterthought",
      "Reference architecture for security-first enterprise systems",
      "DevSecOps at scale (policy-as-code, pipeline controls, evidence)",
      "Observability and operational governance"
    ],
    highlights: [
      "Presented reference architecture adopted by multiple enterprise teams",
      "Featured in SEI's official conference proceedings",
      "~100 industry professionals (two-day conference)"
    ],
    externalLinks: [
      {
        label: "Conference Program",
        url: "https://www.sei.cmu.edu/library/secure-software-by-design-2025-presentations/"
      }
    ],
    whyItMatters: "This talk addresses a critical industry challenge: building enterprise systems where security is embedded from the ground up rather than retrofitted. The reference architecture and patterns presented provide actionable guidance for organizations facing increasing security requirements, compliance mandates, and the need to scale secure development practices. The emphasis on system-level design and operational governance reflects real-world needs in cloud-native and hybrid environments.",
    featured: true
  }
];

/**
 * Enrich talk data with file availability information (build-time check)
 */
function enrichTalkWithAvailability(talk: SpeakingTalk): SpeakingTalk {
  const pdfPath = talk.slidesPdf || talk.slidesPdfUrl;
  const pptxPath = talk.slidesPptx;
  
  return {
    ...talk,
    // Normalize video URL
    videoUrl: talk.videoUrl || talk.youtubeUrl,
    youtubeUrl: talk.youtubeUrl || talk.videoUrl,
    // Normalize PDF path
    slidesPdf: pdfPath,
    slidesPdfUrl: pdfPath,
    // Check file availability
    hasPdf: pdfPath ? checkPublicFileExists(pdfPath) : false,
    hasPptx: pptxPath ? checkPublicFileExists(pptxPath) : false,
  };
}

export function getFeaturedTalk(): SpeakingTalk | undefined {
  const talk = speakingTalks.find(talk => talk.featured);
  return talk ? enrichTalkWithAvailability(talk) : undefined;
}

export function getOtherTalks(): SpeakingTalk[] {
  return speakingTalks
    .filter(talk => !talk.featured)
    .map(talk => enrichTalkWithAvailability(talk));
}

export function getAllTalks(): SpeakingTalk[] {
  return speakingTalks.map(talk => enrichTalkWithAvailability(talk));
}

export function getTalkBySlug(slug: string): SpeakingTalk | undefined {
  const talk = speakingTalks.find(talk => talk.slug === slug);
  return talk ? enrichTalkWithAvailability(talk) : undefined;
}

export function getAllSlugs(): string[] {
  return speakingTalks.map(talk => talk.slug);
}
