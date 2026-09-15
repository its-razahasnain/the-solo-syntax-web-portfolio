import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  category: string;
  description: string;
  variant: "nexora" | "velora" | "lume";
};

type ProjectCardProps = {
  project: Project;
};

function ProjectVisual({ variant }: { variant: Project["variant"] }) {
  if (variant === "nexora") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0d1117]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.22),transparent_42%)]" />

        <div className="absolute left-[10%] top-[16%] h-[68%] w-[80%] rounded-2xl border border-white/10 bg-[#111827] p-4 shadow-2xl sm:p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="h-2 w-20 rounded-full bg-white/20" />
            <div className="h-5 w-5 rounded-full bg-white/10" />
          </div>

          <div className="space-y-3">
            <div className="h-8 w-[68%] rounded-lg bg-white/10" />
            <div className="h-3 w-[86%] rounded-full bg-white/[0.06]" />
            <div className="h-3 w-[60%] rounded-full bg-white/[0.06]" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="h-24 rounded-xl bg-blue-500/10" />
            <div className="h-24 rounded-xl bg-purple-500/10" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "velora") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#101018]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.2),transparent_40%)]" />

        <div className="absolute left-[8%] top-[14%] h-[72%] w-[84%] rounded-2xl border border-white/10 bg-[#151521] p-4 shadow-2xl sm:p-5">
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-white/20" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>

          <div className="mt-6 h-7 w-[58%] rounded-lg bg-white/10" />
          <div className="mt-3 h-3 w-[82%] rounded-full bg-white/[0.06]" />

          <div className="mt-7 grid grid-cols-3 gap-2">
            <div className="h-20 rounded-lg bg-purple-500/10" />
            <div className="h-20 rounded-lg bg-blue-500/10" />
            <div className="h-20 rounded-lg bg-white/[0.04]" />
          </div>

          <div className="mt-3 h-20 rounded-lg bg-white/[0.035]" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b0d12]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.18),transparent_38%)]" />

      <div className="absolute left-[12%] top-[18%] h-[64%] w-[76%] rounded-2xl border border-white/10 bg-[#11141c] p-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="h-2 w-16 rounded-full bg-white/15" />
          <div className="h-6 w-6 rounded-full border border-white/10" />
        </div>

        <div className="mt-10 h-20 w-[72%] rounded-xl bg-gradient-to-r from-blue-500/15 to-purple-500/15" />

        <div className="mt-5 h-3 w-[90%] rounded-full bg-white/[0.06]" />
        <div className="mt-2 h-3 w-[55%] rounded-full bg-white/[0.06]" />

        <div className="mt-8 h-8 w-28 rounded-full bg-white/[0.08]" />
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <ProjectVisual variant={project.variant} />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

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

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-white/20 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        <div className="mt-6">
          <Link
            href="#contact"
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