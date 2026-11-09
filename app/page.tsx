import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CaseStudy from "@/components/CaseStudy";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper dark:bg-night-bg">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <CaseStudy />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
