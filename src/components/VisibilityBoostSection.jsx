import {
  Globe,
  Search,
  MapPin,
  BarChart3,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function VisibilityBoostSection() {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Google Business Setup",
      text: "Complete profile creation and verification for ATM listing visibility.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Local Search Optimization",
      text: "Improve ranking when users search for nearby ATM locations.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Accurate Map Tagging",
      text: "Precise geo-tagging for better navigation and location trust.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Insights",
      text: "Track discovery trends and optimize digital presence.",
    },
  ];

  return (
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden"id="atm-visibility-boost">
      
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-8">
              ATM Network Growth
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Digital Visibility
              <span className="block text-indigo-400">
                That Drives Footfall
              </span>
            </h2>

            <p className="text-slate-300 text-lg mb-10 max-w-xl">
              We enhance your ATM’s online presence so customers can easily
              locate it through search engines and digital maps.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm">
                  Increased local discovery
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm">
                  Better navigation accuracy
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm">
                  Improved search visibility
                </span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-indigo-600 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-xl font-bold transition-all group"
            >
              Boost My ATM Visibility
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* RIGHT FEATURE GRID */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition-all duration-300"
              >
                <div className="mb-6 text-indigo-400">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-3 text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
