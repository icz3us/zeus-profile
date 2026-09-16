"use client";

import { useState } from "react";
import { useSoundEffects } from "../hooks/useSoundEffects";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { playSuccess, playClick, playBlip } = useSoundEffects();
  const email = "iconzeus@gmail.com";

  const handleCopyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 brutalist-border-b bg-[#0c0d0e]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#25282e] font-mono text-xs text-[#646872] mb-8 sm:mb-12">
          <div className="flex items-center space-x-2">
            <span className="text-[#7aa287]">/* 05 */</span>
            <span className="text-[#edece6] font-bold uppercase tracking-wider">DISPATCH &amp; INQUIRY</span>
          </div>
          <div>MANILA, PHILIPPINES</div>
        </div>

        {/* Main Dramatic Split Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Oversized Headline (Cols 1-7) */}
          <div className="w-full lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-display font-extrabold uppercase text-[#edece6] leading-[0.88] tracking-tighter break-words overflow-hidden">
              <span className="contact-kinetic-line block hover:text-[#7aa287] transition-colors">HAVE</span>
              <span className="contact-kinetic-line block hover:text-[#62829a] transition-colors">AN IDEA?</span>
              <span className="block text-[#646872] my-2 sm:my-4">—</span>
              <span className="contact-kinetic-line block hover:text-[#8f80a3] transition-colors">LET&apos;S</span>
              <span className="contact-kinetic-line block hover:text-[#c2584e] transition-colors">MAKE</span>
              <span className="contact-kinetic-line block text-[#7aa287]">SOMETHING.</span>
            </h2>

            <p className="mt-4 sm:mt-8 font-sans text-xs sm:text-sm md:text-base text-[#a2a7af] max-w-md leading-relaxed">
              Available for bespoke web development, full-stack engineering, editorial portfolios, and experimental interactive systems in 2026.
            </p>
          </div>

          {/* Right Direct Links & Direct Dispatch Card (Cols 8-12) */}
          <div className="w-full lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Direct Dispatch Card */}
            <div id="contact-dispatch-card" className="bg-[#141618] border border-[#25282e] p-5 sm:p-6 font-mono text-xs">
              <div className="flex justify-between text-[10px] text-[#646872] pb-3 border-b border-[#25282e] mb-4">
                <span className="text-[#7aa287]">DIRECT DISPATCH</span>
                <span>COMMUNICATION CHANNEL</span>
              </div>

              <div className="space-y-3 py-1 font-sans text-xs text-[#a2a7af] leading-relaxed">
                <p>
                  Available for engineering engagements, architectural consulting, and design engineering projects.
                </p>
                <div className="font-mono text-[10px] text-[#646872] flex items-center space-x-2 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7aa287]" />
                  <span>RESPONSE SLA: WITHIN 24 HOURS</span>
                </div>
              </div>

              {/* Copy Email Button */}
              <div className="mt-5 pt-4 border-t border-[#25282e]">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  className="w-full py-3.5 bg-[#0c0d0e] hover:bg-[#7aa287] active:bg-[#7aa287] text-[#edece6] hover:text-[#0c0d0e] active:text-[#0c0d0e] border border-[#25282e] font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-between px-3 sm:px-4 group min-h-[44px]"
                >
                  <span className="font-bold truncate mr-2">{email}</span>
                  <span className="text-[10px] bg-[#141618] group-hover:bg-[#0c0d0e] group-hover:text-[#edece6] px-2 py-1 border border-[#25282e] shrink-0">
                    {copied ? "[ COPIED! ]" : "[ COPY ]"}
                  </span>
                </button>
              </div>
            </div>

            {/* Editorial Retro Hyperlinks from prompt */}
            <div className="bg-[#141618] border border-[#25282e] p-6">
              <div className="font-mono text-[10px] text-[#646872] uppercase tracking-wider mb-4 pb-2 border-b border-[#25282e]">
                EXTERNAL CHANNELS &amp; REPOSITORIES
              </div>
              <ul className="space-y-4 font-mono text-sm sm:text-base">
                {[
                  { name: "GITHUB", label: "github.com/icz3us", href: "https://github.com/icz3us" },
                  {
                    name: "LINKEDIN",
                    label: "in/icon-zeus-gonzales",
                    href: "https://www.linkedin.com/in/icon-zeus-gonzales-4b1729330/",
                  },
                  { name: "INSTAGRAM", label: "@004_zeus", href: "https://www.instagram.com/004_zeus/" },
                  { name: "EMAIL", label: "iconzeus@gmail.com", href: "mailto:iconzeus@gmail.com" },
                ].map((link, idx) => (
                  <li key={idx} className="flex items-center justify-between group">
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      onClick={() => playClick()}
                      onMouseEnter={() => playBlip(820, 0.02)}
                      data-cursor={link.href.startsWith("mailto:") ? "EMAIL" : "VISIT"}
                      className="text-[#edece6] group-hover:text-[#7aa287] flex items-center space-x-2 transition-colors uppercase tracking-wider font-semibold"
                    >
                      <span className="text-[#646872] group-hover:text-[#7aa287] font-normal text-xs">
                        [0{idx + 1}]
                      </span>
                      <span>{link.name}</span>
                      <span className="text-[#646872] group-hover:translate-x-1 transition-transform">↗</span>
                    </a>
                    <span className="font-mono text-xs text-[#646872] hidden sm:inline">
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
