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
    "Explore the technologies, development skills and technical approach behind The Solo Syntax.",
};

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, polished interfaces with a strong focus on usability, performance and a smooth experience across devices.",
    icon: LayoutTemplate,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building the server-side functionality and APIs needed to turn a frontend into a reliable, working web application.",
    icon: Server,
    technologies: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "Server-side Logic",
      "Database Integration",
      "API Design",
    ],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Working across the frontend and backend to build complete web experiences with the right technology choices for each project.",
    icon: Braces,
    technologies: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "API Integration",
      "Data Flow",
      "Deployment",
    ],
  },
  {
    number: "04",
    title: "Performance & User Experience",
    description:
      "Focusing on fast, responsive and easy-to-use experiences while keeping the code clean, maintainable and free from unnecessary complexity.",
    icon: Sparkles,
    technologies: [
      "Web Performance",
      "Responsive Design",
      "Accessibility",
      "UX Principles",
      "Clean Code",
      "Maintainability",
      "Performance Optimization",
    ],
  },
] as const;

const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Python",
  "Git",
  "GitHub",
  "Vercel",
  "Postman",
  "MongoDB",
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
            className="pointer-events-none absolute left-1/2 top-[-140px] h-[320px] w-[460px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[100px] sm:top-[-180px] sm:h-[460px] sm:w-[680px] sm:bg-blue-500/[0.08] sm:blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-16 h-[240px] w-[240px] rounded-full bg-purple-500/[0.05] blur-[90px] sm:right-[-180px] sm:top-[90px] sm:h-[380px] sm:w-[380px] sm:bg-purple-500/[0.06] sm:blur-[120px]"
          />

          {/* Background grid */}
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
            {/* Only vertical spacing changed here */}
            <div className="relative grid gap-8 pb-10 pt-14 sm:gap-10 sm:pb-12 sm:pt-18 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:pb-14 lg:pt-20">
              {/* Hero content */}
              <div className="min-w-0">
                {/* Eyebrow */}
                <div className="mb-5 flex items-center gap-5 sm:mb-6">
                  <span
                    aria-hidden="true"
                    className="h-[3px] w-14 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 sm:w-16"
                  />

                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400 sm:text-xs sm:tracking-[0.28em]">
                    What I work with
                  </span>
                </div>

                {/* Heading */}
                <h1 className="max-w-[760px] text-[clamp(3.1rem,6.6vw,6.2rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
                  The tools
                  <br />
                  behind the{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    code.
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-zinc-400 sm:mt-7 sm:text-[17px] sm:leading-8">
                  I work across the frontend and backend to build modern web
                  experiences that are responsive, useful and performance
                  focused. The technology depends on what the project
                  actually needs.
                </p>

                {/* Actions */}
                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-8">
                  <Link
                    href="/contact"
                    className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 sm:px-6 sm:py-3.5"
                  >
                    Let&apos;s build something

                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/projects"
                    className="group inline-flex min-h-11 items-center gap-3 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                  >
                    See my work

                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Skills index card */}
              <div className="relative min-w-0 lg:pb-0">
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
                        Strength
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Frontend · Performance · Full-Stack
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
            <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end">
              <div className="min-w-0">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-500 to-purple-500"
                  />

                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs sm:tracking-[0.2em]">
                    Core capabilities
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.25rem]">
                  More than{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    just a stack.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-zinc-500">
                A practical combination of frontend, backend and performance
                skills used to build complete web experiences.
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

                <div className="mt-5 flex items-center gap-3 sm:mt-6">
                  <span
                    aria-hidden="true"
                    className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-500 to-purple-500"
                  />

                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
                    Tools & technologies
                  </p>
                </div>

                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.25rem]">
                  The tools behind{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    the work.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
                  A modern toolkit chosen around the requirements of each
                  project, with an emphasis on maintainability, performance
                  and practical development.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="group flex min-h-24 items-center justify-center bg-[#090b10] px-3 py-5 text-center text-xs font-medium text-zinc-300 transition-all duration-300 hover:bg-white/[0.04] hover:text-white sm:min-h-28 sm:px-4 sm:text-sm"
                  >
                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="relative pb-16 pt-16 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
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
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
                    Let&apos;s build
                  </p>

                  <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                    <span className="text-white">Have an idea?</span>
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