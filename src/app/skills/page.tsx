import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  LayoutTemplate,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore the technologies, development skills and product thinking behind The Solo Syntax.",
};

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, polished interfaces with a strong focus on interaction, accessibility and performance.",
    icon: LayoutTemplate,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Accessibility",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Creating reliable application logic, APIs and data-driven experiences that support real product functionality.",
    icon: Server,
    technologies: [
      "Node.js",
      "REST APIs",
      "Server-side Logic",
      "Authentication",
      "Database Integration",
      "API Design",
    ],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Connecting the interface and backend into cohesive products where design, functionality and performance work together.",
    icon: Braces,
    technologies: [
      "Full-Stack Architecture",
      "App Router",
      "Server Components",
      "Client Components",
      "Data Flow",
      "Deployment",
    ],
  },
  {
    number: "04",
    title: "UI / UX & Product Thinking",
    description:
      "Turning ideas into clear digital experiences with thoughtful structure, visual hierarchy and purposeful interactions.",
    icon: Sparkles,
    technologies: [
      "Visual Hierarchy",
      "User Experience",
      "Interaction Design",
      "Design Systems",
      "Prototyping",
      "Product Thinking",
    ],
  },
] as const;

const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "GitHub",
  "Vercel",
] as const;

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "Start with the idea, audience and purpose before writing the first line of code.",
  },
  {
    number: "02",
    title: "Build",
    text: "Turn the direction into a clean, responsive and functional digital experience.",
  },
  {
    number: "03",
    title: "Refine",
    text: "Polish the details, improve performance and make sure everything feels intentional.",
  },
] as const;

export default function SkillsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-260px] h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[140px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-purple-500/[0.06] blur-[130px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <Container>
            <div className="relative grid min-h-[600px] items-end gap-14 pb-14 pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:pb-16 lg:pt-32">
              <div>
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-gradient-to-r from-blue-400 to-purple-500" />
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                    What I work with
                  </span>
                </div>

                <h1 className="max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
                  Built with
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    purpose.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                  The tools are important. But knowing how to combine them into
                  a thoughtful, reliable and useful product matters more.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                  >
                    Let&apos;s build something
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                  >
                    See my work
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="relative lg:pb-1">
                <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-7">
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                    <span className="font-mono text-xs text-zinc-500">
                      skills.index
                    </span>
                    <span className="text-xs text-zinc-600">2026</span>
                  </div>

                  <div className="space-y-5 pt-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                        Focus
                      </p>
                      <p className="mt-2 text-sm text-zinc-300">
                        Full-stack web development
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                        Core
                      </p>
                      <p className="mt-2 text-sm text-zinc-300">
                        React · Next.js · TypeScript
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                        Approach
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Design · Code · Performance
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                    <span className="text-xs text-zinc-600">The Solo Syntax</span>
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Core skills */}
        <section className="relative py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Core capabilities
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                  More than a stack.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-zinc-500">
                A balanced approach across interface, application logic and
                the details that bring a product together.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {skillGroups.map((skill) => {
                const Icon = skill.icon;

                return (
                  <article
                    key={skill.number}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04] sm:p-8"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[-100px] top-[-120px] h-[260px] w-[260px] rounded-full bg-blue-500/[0.045] blur-[90px] transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-300">
                          <Icon className="h-5 w-5" />
                        </div>

                        <span className="font-mono text-xs text-zinc-600">
                          {skill.number}
                        </span>
                      </div>

                      <h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em] text-white">
                        {skill.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                        {skill.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {skill.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Tools */}
        <section className="border-y border-white/[0.06] bg-white/[0.012] py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-300">
                  <Wrench className="h-5 w-5" />
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Tools & technologies
                </p>

                <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                  The tools behind the work.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">
                  A modern toolkit selected around maintainability,
                  performance and a strong developer experience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex min-h-28 items-center justify-center bg-[#090b10] px-4 text-center text-sm font-medium text-zinc-300 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Approach */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="mb-12">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                How I work
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                From idea to experience.
              </h2>
            </div>

            <div className="grid gap-0 border-y border-white/[0.07] lg:grid-cols-3 lg:divide-x lg:divide-white/[0.07]">
              {approach.map((item) => (
                <div
                  key={item.number}
                  className="border-b border-white/[0.07] py-8 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
                >
                  <span className="font-mono text-xs text-zinc-600">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="relative pb-20 sm:pb-24 lg:pb-28">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-120px] top-[-180px] h-[400px] w-[400px] rounded-full bg-purple-500/[0.08] blur-[120px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[360px] w-[360px] rounded-full bg-blue-500/[0.05] blur-[120px]"
              />

              <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Let&apos;s build
                  </p>

                  <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                    Have an idea?
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                      Let&apos;s make it real.
                    </span>
                  </h2>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <Link
                href="/projects"
                className="group relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Or explore my projects
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}