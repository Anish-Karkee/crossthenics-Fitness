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
    [rawX, rawY],
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">


      <div
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] items-center px-5 pb-16 pt-28 sm:px-8 md:pt-32 lg:px-10 lg:pb-0 lg:pt-0 xl:px-14">
        <div
          className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[52%_48%] lg:gap-0">
          {/* LEFT SIDE — HERO COPY */}

          <div className="relative z-20 flex flex-col items-start lg:pr-8 xl:pr-14">
            {/* Badge */}

            <motion.div {...fadeIn(0.05)} className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF4500]/30 bg-[#FF4500]/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#FF4500]">
                Premium Fitness Equipment
              </span>

              <span
                className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-400 sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF4500]" />
                Made in Nepal
              </span>
            </motion.div>

            {/* MAIN HEADING */}

            <motion.h1 {...fadeUp(0.12)} className="mb-7 max-w-[760px] font-black uppercase leading-[0.86] tracking-[-0.045em] text-white" style={{fontSize: "clamp(3.5rem, 7vw, 6.8rem)",}}>
              BUILD YOUR
              <br />
              <span className="text-[#FF4500] lg:text-[#FF4500]">STRONGEST</span>
              <br />
              SELF.
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p {...fadeUp(0.22)} className="mb-8 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base lg:text-[17px]">
              Nepal&apos;s premier competition-tested gear. Hybrid self-locking
              belts, ballistic 900D Oxford backpacks, and magnesium chalk —
              built for athletes who refuse to settle.
            </motion.p>

            {/* BUTTONS */}

            <motion.div {...fadeUp(0.3)} className="relative mb-10 flex w-full flex-wrap gap-3 sm:w-auto">
              <GlowOrb variant="orange" size="sm" blur="md" animation="pulse" className="-left-8 -top-8 opacity-30"/>

              <Link href="/allproducts" className="group relative z-10 w-full sm:w-auto">
                <button className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#FF4500] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_10px_30px_rgba(255,69,0,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff5518] hover:shadow-[0_15px_40px_rgba(255,69,0,0.30)] sm:w-auto">
                  <span>Explore Products</span>

                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5"/>
                </button>
              </Link>

              <Link href="/backpacks" className="group relative z-10 w-full sm:w-auto">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/4 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/08 sm:w-auto">
                  <span>Discover Crossthenics</span>

                </button>
              </Link>
            </motion.div>

            {/* STATS */}

            <motion.div initial={{opacity: 0,y: 28,}}
              whileInView={{opacity: 1,y: 0,}}
              viewport={{once: true,margin: "-50px",}}
              transition={{duration: 0.8,ease: "easeOut",delay: 0.38,}}
              className="grid w-full max-w-xl grid-cols-3 gap-2 border-t border-white/10 pt-5 sm:gap-5">
              {[
                {
                  value: "10K+",
                  label: "Community",
                  icon: <Users size={14} />,
                },
                {
                  value: "50+",
                  label: "Products",
                  icon: <Dumbbell size={14} />,
                },
                {
                  value: "4.9★",
                  label: "Rating",
                  icon: <Star size={14} />,
                },
              ].map((stat, i) => (
                <motion.div key={i} initial={{opacity: 0,y: 15,}}
                  whileInView={{opacity: 1,y: 0,}}
                  viewport={{once: true,}}
                  transition={{duration: 0.5,delay: 0.42 + i * 0.1,}}
                  className="group">
                  <div className="mb-1.5 flex items-center gap-1.5 text-[#FF4500]">
                    {stat.icon}

                    <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </span>
                  </div>

                  <div className="text-lg font-black tracking-tight text-white sm:text-2xl">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE — PRODUCT / FITNESS IMAGE */}

          <motion.div initial={{opacity: 0,x: 40,}}
            animate={{opacity: 1,x: 0,}}
            transition={{duration: 0.9,ease: "easeOut",delay: 0.18,}}
            className="relative z-10 flex min-h-[520px] items-center justify-center lg:min-h-[700px] lg:justify-end">
            {/* ORANGE CIRCLE / GRAPHIC BEHIND IMAGE */}

            <div className="pointer-events-none absolute right-[8%] top-1/2 h-[390px] w-[390px] -translate-y-1/2 rounded-full border-[28px] border-black/20 lg:h-[560px] lg:w-[560px] lg:border-[38px]"/>

            <div className="pointer-events-none absolute right-[13%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-black/20 lg:h-[450px] lg:w-[450px]"/>

            {/* IMAGE FRAME */}

            <motion.div ref={frameRef} style={{ rotateX, rotateY, transformPerspective: 900, }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[470px] lg:-mr-8 lg:max-w-[590px] xl:-mr-14">
              {/* Image shadow */}

              <div className="pointer-events-none absolute inset-10 rounded-full bg-black/40 blur-[70px"/>

              {/* MAIN IMAGE */}

              <div
                className="relative overflow-hidden rounded-[30px] bg-transparent"
                style={{ aspectRatio: "4/5" }}
              >
                {/* Parallax image */}

                <motion.div style={{ x: photoX, y: photoY, }} className="absolute inset-[-7%]">
                  <Image
                    src={landimage}
                    alt="Crossthenics Premium Fitness Equipment"
                    fill
                    priority
                    className="object-cover object-center scale-[1.06] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>

                {/* IMAGE TREATMENT - Much lighter than previous glass version. */}

                <div className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(5,5,5,0.75) 0%, rgba(5,5,5,0.10) 40%, transparent 70%)", }}/>

                <div className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(to left, rgba(255,69,0,0.12), transparent 45%)",}}/>

                {/* Mouse light */}

                <motion.div className="pointer-events-none absolute inset-0 mix-blend-screen" style={{ background: useTransform([lightX, lightY], ([lx, ly]: number[]) => `radial-gradient(circle at ${lx}% ${ly}%, rgba(255,255,255,0.10) 0%, transparent 45%)`), }}/>

                {/* IMAGE INFORMATION */}

                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <div className="rounded-2xl border border-white/15 bg-black/65 p-4 backdrop-blur-md">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.2em] text-[#FF4500]">
                          Premium Quality
                        </span>

                        <h3 className="text-sm font-black uppercase tracking-tight text-white sm:text-base">
                          Fitness Equipment
                        </h3>

                        <p className="mt-1 text-[9px] text-zinc-400 sm:text-[10px]">
                          Competition-grade. Athlete-tested. Nepal-built.
                        </p>
                      </div>

                      <div className="flex shrink-0 flex-col items-end">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={9}
                              className="fill-[#FF4500] text-[#FF4500]"
                            />
                          ))}
                        </div>

                        <span className="mt-1 text-sm font-black text-white">
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOP LEFT SPEC CARD */}

              <motion.div initial={{opacity: 0,y: -15,}}
                animate={{opacity: 1, y: 0,}}
                transition={{duration: 0.6, delay: 0.55,}}
                className="absolute left-0 top-8 z-30 rounded-2xl border border-white/10 bg-[#111111]/90 px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.45)] backdrop-blur-md sm:left-[-25px] lg:left-[-35px] lg:top-[15%]"
              >
                <span className="mb-0.5 block text-[8px] font-black uppercase tracking-widest text-[#FF4500]">
                  Fabric Spec
                </span>

                <span className="text-[10px] font-black uppercase tracking-tight text-white sm:text-xs">
                  900D Military Oxford
                </span>
              </motion.div>

              {/* NEW DROP BADGE */}

              <motion.div initial={{ opacity: 0,scale: 0.8,}}
                animate={{opacity: 1, scale: 1,}}
                transition={{duration: 0.5, delay: 0.65,}}
                className="absolute right-0 top-4 z-30 rounded-full bg-[#111111] px-3 py-2 shadow-xl sm:right-[-15px] lg:right-[-20px] lg:top-[12%]"
              >
                <span className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-[#FF4500] sm:text-[9px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4500]" />
                  New Drop
                </span>
              </motion.div>

              {/* FLOATING BELT CARD */}

              <motion.div initial={{opacity: 0,y: 20,x: 10,}}
                animate={{opacity: 1,y: 0,x: 0,}}
                transition={{duration: 0.7,delay: 0.75,}}
                className="absolute bottom-0 right-0 z-30 w-24 sm:w-28 lg:-bottom-3 lg:-right-4 xl:-right-8"
              >
                <Link href="/allproducts">
                  <div className="rounded-2xl border border-white/15 bg-[#111111] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-[#0B0C0E]">
                      <Image src={beltimage} alt="Hybrid Self-Locking Belt" fill className="object-cover transition-transform duration-500 hover:scale-110" sizes="112px"/>
                      <div className="absolute inset-0" style={{background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent 60%)",}}/>
                      <span className="absolute bottom-1.5 left-1.5 text-[7px] font-black uppercase tracking-wider text-[#FF4500]">Flagship</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE ORANGE ACCENT */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-[#FF4500] lg:hidden"/>
    </section>
  );
}
