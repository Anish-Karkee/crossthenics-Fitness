"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Logo from "@/public/logo/ct-logo01.png";
import { useSearch } from "@/lib/searchContext";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { search, setSearch } = useSearch();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/allproducts" },
    { name: "Backpacks", href: "/backpacks" },
    { name: "Latest Drops", href: "/latestproducts" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-3 sm:top-5 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto relative w-full max-w-5xl transition-all duration-500 ease-out",
          scrolled ? "max-w-4xl" : "max-w-5xl"
        )}
      >
        {/* Floating Glass Capsule Main Bar */}
        <div
          className={cn(
            "relative flex items-center justify-between rounded-full border transition-all duration-500 ease-out backdrop-blur-2xl",
            scrolled
              ? "h-14 sm:h-15 px-4 sm:px-5 bg-[#060608]/92 border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_20px_-5px_rgba(255, 69, 0,0.12)]"
              : "h-16 sm:h-17 px-5 sm:px-6 bg-[#08080c]/80 border-white/[0.09] shadow-[0_15px_40px_rgba(0,0,0,0.75)]"
          )}
        >
          {/* Subtle Top Inner Edge Highlight */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Left: Brand Logo */}
          <Link href="/" className="group flex items-center gap-2 relative z-10 shrink-0">
            <div className="relative overflow-hidden rounded-xl p-1 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={Logo}
                alt="Crossthenics Fitness"
                width={130}
                height={45}
                loading="eager"
                className={cn(
                  "w-auto object-contain transition-all duration-300",
                  scrolled ? "h-7 sm:h-8" : "h-8 sm:h-9"
                )}
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with Active Floating Pill & Glow Indicator */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs uppercase tracking-wider font-bold transition-all duration-200 rounded-full group",
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {/* Active Animated Floating Capsule Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-capsule"
                      className="absolute inset-0 rounded-full bg-[#FF4500]/18 border border-[#FF4500]/45 shadow-[0_0_18px_rgba(255, 69, 0,0.3)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover Subtle Underline / Dot Glow */}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                    {isActive && (
                      <span className="h-1 w-1 rounded-full bg-[#FF4500] shadow-[0_0_6px_#FF4500]" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Search Pill & Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Search Pill */}
            <div className="flex items-center rounded-full glass-light px-3 py-1.5 transition-all duration-300 focus-within:border-[#FF4500]/60 focus-within:bg-white/10 focus-within:ring-2 focus-within:ring-[#FF4500]/20">
              <Search size={13} className="mr-1.5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search gear..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-24 xl:w-28 bg-transparent text-xs text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:w-32 xl:focus:w-40"
              />
            </div>

            {/* Login Link */}
            <Link
              href="/auth/login"
              className="btn-glass rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all hover:border-[#FF4500]/40"
            >
              Log In
            </Link>

            {/* VIP / Contact CTA */}
            <Link
              href="/contact"
              className="btn-electric-red flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles size={12} />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-none transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Floating Glass Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-2.5 overflow-hidden rounded-3xl glass-dark p-5 shadow-[0_30px_70px_rgba(0,0,0,0.95)] md:hidden border border-white/[0.12]"
            >
              {/* Mobile Search */}
              <div className="mb-4 flex items-center rounded-2xl glass-medium px-3.5 py-2.5">
                <Search size={15} className="mr-2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search gear, belts, backpacks..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-xs text-white placeholder:text-zinc-500 outline-none"
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all",
                        isActive
                          ? "bg-[#FF4500]/18 border border-[#FF4500]/40 text-white shadow-[0_0_15px_rgba(255, 69, 0,0.18)]"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span>{link.name}</span>
                      {isActive ? (
                        <span className="h-2 w-2 rounded-full bg-[#FF4500] shadow-[0_0_8px_#FF4500]" />
                      ) : (
                        <ArrowRight size={13} className="text-zinc-600" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Action Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 border-t border-white/10 pt-4">
                <Link
                  href="/auth/login"
                  onClick={() => setIsOpen(false)}
                  className="btn-glass flex items-center justify-center rounded-xl py-3 text-center text-xs font-bold uppercase tracking-wider"
                >
                  Log In
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-electric-red flex items-center justify-center gap-1.5 rounded-xl py-3 text-center text-xs font-bold uppercase tracking-wider"
                >
                  <Sparkles size={13} />
                  <span>Contact</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}

export default Navbar;
