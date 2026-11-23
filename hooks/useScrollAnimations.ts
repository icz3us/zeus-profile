"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to("#scroll-progress-bar", { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: true } });
      gsap.utils.toArray<HTMLElement>(".reveal-heading").forEach(heading => {
        gsap.from(heading, { y: 24, duration: 1, ease: "expo.out", scrollTrigger: { trigger: heading, start: "top 92%", once: true } });
      });
      gsap.utils.toArray<SVGPathElement>(".sketch path").forEach(path => {
        const length = path.getTotalLength();
        gsap.fromTo(path, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: path, start: "top 90%", once: true } });
      });
    });
    return () => media.revert();
  }, []);
}
