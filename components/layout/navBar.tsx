"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useSearch } from "@/lib/searchContext";
import { cn } from "@/lib/utils";
import Logo from "@/public/logo/ct-logo01.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/allproducts" },
  { name: "Backpacks", href: "/backpacks" },
  { name: "Latest Drops", href: "/latestproducts" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { search, setSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-5">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto relative w-full max-w-[1500px]"
      >
        {/* Main Navbar */}
        <div
          className={cn("relative mx-auto h-[72px] overflow-hidden rounded-2xl border", "border-black/[0.08] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]", "transition-all duration-300", scrolled && "rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.14)]",)}
        >
          {/* Top Highlight */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="flex h-full items-center gap-2 px-3 sm:px-5 lg:px-6 xl:px-8">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Crossthenics Fitness"
              className="group relative z-20 flex shrink-0 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={Logo}
                  alt="Crossthenics Fitness"
                  width={145}
                  height={50}
                  priority
                  className="h-[31px] w-auto object-contain sm:h-[34px]"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
            >
              <div className="flex min-w-0 max-w-full items-center rounded-full border border-black/[0.07] bg-black/[0.025] p-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative whitespace-nowrap rounded-full px-2 py-2 text-[9px] font-bold uppercase tracking-[0.08em] transition-all duration-300",
                        "xl:px-3 xl:text-[10px] 2xl:px-3.5 2xl:text-[10.5px]",
                        active
                          ? "text-black"
                          : "text-black/60 hover:text-black",
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="navbar-active"
                          className="absolute inset-0 rounded-full border border-[#FF4500]/30 bg-[#FF4500]/10 shadow-[0_0_18px_rgba(255,69,0,0.10)]"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                          }}
                        />
                      )}

                      <span className="relative z-10 flex items-center gap-1.5">
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="relative z-20 hidden shrink-0 items-center gap-1 md:flex xl:gap-1.5 2xl:gap-2">
              {/* Search */}
              <div className="flex h-9 w-9 shrink-0 items-center overflow-hidden rounded-full border border-black/[0.10] bg-black/[0.025] transition-all duration-300 hover:border-black/20 xl:w-[135px] 2xl:w-[155px]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                  <Search
                    size={14}
                    strokeWidth={1.8}
                    className="text-black/60"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search gear..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="hidden min-w-0 flex-1 bg-transparent pr-3 text-[10px] font-medium text-black outline-none placeholder:text-black/40 xl:block"
                />
              </div>

              {/* Account */}
              <Link
                href="/auth/login"
                aria-label="Account"
                className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.10] bg-black/[0.025] text-black/70 transition-all duration-300 hover:border-black/20 hover:bg-black/[0.06] hover:text-black xl:h-10 xl:w-auto xl:px-3 2xl:px-3.5"
              >
                <UserRound
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="ml-2 hidden text-[9px] font-bold uppercase tracking-[0.11em] xl:inline">
                  Account
                </span>
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                aria-label="Shopping cart"
                className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.10] bg-black/[0.025] text-black/70 transition-all duration-300 hover:border-black/20 hover:bg-black/[0.06] hover:text-black xl:h-10 xl:w-10"
              >
                <ShoppingBag
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#FF4500] shadow-[0_0_8px_rgba(255,69,0,0.8)]" />
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                aria-label="Contact"
                className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF4500] font-black text-white shadow-[0_7px_22px_rgba(255,69,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff5518] hover:shadow-[0_12px_30px_rgba(255,69,0,0.32)] xl:h-10 xl:w-auto xl:gap-1.5 xl:px-3.5 2xl:px-4"
              >
                <span className="hidden text-[9px] uppercase tracking-[0.10em] xl:inline">
                  Contact
                </span>
                <ArrowRight
                  size={13}
                  strokeWidth={2}
                  className="hidden transition-transform duration-300 group-hover:translate-x-0.5 xl:inline"
                />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="relative z-20 ml-auto flex items-center gap-2 md:hidden">
              <Link
                href="/cart"
                aria-label="Shopping cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-black/75 transition-all hover:bg-black/[0.07]"
              >
                <ShoppingBag size={16} strokeWidth={1.8} />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#FF4500]" />
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={isOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-black transition-all duration-300 hover:bg-black/[0.07]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <X size={19} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                    >
                      <Menu size={19} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 overflow-hidden rounded-2xl border border-black/[0.10] bg-white p-3 shadow-[0_25px_70px_rgba(0,0,0,0.15)] md:hidden"
              >
                {/* Mobile Search */}
                <div className="mb-3 flex items-center rounded-2xl border border-black/[0.08] bg-black/[0.03] px-3">
                  <Search
                    size={15}
                    strokeWidth={1.8}
                    className="mr-2.5 shrink-0 text-black/50"
                  />
                  <input
                    type="text"
                    placeholder="Search gear, backpacks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-11 w-full min-w-0 bg-transparent text-xs font-medium text-black outline-none placeholder:text-black/40"
                  />
                </div>

                {/* Mobile Links */}
                <nav aria-label="Mobile navigation">
                  <div className="space-y-1">
                    {navLinks.map((link) => {
                      const active = isActive(link.href);

                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "group flex items-center justify-between rounded-2xl border px-4 py-3.5 transition-all duration-300",
                            active
                              ? "border-[#FF4500]/30 bg-[#FF4500]/10"
                              : "border-transparent hover:border-black/[0.06] hover:bg-black/[0.04]",
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={cn(
                                "h-1.5 w-1.5 rounded-full",
                                active
                                  ? "bg-[#FF4500] shadow-[0_0_8px_#FF4500]"
                                  : "bg-black/20",
                              )}
                            />
                            <span
                              className={cn(
                                "text-xs font-bold uppercase tracking-[0.12em]",
                                active
                                  ? "text-black"
                                  : "text-black/60 group-hover:text-black",
                              )}
                            >
                              {link.name}
                            </span>
                          </div>
                          <ArrowRight
                            size={14}
                            className={cn(
                              "transition-all duration-300",
                              active
                                ? "text-[#FF4500]"
                                : "text-black/25 group-hover:translate-x-1 group-hover:text-black/60",
                            )}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile Buttons */}
                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/[0.08] pt-3">
                  <Link
                    href="/auth/login"
                    onClick={() => setIsOpen(false)}
                    className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-black/[0.10] bg-black/[0.03] text-[10px] font-bold uppercase tracking-[0.12em] text-black/70 transition-all hover:bg-black/[0.07] hover:text-black"
                  >
                    <UserRound size={14} />
                    Account
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#FF4500] text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-[0_8px_22px_rgba(255,69,0,0.20)] transition-all hover:bg-[#ff5518]"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </div>
  );
}

export default Navbar;
