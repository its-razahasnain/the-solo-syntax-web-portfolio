import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Solo Syntax — Modern Websites",
    template: "%s — The Solo Syntax",
  },
  description:
    "The Solo Syntax creates modern, high-performance websites for businesses, brands and individuals.",
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