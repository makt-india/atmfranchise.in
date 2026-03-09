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
          srcSet={`
            ${HERO_IMAGE_URL}?w=640 640w,
            ${HERO_IMAGE_URL}?w=1024 1024w,
            ${HERO_IMAGE_URL}?w=1600 1600w
          `}
          sizes="(max-width:768px) 100vw, 100vw"
          width="1600"
          height="900"
          alt="ATM Franchise Business in India"
          className="w-full h-full object-cover object-center md:object-[center_10%] opacity-90"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/75 to-slate-900/20 z-10"></div>

        {/* Soft Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[80px] rounded-full z-10 pointer-events-none"></div>

      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-20 h-full flex flex-col justify-center">

        <div className="max-w-4xl text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md mb-8">

            <span className="h-3 w-3 bg-emerald-500 rounded-full"></span>

            <span className="text-slate-300 text-xs md:text-sm font-semibold tracking-wide uppercase">
              India’s Trusted ATM Franchise Network
            </span>

          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white tracking-tight">

            Build Reliable <br className="hidden md:block" />

            <span className="text-white">Monthly Income</span> <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              With ATM Franchise
            </span>

          </h1>

          {/* Subtext */}
         <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light border-l-4 border-blue-500 pl-6">
  Start a fully managed ATM business with 
  <span className="text-white font-medium"> zero technical effort</span>. 
  Our team provides complete setup, ongoing guidance, and operational assistance — 
  handling installation, security, monitoring, and full RBI compliance so you can 
  focus purely on earning passive income.
</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">

            <Link
              to="/contact"
              className="
              group inline-flex items-center justify-center px-8 py-4 
              bg-blue-600 text-white text-lg font-bold rounded-xl
              shadow-[0_0_20px_rgba(37,99,235,0.5)] 
              hover:bg-blue-700 hover:-translate-y-1
              transition-all duration-300
              "
            >
              <DollarSign className="w-6 h-6 mr-2" />
              Start Earning Now
            </Link>

            <Link
              to="/service#industry-partners"
              className="
              inline-flex items-center justify-center px-8 py-4 
              bg-white/5 backdrop-blur-md border border-white/10 text-white
              text-lg font-medium rounded-xl
              hover:bg-white/10 transition-all duration-300
              "
            >
              View Franchise Models
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/50">

            {[
              { icon: Shield, title: "RBI Compliant", sub: "Authorized Network" },
              { icon: TrendingUp, title: "High ROI", sub: "35–50% Return" },
              { icon: Wallet, title: "Low Investment", sub: "Fast Break-even" }
            ].map((item, idx) => {

              const Icon = item.icon;

              return (
                <div key={idx} className="flex items-center gap-4">

                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white font-bold text-base">
                      {item.title}
                    </span>
                    <span className="text-slate-400 text-xs uppercase tracking-wider">
                      {item.sub}
                    </span>
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