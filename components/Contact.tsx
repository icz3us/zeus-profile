"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow, SectionLabel } from "./Editorial";

const links = [
  { name: "GITHUB", href: "https://github.com/icz3us" },
  { name: "LINKEDIN", href: "https://www.linkedin.com/in/icon-zeus-gonzales-4b1729330/" },
  { name: "INSTAGRAM", href: "https://www.instagram.com/004_zeus/" },
];

export function Contact() {
  const [status, setStatus] = useState("COPY EMAIL");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  async function copyEmail() {
    try { await navigator.clipboard.writeText("iconzeus@gmail.com"); setStatus("COPIED!"); }
    catch { setStatus("COPY FAILED — USE EMAIL LINK"); }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("COPY EMAIL"), 3000);
  }
  return <section id="contact" className="folio-section contact-section">
    <SectionLabel number="04">CONTACT</SectionLabel>
    <div className="contact-top"><p>Have a project or role in mind?<br />I’d love to hear from you.</p></div>
    <a className="contact-title" href="mailto:iconzeus@gmail.com"><h2>LET’S <span>CONNECT.</span></h2><Arrow /></a>
    <div className="contact-bottom"><div className="email-line"><a href="mailto:iconzeus@gmail.com">iconzeus@gmail.com</a><button onClick={copyEmail} type="button" aria-live="polite">{status}</button></div><div className="social-links">{links.map(link => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">{link.name}<Arrow /></a>)}</div></div>
  </section>;
}
