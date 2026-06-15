import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import landimage from "../../../public/web images/crossthenicsfitness-20260608-0001.jpg";

export default function Hero() {
  return (
    <section className="w-full py-36 px-4 md:px-6 bg-white">
      
       
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 text-black">
        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <span className="text-black uppercase tracking-wide">
            Welcome to Crossthenics Fitness
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-6">
            Your Ultimate Fitness Destination
          </h2>

          <div className="mt-4 p-6 rounded-lg bg-black/10">
            <p className="text-gray-800 text-lg leading-relaxed">
              We provide top-notch fitness equipment, supplements,
              apparel and accessories to help athletes and fitness
              enthusiasts achieve their goals. Our mission is to
              deliver high-quality products and exceptional customer
              service to support every step of your fitness journey.
              Beyond providing exceptional products, 
              we take pride in offering outstanding customer service and
              expert guidance to ensure a seamless shopping experience. 
             
            </p>
          </div>
          <Link href="/allproducts">
            <Button className="mt-8 px-6 py-3 bg-black text-white hover:bg-red-200 hover:text-black rounded-xl transition duration-300">
              View Products
            </Button>
          </Link>
        </div>
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-start md:justify-end">
          <div className="relative w-[450px] h-[450px]">
            <Image
              src={landimage}
              alt="Fitness equipment"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>

        

      </div>
    </section>
  );
}