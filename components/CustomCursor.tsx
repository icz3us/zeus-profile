"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const currentRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const draw = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const factor = reducedMotion.matches ? 1 : 0.32;
      current.x += (target.x - current.x) * factor;
      current.y += (target.y - current.y) * factor;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      const remaining = Math.abs(target.x - current.x) + Math.abs(target.y - current.y);
      frameRef.current = remaining > 0.25 ? requestAnimationFrame(draw) : null;
    };

    const scheduleDraw = () => {
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      scheduleDraw();

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>("[data-cursor]");
      if (interactive) {
        setCursorText(interactive.dataset.cursor || "OPEN");
        setIsHovered(true);
      } else {
        setCursorText(null);
        setIsHovered(Boolean(target?.closest("a, button, [role='button']")));
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);


  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-150 ease-out font-mono text-[10px] tracking-wider font-bold ${
          cursorText
            ? "px-3 py-1.5 bg-[#edece6] text-[#0c0d0e] border border-[#0c0d0e] shadow-[2px_2px_0px_#7aa287]"
            : isHovered
              ? "w-6 h-6 border-2 border-[#7aa287] bg-[#7aa287]/20 rounded-full scale-110"
              : "w-2.5 h-2.5 bg-[#86aa35] rounded-full"
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
