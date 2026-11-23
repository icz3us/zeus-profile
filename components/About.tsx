import { AnimatedHeading, SectionLabel } from "./Editorial";

export function About() {
  return <section id="about" className="folio-section about-section">
    <SectionLabel number="03">ABOUT</SectionLabel>
    <div className="about-layout"><AnimatedHeading><span className="about-heading-line">Thoughtful design.</span><span className="about-heading-line"><span className="outline-type">Practical</span> solutions.</span></AnimatedHeading>
    <div className="about-body"><span className="about-name">Hello, I’m Zeus</span><p className="about-lead">A web developer and designer based in Manila. I build websites and apps with clear layouts and a distinctive visual style.</p><p>My projects include a scholarship portal and a resort booking website. I focus on making information easy to find and tasks easy to complete.</p></div></div>
  </section>;
}
