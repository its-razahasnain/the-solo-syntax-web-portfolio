import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-sm sm:tracking-[0.2em]">
              Selected Work
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href="/projects"
              className="group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
            >
              View all projects

              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
            >
              Start a project

              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid min-w-0 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}