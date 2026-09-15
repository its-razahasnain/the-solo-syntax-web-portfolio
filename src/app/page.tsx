import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090a]">
      <Navbar />

      <Hero />

      <Projects />

      <About />

      <Footer />
    </main>
  );
}