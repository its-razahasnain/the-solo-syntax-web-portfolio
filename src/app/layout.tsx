import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/lib/constants";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Hasnain Raza - Full-Stack Web Developer",
    template: "%s | The Solo Syntax",
  },

  description: siteConfig.description,

  keywords: [
    "Hasnain Raza",
    "The Solo Syntax",
    "full-stack web developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "freelance web developer",
    "modern websites",
    "responsive websites",
    "web applications",
  ],

  authors: [
    {
      name: siteConfig.person.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.person.name,
  publisher: siteConfig.name,

  applicationName: siteConfig.name,

  category: "technology",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Hasnain Raza - Full-Stack Web Developer",
    description: siteConfig.description,
  },

  twitter: {
    card: "summary",
    title: "Hasnain Raza - Full-Stack Web Developer",
    description: siteConfig.description,
    creator: "@thesolosyntax",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.person.name,
      jobTitle: siteConfig.person.title,
      url: siteConfig.url,
      image: `${siteConfig.url}/logo-mark.webp`,
      sameAs: siteConfig.socialLinks.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body
        className={`${geist.variable} ${geistMono.variable} bg-[#050608] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}