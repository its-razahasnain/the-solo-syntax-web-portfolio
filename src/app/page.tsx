import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090a]">
      <Navbar />

      <Hero />
    </main>
  );
}