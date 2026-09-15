import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <div className="page-glow" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
