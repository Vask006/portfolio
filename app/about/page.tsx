import Link from "next/link";
import { ProfileCard } from "@/components/ProfileCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Anand Kumar Vedantham",
  description:
    "Software Architect specializing in cloud, AI, and enterprise-scale systems with over 18 years of experience designing and leading complex platforms.",
  openGraph: {
    title: "About Anand Kumar Vedantham",
    description:
      "Software Architect specializing in cloud, AI, and enterprise-scale systems with over 18 years of experience.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content - Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              About Anand Kumar Vedantham
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I am a Software Architect specializing in cloud, AI, and
                enterprise-scale systems, with over 18 years of experience
                designing and leading complex platforms across regulated and
                high-impact domains. My work focuses on architecting secure,
                scalable, and resilient systems—often at the intersection of
                cloud infrastructure, AI-driven analytics, and governance-heavy
                enterprise environments.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Over the course of my career, I have consistently operated at a
                system and framework level, defining architectural patterns,
                security-first approaches, and integration strategies that extend
                beyond individual projects and are reused across teams and
                organizations.
              </p>
            </div>
          </div>

          {/* Section 1 - Career Trajectory */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Career Trajectory
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                My professional journey has evolved from hands-on engineering
                into enterprise architecture and technical leadership. Early in
                my career, I worked deeply within application and platform
                development, gaining a strong foundation in distributed systems,
                data processing, and cloud-native design.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                As systems grew in scale and complexity, my role expanded into
                defining architectural standards, guiding platform modernization
                initiatives, and making design decisions that affected multiple
                teams, systems, and business units. This transition marked a
                shift from delivering features to shaping how systems are
                designed, secured, and operated at scale.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Throughout this progression, I have been entrusted with critical
                responsibilities—including platform architecture, security
                posture definition, and integration strategy—often in
                environments where reliability, compliance, and long-term
                sustainability were non-negotiable.
              </p>
            </div>
          </section>

          {/* Section 2 - Focus Areas & Technical Philosophy */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Focus Areas & Technical Philosophy
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                My work is guided by a consistent technical philosophy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
                <li>
                  <strong>Architecture before implementation</strong> — focusing
                  on system boundaries, failure modes, and long-term
                  maintainability.
                </li>
                <li>
                  <strong>Security as a design principle, not a bolt-on</strong>{" "}
                  — embedding identity, zero trust, and compliance into the
                  architecture itself.
                </li>
                <li>
                  <strong>Scalability through simplicity</strong> — favoring
                  clear contracts, event-driven patterns, and composable systems
                  over tightly coupled designs.
                </li>
                <li>
                  <strong>Responsible AI adoption</strong> — integrating AI
                  capabilities with governance, observability, and human
                  oversight.
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These principles have shaped both my practical system designs
                and the original frameworks and reference architectures I have
                developed over time.
              </p>
            </div>
          </section>

          {/* Section 3 - Original Contributions & Frameworks */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Original Contributions & Frameworks
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                A significant portion of my work centers on developing reusable
                frameworks and architectural approaches that address recurring
                enterprise challenges. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
                <li>
                  Enterprise cloud and integration frameworks that balance
                  agility with governance
                </li>
                <li>
                  Security-first architectural patterns for cloud-native and
                  hybrid systems
                </li>
                <li>
                  Event-driven and data-centric architectures for large-scale
                  IoT and AI platforms
                </li>
                <li>
                  Governance and standards-oriented approaches to AI-enabled
                  enterprise systems
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These frameworks are designed to be reusable, extensible, and
                adaptable across organizations, enabling teams to solve complex
                problems without reinventing foundational architecture for each
                initiative.
              </p>
            </div>
          </section>

          {/* Section 4 - Knowledge Sharing & Thought Leadership */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Knowledge Sharing & Thought Leadership
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In parallel with hands-on architectural work, I actively document
                and share technical knowledge through long-form articles,
                publications, and conference-style presentations. My writing
                focuses on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
                <li>Enterprise-grade cloud architecture</li>
                <li>AI integration in legacy and modern systems</li>
                <li>Security-first system design</li>
                <li>Event-driven and distributed architectures</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Rather than introductory tutorials, my publications emphasize
                system-level reasoning, trade-offs, and design patterns intended
                for experienced engineers and architects.
              </p>
            </div>
          </section>

          {/* Section 5 - Leadership, Mentorship & Influence */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Leadership, Mentorship & Influence
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Beyond technical delivery, I have played a leadership role in
                guiding engineering teams, mentoring architects and senior
                engineers, and influencing architectural direction across
                multiple initiatives. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
                <li>Defining architectural standards and best practices</li>
                <li>Reviewing and guiding high-impact design decisions</li>
                <li>Mentoring teams on scalable, secure system design</li>
                <li>
                  Supporting platform modernization and transformation efforts
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These responsibilities reflect a trusted position within
                engineering organizations, where architectural decisions have
                long-term technical and business impact.
              </p>
            </div>
          </section>

          {/* Section 6 - Professional Identity */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Professional Identity
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At my core, I operate as a system thinker and architect focused
                on building solutions that endure—technically, operationally, and
                organizationally. My work sits at the intersection of
                engineering, architecture, and strategy, with an emphasis on
                clarity, security, and sustainable innovation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This portfolio serves as a curated record of that work: original
                frameworks, published technical thought leadership, and
                representative projects that reflect sustained contributions to
                the field of enterprise software architecture.
              </p>
            </div>
          </section>

          {/* Selected Contributions */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
              Selected Contributions:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/frameworks"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Frameworks
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href="/articles"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Articles
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Projects
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href="/speaking"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Speaking
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Card - Right Column */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}

