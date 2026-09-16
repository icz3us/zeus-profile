"use client";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 brutalist-border-b bg-[#0c0d0e]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subheader */}
        <div className="flex items-center justify-between pb-3 border-b border-[#25282e] font-mono text-xs text-[#646872] mb-8 sm:mb-12">
          <div className="flex items-center space-x-2">
            <span className="text-[#7aa287]">/* 04 */</span>
            <span className="text-[#edece6] font-bold uppercase tracking-wider">EDITORIAL PROFILE</span>
          </div>
          <div>VOL. 26 // ESSAY-01</div>
        </div>

        {/* Massive Editorial Statement */}
        <div id="about-statement" className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold uppercase text-[#edece6] leading-[0.95] tracking-tight break-words">
            I LIKE BUILDING THINGS THAT FEEL A LITTLE DIFFERENT.
          </h2>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Technical Profile Spec (Cols 1-5) */}
          <div id="about-spec-card" className="lg:col-span-5 bg-[#141618] border border-[#25282e] p-6">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#646872] pb-3 border-b border-[#25282e] mb-4">
              <span className="text-[#7aa287]">ARCHIVE_ID: ZEUS_BIO_01</span>
              <span>199X — 2026</span>
            </div>

            {/* Technical Profile Matrix */}
            <div className="font-mono text-xs space-y-2.5">
              <div className="flex justify-between py-1 border-b border-[#25282e]/50">
                <span className="text-[#646872]">LOCATION</span>
                <span className="text-[#edece6]">PHILIPPINES [MNL]</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#25282e]/50">
                <span className="text-[#646872]">ROLE</span>
                <span className="text-[#edece6]">FULL-STACK DESIGN ENGINEER</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#25282e]/50">
                <span className="text-[#646872]">FOCUS</span>
                <span className="text-[#7aa287]">WEB / UI / DIGITAL SYSTEMS</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#25282e]/50">
                <span className="text-[#646872]">CORE STACK</span>
                <span className="text-[#edece6]">NEXT.JS / REACT / SQL / PHP</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#25282e]/50">
                <span className="text-[#646872]">PRACTICE</span>
                <span className="text-[#62829a]">BESPOKE FRONT-END &amp; TOOLING</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#646872]">STATUS</span>
                <span className="text-[#7aa287]">AVAILABLE FOR COMMISSIONS</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Biography & Manifesto (Cols 6-12) */}
          <div id="about-bio-text" className="lg:col-span-7 space-y-6 font-sans text-base sm:text-lg text-[#a2a7af] leading-relaxed">
            <p>
              I am a web engineer and digital designer crafting software that balances raw architectural discipline with nostalgic underground aesthetics. Raised on late-90s web experimentation, IRC channels, and early CD-ROM user interfaces, I approach modern front-end engineering with reverence for tactile typography and visceral interactivity.
            </p>
            <p>
              My work centers on building web applications, reservation platforms, bespoke editorial websites, and internal tooling that perform with uncompromising speed while offering a distinct, memorable artistic voice.
            </p>
            <p>
              Instead of defaulting to homogenous corporate SaaS components or ephemeral AI-generated templates, every system I build is deliberately art-directed—treating code as a sculpting material where layouts, state synchronization, and micro-motion coalesce into human experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
