import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/constants";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] fill-current"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.35.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.71 5.39-5.29 5.67.41.36.78 1.08.78 2.18v3.23c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] fill-current"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V8.98h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.33ZM5.34 7.42a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.98H3.56v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] fill-none stroke-current"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.35" cy="6.65" r="1" className="fill-current stroke-none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] fill-current"
    >
      <path d="M23.5 6.18a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.54A3.02 3.02 0 0 0 .5 6.18 31.26 31.26 0 0 0 0 12a31.26 31.26 0 0 0 .5 5.82 3.02 3.02 0 0 0 2.12 2.14c1.88.54 9.38.54 9.38.54s7.5 0 9.38-.54a3.02 3.02 0 0 0 2.12-2.14A31.26 31.26 0 0 0 24 12a31.26 31.26 0 0 0-.5-5.82ZM9.6 15.9V8.1l6.3 3.9-6.3 3.9Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[17px] w-[17px] fill-current"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.93h1.73L8.28 3.94H6.43L17.8 19.93Z" />
    </svg>
  );
}

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  X: XIcon,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050505]">
      <Container>
        <div className="py-12 sm:py-14 lg:py-16">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
            {/* Brand */}
            <div className="max-w-sm">
              <Link
                href="/"
                className="group inline-flex items-center gap-3"
                aria-label="The Solo Syntax home"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03]">
                  <span className="text-xs font-bold tracking-[-0.08em] text-white">
                    SS
                  </span>
                </div>

                <span className="text-[17px] font-semibold tracking-[-0.035em] text-white transition-opacity duration-200 group-hover:opacity-80">
                  The Solo{" "}
                  <span className="font-medium text-zinc-300">Syntax</span>
                </span>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">
                Modern websites built with clean code, thoughtful design and
                real performance.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {siteConfig.socialLinks.map((social) => {
                  const Icon =
                    socialIcons[social.label as keyof typeof socialIcons];

                  if (!Icon) return null;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`The Solo Syntax on ${social.label}`}
                      title={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-500 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                Navigation
              </p>

              <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
                {siteConfig.navigation
                  .filter((item) => item.label !== "Home")
                  .map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="w-fit text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                Let&apos;s work together
              </p>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group mt-5 inline-flex items-center gap-1 text-sm font-medium text-white transition-colors duration-200 hover:text-zinc-300"
              >
                {siteConfig.contact.email}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Available for freelance projects and custom web experiences.
              </p>

              <p className="mt-4 text-xs text-zinc-600">
                {siteConfig.contact.responseTime}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-zinc-600 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} The Solo Syntax. All rights
              reserved.
            </p>

            <p>Built with curiosity, code, and a lot of syntax.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}