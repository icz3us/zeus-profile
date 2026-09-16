"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function useScrollAnimations() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.01 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // Synchronize Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // 2. Set up Scroll Animations & Parallax Effects with GSAP Context
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // --- Top Global Scroll Progress Bar ---
      const progressBar = document.getElementById("scroll-progress-bar");
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        });
      }

      // --- Hero Section Parallax ---
      const hero = document.getElementById("hero");
      if (hero) {
        // Title parallax depth
        const heroTitle = hero.querySelector("h1");
        if (heroTitle) {
          gsap.to(heroTitle, {
            yPercent: -18,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }

        // Subtitle stack parallax
        const heroSub = document.getElementById("hero-subhead");
        if (heroSub) {
          gsap.to(heroSub, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }

        // Right 3D Wireframe Box Parallax
        const wireframeBox = document.getElementById("hero-wireframe-box");
        if (wireframeBox) {
          gsap.to(wireframeBox, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        // Watermark coordinates drift
        const watermark = document.getElementById("hero-watermark");
        if (watermark) {
          gsap.to(watermark, {
            yPercent: -25,
            opacity: 0.2,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      }

      // --- Selected Work Cards Parallax & Entrance ---
      const workSection = document.getElementById("work");
      if (workSection) {
        const projectCards = workSection.querySelectorAll<HTMLElement>(".project-card");
        projectCards.forEach((card) => {
          // Entrance reveal
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });

          // Multi-layer parallax between schematic box and editorial content
          const schematic = card.querySelector<HTMLElement>(".project-schematic");
          const editorial = card.querySelector<HTMLElement>(".project-editorial");

          if (schematic && editorial) {
            gsap.to(schematic, {
              yPercent: -5,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
            gsap.to(editorial, {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }
        });
      }

      // --- Technical Index (SkillsIndex) Stagger Reveal & Parallax ---
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const skillCards = skillsSection.querySelectorAll(".skill-category-card");
        if (skillCards.length > 0) {
          gsap.from(skillCards, {
            opacity: 0,
            y: 35,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillsSection,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          });
        }
      }

      // --- ASCII Lab Monitor Entrance ---
      const labSection = document.getElementById("lab");
      if (labSection) {
        const labTerminal = labSection.querySelector(".lab-terminal-container");
        if (labTerminal) {
          gsap.from(labTerminal, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: labSection,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          });
        }
      }

      // --- About Section Asymmetric Parallax ---
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const statement = document.getElementById("about-statement");
        if (statement) {
          gsap.to(statement, {
            xPercent: -3,
            ease: "none",
            scrollTrigger: {
              trigger: aboutSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }

        const leftSpec = document.getElementById("about-spec-card");
        const rightBio = document.getElementById("about-bio-text");

        if (leftSpec) {
          gsap.to(leftSpec, {
            yPercent: -4,
            ease: "none",
            scrollTrigger: {
              trigger: aboutSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (rightBio) {
          gsap.to(rightBio, {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: aboutSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      }

      // --- Contact Section Kinetic Headline Parallax ---
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const headlineLines = contactSection.querySelectorAll(".contact-kinetic-line");
        headlineLines.forEach((line, idx) => {
          const direction = idx % 2 === 0 ? -1 : 1;
          gsap.fromTo(
            line,
            { x: direction * 25 },
            {
              x: 0,
              ease: "none",
              scrollTrigger: {
                trigger: contactSection,
                start: "top bottom",
                end: "center center",
                scrub: 1,
              },
            }
          );
        });

        const dispatchCard = document.getElementById("contact-dispatch-card");
        if (dispatchCard) {
          gsap.from(dispatchCard, {
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactSection,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          });
        }
      }
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return { lenis: lenisRef.current };
}
