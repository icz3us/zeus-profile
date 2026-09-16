"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect hovered target for data-cursor attribute or interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("[data-cursor]") as HTMLElement | null;
        if (interactive) {
          setCursorText(interactive.getAttribute("data-cursor") || "OPEN");
          setIsHovered(true);
        } else if (target.closest("a, button, [role='button']")) {
          setCursorText(null);
          setIsHovered(true);
        } else {
          setCursorText(null);
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth lerp follow loop
    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.28,
        y: prev.y + (targetPos.y - prev.y) * 0.28,
      }));
      reqRef.current = requestAnimationFrame(animate);
    };
    reqRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [isVisible, targetPos]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-150 ease-out font-mono text-[10px] tracking-wider font-bold ${
          cursorText
            ? "px-3 py-1.5 bg-[#edece6] text-[#0c0d0e] border border-[#0c0d0e] shadow-[2px_2px_0px_#7aa287]"
            : isHovered
            ? "w-6 h-6 border-2 border-[#7aa287] bg-[#7aa287]/20 rounded-full scale-110"
            : "w-2.5 h-2.5 bg-[#edece6] rounded-full"
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
