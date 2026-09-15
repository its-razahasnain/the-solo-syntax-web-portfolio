import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.46 11.46 0 0 1 6-.01c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.49 22H3.37l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.85h1.73L8.27 4.05H6.41L17.8 19.85Z" />
    </svg>
  );
}

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Instagram: InstagramIcon,
} as const;

export function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-white/[0.06] py-10 sm:py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="#home"
              className="group inline-flex items-center gap-2 text-sm font-semibold tracking-[-0.02em] text-white"
            >
              The Solo <span className="font-medium text-zinc-400">Syntax</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
              Modern websites built with clean code, thoughtful design and
              real performance.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {siteConfig.navigation
              .filter((item) => item.label !== "Home")
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-500 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} The Solo Syntax. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {siteConfig.socialLinks.map((social) => {
              const Icon = socialIcons[social.label];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-zinc-500 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}