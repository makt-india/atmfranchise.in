import React, { memo } from "react";
import { whyAtmFranchiseData } from "../Data";

const WhyAtmFranchiseSection = () => {
  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-b from-slate-50 via-blue-50/80 to-white overflow-hidden">

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.25,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-sm md:text-base font-bold text-blue-600 uppercase tracking-widest mb-3">
            Why Invest with ATMFranchise
          </h2>

          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Your Gateway to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Recession-Proof Passive Wealth
            </span>
          </h3>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
            Unlock steady monthly earnings with a business that works 24/7.  
            Join India's expanding cash economy with{" "}
            <span className="text-slate-900 font-semibold">zero operational hassle</span> 
            and guaranteed ROI.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
          {whyAtmFranchiseData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group p-6 md:p-8 bg-white rounded-2xl 
                  border border-gray-100
                  shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_20px_40px_-4px_rgba(37,99,235,0.15)]
                  hover:border-blue-100
                  transition-all duration-300 hover:-translate-y-2
                  relative z-10
                "
              >
                {/* Icon Block */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>

                {/* Description */}
                <div
                  className="text-gray-600 text-sm leading-relaxed font-medium"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(WhyAtmFranchiseSection);
