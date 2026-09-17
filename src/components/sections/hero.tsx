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
      className="relative isolate min-h-[680px] overflow-hidden border-b border-white/[0.06] sm:min-h-[700px] lg:h-[calc(100svh-80px)] lg:min-h-0"
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-600/[0.08] blur-[120px] sm:left-[8%] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
        <div className="absolute right-[-160px] top-[18%] h-[340px] w-[340px] rounded-full bg-violet-600/[0.07] blur-[120px] sm:right-[8%] sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />
        <div className="absolute bottom-[-220px] left-[35%] h-[420px] w-[620px] rounded-full bg-blue-700/[0.06] blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.025),transparent_55%)]" />
      </div>

      <div className="mx-auto grid min-h-[680px] max-w-[1440px] items-center px-5 py-12 sm:min-h-[700px] sm:px-8 sm:py-14 lg:h-full lg:min-h-0 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-2">
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-[780px]">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3 sm:gap-4 lg:mb-5">
            <span
              className="h-[2px] w-8 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 sm:w-9"
              aria-hidden="true"
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 sm:text-xs sm:tracking-[0.24em]">
              Full-Stack Web Developer
            </p>
          </div>

          {/* Main heading */}
          <h1 className="max-w-[780px] text-[clamp(2.85rem,8.5vw,5.75rem)] font-semibold leading-[0.89] tracking-[-0.065em] text-white sm:text-[clamp(3.2rem,7vw,5.75rem)]">
            <span className="block">I Build Modern Websites</span>

            <span className="relative mt-1 block">
              <span aria-hidden="true" className="invisible block">
                That People Remember
              </span>

              <span className="absolute inset-0 block">
                <TypewriterGradient words={heroWords} />
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[600px] text-sm leading-6 text-zinc-400 sm:mt-5 sm:text-base sm:leading-7">
            I build fast, modern websites and web experiences for businesses,
            professionals, and individuals — helping them establish a strong
            digital presence without unnecessary complexity.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row sm:mt-7">
            <Link
              href="#projects"
              className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(99,102,241,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_65px_rgba(99,102,241,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] min-[420px]:w-auto min-[420px]:px-7 sm:h-13"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#about"
              className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.025] px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] min-[420px]:w-auto min-[420px]:px-7 sm:h-13"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15">
                <Play className="ml-0.5 h-3 w-3 fill-current" />
              </span>
              Discover More
            </Link>
          </div>

          {/* Feature row */}
          <div className="mt-6 flex max-w-xl flex-wrap items-center gap-x-5 gap-y-3 text-xs text-zinc-500 sm:mt-7 sm:gap-x-7 sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Zap className="h-4 w-4 shrink-0 text-blue-400" />
              <span>Fast Performance</span>
            </div>

            <span
              className="hidden h-4 w-px bg-white/10 sm:block"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2.5">
              <Check className="h-4 w-4 shrink-0 text-violet-400" />
              <span>SEO Ready</span>
            </div>

            <span
              className="hidden h-4 w-px bg-white/10 sm:block"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2.5">
              <MonitorSmartphone className="h-4 w-4 shrink-0 text-purple-400" />
              <span>Fully Responsive</span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="relative mt-14 h-[300px] w-full sm:mt-16 sm:h-[390px] md:h-[440px] lg:mt-0 lg:h-[540px] xl:h-[590px]"
          aria-hidden="true"
        >
          {/* Main glow */}
          <div className="absolute left-1/2 top-[48%] h-[210px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.11] blur-[85px] sm:h-[300px] sm:w-[470px] sm:blur-[100px]" />

          <div className="absolute right-[0%] top-[42%] h-[190px] w-[250px] rounded-full bg-violet-600/[0.10] blur-[85px] sm:right-[4%] sm:h-[300px] sm:w-[390px] sm:blur-[100px]" />

          {/* Orb */}
          <div className="absolute bottom-[12%] left-[7%] h-12 w-12 rounded-full bg-gradient-to-br from-blue-400/70 via-violet-500/60 to-purple-700/40 shadow-[0_0_55px_rgba(79,70,229,0.6)] sm:bottom-[14%] sm:left-[10%] sm:h-24 sm:w-24" />

          {/* Orbital ring */}
          <div className="absolute bottom-[14%] left-[-1%] h-[140px] w-[140px] rounded-full border border-blue-500/20 sm:bottom-[16%] sm:left-[2%] sm:h-[250px] sm:w-[250px]" />

          <div className="absolute bottom-[7%] left-[-5%] h-px w-[120%] rotate-[-6deg] bg-gradient-to-r from-transparent via-blue-500/50 to-purple-500/50 blur-[1px]" />

          {/* Browser window */}
          <div className="absolute left-[0%] top-[8%] w-[100%] rotate-[-2.5deg] sm:left-[1%] sm:top-[10%] sm:w-[96%] lg:left-[-1%] lg:w-[101%]">
            <div className="relative rounded-[16px] border border-white/[0.18] bg-[#11151d]/95 p-1 shadow-[0_35px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-transform duration-700 hover:rotate-[-1deg] sm:rounded-[20px] sm:p-1.5">
              {/* Browser top frame */}
              <div className="flex h-8 items-center gap-1.5 rounded-t-[11px] border-b border-white/[0.08] bg-[#171b24] px-2.5 sm:h-11 sm:gap-2 sm:rounded-t-[14px] sm:px-4">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20 sm:h-2 sm:w-2" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20 sm:h-2 sm:w-2" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20 sm:h-2 sm:w-2" />
                <div className="mx-auto h-4 w-[42%] rounded-[4px] border border-white/[0.06] bg-white/[0.025] sm:h-5 sm:rounded-md" />
              </div>

              {/* Browser content */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-b-[11px] bg-[#080b12] sm:rounded-b-[14px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(79,70,229,0.30),transparent_30%),linear-gradient(135deg,#080b12,#11182c)]" />

                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:38px_38px]" />

                <div className="relative h-full p-[6%]">
                  {/* Mock nav */}
                  <div className="flex items-center justify-between">
                    <div className="h-1.5 w-16 rounded-full bg-white/70 sm:h-2.5 sm:w-28" />

                    <div className="hidden items-center gap-5 sm:flex">
                      <span className="h-1.5 w-10 rounded-full bg-white/20" />
                      <span className="h-1.5 w-10 rounded-full bg-white/20" />
                      <span className="h-1.5 w-10 rounded-full bg-white/20" />
                      <span className="h-6 w-16 rounded-full border border-white/10 bg-white/[0.04]" />
                    </div>
                  </div>

                  {/* Mock hero */}
                  <div className="grid h-[82%] grid-cols-2 items-center gap-3 sm:gap-4">
                    <div>
                      <div className="mb-2 h-1 w-16 rounded-full bg-violet-400/60 sm:mb-3 sm:h-2 sm:w-28" />

                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="h-3.5 w-[90%] rounded-md bg-white/75 sm:h-8" />
                        <div className="h-3.5 w-[70%] rounded-md bg-gradient-to-r from-blue-400/80 to-violet-400/80 sm:h-8" />
                      </div>

                      <div className="mt-3 space-y-1 sm:mt-4 sm:space-y-1.5">
                        <div className="h-1 w-[85%] rounded-full bg-white/10 sm:h-1.5" />
                        <div className="h-1 w-[65%] rounded-full bg-white/[0.07] sm:h-1.5" />
                      </div>

                      <div className="mt-4 h-6 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 sm:mt-5 sm:h-10 sm:w-32" />
                    </div>

                    {/* Mock visual */}
                    <div className="relative h-full">
                      <div className="absolute right-0 top-[5%] h-[78%] w-[78%] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#20285b] via-[#151a39] to-[#090c16] sm:rounded-2xl">
                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/30 blur-3xl" />

                        <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-tr from-transparent via-violet-500/10 to-violet-500/30" />

                        <div className="absolute bottom-[10%] left-[12%] h-[46%] w-[70%] skew-x-[-8deg] rounded-t-[40%] bg-gradient-to-t from-[#070910] via-[#25294a] to-[#5f6db0]" />

                        <div className="absolute bottom-[8%] left-[18%] h-px w-[62%] bg-white/20" />
                      </div>
                    </div>
                  </div>

                  {/* Mock footer */}
                  <div className="absolute bottom-[5%] left-[6%] right-[6%] flex items-center justify-between border-t border-white/10 pt-2 sm:pt-3">
                    <span className="h-1 w-14 rounded-full bg-white/10 sm:h-1.5 sm:w-20" />
                    <span className="h-1 w-10 rounded-full bg-white/[0.07] sm:h-1.5 sm:w-14" />
                    <span className="h-1 w-12 rounded-full bg-white/[0.05] sm:h-1.5 sm:w-16" />
                  </div>
                </div>
              </div>

              {/* Laptop lower edge */}
              <div className="absolute -bottom-2 left-1/2 h-2 w-[72%] -translate-x-1/2 rounded-b-lg bg-gradient-to-b from-[#303541] to-[#151820] sm:-bottom-3 sm:h-3 sm:rounded-b-xl" />
            </div>
          </div>

          {/* Floating diamond */}
          <div className="absolute bottom-[1%] left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-lg border border-white/15 bg-[#0a0d14]/90 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:bottom-[2%] sm:h-20 sm:w-20 sm:rounded-xl">
            <div className="flex h-6 w-6 rotate-45 items-center justify-center border border-white/20 sm:h-8 sm:w-8">
              <Code2 className="h-3 w-3 -rotate-45 text-white/70 sm:h-4 sm:w-4" />
            </div>
          </div>

          {/* Bottom purple light */}
          <div className="absolute bottom-[6%] right-[-2%] h-1.5 w-[55%] rounded-full bg-gradient-to-r from-transparent via-blue-500/40 to-purple-500/70 blur-md sm:bottom-[7%] sm:h-2" />
        </div>
      </div>
    </section>
  );
}
