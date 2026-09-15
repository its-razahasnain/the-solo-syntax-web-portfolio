import {
  ArrowRight,
  Code2,
  Layers3,
  PenLine,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { capabilities } from "@/lib/constants";

const icons = {
  code: Code2,
  layers: Layers3,
  pen: PenLine,
  users: UsersRound,
} as const;

export function About() {
  return (
    <section
      id="about"
      className="border-b border-white/[0.08] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr_0.72fr] lg:items-center lg:gap-10">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
              About Me
            </p>

            <h2 className="max-w-[390px] text-[29px] font-medium leading-[1.12] tracking-[-0.035em] text-white sm:text-[33px]">
              Crafting Digital
              <br />
              Experiences Since Day One
            </h2>

            <p className="mt-5 max-w-[390px] text-[13px] leading-[1.7] text-white/45">
              I&apos;m a passionate web developer who loves turning ideas into
              beautiful, functional websites. I focus on clean code, modern
              design and smooth user experiences.
            </p>

            <div className="mt-6">
              <Button href="#contact">
                <span>Learn More</span>
                <ArrowRight size={15} strokeWidth={1.6} />
              </Button>
            </div>
          </div>

          <div
            id="skills"
            className="space-y-2"
          >
            {capabilities.map((capability) => {
              const Icon = icons[capability.icon];

              return (
                <div
                  key={capability.title}
                  className="flex items-center gap-4 py-2"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.02] text-white/75">
                    <Icon
                      size={17}
                      strokeWidth={1.35}
                    />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-medium text-white/90">
                      {capability.title}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-white/40">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            id="contact"
            className="relative overflow-hidden rounded-[9px] border border-white/[0.1] bg-[#0d1114] p-6 sm:p-7"
          >
            <div className="absolute -right-20 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <Sparkles
                size={20}
                strokeWidth={1.3}
                className="mb-6 text-white/80"
              />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/55">
                Let&apos;s Work Together
              </p>

              <h3 className="mt-4 text-[25px] font-medium leading-[1.1] tracking-[-0.035em] text-white">
                Have a Project
                <br />
                in Mind?
              </h3>

              <p className="mt-4 text-[12px] leading-[1.65] text-white/45">
                I&apos;m always open to new opportunities, collaborations and
                exciting ideas.
              </p>

              <div className="mt-6">
                <Button
                  href="mailto:hello@thesolosyntax.com"
                  variant="primary"
                  className="px-5 py-3"
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={15} strokeWidth={1.6} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}