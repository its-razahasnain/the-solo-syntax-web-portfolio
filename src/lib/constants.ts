export const siteConfig = {
  name: "The Solo Syntax",

  url: "https://the-solo-syntax.vercel.app",

  description:
    "Modern websites built with clean code, thoughtful design and real performance.",

  navigation: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
} as const;

export const projects = [
  {
    name: "Nexora",
    category: "Business Website",
    description:
      "A modern digital experience built for a forward-thinking brand.",
    variant: "nexora",
  },
  {
    name: "Velora",
    category: "SaaS Website",
    description:
      "A clean SaaS experience focused on clarity, conversion and usability.",
    variant: "velora",
  },
  {
    name: "Lume",
    category: "Portfolio Website",
    description:
      "An immersive portfolio experience designed around visual storytelling.",
    variant: "lume",
  },
] as const;

export const capabilities = [
  {
    title: "Modern Web Technologies",
    description: "Next.js, React, TypeScript",
    icon: "code",
  },
  {
    title: "Clean & Maintainable Code",
    description: "Scalable, efficient, future-ready",
    icon: "layers",
  },
  {
    title: "Design to Development",
    description: "From UI/UX to deployment",
    icon: "pen",
  },
  {
    title: "Client-Focused Approach",
    description: "Your vision, my priority",
    icon: "users",
  },
] as const;