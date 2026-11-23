"use client";

import { useEffect, useState } from "react";
import { OrganicAscii } from "./OrganicAscii";
import { Arrow } from "./Editorial";
import { useScrambleText } from "@/hooks/useScrambleText";

export function Hero() {
  const [time, setTime] = useState("MANILA / UTC+8");
  const { displayText, scramble } = useScrambleText("ZEUS", 40);
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Manila", hour12: false }) + " PHT");
    update(); const timer = setInterval(update, 1000); return () => clearInterval(timer);
  }, []);
  return <section id="hero" className="folio-hero">
    <div className="hero-meta"><span>PORTFOLIO / 2026</span><span>MANILA, PHILIPPINES <span className="local-time">/ {time}</span></span></div>
    <div className="hero-composition">
      <div className="hero-type">
        <div className="hero-name-line"><h1 onMouseEnter={scramble} aria-label="Zeus">{displayText}</h1></div>
        <div className="hero-role">WEB DEVELOPER<br /><span>& DESIGNER.</span></div>
        <p className="hero-description">I design and build easy-to-use websites that turn everyday tasks into simpler experiences.</p>
        <div className="hero-bottom">
          <span className="availability"><i /> AVAILABLE FOR PROJECTS</span>
          <a className="text-link" href="#work">EXPLORE THE WORK <Arrow /></a>
        </div>
      </div>
      <OrganicAscii />
    </div>
  </section>;
}
