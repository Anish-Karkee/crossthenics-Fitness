"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Zap,
  Flame,
  Truck,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Shield,
  Layers,
  Award,
} from "lucide-react";
import beltImage from "@/public/web images/belt1.jpg";
import bagImage from "@/public/web images/bag.jpg";
import chalkImage from "@/public/web images/chalk.jpg";
import sideImage from "@/public/web images/side.jpg";

export default function Service() {
  return (
    <section className="relative w-full overflow-hidden py-28 sm:py-36 border-t border-white/[0.06]">
      {/* Background Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-20 blur-[160px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 69, 0,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── SECTION HEADER ────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass-pill-red px-4 py-1.5 mb-5"
          >
            <Sparkles size={12} className="text-[#FF4500]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#FF4500]">
              Engineered Standards
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-6"
          >
            EVERYTHING YOU NEED TO <span className="text-electric-red">DOMINATE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A8A6A1] leading-relaxed font-normal"
          >
            Built for competition athletes and calisthenics purists. Zero compromises on fabric, hardware, or durability.
          </motion.p>
        </div>

        {/* ── ASYMMETRICAL GLASS BENTO GRID ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-24">

          {/* ── CARD 1: Premium Equipment (Featured Large Card - 7 Cols) ─ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="md:col-span-7 glass-card rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer"
          >
            {/* Background subtle image illustration */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <Image
                src={beltImage}
                alt="Premium Equipment"
                fill
                className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/80 to-transparent" />
            </div>

            {/* Specular Inner Line */}
            <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#FF4500]/15 border border-[#FF4500]/40 text-[#FF4500] group-hover:scale-110 group-hover:bg-[#FF4500]/25 transition-all shadow-[0_0_20px_rgba(255, 69, 0,0.3)]">
                  <Dumbbell size={24} />
                </div>
                <span className="glass-pill-red rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#FF4500]">
                  Flagship Line
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-electric-red transition-colors">
                Premium Equipment
              </h3>
              <p className="text-sm text-[#F5F3EF]/80 max-w-md leading-relaxed font-normal">
                Competition-grade self-locking belts and dipped chains engineered for maximum intra-abdominal pressure and heavy powerlifting.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A8A6A1] group-hover:text-white transition-colors flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#FF4500]" />
                Steel Quick-Lock Mechanics
              </span>
              <Link href="/allproducts">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white group-hover:text-[#FF4500] transition-colors">
                  <span>Explore</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ── CARD 2: Fitness Accessories (5 Cols) ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="md:col-span-5 glass-card rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer"
          >
            <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-20 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <Image
                src={bagImage}
                alt="Fitness Accessories"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#FF4500]/15 border border-[#FF4500]/40 text-[#FF4500] group-hover:scale-110 group-hover:bg-[#FF4500]/25 transition-all shadow-[0_0_20px_rgba(255, 69, 0,0.3)]">
                  <Zap size={24} />
                </div>
                <span className="glass-pill rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F5F3EF]/80">
                  Daily & Training
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-electric-red transition-colors">
                Fitness Accessories
              </h3>
              <p className="text-sm text-[#F5F3EF]/80 leading-relaxed font-normal">
                45L Ballistic 900D Oxford backpacks, ergonomic side bags, and heavy-duty straps to organize your daily training gear.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A8A6A1] group-hover:text-white transition-colors flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#FF4500]" />
                900D Waterproof Oxford
              </span>
              <Link href="/backpacks">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white group-hover:text-[#FF4500] transition-colors">
                  <span>Explore</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ── CARD 3: Nutrition & Grip Fuel (5 Cols) ────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="md:col-span-5 glass-card rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer"
          >
            <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-20 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <Image
                src={chalkImage}
                alt="Grip & Performance"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#FF4500]/15 border border-[#FF4500]/40 text-[#FF4500] group-hover:scale-110 group-hover:bg-[#FF4500]/25 transition-all shadow-[0_0_20px_rgba(255, 69, 0,0.3)]">
                  <Flame size={24} />
                </div>
                <span className="glass-pill rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F5F3EF]/80">
                  Max Traction
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-electric-red transition-colors">
                Grip & Performance
              </h3>
              <p className="text-sm text-[#F5F3EF]/80 leading-relaxed font-normal">
                Pharmaceutical-grade magnesium carbonate chalk blocks for zero slip on bars, rings, and competition deadlifts.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A8A6A1] group-hover:text-white transition-colors flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#FF4500]" />
                Zero-Residue Formula
              </span>
              <Link href="/allproducts">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white group-hover:text-[#FF4500] transition-colors">
                  <span>Explore</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ── CARD 4: Nationwide Delivery (Featured 7 Cols) ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="md:col-span-7 glass-card rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer"
          >
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <Image
                src={sideImage}
                alt="Nationwide Delivery"
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#FF4500]/15 border border-[#FF4500]/40 text-[#FF4500] group-hover:scale-110 group-hover:bg-[#FF4500]/25 transition-all shadow-[0_0_20px_rgba(255, 69, 0,0.3)]">
                  <Truck size={24} />
                </div>
                <span className="glass-pill-red rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#FF4500] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF4500] animate-pulse" />
                  All 7 Provinces
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-electric-red transition-colors">
                Nationwide Delivery
              </h3>
              <p className="text-sm text-[#F5F3EF]/80 max-w-md leading-relaxed font-normal">
                Rapid, insured dispatch from our Kathmandu facility to your doorstep across Nepal. Guaranteed replacement and easy size swaps.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A8A6A1] group-hover:text-white transition-colors flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-[#FF4500]" />
                100% Insured Transit
              </span>
              <Link href="/shipping">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white group-hover:text-[#FF4500] transition-colors">
                  <span>Policy</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </motion.div>

        </div>

        {/* ── EDITORIAL FITNESS MAGAZINE COLLAGE SHOWCASE ───────────── */}
        <div className="rounded-3xl glass-dark p-8 sm:p-12 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.95)] border border-white/10 relative overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-[#FF4500]/15 blur-[120px]" />
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* ── Left Narrative Column (5 Cols) ── */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full glass-pill px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#FF4500] mb-4">
                <Layers size={12} />
                <span>Tactical Issue #01</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-5">
                BALLISTIC 900D <span className="text-electric-red">SERIES.</span>
              </h3>

              <p className="text-sm sm:text-base text-[#F5F3EF]/80 leading-relaxed font-normal mb-8">
                Engineered for serious athletes, daily training, and multi-day competitions. Features waterproof Oxford weaving, separate vented shoe chambers, and heavy-duty MOLLE webbing systems.
              </p>

              {/* Spec Checklist Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-10">
                {[
                  { label: "Waterproof 900D Weave" },
                  { label: "180° Lay-Flat Opening" },
                  { label: "Velcro Patch Zones" },
                  { label: "Reinforced Carry Straps" },
                ].map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#F5F3EF]/80">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4500]/20 text-[#FF4500] shrink-0">
                      <CheckCircle2 size={12} />
                    </div>
                    <span>{spec.label}</span>
                  </div>
                ))}
              </div>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
                <Link href="/backpacks" className="w-full sm:w-auto">
                  <button className="btn-electric-red group flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-wider w-full sm:w-auto">
                    <span>Explore 45L Packs</span>
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/allproducts" className="w-full sm:w-auto">
                  <button className="btn-glass flex items-center justify-center gap-2 rounded-full px-7 py-4 text-xs font-bold uppercase tracking-wider w-full sm:w-auto">
                    <span>Full Catalog</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* ── Right Editorial Collage Composition (7 Cols) ── */}
            <div className="lg:col-span-7 relative flex items-center justify-center py-6 sm:py-8">

              {/* Red Atmospheric Halo behind collage */}
              <div
                className="absolute inset-4 rounded-[40px] opacity-35 blur-[50px] pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, rgba(255, 69, 0,0.4) 0%, transparent 70%)",
                }}
              />

              {/* Main Collage Wrapper */}
              <div className="relative w-full max-w-[540px]">

                {/* ── 1. PRIMARY LARGE IMAGE (Rounded-3xl, 4:5 Aspect, Editorial Gradient) ── */}
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-white/15 bg-[#0B0C0E] shadow-[0_30px_70px_rgba(0,0,0,0.95)] group"
                >
                  <Image
                    src={bagImage}
                    alt="45L Tactical Military Backpack"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 550px"
                  />

                  {/* Multi-layer Editorial Vignette Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/95 via-transparent to-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/60 via-transparent to-transparent" />
                  
                  {/* Top-Right Badge Pill */}
                  <div className="absolute top-4 right-4 z-10 glass-dark rounded-full px-3.5 py-1.5 border border-white/15 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-xl">
                    <span className="text-[#FF4500] mr-1">●</span> 45L Tactical Edition
                  </div>

                  {/* Bottom Image Caption Tag */}
                  <div className="absolute bottom-5 left-6 right-6 z-10 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF4500] block mb-0.5">
                        Fabric Specification
                      </span>
                      <h4 className="text-sm font-black uppercase tracking-tight text-white">
                        900D Ballistic Oxford
                      </h4>
                    </div>
                    <span className="glass-pill rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#F5F3EF]/80">
                      Rs. 4,500
                    </span>
                  </div>
                </motion.div>

                {/* ── 2. SMALLER OVERLAPPING IMAGE (Rounded-2xl, Bottom-Left Overlap) ── */}
                <motion.div
                  initial={{ opacity: 0, y: 25, x: -15 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 z-20 w-44 sm:w-56 aspect-square overflow-hidden rounded-2xl border border-white/20 bg-[#0B0C0E] shadow-[0_25px_60px_rgba(0,0,0,0.95)] group cursor-pointer"
                >
                  <Image
                    src={sideImage}
                    alt="Ergonomic Side Bag"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <span className="text-[7px] font-black uppercase tracking-wider text-[#FF4500] block">
                        Compact Carry
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-tight text-white">
                        Ergonomic Side Bag
                      </span>
                    </div>
                    <div className="h-6 w-6 rounded-full bg-[#FF4500] flex items-center justify-center text-white shadow-[0_0_12px_#FF4500]">
                      <ArrowRight size={11} />
                    </div>
                  </div>
                </motion.div>

                {/* ── 3. FLOATING GLASS STATISTICS / SPEC CARD (Top-Left / Top-Right Overlap) ── */}
                <motion.div
                  initial={{ opacity: 0, y: -20, x: 15 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="absolute -top-6 -right-3 sm:-top-8 sm:-right-6 z-20 glass-dark rounded-2xl p-4 sm:p-5 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.92)] max-w-[210px] sm:max-w-[230px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF4500]/20 border border-[#FF4500]/40 text-[#FF4500]">
                      <Shield size={14} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#FF4500]">
                      Heavy-Duty
                    </span>
                  </div>

                  <div className="text-xl sm:text-2xl font-black text-white">
                    45 Liters
                  </div>
                  <p className="text-[10px] text-[#A8A6A1] font-normal leading-tight mt-1">
                    Dual compartment & dedicated footwear section.
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-[#A8A6A1]">
                    <span>Durability</span>
                    <span className="text-white font-black">100% Tested</span>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}