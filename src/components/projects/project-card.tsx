import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  category: string;
  description: string;
  variant: "tavern" | "nexora" | "velora" | "lume";
  href?: string;
  liveUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

function BrowserChrome() {
  return (
    <div className="flex h-8 items-center gap-2 border-b border-white/[0.07] bg-white/[0.018] px-3">
      <div className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      </div>

      <div className="mx-auto flex h-4.5 w-[55%] items-center justify-center rounded-[4px] border border-white/[0.06] bg-black/20">
        <span className="truncate font-mono text-[6px] text-zinc-600">
          the-solo-syntax
        </span>
      </div>

      <div className="w-5" />
    </div>
  );
}

function TavernVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#15120f]">
      <Image
        src="/projects/tavern/tavern-hero.webp"
        alt="Tavern restaurant website"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 to-transparent" />

      <div className="relative z-10 flex items-center justify-between px-4 py-3">
        <span className="font-serif text-[10px] tracking-[0.04em] text-white sm:text-xs">
          TAVERN
        </span>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-[5px] uppercase tracking-[0.15em] text-white/60">
            Menu
          </span>

          <span className="text-[5px] uppercase tracking-[0.15em] text-white/60">
            Our Story
          </span>

          <span className="rounded-full border border-white/20 px-2 py-1 text-[5px] uppercase tracking-[0.1em] text-white">
            Reserve
          </span>
        </div>
      </div>

      <div className="relative z-10 flex h-[calc(100%-42px)] items-center px-5 sm:px-7">
        <div>
          <p className="text-[5px] uppercase tracking-[0.22em] text-white/60 sm:text-[6px]">
            Good Food · Crafted Drinks · Good Company
          </p>

          <h4 className="mt-2 font-serif text-2xl leading-[0.9] tracking-[-0.04em] text-white sm:text-3xl">
            More Than
            <br />a Meal,
          </h4>

          <p className="mt-0.5 font-serif text-sm italic text-white/65 sm:text-base">
            It&apos;s a Tavern.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full bg-white px-2.5 py-1 text-[5px] font-medium uppercase tracking-[0.08em] text-black">
              Explore menu
            </span>

            <span className="text-[5px] uppercase tracking-[0.08em] text-white/60">
              Book a table
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NexoraVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0d1117]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.22),transparent_42%)]" />

      <div className="absolute inset-x-[8%] top-[10%] overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-2xl">
        <BrowserChrome />

        <div className="p-3 sm:p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-1.5 w-16 rounded-full bg-white/20" />
            <div className="h-4 w-4 rounded-full bg-white/10" />
          </div>

          <div className="space-y-2">
            <div className="h-6 w-[68%] rounded-md bg-white/10" />
            <div className="h-2 w-[86%] rounded-full bg-white/[0.06]" />
            <div className="h-2 w-[60%] rounded-full bg-white/[0.06]" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <div className="h-20 rounded-lg bg-blue-500/10" />
            <div className="h-20 rounded-lg bg-purple-500/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VeloraVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#101018]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.2),transparent_40%)]" />

      <div className="absolute inset-x-[7%] top-[9%] overflow-hidden rounded-xl border border-white/10 bg-[#151521] shadow-2xl">
        <BrowserChrome />

        <div className="p-3 sm:p-4">
          <div className="mt-2 h-6 w-[58%] rounded-md bg-white/10" />
          <div className="mt-2 h-2 w-[82%] rounded-full bg-white/[0.06]" />

          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-lg bg-purple-500/10" />
            <div className="h-16 rounded-lg bg-blue-500/10" />
            <div className="h-16 rounded-lg bg-white/[0.04]" />
          </div>

          <div className="mt-2 h-16 rounded-lg bg-white/[0.035]" />
        </div>
      </div>
    </div>
  );
}

function LumeVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b0d12]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.18),transparent_38%)]" />

      <div className="absolute inset-x-[9%] top-[12%] overflow-hidden rounded-xl border border-white/10 bg-[#11141c] shadow-2xl">
        <BrowserChrome />

        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="h-1.5 w-14 rounded-full bg-white/15" />
            <div className="h-5 w-5 rounded-full border border-white/10" />
          </div>

          <div className="mt-7 h-16 w-[72%] rounded-lg bg-gradient-to-r from-blue-500/15 to-purple-500/15" />

          <div className="mt-4 h-2 w-[90%] rounded-full bg-white/[0.06]" />
          <div className="mt-1.5 h-2 w-[55%] rounded-full bg-white/[0.06]" />

          <div className="mt-5 h-7 w-24 rounded-full bg-white/[0.08]" />
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ variant }: { variant: Project["variant"] }) {
  if (variant === "tavern") {
    return <TavernVisual />;
  }

  if (variant === "nexora") {
    return <NexoraVisual />;
  }

  if (variant === "velora") {
    return <VeloraVisual />;
  }

  return <LumeVisual />;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectHref = project.href ?? "/projects";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]">
      {/* Project visual */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <div className="absolute inset-x-[5%] top-[7%] z-10 overflow-hidden rounded-[1rem] border border-white/[0.12] bg-[#090a0d] shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:rotate-[-0.4deg]">
          <ProjectVisual variant={project.variant} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              {project.category}
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-white">
              {project.name}
            </h3>
          </div>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} live website`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <Link
              href={projectHref}
              aria-label={`View ${project.name} project`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>

        <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        <div className="mt-6">
          <Link
            href={projectHref}
            className="inline-flex items-center text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
          >
            View project
            <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
