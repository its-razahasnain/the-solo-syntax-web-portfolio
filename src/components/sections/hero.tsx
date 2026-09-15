import { ArrowRight, ShieldCheck, Smartphone, Zap } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

function WorkspaceVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[58%] overflow-hidden lg:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(110,120,130,0.12),transparent_48%)]" />

      <div className="absolute right-[5%] top-[19%] h-[330px] w-[470px] -rotate-[1deg] rounded-[14px] border border-white/10 bg-gradient-to-br from-white/[0.14] via-white/[0.05] to-black/40 shadow-[0_40px_100px_rgba(0,0,0,0.75)]">
        <div className="absolute inset-[7px] overflow-hidden rounded-[9px] bg-gradient-to-br from-[#202427] via-[#101315] to-[#080909]">
          <div className="absolute inset-x-[12%] top-[13%] h-px bg-white/10" />

          <div className="absolute left-[18%] top-[24%] h-3 w-32 rounded-full bg-white/[0.08]" />

          <div className="absolute left-[18%] top-[33%] h-2 w-48 rounded-full bg-white/[0.05]" />

          <div className="absolute left-[18%] top-[41%] h-2 w-36 rounded-full bg-white/[0.05]" />

          <div className="absolute bottom-[14%] left-[18%] h-10 w-28 rounded-full border border-white/10 bg-white/[0.04]" />
        </div>

        <div className="absolute left-1/2 top-full h-20 w-[88%] -translate-x-1/2 bg-gradient-to-b from-white/[0.08] to-transparent blur-md" />
      </div>

      <div className="absolute right-[38%] top-[69%] h-[82px] w-[66px] rounded-[8px] border border-white/10 bg-gradient-to-b from-white/[0.13] to-black/60 shadow-xl">
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/20" />
      </div>

      <div className="absolute bottom-[7%] right-[2%] h-[2px] w-[92%] rotate-[-5deg] bg-gradient-to-r from-transparent via-white/15 to-transparent blur-[1px]" />

      <div className="absolute right-[11%] top-[21%] rotate-[-5deg] text-right font-mono text-[13px] leading-[1.6] text-white/45">
        Ideas
        <br />
        +
        <br />
        Websites
        <br />
        +
        <br />
        Reality
      </div>

      <div className="absolute right-[2%] top-[33%] h-[230px] w-[100px] opacity-30">
        <div className="absolute bottom-0 left-1/2 h-[170px] w-[34px] -translate-x-1/2 rounded-full bg-gradient-to-t from-black via-white/[0.05] to-transparent blur-sm" />

        <div className="absolute left-[8px] top-[28px] h-[120px] w-[60px] rotate-[18deg] rounded-[50%] border border-white/10" />

        <div className="absolute right-[8px] top-[4px] h-[150px] w-[45px] rotate-[-25deg] rounded-[50%] border border-white/10" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[620px] overflow-hidden border-b border-white/[0.08] lg:min-h-[650px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.035),transparent_42%)]" />

      <div className="absolute inset-y-0 right-0 w-[65%] bg-gradient-to-l from-white/[0.025] to-transparent" />

      <WorkspaceVisual />

      <Container className="relative z-10 flex min-h-[620px] items-center pt-[76px] lg:min-h-[650px]">
        <div className="max-w-[610px] pb-10 lg:pb-0">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75">
            Hi, I&apos;m The Solo Syntax
          </p>

          <h1 className="max-w-[590px] text-[43px] font-medium leading-[1.08] tracking-[-0.035em] text-white sm:text-[52px] lg:text-[58px]">
            I Build Modern Websites
            <br />
            That{" "}
            <span className="bg-gradient-to-r from-[#78a7ff] via-[#a68cff] to-[#d28cff] bg-clip-text text-transparent">
              Make an Impact
            </span>
          </h1>

          <p className="mt-6 max-w-[500px] text-[14px] leading-[1.7] text-white/55">
            I design and develop high-performance websites for businesses,
            brands and individuals. Clean code. Modern design. Real results.
          </p>

          <div className="mt-7">
            <Button
              href="#projects"
              variant="outline"
              className="px-6 py-3.5"
            >
              <span>View My Work</span>
              <ArrowRight size={16} strokeWidth={1.7} />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
            <div className="flex items-center gap-2 text-[11px] text-white/55">
              <Zap size={15} strokeWidth={1.5} />
              <span>Fast Performance</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-white/55">
              <ShieldCheck size={15} strokeWidth={1.5} />
              <span>SEO Optimized</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-white/55">
              <Smartphone size={15} strokeWidth={1.5} />
              <span>Fully Responsive</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}