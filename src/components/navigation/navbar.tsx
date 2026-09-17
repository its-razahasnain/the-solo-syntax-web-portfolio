import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050505]/85 backdrop-blur-xl">
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="The Solo Syntax home"
          >
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/logo-mark.webp"
                alt="The Solo Syntax logo"
                width={36}
                height={36}
                priority
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <span className="relative text-[17px] font-semibold tracking-[-0.035em] text-white transition-opacity duration-200 group-hover:opacity-80 sm:text-[18px]">
              The Solo{" "}
              <span className="font-medium text-zinc-300">Syntax</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation
              .filter((item) => item.label !== "Home")
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

            <a
              href="mailto:thesolosyntax@gmail.com"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.025] px-5 text-sm font-medium text-white transition-all duration-200 hover:border-white/[0.25] hover:bg-white/[0.07]"
            >
              Let&apos;s talk
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <details className="group relative md:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] hover:text-white [&::-webkit-details-marker]:hidden"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5 transition-all duration-200 group-open:scale-0 group-open:opacity-0" />
              <X className="absolute h-5 w-5 scale-0 opacity-0 transition-all duration-200 group-open:scale-100 group-open:opacity-100" />
            </summary>

            <div className="absolute inset-x-0 top-full overflow-hidden">
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
                <div className="min-h-0 overflow-hidden">
                  <div className="border-t border-white/[0.06] bg-[#050505]/95 pt-4 backdrop-blur-xl">
                    <div className="flex flex-col gap-1 pb-5">
                      {siteConfig.navigation.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-xl px-4 py-3 text-sm text-zinc-400 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ))}

                      <a
                        href="mailto:thesolosyntax@gmail.com"
                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
                      >
                        Let&apos;s talk
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </nav>
      </Container>
    </header>
  );
}