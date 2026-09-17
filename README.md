# The Solo Syntax

> Modern websites built with clean code, thoughtful design, and real
> performance.

**The Solo Syntax** is the personal portfolio of **Hasnain Raza**, a
Full-Stack Web Developer from Pakistan. It showcases modern web
development, selected projects, technical capabilities, and the approach
behind building polished digital experiences for businesses,
professionals, startups, and individuals.

---

## 🌐 Live Website

**<https://thesolosyntax.vercel.app/>**

## 💻 GitHub Repository

**<https://github.com/its-razahasnain/the-solo-syntax-web-portfolio>**

---

## 👨‍💻 About

The Solo Syntax is built around a simple idea:

> Build modern digital experiences that help people and businesses
> establish a stronger presence online.

The portfolio focuses on:

- Clean and maintainable code
- Modern user interfaces
- Responsive design
- Performance
- Accessibility
- Thoughtful interactions
- Full-stack web development
- Practical technology choices based on project requirements

The website is designed as a premium, minimal portfolio experience with
a strong editorial feel and a consistent visual system across desktop,
tablet, and mobile.

---

## ✨ Features

- Fully responsive desktop, tablet, and mobile layouts
- Premium dark visual system
- Blue-to-purple gradient accents
- Responsive navigation
- Mobile navigation menu
- Animated hero typewriter effect
- Project showcase
- Dedicated Tavern case study
- Concept / coming-soon project previews
- About and capabilities sections
- Skills and technology overview
- Production contact form
- Server-side input validation
- Honeypot protection for basic spam prevention
- HTML escaping for submitted content
- Production error handling
- SEO metadata
- Canonical URL configuration
- XML sitemap generation
- Robots.txt generation
- JSON-LD structured data
- Open Graph metadata
- Twitter/X metadata
- Custom favicon
- Security response headers
- Vercel deployment
- GitHub-based development workflow

---

## 📄 Pages

| Page     | Route              |
| -------- | ------------------ |
| Home     | `/`                |
| Projects | `/projects`        |
| Tavern   | `/projects/tavern` |
| About    | `/about`           |
| Skills   | `/skills`          |
| Contact  | `/contact`         |

### Concept Projects

The Projects page also presents the following future project concepts:

- **Nexora** — Business Website concept
- **Velora** — SaaS Website concept
- **Lume** — Portfolio Website concept

These are presented as **concept / coming-soon work** and should not be
interpreted as completed client projects or currently available live
case-study routes.

---

## 🍽️ Featured Project — Tavern

### Tavern

**Tavern** is a conceptual restaurant website created as a professional
portfolio project by Hasnain Raza.

The project demonstrates how a restaurant can build a stronger digital
presence through a modern web experience focused on:

- Restaurant storytelling
- Menu discovery
- Digital presence
- Table booking flows
- Responsive design
- Modern UI
- Performance-conscious implementation
- Full-stack functionality

### Tavern Links

- **Live Website:** <https://tavernrestaurant.vercel.app/>
- **GitHub Repository:** <https://github.com/its-razahasnain/tavern>

> Tavern is an independently created portfolio concept and is not
> presented as a real client restaurant.

---

## 🛠️ Tech Stack

### Core

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Development

