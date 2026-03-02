import React, { memo } from "react";
import { Link } from "react-router-dom";
import { DollarSign, ArrowRight, CheckCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* CTA Box */}
        <div
          className="
            relative rounded-3xl p-8 md:p-20 text-center overflow-hidden
            bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900
            shadow-2xl border border-slate-700
          "
        >
          {/* Glow Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            
            {/* Badge */}
            <span
              className="
                inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 
                text-xs font-bold tracking-widest uppercase mb-6 
                border border-emerald-500/30
              "
            >
              Limited Franchise Slots Available
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight">
              Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Passive Income
              </span>{" "}
              Journey
            </h2>

            {/* Subtext */}
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
              Partner with <b>Tata Indicash & Hitachi</b>. Zero technical skills required.
              <br className="hidden md:block" />
              We handle setup, cash loading, and maintenance — you just earn.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center px-10 py-5 bg-white 
                  text-emerald-900 font-bold rounded-xl hover:scale-105 
                  transition-transform shadow-lg
                "
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Apply Now
              </Link>

<Link
  to="/atm-franchise/eps#check-eligibility"
  className="inline-flex items-center justify-center px-10 py-5 
  bg-transparent border border-white/20 text-white 
  font-medium rounded-xl hover:bg-white/10 transition-colors"
>
  Check Eligibility
  <ArrowRight className="w-5 h-5 ml-2" />
</Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              {[
                "Low Investment",
                "RBI Authorized",
                "Monthly Payouts",
              ].map((item, idx) => (
                <span key={idx} className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CtaSection);
