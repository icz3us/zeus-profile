"use client";

import { useState, useRef, useCallback } from "react";

const ASCII_CHARS = "0123456789!<>-_\\/[]{}=+*^?#________";

export function useScrambleText(originalText: string, speed = 25) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            if (index < iteration) {
              return originalText[index];
            }
            return ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 2;
    }, speed);
  }, [originalText, speed]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(originalText);
  }, [originalText]);

  return { displayText, scramble, reset };
}
