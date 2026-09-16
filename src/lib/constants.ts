export const siteConfig = {
  name: "The Solo Syntax",

  person: {
    name: "Hasnain Raza",
    title: "Full-Stack Web Developer",
    location: "Pakistan",
  },

  url: "https://thesolosyntax.vercel.app",

  description:
    "The Solo Syntax is the portfolio of Hasnain Raza, a full-stack web developer building modern, responsive and performance-focused websites and web applications.",

  contact: {
    email: "thesolosyntax@gmail.com",
    responseTime: "Usually within 24 hours",
  },

  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/its-razahasnain",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hasnainraza-pk/",
    },
    {
      label: "X",
      href: "https://x.com/thesolosyntax",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/thesolosyntax/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@TheSoloSyntax",
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
      "Responsive, polished interfaces built with modern frontend technologies and a strong focus on usability and performance.",
    icon: "code",
  },
  {
    title: "Backend Development",
    description:
      "Reliable server-side functionality and APIs built around the actual requirements of each project.",
    icon: "layers",
  },
  {
    title: "UI / UX",
    description:
      "Thoughtful interfaces focused on clarity, usability and creating a straightforward experience for users.",
    icon: "pen",
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web experiences connecting strong frontend interfaces with dependable backend functionality.",
    icon: "users",
  },
] as const;

export const projects = [
  {
    name: "Tavern",
    category: "Full-Stack Web Application",
    description:
      "A full-stack restaurant website concept built to show how menus, reservations and a stronger digital presence can work together.",
    variant: "tavern",
    href: "/projects/tavern",
    liveUrl: "https://tavern-virid.vercel.app/",
    status: "live",
  },
  {
    name: "Nexora",
    category: "Business Website",
    description:
      "A business website concept focused on creating a clear, professional and modern digital presence.",
    variant: "nexora",
    href: "/projects/nexora",
    status: "concept",
  },
  {
    name: "Velora",
    category: "SaaS Website",
    description:
      "A SaaS website concept designed around clarity, usability and a focused product experience.",
    variant: "velora",
    href: "/projects/velora",
    status: "concept",
  },
  {
    name: "Lume",
    category: "Portfolio Website",
    description:
      "A portfolio website concept built around visual storytelling and a focused digital presentation.",
    variant: "lume",
    href: "/projects/lume",
    status: "concept",
  },
] as const;