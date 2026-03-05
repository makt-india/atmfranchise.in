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

    {/* PRIMARY SEO */}

    <title>
      ATM Franchise in India 2026 – Cost, Profit, Investment & Monthly Income
    </title>

    <meta
      name="description"
      content="ATM Franchise in India with ₹2–5 lakh investment. Learn setup cost, monthly profit, RBI rules, transaction commission and how to apply online."
    />

    <meta
      name="robots"
      content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    />

    <meta name="author" content="ATM Franchise India" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta name="theme-color" content="#000000" />

    <link rel="canonical" href="https://atmfranchise.in/" />

    {/* HREFLANG (only keep if pages exist) */}

    <link rel="alternate" hrefLang="en-IN" href="https://atmfranchise.in/" />
    <link rel="alternate" hrefLang="x-default" href="https://atmfranchise.in/" />

    {/* LCP IMAGE */}

    <link
      rel="preload"
      as="image"
      href="https://atmfranchise.in/assets/atm-setup.webp"
      type="image/webp"
      fetchpriority="high"
    />

    {/* OPEN GRAPH */}

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />

    <meta
      property="og:title"
      content="ATM Franchise in India 2026 – Cost & Profit Guide"
    />

    <meta
      property="og:description"
      content="Low investment ATM Franchise opportunity in India. Learn cost, monthly income and how to apply."
    />

    <meta property="og:url" content="https://atmfranchise.in/" />
    <meta property="og:site_name" content="ATM Franchise India" />

    <meta
      property="og:image"
      content="https://atmfranchise.in/assets/atm-setup.webp"
    />

    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="ATM Franchise setup in India" />

    {/* TWITTER */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta
      name="twitter:title"
      content="ATM Franchise in India 2026 | Start Under ₹5 Lakh"
    />

    <meta
      name="twitter:description"
      content="Check ATM Franchise investment cost, monthly profit margin and application process."
    />

    <meta
      name="twitter:image"
      content="https://atmfranchise.in/assets/atm-setup.webp"
    />

    {/* STRUCTURED DATA */}

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [

          {
            "@type": "Organization",
            "@id": "https://atmfranchise.in/#organization",
            "name": "ATM Franchise India",
            "url": "https://atmfranchise.in/",
            "logo": "https://atmfranchise.in/img/common/logo2.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-88833-35553",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": [
                "English",
                "Hindi",
                "Tamil",
                "Kannada",
                "Telugu"
              ]
            }
          },

          {
            "@type": "WebSite",
            "@id": "https://atmfranchise.in/#website",
            "url": "https://atmfranchise.in/",
            "name": "ATM Franchise India",
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
            "@id": "https://atmfranchise.in/#service",
            "name": "ATM Franchise & White Label ATM Setup",
            "provider": {
              "@id": "https://atmfranchise.in/#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "description":
              "Consultation and guidance for starting ATM franchise business including location analysis, operator selection and application support."
          },

          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the cost of ATM Franchise in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "ATM franchise investment usually ranges between ₹2 lakh and ₹5 lakh depending on location, operator and installation requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How much profit does an ATM franchise generate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Monthly income depends on transaction volume. Locations with high usage can generate stable commission income per withdrawal transaction."
                }
              },
              {
                "@type": "Question",
                "name": "Is White Label ATM legal in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes. White Label ATMs are authorized by the Reserve Bank of India and operated by licensed non-bank entities under RBI regulations."
                }
              }
            ]
          }

        ]
      })}
    </script>

  </Helmet>
);

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
