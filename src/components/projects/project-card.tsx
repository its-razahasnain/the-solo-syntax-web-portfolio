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

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="flex h-7 min-w-0 items-center gap-1.5 border-b border-white/[0.07] bg-white/[0.018] px-2.5 sm:h-8 sm:gap-2 sm:px-3">
      <div className="flex shrink-0 items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      </div>

      <div className="mx-auto flex h-4 w-[55%] min-w-0 items-center justify-center rounded-[4px] border border-white/[0.06] bg-black/20 px-2 sm:px-3">
        <span className="truncate font-mono text-[5px] text-zinc-600 sm:text-[6px]">
          {label}
        </span>
      </div>

      <div className="w-3 shrink-0 sm:w-5" />
    </div>
  );
}

function ComingSoonOverlay({ name }: { name: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.1] bg-black/55 px-5 py-4 text-center shadow-2xl backdrop-blur-md sm:px-6 sm:py-4.5">
        <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-[9px]">
          {name}
        </span>

        <span className="rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.18em] text-zinc-300 sm:px-3.5">
          Coming Soon
        </span>
      </div>
    </div>
  );
}

function TavernVisual() {
  return (
    <div className="relative h-full min-h-[180px] w-full overflow-hidden bg-[#15120f] sm:min-h-[220px]">
      <Image
        src="/projects/tavern/tavern-hero.webp"
        alt="Tavern restaurant website"
        fill
        sizes="(max-width: 639px) calc(100vw - 52px), (max-width: 1023px) calc(50vw - 74px), min(394px, calc(30vw - 38px))"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 to-transparent" />

      <div className="relative z-10 flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3">
        <span className="font-serif text-[9px] tracking-[0.04em] text-white sm:text-xs">
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

      <div className="relative z-10 flex h-[calc(100%-42px)] items-center px-4 sm:px-7">
        <div className="min-w-0">
          <p className="text-[4px] uppercase tracking-[0.2em] text-white/60 sm:text-[6px]">
            Good Food · Crafted Drinks · Good Company
          </p>

          <p className="mt-2 font-serif text-2xl leading-[0.9] tracking-[-0.04em] text-white sm:text-3xl">
            More Than
            <br />a Meal,
          </p>

          <p className="mt-0.5 font-serif text-sm italic text-white/65 sm:text-base">
            It&apos;s a Tavern.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
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
    <div className="relative h-full min-h-[180px] w-full overflow-hidden bg-[#0d1117] sm:min-h-[220px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.22),transparent_42%)]" />

      <div className="absolute inset-x-[7%] top-[9%] bottom-[7%] overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-2xl sm:inset-x-[8%] sm:top-[10%] sm:bottom-[8%]">
        <BrowserChrome label="nexora · concept preview" />

        <div className="p-2.5 sm:p-4">
          <div className="mb-3 flex items-center justify-between sm:mb-4">
            <div className="h-1.5 w-14 rounded-full bg-white/20 sm:w-16" />

            <div className="h-3.5 w-3.5 rounded-full bg-white/10 sm:h-4 sm:w-4" />
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <div className="h-5 w-[68%] rounded-md bg-white/10 sm:h-6" />

            <div className="h-1.5 w-[86%] rounded-full bg-white/[0.06] sm:h-2" />

            <div className="h-1.5 w-[60%] rounded-full bg-white/[0.06] sm:h-2" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-1.5 sm:mt-5 sm:gap-2">
            <div className="h-14 rounded-lg bg-blue-500/10 sm:h-20" />

            <div className="h-14 rounded-lg bg-purple-500/10 sm:h-20" />
          </div>
        </div>
      </div>

      <ComingSoonOverlay name="Nexora" />
    </div>
  );
}

function VeloraVisual() {
  return (
    <div className="relative h-full min-h-[180px] w-full overflow-hidden bg-[#101018] sm:min-h-[220px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.2),transparent_40%)]" />

      <div className="absolute inset-x-[6%] top-[8%] bottom-[7%] overflow-hidden rounded-xl border border-white/10 bg-[#151521] shadow-2xl sm:inset-x-[7%] sm:top-[9%] sm:bottom-[8%]">
        <BrowserChrome label="velora · concept preview" />

        <div className="p-2.5 sm:p-4">
          <div className="mt-2 h-5 w-[58%] rounded-md bg-white/10 sm:h-6" />

          <div className="mt-2 h-1.5 w-[82%] rounded-full bg-white/[0.06] sm:h-2" />

          <div className="mt-4 grid grid-cols-3 gap-1.5 sm:mt-5 sm:gap-2">
            <div className="h-12 rounded-lg bg-purple-500/10 sm:h-16" />

            <div className="h-12 rounded-lg bg-blue-500/10 sm:h-16" />

            <div className="h-12 rounded-lg bg-white/[0.04] sm:h-16" />
          </div>

          <div className="mt-1.5 h-12 rounded-lg bg-white/[0.035] sm:mt-2 sm:h-16" />
        </div>
      </div>

      <ComingSoonOverlay name="Velora" />
    </div>
  );
}

