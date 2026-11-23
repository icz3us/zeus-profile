"use client";

import { useEffect, useRef, useState } from "react";

const sections = [{ id: "work", label: "Work" }, { id: "skills", label: "Skills" }, { id: "about", label: "About" }, { id: "contact", label: "Contact" }];

export function Navigation({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); } };
    window.addEventListener("keydown", escape); return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return <header className="folio-nav">
    <a className="wordmark" href="#hero" aria-label="Zeus, back to intro">zeus<span className="wordmark-star" aria-hidden="true">*</span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{sections.map(section => <a key={section.id} href={`#${section.id}`} aria-current={activeSection === section.id ? "location" : undefined}>{section.label}<span aria-hidden="true">↗</span></a>)}</nav>
    <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "CLOSE −" : "MENU +"}</button>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{sections.map((section, i) => <a key={section.id} href={`#${section.id}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{section.label}<span>↗</span></a>)}</nav>}
    <div id="scroll-progress-bar" />
  </header>;
}
