import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { ProjectsPage } from "@/components/sections/projects-page";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected web projects by Hasnain Raza, including Tavern and upcoming concepts by The Solo Syntax.",
};

export default function ProjectsRoute() {
  return (
    <>
      <Navbar />

      <main>
        <ProjectsPage />
      </main>

      <Footer />
    </>
  );
}
