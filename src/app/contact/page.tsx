import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with The Solo Syntax. Tell me what you're building and let's create something great.",
};

export default function ContactPage() {
  const githubLink = siteConfig.socialLinks.find(
    (social) => social.label === "GitHub",
  );

  const linkedinLink = siteConfig.socialLinks.find(
    (social) => social.label === "LinkedIn",
  );

  const xLink = siteConfig.socialLinks.find(
    (social) => social.label === "X",
  );

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-180px] top-[-220px] h-[500px] w-[500px] rounded-full bg-blue-500/[0.08] blur-[140px] sm:left-[-140px] sm:top-[-180px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-180px] top-[80px] h-[450px] w-[450px] rounded-full bg-purple-500/[0.07] blur-[140px] sm:right-[-140px]"
          />

          <Container>
            <div className="grid gap-10 py-16 sm:gap-14 sm:py-24 lg:grid-cols-[1fr_0.42fr] lg:gap-20 lg:py-32">
              <div className="min-w-0">
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Let&apos;s connect
                </p>

                <h1 className="max-w-4xl text-[clamp(3rem,12vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-[clamp(3.2rem,7vw,6.5rem)]">
                  Let&apos;s build
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    something great.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-[15px] leading-7 text-zinc-400 sm:mt-7 sm:text-lg">
                  Have an idea, a product or a website that needs to come to
                  life? Tell me what you&apos;re thinking and let&apos;s turn
                  it into something meaningful.
                </p>
              </div>

              <div className="min-w-0 lg:pt-2">
                <div className="border-t border-white/[0.07] pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                    contact.index
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                        Email
                      </p>

                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="mt-2 block break-all text-sm text-zinc-300 transition-colors hover:text-white"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                        Availability
                      </p>

                      <p className="mt-2 text-sm text-zinc-300">
                        Open for select projects
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 border-t border-white/[0.07] pt-5 sm:mt-10">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                    Social
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={githubLink?.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-white"
                    >
                      <Code2 className="h-5 w-5" />
                    </a>

                    <a
                      href={linkedinLink?.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-white"
                    >
                      <BriefcaseBusiness className="h-5 w-5" />
                    </a>

                    <a
                      href={xLink?.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="X"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-white"
                    >
                      <span className="text-sm font-medium">𝕏</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-16 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-20">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                  Start a project
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                  Tell me about your idea.
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
                  Share a few details about what you&apos;re building.
                  I&apos;ll get back to you with the next steps.
                </p>
              </div>

              <ContactForm />
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="pb-16 sm:pb-24 lg:pb-28">
          <Container>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] px-5 py-10 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-140px] top-[-180px] h-[360px] w-[360px] rounded-full bg-purple-500/[0.08] blur-[120px] sm:right-[-120px] sm:h-[400px] sm:w-[400px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[360px] w-[360px] rounded-full bg-blue-500/[0.05] blur-[120px]"
              />

              <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-10">
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
                  href="/projects"
                  className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 sm:w-fit sm:px-6"
                >
                  Explore my work
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <Link
                href="/about"
                className="group relative mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white sm:mt-8"
              >
                Or learn more about me
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}