- [pnpm](https://pnpm.io/)
- [ESLint](https://eslint.org/)
- React Compiler
- Next.js App Router
- Git
- GitHub

### Backend / Services

- Next.js Route Handlers
- [Resend](https://resend.com/)

### Deployment

- [Vercel](https://vercel.com/)

---

## 🧱 Project Structure

```text
the-solo-syntax-web-portfolio/
├── public/
│   ├── favicon.ico
│   ├── logo-mark.webp
│   └── projects/
│       └── tavern/
│           └── tavern-hero.webp
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/
│   │   │   └── contact/
│   │   ├── contact/
│   │   ├── projects/
│   │   │   └── tavern/
│   │   ├── skills/
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   └── ui/
│   │
│   └── lib/
│       └── constants.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- Git

### Clone the Repository

```bash
git clone https://github.com/its-razahasnain/the-solo-syntax-web-portfolio.git
cd the-solo-syntax-web-portfolio
```

### Install Dependencies

```bash
pnpm install
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

The API key is used by the contact form backend to send project
inquiries through Resend.

### Important

Never commit:

```text
.env.local
.env
API keys
private credentials
```

The API key must remain server-side and must never be exposed to the
browser or committed to GitHub.

---

## ▶️ Run the Development Server

```bash
pnpm dev
```

Then open:

```text
http://localhost:3000
```

---

## 🧪 Available Commands

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

Creates an optimized production build.

### Production Server

```bash
pnpm start
```

Starts the production server after a successful production build.

---

## 📬 Contact Form

The contact form uses a Next.js Route Handler located at:

```text
/api/contact
```

The backend validates incoming project inquiries before sending an email
through Resend.

### Validation & Protection

The implementation includes:

- Name validation
- Email validation
- Project type validation
- Budget input validation
- Message length validation
- Server-side validation
- Honeypot spam protection
- HTML escaping
- Production error handling
- Server-side API key usage

The Resend API key is stored through an environment variable and is not
exposed to the browser.

---

## 🔎 SEO

The project includes a production-oriented SEO foundation with:

- Page metadata
- Site-wide metadata
- Canonical URL configuration
- Open Graph metadata
- Twitter/X metadata
- JSON-LD structured data
- Sitemap generation
- Robots.txt generation
- Search-engine-friendly routes
- Google Search Console support
- Custom favicon

### SEO URLs

- **Sitemap:** <https://thesolosyntax.vercel.app/sitemap.xml>
- **Robots.txt:** <https://thesolosyntax.vercel.app/robots.txt>

### Google Search Console

The production website can be monitored through [Google Search
Console](https://search.google.com/search-console).

Search Console can be used to monitor:

- Indexing
- Search performance
- Search queries
- Impressions
- Clicks
- CTR
- Average position
- Page indexing issues
- Core Web Vitals
- Security issues
- Manual actions

---

## ⚡ Performance

Performance is treated as a core part of the development process.

The project focuses on:

- Modern Next.js architecture
- Responsive layouts
- Optimized asset usage
- Minimal unnecessary client-side work
- Clean component structure
- Performance-conscious interactions
- Semantic HTML
- Efficient rendering
- Responsive image handling where appropriate

---

## ♿ Accessibility

The project includes accessibility-focused implementation such as:

- Semantic HTML
- Keyboard-friendly interactive controls
- Accessible navigation
- Descriptive labels
- Appropriate image alt text
- Visible focus states where needed
- Responsive layouts
- Reduced-motion considerations

---

## 🛡️ Security

The application includes production-oriented security measures
including:

- Server-side input validation
- HTML escaping
- Honeypot spam protection
- Server-side environment variables
- Security response headers
- Restricted browser permissions
- Referrer policy
- MIME type protection
- Frame embedding restrictions
- Production error handling

---

## 🚢 Deployment

The website is deployed using [Vercel](https://vercel.com/).

### Production URL

**<https://thesolosyntax.vercel.app/>**

The GitHub repository is connected to the deployment workflow so pushes
to the production branch can trigger a new deployment.

### Deployment Workflow

```text
Local development
       ↓
pnpm lint
       ↓
pnpm build
       ↓
git status
       ↓
git add .
       ↓
git commit
       ↓
git push origin main
       ↓
Vercel deployment
       ↓
Production verification
```

---

## 🔄 Development Workflow

The project follows a structured development workflow:

1.  Develop or modify a feature locally.
2.  Test the implementation.
3.  Check responsive behavior.
4.  Verify routes and links.
5.  Run ESLint.
6.  Run the production build.
7.  Review the final changes.
8.  Commit the completed work.
9.  Push to GitHub.
10. Verify the Vercel deployment.

Example:

```bash
pnpm lint
pnpm build

git status
git add .
git commit -m "feat: describe the change"
git push origin main
```

---

## 🎨 Design Direction

The Solo Syntax follows a minimal, premium dark aesthetic built around:

- Near-black and dark navy backgrounds
- White and muted-gray typography
- Blue-to-purple gradients
- Subtle borders
- Rounded surfaces
- Ambient lighting
- Spacious layouts
- Editorial composition
- Minimal micro-interactions
- Clear visual hierarchy

The visual system is designed to remain consistent across desktop,
tablet, and mobile devices.

---

## 👤 About the Developer

**Hasnain Raza** is a Full-Stack Web Developer from Pakistan.

He started learning web development in **2022** through online courses
and YouTube-based learning and has since worked on websites and web
applications for businesses, professionals, and individuals.

His development approach focuses on building useful digital experiences
with strong frontend implementation, dependable backend functionality,
good performance, and clean maintainable code.

### Development Focus

- Frontend development
- Backend development
- Full-stack web applications
- Responsive websites
- Performance
- User experience
- Clean and maintainable code
- Technology selection based on project requirements

---

## 💼 Work

The Solo Syntax is built around custom web development for:

- Businesses
- Professionals
- Startups
- Individuals
- Digital brands
- Custom web application projects

The technology and architecture can be selected according to the actual
requirements of each project rather than forcing every project into the
same stack.

---

## 📱 Social Links

- **GitHub:** <https://github.com/its-razahasnain>
- **LinkedIn:** <https://www.linkedin.com/in/hasnainraza-pk/>
- **X:** <https://x.com/thesolosyntax>
- **Instagram:** <https://www.instagram.com/thesolosyntax/>
- **YouTube:**
  [https://www.youtube.com/@TheSoloSyntax](https://www.youtube.com/@TheSoloSyntax)
- **Email:** <thesolosyntax@gmail.com>

---

## 🔗 Important Links

| Resource          | Link                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| Live Portfolio    | [thesolosyntax.vercel.app](https://thesolosyntax.vercel.app/)                                     |
| GitHub Repository | [the-solo-syntax-web-portfolio](https://github.com/its-razahasnain/the-solo-syntax-web-portfolio) |
| Tavern Live       | [tavernrestaurant.vercel.app](https://tavernrestaurant.vercel.app/)                               |
| Tavern GitHub     | [its-razahasnain/tavern](https://github.com/its-razahasnain/tavern)                               |
| GitHub Profile    | [its-razahasnain](https://github.com/its-razahasnain)                                             |
| LinkedIn          | [Hasnain Raza](https://www.linkedin.com/in/hasnainraza-pk/)                                       |
| X                 | [@thesolosyntax](https://x.com/thesolosyntax)                                                     |
| Instagram         | [@thesolosyntax](https://www.instagram.com/thesolosyntax/)                                        |
| YouTube           | [The Solo Syntax](https://www.youtube.com/@TheSoloSyntax)                                         |
| Email             | <thesolosyntax@gmail.com>                                                                         |
| Sitemap           | [sitemap.xml](https://thesolosyntax.vercel.app/sitemap.xml)                                       |
| Robots            | [robots.txt](https://thesolosyntax.vercel.app/robots.txt)                                         |

---

## 📜 License

This project is a personal portfolio website created by **Hasnain
Raza**.

The source code is publicly available for reference and learning. The
branding, personal identity, portfolio content, project presentation,
visual identity, and original assets belong to **The Solo Syntax /
Hasnain Raza**.

The project is not intended to be redistributed as a commercial template
or presented as another person’s portfolio without permission.

---

## ⭐ Support

If you find the project interesting, you can visit the repository and
leave a star:

**[⭐ Star The Solo Syntax on
GitHub](https://github.com/its-razahasnain/the-solo-syntax-web-portfolio)**

---

<p align="center">
<strong>Built with code, curiosity, and a lot of syntax.</strong>
</p>
<p align="center">
<strong>The Solo Syntax</strong> · Modern websites built thoughtfully.
</p>
