import { ArrowUpRight, Mail } from "lucide-react";

import { siteConfig } from "@/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/[0.06] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] px-5 py-10 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl sm:h-80 sm:w-80" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl sm:h-80 sm:w-80" />

          <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="min-w-0">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-500 to-purple-500" />

                <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Have a project?
                </span>
              </div>

              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  useful.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-400 sm:text-base">
                Have a website, web application, or digital project in mind?
                Tell me what you&apos;re working on and what you need.
              </p>
            </div>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="group inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/10 sm:w-fit"
            >
              <Mail className="h-4 w-4" />
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}