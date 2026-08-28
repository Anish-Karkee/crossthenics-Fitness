"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";
import { ArrowRight, Star, Shield, Zap, Award, Flame, Users, Dumbbell, Sparkles } from "lucide-react";
import landimage from "@/public/web images/crossthenicsfitness-20260608-0001.jpg";
import beltimage from "@/public/web images/belt1.jpg";
import { GlowOrb } from "@/components/ui/GlowOrb";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay },
});

export default function Hero() {
  /* ── Mouse-tracking parallax ──────────────────────────────────────── */
  const frameRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 55, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 55, damping: 18 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const photoX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const photoY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  const lightX = useTransform(springX, [-0.5, 0.5], [20, 80]);
  const lightY = useTransform(springY, [-0.5, 0.5], [20, 80]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!frameRef.current) return;
      const rect = frameRef.current.getBoundingClientRect();
      rawX.set((e.clientX - rect.left) / rect.width - 0.5);
      rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">

      {/* Fine Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022] z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-8 items-center w-full">

          {/* ════════════════════ LEFT — Copy ════════════════════ */}
          <div className="lg:col-span-6 flex flex-col items-start">

            <motion.div {...fadeIn(0.05)} className="mb-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full glass-pill-red px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#FF4500]">
                <Flame size={11} />
                Premium Fitness Equipment
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full glass-pill px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#A8A6A1]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF4500] shadow-[0_0_6px_#FF4500]" />
                Made in Nepal
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.12)}
              className="font-black uppercase tracking-tighter text-white leading-[0.9] mb-7"
              style={{ fontSize: "clamp(3.4rem, 8vw, 7.5rem)" }}
            >
              BUILD YOUR
              <br />
              <span
                className="text-electric-red"
                style={{ filter: "drop-shadow(0 0 40px rgba(255, 69, 0,0.45))" }}
              >
                STRONGEST
              </span>
              <br />
              SELF.
            </motion.h1>

            <motion.p {...fadeUp(0.22)} className="text-base sm:text-lg text-[#F5F3EF]/80 max-w-xl leading-relaxed mb-8 font-normal">
              Nepal&apos;s premier competition-tested gear. Hybrid self-locking belts, ballistic 900D Oxford backpacks, and magnesium chalk — built for athletes who refuse to settle.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="relative flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
              <GlowOrb variant="orange" size="sm" blur="md" animation="pulse" className="-top-8 -left-8 opacity-30" />
              <Link href="/allproducts" className="relative z-10 group w-full sm:w-auto">
                <button className="btn-electric-red flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider w-full sm:w-auto">
                  <span>Explore Products</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </Link>
              <Link href="/backpacks" className="relative z-10 group w-full sm:w-auto">
                <button className="btn-glass flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider w-full sm:w-auto">
                  <span>Discover Crossthenics</span>
                  <Sparkles size={14} className="text-[#FF4500] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                </button>
              </Link>
            </motion.div>

            {/* ── FLOATING GLASS HERO STATISTICS CARDS ─────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.38 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 w-full max-w-xl pt-4"
            >
              {[
                {
                  value: "10K+",
                  label: "Fitness Enthusiasts",
                  sub: "Community",
                  icon: <Users size={15} className="text-[#FF4500]" />,
                },
                {
                  value: "50+",
                  label: "Premium Products",
                  sub: "Competition Ready",
                  icon: <Dumbbell size={15} className="text-[#FF4500]" />,
                },
                {
                  value: "4.9★",
                  label: "Customer Rating",
                  sub: "2,500+ Reviews",
                  icon: <Star size={15} className="text-[#FF4500] fill-[#FF4500]" />,
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.42 + i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass-card rounded-2xl p-4 flex flex-col justify-between border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.85)] group cursor-default"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF4500]/15 border border-[#FF4500]/35 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#A8A6A1]">
                      {stat.sub}
                    </span>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-electric-red transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#F5F3EF]/80 mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* ════════════════════ RIGHT — Cinematic Image ════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            {/* Deep red halo glow behind the entire frame */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-40px -30px -60px -30px",
                background: "radial-gradient(ellipse at 50% 45%, rgba(255, 69, 0,0.22) 0%, rgba(180,8,8,0.10) 45%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "10% 15% 10% 15%",
                background: "radial-gradient(ellipse at 50% 50%, rgba(255,40,40,0.14) 0%, transparent 65%)",
                filter: "blur(25px)",
              }}
            />

            <div className="relative w-full max-w-[520px] lg:max-w-full lg:w-[110%] xl:w-[105%]">

              {/* Floating spec badge — top-left */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 z-30 glass-dark rounded-2xl px-4 py-2.5 border border-white/[0.14] shadow-[0_12px_30px_rgba(0,0,0,0.8)]"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-[#FF4500] block mb-0.5">Fabric Spec</span>
                <span className="text-xs font-black text-white uppercase tracking-tight">900D Military Oxford</span>
              </motion.div>

              {/* Floating "New Drop" — top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="absolute -top-3 -right-4 sm:-right-5 z-30 glass-pill-red rounded-full px-3 py-1.5 border border-[#FF4500]/40 shadow-[0_0_20px_rgba(255, 69, 0,0.30)]"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-[#FF4500] flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF4500] animate-pulse" />
                  New Drop
                </span>
              </motion.div>

              {/* 3D mouse-tracking glass bezel */}
              <motion.div
                ref={frameRef}
                style={{ rotateX, rotateY, transformPerspective: 900 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-default"
              >
                {/* Gradient glass bezel border */}
                <div
                  className="relative rounded-[28px] p-[3px] shadow-[0_50px_100px_rgba(0,0,0,0.98),0_0_0_1px_rgba(255,255,255,0.07)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 40%, rgba(255, 69, 0,0.12) 70%, rgba(255,255,255,0.06) 100%)",
                  }}
                >
                  {/* Top specular highlight line */}
                  <div className="pointer-events-none absolute inset-x-12 top-[3px] h-[1px] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />
                  {/* Left edge highlight */}
                  <div className="pointer-events-none absolute top-12 bottom-12 left-[3px] w-[1px] rounded-full bg-gradient-to-b from-transparent via-white/18 to-transparent z-10" />

                  {/* Main image container */}
                  <div
                    className="relative overflow-hidden rounded-[26px] bg-[#080808]"
                    style={{ aspectRatio: "4/5" }}
                  >
                    {/* Photograph with parallax inner movement */}
                    <motion.div
                      style={{ x: photoX, y: photoY }}
                      className="absolute inset-[-6%]"
                    >
                      <Image
                        src={landimage}
                        alt="Crossthenics Premium Fitness Equipment"
                        fill
                        priority
                        className="object-cover object-center scale-[1.04] hover:scale-[1.09] transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </motion.div>

                    {/* ── CINEMATIC GRADIENT TREATMENT ────────────── */}

                    {/* A: Strong bottom gradient */}
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.65) 22%, rgba(5,5,5,0.15) 45%, transparent 65%)" }} />
                    {/* B: Left edge seamless blend */}
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(5,5,5,0.60) 0%, rgba(5,5,5,0.20) 28%, transparent 55%)" }} />
                    {/* C: Top subtle darkening */}
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%)" }} />
                    {/* D: Radial edge vignette */}
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 42%, transparent 38%, rgba(0,0,0,0.30) 62%, rgba(0,0,0,0.60) 82%, rgba(0,0,0,0.82) 100%)" }} />

                    {/* E: Mouse-reactive red lighting sweep */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none mix-blend-screen"
                      style={{
                        background: useTransform(
                          [lightX, lightY],
                          ([lx, ly]: number[]) =>
                            `radial-gradient(ellipse at ${lx}% ${ly}%, rgba(255, 69, 0,0.13) 0%, rgba(200,8,8,0.06) 40%, transparent 65%)`
                        ),
                      }}
                    />
                    {/* F: Fixed red corner light — lower-left */}
                    <div className="absolute inset-0 pointer-events-none mix-blend-screen" style={{ background: "radial-gradient(ellipse at 15% 85%, rgba(220,20,20,0.18) 0%, transparent 45%)" }} />
                    {/* G: Cool-white rim — upper-right */}
                    <div className="absolute inset-0 pointer-events-none mix-blend-screen" style={{ background: "radial-gradient(ellipse at 85% 10%, rgba(200,220,255,0.07) 0%, transparent 40%)" }} />

                    {/* ── Quality Info Card ──────────────────────── */}
                    <div className="absolute bottom-5 left-5 right-5 z-20">
                      <div className="glass-dark rounded-2xl p-4 sm:p-5 border border-white/[0.13] shadow-[0_16px_40px_rgba(0,0,0,0.88),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF4500] block mb-1">Premium Quality</span>
                            <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight leading-tight">Fitness Equipment</h3>
                            <p className="text-[10px] text-[#A8A6A1] mt-1.5 leading-relaxed">Competition-grade. Athlete-tested. Nepal-built.</p>
                          </div>
                          <div className="shrink-0 flex flex-col items-end gap-1.5">
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={10} className="fill-[#FF4500] text-[#FF4500]" />
                              ))}
                            </div>
                            <span className="text-white font-black text-sm">4.9</span>
                            <span className="text-[9px] text-[#A8A6A1] font-semibold">/ 5.0</span>
                          </div>
                        </div>
                        <div className="mt-3.5 flex items-center gap-2 flex-wrap">
                          <span className="glass-pill rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#F5F3EF]/80">✓ Competition Grade</span>
                          <span className="glass-pill rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#F5F3EF]/80">✓ Nepal Delivery</span>
                          <Link href="/allproducts" className="ml-auto">
                            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[#FF4500] text-white shadow-[0_0_18px_rgba(255, 69, 0,0.60)] hover:scale-110 transition-transform">
                              <ArrowRight size={13} />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>

              {/* Floating belt thumbnail — overlaps bottom-right */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 z-30 w-24 sm:w-28"
              >
                <div className="glass-strong rounded-2xl p-1.5 border border-white/[0.16] shadow-[0_20px_50px_rgba(0,0,0,0.92),0_0_20px_rgba(255, 69, 0,0.12)]">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#0B0C0E]">
                    <Image
                      src={beltimage}
                      alt="Hybrid Self-Locking Belt"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      sizes="112px"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
                    <span className="absolute bottom-1.5 left-1.5 text-[7px] font-black uppercase tracking-wider text-[#FF4500]">Flagship</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}