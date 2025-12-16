/**
 * Publication data file
 * 
 * To add a new paper, simply add a new entry to the papers array below.
 * No code changes are required - the system will automatically pick up new entries.
 * 
 * Required fields:
 * - title: string
 * - slug: string (URL-friendly identifier)
 * - category: "Enterprise Architecture" | "Cloud & DevOps" | "AI & Data" | "IoT & Mobility"
 * - abstract: string (full abstract text)
 * - year: number
 * - links: { pdf?: string, publisher?: string, scholar?: string }
 * - tags: string[] (array of topic tags)
 * 
 * Optional fields (with defaults):
 * - authors?: string[] (defaults to ["Anand Kumar Vedantham"])
 * - publication?: string (defaults to "Academic Publication")
 * - citations?: number
 * - citationSource?: string (defaults to "Google Scholar")
 * - featured?: boolean (defaults to false)
 * 
 * Example:
 * {
 *   title: "My New Research Paper",
 *   slug: "my-new-research-paper",
 *   category: "AI & Data",
 *   abstract: "Full abstract text here...",
 *   year: 2025,
 *   links: {
 *     pdf: "https://example.com/paper.pdf",
 *     publisher: "https://example.com/journal"
 *   },
 *   tags: ["Machine Learning", "Data Science"],
 *   authors: ["Anand Kumar Vedantham", "Co-Author Name"],
 *   publication: "Journal Name",
 *   citations: 5,
 *   citationSource: "Google Scholar",
 *   featured: true
 * }
 */

export type PaperCategory =
  | "Enterprise Architecture"
  | "Cloud & DevOps"
  | "AI & Data"
  | "IoT & Mobility";

export type PaperLinks = {
  pdf?: string;
  publisher?: string;
  scholar?: string;
};

export type Paper = {
  title: string;
  slug: string;
  category: PaperCategory;
  abstract: string;
  year: number;
  links: PaperLinks;
  tags: string[];
  // Optional fields with sensible defaults
  authors?: string[];
  publication?: string;
  citations?: number;
  citationSource?: string; // Default: "Google Scholar"
  featured?: boolean;
};

