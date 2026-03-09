import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../Sections/HeroSection";

/* ===============================
   LAZY SECTIONS
=============================== */

const WhyAtmFranchiseSection = lazy(() =>
  import("../Sections/WhyAtmFranchiseSection")
);

const TrustedPartnersSection = lazy(() =>
  import("../Sections/TrustedPartnersSection")
);

const HowItWorksSection = lazy(() =>
  import("../Sections/HowItWorksSection")
);

const CertifiedSection = lazy(() =>
  import("../Sections/CertifiedSection")
);

const CtaSection = lazy(() =>
  import("../Sections/CtaSection")
);

const ProfitCalculator = lazy(() =>
  import("../components/ProfitCalculator")
);

/* ===============================
   LOADER
=============================== */

const SectionLoader = () => (
  <div className="w-full min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-gray-200 border-t-emerald-600 rounded-full animate-spin" />
  </div>
);

/* ===============================
   SEO
=============================== */

const HomeSEO = () => (
  <Helmet prioritizeSeoTags>

<title>
ATM Franchise in India 2026: Cost, Profit, Monthly Income & Application Guide
</title>

<meta
name="description"
content="Start an ATM Franchise in India with ₹2–5 lakh investment. Learn setup cost, monthly income, commission model and step-by-step application process."
/>

<link rel="canonical" href="https://atmfranchise.in/" />

<meta name="robots"
content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
/>

<meta name="author" content="ATM Franchise India" />

<meta property="og:type" content="website"/>
<meta property="og:locale" content="en_IN"/>

<meta property="og:title"
content="ATM Franchise in India 2026 – Cost, Profit & Setup Guide"
/>

<meta property="og:description"
content="Low investment ATM franchise opportunity in India. Check setup cost, ROI and monthly profit potential."
/>

<meta property="og:url" content="https://atmfranchise.in/"/>
<meta property="og:site_name" content="ATM Franchise India"/>

<meta property="og:image"
content="https://atmfranchise.in/img/common/main1.webp"
/>

<meta name="twitter:card" content="summary_large_image"/>

<meta name="twitter:title"
content="ATM Franchise in India – Start Under ₹5 Lakh"
/>

<meta name="twitter:description"
content="Complete guide to ATM franchise investment, income model and application process."
/>

<meta name="twitter:image"
content="https://atmfranchise.in/img/common/main1.webp"
/>

<script type="application/ld+json">
{JSON.stringify({
"@context":"https://schema.org",
"@graph":[

{
"@type":"Organization",
"name":"ATM Franchise India",
"url":"https://atmfranchise.in/",
"logo":"https://atmfranchise.in/img/common/logo2.png"
},

{
"@type":"FAQPage",
"mainEntity":[
{
"@type":"Question",
"name":"What is the investment cost for ATM franchise?",
"acceptedAnswer":{
"@type":"Answer",
"text":"ATM franchise investment typically ranges between ₹2 lakh and ₹5 lakh depending on operator and installation requirements."
}
},
{
"@type":"Question",
"name":"How much income can an ATM generate monthly?",
"acceptedAnswer":{
"@type":"Answer",
"text":"High footfall locations processing 100–120 transactions daily can generate stable monthly commission income."
}
}
]
}

]
})}
</script>

  </Helmet>
);

/* ===============================
   PAGE
=============================== */

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">

      <HomeSEO />

      {/* HERO SECTION */}
      <HeroSection />

      <main>

        <Suspense fallback={<SectionLoader />}>

          <WhyAtmFranchiseSection />

          <TrustedPartnersSection />

          {/* ROI CALCULATOR */}

          <section id="roi-calculator" className="bg-slate-50 py-12">

            <div className="max-w-4xl mx-auto px-4 text-center mb-8">

              <h2 className="text-3xl font-bold mb-4">
                Calculate Your
                <span className="text-emerald-600">
                  {" "}ATM Monthly Profit
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed">
                ATM franchise income depends on location footfall,
                transaction volume and operator commission structure.
                Use this calculator to estimate your monthly income
                and investment return.
              </p>

            </div>

            <div className="max-w-6xl mx-auto px-4">
              <ProfitCalculator />
            </div>

          </section>

          <HowItWorksSection />

          <CertifiedSection />

          <CtaSection />

        </Suspense>

      </main>

    </div>
  );
};

export default HomePage;