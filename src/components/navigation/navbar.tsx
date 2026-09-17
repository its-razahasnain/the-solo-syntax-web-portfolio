"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  /*
   * Close the mobile menu when clicking anywhere
   * outside the navbar/menu area.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      const clickedInsideMenu = menuRef.current?.contains(target);
      const clickedMenuButton = buttonRef.current?.contains(target);

      if (!clickedInsideMenu && !clickedMenuButton) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isOpen]);

  /*
   * Prevent the page behind the mobile menu from scrolling.
   */
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /*
   * Close the mobile menu when switching to desktop.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Escape key closes the menu.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050505]/85 backdrop-blur-xl">
      <Container>
        <nav
          className="relative flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
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

          {/* Desktop navigation */}
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

          {/* Mobile hamburger */}
          <button
            ref={buttonRef}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="relative z-[70] inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] hover:text-white md:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile navigation */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full z-[60] border-b border-white/[0.08] bg-[#050505] shadow-2xl transition-all duration-200 md:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <Container>
          <div className="max-h-[calc(100svh-5rem)] overflow-y-auto py-5">
            <div className="flex flex-col gap-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="mailto:thesolosyntax@gmail.com"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Let&apos;s talk
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}