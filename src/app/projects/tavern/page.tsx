import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { TavernCaseStudy } from "@/components/sections/tavern-case-study";

export const metadata: Metadata = {
  title: "Tavern",
  description:
    "Tavern — a concept restaurant website created by The Solo Syntax, combining atmosphere, storytelling, menu discovery and table booking.",
  openGraph: {
    title: "Tavern — The Solo Syntax",
    description:
      "A concept restaurant website created by The Solo Syntax.",
    type: "website",
  },
};

export default function TavernProjectPage() {
  return (
    <>
      <Navbar />

      <main>
        <TavernCaseStudy />
      </main>

      <Footer />
    </>
  );
}