import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/ct-logo01.png";
import { ShieldCheck, Truck, RotateCcw, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background text-[#A8A6A1]">
      {/* Top electric red ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-[#FF4500]/70 to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-[#FF4500]/15 blur-3xl" />

      {/* Trust Highlights Bar */}
      <div className="border-b border-white/5 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <Truck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-white">Nepal-Wide Delivery</h4>
              <p className="text-xs text-zinc-400">Fast, insured delivery to your doorstep</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-white">Competition Tested Gear</h4>
              <p className="text-xs text-zinc-400">Built with 900D Oxford & steel buckles</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <RotateCcw size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-white">Guaranteed Satisfaction</h4>
              <p className="text-xs text-zinc-400">Hassle-free exchange on all gear</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand & Vision */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <Image
                  src={logo}
                  alt="Crossthenics Fitness"
                  width={140}
                  height={50}
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 max-w-sm">
              Empowering athletes and fitness enthusiasts across Nepal with competition-grade training equipment, hybrid belts, tactical backpacks, and essentials.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/crossthenicsfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-200 hover:border-[#FF4500]/60 hover:bg-[#FF4500]/15 hover:text-white hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/crossthenicsfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-200 hover:border-[#FF4500]/60 hover:bg-[#FF4500]/15 hover:text-white hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/9779804165664"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-200 hover:border-[#FF4500]/60 hover:bg-[#FF4500]/15 hover:text-white hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-white hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/allproducts" className="transition-colors hover:text-white hover:translate-x-1 inline-block">
                  All Gear & Equipment
                </Link>
              </li>
              <li>
                <Link href="/backpacks" className="transition-colors hover:text-white hover:translate-x-1 inline-block">
                  Tactical Backpacks
                </Link>
              </li>
              <li>
                <Link href="/latestproducts" className="transition-colors hover:text-white hover:translate-x-1 inline-block">
                  Latest Drops
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white hover:translate-x-1 inline-block">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals & Policies */}
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-wider text-white">
              Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/shipping" className="transition-colors hover:text-white hover:translate-x-1 inline-block">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="transition-colors hover:text-white hover:translate-x-1 inline-block">
                  Refund & Return Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-white hover:translate-x-1 inline-block">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* VIP Drop Alerts */}
          <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-wider text-white">
              Athlete VIP Club
            </h3>
            <p className="text-xs text-zinc-400 mb-3">
              Get notified of limited batch drops, new hybrid belts, and exclusive discounts.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="athlete@domain.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-zinc-600 outline-none focus:border-[#FF4500]/60"
              />
              <button className="btn-electric-red shrink-0 rounded-xl p-2.5" aria-label="Subscribe">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500">
          <p>© {currentYear} Crossthenics Fitness. Engineered in Nepal. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-[#FF4500] shadow-[0_0_8px_#FF4500]" />
              Store Live & Shipping Nationwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}