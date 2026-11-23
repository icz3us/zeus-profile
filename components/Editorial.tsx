import type { ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 20 20 4M4 4h16v16" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

export function Sketch({ kind = "orbit", className = "" }: { kind?: "orbit" | "arrow" | "flower"; className?: string }) {
  const paths = {
    orbit: "M174 25C109-10 9 12 9 51s171 46 182 7S111-2 40 16M24 75C71 96 154 89 183 61",
    arrow: "M12 8c10 48 112 2 126 51 8 28-30 29-47 18m22-18-25 17 21 19",
    flower: "M98 48C54-32 23 0 64 55-15 19-8 75 59 76 3 124 53 145 84 89c-2 81 54 64 29-2 65 57 92 4 32-21 78-5 49-59-7-28 25-66-35-79-40 10Z",
  };
  return <svg className={`sketch ${className}`} viewBox="0 0 200 150" fill="none" aria-hidden="true"><path d={paths[kind]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function SectionLabel({ number, children, aside }: { number: string; children: ReactNode; aside?: string }) {
  return <div className="section-label"><span><span className="index-number">{number}</span> {children}</span><span>{aside}</span></div>;
}

export function AnimatedHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`editorial-heading reveal-heading ${className}`}>{children}</h2>;
}
