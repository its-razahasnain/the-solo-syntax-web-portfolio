import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  category: string;
  variant: "nexora" | "velora" | "lume";
}

function NexoraVisual() {
  return (
    <div className="relative h-full overflow-hidden bg-[#0b0d12]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_60%,rgba(78,104,255,0.32),transparent_35%)]" />

      <div className="absolute right-[-30px] top-[15%] h-[180px] w-[180px] rounded-full border border-blue-300/20 bg-blue-400/[0.08] blur-[1px]" />

      <div className="absolute left-[11%] top-[16%]">
        <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/60">
          Nexora
        </p>

        <p className="mt-5 max-w-[150px] text-[19px] font-medium leading-[1.05] tracking-[-0.03em] text-white">
          Build Your
          <br />
          Dream Brand
          <br />
          Online
        </p>

        <div className="mt-4 h-5 w-16 rounded-full bg-white" />
      </div>

      <div className="absolute bottom-0 right-[8%] h-[100px] w-[150px] rounded-t-[7px] border border-white/10 bg-white/[0.06] shadow-2xl">
        <div className="absolute inset-[8px] rounded border border-white/10 bg-black/30" />

        <div className="absolute left-[17px] top-[19px] h-1.5 w-16 rounded-full bg-white/10" />
        <div className="absolute left-[17px] top-[32px] h-1.5 w-24 rounded-full bg-white/[0.06]" />
        <div className="absolute left-[17px] top-[45px] h-8 w-20 rounded border border-white/10" />
      </div>
    </div>
  );
}

function VeloraVisual() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f0f0ed]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(150,160,145,0.3),transparent_28%)]" />

      <div className="absolute left-[12%] top-[17%]">
        <p className="text-[8px] font-medium text-black/55">Velora</p>

        <p className="mt-5 max-w-[160px] text-[18px] font-medium leading-[1.08] tracking-[-0.03em] text-black/90">
          Smart Solutions
          <br />
          for a Better Tomorrow
        </p>

        <div className="mt-4 h-5 w-12 rounded bg-black" />
      </div>

      <div className="absolute bottom-[-20px] right-[11%] h-[150px] w-[95px]">
        <div className="absolute bottom-0 left-1/2 h-[105px] w-[7px] -translate-x-1/2 bg-black/20" />
        <div className="absolute bottom-[92px] left-1/2 h-[38px] w-[38px] -translate-x-1/2 rounded-full border border-black/15" />
        <div className="absolute bottom-[38px] left-[20px] h-[70px] w-[45px] rotate-[18deg] rounded-[50%] border border-black/10" />
        <div className="absolute bottom-[48px] right-[5px] h-[85px] w-[42px] rotate-[-20deg] rounded-[50%] border border-black/10" />
      </div>

      <div className="absolute bottom-0 left-[17%] h-[55px] w-[100px] rounded-t-[5px] bg-black/10" />
    </div>
  );
}

function LumeVisual() {
  return (
    <div className="relative h-full overflow-hidden bg-[#090a12]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(74,75,255,0.55),transparent_32%)]" />

      <div className="absolute right-[15%] top-[10%] h-[220px] w-[130px] rounded-[50%] bg-gradient-to-l from-fuchsia-500/30 via-blue-500/20 to-transparent blur-xl" />

      <div className="absolute left-[11%] top-[16%]">
        <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/65">
          Lume
        </p>

        <p className="mt-5 max-w-[175px] text-[19px] font-medium leading-[1.05] tracking-[-0.03em] text-white">
          Creative Ideas
          <br />
          Into Digital Reality
        </p>

        <div className="mt-4 h-5 w-14 rounded-full border border-white/30" />
      </div>

      <div className="absolute right-[19%] top-[10%] h-[220px] w-[110px]">
        <div className="absolute left-1/2 top-[20px] h-[130px] w-[80px] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-blue-500/20 to-fuchsia-500/20 blur-lg" />

        <div className="absolute left-[38px] top-[28px] h-[130px] w-[60px] rounded-[50%] border-l border-white/20" />

        <div className="absolute left-[48px] top-[55px] h-[5px] w-[5px] rounded-full bg-white/50" />

        <div className="absolute left-[42px] top-[100px] h-[1px] w-[22px] rotate-[8deg] bg-white/20" />
      </div>
    </div>
  );
}

function ProjectVisual({
  variant,
}: {
  variant: ProjectCardProps["variant"];
}) {
  if (variant === "nexora") {
    return <NexoraVisual />;
  }

  if (variant === "velora") {
    return <VeloraVisual />;
  }

  return <LumeVisual />;
}

export function ProjectCard({
  name,
  category,
  variant,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[9px] border border-white/[0.11] bg-[#0b0e10] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
      <div className="aspect-[1.52/1] overflow-hidden">
        <ProjectVisual variant={variant} />
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-3.5">
        <div>
          <h3 className="text-[13px] font-medium text-white">
            {name}
          </h3>

          <p className="mt-0.5 text-[11px] text-white/45">
            {category}
          </p>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-300 group-hover:border-white/40 group-hover:text-white">
          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
          />
        </div>
      </div>
    </article>
  );
}