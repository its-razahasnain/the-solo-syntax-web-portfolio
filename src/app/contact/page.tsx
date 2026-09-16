import type { Metadata } from "next";

import Image from "next/image";

import Link from "next/link";

import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

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

const socialIconMap = {
  GitHub: faGithub,
  LinkedIn: faLinkedinIn,
  X: faXTwitter,
  Instagram: faInstagram,
  YouTube: faYoutube,
} as const;

const socialDescriptions = {
  GitHub: "Projects & code",
  LinkedIn: "Professional profile",
  X: "Updates & thoughts",
  Instagram: "Visual updates",
  YouTube: "Videos & tutorials",
} as const;

export default function ContactPage() {
  const socialLinks = siteConfig.socialLinks.filter(
    (social) => socialIconMap[social.label as keyof typeof socialIconMap],
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
            <div className="grid gap-8 py-9 sm:gap-10 sm:py-12 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-16 lg:py-11 xl:gap-20 xl:py-12">
              {/* Left */}
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 shrink-0 bg-gradient-to-r from-blue-500 to-purple-500" />

                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Let&apos;s connect
                  </p>
                </div>

                <h1 className="max-w-4xl text-[clamp(3rem,10vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-[clamp(3.2rem,7vw,6.5rem)]">
                  Let&apos;s build
                  <br />

                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    something great.
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-400 sm:mt-5 sm:text-lg">
                  Have an idea, a product or a website that needs to come to
                  life? Tell me what you&apos;re thinking and let&apos;s turn
                  it into something meaningful.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:w-fit"
                  >
                    <Mail className="h-4 w-4" />

                    Start a conversation

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>

                  <Link
                    href="/projects"
                    className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-5 py-3.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.045] hover:text-white sm:w-fit"
                  >
                    Explore my work

                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Social identity mockup */}
              <div className="relative min-w-0">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-10 top-8 h-48 rounded-full bg-blue-500/[0.08] blur-[90px]"
                />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#08080b]/95 shadow-2xl shadow-black/30 sm:rounded-[1.75rem]">
                  {/* Browser chrome */}
                  <div className="flex h-10 items-center justify-between border-b border-white/[0.07] px-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-zinc-700" />
                      <span className="h-2 w-2 rounded-full bg-zinc-700" />
                      <span className="h-2 w-2 rounded-full bg-zinc-700" />
                    </div>

                    <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      <span className="font-mono text-[9px] text-zinc-600">
                        thesolosyntax.vercel.app
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-zinc-700">
                      01
                    </span>
                  </div>

                  {/* Mockup content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        {/* Actual logo */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] shadow-lg shadow-blue-500/10">
                          <Image
                            src="/logo-mark.webp"
                            alt="The Solo Syntax"
                            width={48}
                            height={48}
                            className="h-12 w-12 object-contain"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-base font-semibold tracking-[-0.02em] text-white">
                            The Solo Syntax
                          </p>

                          <p className="mt-1 text-xs text-zinc-500">
                            Full-Stack Web Developer
                          </p>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-emerald-400">
                        Available
                      </span>
                    </div>

                    <div className="mt-5 border-t border-white/[0.07] pt-4">
                      <p className="text-xs leading-5 text-zinc-500">
                        Building modern websites and web applications for
                        businesses, professionals and growing brands.
                      </p>
                    </div>

                    {/* Social grid */}
                    <div className="mt-4 grid gap-1.5">
                      {socialLinks.map((social) => {
                        const icon =
                          socialIconMap[
                            social.label as keyof typeof socialIconMap
                          ];

                        if (!icon) return null;

                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open The Solo Syntax on ${social.label}`}
                            className="group flex min-h-[54px] items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.018] px-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.13] hover:bg-white/[0.04]"
                          >
                            <div className="flex min-w-0 items-center gap-3">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-black/20 text-zinc-400 transition-colors duration-300 group-hover:text-white">
                                <FontAwesomeIcon
                                  icon={icon}
                                  className="h-4 w-4"
                                />
                              </span>

                              <div className="min-w-0">
                                <p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                                  {social.label}
                                </p>

                                <p className="mt-0.5 text-[10px] text-zinc-600">
                                  {
                                    socialDescriptions[
                                      social.label as keyof typeof socialDescriptions
                                    ]
                                  }
                                </p>
                              </div>
                            </div>

                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
                          </a>
                        );
                      })}
                    </div>

                    {/* Email footer */}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="mt-3 flex items-center justify-between border-t border-white/[0.07] pt-3"
                    >
                      <span className="truncate text-[11px] text-zinc-600 transition-colors hover:text-zinc-400">
                        {siteConfig.contact.email}
                      </span>

                      <span className="ml-3 shrink-0 text-[10px] uppercase tracking-[0.14em] text-zinc-700">
                        Contact
                      </span>
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

                <h2 className="mt-4 text-3xl font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-4xl">
                  Tell me about{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    your idea.
                  </span>
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
                  Share a few details about what you&apos;re building. I&apos;ll
                  review your inquiry and get back to you with the next steps.
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