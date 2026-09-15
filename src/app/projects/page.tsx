import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { ProjectsPage } from "@/components/sections/projects-page";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected projects by The Solo Syntax — modern websites and digital products built with thoughtful design and clean engineering.",
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