import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/constants";

type ProjectVariant = "tavern" | "nexora" | "velora" | "lume";

function BrowserBar({ label }: { label: string }) {
  return (
    <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.07] bg-[#090a0d] px-3 sm:h-9 sm:gap-2 sm:px-3.5">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/15" />
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/10" />

      <div className="ml-2.5 flex h-4 min-w-0 flex-1 items-center rounded-full border border-white/[0.05] bg-white/[0.025] px-2.5 sm:ml-3 sm:px-3">
        <span className="truncate font-mono text-[6px] text-zinc-700 sm:text-[6.5px]">
          {label}
        </span>
      </div>

      <div className="w-2 shrink-0 sm:w-3" />
    </div>
  );
}

function ComingSoonOverlay({ name }: { name: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.1] bg-black/45 px-5 py-4 text-center shadow-2xl backdrop-blur-md">
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/90">
          {name}
        </span>

        <span className="rounded-full border border-white/[0.1] bg-white/[0.05] px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.18em] text-zinc-400">
          Coming Soon
        </span>
      </div>
    </div>
  );
}

function TavernMockup() {
  return (
    <div className="relative h-full min-h-[280px] w-full overflow-hidden bg-[#17130f] sm:min-h-[380px] lg:min-h-[430px]">
      <Image
        src="/projects/tavern/tavern-hero.webp"
        alt="Tavern restaurant website homepage"
        fill
        priority
        sizes="(max-width: 639px) 92vw, (max-width: 1023px) 88vw, 820px"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
      />

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent" />

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-3.5 sm:px-8 sm:py-5">
        <span className="font-serif text-sm tracking-[0.04em] text-white sm:text-base">
          TAVERN
        </span>

        <div className="hidden items-center gap-6 sm:flex">
          <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
            Menu
          </span>

          <span className="text-[7px] uppercase tracking-[0.18em] text-white/70">
            Our Story
          </span>

          <span className="rounded-full border border-white/25 px-3 py-1.5 text-[7px] uppercase tracking-[0.12em] text-white">
            Reserve
          </span>
        </div>
      </div>

      <div className="absolute left-0 top-1/2 z-10 w-full -translate-y-1/2 px-5 sm:px-10 lg:px-14">
        <p className="text-[6px] uppercase tracking-[0.2em] text-white/60 sm:text-[8px]">
          Good Food · Great Vibes · Together
        </p>

        <h3 className="mt-2.5 max-w-[520px] font-serif text-3xl leading-[0.92] tracking-[-0.045em] text-white sm:mt-3 sm:text-5xl lg:text-6xl">
          More Than a Meal,
          <br />
          <span className="italic text-white/75">It&apos;s a Tavern.</span>
        </h3>

        <p className="mt-4 max-w-[360px] text-[7px] leading-4 text-white/60 sm:mt-5 sm:text-[9px] sm:leading-5">
          Fresh ingredients, bold flavors, and a welcoming atmosphere — where
          every visit feels like home.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5 sm:gap-4">
          <span className="rounded-full bg-white px-3 py-1.5 text-[6px] font-medium uppercase tracking-[0.08em] text-black sm:px-4 sm:py-2 sm:text-[7px]">
            Explore menu
          </span>

          <span className="text-[6px] uppercase tracking-[0.1em] text-white/60 sm:text-[7px]">
            Book a table
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
    </div>
  );
}

