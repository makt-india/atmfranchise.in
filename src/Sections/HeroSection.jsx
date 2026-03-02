import React, { memo } from "react";
import { Link } from "react-router-dom";
import { DollarSign, Wallet, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { HERO_IMAGE_URL } from "../Data";

const HeroSection = () => {
  return (
    <section className="relative min-h-[94dvh] md:min-h-[90vh] flex items-center bg-slate-950 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
<img
  src={HERO_IMAGE_URL}
  alt="ATM Franchise Business in India"
  className="w-full h-full object-cover object-center md:object-[center_10%] opacity-90"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src =
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80";
  }}
/>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/75 to-slate-900/20 z-10"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full z-10 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-20 h-full flex flex-col justify-center">
        <div className="max-w-4xl text-left">

          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md mb-8 cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 text-xs md:text-sm font-semibold tracking-wide uppercase">
              India’s #1 Most Trusted ATM Partner
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white tracking-tight">
            Build Reliable <br className="hidden md:block" />
            <span className="text-white">Monthly Income</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              With ATM Franchise
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-blue-500 pl-6">
            Start a fully managed ATM business with <span className="text-white font-medium">zero technical effort</span>. 
            We handle installation, cash loading, security, and RBI compliance — 
            you simply earn from every transaction.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">

            <Link
              to="/contact"
              className="
              group relative inline-flex items-center justify-center px-8 py-4 
              bg-blue-600 text-white text-lg font-bold rounded-xl overflow-hidden
              shadow-[0_0_20px_rgba(37,99,235,0.5)] 
              hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]
              hover:bg-blue-700 hover:-translate-y-1
              transition-all duration-300
              "
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <DollarSign className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              Start Earning Now
            </Link>

            <Link
              to="/service#industry-partners"
              className="
              inline-flex items-center justify-center px-8 py-4 
              bg-white/5 backdrop-blur-md border border-white/10 text-white
              text-lg font-medium rounded-xl
              hover:bg-white/10 hover:border-white/20
              transition-all duration-300 group
              "
            >
              View Franchise Models
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="
            grid grid-cols-1 sm:grid-cols-3 gap-6 
            p-6 rounded-2xl 
            bg-slate-900/60 backdrop-blur-xl border border-slate-800/50
          ">
            {[
              { icon: Shield, title: "RBI Compliant", sub: "100% Authorized Network" },
              { icon: TrendingUp, title: "High ROI", sub: "35-50% Annual Return" },
              { icon: Wallet, title: "Low Investment", sub: "Quick Break-even" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-base">{item.title}</span>
                    <span className="text-slate-400 text-xs uppercase tracking-wider">{item.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
