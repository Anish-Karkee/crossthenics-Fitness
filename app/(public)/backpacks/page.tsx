"use client";

import Image from "next/image";
import { useState } from "react";
import bagData from "./packs/BagData";
import { useSearch } from "@/lib/searchContext";
import { toast } from "sonner";
import { ShoppingBag, SlidersHorizontal, RotateCcw, Shield, Sparkles } from "lucide-react";

const BackpacksPage = () => {
  const { search } = useSearch();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState<"default" | "lowToHigh" | "highToLow">("default");

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`, {
      description: "Tactical backpack reserved in your gear bag.",
      style: {
        background: "#0a0a0e",
        border: "1px solid rgba(255, 69, 0, 0.5)",
        color: "#ffffff"
      }
    });
  };

  const filteredProduct = bagData
    .filter((bag) => {
      const matchesSearch = bag.name.toLowerCase().includes(search.toLowerCase()) ||
        bag.description.toLowerCase().includes(search.toLowerCase());
      const parsedMin = minPrice === "" ? undefined : Number(minPrice);
      const parsedMax = maxPrice === "" ? undefined : Number(maxPrice);

      const matchesMin = parsedMin === undefined || bag.price >= parsedMin;
      const matchesMax = parsedMax === undefined || bag.price <= parsedMax;

      return matchesSearch && matchesMin && matchesMax;
    })
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8">

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Page Header with HUGE WHITE TYPOGRAPHY */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-red px-4 py-1.5 mb-4">
            <span className="text-[20px] font-black uppercase tracking-widest text-[#ffffff]">
              Tactical 45L Series
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#F5F3EF] leading-none">
                45L TACTICAL <span className="text-electric-red">BACKPACKS</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#A8A6A1] max-w-2xl font-normal">
                Engineered with ballistic waterproof Oxford 900D fabric, high-capacity dual compartments, and patch velcro zones.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center rounded-xl glass-pill px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F5F3EF]/80">
                {filteredProduct.length} {filteredProduct.length === 1 ? "Model" : "Models"} Available
              </span>
            </div>
          </div>
        </div>

        {/* Smoked Glass Filter Bar */}
        <div className="mb-10 rounded-2xl glass-dark p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#F5F3EF]/80">
              <SlidersHorizontal size={16} className="text-[#FF4500]" />
              <span>Filters & Sorting</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex items-center gap-3">
              {/* Min Price */}
              <div className="flex items-center rounded-xl glass-medium px-3.5 py-2 text-xs">
                <span className="text-[#A8A6A1] mr-2 font-bold">Min:</span>
                <input
                  type="number"
                  min="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-20 bg-transparent text-[#F5F3EF] placeholder:text-zinc-600 outline-none"
                  placeholder="Rs. 0"
                />
              </div>

              {/* Max Price */}
              <div className="flex items-center rounded-xl glass-medium px-3.5 py-2 text-xs">
                <span className="text-[#A8A6A1] mr-2 font-bold">Max:</span>
                <input
                  type="number"
                  min="0"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-20 bg-transparent text-[#F5F3EF] placeholder:text-zinc-600 outline-none"
                  placeholder="Rs. 10,000"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center rounded-xl glass-medium px-3.5 py-2 text-xs">
                <span className="text-[#A8A6A1] mr-2 font-bold">Sort:</span>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as "default" | "lowToHigh" | "highToLow")}
                  className="bg-transparent text-[#F5F3EF] outline-none cursor-pointer"
                >
                  <option value="default" className="bg-[#09090d] text-[#F5F3EF]">Default</option>
                  <option value="lowToHigh" className="bg-[#09090d] text-[#F5F3EF]">Price: Low to High</option>
                  <option value="highToLow" className="bg-[#09090d] text-[#F5F3EF]">Price: High to Low</option>
                </select>
              </div>

              {/* Clear Button */}
              {(minPrice || maxPrice || sortOrder !== "default") && (
                <button
                  onClick={() => {
                    setMinPrice("");
                    setMaxPrice("");
                    setSortOrder("default");
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-[#FF4500]/40 bg-[#FF4500]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FF4500] hover:bg-[#FF4500]/20 transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProduct.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
              <p className="text-base text-[#A8A6A1]">
                No backpacks match your search or filter range.
              </p>
              <button
                onClick={() => {
                  setMinPrice("");
                  setMaxPrice("");
                  setSortOrder("default");
                }}
                className="btn-smoked-glass mt-4 rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredProduct.map((bag) => (
              <div
                key={bag.id}
                className="glass-card rounded-3xl p-4 flex flex-col justify-between group relative"
              >
                {/* Image Container with Framed Smoked Glass */}
                <div>
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#0B0C0E] border border-white/5 p-4 flex items-center justify-center">
                    {/* Soft Red Spotlight Behind Product */}
                    <div className="product-spotlight" />

                    <Image
                      src={bag.image}
                      alt={bag.name}
                      fill
                      className="relative z-[1] object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 rounded-md border border-white/10 bg-black/80 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#FF4500] backdrop-blur-md">
                      <Shield size={10} className="text-[#FF4500]" />
                      <span>900D Oxford</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-4">
                    <h2 className="text-base font-black uppercase tracking-tight text-[#F5F3EF] transition-colors group-hover:text-[#FF4500] line-clamp-1">
                      {bag.name}
                    </h2>
                    <p className="mt-1 text-xs text-[#A8A6A1] line-clamp-2 leading-relaxed font-normal">
                      {bag.description}
                    </p>
                  </div>
                </div>

                {/* Pricing & Add to Cart */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8A6A1]">Price</span>
                    <p className="text-lg font-black text-[#F5F3EF]">
                      Rs. {bag.price.toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => handleAddToCart(bag.name)}
                    className="btn-electric-red group/btn flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider"
                    aria-label={`Add ${bag.name} to cart`}
                  >
                    <ShoppingBag size={13} className="transition-transform duration-300 group-hover/btn:scale-110" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default BackpacksPage;
