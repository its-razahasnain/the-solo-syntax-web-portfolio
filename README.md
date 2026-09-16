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

| Page | Route |
| --- | --- |
| Home | `/` |
| Projects | `/projects` |
| Tavern | `/projects/tavern` |
| Nexora | `/projects/nexora` |
| Velora | `/projects/velora` |
| Lume | `/projects/lume` |
| About | `/about` |
| Skills | `/skills` |
| Contact | `/contact` |

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

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 20+
- pnpm

### Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd the-solo-syntax
```

### Install dependencies

```bash
pnpm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

> **Important:** The API key is used by the contact form backend to send project inquiries. Never commit `.env.local` or any API keys to GitHub.

### Run the development server

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

### Development
```bash
pnpm dev
```
Starts the local development server.

### Lint
```bash
pnpm lint
```
Runs ESLint checks.

### Production Build
```bash
pnpm build
```
Creates a production build of the application.

### Production Server
```bash
pnpm start
```
Starts the production server after a successful build.

## Contact Form

The contact form uses a Next.js Route Handler located at `/api/contact`. The backend performs server-side validation before sending an email through Resend.

The implementation includes:
- Name validation
- Email validation
- Project type validation
- Budget length validation
- Message length validation
- Honeypot spam protection
- HTML escaping
- Error handling

The Resend API key is stored server-side through an environment variable and is not exposed to the browser.

## SEO

The project includes a production SEO foundation with:
- Page metadata
- Sitemap
- Robots.txt
- Canonical site configuration
- Search Engine friendly routes
- Google Search Console verification support

The generated sitemap is available at `https://thesolosyntax.vercel.app/sitemap.xml` and the robots.txt file is available at `https://thesolosyntax.vercel.app/robots.txt`.

## Deployment

The website is deployed using Vercel. 

- **Production URL:** [https://thesolosyntax.vercel.app](https://thesolosyntax.vercel.app)

A production deployment can be triggered automatically through the connected Git repository.

## Design

The visual direction of The Solo Syntax follows a minimal, premium dark aesthetic built around:
- Near-black backgrounds
- White and muted-gray typography
- Blue-to-purple gradients
- Subtle borders
- Rounded surfaces
- Ambient lighting
- Spacious layouts
- Minimal micro-interactions

The interface is designed to remain visually consistent across desktop, tablet, and mobile devices.

## Accessibility

The project includes accessibility-focused implementation such as:
- Semantic HTML
- Keyboard-focus states
- Accessible interactive controls
- Descriptive navigation
- Responsive layouts
- Reduced-motion considerations

## Security

The application includes basic production security measures including:
- Server-side input validation
- HTML escaping
- Honeypot spam protection
- Secure response headers
- Restricted browser permissions
- Referrer policy
- MIME type protection
- Frame embedding restrictions

## License

This project is a personal portfolio website. The source code and visual design are not intended to be redistributed as a template or commercial product without permission.

***

*Built with code, curiosity, and a lot of syntax.*

**The Solo Syntax**

