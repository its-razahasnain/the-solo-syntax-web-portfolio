import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/constants";

export function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* =========================================================
          PROJECTS HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/[0.07] blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-160px] top-[-160px] h-[560px] w-[560px] rounded-full bg-purple-500/[0.07] blur-[160px]"
        />

        {/* Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:gap-20">
            {/* Left */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Selected work
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(3.25rem,6.4vw,6.75rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
                Things I&apos;ve
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  built.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                A selection of digital experiences built from the ground up —
                combining thoughtful interfaces, clean engineering and attention
                to the details that matter.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  Explore projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Right metadata panel */}
            <div className="relative mx-auto w-full max-w-[430px] lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-500/[0.06] via-transparent to-purple-500/[0.07] blur-3xl"
              />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-white/[0.025]">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    projects.index
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                        Portfolio
                      </p>

                      <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                        04
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_18px_rgba(99,102,241,0.6)]" />
                    </div>
                  </div>

                  <div className="my-7 h-px bg-white/[0.07]" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-500">Full-stack</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                        01
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-500">Frontend</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                        02
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-500">
                        Product thinking
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                        03
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-zinc-600">
                        Design · Code · Performance
                      </span>

                      <span className="font-mono text-[10px] text-zinc-700">
                        2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero footer */}
          <div className="mt-10 flex items-center justify-between border-t border-white/[0.07] pt-5 sm:mt-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
              The Solo Syntax
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT LIST
      ========================================================= */}
      <section id="work" className="relative">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Portfolio
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Selected projects
              </h2>
            </div>

            <span className="hidden font-mono text-xs text-zinc-600 sm:block">
              04 PROJECTS
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={project.name}
                href={project.href}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.035] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden border-b border-white/[0.07] bg-[#090a0d] ${
                    index === 0
                      ? "min-h-[360px] sm:min-h-[440px]"
                      : "min-h-[280px] sm:min-h-[340px]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                      backgroundSize: "42px 42px",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/[0.13] via-indigo-500/[0.08] to-purple-500/[0.13] blur-[70px] transition-transform duration-700 group-hover:scale-125"
                  />

                  <div
                    className={`absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-[45%] overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0c0d11] shadow-2xl shadow-black/40 transition-transform duration-700 group-hover:-translate-y-1/2 ${
                      index === 0
                        ? "max-w-[820px] rotate-[-2deg]"
                        : "max-w-[560px] rotate-[-3deg]"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 border-b border-white/[0.07] px-3 py-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

                      <div className="ml-3 h-4 flex-1 rounded-full bg-white/[0.035]" />
                    </div>

                    <div className="p-5 sm:p-7">
                      <div className="h-2 w-16 rounded-full bg-white/10" />

                      <div className="mt-5 h-7 w-[65%] rounded-md bg-white/[0.08]" />

                      <div className="mt-3 h-2 w-[48%] rounded-full bg-white/[0.045]" />

                      <div className="mt-8 grid grid-cols-3 gap-2">
                        <div className="h-20 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
                        <div className="h-20 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
                        <div className="h-20 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
                      </div>
                    </div>
                  </div>

                  <span className="absolute bottom-5 left-5 font-mono text-[10px] tracking-[0.16em] text-zinc-600">
                    0{index + 1}
                  </span>

                  <span className="absolute bottom-5 right-5 rounded-full border border-white/[0.08] bg-black/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-6 p-6 sm:p-7">
                  <div className="min-w-0">
                    <h3 className="text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition-all duration-300 group-hover:border-white/[0.16] group-hover:bg-white/[0.06] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* =========================================================
    BOTTOM CTA
========================================================= */}
          <section className="relative mt-20 sm:mt-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-120px] top-[-180px] h-[400px] w-[400px] rounded-full bg-purple-500/[0.08] blur-[120px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[-180px] bottom-[-220px] h-[360px] w-[360px] rounded-full bg-blue-500/[0.05] blur-[120px]"
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
                href="/about"
                className="group relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Or learn more about me
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
