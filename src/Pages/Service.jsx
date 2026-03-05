
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import VisibilityBoostSection from "../components/VisibilityBoostSection";
import Care360Section from "../components/Care360Section";
import FinalCTASection from "../components/FinalCTASection";

import {
  Building2,
  Landmark,
  Globe,
  MapPin,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";

/* =========================
   PARTNER DATA
========================= */

const partners = [
  {
    name: "EPS Bancs",
    slug: "eps",
    tag: "RBI-Authorized WLA Operator",
    desc: "EPS Bancs operates one of India's established White Label ATM networks with structured deployment standards, centralized monitoring systems, and regulated operational frameworks.",
    logo: "/img/common/eps-logo.webp"
  },
  {
    name: "Hitachi Money Spot",
    slug: "hitachi",
    tag: "RBI-Authorized WLA Operator",
    desc: "Hitachi Money Spot combines global financial technology expertise with localized ATM infrastructure deployment, ensuring institutional-grade reliability and compliance.",
    logo: "img/common/hitachi.webp"
  },
  {
    name: "India1 Payments",
    slug: "india1",
    tag: "RBI-Authorized WLA Operator",
    desc: "India1 Payments focuses on expanding ATM penetration across rural and semi-urban India through scalable infrastructure and performance-driven transaction models.",
    logo: "/img/common/india1-logo.webp"
  },
  {
    name: "Findi",
    slug: "findi",
    tag: "Strategic Infrastructure Partner",
    desc: "Findi provides technology-enabled transaction processing and operational support systems designed to enhance ATM uptime and financial service accessibility.",
    logo: "/img/common/findi-logo.webp"
  }
];

/* =========================
   STEPS
========================= */

const steps = [
  {
    number: "01",
    title: "Location Assessment",
    text: "We evaluate your proposed location based on footfall, banking density, and transaction potential."
  },
  {
    number: "02",
    title: "Brand Selection",
    text: "Based on geography and investment profile, we match you with the most suitable ATM operator."
  },
  {
    number: "03",
    title: "Documentation & Approval",
    text: "We assist with KYC, agreements, and compliance formalities for smooth onboarding."
  },
  {
    number: "04",
    title: "Installation & Activation",
    text: "Machine setup, connectivity, and live activation are completed under operator guidelines."
  }
];



  const Service = () => {

  const title =
    "ATM Franchise Services in India 2026 – EPS, Hitachi, Findi & India1 Comparison";

  const description =
    "Compare ATM franchise operators in India including EPS, Hitachi, Findi and India1. Learn investment cost, monthly profit, ROI timeline and application process.";

  const canonical = "https://atmfranchise.in/service";

  const modifiedDate = new Date().toISOString();

  return (
    <>
      {/* ================= SEO ================= */}

      <Helmet prioritizeSeoTags>

        <title>{title}</title>

        <meta name="description" content={description} />

        <link rel="canonical" href={canonical} />

        <meta
          name="robots"
          content="index,follow,max-image-preview:large"
        />

        {/* OpenGraph */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />

        {/* STRUCTURED DATA */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [

              {
                "@type": "Organization",
                "name": "ATM Franchise India",
                "url": "https://atmfranchise.in/"
              },

              {
                "@type": "WebPage",
                "name": title,
                "url": canonical,
                "dateModified": modifiedDate
              },

              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the investment for ATM franchise in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ATM franchise investment in India typically ranges between ₹2 lakh to ₹6 lakh depending on the operator and location."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much profit does an ATM franchise generate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "An ATM franchise can generate ₹25,000 to ₹60,000 monthly depending on transaction volume."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which ATM franchise is best in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Popular ATM franchise operators in India include EPS Bancs, India1 Payments, Hitachi Money Spot and Findi."
                    }
                  }
                ]
              }

            ]
          })}
        </script>

      </Helmet>



      <section className="relative pt-12 pb-12 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">

            <div className="group cursor-default inline-flex items-center gap-3 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-10 transition-all hover:bg-indigo-500/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Premium Support Network</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-8">
              Expert Services for <br />
              <span className="bg-gradient-to-r from-white via-white to-indigo-400 bg-clip-text text-transparent">
                ATM Entrepreneurs
              </span>
            </h1>

            <div className="max-w-3xl p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                We deliver <span className="text-white font-semibold">end-to-end franchise intelligence.</span> From navigating brand selection and complex documentation to precision installation and long-term asset optimization.
              </p>
            </div>

            <div className="mt-16 relative flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400/60 mb-4">
                Explore our ecosystem
              </span>
              <div className="w-[2px] h-16 bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent rounded-full"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}

<section
  className="relative py-28 bg-gradient-to-b from-white to-slate-100 text-slate-900 overflow-hidden"
  id="industry-partners"
