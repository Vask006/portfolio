/**
 * Blog post data file
 * 
 * To add a new Medium post:
 * 1. Add a new object to the blogPosts array below
 * 2. Required fields: id, title, url, source, tags
 * 3. Optional fields: date, readingTime, excerpt, featured
 * 
 * Example:
 * {
 *   id: "unique-id-from-url",
 *   title: "Your Post Title",
 *   url: "https://medium.com/@vask006/your-post-slug",
 *   source: "Medium",
 *   tags: ["Azure", "Cloud Architecture"],
 *   featured: false,
 * }
 */

export type BlogPost = {
  id: string;
  title: string;
  url: string;
  source: "Medium";
  date?: string;        // optional
  readingTime?: string; // optional
  excerpt?: string;     // optional
  tags: string[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "11790bba9ea7",
    title: "Designing Enterprise-Grade Systems on Azure: A Modern Architecture Blueprint",
    url: "https://medium.com/@vask006/designing-enterprise-grade-systems-on-azure-a-modern-architecture-blueprint-11790bba9ea7",
    source: "Medium",
    tags: ["Azure", "Cloud Architecture", "Enterprise Architecture"],
    featured: true,
  },
  {
    id: "4a84d5120d6f",
    title: "From Silos to Smart Sync: Rethinking Master Data Management with AI at the Helm",
    url: "https://medium.com/@vask006/from-silos-to-smart-sync-rethinking-master-data-management-with-ai-at-the-helm-4a84d5120d6f",
    source: "Medium",
    tags: ["AI", "Data", "Enterprise Architecture"],
    featured: true,
  },
  {
    id: "5cdf499c0b8c",
    title: "CONNECT Framework for AI-Augmented Enterprise Alignment and Platform Governance",
    url: "https://medium.com/@vask006/connect-framework-for-ai-augmented-enterprise-alignment-and-platform-governance-5cdf499c0b8c",
    source: "Medium",
    tags: ["AI", "Enterprise Architecture", "DevSecOps"],
    featured: true,
  },
  {
    id: "7b5c6ed42396",
    title: "REST API vs Event-Driven Systems vs Real-Time Streaming: Choosing the Right Approach",
    url: "https://medium.com/@vask006/rest-api-vs-event-driven-systems-vs-real-time-streaming-choosing-the-right-approach-7b5c6ed42396",
    source: "Medium",
    tags: ["Event-Driven", "Integration", "Cloud Architecture"],
    featured: true,
  },
  {
    id: "3b64d0e6df41",
    title: "Resolving Service Bus Topic Size Limit Exceeded: A Practical Guide",
    url: "https://medium.com/@vask006/resolving-service-bus-topic-size-limit-exceeded-a-practical-guide-3b64d0e6df41",
    source: "Medium",
    tags: ["Azure", "Integration", "Reliability"],
    featured: false,
  },
  {
    id: "eaf539bd5249",
    title: "Pros and Cons of Azure Functions",
    url: "https://medium.com/@vask006/pros-and-cons-of-azure-functions-eaf539bd5249",
    source: "Medium",
    tags: ["Azure", "Cloud Architecture"],
    featured: false,
  },
  {
    id: "8b1bf3f780be",
    title: "Are Customer Pain Points and Use Cases the Same? How a Product Manager Handles Them",
    url: "https://medium.com/@vask006/are-customer-pain-points-and-use-cases-are-same-how-a-product-manager-handle-8b1bf3f780be",
    source: "Medium",
    tags: ["Product"],
    featured: false,
  },
  {
    id: "bc747c65cb24",
    title: "A Guide to Scalable Architectures in Azure: Key Principles and Best Practices",
    url: "https://medium.com/@vask006/a-guide-to-scalable-architectures-in-azure-key-principles-and-best-practices-bc747c65cb24",
    source: "Medium",
    tags: ["Azure", "Cloud Architecture", "Enterprise Architecture"],
    featured: false,
  },
  {
    id: "4fa9a73fed62",
    title: "A Deep Dive into the Azure Well-Architected Framework: Building Scalable, Secure Systems",
    url: "https://medium.com/@vask006/a-deep-dive-into-the-azure-well-architected-framework-building-scalable-secure-and-4fa9a73fed62",
    source: "Medium",
    tags: ["Azure", "Cloud Architecture", "Enterprise Architecture"],
    featured: false,
  },
  {
    id: "26c03034916f",
    title: "Real-Time Data Processing with Azure Functions",
    url: "https://medium.com/@vask006/real-time-data-processing-with-azure-functions-26c03034916f",
    source: "Medium",
    tags: ["Azure", "Event-Driven", "Data"],
    featured: false,
  },
  {
    id: "cb7aed6aaba6",
    title: "5 Best Practices for Scaling Cloud-Native Applications with Kubernetes",
    url: "https://medium.com/@vask006/5-best-practices-for-scaling-cloud-native-applications-with-kubernetes-cb7aed6aaba6",
    source: "Medium",
    tags: ["Kubernetes", "Cloud Architecture", "Microservices"],
    featured: false,
  },
  {
    id: "d52937815f5b",
    title: "Migrating from Monolith to Microservices: A Comprehensive Guide",
    url: "https://medium.com/@vask006/migrating-from-monolith-to-microservices-a-comprehensive-guide-d52937815f5b",
    source: "Medium",
    tags: ["Microservices", "Enterprise Architecture", "Integration"],
    featured: false,
  },
  {
    id: "12e87ae26a4e",
    title: "The Ultimate Guide to Custom JSON Converters in .NET for Real-World Scenarios",
    url: "https://medium.com/@vask006/the-ultimate-guide-to-custom-json-converters-in-net-for-real-world-scenarios-12e87ae26a4e",
    source: "Medium",
    tags: [".NET", "Integration"],
    featured: false,
  },
  {
    id: "0e63d125d520",
    title: "Bridging the Past and Future: Effective Strategies for Integrating Legacy Systems with Modern Architecture",
    url: "https://medium.com/@vask006/bridging-the-past-and-future-effective-strategies-for-integrating-legacy-systems-with-modern-0e63d125d520",
    source: "Medium",
    tags: ["Integration", "Enterprise Architecture"],
    featured: false,
  },
  {
    id: "c2162b5fd7fe",
    title: "The Telematics Revolution: Unlocking Real-Time Connectivity Across Industries",
    url: "https://medium.com/@vask006/the-telematics-revolution-unlocking-real-time-connectivity-across-industries-c2162b5fd7fe",
    source: "Medium",
    tags: ["IoT", "Event-Driven", "Data"],
    featured: false,
  },
  {
    id: "d657e2cbc1ac",
    title: "Mastering MACH Principles: The Future of Modern Ecommerce Architecture",
    url: "https://medium.com/@vask006/mastering-mach-principles-the-future-of-modern-ecommerce-architecture-d657e2cbc1ac",
    source: "Medium",
    tags: ["Ecommerce", "Enterprise Architecture", "Cloud Architecture"],
    featured: false,
  },
];

/**
 * Get all blog posts
 */
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

/**
 * Get non-featured blog posts
 */
export function getNonFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => !post.featured);
}

/**
 * Get all unique tags from all blog posts
 */
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
