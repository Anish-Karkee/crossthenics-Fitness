"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ShoppingBag,
  Heart,
  ArrowRight,
  Sparkles,
  Shield,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { productData } from "@/app/(public)/allproducts/products/ProductData";

// Curate featured flagship showcase items with categories and ratings
const showcaseItems = [
  {
    id: 1,
    name: "Velcro Patch Hybrid Belt",
    category: "Lifting Belts",
    price: 3800,
    rating: 4.9,
    reviews: 142,
    badge: "Bestseller",
    description: "Self-locking steel lever with heavy-gauge reinforced nylon.",
    image: productData[0].image,
    spec: "600+ lbs Rated",
  },
  {
    id: 2,
    name: "45L Tactical Backpack",
    category: "Tactical Carry",
    price: 7500,
    rating: 5.0,
    reviews: 98,
    badge: "Military Spec",
    description: "Ballistic 900D Oxford with isolated footwear chamber.",
    image: productData[1].image,
    spec: "900D Waterproof",
  },
  {
    id: 3,
    name: "Pro Rope Dip Belt",
    category: "Calisthenics",
    price: 3900,
    rating: 4.9,
    reviews: 76,
    badge: "Pro Grade",
    description: "Dual-reinforced rope construction for heavy weighted pull-ups.",
    image: productData[2].image,
    spec: "250kg Tested",
  },
  {
    id: 4,
    name: "Power Grip Chalk 100g",
    category: "Grip & Fuel",
    price: 700,
    rating: 4.8,
    reviews: 210,
    badge: "Pure Formula",
    description: "Pharmaceutical magnesium carbonate block for maximum friction.",
    image: productData[3].image,
    spec: "Zero Slip",
  },
  {
    id: 5,
    name: "Ergonomic Side Bag",
    category: "Daily Carry",
    price: 1800,
    rating: 4.9,
    reviews: 84,
    badge: "Gym Essential",
    description: "Compact dual-compartment EDC bag for gym essentials.",
    image: productData[4].image,
    spec: "Anti-Tear Oxford",
  },
  {
    id: 6,
    name: "Competitive Powerlifting Belt",
    category: "Lifting Belts",
    price: 5500,
    rating: 5.0,
    reviews: 62,
    badge: "Competition",
    description: "10mm precision-stitched competition belt with steel prong.",
    image: productData[10].image,
    spec: "IPF Spec",
  },
];

const categories = ["All", "Lifting Belts", "Tactical Carry", "Calisthenics", "Grip & Fuel"];

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number, name: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      if (isFav) {
        toast.info(`Removed from wishlist`, {
          description: name,
        });
        return prev.filter((item) => item !== id);
      } else {
        toast.success(`Saved to wishlist`, {
          description: name,
        });
        return [...prev, id];
      }
    });
  };

  const handleAddToCart = (name: string, price: number) => {
    toast.success(`${name} added to cart!`, {
      description: `Rs. ${price.toLocaleString()} • Reserved in your gear bag.`,
      style: {
        background: "#08080C",
        border: "1px solid rgba(255, 69, 0, 0.4)",
        color: "#ffffff",
      },
    });
  };

  const filteredItems = selectedCategory === "All"
    ? showcaseItems
    : showcaseItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="relative w-full overflow-hidden py-28 sm:py-36 border-t border-white/[0.06]">
      
      {/* Subtle Ambient Red Glow Flare */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full opacity-20 blur-[150px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 69, 0,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── SECTION HEADER ────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass-pill-red px-4 py-1.5 mb-5"
          >
            <span className="text-lg font-black uppercase tracking-widest text-[#ffffff]">
              Flagship Collection
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-6"
          >
            <span className="text-electric-red">TRAIN</span> WITH THE BEST.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A8A6A1] leading-relaxed font-normal"
          >
            Competition-tested lifting belts, ballistic Oxford backpacks, and high-friction calisthenics gear engineered in Nepal.
          </motion.p>

          {/* ── CATEGORY FILTER PILLS ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 flex-wrap mt-8"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isSelected
                      ? "text-white shadow-[0_0_15px_rgba(255, 69, 0,0.3)] border border-[#FF4500]/50 bg-[#FF4500]/20"
                      : "text-[#A8A6A1] glass-pill hover:text-white hover:border-white/20"
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ── PRODUCT CARDS GRID ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((product, idx) => {
              const isFavorite = favorites.includes(product.id);
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-3xl p-5 flex flex-col justify-between group relative border border-white/10 hover:border-[#FF4500]/50 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(255, 69, 0,0.18)] transition-all duration-500"
                >
                  <div>
                    {/* ── IMAGE CONTAINER ───────────────────────────── */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black/90 border border-white/5 p-4 flex items-center justify-center">
                      {/* Soft Red Spotlight Behind Product */}
                      <div className="product-spotlight" />

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="relative z-[1] object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                        
                          {product.badge}
                       
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFavorite(product.id, product.name);
                        }}
                        className={`absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                          isFavorite
                            ? "border-[#FF4500] bg-[#FF4500]/20 text-[#FF4500] shadow-[0_0_12px_#FF4500]"
                            : "border-white/10 bg-black/60 text-[#A8A6A1] hover:border-[#FF4500]/40 hover:text-white backdrop-blur-md"
                        }`}
                        aria-label={`Save ${product.name} to wishlist`}
                      >
                        <Heart
                          size={14}
                          className={isFavorite ? "fill-[#FF4500] text-[#FF4500]" : ""}
                        />
                      </button>

                      {/* Bottom Spec Badge */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-md border border-white/10 bg-black/80 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#F5F3EF]/80 backdrop-blur-md">
                        <Shield size={10} className="text-[#FF4500]" />
                        <span>{product.spec}</span>
                      </div>
                    </div>

                    {/* ── METADATA & TITLE ──────────────────────────── */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#A8A6A1]">
                          {product.category}
                        </span>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          <Star size={11} className="fill-[#FF4500] text-[#FF4500]" />
                          <span className="text-xs font-black text-white">{product.rating}</span>
                          <span className="text-[10px] text-[#A8A6A1]">({product.reviews})</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-[#FF4500] line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#A8A6A1] font-normal line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* ── PRICING & ADD TO CART CTA ───────────────────── */}
                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#A8A6A1] block">
                        Price
                      </span>
                      <p className="text-lg sm:text-xl font-black text-white">
                        Rs. {product.price.toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product.name, product.price)}
                      className="btn-electric-red group/btn flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider shadow-[0_4px_15px_rgba(255, 69, 0,0.35)]"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingBag size={13} className="transition-transform duration-300 group-hover/btn:scale-110" />
                      <span>Add</span>
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── BOTTOM CATALOG LINK BANNER ────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between rounded-3xl glass-dark p-6 sm:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] gap-4">
          <div>
            <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white">
              Looking for our complete inventory?
            </h4>
            <p className="text-xs sm:text-sm text-[#A8A6A1]">
              Browse all sizes, tactical colors, competition dip chains, and gym packs.
            </p>
          </div>

          <Link href="/allproducts" className="shrink-0 w-full sm:w-auto">
            <button className="btn-electric-red group flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-wider w-full sm:w-auto">
              <span>View All Products</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
