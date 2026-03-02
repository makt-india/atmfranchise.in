import { MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const atmLocations = [
  {
    id: 1,
    location: "Tiruchengode, Tamil Nadu",
    partner: "EPS Bancs",
    date: "Jan 24, 2026",
    status: "Live & Transacting",
    img: "/img/common/Eps-about1.webp",
  },
  {
    id: 2,
    location: "Erode Main Road, TN",
    partner: "Findi",
    date: "Jan 10, 2026",
    status: "Live & Transacting",
    img: "/img/findi/findi2.webp",
  },
  {
    id: 3,
    location: "Salem Bypass, TN",
    partner: "EPS Bancs",
    date: "Dec 15, 2025",
    status: "Live & Transacting",
    img: "/img/eps/eps1.webp",
  },
  {
    id: 4,
    location: "Namakkal Bus Stand, TN",
    partner: "Hitachi Money Spot",
    date: "Nov 22, 2025",
    status: "Live & Transacting",
    img: "/img/hitachi-about1.webp",
  },
];

export default function LiveATMLocations() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Soft Dot Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100 rounded-full">
            Network Presence
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Live & Operational <span className="text-emerald-600">ATM Locations</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Real franchise setups currently running and transacting across Tamil Nadu. 
            Experience our reliable banking infrastructure in person.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {atmLocations.map((atm) => (
            <div
              key={atm.id}
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {atm.status}
                </div>

                <img
                  src={atm.img}
                  alt={atm.location}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-2 text-emerald-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {atm.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {atm.partner} Franchise
                </h3>

                <div className="flex items-center justify-between pt-5 border-t border-slate-100 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {atm.date}
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Redesigned CTA Card */}
          <div className="flex flex-col justify-center items-center bg-emerald-600 rounded-3xl p-8 text-center shadow-xl shadow-emerald-200">
            <div className="w-16 h-16 bg-white/20 rounded-2xl rotate-12 flex items-center justify-center mb-8 backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-white -rotate-12" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Expand Your Business
            </h3>

            <p className="text-emerald-50 mb-8 leading-relaxed">
              Join our growing network. Check if your location is eligible for a new ATM franchise today.
            </p>

            <Link
              to="/Contact"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-lg"
            >
              Check Availability
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}