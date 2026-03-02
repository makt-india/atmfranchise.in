import React, { useEffect } from "react";
import PartnerSEO from "../components/PartnerSEO";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  CheckCircle,
  Landmark,
  Store,
  Briefcase,
  Home,
  Info,
  ShieldCheck,
  Check
} from "lucide-react";

import {
  partnersData,
  partnerStatsData,
  partnerWhyData,
  partnerReqEligibilityData,
  partnerPackageCardsData,
  partnerPackagesData
} from "../Data";


const PartnerHero = ({ partner }) => (
  <div className="relative py-24 sm:py-32 md:py-18 bg-slate-900 overflow-hidden">

    <img
      src={partner.image || `https://images.unsplash.com/photo-1565514020125-2716a63257f0?auto=format&fit=crop&q=80`}
      alt={`${partner.name} Partnership`}
      className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
    />

    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10 text-center md:text-left">
      <Link
        to="/"
        className="inline-flex items-center text-gray-400 hover:text-white font-medium transition mb-8 group"
      >
        <div className="p-1.5 bg-white/10 rounded-full mr-2 group-hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </div>
        Back to Home
      </Link>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-shrink-0 p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl">
          <partner.icon className="w-16 h-16 md:w-20 md:h-20 text-blue-400 drop-shadow-lg" />
        </div>

        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-sm font-bold mb-4">
            Official Partner
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
            Partner with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {partner.name}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto md:mx-0">
            {partner.description}
          </p>
        </div>
      </div>
    </div>
  </div>
);
// --- Stats Section ---
const PartnerInfoSection = ({ partner }) => {
  const data = partnerStatsData[partner.name];
  if (!data) return null;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* TITLE */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {partner.name} <span className="text-blue-600">Network Overview</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {data.subheading}
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {data.stats.map((item, index) => (
            <div
              key={index}
              className="
                p-6 md:p-8 rounded-2xl bg-white 
                border border-gray-100 shadow-sm
                hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1
                transition-all duration-300
              "
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                {item.value}
              </h3>
              <p className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Franchise Packages ---
const FranchisePackageCard = ({ pack, index, type }) => {
  const icons = { Landmark, Briefcase, Home };
  const Icon = icons[pack.icon] || Landmark;

  // Visual Themes based on Model Type
  const accentColor = type === 'cabin' ? 'text-red-600' : type === 'sis' ? 'text-emerald-600' : 'text-blue-600';
  const btnColor = type === 'cabin' ? 'bg-red-600 hover:bg-red-700' : type === 'sis' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div
      className={`
        flex flex-col rounded-3xl bg-white
        shadow-sm border border-gray-100
        hover:shadow-2xl hover:-translate-y-2
        transition-all duration-300 overflow-hidden
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* HEADER */}
      <div className={`p-6 md:p-8 border-b border-gray-100 relative overflow-hidden`}>
          <div className={`absolute top-0 right-0 w-24 h-24 ${type === 'cabin' ? 'bg-red-100' : type === 'sis' ? 'bg-emerald-100' : 'bg-blue-100'} rounded-bl-full -mr-4 -mt-4 opacity-50`}></div>
          
          <div className="relative z-10">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${type === 'cabin' ? 'bg-red-100 text-red-600' : type === 'sis' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
               <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">{pack.title}</h3>
            <p className="text-gray-500 font-medium text-sm md:text-base">Franchise Package</p>
          </div>
      </div>

      {/* PRICE & DETAILS */}
      <div className="p-6 md:p-8 flex-grow">
        <div className="mb-6">
           <p className="text-gray-500 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">Total Investment</p>
           <h4 className={`text-3xl md:text-4xl font-extrabold ${accentColor}`}>
             ₹{pack.packagePrice}
           </h4>
        </div>

        <ul className="space-y-4">
          {pack.details.map((detail, i) => (
            <li key={i} className="flex justify-between items-center text-sm border-b border-dashed border-gray-100 pb-3 last:border-0">
              <span className="text-gray-600">{detail.label}</span>
              <span className="font-bold text-slate-900">₹{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-6 md:p-8 pt-0 mt-auto">
        <Link
          to="/contact"
          className={`
            w-full flex justify-center items-center px-6 py-4 
            text-white font-bold rounded-xl shadow-lg
            transition-all duration-300 active:scale-95 ${btnColor}
          `}
        >
          Inquire Now
        </Link>
      </div>
    </div>
  );
};

// --- Models Section (Refactored) ---
const PartnerThreePackageSection = ({ partner }) => {
  const pack = partnerPackagesData[partner.name];
  const meta = partnerPackageCardsData[partner.name];
  if (!pack || !meta) return null;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Available Franchise Models
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the ATM model that fits your location and investment capacity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Premium Model (Blue) */}
          <FranchisePackageCard 
             pack={{ ...pack, title: meta.premiumTitle, packagePrice: pack.premiumPrice, details: [], icon: "Landmark" }} 
             index={0} 
             type="premium" 
          />

          {/* Cabin Model (Red) */}
          <FranchisePackageCard 
             pack={{ ...pack, title: "Cabin Model", packagePrice: pack.cabinPrice, details: [], icon: "Home" }} 
             index={1} 
             type="cabin" 
          />

          {/* SIS Model (Green) */}
          <FranchisePackageCard 
             pack={{ ...pack, title: "Shop-In-Shop", packagePrice: pack.sisPrice, details: [], icon: "Store" }} 
             index={2} 
             type="sis" 
          />
          
        </div>
      </div>
    </section>
  );
};

// --- Why Choose Section ---
const PartnerWhySection = ({ partner }) => {
  const data = partnerWhyData[partner.name];
  if (!data) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose <span className="text-blue-600">{partner.name}</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
         Unlock enterprise-grade reliability, higher footfall, and consistent earnings with industry-leading advantages built for your ATM franchise growth.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {data.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={reverse ? "md:order-2" : "md:order-1"}>
<div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-700"
    onError={(e) => {
      e.target.src =
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80";
    }}
  />
</div>
                </div>

                <div className={reverse ? "md:order-1" : "md:order-2"}>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
                    {item.title}
                  </h3>
                  <div className="prose prose-lg text-gray-600 mb-6 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.text }} />
                  
                  {item.points && (
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm md:text-base">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Requirements Section ---
const PartnerReqEligibilitySection = ({ partner }) => {
  const data = partnerReqEligibilityData[partner.name];
  if (!data) return null;

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="check-eligibility">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Requirements & Eligibility
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ensure you meet these criteria to start your franchise journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* REQUIREMENTS */}
          <div className="p-6 md:p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center">
               <div className="p-3 bg-blue-50 rounded-xl mr-4 text-blue-600">
                  <Info className="w-6 h-6" />
               </div>
               Site Requirements
            </h3>
            
            <ul className="space-y-4">
              {data.requirements.map((req, i) => (
                <li key={i} className="flex justify-between items-center border-b border-dashed border-gray-100 pb-3 last:border-0 text-sm md:text-base">
                  <span className="font-medium text-gray-500">{req.label}</span>
                  <span className="font-bold text-slate-900">{req.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ELIGIBILITY */}
          <div className="p-6 md:p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center">
               <div className="p-3 bg-emerald-50 rounded-xl mr-4 text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
               </div>
               Eligibility Criteria
            </h3>
            <ul className="space-y-4">
              {data.eligibility.map((item, i) => (
                <li key={i} className="flex items-start">
                   <div className="p-1 bg-emerald-100 rounded-full mr-3 mt-1">
                      <Check className="w-3 h-3 text-emerald-600" />
                   </div>
                   <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Content Section ---
const PartnerContent = ({ partner }) => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Why Franchise with <span className="text-blue-600">{partner.name}</span>?
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          Partnering with <strong>{partner.name}</strong> gives you a powerful advantage in the WLA ecosystem.
          Their strong infrastructure and nationwide support ensure consistent earnings.
        </p>

        <ul className="space-y-4 mb-8">
          {[
            "Industry-leading transaction processing",
            "Comprehensive field support & maintenance",
            "Advanced security & RBI-compliant operations",
            "Strong presence in high-footfall zones"
          ].map((item, i) => (
            <li key={i} className="flex items-center text-gray-700 font-medium text-sm md:text-base">
              <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-500">
          <p className="italic text-center">ATM Transaction Flow Visualization</p>
          <p className="mt-2 text-xs text-center text-gray-400">Secure processing backbone</p>
        </div>
      </div>

      {/* RIGHT CARD — TRUST + CTA */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-gray-200 border border-gray-100">
        <div className="flex items-center mb-4">
          <ShieldCheck className="w-6 h-6 text-emerald-600 mr-2" />
          <h3 className="text-2xl font-bold text-slate-900">
            Enquire About {partner.name}
          </h3>
        </div>

        <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
          All ATM deployments operate under RBI-approved White Label ATM framework.
          Investment approval is based on location feasibility and transaction potential.
        </p>

        <ul className="space-y-3 mb-8">
          {[
            "RBI-Compliant Infrastructure Model",
            "Transparent Investment Structure",
            "Location Feasibility Validation",
            "Operator-Based Backend Management"
          ].map((item, i) => (
            <li key={i} className="flex items-start text-gray-600 text-sm md:text-base">
              <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="w-full flex justify-center items-center px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
        >
          Request Site Feasibility Check
        </Link>

        <p className="text-xs text-gray-400 text-center mt-4">
          Approval subject to site validation. No guaranteed income claims.
        </p>
      </div>
    </div>
  </section>
);

// --- Main Page ---
const PartnerPage = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();
  const partner = partnersData.find((p) => p.path.endsWith(partnerId));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!partnerId) {
      navigate(partnersData[0].path, { replace: true });
    }
  }, [partnerId, navigate]);

  if (!partner) {
    if (!partnerId) return null;
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl text-slate-900 font-bold mb-4">Partner not found.</h2>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
<PartnerSEO partner={partner} />
      <PartnerHero partner={partner} />
      <PartnerInfoSection partner={partner} />
      <PartnerWhySection partner={partner} />
      <PartnerReqEligibilitySection partner={partner} />
      <PartnerThreePackageSection partner={partner} />
      <PartnerContent partner={partner} />
    </div>
  );
};

export default PartnerPage;