// Papers listed in the order they should appear on the Articles page
export const papers: Paper[] = [
  // 1. Geofencing in IoT: Enhancing Location-Based Services
  {
    title: "Geofencing in IoT: Enhancing Location-Based Services",
    slug: "geofencing-in-iot",
    category: "IoT & Mobility",
    abstract: "Geofencing technology has emerged as a transformative force in the Internet of Things ecosystem, revolutionizing how organizations leverage location-based services across multiple sectors. This comprehensive article explores the technical foundations, key applications, implementation considerations, best practices, and future trends in geofencing technology. The article examines the integration of various positioning technologies, including GPS, RFID, and indoor positioning systems, alongside the crucial role of artificial intelligence and machine learning in enhancing system performance. The article delves into diverse applications across fleet management, retail, smart cities, agriculture, and security sectors, highlighting the technology's versatility and impact. Through a detailed examination of implementation strategies, the article addresses critical aspects of accuracy requirements, battery optimization, data privacy, and network infrastructure needs, providing insights into successful deployment approaches and emerging technological advances.",
    year: 2024,
    links: {
      pdf: "https://iaeme.com/MasterAdmin/Journal_uploads/IJCET/VOLUME_15_ISSUE_6/IJCET_15_06_057.pdf",
      publisher: "https://iaeme.com/Home/journal/IJCET",
    },
    tags: ["IoT", "Location Intelligence", "Distributed Systems", "Smart Cities", "Security & Privacy"],
    authors: ["Anand Kumar Vedantham"],
    publication: "International Journal of Computer Engineering & Technology (IJCET)",
    citations: 22,
    citationSource: "Google Scholar",
    featured: true,
  },
  // 2. CONNECT Framework for AI-Augmented Enterprise Alignment and Platform Governance
  {
    title: "CONNECT Framework for AI-Augmented Enterprise Alignment and Platform Governance",
    slug: "connect-framework-ai-governance",
    category: "Enterprise Architecture",
    abstract: "Organizations pursuing digital transformation frequently encounter systemic fragmentation despite aspirations for unified enterprise connectivity. Common manifestations include siloed development practices where teams independently construct similar systems, resulting in redundant solutions and integration complexities. Tool sprawl emerges as teams introduce disparate technologies without strategic alignment, creating fragmented workflows and operational inefficiencies. Legacy system accumulation compounds these challenges as innovative solutions become entrenched and costly to maintain. Additionally, teams often revert to waterfall methodologies when lacking proper alignment mechanisms. The CONNECT Framework for AI-Augmented Enterprise Alignment and Platform Governance addresses these persistent challenges through structured principles enhanced by intelligent automation: Collaborate to promote cross-functional alignment, Orchestrate integrated workflows, Normalize architectural standards, Navigate agile practices, Enable user adoption, Consolidate redundant systems, and Transform toward platform-driven capabilities. Implementation involves establishing platform governance councils, adopting API-first design principles, conducting intelligent discovery phases, maintaining automated tool registries, and deploying adaptive change enablement programs supported by machine learning algorithms and natural language processing capabilities. Expected outcomes include reduced duplication and technical debt, enhanced market agility, improved security compliance, consistent engineering practices, elevated team empowerment, and development of scalable, cohesive digital enterprises that support sustained innovation through data-driven decision-making and automated optimization capabilities.",
    year: 2025,
    links: {
      pdf: "https://al-kindipublisher.com/index.php/jcsts/article/view/10743/9497",
      publisher: "https://al-kindipublisher.com/index.php/jcsts/article/view/10743",
    },
    tags: ["Enterprise Architecture", "Platform Governance", "AI-Augmented Governance", "Digital Transformation", "Operating Model"],
    authors: ["Anand Kumar Vedantham"],
    publication: "Journal of Computer Science and Technology Studies (JCSTS)",
    citations: 9,
    citationSource: "Google Scholar",
    featured: true,
  },
  // 3. Leveraging AI-Enhanced Master Data Management for Real-Time Data Governance
  {
    title: "Leveraging AI-Enhanced Master Data Management for Real-Time Data Governance and Strategic Enterprise Value",
    slug: "ai-enhanced-mdm-data-governance",
    category: "Enterprise Architecture",
    abstract: "The recent age of digital transformation, characterized by a data-driven approach, renders real-time methods of managing and synchronizing enterprise data as a strategic necessity. Conventional Master Data Management (MDM) systems have become lesser and less effective in dealing with the complexity of the contemporary, multi-cloud, and hybrid world. This paper will discuss how Artificial Intelligence (AI) can be used in MDM systems to promote realtime synchronization of data to ensure that businesses obtain more value. Intelligent data governance. Artificial intelligence-based MDM systems allow intelligent data governance, anomaly dynamic detection, automation of data cleansing, and dynamic metadata management to achieve consistent and superior quality data silos throughout the organization. Enterprises can enhance operational efficiency, decision-making, and scalability through machine learning, natural language processing as well and stream analytics. The article discusses modern architectures, examples of enterprise utilization, implementation issues, and challenges, and provides a conceptual blueprint of organizations that show interest in utilizing AI-empowered MDM systems. Finally, the study highlights the radical possibility of AI in restructuring the enterprise data strategies and availing long-term competitive advantage.",
    year: 2025,
    links: {
      pdf: "https://ijetrm.com/issues/files/Jul-2025-29-1753762995-JULY97.pdf",
    },
    tags: ["AI", "Master Data Management", "Data Governance", "Enterprise Data Architecture", "Hybrid Cloud"],
    authors: ["Anand Kumar Vedantham"],
    publication: "International Journal of Engineering Technology Research & Management (IJETRM)",
    citations: 13,
    citationSource: "Google Scholar",
    featured: true,
  },
  // 4. Cloud and IoT Technologies Revolutionizing Precision Agriculture
  {
    title: "Cloud and IoT Technologies Revolutionizing Precision Agriculture",
    slug: "cloud-iot-precision-agriculture",
    category: "IoT & Mobility",
    abstract: "Integrating Cloud Computing and Internet of Things (IoT) technologies is revolutionizing the agricultural sector by enabling precision farming practices and data-driven decision-making. This comprehensive article explores the transformation of traditional farming through smart agriculture technologies, examining the technological infrastructure, key applications, and measurable benefits. The article discusses how IoT sensor networks, cloud-based analytics, and automated systems enhance resource optimization, environmental sustainability, and operational efficiency. The article demonstrates that these technological implementations significantly impact water conservation, crop health monitoring, field mapping, equipment management, and environmental protection while delivering substantial economic benefits through improved yields and reduced operational costs. The article provides insights into the current state of smart agriculture adoption and its implications for future farming practices.",
    year: 2024,
    links: {
      publisher: "https://ijsrcseit.com/index.php/home/article/view/CSEIT241061140/CSEIT241061140",
    },
    tags: ["Cloud", "IoT", "Edge-to-Cloud Analytics", "Smart Agriculture", "Sustainability"],
    authors: ["Anand Kumar Vedantham"],
    publication: "International Journal of Scientific Research in Computer Science, Engineering and Information Technology",
    citations: 11,
    citationSource: "Google Scholar",
    featured: true,
  },
  // 5. Augmented Reality in Modern Vehicles: Enhancing Safety and Driver Experience
  {
    title: "Augmented Reality in Modern Vehicles: Enhancing Safety and Driver Experience",
    slug: "augmented-reality-modern-vehicles",
    category: "IoT & Mobility",
    abstract: "Integrating Augmented Reality (AR) technology in modern vehicles significantly advances automotive safety and driver assistance systems. This comprehensive article explores the current state, applications, and future trajectories of automotive AR technology, examining its impact on driver safety, navigation accuracy, and overall vehicle performance. The article synthesizes findings from multiple studies demonstrating substantial improvements in driver awareness, reaction times, and decision-making capabilities through AR implementation. The article encompasses various aspects of AR technology, including advanced navigation systems, collision avoidance mechanisms, blind spot monitoring, vehicle diagnostics, and parking assistance, while also examining the role of emerging technologies, such as 5G networks and artificial intelligence, in shaping the future of automotive AR systems. This article provides insights into the transformative potential of AR technology in revolutionizing the driving experience and enhancing road safety.",
    year: 2024,
    links: {
      pdf: "https://www.ijfmr.com/papers/2024/6/31892.pdf",
    },
    tags: ["Automotive", "Augmented Reality", "Safety Systems", "Human-Centered Design", "AI + 5G"],
    authors: ["Anand Kumar Vedantham"],
    publication: "International Journal For Multidisciplinary Research (IJFMR)",
    citationSource: "Google Scholar",
    featured: false,
  },
  // 6. Blockchain Technology: Advancing Data Integrity and Security in Modern Systems
  {
    title: "Blockchain Technology: Advancing Data Integrity and Security in Modern Systems",
    slug: "blockchain-data-integrity-security",
    category: "Enterprise Architecture",
    abstract: "This comprehensive article explores the transformative impact of blockchain technology on data security and integrity across various industries. The article examines blockchain's distributed architecture, cryptographic mechanisms, and consensus protocols that collectively establish a robust security framework. Through a detailed examination of real-world implementations, the article demonstrates blockchain's significant contributions to supply chain transparency, financial services efficiency, healthcare data management, and IoT security. The article investigates critical implementation considerations, including scalability requirements, consensus mechanism selection, and integration challenges. By evaluating current trends and emerging technologies, the article provides insights into future developments in blockchain scalability, energy efficiency, cross-chain interoperability, and privacy-preserving features, highlighting the technology's evolving role in shaping secure digital infrastructures.",
    year: 2024,
    links: {
      pdf: "https://iaeme.com/MasterAdmin/Journal_uploads/IJRCAIT/VOLUME_7_ISSUE_2/IJRCAIT_07_02_122.pdf",
      publisher: "https://iaeme.com/Home/journal/IJRCAIT",
    },
    tags: ["Blockchain", "Security", "Data Integrity", "Supply Chain", "Interoperability"],
    authors: ["Anand Kumar Vedantham"],
    publication: "International Journal of Research and Contemporary Advances in Information Technology (IJRCAIT)",
    citations: 2,
    citationSource: "Google Scholar",
    featured: false,
  },
  // 7. Observability and AIOps in Cloud-Scale DevOps
  {
    title: "Observability and AIOps in Cloud-Scale DevOps",
    slug: "observability-aiops-cloud-devops",
    category: "Cloud & DevOps",
    abstract: "Observability is fundamental for operating complex, dynamic, and distributed cloud-native systems at scale. With the rise of microservices and CloudOps, massive volumes of telemetry data overwhelm manual methods. Unlike prior surveys, this study introduces an Adaptive Observability–AIOps Integration Model (AOIM) that formalizes dynamic feedback between telemetry streams and AI-driven analytics. This framework is validated through two enterprise-scale case studies, providing statistically significant improvements in MTTD, MTTR, and false positive reduction. Artificial Intelligence for IT Operations (AIOps) leverages machine learning to automate the detection, analysis, and remediation in DevOps, enabling real-time actionable insights. This paper presents a comprehensive review of observability and AIOps for cloud-scale DevOps, detailing their principles, architectures, technical patterns, challenges, and practical implementations. We survey the latest research and industrial adoption, propose a reference architecture, analyze quantitative and qualitative case study findings, and outline critical future research opportunities.",
    year: 2025,
    links: {
      pdf: "https://www.fruct.org/files/publications/volume-38/fruct38/Amg.pdf",
    },
    tags: ["Observability", "AIOps", "DevOps", "Cloud-Native", "Reliability Engineering"],
    authors: ["Anand Kumar Vedantham"],
    publication: "FRUCT Conference Proceedings (Vol. 38)",
    citationSource: "Google Scholar",
    featured: false,
  },
];
