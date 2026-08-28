import React from "react";

/**
 * CinematicBackground
 *
 * Fixed full-screen atmospheric layer rendered once at AppShell level.
 * Replicates the Hero page's iconic black + red split design globally:
 *
 *  1. Deep black (#080808) base — from Hero's bg
 *  2. Solid #FF4500 right panel (38% width, desktop only) — Hero's signature
 *  3. Subtle gradient sheen over the red panel — Hero's polish layer
 *  4. Fine 60px grid overlay — matches Hero's grid
 *  5. Red ambient glow at the black/red seam — atmospheric depth
 *  6. Bottom-left red bleed — keeps dark areas from feeling flat
 *  7. SVG film-grain noise — cinematic texture
 */
export default function CinematicBackground() {
  return (
    <div aria-hidden="true" className="cinematic-bg">

      {/* ── 1. Solid Red Right Panel (hero signature, desktop only) ── */}
      <div className="cinematic-red-panel" />

      {/* ── 2. Subtle gradient sheen on the red panel ── */}
      <div className="cinematic-red-panel-sheen" />

      {/* ── 3. Fine grid overlay — matches Hero's grid ── */}
      <div className="cinematic-grid" />

      {/* ── 4. Red ambient glow at the black/red seam ── */}
      <div className="cinematic-seam-glow" />

      {/* ── 5. Bottom-left atmospheric red bleed ── */}
      <div className="cinematic-bottom-glow" />

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
        <rect width="100%" height="100%" filter="url(#cine-grain)" opacity="0.03" />
      </svg>

    </div>
  );
}
