import Image from "next/image";
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
      "I start with the idea, the audience, the business and the requirements behind the project.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "I turn that direction into a modern interface with the frontend and backend functionality the project needs.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "I improve the details, responsiveness, performance and usability until the experience feels complete.",
  },
] as const;

export function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* =========================================================
          ABOUT HERO
      ========================================================= */}
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden border-b border-white/[0.06]">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/[0.055] blur-[140px] sm:h-[600px] sm:w-[600px] sm:blur-[170px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-40 h-[500px] w-[500px] rounded-full bg-purple-600/[0.065] blur-[150px] sm:h-[700px] sm:w-[700px] sm:blur-[180px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-56 left-1/3 h-[350px] w-[350px] rounded-full bg-blue-600/[0.035] blur-[140px] sm:h-[500px] sm:w-[500px]"
        />

        {/* Background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.022] sm:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Hero container */}
        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] items-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12 xl:gap-16">
            {/* Left */}
            <div className="min-w-0">
              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-5 sm:mb-7">
                <span
                  aria-hidden="true"
                  className="h-[3px] w-14 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 sm:w-16"
                />

                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400 sm:text-xs sm:tracking-[0.28em]">
                  About me
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-[680px] text-[clamp(3.4rem,7.2vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
                The person
                <br />
                behind the{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  code.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-[650px] text-[15px] leading-7 text-zinc-400 sm:mt-8 sm:text-[17px] sm:leading-8">
                I&apos;m Hasnain Raza, a full-stack web developer from
                Pakistan. I build modern websites and web applications that
                help businesses, professionals and individuals establish a
                strong digital presence.
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-9">
                <Link
                  href="/projects"
                  className="group inline-flex min-h-10 items-center gap-3 text-sm font-semibold text-white transition-colors duration-200 hover:text-zinc-300 sm:text-[15px]"
                >
                  Explore my work
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex min-h-10 items-center gap-3 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white sm:text-[15px]"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Right profile mockup */}
            <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
              {/* Mockup glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-blue-500/[0.075] via-transparent to-purple-500/[0.09] blur-3xl"
              />

              {/* Browser */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-blue-400/[0.24] bg-[#070a12]/90 shadow-[0_0_90px_rgba(59,130,246,0.055)] backdrop-blur-xl sm:rounded-[2rem]">
                {/* Browser bar */}
                <div className="flex h-12 items-center justify-between border-b border-white/[0.08] px-4 sm:h-14 sm:px-6">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full border border-white/[0.08] bg-white/[0.18] sm:h-3.5 sm:w-3.5" />
                    <span className="h-3 w-3 rounded-full border border-white/[0.08] bg-white/[0.18] sm:h-3.5 sm:w-3.5" />
                    <span className="h-3 w-3 rounded-full border border-white/[0.08] bg-white/[0.18] sm:h-3.5 sm:w-3.5" />
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.08em] text-zinc-600 sm:text-[10px] sm:tracking-[0.12em]">
                    the-solo-syntax
                  </span>

                  <div className="w-10 sm:w-14" />
                </div>

                {/* Mockup content */}
                <div className="relative min-h-[380px] overflow-hidden px-5 py-6 sm:min-h-[470px] sm:px-8 sm:py-8">
                  {/* Inner grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                      backgroundSize: "42px 42px",
                    }}
                  />

                  {/* Decorative orb */}
                  <div
                    aria-hidden="true"
                    className="absolute right-5 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/[0.22] bg-blue-500/[0.025] sm:right-8 sm:top-8 sm:h-12 sm:w-12"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_18px_rgba(96,165,250,0.85)]" />
                  </div>

                  {/* Profile */}
                  <div className="relative z-10 flex min-h-[280px] items-center justify-center sm:min-h-[350px]">
                    {/* Photo glow */}
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/25 blur-[50px] sm:h-56 sm:w-56 sm:blur-[65px]"
                    />

                    {/* Gradient ring */}
                    <div className="relative h-[205px] w-[205px] rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-[2px] shadow-[0_0_55px_rgba(59,130,246,0.18)] sm:h-[270px] sm:w-[270px] sm:shadow-[0_0_65px_rgba(59,130,246,0.2)]">
                      <div className="relative h-full w-full rounded-full bg-[#080b13] p-[5px] sm:p-[6px]">
                        <div className="relative h-full w-full overflow-hidden rounded-full border border-white/[0.08]">
                          <Image
                            src="/profile.webp"
                            alt="Hasnain Raza"
                            fill
                            sizes="(max-width: 640px) 205px, 270px"
                            className="object-cover object-top"
                            priority
                          />

                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.16] via-transparent to-white/[0.025]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom identity */}
                  <div className="relative z-10 flex items-end justify-between gap-4 border-t border-white/[0.08] pt-4 sm:pt-5">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-[-0.025em] text-white sm:text-base">
                        The Solo Syntax
                      </p>

                      <p className="mt-1 text-[9px] text-zinc-500 sm:text-[11px]">
                        Design <span className="mx-1">·</span> Code{" "}
                        <span className="mx-1">·</span> Performance
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <span className="hidden h-6 w-px bg-white/[0.08] sm:block" />

                      <span className="font-mono text-[10px] text-zinc-500 sm:text-xs">
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
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10 lg:py-28">
          {/* Section heading */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-500 to-purple-500"
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs sm:tracking-[0.2em]">
                The mindset
              </span>
            </div>

            <h2 className="max-w-md text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.25rem]">
              Building with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                purpose.
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600">
              How I approach the work behind every digital experience.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-3xl space-y-5 text-[15px] leading-7 text-zinc-400 sm:space-y-6 sm:text-base sm:leading-8">
            <p>
              I believe a website should do more than simply look good. It
              should clearly represent the business, professional or person
              behind it and make their digital presence easier to understand.
            </p>

            <p>
              I combine frontend development with backend thinking, with a
              strong focus on performance, responsiveness, usability and clean
              maintainable code. The goal is to create something that feels
              polished while still working properly underneath.
            </p>

            <p>
              Every project has different requirements, so I choose
              technologies based on what actually makes sense for the product.
              I avoid unnecessary complexity and prefer modern tools that help
              create a reliable, scalable experience.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end">
            {/* Section heading */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-500 to-purple-500"
                />

                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs sm:tracking-[0.2em]">
                  How I work
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.25rem]">
                From idea to{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  execution.
                </span>
              </h2>
            </div>

            {/* Supporting copy */}
            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              A straightforward process built around understanding first, then
              creating and refining with purpose.
            </p>
          </div>

          {/* Process cards */}
          <div className="grid border-y border-white/[0.08] md:grid-cols-3 md:divide-x md:divide-white/[0.08]">
            {process.map((item) => (
              <div
                key={item.number}
                className="group py-7 sm:py-8 md:px-8 md:py-10 first:md:pl-0 last:md:pr-0"
              >
                <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-600 sm:text-xs">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-medium tracking-[-0.02em] text-white sm:mt-6">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-500">
                  {item.description}
                </p>

                <div className="mt-7 h-px w-10 bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 transition-all duration-300 group-hover:w-16 sm:mt-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10 lg:py-28">
          {/* Section heading */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-500 to-purple-500"
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs sm:tracking-[0.2em]">
                Capabilities
              </span>
            </div>

            <h2 className="max-w-md text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.25rem]">
              What I bring to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                every project.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              A combination of frontend craftsmanship, backend development
              and practical technical decisions.
            </p>
          </div>

          {/* Capability cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = icons[capability.icon];

              return (
                <div
                  key={capability.title}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.035] sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-colors duration-300 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-sm font-medium text-white sm:mt-6 sm:text-[15px]">
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
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] px-5 py-10 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-purple-500/[0.07] blur-[100px] sm:right-[-120px] sm:top-[-180px] sm:h-[400px] sm:w-[400px] sm:bg-purple-500/[0.08] sm:blur-[120px]"
            />

            <div className="relative flex flex-col justify-between gap-8 sm:gap-10 lg:flex-row lg:items-end">
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
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
        </div>
      </section>
    </div>
  );
}