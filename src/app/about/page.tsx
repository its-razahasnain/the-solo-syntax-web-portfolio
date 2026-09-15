import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { AboutPage } from "@/components/sections/about-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about The Solo Syntax and the approach behind building modern, performant digital experiences.",
};

export default function AboutPageRoute() {
  return (
    <>
      <Navbar />

      <main>
        <AboutPage />
      </main>

      <Footer />
    </>
  );
}