function GenericMockup({
  variant,
  name,
}: {
  variant: Exclude<ProjectVariant, "tavern">;
  name: string;
}) {
  const styles = {
    nexora: {
      glow: "bg-blue-500/[0.10]",
      accent: "bg-blue-500/[0.10]",
    },
    velora: {
      glow: "bg-purple-500/[0.10]",
      accent: "bg-purple-500/[0.10]",
    },
    lume: {
      glow: "bg-indigo-500/[0.10]",
      accent: "bg-indigo-500/[0.10]",
    },
  }[variant];

  return (
    <div className="relative h-full min-h-[210px] w-full overflow-hidden bg-[#0c0d11] sm:min-h-[270px]">
      <div
        aria-hidden="true"
        className={`absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[65px] sm:h-52 sm:w-52 sm:blur-[70px] ${styles.glow}`}
      />

      <div className="absolute inset-x-[7%] top-[9%] overflow-hidden rounded-xl border border-white/[0.1] bg-[#11131a] shadow-2xl sm:inset-x-[8%] sm:top-[10%]">
        <BrowserBar label={`${name.toLowerCase()} · concept preview`} />

        <div className="p-3 sm:p-5">
          <div className="h-1.5 w-14 rounded-full bg-white/10 sm:h-2 sm:w-16" />

          <div className="mt-4 h-7 w-[65%] rounded-lg bg-white/[0.08] sm:mt-5 sm:h-8" />

          <div className="mt-2.5 h-1.5 w-[50%] rounded-full bg-white/[0.045] sm:mt-3 sm:h-2" />

          <div className="mt-5 grid grid-cols-3 gap-1.5 sm:mt-7 sm:gap-2">
            <div
              className={`h-16 rounded-xl sm:h-20 ${styles.accent}`}
            />

            <div className="h-16 rounded-xl bg-white/[0.035] sm:h-20" />

            <div className="h-16 rounded-xl bg-white/[0.025] sm:h-20" />
          </div>
        </div>
      </div>

      <ComingSoonOverlay name={name} />
    </div>
  );
}

function ProjectMockup({
  variant,
  name,
}: {
  variant: ProjectVariant;
  name: string;
}) {
  if (variant === "tavern") {
    return <TavernMockup />;
  }

  return <GenericMockup variant={variant} name={name} />;
}

