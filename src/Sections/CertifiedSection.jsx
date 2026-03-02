import React, { memo } from "react";
import { Award, Shield, Activity, Globe, CheckCircle } from "lucide-react";


const CertifiedSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden" id="atm-compliance-certification">

      {/* Glow Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Certified & <span className="text-blue-400">Compliant</span>
            </h2>

            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Our ATM Franchise program operates under strict RBI guidelines.  
              We prioritize security, transparency, and operational excellence at every step.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                { icon: Award, title: "RBI Approved", desc: "Fully authorized model" },
                { icon: Shield, title: "Secure Network", desc: "24/7 Monitoring" },
                { icon: Activity, title: "High Uptime", desc: "99.9% Availability" },
                { icon: Globe, title: "Pan-India", desc: "Nationwide presence" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start">
                    <Icon className="w-6 h-6 text-blue-400 mt-1 mr-4 shrink-0" />
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Card */}
          <div className="relative mt-8 md:mt-0">
            {/* Glow Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-30 blur-xl rounded-2xl"></div>

            <div className="relative bg-slate-800 border border-slate-700 p-6 md:p-10 rounded-2xl shadow-2xl">

              <div className="flex items-center mb-6 md:mb-8">
                <CheckCircle className="w-8 h-8 text-emerald-400 mr-4" />
                <h3 className="text-xl md:text-2xl font-bold">Compliance Checklist</h3>
              </div>

              <ul className="space-y-4 md:space-y-5 mt-6">
                {[
                  "RBI Guidelines Adherence",
                  "EMV Chip Security",
                  "Real-time Cash Forecasting",
                  "Secure Cash Logistics",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-300 text-base md:text-lg"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CertifiedSection);
