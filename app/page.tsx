"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { SkillsIndex } from "@/components/SkillsIndex";
import { AsciiPlayground } from "@/components/AsciiPlayground";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

export default function Home() {
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Initialize Lenis + GSAP ScrollTrigger animations & parallax
  useScrollAnimations();

  useEffect(() => {
    // Check saved preference
    const savedCrt = localStorage.getItem("zeus_crt_scanlines");
    if (savedCrt !== null) {
      setCrtEnabled(savedCrt === "true");
    }

    // Scroll spy for sections
    const sectionIds = ["hero", "work", "skills", "lab", "about", "contact"];
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleCrt = () => {
    setCrtEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("zeus_crt_scanlines", String(next));
      return next;
    });
  };

  return (
    <main className="relative min-h-screen bg-[#0c0d0e] text-[#edece6]">
      {/* Custom Contextual Cursor */}
      <CustomCursor />

      {/* Retro Noise and CRT Scanline overlays */}
      <div className="noise-overlay fixed inset-0 z-20 pointer-events-none" />
      {crtEnabled && <div className="scanlines fixed inset-0 z-30 pointer-events-none" />}

      {/* Navigation Header */}
      <Navigation
        crtEnabled={crtEnabled}
        onToggleCrt={handleToggleCrt}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <Hero />
      <SelectedWork />
      <SkillsIndex />
      <AsciiPlayground />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
