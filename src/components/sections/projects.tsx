import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-white/[0.08] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mb-9 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
              Featured Projects
            </p>

            <h2 className="text-[29px] font-medium tracking-[-0.035em] text-white sm:text-[34px]">
              Some of My Recent Work
            </h2>

            <p className="mt-2 max-w-[520px] text-[13px] leading-[1.65] text-white/45">
              Here are a few selected projects I&apos;ve built with modern
              technologies and a focus on clean design, performance and user
              experience.
            </p>
          </div>

          <a
            href="#contact"
            className="group hidden shrink-0 items-center gap-2 border-b border-white/35 pb-1 text-[11px] text-white/65 transition-colors hover:border-white hover:text-white sm:flex"
          >
            <span>View All Projects</span>

            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              category={project.category}
              variant={project.variant}
            />
          ))}
        </div>

        <a
          href="#contact"
          className="group mt-7 flex w-fit items-center gap-2 border-b border-white/25 pb-1 text-[11px] text-white/60 sm:hidden"
        >
          <span>View All Projects</span>
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </Container>
    </section>
  );
}