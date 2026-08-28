"use client";

import { motion } from "framer-motion";
import {
  Star,
  Users,
  ShieldCheck,
  CreditCard,
  Truck,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Quote,
} from "lucide-react";

const trustPillars = [
  {
    icon: <Star size={20} className="text-[#FF4500] fill-[#FF4500]" />,
    value: "4.9 ★ Rating",
    title: "Customer Rating",
    description: "Rated 4.9 out of 5 stars by over 2,500+ verified athletes nationwide.",
    tag: "99.2% Satisfaction",
  },
  {
    icon: <Users size={20} className="text-[#FF4500]" />,
    value: "10,000+",
    title: "Active Athletes",
    description: "Trusted daily by powerlifters, bodybuilders, and calisthenics purists.",
    tag: "Nepal Community",
  },
  {
    icon: <ShieldCheck size={20} className="text-[#FF4500]" />,
    value: "100% Tested",
    title: "Quality Guarantee",
    description: "Built with ballistic 900D Oxford and self-locking steel mechanics.",
    tag: "Competition Grade",
  },
  {
    icon: <CreditCard size={20} className="text-[#FF4500]" />,
    value: "Secure Pay",
    title: "Payment Security",
    description: "Cash on Delivery (COD), eSewa, Khalti, and verified bank transfers.",
    tag: "100% Protected",
  },
  {
    icon: <Truck size={20} className="text-[#FF4500]" />,
    value: "All 7 Provinces",
    title: "Nationwide Delivery",
    description: "Rapid, insured dispatch from Kathmandu directly to your doorstep.",
    tag: "Fast Dispatch",
  },
  {
    icon: <RotateCcw size={20} className="text-[#FF4500]" />,
    value: "7-Day Window",
    title: "Hassle-Free Exchange",
    description: "Need a different belt size? Seamless swaps within 7 business days.",
    tag: "Risk-Free Guarantee",
  },
];

const testimonials = [
  {
    name: "Suman Shrestha",
    role: "Competitive Powerlifter (Kathmandu)",
    gear: "Hybrid Self-Locking Belt",
    rating: 5,
    quote:
      "The locking lever mechanism is rock solid. Held up perfectly through 240kg squats without slipping a single millimeter. Best gear available in Nepal.",
  },
  {
    name: "Aayush Gurung",
    role: "Calisthenics Athlete (Pokhara)",
    gear: "Pro Rope Dip Belt & Chalk",
    rating: 5,
    quote:
      "The dip belt chain distribution is flawless for weighted muscle-ups. The magnesium chalk has zero residue and gives pure grip on outdoor bars.",
  },
  {
    name: "Prashant K.C.",
    role: "CrossFit Coach (Lalitpur)",
    gear: "45L Tactical Backpack",
    rating: 5,
    quote:
      "Military-grade 900D construction is legit. Fits two pairs of lifting shoes, belt, bands, and laptop with room to spare. Delivery was under 24 hours.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative w-full overflow-hidden py-28 sm:py-36 border-t border-white/[0.06]">
      
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full opacity-20 blur-[160px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 69, 0,0.3) 0%, transparent 70%)",
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
              Verified Proof
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-6"
          >
            TRUSTED BY <span className="text-electric-red">ATHLETES.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A8A6A1] leading-relaxed font-normal"
          >
            Over 10,000+ lifters, calisthenics athletes, and coaches across Nepal trust Crossthenics for their heaviest training sessions.
          </motion.p>
        </div>

        {/* ── 6 SMALL GLASS TRUST CARDS GRID ────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-20 items-stretch">
          {trustPillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group border border-white/10 hover:border-[#FF4500]/40 shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_25px_rgba(255, 69, 0,0.15)] transition-all duration-300 relative cursor-default"
            >
              {/* Inner Specular Line */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-[#FF4500]/40 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF4500]/15 border border-[#FF4500]/35 group-hover:scale-110 group-hover:bg-[#FF4500]/25 transition-all shadow-[0_0_15px_rgba(255, 69, 0,0.25)]">
                    {item.icon}
                  </div>
                  <span className="glass-pill rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#A8A6A1] group-hover:text-zinc-200">
                    {item.tag}
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-black text-white group-hover:text-electric-red transition-colors mb-1">
                  {item.value}
                </div>

                <h3 className="text-xs font-black uppercase tracking-wider text-[#F5F3EF]/80 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#A8A6A1] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FF4500]">
                <CheckCircle2 size={12} />
                <span>Verified Guarantee</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── 3 ATHLETE TESTIMONIAL GLASS QUOTES ─────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-[#FF4500]/40 shadow-[0_20px_45px_rgba(0,0,0,0.9)] relative group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-[#FF4500] text-[#FF4500]" />
                    ))}
                  </div>
                  <Quote size={18} className="text-zinc-600 group-hover:text-[#FF4500] transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-[#F5F3EF]/80 font-normal leading-relaxed italic mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-tight text-white group-hover:text-electric-red transition-colors">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-[#A8A6A1] font-normal mt-0.5">
                    {test.role}
                  </p>
                </div>

                <span className="glass-pill-red rounded-md px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-[#FF4500]">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
