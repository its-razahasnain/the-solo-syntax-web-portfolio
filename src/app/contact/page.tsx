import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have an idea for a website or digital product? Get in touch with The Solo Syntax.",
};

const projectTypes = [
  "Website",
  "Web Application",
  "Portfolio",
  "SaaS Product",
  "Other",
] as const;

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    label: "X",
    href: "https://x.com",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-260px] h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[140px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-purple-500/[0.06] blur-[130px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <Container>
            <div className="relative grid min-h-[560px] items-end gap-14 pb-14 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pb-16 lg:pt-32">
              <div>
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-gradient-to-r from-blue-400 to-purple-500" />

                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                    Start a conversation
                  </span>
                </div>

                <h1 className="max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
                  Let&apos;s build
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    something great.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                  Have a project in mind, an idea you want to explore, or
                  simply want to say hello? Tell me a little about it and
                  let&apos;s start from there.
                </p>
              </div>

              <div className="relative lg:pb-1">
                <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-7">
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                    <span className="font-mono text-xs text-zinc-500">
                      contact.index
                    </span>

                    <span className="text-xs text-zinc-600">2026</span>
                  </div>

                  <div className="space-y-5 pt-6">
                    <div className="flex gap-4">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                          Email
                        </p>

                        <a
                          href="mailto:hello@the-solo-syntax.dev"
                          className="mt-2 block text-sm text-zinc-300 transition-colors hover:text-white"
                        >
                          hello@the-solo-syntax.dev
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                          Based in
                        </p>

                        <p className="mt-2 text-sm text-zinc-300">
                          Pakistan · Working worldwide
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                          Availability
                        </p>

                        <p className="mt-2 text-sm text-zinc-300">
                          Open for selected projects
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                    <span className="text-xs text-zinc-600">
                      The Solo Syntax
                    </span>

                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact form */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              {/* Intro */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Project inquiry
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                  Tell me about
                  <br />
                  your project.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">
                  A few details are enough to get the conversation started.
                  You don&apos;t need everything figured out before reaching
                  out.
                </p>

                <div className="mt-9 border-t border-white/[0.07] pt-7">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
                    Prefer email?
                  </p>

                  <a
                    href="mailto:hello@the-solo-syntax.dev"
                    className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                  >
                    hello@the-solo-syntax.dev
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-zinc-500 transition-colors duration-200 hover:text-white"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form
                action="mailto:hello@the-solo-syntax.dev"
                method="post"
                encType="text/plain"
                className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2.5 block text-sm font-medium text-zinc-300"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="Name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="John Doe"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-sm font-medium text-zinc-300"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="Email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="john@example.com"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="project-type"
                    className="mb-2.5 block text-sm font-medium text-zinc-300"
                  >
                    What are you looking to build?
                  </label>

                  <select
                    id="project-type"
                    name="Project Type"
                    defaultValue=""
                    required
                    className="h-12 w-full appearance-none rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-zinc-300 outline-none transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="budget"
                    className="mb-2.5 block text-sm font-medium text-zinc-300"
                  >
                    Estimated budget
                    <span className="ml-2 text-xs font-normal text-zinc-600">
                      Optional
                    </span>
                  </label>

                  <input
                    id="budget"
                    name="Budget"
                    type="text"
                    placeholder="e.g. $1,000 – $3,000"
                    className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-sm font-medium text-zinc-300"
                  >
                    Tell me about it
                  </label>

                  <textarea
                    id="message"
                    name="Project Details"
                    required
                    rows={7}
                    placeholder="What are you building? What should it accomplish?"
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-zinc-700 transition-colors focus:border-indigo-400/50 focus:bg-white/[0.035]"
                  />
                </div>

                <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-zinc-600">
                    By sending this inquiry, you&apos;re simply starting a
                    conversation. No commitment required.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 sm:w-auto"
                  >
                    Send inquiry
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            </div>
          </Container>
        </section>

        {/* Bottom CTA */}
        <section className="relative pb-20 sm:pb-24 lg:pb-28">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-120px] top-[-180px] h-[400px] w-[400px] rounded-full bg-purple-500/[0.08] blur-[120px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[360px] w-[360px] rounded-full bg-blue-500/[0.05] blur-[120px]"
              />

              <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Still exploring?
                  </p>

                  <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                    See what I&apos;ve
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                      built so far.
                    </span>
                  </h2>
                </div>

                <Link
                  href="/projects"
                  className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
                >
                  Explore my work
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <Link
                href="/about"
                className="group relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                Or learn more about me
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}