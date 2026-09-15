import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative flex min-h-[calc(100svh-80px)] items-center overflow-hidden border-b border-white/[0.06]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-180px] top-[-220px] h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[140px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-220px] right-[-180px] h-[500px] w-[500px] rounded-full bg-purple-500/[0.07] blur-[140px]"
          />

          <Container>
            <div className="relative py-24 sm:py-32">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                Error 404
              </p>

              <h1 className="mt-5 max-w-5xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
                This page
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  doesn&apos;t exist.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-7 text-zinc-500 sm:text-lg">
                The page you&apos;re looking for may have been moved, deleted,
                or never existed in the first place.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                  Back home
                </Link>

                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  Explore projects
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}