import React from "react";
import { GlowOrb } from "@/components/ui/GlowOrb";

/**
 * CinematicBackground
 *
 * A single fixed-positioned atmospheric layer rendered once at the AppShell
 * level. Sits behind all pages (z-0) with low opacity and ultra-smooth,
 * GPU-accelerated slow ambient movement.
 *
 * Atmospheric Orbs:
 *  1. Hero crimson orb (large, breathing pulse animation)
 *  2. Mid-page orange orb (warm ember float animation)
 *  3. Upper-left soft white/silver glow (cool contrast drift)
 *  4. Deep lower red orb (slow atmospheric bleed)
 *  5. Central dark gradient blob (contrast depth)
 *  6. SVG film-grain noise filter (feTurbulence)
 *  7. Radial vignette ring (cinematic edge framing)
 */
export default function CinematicBackground() {
  return (
    <div
      aria-hidden="true"
      className="cinematic-bg"
    >
      {/* ── 1. Hero Red/Crimson Blurred Orb (Slow Breathing Pulse) ── */}
      <GlowOrb
        variant="crimson"
        size="hero"
        blur="2xl"
        animation="pulse"
        className="-top-28 left-1/2 -translate-x-1/2 opacity-90"
      />

      {/* ── 2. Mid-Page Orange / Amber Blurred Orb (Slow Floating Drift) ── */}
      <GlowOrb
        variant="orange"
        size="xl"
        blur="xl"
        animation="float"
        className="top-1/3 -right-24 opacity-80"
      />

      {/* ── 3. Upper-Left Soft White Atmospheric Glow (Subtle Drift) ── */}
      <GlowOrb
        variant="white"
        size="lg"
        blur="2xl"
        animation="drift"
        className="top-12 -left-16 opacity-50"
      />

      {/* ── 4. Lower Deep Red Atmospheric Orb (Subtle Pulse) ── */}
      <GlowOrb
        variant="red"
        size="xl"
        blur="2xl"
        animation="pulse"
        className="-bottom-20 -left-20 opacity-70"
      />

      {/* ── 5. Subtle Dark Gradient Blob (Depth Layer) ── */}
      <GlowOrb
        variant="dark"
        size="2xl"
        blur="lg"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35"
      />

      {/* ── 6. SVG Film Grain Texture ── */}
      <svg
        className="cinematic-grain"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <filter id="cine-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.70"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cine-grain)" opacity="0.035" />
      </svg>

      {/* ── 7. Radial Vignette Edge Mask ── */}
      <div className="cinematic-vignette" />
    </div>
  );
}
