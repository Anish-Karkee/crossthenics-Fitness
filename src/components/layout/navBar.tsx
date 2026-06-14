"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "../../../public/logo/ct-logo01.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Product", href: "/allproducts" },
    { name: "Backpacks", href: "/backpacks" },
    { name: "Latest Products", href: "/latestproducts" },
  ];

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-6xl rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
      >
        {/* Desktop & Mobile Top Bar */}
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div>
            <Image
              src={Logo}
              alt="Startup Agency Logo"
              width={200}
              height={200}
              className="h-8 w-auto cursor-pointer object-contain sm:h-10 md:h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors duration-300 hover:text-red-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <Button className="hidden md:flex cursor-pointer transition-all duration-300 hover:bg-red-200 hover:text-black">
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-4 px-6 pb-6 text-black">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="border-b border-white/10 pb-2 transition-colors duration-300 hover:text-red-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}

                <Button className="mt-2 w-full transition-all duration-300 hover:bg-red-200 hover:text-black">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}