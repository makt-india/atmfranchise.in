import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../Sections/HeroSection";

// Lazy loaded sections
const WhyAtmFranchiseSection = lazy(() => import("../Sections/WhyAtmFranchiseSection"));
const TrustedPartnersSection = lazy(() => import("../Sections/TrustedPartnersSection"));
const HowItWorksSection = lazy(() => import("../Sections/HowItWorksSection"));
const CertifiedSection = lazy(() => import("../Sections/CertifiedSection"));
const CtaSection = lazy(() => import("../Sections/CtaSection"));
const ProfitCalculator = lazy(() => import("../components/ProfitCalculator"));

/* ============================================
   LOADER
============================================ */
const SectionLoader = () => (
  <div className="w-full min-h-[400px] flex items-center justify-center bg-gray-50/50">
    <div className="w-10 h-10 border-4 border-gray-200 border-t-emerald-600 rounded-full animate-spin" />
  </div>
);

/* ============================================
   HOME SEO
============================================ */


const HomeSEO = () => (
  <Helmet prioritizeSeoTags>

    {/* ================= PRIMARY SEO ================= */}

    <title>
      ATM Franchise in India 2026 – Cost, Profit, Investment & Apply Online
    </title>

    <meta
      name="description"
      content="Start an ATM Franchise in India with ₹2–5 lakh investment. Check 2026 setup cost, monthly profit margin, commission per transaction, RBI guidelines and step-by-step online application process."
    />

    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />

    <meta name="author" content="ATM Franchise India" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta name="theme-color" content="#000000" />

    <link rel="canonical" href="https://atmfranchise.in/" />

    {/* ================= HREFLANG ================= */}

    <link rel="alternate" hrefLang="en-IN" href="https://atmfranchise.in/" />
    <link rel="alternate" hrefLang="hi-IN" href="https://atmfranchise.in/hi/" />
    <link rel="alternate" hrefLang="ta-IN" href="https://atmfranchise.in/ta/" />
    <link rel="alternate" hrefLang="kn-IN" href="https://atmfranchise.in/kn/" />
    <link rel="alternate" hrefLang="te-IN" href="https://atmfranchise.in/te/" />
    <link rel="alternate" hrefLang="x-default" href="https://atmfranchise.in/" />

    {/* ================= PRELOAD LCP IMAGE ================= */}

    <link
      rel="preload"
      as="image"
      href="https://atmfranchise.in/assets/atm-setup.webp"
      type="image/webp"
      fetchpriority="high"
    />

    {/* ================= OPEN GRAPH ================= */}

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />
    <meta
      property="og:title"
      content="ATM Franchise in India 2026 – Invest ₹2–5 Lakh | Cost & Profit Details"
    />
    <meta
      property="og:description"
      content="Low investment ATM Franchise opportunity in India. Check cost breakdown, monthly income potential, RBI compliance and apply online."
    />
    <meta property="og:url" content="https://atmfranchise.in/" />
    <meta property="og:site_name" content="ATM Franchise India" />
    <meta
      property="og:image"
      content="https://atmfranchise.in/assets/atm-setup.webp"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* ================= TWITTER ================= */}

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="ATM Franchise in India 2026 | Start Under ₹5 Lakh"
    />
    <meta
      name="twitter:description"
      content="Check ATM Franchise cost, monthly profit margin and apply online. RBI-regulated White Label ATM opportunity across India."
    />
    <meta
      name="twitter:image"
      content="https://atmfranchise.in/assets/atm-setup.webp"
    />

    {/* ================= STRUCTURED DATA ================= */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [

          {
            "@type": "Organization",
            "@id": "https://atmfranchise.in/#organization",
            "name": "ATM Franchise India",
            "url": "https://atmfranchise.in/",
            "logo": "https://atmfranchise.in/logo2.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-88833-35553",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Tamil", "Kannada", "Telugu"]
            }
          },

          {
            "@type": "WebSite",
            "@id": "https://atmfranchise.in/#website",
            "url": "https://atmfranchise.in/",
            "name": "ATM Franchise in India",
            "publisher": {
              "@id": "https://atmfranchise.in/#organization"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://atmfranchise.in/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },

          {
            "@type": "Service",
            "name": "ATM Franchise & White Label ATM Setup",
            "provider": {
              "@id": "https://atmfranchise.in/#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "200000",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "200000",
                "maxPrice": "500000",
                "priceCurrency": "INR"
              },
              "availability": "https://schema.org/InStock"
            }
          },

          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the cost of ATM Franchise in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The investment required ranges between ₹2 lakh to ₹5 lakh depending on location, operator and installation requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How much profit can I earn from an ATM Franchise?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Monthly income depends on transaction volume. ATM operators typically earn commission per withdrawal transaction as per RBI regulated interchange fees."
                }
              },
              {
                "@type": "Question",
                "name": "Is White Label ATM legal in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. White Label ATMs are permitted by RBI and operated by authorized non-bank entities under regulatory guidelines."
                }
              }
            ]
          },

          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://atmfranchise.in/"
              }
            ]
          }

        ]
      })}
    </script>

  </Helmet>
);


/* ============================================
   HOME PAGE
============================================ */
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <HomeSEO />

      {/* ABOVE THE FOLD */}
      <HeroSection />

      <main>

        <Suspense fallback={<SectionLoader />}>
          <WhyAtmFranchiseSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <TrustedPartnersSection />
        </Suspense>

        {/* ROI SECTION */}
        <section id="roi-calculator" className="bg-slate-50 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Calculate Your <span className="text-emerald-600">Monthly ATM Profit</span>
            </h2>

            {/* STATIC SEO CONTENT (IMPORTANT) */}
            <p className="text-gray-700 leading-relaxed">
              White Label ATM franchise income depends on transaction volume,
              location footfall, and operator commission structure. Use the
              calculator below to estimate monthly earnings, break-even period,
              and long-term return on investment for ATM installation in India.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <Suspense fallback={<SectionLoader />}>
              <ProfitCalculator />
            </Suspense>
          </div>
        </section>

        <Suspense fallback={<SectionLoader />}>
          <HowItWorksSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <CertifiedSection />
        </Suspense>

      </main>

      <Suspense fallback={<SectionLoader />}>
        <CtaSection />
      </Suspense>

    </div>
  );
};

export default HomePage;
