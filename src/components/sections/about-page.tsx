import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  PenTool,
  Users,
} from "lucide-react";

import { capabilities } from "@/lib/constants";

const icons = {
  code: Code2,
  layers: Layers3,
  pen: PenTool,
  users: Users,
} as const;

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the idea, the audience and what the product actually needs to achieve.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "I turn the direction into a polished interface backed by clean, scalable and maintainable code.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "I focus on the details, performance and responsiveness that make the final experience feel complete.",
  },
] as const;

export function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* =========================================================
          ABOUT HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.07] blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-100px] top-[-100px] h-[500px] w-[500px] rounded-full bg-purple-500/[0.07] blur-[150px]"
        />

        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
            {/* Left */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  About me
                </span>
              </div>

              <h1 className="max-w-4xl text-[clamp(3.25rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
                The person
                <br />
                behind the{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  code.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                I&apos;m a full-stack web developer focused on turning ideas
                into modern, purposeful digital experiences that look great,
                feel intuitive and perform the way they should.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  Explore my work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-500/[0.08] via-transparent to-purple-500/[0.08] blur-2xl"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#090a0d]/90 shadow-2xl shadow-black/30">
                {/* Window top */}
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    the-solo-syntax
                  </span>
                </div>

                {/* Visual content */}
                <div className="relative min-h-[390px] overflow-hidden p-7 sm:min-h-[430px] sm:p-9">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                      backgroundSize: "42px 42px",
                    }}
                  />

                  <div className="relative flex h-full min-h-[340px] flex-col justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                        Full-stack
                      </p>

                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                        Web developer
                      </p>
                    </div>

                    <div className="relative py-12">
                      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 blur-3xl" />

                      <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] shadow-[0_0_80px_rgba(99,102,241,0.08)]">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/[0.08] bg-black/30">
                          <span className="text-5xl font-semibold tracking-[-0.08em] text-white">
                            SS
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end justify-between border-t border-white/[0.07] pt-5">
                      <div>
                        <p className="text-sm font-medium text-white">
                          The Solo Syntax
                        </p>
                        <p className="mt-1 text-xs text-zinc-600">
                          Design · Code · Performance
                        </p>
                      </div>

                      <span className="font-mono text-xs text-zinc-600">
                        01
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MINDSET
      ========================================================= */}
      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10 lg:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              The mindset
            </p>

            <h2 className="mt-4 max-w-sm text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
              Good code should disappear behind a great experience.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-[15px] leading-8 text-zinc-400 sm:text-base">
            <p>
              I care about more than making something technically work. A
              website should feel intentional — every section, interaction and
              detail should have a reason to exist.
            </p>

            <p>
              My approach combines frontend craftsmanship with backend
              thinking. That means paying attention to visual hierarchy,
              responsiveness and usability while also thinking about
              performance, structure and long-term maintainability.
            </p>

            <p>
              The goal is simple: build digital products that are fast,
              reliable and memorable without adding unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                How I work
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                From idea to execution.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              A straightforward process designed to keep the work focused,
              thoughtful and purposeful.
            </p>
          </div>

          <div className="grid border-y border-white/[0.08] md:grid-cols-3 md:divide-x md:divide-white/[0.08]">
            {process.map((item) => (
              <div
                key={item.number}
                className="group px-1 py-8 md:px-8 md:py-10 first:md:pl-0 last:md:pr-0"
              >
                <span className="text-xs font-medium tracking-[0.16em] text-zinc-600">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-500">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-10 bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10 lg:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              Capabilities
            </p>

            <h2 className="mt-4 max-w-sm text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              What I bring to the table.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              The tools and principles I use to turn concepts into polished
              digital products.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = icons[capability.icon];

              return (
                <div
                  key={capability.title}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.035]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-colors duration-300 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 text-sm font-medium text-white sm:text-[15px]">
                    {capability.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-120px] top-[-180px] h-[400px] w-[400px] rounded-full bg-purple-500/[0.08] blur-[120px]"
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
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
        </div>
      </section>
    </div>
  );
}