function ProjectStatus({
  projectName,
}: {
  projectName: string;
}) {
  const isBuilt = projectName === "Tavern";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] sm:text-[10px] ${
        isBuilt
          ? "border-white/[0.12] bg-white/[0.05] text-zinc-300"
          : "border-white/[0.08] bg-white/[0.02] text-zinc-600"
      }`}
    >
      {isBuilt ? "Built" : "Concept"}
    </span>
  );
}

export function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* =========================================================
          PROJECTS HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.07] blur-[130px] sm:h-[520px] sm:w-[520px] sm:blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-160px] top-[-160px] h-[460px] w-[460px] rounded-full bg-purple-500/[0.07] blur-[140px] sm:h-[560px] sm:w-[560px] sm:blur-[160px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:gap-20">
            <div className="min-w-0">
              <div className="mb-6 flex items-center gap-3 sm:mb-7">
                <span className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-500 to-purple-500" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Selected work
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(3rem,8vw,6.75rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white sm:text-[clamp(3.25rem,6.4vw,6.75rem)]">
                Things I&apos;ve
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  built.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8">
                A selection of digital experiences built from the ground up —
                combining thoughtful interfaces, clean engineering and
                attention to the details that matter.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-9">
                <Link
                  href="#work"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  Explore projects

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  Start a project

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[430px] lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-500/[0.06] via-transparent to-purple-500/[0.07] blur-3xl sm:-inset-8"
              />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] sm:rounded-[1.75rem]">
                <div className="flex min-w-0 items-center justify-between border-b border-white/[0.07] px-4 py-3.5 sm:px-5 sm:py-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20 sm:h-2 sm:w-2" />
                  </div>

                  <span className="truncate font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600 sm:text-[10px] sm:tracking-[0.18em]">
                    projects.index
                  </span>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600 sm:text-[10px] sm:tracking-[0.18em]">
                        Portfolio
                      </p>

                      <p className="mt-2.5 text-3xl font-semibold tracking-[-0.05em] text-white sm:mt-3">
                        04
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] sm:h-10 sm:w-10">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_18px_rgba(99,102,241,0.6)]" />
                    </div>
                  </div>

                  <div className="my-6 h-px bg-white/[0.07] sm:my-7" />

                  <div className="space-y-3.5 sm:space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-zinc-500">
                        Full-stack
                      </span>

                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-600 sm:text-[10px] sm:tracking-[0.14em]">
                        01
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-zinc-500">
                        Frontend
                      </span>

                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-600 sm:text-[10px] sm:tracking-[0.14em]">
                        02
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-zinc-500">
                        Product thinking
                      </span>

                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-600 sm:text-[10px] sm:tracking-[0.14em]">
                        03
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-white/[0.07] bg-black/20 px-3.5 py-3 sm:mt-7 sm:px-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="truncate text-[11px] text-zinc-600 sm:text-xs">
                        Design · Code · Performance
                      </span>

                      <span className="shrink-0 font-mono text-[9px] text-zinc-700 sm:text-[10px]">
                        2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-5 sm:mt-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-700 sm:text-[10px] sm:tracking-[0.18em]">
              The Solo Syntax
            </span>

            <span className="text-right font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-700 sm:text-[10px] sm:tracking-[0.18em]">
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT LIST
      ========================================================= */}

      <section id="work" className="relative scroll-mt-24">
        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
          <div className="mb-9 flex items-end justify-between gap-5 sm:mb-12">
            <div className="min-w-0">
              <p className="mb-2.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 sm:mb-3">
                Portfolio
              </p>

              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Selected projects
              </h2>
            </div>

            <span className="hidden shrink-0 font-mono text-xs text-zinc-600 sm:block">
              01 BUILT · 03 COMING SOON
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => {
              const isBuilt = project.status === "live";

              return (
                <Link
                  key={project.name}
                  href={project.href}
                  className={`group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.035] sm:rounded-[1.75rem] ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative min-w-0 overflow-hidden border-b border-white/[0.07] bg-[#090a0d] ${
                      index === 0
                        ? "min-h-[300px] sm:min-h-[440px]"
                        : "min-h-[245px] sm:min-h-[340px]"
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
                      className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/[0.13] via-indigo-500/[0.08] to-purple-500/[0.13] blur-[60px] transition-transform duration-700 group-hover:scale-125 sm:h-56 sm:w-56 sm:blur-[70px]"
                    />

                    <div
                      className={`absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-[45%] overflow-hidden rounded-xl border border-white/[0.1] bg-[#0c0d11] shadow-2xl shadow-black/40 transition-transform duration-700 sm:w-[86%] sm:rounded-2xl ${
                        index === 0
                          ? "max-w-[900px] rotate-[-1.5deg] sm:rotate-[-2deg]"
                          : "max-w-[560px] rotate-[-2deg] sm:rotate-[-3deg]"
                      }`}
                    >
                      <ProjectMockup
                        variant={project.variant as ProjectVariant}
                        name={project.name}
                      />
                    </div>

                    <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-[0.14em] text-zinc-600 sm:bottom-5 sm:left-5 sm:text-[10px] sm:tracking-[0.16em]">
                      0{index + 1}
                    </span>

                    <div className="absolute bottom-4 right-4 flex max-w-[70%] items-center gap-2 sm:bottom-5 sm:right-5">
                      <ProjectStatus projectName={project.name} />

                      <span className="max-w-[58%] truncate rounded-full border border-white/[0.08] bg-black/30 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-zinc-500 backdrop-blur-md sm:max-w-none sm:px-3 sm:text-[10px] sm:tracking-[0.14em]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex min-w-0 items-start justify-between gap-4 p-5 sm:gap-6 sm:p-7">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl">
                          {project.name}
                        </h3>

                        <ProjectStatus projectName={project.name} />
                      </div>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                        {project.description}
                      </p>

                      {isBuilt ? (
                        <p className="mt-3 text-xs text-zinc-600">
                          Built from the ground up as a full-stack portfolio
                          project.
                        </p>
                      ) : (
                        <p className="mt-3 text-xs text-zinc-600">
                          Concept project — currently in the planning and
                          development stage.
                        </p>
                      )}
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition-all duration-300 group-hover:border-white/[0.16] group-hover:bg-white/[0.06] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* =========================================================
              BOTTOM CTA
          ========================================================= */}

          <section className="relative mt-16 sm:mt-24">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] px-5 py-10 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-150px] top-[-180px] h-[360px] w-[360px] rounded-full bg-purple-500/[0.08] blur-[110px] sm:right-[-120px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-220px] left-[-200px] h-[320px] w-[320px] rounded-full bg-blue-500/[0.05] blur-[110px] sm:left-[-180px] sm:h-[360px] sm:w-[360px] sm:blur-[120px]"
              />

              <div className="relative flex flex-col justify-between gap-8 sm:gap-10 lg:flex-row lg:items-end">
                <div className="min-w-0">
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
                  className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 sm:w-fit"
                >
                  Start a conversation

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <Link
                href="/about"
                className="group relative mt-7 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white sm:mt-8"
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