import {
  Code2,
  Layers3,
  PenTool,
  Users,
  ArrowUpRight,
} from "lucide-react";
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
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              About me
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Building digital experiences that{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              actually matter.
            </span>
          </h2>

          <div className="mt-7 max-w-2xl space-y-4 text-[15px] leading-7 text-zinc-400 sm:text-base">
            <p>
              I&apos;m a full-stack web developer focused on building modern,
              performant and purposeful digital experiences.
            </p>

            <p>
              From thoughtful interfaces to scalable backend systems, I care
              about the details that make a product feel fast, clear and
              effortless to use.
            </p>
          </div>

          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-zinc-300"
          >
            Let&apos;s work together
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Right */}
        <div id="skills" className="scroll-mt-24">
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
                    <h3 className="text-sm font-medium text-white sm:text-[15px]">
                      {capability.title}
                    </h3>

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
    </section>
  );
}