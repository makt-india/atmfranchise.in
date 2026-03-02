import React, { memo } from "react";
import {
  Lock,
  ShieldCheck,
  Handshake,
  Scale,
  FileCheck
} from "lucide-react";

const ComplianceModelSection = memo(({ setIsModalOpen }) => {
  return (
    <section
      className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden"
      id="redflag"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] -mr-60 -mt-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] -ml-60 -mb-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Lock className="w-3 h-3" />
            Compliance & Transparency
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            How the ATM Franchise
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Model Actually Works
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            We are not an ATM operator. We operate as a structured facilitation
            partner connecting investors with RBI-authorized White Label ATM
            operators while managing approvals and coordination.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Investment */}
          <div className="group bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-emerald-400 w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
              Structured Investment
            </h3>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Capital allocation, security deposits, and infrastructure costs
              are clearly defined. Payments follow official operator-approved
              procedures without informal handling.
            </p>
          </div>

          {/* Coordination */}
          <div className="group bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Handshake className="text-blue-400 w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
              Process Coordination
            </h3>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              We streamline site verification, paperwork, compliance checks,
              and engineer scheduling. Operational management remains under
              the licensed operator’s secure framework.
            </p>
          </div>

          {/* Legal */}
          <div className="group bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Scale className="text-cyan-400 w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
              Regulatory Alignment
            </h3>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Installations are executed in association with RBI-authorized
              White Label ATM operators such as Hitachi, India1, and EPS,
              under formal compliance structures.
            </p>
          </div>
        </div>

        {/* Verification Box */}
        <div className="mt-20">
          <div className="relative p-px rounded-3xl overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-emerald-500/30" />

            <div className="relative bg-slate-950/90 backdrop-blur-xl rounded-3xl p-8 md:p-10">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <FileCheck className="w-6 h-6 text-emerald-400" />
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Mandatory Due Diligence
                    </h4>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
                      Investors are advised to independently verify GSTIN,
                      company registration, and operator authorization before
                      executing agreements.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen?.(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-colors shrink-0"
                >
                  Our Credentials
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
});

export default ComplianceModelSection;
