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
            <p className="mb-3 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-sm sm:tracking-[0.2em]">
              <span className="h-px w-7 bg-gradient-to-r from-blue-500 to-purple-500" />
              Selected Work
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-[3.5rem]">
              A selection of
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                work.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-5 sm:text-[15px] sm:leading-7">
              A focused selection featuring Tavern, a live restaurant concept,
              alongside upcoming concepts exploring different digital
              experiences.
            </p>
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