import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/constants";

const socialIcons = {
  GitHub: faGithub,
  LinkedIn: faLinkedinIn,
  Instagram: faInstagram,
  YouTube: faYoutube,
  X: faXTwitter,
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
                <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src="/logo-mark.webp"
                    alt="The Solo Syntax logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
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
                  const icon =
                    socialIcons[social.label as keyof typeof socialIcons];

                  if (!icon) return null;

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
                      <FontAwesomeIcon icon={icon} className="h-4 w-4" />
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

              <nav
                className="mt-5 flex flex-col gap-3"
                aria-label="Footer navigation"
              >
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