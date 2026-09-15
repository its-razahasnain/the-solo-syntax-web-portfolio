import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}