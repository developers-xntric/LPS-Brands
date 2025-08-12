"use client";

import { useState, useEffect } from "react";

const phrases = [
  "are unique but relevant",
  "innovate in a world of flux",
  "do not solve for the brand but for its communities",
  "blend right brain storytelling with left brain execution",
  "are not a specialist agency but a collective of specialists",
];

export default function AnimatedTextSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [nextPhraseIndex, setNextPhraseIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("up"); // "up" = going forward, "down" = going backward

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentPhraseIndex(nextPhraseIndex);

        if (direction === "up") {
          if (nextPhraseIndex === phrases.length - 1) {
            setDirection("down");
            setNextPhraseIndex(nextPhraseIndex - 1);
          } else {
            setNextPhraseIndex(nextPhraseIndex + 1);
          }
        } else {
          if (nextPhraseIndex === 0) {
            setDirection("up");
            setNextPhraseIndex(nextPhraseIndex + 1);
          } else {
            setNextPhraseIndex(nextPhraseIndex - 1);
          }
        }

        setIsAnimating(false);
      }, 700);
    }, 3000);

    return () => clearInterval(interval);
  }, [nextPhraseIndex, direction]);

  return (
    <div className="flex items-center gap-10 text-4xl font-bold">
      <span className="text-blue text-[80px] tracking-tight">We</span>

      <div className="relative overflow-hidden h-[3.5rem] w-full  inline-block align-middle">
        {/* current phrase */}
        <div
          key={currentPhraseIndex}
          className={`absolute left-0 px-4 py-2 bg-green text-blue transition-transform duration-700 ease-in-out ${
            isAnimating
              ? direction === "up"
                ? "-translate-y-full"
                : "translate-y-full"
              : "translate-y-0"
          }`}
        >
          {phrases[currentPhraseIndex]}
        </div>

        {/* next phrase */}
        <div
          key={nextPhraseIndex}
          className={`absolute left-0 px-4 py-2 bg-green text-blue transition-transform duration-700 ease-in-out ${
            isAnimating
              ? "translate-y-0"
              : direction === "up"
              ? "translate-y-full"
              : "-translate-y-full"
          }`}
        >
          {phrases[nextPhraseIndex]}
        </div>
      </div>
    </div>
  );
}
