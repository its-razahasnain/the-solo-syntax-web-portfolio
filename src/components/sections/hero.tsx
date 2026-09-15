import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  MonitorSmartphone,
  Play,
  Zap,
} from "lucide-react";
import { TypewriterGradient } from "@/components/ui/typewriter-gradient";

const heroWords = [
  "That Make an Impact",
  "That Feel Premium",
  "That Drive Results",
  "That People Remember",
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate h-[calc(100svh-80px)] min-h-[600px] overflow-hidden border-b border-white/[0.06]"
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[8%] top-[-180px] h-[500px] w-[500px] rounded-full bg-blue-600/[0.10] blur-[140px]" />

        <div className="absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.08] blur-[140px]" />

        <div className="absolute bottom-[-220px] left-[35%] h-[420px] w-[620px] rounded-full bg-blue-700/[0.06] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.025),transparent_55%)]" />
      </div>

      <div className="mx-auto grid h-full max-w-[1440px] items-center px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-6">
        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}
        <div className="relative z-10 max-w-[780px]">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-4 lg:mb-6">
            <span
              className="h-[2px] w-9 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
              aria-hidden="true"
            />

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400 sm:text-xs">
              Hi, I&apos;m The Solo Syntax
            </p>
          </div>

          {/* Main heading */}
          <h1 className="max-w-[780px] text-[clamp(3rem,5.35vw,5.75rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
            <span className="block">I Build Modern Websites</span>

            <span className="mt-1 block">
              <TypewriterGradient words={heroWords} />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[600px] text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            I design and develop high-performance websites for businesses,
            brands and individuals. Clean code. Modern design. Real results.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 px-7 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(99,102,241,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_65px_rgba(99,102,241,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
            >
              View My Work

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#about"
              className="group inline-flex h-13 items-center justify-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.025] px-7 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
                <Play className="ml-0.5 h-3 w-3 fill-current" />
              </span>

              Watch Intro
            </Link>
          </div>

          {/* Feature row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-zinc-500 sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Zap className="h-4 w-4 text-blue-400" />
              <span>Fast Performance</span>
            </div>

            <span
              className="hidden h-4 w-px bg-white/10 sm:block"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2.5">
              <Check className="h-4 w-4 text-violet-400" />
              <span>SEO Optimized</span>
            </div>

            <span
              className="hidden h-4 w-px bg-white/10 sm:block"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2.5">
              <MonitorSmartphone className="h-4 w-4 text-purple-400" />
              <span>Fully Responsive</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT VISUAL — UNCHANGED
        ========================================================= */}
        <div
          className="relative mt-10 h-[320px] w-full sm:h-[430px] lg:mt-0 lg:h-[570px] xl:h-[620px]"
          aria-hidden="true"
        >
          {/* Main blue/purple glow */}
          <div className="absolute left-[50%] top-[48%] h-[260px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.12] blur-[100px] sm:h-[330px] sm:w-[520px]" />

          <div className="absolute right-[4%] top-[42%] h-[230px] w-[300px] rounded-full bg-violet-600/[0.12] blur-[100px] sm:h-[300px] sm:w-[390px]" />

          {/* Orb */}
          <div className="absolute bottom-[14%] left-[10%] h-16 w-16 rounded-full bg-gradient-to-br from-blue-400/70 via-violet-500/60 to-purple-700/40 shadow-[0_0_70px_rgba(79,70,229,0.65)] sm:h-24 sm:w-24" />

          {/* Orbital ring */}
          <div className="absolute bottom-[16%] left-[2%] h-[180px] w-[180px] rounded-full border border-blue-500/20 sm:h-[250px] sm:w-[250px]" />

          <div className="absolute bottom-[8%] left-[-2%] h-px w-[115%] rotate-[-6deg] bg-gradient-to-r from-transparent via-blue-500/50 to-purple-500/50 blur-[1px]" />

          {/* =======================================================
              BROWSER WINDOW
          ======================================================= */}
          <div className="absolute left-[4%] top-[10%] w-[94%] rotate-[-2.5deg] sm:left-[1%] sm:w-[96%] lg:left-[-1%] lg:w-[101%]">
            <div className="relative rounded-[20px] border border-white/[0.18] bg-[#11151d]/95 p-1.5 shadow-[0_45px_120px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-transform duration-700 hover:rotate-[-1deg]">
              {/* Browser top frame */}
              <div className="flex h-9 items-center gap-2 rounded-t-[14px] border-b border-white/[0.08] bg-[#171b24] px-3 sm:h-11 sm:px-4">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />

                <div className="mx-auto h-5 w-[42%] rounded-md border border-white/[0.06] bg-white/[0.025]" />
              </div>

              {/* Browser content */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-b-[14px] bg-[#080b12]">
                {/* Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(79,70,229,0.30),transparent_30%),linear-gradient(135deg,#080b12,#11182c)]" />

                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:38px_38px]" />

                <div className="relative h-full p-[6%]">
                  {/* Mock nav */}
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-20 rounded-full bg-white/70 sm:h-2.5 sm:w-28" />

                    <div className="hidden items-center gap-5 sm:flex">
                      <span className="h-1.5 w-10 rounded-full bg-white/20" />
                      <span className="h-1.5 w-10 rounded-full bg-white/20" />
                      <span className="h-1.5 w-10 rounded-full bg-white/20" />
                      <span className="h-6 w-16 rounded-full border border-white/10 bg-white/[0.04]" />
                    </div>
                  </div>

                  {/* Mock hero */}
                  <div className="grid h-[82%] grid-cols-2 items-center gap-4">
                    <div>
                      <div className="mb-3 h-1.5 w-20 rounded-full bg-violet-400/60 sm:h-2 sm:w-28" />

                      <div className="space-y-2">
                        <div className="h-5 w-[90%] rounded-md bg-white/75 sm:h-8" />
                        <div className="h-5 w-[70%] rounded-md bg-gradient-to-r from-blue-400/80 to-violet-400/80 sm:h-8" />
                      </div>

                      <div className="mt-4 space-y-1.5">
                        <div className="h-1.5 w-[85%] rounded-full bg-white/10" />
                        <div className="h-1.5 w-[65%] rounded-full bg-white/[0.07]" />
                      </div>

                      <div className="mt-5 h-8 w-24 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 sm:h-10 sm:w-32" />
                    </div>

                    {/* Mock visual inside browser */}
                    <div className="relative h-full">
                      <div className="absolute right-0 top-[5%] h-[78%] w-[78%] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#20285b] via-[#151a39] to-[#090c16]">
                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/30 blur-3xl" />

                        <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-tr from-transparent via-violet-500/10 to-violet-500/30" />

                        <div className="absolute bottom-[10%] left-[12%] h-[46%] w-[70%] skew-x-[-8deg] rounded-t-[40%] bg-gradient-to-t from-[#070910] via-[#25294a] to-[#5f6db0]" />

                        <div className="absolute bottom-[8%] left-[18%] h-px w-[62%] bg-white/20" />
                      </div>
                    </div>
                  </div>

                  {/* Mock footer */}
                  <div className="absolute bottom-[5%] left-[6%] right-[6%] flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="h-1.5 w-20 rounded-full bg-white/10" />
                    <span className="h-1.5 w-14 rounded-full bg-white/[0.07]" />
                    <span className="h-1.5 w-16 rounded-full bg-white/[0.05]" />
                  </div>
                </div>
              </div>

              {/* Laptop-style lower edge */}
              <div className="absolute -bottom-3 left-1/2 h-3 w-[72%] -translate-x-1/2 rounded-b-xl bg-gradient-to-b from-[#303541] to-[#151820]" />
            </div>
          </div>

          {/* Floating diamond */}
          <div className="absolute bottom-[2%] left-[50%] z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-xl border border-white/15 bg-[#0a0d14]/90 shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:h-20 sm:w-20">
            <div className="flex h-8 w-8 rotate-45 items-center justify-center border border-white/20">
              <Code2 className="h-4 w-4 -rotate-45 text-white/70" />
            </div>
          </div>

          {/* Bottom purple light */}
          <div className="absolute bottom-[7%] right-[0%] h-2 w-[55%] rounded-full bg-gradient-to-r from-transparent via-blue-500/40 to-purple-500/70 blur-md" />
        </div>
      </div>
    </section>
  );
}