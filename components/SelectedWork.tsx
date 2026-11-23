"use client";

import { useCallback, useState } from "react";
import { ProjectData, ProjectModal } from "./ProjectModal";
import { AnimatedHeading, Arrow, SectionLabel, Sketch } from "./Editorial";

const PROJECTS: ProjectData[] = [
  {
    id: "project-01", num: "01", total: "02", title: "GORDON COLLEGE / iSCHO", subtitle: "ONLINE SCHOLARSHIP PORTAL", category: "SCHOLARSHIP PORTAL", year: "2026",
    stack: ["NEXT.JS", "POSTGRESQL"],
    description: "A portal where students apply for scholarships and track their applications.",
    challenge: "Bring paper applications and supporting documents into one place.",
    solution: "Built online application forms, document review tools, and status updates.",
    metrics: ["Student applications and staff review", "Organized applicant records"],
    architecture: ["Online applications", "Document review", "Status tracking", "Applicant records"],
    githubUrl: "https://github.com/icz3us/iSCHO-2",
  },
  {
    id: "project-02", num: "02", total: "02", title: "SEA & RIVER VIEW", subtitle: "RESORT BOOKING WEBSITE", category: "RESORT BOOKING", year: "2026",
    stack: ["NEXT.JS", "REACT"],
    description: "A resort website where guests explore the property and reserve a room.",
    challenge: "Help guests explore the resort and check room availability.",
    solution: "Built a mobile-friendly website with room bookings, an availability calendar, and a virtual tour.",
    metrics: ["Live website", "Mobile-friendly booking experience"],
    architecture: ["360° resort tour", "Room availability", "Guest reservations", "Booking calendar"],
    demoUrl: "https://sea-and-river.vercel.app/", githubUrl: "https://github.com/icz3us",
  },
];

function ProjectArtwork({ index }: { index: number }) {
  return <div className={`project-art project-art-${index}`} aria-hidden="true">
    {index === 0 ? <><div className="scholarship-art"><span className="art-asterisk">✳</span><strong>iSCHO<span>OPPORTUNITY,<br />MADE ACCESSIBLE.</span></strong></div><div className="process-strip"><span>01 / APPLY</span><span>02 / REVIEW</span><span>03 / TRACK</span></div></> : <><svg className="river-lines" viewBox="0 0 650 340" fill="none">{Array.from({ length: 18 }, (_, i) => <path key={i} d={`M-30 ${50 + i * 16} C140 ${-60 + i * 13} 190 ${320 + i * 3} 340 ${130 + i * 9} S560 ${-40 + i * 17} 700 ${180 + i * 9}`} stroke="currentColor" strokeWidth="1" />)}</svg><div className="resort-art">SEA &<br /><span>RIVER VIEW</span></div><div className="process-strip"><span>EXPLORE / UNWIND / STAY</span><span>360°</span></div></>}
  </div>;
}

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const close = useCallback(() => setSelectedProject(null), []);
  return <section id="work" className="folio-section work-section">
    <SectionLabel number="01">PROJECTS</SectionLabel>
    <div className="section-heading-row"><AnimatedHeading>Selected work.</AnimatedHeading><div className="work-intro"><Sketch kind="flower" /><a className="text-link" href="https://github.com/icz3us" target="_blank" rel="noopener noreferrer">GITHUB <Arrow /></a></div></div>
    <div className="project-list">{PROJECTS.map((project, index) => <article className={`project-spread project-card spread-${index}`} key={project.id}>
      <button className="project-preview" type="button" onClick={() => setSelectedProject(project)} aria-label={`View details for ${project.title}`} data-cursor="EXPLORE"><ProjectArtwork index={index} /><span className="preview-open"><Arrow /></span></button>
      <div className="project-copy"><div className="project-number">{project.num}<span>/ {project.year}</span></div><span className="project-category">{project.category}</span><h3>{index === 0 ? <>Gordon College<br /><em>iSCHO.</em></> : <>Sea &<br /><em>River View.</em></>}</h3><p>{project.description}</p><div className="tech-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><button className="text-link" onClick={() => setSelectedProject(project)}>PROJECT DETAILS <Arrow /></button>{project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">LIVE SITE <Arrow /></a>}<a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">CODE <Arrow /></a></div></div>
    </article>)}</div>
    <ProjectModal project={selectedProject} onClose={close} />
  </section>;
}
