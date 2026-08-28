import React from "react";
import { FileText, Shield, Sparkles, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-red px-4 py-1.5 mb-4">
            <Sparkles size={13} className="text-[#FF4500]" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FF4500]">
              Legal Terms
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#F5F3EF] leading-none mb-6">
            TERMS & <span className="text-electric-red">CONDITIONS</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A8A6A1] max-w-xl mx-auto font-normal">
            Standard user conditions and guidelines for purchasing Crossthenics equipment.
          </p>
        </div>

        {/* Terms Glass Card Container */}
        <div className="rounded-3xl glass-dark p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-10 border border-white/10">
          
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-[#F5F3EF] mb-2">
                1. General Agreement
              </h2>
              <p className="text-sm text-[#A8A6A1] leading-relaxed">
                By purchasing or using equipment manufactured and distributed by Crossthenics Fitness in Nepal, you agree to these operational terms and conditions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <Scale size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-[#F5F3EF] mb-2">
                2. Product Availability & Pricing
              </h2>
              <p className="text-sm text-[#A8A6A1] leading-relaxed">
                All prices are listed in Nepalese Rupees (NPR) and include standard domestic sales taxes. Limited batch drops are produced in small artisanal runs and are sold on a first-come, first-served basis.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FF4500]/30 bg-[#FF4500]/10 text-[#FF4500]">
              <Shield size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-[#F5F3EF] mb-2">
                3. Proper Athletic Usage
              </h2>
              <p className="text-sm text-[#A8A6A1] leading-relaxed">
                Crossthenics gear is designed specifically for weightlifting, powerlifting, bodybuilding, calisthenics, and fitness training. Users are responsible for inspecting locking mechanisms and buckles prior to heavy lifts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
