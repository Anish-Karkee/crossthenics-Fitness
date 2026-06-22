"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "../../components/ui/button";
import bagData from "./packs/BagData";
import { useSearch } from "@/lib/searchContext";

const Backpack = () => {
  const { search } = useSearch();

  const filterdProduct = bagData.filter((bag) => {
    return bag.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <section className="w-full py-36 px-4 md:px-6 flex bg-gray-300">
      <div className="max-w-6xl mx-auto text-black">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {Array.isArray(filterdProduct) && filterdProduct.length === 0 ? (
            <p>There is no any product with this name.</p>
          ) : (
            filterdProduct.map((product) => (
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
                  <Button className="bg-black text-white hover:bg-orange-500 hover:text-black hover:scale-115">
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
