"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HoverVideoPillProps = {
  label?: string;
  videoSrc?: string;
  className?: string;
  compact?: boolean;
};

/**
 * HoverVideoPill v2
 * - The pill itself expands into a rounded video preview on hover/tap.
 * - While expanded, the pill's label/icon fade out so the "button" is not visible.
 * - On mobile, tap toggles the expanded preview below the button like an accordion; tap outside to close.
 */
export default function HoverVideoPill({
  label = "Experiences",
  videoSrc = "/videos/hover-preview-2.mp4",
  className,
  compact = false,
}: HoverVideoPillProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const active = isHovered || isOpen;

  // Play/pause video based on active state
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) {
      try {
        v.currentTime = 0;
        const p = v.play();
        if (p) p.catch(() => { });
      } catch { }
    } else {
      try {
        v.pause();
        v.currentTime = 0;
      } catch { }
    }
  }, [active]);

  // Close on outside click (for mobile tap mode)
  React.useEffect(() => {
    if (!isOpen) return;
    function onDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [isOpen]);

  function handleClick() {
    // Toggle for touch devices
    setIsOpen((v) => !v);
  }

  return (
    <div
      ref={rootRef}
      className={cn("relative inline-block align-middle", className)}
      style={{
        zIndex: active ? 9999 : "auto",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The expanding pill */}
      <button
        type="button"
        aria-expanded={active}
        aria-label={active ? `${label} preview` : label}
        onClick={handleClick}
        className={cn(
          "relative isolate inline-flex items-center gap-2 rounded-full ring-1 transition-all duration-300",
          // Base (collapsed) visual
          "bg-green text-neutral-900 ring-lime-300 shadow-sm",
          compact ? "h-9 px-3 text-sm" : "md:h-12 lg:h-16 h-9 px-3 md:px-[56px] text-[24px]",
          // Expanded visual for desktop — turn background/ring transparent
          active && "md:bg-transparent md:ring-transparent md:shadow-none"
        )}
        style={{
          // Smoothly morph borderRadius from pill to card when active
          borderRadius: active ? 22 : 9999,
          // Gentle lift on activation for desktop
          transform: active ? "md:translateY(-1px)" : "translateY(0)",
        }}
      >
        {/* Leading circular arrow (hidden when expanded on desktop) */}
        <span
          className={cn(
            "flex items-center justify-center rounded-full bg-[#2054FC] left-2 text-white transition-all duration-200 md:absolute",
            compact ? "h-7 w-7" : "md:h-8 md:w-8 lg:h-12 lg:w-12 h-6 w-6",
            active ? "md:opacity-0 md:scale-90" : "opacity-100 scale-100"
          )}
          aria-hidden="true"
        >
          <ArrowRight className={cn(compact ? "h-3.5 w-3.5" : "w-4 md:h-5 lg:h-7 h-4 md:w-5 lg:w-7")} />
        </span>
        {/* Label (hidden when expanded on desktop) */}
        <span
          className={cn(
            "font-semibold tracking-wide text-secondary whitespace-nowrap transition-opacity duration-150 font-['Asgard'] relative md:left-5 text-[18px] md:text-2xl lg:text-3xl",
            active ? "md:opacity-0" : "opacity-100"
          )}
        >
          {label}
        </span>

        {/* Expanding video layer for desktop */}
        <div
          className={cn(
            "pointer-events-none absolute z-10",
            "md:flex md:items-center md:justify-center hidden"
          )}
          aria-hidden="true"
        >
          <div
            className={cn(
              "overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white/70 backdrop-blur-md",
              "transition-all duration-700",
              // Size of the expanded preview
              active
                ? compact
                  ? "w-[260px] h-[200px]"
                  : "w-[340px] mb-72 h-[260px]"
                : "w-0 h-0"
            )}
            style={{
              borderRadius: active ? 24 : 24,
              transform: active ? "scale(1.4)" : "scale(0.8)",
              opacity: active ? 1 : 0,
            }}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              controls={false}
              src={videoSrc}
            >
              {"Your browser does not support the video tag."}
            </video>
          </div>
        </div>
      </button>

      {/* Accordion-style video layer for mobile */}
      <div
        className={cn(
          "lg:hidden",
          active ? "block" : "hidden"
        )}
      >
        <div
          className={cn(
            "overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white/70 backdrop-blur-md mt-2",
            "transition-all duration-700",
            // Size of the expanded preview
            active
              ? compact
                ? "w-[260px] h-[200px]"
                : "w-full h-[260px]"
              : "w-0 h-0"
          )}
          style={{
            borderRadius: 24,
            opacity: active ? 1 : 0,
          }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            controls={false}
            src={videoSrc}
          >
            {"Your browser does not support the video tag."}
          </video>
        </div>
      </div>
    </div>
  );
}