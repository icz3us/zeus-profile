"use client";

import { useState } from "react";
import { ProjectData, ProjectModal } from "./ProjectModal";
import { useSoundEffects } from "../hooks/useSoundEffects";

const PROJECTS: ProjectData[] = [
  {
    id: "project-01",
    num: "01",
    total: "02",
    title: "GORDON COLLEGE — iSCHO",
    subtitle: "INTEGRATED ONLINE SCHOLARSHIP PORTAL",
    category: "SCHOLARSHIP PORTAL · WEB APP",
    year: "2026",
    stack: [
      "NEXT.JS",
      "TYPESCRIPT",
      "POSTGRESQL",
      "DOCUMENT KYC",
      "STATUS TRACKING",
      "TAILWIND CSS",
    ],
    description:
      "Integrated online scholarship portal for streamlined registration, document verification, status tracking, and database synchronization.",
    challenge:
      "Modernizing student scholarship applications by eliminating paper-based intake, reducing manual document evaluation delays, and synchronizing applicant records across academic databases.",
    solution:
      "Engineered an automated applicant intake engine featuring digital document verification, real-time application status tracking, evaluation workflows, and secure database synchronization.",
    metrics: [
      "Streamlined Multi-Tier Document Verification",
      "Real-Time Student Eligibility & Status Tracking",
      "Unified Institutional Database Synchronization",
    ],
    architecture: [
      "Student Registration & Application Intake",
      "Document Verification Engine",
      "Real-Time Status Tracking Dashboard",
      "Institutional Database Synchronization",
    ],
    githubUrl: "https://github.com/icz3us/iSCHO-2",
  },
  {
    id: "project-02",
    num: "02",
    total: "02",
    title: "SEA & RIVER VIEW",
    subtitle: "RESORT MANAGEMENT & VIRTUAL TOURISM PLATFORM",
    category: "HOTEL BOOKING · VIRTUAL TOUR",
    year: "2026",
    stack: [
      "NEXT.JS",
      "REACT",
      "VERCEL",
      "REAL-TIME SCHEDULING",
      "360° VIRTUAL TOUR",
      "TAILWIND CSS",
    ],
    description:
      "Full resort management, real-time room reservations, interactive scheduling dashboard, and an integrated virtual tourism layout.",
    challenge:
      "Preventing double-booking collisions during peak vacation surges while providing guests with an interactive virtual tourism layout across both mobile and desktop screens.",
    solution:
      "Architected a hospitality platform combining an interactive spatial exploration viewport with real-time calendar availability, automated guest reservations, and responsive edge deployment.",
    metrics: [
      "Live Production Deployment on Vercel",
      "Real-Time Interactive Scheduling Dashboard",
      "Integrated Spatial Virtual Tourism Layout",
    ],
    architecture: [
      "Interactive Virtual Tourism Layout",
      "Real-Time Room Availability Matrix",
      "Reservation & Guest Scheduling Engine",
      "Automated Booking & Checkout Pipeline",
    ],
    demoUrl: "https://sea-and-river.vercel.app/",
    githubUrl: "https://github.com/icz3us",
  },
];

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const { playClick, playBlip } = useSoundEffects();

  const handleOpen = (project: ProjectData) => {
    playClick();
    setSelectedProject(project);
  };

  return (
    <section id="work" className="py-12 sm:py-16 md:py-24 brutalist-border-b bg-[#0c0d0e]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 md:mb-16 pb-4 brutalist-border-b gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-[#edece6] tracking-tight">
              FEATURED WORKS
            </h2>
          </div>
          <div className="flex flex-col sm:items-end gap-2 font-mono text-[11px] sm:text-xs">
            <a
              href="https://github.com/icz3us"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
              data-cursor="GITHUB"
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#141618] hover:bg-[#7aa287] text-[#edece6] hover:text-[#0c0d0e] border border-[#25282e] hover:border-[#7aa287] transition-all duration-150 font-bold uppercase tracking-wider group"
            >
              <span>[ ALL REPOSITORIES ]</span>
              <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* Alternating Project Case Studies */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* PROJECT 01: GORDON COLLEGE — iSCHO */}
          <div className="project-card flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch brutalist-border p-4 sm:p-6 md:p-8 bg-[#141618] hover:border-[#7aa287] transition-colors group">
            {/* Visual Schematic Box */}
            <div
              className="project-schematic lg:col-span-7 bg-[#0c0d0e] border border-[#25282e] p-4 sm:p-6 flex flex-col justify-between cursor-pointer group"
              onClick={() => handleOpen(PROJECTS[0])}
              onMouseEnter={() => playBlip(620, 0.03)}
              data-cursor="VIEW SPEC"
            >
              <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#646872] pb-3 border-b border-[#25282e] gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#7aa287] animate-pulse" />
                  <span className="text-[#7aa287] font-bold">ONLINE SCHOLARSHIP PORTAL</span>
                </div>
                <span className="text-[#646872] font-mono">[ GORDON COLLEGE ]</span>
              </div>

              {/* UI Architecture Simulation */}
              <div className="my-5 space-y-3 font-mono text-xs">
                <div className="bg-[#141618] border border-[#25282e] p-3 sm:p-4 rounded-sm">
                  <div className="text-[10px] text-[#646872] uppercase mb-2">
                    STUDENT REGISTRATION &amp; VERIFICATION
                  </div>
                  <div className="text-[#edece6] font-bold text-sm sm:text-base font-display">
                    GORDON COLLEGE — iSCHO
                  </div>
                  <div className="text-[#a2a7af] text-[11px] mt-1">
                    STREAMLINED REGISTRATION · DOCUMENT VERIFICATION · DATABASE SYNCHRONIZATION
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-[#141618] border border-[#25282e] p-2.5">
                    <div className="text-[9px] text-[#646872] uppercase">DOCUMENT VERIFICATION</div>
                    <div className="text-[#edece6] font-semibold mt-0.5">TRANSCRIPTS &amp; CERTIFICATES</div>
                  </div>
                  <div className="bg-[#141618] border border-[#25282e] p-2.5">
                    <div className="text-[9px] text-[#646872] uppercase">DATABASE SYNCHRONIZATION</div>
                    <div className="text-[#7aa287] font-semibold mt-0.5">STUDENT &amp; EVALUATION RECORDS</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#25282e] flex items-center justify-end font-mono text-[10px] text-[#a2a7af]">
                <span className="text-[#7aa287] shrink-0 group-hover:underline">[ VIEW DETAILS ]</span>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="project-editorial lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] sm:text-xs text-[#7aa287] uppercase mb-2">
                  {PROJECTS[0].category}
                </div>
                <h3
                  className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#edece6] uppercase tracking-tight cursor-pointer hover:text-[#7aa287] transition-colors"
                  onClick={() => handleOpen(PROJECTS[0])}
                  data-cursor="EXPLORE"
                >
                  {PROJECTS[0].title}
                </h3>
                <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm text-[#a2a7af] leading-relaxed">
                  {PROJECTS[0].description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#25282e]">
                <div className="font-mono text-[10px] text-[#646872] uppercase mb-2">
                  TECHNOLOGY
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {PROJECTS[0].stack.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-[#0c0d0e] border border-[#25282e] text-[#edece6]">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 sm:mt-6">
                  <button
                    type="button"
                    onClick={() => handleOpen(PROJECTS[0])}
                    data-cursor="DETAILS"
                    className="w-full py-3 bg-[#0c0d0e] hover:bg-[#7aa287] text-[#edece6] hover:text-[#0c0d0e] border border-[#25282e] font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 min-h-[44px]"
                  >
                    <span>VIEW DETAILS</span>
                    <span>↗</span>
                  </button>
                  <a
                    href="https://github.com/icz3us/iSCHO-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClick()}
                    data-cursor="GITHUB"
                    className="w-full py-3 bg-[#141618] hover:bg-[#edece6] text-[#7aa287] hover:text-[#0c0d0e] border border-[#25282e] font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 min-h-[44px] font-bold"
                  >
                    <span>SOURCE REPO</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 02: SEA & RIVER VIEW */}
          <div className="project-card flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch brutalist-border p-4 sm:p-6 md:p-8 bg-[#141618] hover:border-[#62829a] transition-colors group">
            {/* Editorial Content */}
            <div className="project-editorial lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="font-mono text-[11px] sm:text-xs text-[#62829a] uppercase mb-2">
                  {PROJECTS[1].category}
                </div>
                <h3
                  className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#edece6] uppercase tracking-tight cursor-pointer hover:text-[#62829a] transition-colors"
                  onClick={() => handleOpen(PROJECTS[1])}
                  data-cursor="EXPLORE"
                >
                  {PROJECTS[1].title}
                </h3>
                <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm text-[#a2a7af] leading-relaxed">
                  {PROJECTS[1].description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#25282e]">
                <div className="font-mono text-[10px] text-[#646872] uppercase mb-2">
                  TECHNOLOGY
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {PROJECTS[1].stack.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-[#0c0d0e] border border-[#25282e] text-[#edece6]">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 sm:mt-6">
                  <button
                    type="button"
                    onClick={() => handleOpen(PROJECTS[1])}
                    data-cursor="DETAILS"
                    className="w-full py-3 bg-[#0c0d0e] hover:bg-[#62829a] text-[#edece6] hover:text-[#0c0d0e] border border-[#25282e] font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 min-h-[44px]"
                  >
                    <span>VIEW DETAILS</span>
                    <span>↗</span>
                  </button>
                  <a
                    href="https://sea-and-river.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClick()}
                    data-cursor="LAUNCH"
                    className="w-full py-3 bg-[#141618] hover:bg-[#62829a] text-[#62829a] hover:text-[#0c0d0e] border border-[#25282e] font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 min-h-[44px] font-bold"
                  >
                    <span>LAUNCH SITE</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Visual Schematic Box */}
            <div
              className="project-schematic lg:col-span-7 bg-[#0c0d0e] border border-[#25282e] p-4 sm:p-6 flex flex-col justify-between cursor-pointer group order-1 lg:order-2"
              onClick={() => handleOpen(PROJECTS[1])}
              onMouseEnter={() => playBlip(720, 0.03)}
              data-cursor="VIEW SPEC"
            >
              <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#646872] pb-3 border-b border-[#25282e] gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#62829a] animate-pulse" />
                  <span className="text-[#62829a] font-bold">HOTEL BOOKING &amp; VIRTUAL TOUR</span>
                </div>
                <span className="text-[#646872] font-mono">[ SEA-AND-RIVER.VERCEL.APP ]</span>
              </div>

              {/* UI Architecture Simulation */}
              <div className="my-5 space-y-3 font-mono text-xs">
                <div className="bg-[#141618] border border-[#25282e] p-4 rounded-sm">
                  <div className="text-[10px] text-[#646872] uppercase mb-2">
                    RESORT RESERVATION &amp; SCHEDULING
                  </div>
                  <div className="text-[#edece6] font-bold text-sm sm:text-base font-display">
                    SEA &amp; RIVER VIEW
                  </div>
                  <div className="text-[#a2a7af] text-[11px] mt-1">
                    REAL-TIME ROOM RESERVATIONS · INTERACTIVE SCHEDULING DASHBOARD
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-[#141618] border border-[#25282e] p-2.5">
                    <div className="text-[9px] text-[#646872] uppercase">VIRTUAL TOURISM</div>
                    <div className="text-[#edece6] font-semibold mt-0.5">INTERACTIVE 360° RESORT LAYOUT</div>
                  </div>
                  <div className="bg-[#141618] border border-[#25282e] p-2.5">
                    <div className="text-[9px] text-[#646872] uppercase">SCHEDULING ENGINE</div>
                    <div className="text-[#62829a] font-semibold mt-0.5">REAL-TIME ROOM AVAILABILITY</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#25282e] flex items-center justify-end font-mono text-[10px] text-[#a2a7af]">
                <span className="text-[#62829a] shrink-0 group-hover:underline">[ VIEW DETAILS ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Drawer */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
