import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Code2,
  ExternalLink,
  LayoutTemplate,
  Monitor,
  Smartphone,
  Tablet,
  Utensils,
} from "lucide-react";

const details = [
  {
    label: "Type",
    value: "Concept Website",
    icon: LayoutTemplate,
  },
  {
    label: "Industry",
    value: "Restaurant",
    icon: Utensils,
  },
  {
    label: "Built by",
    value: "The Solo Syntax",
    icon: Code2,
  },
  {
    label: "Year",
    value: "2026",
    icon: CalendarDays,
  },
] as const;

const features = [
  {
    number: "01",
    title: "Brand experience",
    description:
      "Tavern's personality is carried through the interface with a warm visual direction, strong typography and an atmosphere-first layout.",
    detail: "Identity",
  },
  {
    number: "02",
    title: "Menu discovery",
    description:
      "Food categories, dishes and pricing are presented in a clear structure that makes exploring the menu feel simple and intentional.",
    detail: "Discovery",
  },
  {
    number: "03",
    title: "Table booking",
    description:
      "The experience keeps reservations close to the main journey, giving visitors a clear path from discovering Tavern to booking a table.",
    detail: "Conversion",
  },
  {
    number: "04",
    title: "Story & atmosphere",
    description:
      "The story, gallery and supporting content work together to make Tavern feel like a place worth visiting, not just another restaurant website.",
    detail: "Storytelling",
  },
] as const;

const technologies = [
  {
    name: "Next.js",
    description: "Application framework",
  },
  {
    name: "React",
    description: "Interface architecture",
  },
  {
    name: "TypeScript",
    description: "Type-safe development",
  },
  {
    name: "Tailwind CSS",
    description: "UI styling system",
  },
  {
    name: "App Router",
    description: "Modern routing",
  },
  {
    name: "Vercel",
    description: "Deployment platform",
  },
] as const;

