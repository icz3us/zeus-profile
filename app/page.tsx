"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { SkillsIndex } from "@/components/SkillsIndex";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useScrollAnimations();

  useEffect(() => {
    const sectionIds = ["hero", "work", "skills", "about", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 260;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-shell relative min-h-screen">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-20 bg-[#edece6] px-4 py-2 font-mono text-xs font-bold text-[#0c0d0e] transition-transform focus:translate-y-0"
      >
        SKIP TO CONTENT
      </a>
      <CustomCursor />

      <div className="noise-overlay fixed inset-0 z-20 pointer-events-none" />
      <Navigation activeSection={activeSection} />

      <main id="main-content">
        <Hero />
        <SelectedWork />
        <SkillsIndex />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
