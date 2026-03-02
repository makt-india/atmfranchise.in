import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Globe, ArrowRight } from "lucide-react";
import { partnersData } from "../Data";

const TrustedPartnersSection = () => {
  const partners = partnersData || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    if (partners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [partners.length]);

  if (!partners.length) return null;

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden relative">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.25,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
            Industry Leaders
          </h2>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Our Strategic <span className="text-blue-600">Banking Partners</span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            We collaborate with India’s largest RBI-certified White Label ATM operators—
            <b className="text-slate-800"> Tata Indicash, Hitachi, India1, EPS</b>—to give you true reliability.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-200 relative min-h-[450px] md:min-h-[350px]">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex-shrink-0 grid md:grid-cols-2 h-full">

                  {/* Logo Side */}
                  <div className="bg-slate-100 p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
                    {partner.imageUrl ? (
                      <img
                        src={partner.imageUrl}
                        alt={`${partner.name} ATM Franchise India`}
                        className="max-h-24 md:max-h-32 object-contain mix-blend-multiply hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="text-center">
                        <Globe className="w-16 h-16 md:w-20 md:h-20 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-slate-900">{partner.name}</h3>
                      </div>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">
                        Premium Partner
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {partner.name}
                    </h3>

                    <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                      {partner.description}
                    </p>

                    <Link
                      to={partner.path}
                      className="inline-flex items-center text-emerald-600 font-bold text-lg hover:text-emerald-700 hover:underline decoration-2 underline-offset-4 transition-all group"
                    >
                      Explore Franchise Models
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Controls */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1))}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white text-slate-900 p-4 rounded-full shadow-xl hover:bg-blue-50 hover:text-blue-600 hover:scale-110 transition-all z-20 border border-slate-100"
            aria-label="Previous Partner"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % partners.length)}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white text-slate-900 p-4 rounded-full shadow-xl hover:bg-blue-50 hover:text-blue-600 hover:scale-110 transition-all z-20 border border-slate-100"
            aria-label="Next Partner"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile Pagination Dots */}
          <div className="flex md:hidden justify-center gap-3 mt-8">
            {partners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex ? "bg-blue-600 w-8 h-2.5" : "bg-slate-300 w-2.5 h-2.5"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TrustedPartnersSection);
