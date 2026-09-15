import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
  icon: "/logo-mark.png",
  shortcut: "/logo-mark.png",
  apple: "/logo-mark.png",
},

  title: {
    default: "The Solo Syntax — Full-Stack Web Developer",
    template: "%s | The Solo Syntax",
  },

  description:
    "The Solo Syntax — a full-stack web developer portfolio focused on modern websites, clean code, thoughtful design and real performance.",

  keywords: [
    "The Solo Syntax",
    "full-stack web developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "modern websites",
    "web development",
  ],

  authors: [
    {
      name: "The Solo Syntax",
    },
  ],

  creator: "The Solo Syntax",
  publisher: "The Solo Syntax",

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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "The Solo Syntax",
    title: "The Solo Syntax — Full-Stack Web Developer",
    description:
      "Modern websites built with clean code, thoughtful design and real performance.",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Solo Syntax — Full-Stack Web Developer",
    description:
      "Modern websites built with clean code, thoughtful design and real performance.",
  },

  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}