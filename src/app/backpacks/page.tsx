"use client";

import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bagData from "./packs/BagData";
import { useSearch } from "@/lib/searchContext";
import { toast } from "sonner";

const Backpack = () => {
  const { search } = useSearch();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState<"default" | "lowToHigh" | "highToLow">("default");

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`);
  };

  const filteredProduct = bagData
    .filter((bag) => {
      const matchesSearch = bag.name.toLowerCase().includes(search.toLowerCase());
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
    <section className="w-full py-36 px-4 md:px-6 flex bg-gray-300">
      <div className="max-w-6xl mx-auto text-black w-full">
        <div className="mb-6 rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">Min Price</label>
              <input
                type="number"
                min="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-orange-500"
                placeholder="0"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">Max Price</label>
              <input
                type="number"
                min="0"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-orange-500"
                placeholder="10000"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">Sort By</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "default" | "lowToHigh" | "highToLow")}
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-orange-500"
              >
                <option value="default">Default</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>

            <Button
              onClick={() => {
                setMinPrice("");
                setMaxPrice("");
                setSortOrder("default");
              }}
              className="bg-black text-white hover:bg-orange-500 hover:text-black"
            >
              Clear
            </Button>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {Array.isArray(filteredProduct) && filteredProduct.length === 0 ? (
            <p className="col-span-full text-gray-700">There is no product matching your search or price range.</p>
          ) : (
            filteredProduct.map((product) => (
              <Card
                key={product.id}
                className="p-3 md:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10  transition-all  duration-300  hover:bg-white/15  hover:scale-[1.02]   hover:shadow-xl "
              >
                <div className="mt-2 p-2 md:p-3 rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="rounded-3xl object-cover mb-4 transition-transform duration-300 hover:scale-105"
                  />
                  <h2 className="text-xl md:text-xl  text-black mt-3 mb-6">
                    {product.name}
                  </h2>
                  <p className="hidden md:block text-gray-800 text-lg leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <p className="text-xl font-semibold text-black mb-4">
                    Rs {product.price}
                  </p>
                  <Button
                    onClick={() => handleAddToCart(product.name)}
                    className="bg-black text-white hover:bg-orange-500 hover:text-black hover:scale-115"
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Backpack;
