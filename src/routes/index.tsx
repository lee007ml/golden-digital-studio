import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leander Menezes — AI Developer & Creative Technologist" },
      {
        name: "description",
        content:
          "Premium portfolio of Leander Menezes — AI Developer, Web Designer & Creative Technologist building luxury digital experiences powered by AI.",
      },
      { property: "og:title", content: "Leander Menezes — AI Developer & Creative Technologist" },
      {
        property: "og:description",
        content: "Premium digital experiences powered by AI, design, and craft.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}
