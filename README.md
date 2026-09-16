# The Solo Syntax

> Modern websites built with clean code, thoughtful design and real performance.

The Solo Syntax is a modern personal portfolio website showcasing full-stack web development, selected projects, technical capabilities, and the approach behind building polished digital experiences.

## Live Website

**https://thesolosyntax.vercel.app**

## About

The Solo Syntax is designed as a premium, minimal portfolio experience with a strong focus on:

- Clean and maintainable code
- Modern user interfaces
- Responsive design
- Performance
- Accessibility
- Thoughtful interactions
- Full-stack web development

The website includes dedicated pages for projects, about, skills, and contact, along with detailed project case studies.

## Features

- Responsive design across desktop, tablet, and mobile
- Modern dark visual system
- Blue-to-purple gradient accents
- Interactive navigation
- Mobile navigation menu
- Animated hero typewriter effect
- Project showcase
- Dedicated project case studies
- About and capabilities sections
- Skills and technology overview
- Production contact form
- Contact form validation
- Honeypot protection for basic spam prevention
- Server-side input validation
- HTML escaping for submitted content
- Production error handling
- SEO metadata
- Sitemap generation
- Robots.txt
- Google Search Console support
- Custom favicon
- Security response headers

## Pages

| Page     | Route              |
| -------- | ------------------ |
| Home     | `/`                |
| Projects | `/projects`        |
| Tavern   | `/projects/tavern` |
| Nexora   | `/projects/nexora` |
| Velora   | `/projects/velora` |
| Lume     | `/projects/lume`   |
| About    | `/about`           |
| Skills   | `/skills`          |
| Contact  | `/contact`         |

## Featured Project

### Tavern

Tavern is a full-stack web application showcased as the primary project case study on The Solo Syntax.

The case study presents:

- Project concept
- Product experience
- Interface design
- Key implementation areas
- Technology stack
- Project visuals
- Live project link

## Tech Stack

### Core

- Next.js
- React
- TypeScript
- Tailwind CSS

### Development

- pnpm
- ESLint
- React Compiler
- Next.js App Router

### Backend / Services

- Next.js Route Handlers
- Resend

### Deployment

- Vercel

## Project Structure

```text
the-solo-syntax/
├── public/
│   ├── favicon.ico
│   ├── logo-mark.png
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/
│   │   │   └── contact/
│   │   ├── contact/
│   │   ├── projects/
│   │   │   └── ...
│   │   ├── skills/
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   └── ui/
│   │
│   └── lib/
│       └── ...
│
├── .gitignore
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