function LumeVisual() {
  return (
    <div className="relative h-full min-h-[180px] w-full overflow-hidden bg-[#0b0d12] sm:min-h-[220px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.18),transparent_38%)]" />

      <div className="absolute inset-x-[8%] top-[10%] bottom-[7%] overflow-hidden rounded-xl border border-white/10 bg-[#11141c] shadow-2xl sm:inset-x-[9%] sm:top-[12%] sm:bottom-[8%]">
        <BrowserChrome label="lume · concept preview" />

        <div className="p-2.5 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="h-1.5 w-14 rounded-full bg-white/15" />

            <div className="h-4 w-4 rounded-full border border-white/10 sm:h-5 sm:w-5" />
          </div>

          <div className="mt-4 h-12 w-[72%] rounded-lg bg-gradient-to-r from-blue-500/15 to-purple-500/15 sm:mt-7 sm:h-16" />

          <div className="mt-2.5 h-1.5 w-[90%] rounded-full bg-white/[0.06] sm:mt-4 sm:h-2" />

          <div className="mt-1 h-1.5 w-[55%] rounded-full bg-white/[0.06] sm:mt-1.5 sm:h-2" />

          <div className="mt-3 h-6 w-20 rounded-full bg-white/[0.08] sm:mt-5 sm:h-7 sm:w-24" />
        </div>
      </div>

      <ComingSoonOverlay name="Lume" />
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

function ProjectStatus({ isBuilt }: { isBuilt: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] sm:text-[10px] ${
        isBuilt
          ? "border-white/[0.12] bg-white/[0.04] text-zinc-300"
          : "border-white/[0.08] bg-white/[0.02] text-zinc-600"
      }`}
    >
      {isBuilt ? "Built" : "Concept"}
    </span>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectHref = project.href ?? "/projects";

  const isBuilt = Boolean(project.liveUrl);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04] sm:rounded-3xl">
      {/* Project visual */}
      <div className="relative aspect-[16/10] min-w-0 overflow-hidden bg-black">
        <div className="absolute inset-x-[4%] top-[6%] bottom-[6%] z-10 overflow-hidden rounded-[0.75rem] border border-white/[0.12] bg-[#090a0d] shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:rotate-[-0.4deg] sm:inset-x-[5%] sm:top-[7%] sm:bottom-[7%] sm:rounded-[1rem]">
          <ProjectVisual variant={project.variant} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Desktop metadata overlay */}
        <div className="pointer-events-none absolute inset-x-[7%] bottom-[8%] z-30 hidden items-center justify-between gap-3 sm:flex">
          <span className="min-w-0 rounded-full border border-white/[0.12] bg-black/55 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.1em] text-zinc-300 backdrop-blur-md sm:text-[10px]">
            {project.category}
          </span>

          <ProjectStatus isBuilt={isBuilt} />
        </div>
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Mobile metadata */}
        <div className="mb-3 flex min-w-0 items-center justify-between gap-3 sm:hidden">
          <p className="min-w-0 break-words text-[9px] font-medium uppercase tracking-[0.1em] text-zinc-500">
            {project.category}
          </p>

          <ProjectStatus isBuilt={isBuilt} />
        </div>

        <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
              {project.name}
            </h3>
          </div>

          {isBuilt && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} live website`}
              title="Visit live website"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-white/20 hover:text-white sm:h-9 sm:w-9"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <Link
              href={projectHref}
              aria-label={`View ${project.name} project concept`}
              title={`View ${project.name}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-white/20 hover:text-white sm:h-9 sm:w-9"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4 sm:mt-6">
          <Link
            href={projectHref}
            className="inline-flex min-h-10 items-center text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
          >
            {isBuilt ? "View case study" : "View concept"}

            <ArrowUpRight className="ml-1.5 h-4 w-4" />
          </Link>

          {isBuilt && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-300"
            >
              Live website
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
