import {
  ArrowUpRight,
  Code2,
  Layers3,
  PenTool,
  Users,
} from "lucide-react";
import Link from "next/link";

import { capabilities } from "@/lib/constants";

const icons = {
  code: Code2,
  layers: Layers3,
  pen: PenTool,
  users: Users,
} as const;

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/[0.06] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-10">
        {/* Left */}
        <div className="min-w-0">
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-500 to-purple-500"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-xs sm:tracking-[0.18em]">
              About me
            </span>
          </div>

          <h2 className="max-w-3xl text-[clamp(2.25rem,7vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Building digital experiences that{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              actually matter.
            </span>
          </h2>

          <div className="mt-7 max-w-2xl space-y-4 text-[15px] leading-7 text-zinc-400 sm:text-base">
            <p>
              I&apos;m Hasnain Raza, a full-stack web developer focused on
              helping businesses, professionals and individuals build a strong
              digital presence.
            </p>

            <p>
              I build modern, responsive and performance-focused websites
              around each client&apos;s needs — with clean implementation,
              thoughtful user experiences and SEO in mind.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:gap-5">
            <Link
              href="/about"
              className="group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-zinc-300"
            >
              More about me

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              Let&apos;s work together

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Right */}
        <div id="skills" className="min-w-0 scroll-mt-24">
          <div className="mb-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-xs sm:tracking-[0.18em]">
              Capabilities
            </p>

            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
              The skills I use to turn ideas and requirements into reliable
              digital experiences.
            </p>
          </div>

          <div className="divide-y divide-white/[0.07] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]">
            {capabilities.map((capability) => {
              const Icon = icons[capability.icon];

              return (
                <div
                  key={capability.title}
                  className="group flex min-w-0 items-start gap-3 p-4 transition-colors duration-300 hover:bg-white/[0.025] sm:items-center sm:gap-4 sm:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-white/[0.14] group-hover:text-white sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-white sm:text-[15px]">
                      {capability.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-zinc-500 sm:leading-6">
                      {capability.description}
                    </p>
                  </div>

                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300 sm:mt-0" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}