>

  {/* Subtle Background Grid */}
  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:26px_26px] opacity-60 pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-24 max-w-3xl mx-auto">
      <div className="inline-flex items-center px-5 py-2 rounded-full bg-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase mb-6">
        Operator Network
      </div>

      <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        RBI-Aligned <span className="text-indigo-600">ATM Operators</span>
      </h3>

      <p className="text-slate-600 text-lg leading-relaxed">
        We coordinate deployments in association with recognized White Label ATM operators across India.
        Each partnership follows structured compliance and operational frameworks.
      </p>
    </div>

    {/* Institutional Card Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {partners.map((partner, idx) => (
        <Link
          key={idx}
          to={`/atm-franchise/${partner.slug}`}
          className="group relative bg-white border border-slate-200 rounded-3xl p-10 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl"
        >

          {/* Top Row */}
          <div className="flex items-center justify-between mb-10">

            <div className="h-14 flex items-center">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-2 rounded-full">
              {partner.tag}
            </span>

          </div>

          {/* Content */}
          <h4 className="text-2xl font-bold text-slate-900 mb-5 group-hover:text-indigo-600 transition-colors">
            {partner.name}
          </h4>

          <p className="text-slate-600 leading-relaxed mb-10">
            {partner.desc}
          </p>

          {/* Bottom CTA Line */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <span className="text-sm font-semibold text-indigo-600">
              Explore Operator Details
            </span>
            <ArrowUpRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
          </div>

        </Link>
      ))}

    </div>

  </div>
</section>
    
    <section className="relative py-28 bg-white overflow-hidden" id="atm-franchise-comparison">

  {/* Dot Background */}
  <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:22px_22px] opacity-80 pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900">
        ATM Franchise Comparison
      </h2>
      <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
        A structured overview of major ATM operators to help you choose
        the right investment alignment.
      </p>
    </div>

    {/* Comparison Table */}
    <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-lg bg-white">

      <table className="min-w-full text-left">
        <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
          <tr>
            <th className="px-8 py-5 font-semibold">Brand</th>
            <th className="px-8 py-5 font-semibold">Operator Model</th>
            <th className="px-8 py-5 font-semibold">Primary Focus</th>
            <th className="px-8 py-5 font-semibold">Network Scale</th>
            <th className="px-8 py-5 font-semibold">Ideal Investor</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 text-sm">

          {/* EPS */}
          <tr className="hover:bg-slate-50 transition-all">
            <td className="px-8 py-6 font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Building2 className="w-4 h-4 text-indigo-600" />
              </div>
              EPS
            </td>
            <td className="px-8 py-6 text-slate-600">White Label ATM Operator</td>
            <td className="px-8 py-6 text-slate-600">Rural & Semi-Urban Expansion</td>
            <td className="px-8 py-6 text-slate-600 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500" />
              Nationwide Coverage
            </td>
            <td className="px-8 py-6 text-slate-600">High rural transaction demand</td>
          </tr>

          {/* Hitachi */}
          <tr className="hover:bg-slate-50 transition-all">
            <td className="px-8 py-6 font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
              </div>
              Hitachi
            </td>
            <td className="px-8 py-6 text-slate-600">ATM Manufacturer & Service Partner</td>
            <td className="px-8 py-6 text-slate-600">Urban & Enterprise Zones</td>
            <td className="px-8 py-6 text-slate-600 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-indigo-500" />
              Corporate Infrastructure
            </td>
            <td className="px-8 py-6 text-slate-600">Premium, secure locations</td>
          </tr>

          {/* Findi */}
          <tr className="hover:bg-slate-50 transition-all">
            <td className="px-8 py-6 font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Globe className="w-4 h-4 text-purple-600" />
              </div>
              Findi
            </td>
            <td className="px-8 py-6 text-slate-600">Fintech-Driven ATM Network</td>
            <td className="px-8 py-6 text-slate-600">Tier 2 & Tier 3 Expansion</td>
            <td className="px-8 py-6 text-slate-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              Rapid Growth Phase
            </td>
            <td className="px-8 py-6 text-slate-600">Emerging market investors</td>
          </tr>

          {/* India1 */}
          <tr className="hover:bg-slate-50 transition-all">
            <td className="px-8 py-6 font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <MapPin className="w-4 h-4 text-emerald-600" />
              </div>
              India1
            </td>
            <td className="px-8 py-6 text-slate-600">White Label ATM Operator</td>
            <td className="px-8 py-6 text-slate-600">Financial Inclusion Zones</td>
            <td className="px-8 py-6 text-slate-600 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500" />
              Extensive Rural Network
            </td>
            <td className="px-8 py-6 text-slate-600">Government-aligned growth areas</td>
          </tr>

        </tbody>
      </table>

    </div>

  </div>
</section>
<VisibilityBoostSection/>
    <section className="relative py-28 bg-slate-50 overflow-hidden">
      
      {/* Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-80 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            How It Works
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg">
            A structured process designed to ensure compliance, stability,
            and long-term ATM performance.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-12 relative">

          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-slate-200"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">

              {/* Step Number Circle */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-8 rounded-full bg-white border-4 border-indigo-600 flex items-center justify-center shadow-lg">
                <span className="text-indigo-600 font-black text-lg">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
    <Care360Section/>
<FinalCTASection/>
    </>
  );
};

export default Service;
