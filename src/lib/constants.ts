export const siteConfig = {
  name: "The Solo Syntax",

  url: "https://the-solo-syntax.vercel.app",

  description:
    "Modern websites built with clean code, thoughtful design and real performance.",

  contact: {
    email: "hello@the-solo-syntax.dev",
  },

  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      label: "X",
      href: "https://x.com",
    },
  ],

  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const capabilities = [
  {
    title: "Frontend Development",
    description:
      "Responsive, accessible and polished interfaces built with modern frontend technologies.",
    icon: "code",
  },
  {
    title: "Backend Development",
    description:
      "Reliable APIs, server-side functionality and scalable application architecture.",
    icon: "layers",
  },
  {
    title: "UI / UX",
    description:
      "Thoughtful interfaces focused on clarity, usability and meaningful user experiences.",
    icon: "pen",
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end digital experiences connecting strong frontend interfaces with dependable backend systems.",
    icon: "users",
  },
] as const;

export const projects = [
  {
    name: "Tavern",
    category: "Full-Stack Web Application",
    description:
      "A full-stack digital experience built with a focus on modern interfaces, reliable functionality and a polished user experience.",
    variant: "tavern",
    href: "/projects/tavern",
    liveUrl: "https://tavern-virid.vercel.app/",
  },
  {
    name: "Nexora",
    category: "Business Website",
    description:
      "A modern digital experience built for a forward-thinking brand.",
    variant: "nexora",
    href: "/projects/nexora",
  },
  {
    name: "Velora",
    category: "SaaS Website",
    description:
      "A clean SaaS experience focused on clarity, conversion and usability.",
    variant: "velora",
    href: "/projects/velora",
  },
  {
    name: "Lume",
    category: "Portfolio Website",
    description:
      "An immersive portfolio experience designed around visual storytelling.",
    variant: "lume",
    href: "/projects/lume",
  },
] as const;