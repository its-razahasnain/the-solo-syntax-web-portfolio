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
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-180px] h-[380px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[110px] sm:top-[-260px] sm:h-[560px] sm:w-[760px] sm:bg-blue-500/[0.08] sm:blur-[140px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-20 h-[280px] w-[280px] rounded-full bg-purple-500/[0.05] blur-[100px] sm:right-[-180px] sm:top-[120px] sm:h-[420px] sm:w-[420px] sm:bg-purple-500/[0.06] sm:blur-[130px]"
          />

          {/* Grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.025] sm:opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <Container>
            <div className="relative grid gap-10 pb-12 pt-20 sm:gap-14 sm:pb-14 sm:pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20 lg:pb-16 lg:pt-32">
              {/* Hero content */}
              <div className="min-w-0">
                <div className="mb-6 flex items-center gap-3 sm:mb-7">
                  <span className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-400 to-purple-500 sm:w-10" />

                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs sm:tracking-[0.22em]">
                    What I work with
                  </span>
                </div>

                <h1 className="max-w-4xl text-[clamp(3rem,11vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-[clamp(3.5rem,7vw,7rem)] sm:leading-[0.88] sm:tracking-[-0.07em]">
                  Built with
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    purpose.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-[15px] leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8">
                  The tools are important. But knowing how to combine them into
                  a thoughtful, reliable and useful product matters more.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 sm:mt-9">
                  <Link
                    href="/contact"
                    className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 sm:px-6 sm:py-3.5"
                  >
                    Let&apos;s build something
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/projects"
                    className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                  >
                    See my work
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Skills index card */}
              <div className="relative min-w-0 lg:pb-1">
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-sm sm:rounded-[1.75rem] sm:p-7">
                  <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4 sm:pb-5">
                    <span className="font-mono text-[11px] text-zinc-500 sm:text-xs">
                      skills.index
                    </span>

                    <span className="shrink-0 text-[11px] text-zinc-600 sm:text-xs">
                      2026
                    </span>
                  </div>

                  <div className="space-y-5 pt-5 sm:pt-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600 sm:text-xs">
                        Focus
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-300">
                        Full-stack web development
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600 sm:text-xs">
                        Core
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-300">
                        React · Next.js · TypeScript
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600 sm:text-xs">
                        Approach
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Design · Code · Performance
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-4 sm:mt-7 sm:pt-5">
                    <span className="truncate text-[11px] text-zinc-600 sm:text-xs">
                      The Solo Syntax
                    </span>

                    <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            CORE SKILLS
        ========================================================= */}
        <section className="relative py-16 sm:py-24 lg:py-28">
          <Container>
            <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-xs sm:tracking-[0.18em]">
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

            <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
              {skillGroups.map((skill) => {
                const Icon = skill.icon;

                return (
                  <article
                    key={skill.number}
                    className="group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04] sm:rounded-[1.75rem] sm:p-8"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-24 -top-28 h-[220px] w-[220px] rounded-full bg-blue-500/[0.04] blur-[80px] transition-opacity duration-500 group-hover:opacity-100 sm:-right-24 sm:-top-28 sm:h-[260px] sm:w-[260px] sm:blur-[90px]"
                    />

                    <div className="relative min-w-0">
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-300 sm:h-11 sm:w-11">
                          <Icon className="h-5 w-5" />
                        </div>

                        <span className="font-mono text-[11px] text-zinc-600 sm:text-xs">
                          {skill.number}
                        </span>
                      </div>

                      <h3 className="mt-6 break-words text-xl font-semibold tracking-[-0.035em] text-white sm:mt-7 sm:text-2xl">
                        {skill.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                        {skill.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                        {skill.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="max-w-full rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] leading-4 text-zinc-400 sm:text-xs"
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

        {/* =========================================================
            TOOLS
        ========================================================= */}
        <section className="border-y border-white/[0.06] bg-white/[0.012] py-16 sm:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-300 sm:h-11 sm:w-11">
                  <Wrench className="h-5 w-5" />
                </div>

                <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:mt-6 sm:text-xs sm:tracking-[0.18em]">
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
                    className="flex min-h-24 items-center justify-center bg-[#090b10] px-3 py-5 text-center text-xs font-medium text-zinc-300 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white sm:min-h-28 sm:px-4 sm:text-sm"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            APPROACH
        ========================================================= */}
        <section className="py-16 sm:py-24 lg:py-28">
          <Container>
            <div className="mb-9 sm:mb-12">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-xs sm:tracking-[0.18em]">
                How I work
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                From idea to experience.
              </h2>
            </div>

            <div className="grid gap-0 border-y border-white/[0.07] lg:grid-cols-3 lg:divide-x lg:divide-white/[0.07]">
              {approach.map((item, index) => (
                <div
                  key={item.number}
                  className={`py-7 sm:py-8 lg:px-8 lg:py-10 ${
                    index !== approach.length - 1
                      ? "border-b border-white/[0.07] lg:border-b-0"
                      : ""
                  } lg:first:pl-0 lg:last:pr-0`}
                >
                  <span className="font-mono text-[11px] text-zinc-600 sm:text-xs">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-white sm:mt-5">
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

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="relative pb-16 sm:pb-24 lg:pb-28">
          <Container>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] px-5 py-10 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-purple-500/[0.07] blur-[100px] sm:right-[-120px] sm:top-[-180px] sm:h-[400px] sm:w-[400px] sm:bg-purple-500/[0.08] sm:blur-[120px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-32 h-[280px] w-[280px] rounded-full bg-blue-500/[0.04] blur-[100px] sm:bottom-[-220px] sm:left-[-180px] sm:h-[360px] sm:w-[360px] sm:bg-blue-500/[0.05] sm:blur-[120px]"
              />

              <div className="relative flex flex-col justify-between gap-8 sm:gap-10 lg:flex-row lg:items-end">
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-xs sm:tracking-[0.18em]">
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
                  className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 sm:w-fit"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <Link
                href="/projects"
                className="group relative mt-7 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white sm:mt-8"
              >
                Or explore my projects
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}