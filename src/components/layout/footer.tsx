import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/constants";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px] fill-current"
    >
      <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6-.01c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px] fill-current"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.31ZM5.34 7.42a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px] fill-none stroke-current"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.35" cy="6.65" r="1" className="fill-current stroke-none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px] fill-current"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.48 4h-1.86L17.8 19.9Z" />
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
    <footer className="bg-[#07090a]">
      <Container>
        <div className="flex flex-col gap-8 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
                <div className="absolute h-[2px] w-4 rotate-[-45deg] bg-black" />
                <div className="absolute h-[2px] w-4 translate-y-[5px] rotate-[-45deg] bg-black" />
                <div className="absolute h-[2px] w-4 translate-y-[-5px] rotate-[-45deg] bg-black" />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white">
                The Solo Syntax
              </span>
            </a>

            <p className="mt-4 text-[10px] text-white/35">
              © {new Date().getFullYear()} The Solo Syntax. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] text-white/45 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-end justify-between gap-8 sm:flex-col sm:items-end">
            <div className="flex items-center gap-4">
              {siteConfig.socialLinks.map((social) => {
                const Icon = socialIcons[social.label];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="text-white/45 transition-colors hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <p className="text-right text-[10px] text-white/30">
              Better Websites. Brighter Ideas.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}