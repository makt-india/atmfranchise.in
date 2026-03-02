import { ArrowRight, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTASection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:22px_22px] opacity-80 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          Ready to Secure Your
          <span className="block text-indigo-600">
            ATM Business Advantage?
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg">
          Activate Care360 protection and strengthen your ATM franchise
          with structured compliance, financial safeguards, and operational stability.
        </p>

        {/* Icon Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Risk Protection</h4>
              <p className="text-sm text-slate-600">
                Structured support against compliance and payout risks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TrendingUp className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Growth Support</h4>
              <p className="text-sm text-slate-600">
                Enhanced visibility and operational efficiency.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Priority Assistance</h4>
              <p className="text-sm text-slate-600">
                Faster resolution and expert response team.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 bg-indigo-600 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all group shadow-lg shadow-indigo-600/30"
          >
            Activate Care360 Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
