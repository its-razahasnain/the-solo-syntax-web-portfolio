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

export function AboutPage() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              About me
            </span>
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            I build digital experiences that{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              actually matter.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m a full-stack web developer focused on building modern,
            performant and purposeful digital experiences. I care about
            creating products that look great, feel intuitive and work the way
            they should.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Story */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              My approach
            </p>

            <div className="space-y-6 text-[15px] leading-8 text-zinc-400 sm:text-base">
              <p>
                I believe great websites sit at the intersection of thoughtful
                design, clean engineering and real-world performance.
              </p>

              <p>
                From the first idea to the final deployment, I focus on the
                details that make a digital product feel polished, fast and
                effortless to use.
              </p>

              <p>
                Whether I&apos;m working on a frontend interface or building
                the systems behind it, my goal stays the same: turn ideas into
                reliable digital experiences that people enjoy using.
              </p>
            </div>

            <Link
              href="/projects"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-zinc-300"
            >
              Explore my work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Capabilities */}
          <div>
            <div className="mb-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Capabilities
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                A practical approach to design, development and delivery.
              </p>
            </div>

            <div className="divide-y divide-white/[0.07] rounded-3xl border border-white/[0.08] bg-white/[0.02]">
              {capabilities.map((capability) => {
                const Icon = icons[capability.icon];

                return (
                  <div
                    key={capability.title}
                    className="group flex items-center gap-4 p-5 transition-colors duration-300 hover:bg-white/[0.025] sm:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-white/[0.14] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-sm font-medium text-white sm:text-[15px]">
                        {capability.title}
                      </h2>

                      <p className="mt-1 text-sm text-zinc-500">
                        {capability.description}
                      </p>
                    </div>

                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-medium tracking-tight text-white sm:text-xl">
                Have an idea worth building?
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Let&apos;s turn it into something people remember.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}