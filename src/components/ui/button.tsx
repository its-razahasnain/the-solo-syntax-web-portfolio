import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "outline",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50";

  const variants = {
    primary:
      "border-white bg-white text-black hover:bg-white/90",
    outline:
      "border-white/30 bg-white/[0.02] text-white hover:border-white/60 hover:bg-white/[0.06]",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}