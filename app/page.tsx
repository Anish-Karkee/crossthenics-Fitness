import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Service";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#111827_0%,#020617_45%,#020617_100%)] text-white">

      <Hero />
      <Services />

    </main>
  );
}
