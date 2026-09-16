"use client";

import { useEffect, useState } from "react";
import { useSoundEffects } from "../hooks/useSoundEffects";

interface NavProps {
  crtEnabled: boolean;
  onToggleCrt: () => void;
  activeSection: string;
}

const SECTIONS = [
  { id: "hero", label: "00 // INTRO", anchor: "#hero" },
  { id: "work", label: "01 // WORK", anchor: "#work" },
  { id: "skills", label: "02 // INDEX", anchor: "#skills" },
  { id: "lab", label: "03 // ASCII LAB", anchor: "#lab" },
  { id: "about", label: "04 // ABOUT", anchor: "#about" },
  { id: "contact", label: "05 // CONTACT", anchor: "#contact" },
];

export function Navigation({ crtEnabled, onToggleCrt, activeSection }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { soundEnabled, toggleSound, playClick } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const sectionNumber = currentIndex >= 0 ? String(currentIndex).padStart(2, "0") : "00";
  const totalSections = String(SECTIONS.length - 1).padStart(2, "0");

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    playClick();
    setMobileMenuOpen(false);
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(anchor, { offset: -30 });
    } else {
      const elem = document.querySelector(anchor);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0d0e]/92 backdrop-blur-md py-2.5 brutalist-border-b"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center space-x-3">
          <a
            href="#hero"
            onClick={(e) => scrollToAnchor(e, "#hero")}
            className="group flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-[#edece6] hover:text-[#7aa287] transition-colors"
            data-cursor="TOP"
          >
            <span className="text-[#7aa287] group-hover:rotate-90 transition-transform inline-block">■</span>
            <span className="font-bold tracking-tight text-sm">[ ZEUS / PORTFOLIO ]</span>
          </a>

          {/* Active section indicator */}
          <div className="hidden md:flex items-center space-x-2 font-mono text-[11px] text-[#a2a7af] bg-[#141618] px-2.5 py-0.5 border border-[#25282e]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7aa287] animate-pulse" />
            <span>● {sectionNumber} / {totalSections}</span>
          </div>
        </div>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center space-x-7 font-mono text-xs tracking-wider">
          {SECTIONS.slice(1).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.anchor}
                onClick={(e) => scrollToAnchor(e, item.anchor)}
                data-cursor="GO"
                className={`relative py-1 transition-colors uppercase ${
                  isActive
                    ? "text-[#7aa287] font-semibold"
                    : "text-[#a2a7af] hover:text-[#edece6]"
                }`}
              >
                <span>{item.label.split(" // ")[1]}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#7aa287]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Controls & Tools */}
        <div className="flex items-center space-x-2 sm:space-x-3 font-mono text-xs">
          {/* CRT scanline toggle (Desktop) */}
          <button
            type="button"
            onClick={() => {
              playClick();
              onToggleCrt();
            }}
            data-cursor="TOGGLE"
            className={`hidden sm:inline-block px-2 py-1 text-[10px] tracking-wider uppercase border transition-colors ${
              crtEnabled
                ? "border-[#7aa287] text-[#7aa287] bg-[#7aa287]/10"
                : "border-[#25282e] text-[#646872] hover:text-[#edece6]"
            }`}
            title="Toggle CRT Scanlines"
          >
            CRT: {crtEnabled ? "ON" : "OFF"}
          </button>

          {/* Sound FX toggle (Desktop) */}
          <button
            type="button"
            onClick={() => {
              toggleSound();
              playClick();
            }}
            data-cursor="SOUND"
            className={`hidden sm:inline-block px-2 py-1 text-[10px] tracking-wider uppercase border transition-colors ${
              soundEnabled
                ? "border-[#62829a] text-[#62829a] bg-[#62829a]/10"
                : "border-[#25282e] text-[#646872] hover:text-[#edece6]"
            }`}
            title="Toggle Synthesized Audio FX"
          >
            AUDIO: {soundEnabled ? "ON" : "OFF"}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden px-2.5 py-1.5 text-[#edece6] border border-[#25282e] hover:border-[#7aa287] bg-[#141618] active:bg-[#edece6] active:text-[#0c0d0e] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="font-mono text-xs font-bold">{mobileMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d0e]/98 backdrop-blur-xl border-b border-[#25282e] px-4 py-5 font-mono text-sm space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#25282e]">
            <span className="text-[10px] text-[#646872] uppercase tracking-widest">INDEX DIRECTORY</span>
            <span className="text-[10px] text-[#7aa287]">● {sectionNumber} / {totalSections}</span>
          </div>

          <div className="space-y-1">
            {SECTIONS.map((item) => (
              <a
                key={item.id}
                href={item.anchor}
                onClick={(e) => scrollToAnchor(e, item.anchor)}
                className="block py-2.5 px-3 -mx-2 text-[#a2a7af] hover:text-[#7aa287] hover:bg-[#141618] active:bg-[#7aa287] active:text-[#0c0d0e] rounded-sm transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Quick Toggles */}
          <div className="pt-3 border-t border-[#25282e] grid grid-cols-2 gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={() => {
                playClick();
                onToggleCrt();
              }}
              className={`p-2 border text-center text-[10px] uppercase font-bold transition-colors ${
                crtEnabled
                  ? "border-[#7aa287] text-[#7aa287] bg-[#7aa287]/15"
                  : "border-[#25282e] text-[#646872]"
              }`}
            >
              CRT FX: {crtEnabled ? "[ ON ]" : "[ OFF ]"}
            </button>
            <button
              type="button"
              onClick={() => {
                toggleSound();
                playClick();
              }}
              className={`p-2 border text-center text-[10px] uppercase font-bold transition-colors ${
                soundEnabled
                  ? "border-[#62829a] text-[#62829a] bg-[#62829a]/15"
                  : "border-[#25282e] text-[#646872]"
              }`}
            >
              AUDIO: {soundEnabled ? "[ ON ]" : "[ OFF ]"}
            </button>
          </div>
        </div>
      )}

      {/* Global Scroll Progress Indicator */}
      <div
        id="scroll-progress-bar"
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7aa287] origin-left scale-x-0 pointer-events-none"
      />
    </header>
  );
}
