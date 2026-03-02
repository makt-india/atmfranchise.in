import {
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Care360Section() {
  const featureGroups = [
    {
      title: "Strategic Growth",
      icon: <TrendingUp className="w-6 h-6 text-indigo-400" />,
      items: [
        "Premium Google Business Optimization",
        "Hyper-Local ATM Discoverability",
        "Expert Settlement Account Setup",
      ],
    },
    {
      title: "Asset Security",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      items: [
        "Automated Payout Discrepancy Audits",
        "Advanced 194N Tax Compliance",
        "Conflict Resolution & Legal Support",
      ],
    },
    {
      title: "Priority Infrastructure",
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      items: [
        "Priority Insurance Claim Handling",
        "24/7 Dedicated Support",
        "Technical Asset Health Monitoring",
      ],
    },
  ];

  return (
    <section
      className="relative py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
      id="care360-protection"
    >
      {/* Soft Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-xs font-semibold tracking-widest uppercase mb-8 text-indigo-400">
            Care360 Elite Protection
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            The Infrastructure Behind
            <span className="block text-indigo-400">
              Profitable ATM Operations
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            A structured compliance, risk protection, and operational framework
            designed for serious ATM investors who want stability, growth, and
            zero regulatory headaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-14 items-start">
          {/* Pricing Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl hover:border-indigo-500/30 transition-all duration-500">

              <h3 className="text-2xl font-bold mb-6">
                Lifetime Protection Access
              </h3>

              <div className="flex items-end gap-3 mb-6">
                <span className="text-6xl font-black">₹15,000</span>
                <span className="text-slate-500 text-sm mb-2">
                  One-time payment
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-10">
                No recurring fees. No hidden costs. One structured protection
                layer covering compliance, disputes, payouts, and monitoring.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Lifetime compliance monitoring
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Dedicated operational assistance
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Asset risk & payout protection
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-4 px-8 py-5 rounded-xl font-bold bg-indigo-600 hover:bg-white hover:text-slate-900 text-white transition-all duration-300 group"
              >
                Activate Care360 Elite
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="lg:col-span-7 space-y-8">
            {featureGroups.map((group, idx) => (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-indigo-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-white/5 rounded-xl group-hover:bg-indigo-600 transition-all duration-300">
                    {group.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    {group.title}
                  </h4>
                </div>

                <div className="space-y-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-slate-300 text-sm md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}