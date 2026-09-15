import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/constants";

function LogoMark() {
  return (
    <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
      <div className="absolute h-[3px] w-5 rotate-[-45deg] bg-black" />
      <div className="absolute h-[3px] w-5 translate-y-[6px] rotate-[-45deg] bg-black" />
      <div className="absolute h-[3px] w-5 translate-y-[-6px] rotate-[-45deg] bg-black" />
    </div>
  );
}

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <nav className="flex h-[76px] items-center justify-between">
          <Link
            href="#home"
            className="group flex items-center gap-3"
            aria-label="The Solo Syntax home"
          >
            <LogoMark />

            <span className="hidden text-[12px] font-semibold uppercase tracking-[0.28em] text-white sm:block">
              The Solo Syntax
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[12px] transition-colors duration-300 ${
                  index === 0
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {item.label}

                {index === 0 && (
                  <span className="absolute -bottom-[9px] left-0 h-px w-full bg-white/80" />
                )}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.02] px-4 py-2.5 text-[11px] font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/[0.06]"
          >
            <span>Get In Touch</span>

            <ArrowRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>
      </Container>
    </header>
  );
}