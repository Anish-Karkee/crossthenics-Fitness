import React from "react";
import { Truck, ShieldCheck, Clock, MapPin, Sparkles } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-red px-4 py-1.5 mb-4">
            <Sparkles size={13} className="text-[#FF4500]" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FF4500]">
              Dispatch Logistics
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#F5F3EF] leading-none mb-6">
            SHIPPING <span className="text-electric-red">POLICY</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A8A6A1] max-w-xl mx-auto font-normal">
            Reliable, insured nationwide shipping across all provinces of Nepal.
          </p>
        </div>

        {/* Policy Glass Card Container */}
        <div className="rounded-3xl glass-dark p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-10 border border-white/10">
          
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <Clock size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-[#F5F3EF] mb-2">
                Order Processing & Delivery Times
              </h2>
              <p className="text-sm text-[#A8A6A1] leading-relaxed">
                All orders are dispatched from our Kathmandu facility within 24-48 hours.
                Inside Kathmandu Valley: 1-2 business days.
                Outside Kathmandu Valley (Pokhara, Biratnagar, Butwal, Chitwan, Dharan, etc.): 2-4 business days.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <Truck size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-[#F5F3EF] mb-2">
                Shipping Rates & Free Shipping
              </h2>
              <p className="text-sm text-[#A8A6A1] leading-relaxed">
                Standard delivery inside Kathmandu Valley is Rs. 100-150. Nationwide courier dispatch outside the valley is Rs. 200-300 depending on weight. Orders exceeding Rs. 5,000 qualify for complimentary shipping nationwide.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-[#F5F3EF] mb-2">
                Damaged or Lost Shipments
              </h2>
              <p className="text-sm text-[#A8A6A1] leading-relaxed">
                Every item is rigorously packaged in high-grade tamper-resistant bags. In the rare event of transit damage or delays, our dispatch support team provides instantaneous tracking updates and free replacements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
