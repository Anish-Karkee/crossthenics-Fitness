"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Dumbbell, Flame, ShoppingBag } from "lucide-react";
import beltImage from "@/public/web images/belt1.jpg";
import bagImage from "@/public/web images/bag.jpg";
import chalkImage from "@/public/web images/chalk.jpg";
import athleteImage from "@/public/web images/crossthenicsfitness-20260608-0001.jpg";

const categories = [
  {
    id: "equipment",
    name: "Equipment",
    tagline: "Hybrid Belts & Steel Quick-Locks",
    count: "12+ Gear Items",
    badge: "Competition Ready",
    icon: <Dumbbell size={16} />,
    image: beltImage,
    href: "/allproducts",
    accent: "from-red-600/30",
  },
  {
    id: "accessories",
    name: "Tactical & Bags",
    tagline: "45L Ballistic Oxford & EDC Packs",
    count: "8+ Models",
    badge: "900D Military",
    icon: <Shield size={16} />,
    image: bagImage,
    href: "/backpacks",
    accent: "from-orange-600/30",
  },
  {
    id: "grip",
    name: "Grip & Fuel",
    tagline: "Magnesium Chalk Blocks & Powder",
    count: "Pure Traction",
    badge: "Zero Slip",
    icon: <Flame size={16} />,
    image: chalkImage,
    href: "/allproducts",
    accent: "from-red-500/30",
  },
  {
    id: "apparel",
    name: "Athlete Wear",
    tagline: "Custom Velcro Patches & Gear",
    count: "Competition",
    badge: "Battle Tested",
    icon: <ShoppingBag size={16} />,
    image: athleteImage,
    href: "/allproducts",
    accent: "from-crimson-600/30",
  },
];

export default function CategorySection() {
  return (
    <section className="relative w-full overflow-hidden py-28 sm:py-36 border-t border-white/[0.06]">
      
      {/* Background Subtle Ambient Orb */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full opacity-20 blur-[160px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 69, 0,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── SECTION HEADER ────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full glass-pill-red px-4 py-1.5 mb-5">
            <span className="text-l font-black uppercase tracking-widest text-[#FFFFFF]">
              Browse By Category
            </span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-6">
            DISCOVER THE <span className="text-electric-red">ARSENAL.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-base sm:text-lg text-[#A8A6A1] leading-relaxed font-normal">
            Precision-crafted for maximum performance. Select a category to explore competition-grade gear.
          </motion.p>
        </div>

        {/* ── 4 CINEMATIC CATEGORY CARDS GRID ───────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {categories.map((cat, idx) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} whileHover={{ y: -6 }} className="relative overflow-hidden rounded-[28px] border border-white/10 hover:border-[#FF4500]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(255, 69, 0,0.22)] transition-all duration-500 group aspect-[3/4] flex flex-col justify-between p-6 cursor-pointer bg-[#0B0C0E]">
              {/* ── Large Background Image with Zoom ─────────────────── */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Cinematic Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                
              </div>

              {/* ── Top Header Badge Pill ────────────────────────────── */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 backdrop-blur-md">
                 
                  {cat.badge}
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full glass-dark text-white/80 border border-white/10 group-hover:text-white group-hover:border-[#FF4500]/40 transition-colors">
                  {cat.icon}
                </div>
              </div>

              {/* ── Bottom Content Glass Panel ───────────────────────── */}
              <div className="relative z-10 pt-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF4500] block mb-1">
                  {cat.count}
                </span>

                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1.5 group-hover:text-electric-red transition-colors duration-300">
                  {cat.name}
                </h3>

                <p className="text-xs text-[#F5F3EF]/80 font-normal leading-relaxed mb-4 line-clamp-2">
                  {cat.tagline}
                </p>

                {/* ── Animated "Explore →" Button ──────────────────────── */}
                <Link href={cat.href} className="block w-full">
                  <div className="flex items-center justify-between rounded-full glass-dark px-4 py-2.5 border border-white/10 group-hover:border-[#FF4500]/50 group-hover:bg-[#FF4500] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                    <span className="text-xs font-black uppercase tracking-wider text-white">
                      Explore
                    </span>
                    <div className="flex items-center justify-center text-white">
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