export function TavernCaseStudy() {
  return (
    <div className="relative overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-[-180px] h-[520px] w-[520px] rounded-full bg-blue-500/[0.06] blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-180px] top-[-140px] h-[560px] w-[560px] rounded-full bg-purple-500/[0.06] blur-[160px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-8 sm:px-8 sm:pb-14 sm:pt-10 lg:px-10 lg:pb-16 lg:pt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
            {/* Hero copy */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Case study · 01
                </span>
              </div>

              <h1 className="max-w-3xl text-[clamp(3.25rem,6.5vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
                Tavern
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  More than a meal.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                A concept restaurant website created by The Solo Syntax —
                combining atmosphere, storytelling, menu discovery and table
                booking into one polished digital experience.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href="https://tavern-virid.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  Visit live site

                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  Build something similar

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Tavern homepage mockup */}

            <div className="relative lg:pl-2">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-500/[0.06] via-transparent to-purple-500/[0.08] blur-3xl"
              />

              <div className="relative rotate-[1deg] overflow-hidden rounded-[1.5rem] border border-white/[0.12] bg-[#090a0d] shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-0">
                {/* Browser chrome */}

                <div className="flex h-10 items-center gap-3 border-b border-white/[0.07] bg-white/[0.018] px-4 sm:h-11">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                  </div>

                  <div className="mx-auto flex h-6 w-[58%] items-center justify-center rounded-md border border-white/[0.06] bg-black/20">
                    <span className="truncate font-mono text-[8px] text-zinc-600">
                      tavern-virid.vercel.app
                    </span>
                  </div>

                  <div className="w-8" />
                </div>

                {/* Actual Tavern hero */}

                <div className="relative h-[255px] overflow-hidden sm:h-[320px] lg:h-[365px]">
                  <Image
                    src="/projects/tavern/tavern-hero.webp"
                    alt="Tavern restaurant website homepage"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />

                  {/* Mini Tavern navbar */}

                  <div className="relative z-10 flex items-center justify-between px-5 py-4 sm:px-7">
                    <span className="font-serif text-sm font-medium tracking-[0.04em] text-white sm:text-base">
                      TAVERN
                    </span>

                    <div className="hidden items-center gap-5 sm:flex">
                      <span className="text-[8px] uppercase tracking-[0.16em] text-white/65">
                        Menu
                      </span>

                      <span className="text-[8px] uppercase tracking-[0.16em] text-white/65">
                        Our Story
                      </span>

                      <span className="rounded-full border border-white/20 px-3 py-1.5 text-[8px] uppercase tracking-[0.12em] text-white">
                        Reserve
                      </span>
                    </div>
                  </div>

                  {/* Mini Tavern hero content */}

                  <div className="relative z-10 flex h-[calc(100%-60px)] items-center px-6 sm:px-10">
                    <div className="max-w-md">
                      <p className="text-[7px] uppercase tracking-[0.26em] text-white/65 sm:text-[8px]">
                        Good Food · Crafted Drinks · Good Company
                      </p>

                      <h2 className="mt-3 font-serif text-3xl leading-[0.9] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.5rem]">
                        More Than
                        <br />
                        a Meal,
                      </h2>

                      <p className="mt-1 font-serif text-xl italic tracking-[-0.03em] text-white/70 sm:text-3xl">
                        It&apos;s a Tavern.
                      </p>

                      <p className="mt-3 max-w-xs text-[8px] leading-4 text-white/55 sm:text-[9px]">
                        Fresh ingredients, bold flavors, and a welcoming
                        atmosphere — where every visit feels like home.
                      </p>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="rounded-full bg-white px-3.5 py-1.5 text-[7px] font-medium uppercase tracking-[0.1em] text-black sm:px-4 sm:py-2">
                          Explore menu
                        </span>

                        <span className="text-[7px] uppercase tracking-[0.1em] text-white/65 sm:text-[8px]">
                          Book a table
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Browser footer */}

                <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-600">
                      Live
                    </span>
                  </div>

                  <span className="font-mono text-[8px] text-zinc-700">
                    Tavern · Responsive
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project details */}

          <div className="mt-10 grid border-y border-white/[0.07] sm:grid-cols-4 sm:divide-x sm:divide-white/[0.07]">
            {details.map((detail) => {
              const Icon = detail.icon;

              return (
                <div
                  key={detail.label}
                  className="flex items-center gap-3 border-b border-white/[0.07] px-1 py-4 last:border-0 sm:border-b-0 sm:px-5"
                >
                  <Icon
                    className="h-4 w-4 text-zinc-600"
                    strokeWidth={1.7}
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                      {detail.label}
                    </p>

                    <p className="mt-1 text-xs font-medium text-zinc-300">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10 lg:py-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              The concept
            </p>

            <h2 className="mt-4 max-w-sm text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              A digital home for a fictional restaurant.
            </h2>
          </div>

          <div className="max-w-3xl space-y-4 text-[15px] leading-7 text-zinc-400 sm:text-base sm:leading-8">
            <p>
              Tavern is an imaginary restaurant concept created to explore how
              a premium hospitality brand could translate into a complete
              digital experience.
            </p>

            <p>
              The website was designed around atmosphere first. Food,
              typography, imagery, storytelling and calls to action work
              together to create a warm, intentional and easy-to-navigate
              experience.
            </p>

            <p>
              The concept brings together the core experiences a restaurant
              website needs — discovering the menu, learning the story,
              exploring the gallery and booking a table.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WAS BUILT
      ========================================================= */}

      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_0.7fr] lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                What was built
              </p>

              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Every part has a purpose.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-500 lg:justify-self-end">
              From the first impression to the final reservation, the
              experience was structured around how a guest interacts with a
              restaurant online.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.13] hover:bg-white/[0.03] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[-80px] top-[-80px] h-40 w-40 rounded-full bg-blue-500/[0.04] blur-3xl"
                />

                <div className="relative flex items-start justify-between gap-6">
                  <span className="font-mono text-xs tracking-[0.16em] text-zinc-600">
                    {feature.number}
                  </span>

                  <span className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-zinc-600">
                    {feature.detail}
                  </span>
                </div>

                <h3 className="relative mt-10 text-xl font-medium tracking-tight text-white sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="relative mt-3 max-w-lg text-sm leading-7 text-zinc-500">
                  {feature.description}
                </p>

                <div className="relative mt-7 flex items-center gap-2 text-zinc-600">
                  <span className="h-px w-7 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-12" />

                  <span className="text-[9px] uppercase tracking-[0.16em]">
                    Tavern experience
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Responsive experience */}

          <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02]">
            <div className="grid sm:grid-cols-3 sm:divide-x sm:divide-white/[0.07]">
              <div className="flex items-center gap-4 border-b border-white/[0.07] px-6 py-5 sm:border-b-0">
                <Monitor className="h-4 w-4 text-zinc-600" />

                <div>
                  <p className="text-xs font-medium text-white">Desktop</p>

                  <p className="mt-1 text-[11px] text-zinc-600">
                    Full visual experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-white/[0.07] px-6 py-5 sm:border-b-0">
                <Tablet className="h-4 w-4 text-zinc-600" />

                <div>
                  <p className="text-xs font-medium text-white">Tablet</p>

                  <p className="mt-1 text-[11px] text-zinc-600">
                    Flexible layout
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 px-6 py-5">
                <Smartphone className="h-4 w-4 text-zinc-600" />

                <div>
                  <p className="text-xs font-medium text-white">Mobile</p>

                  <p className="mt-1 text-[11px] text-zinc-600">
                    Touch-friendly experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Technology
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                Built with a modern stack.
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
                The same production-focused stack used for The Solo Syntax
                powers the Tavern concept, keeping the experience modern,
                maintainable and responsive.
              </p>
            </div>

            <div className="grid border-t border-white/[0.08] sm:grid-cols-2">
              {technologies.map((technology, index) => (
                <div
                  key={technology.name}
                  className={`group flex items-start gap-4 border-b border-white/[0.08] py-5 ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-white/[0.08] sm:pr-8"
                      : "sm:pl-8"
                  }`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025]">
                    <Check
                      className="h-3.5 w-3.5 text-zinc-500 transition-colors duration-200 group-hover:text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {technology.name}
                    </p>

                    <p className="mt-1 text-xs text-zinc-600">
                      {technology.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] px-6 py-11 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-120px] top-[-180px] h-[400px] w-[400px] rounded-full bg-purple-500/[0.08] blur-[120px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[360px] w-[360px] rounded-full bg-blue-500/[0.05] blur-[120px]"
            />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Next project
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
              className="group relative mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              Back to all projects

              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}