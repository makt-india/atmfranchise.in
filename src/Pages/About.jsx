import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Landmark, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  VISION_TEXT,
  MISSION_TEXT,
  coreValuesData,
  expertiseData
} from '../Data';
import ComplianceModelSection from "../components/ComplianceModelSection";
import LiveATMLocations from "../components/LiveATMLocations";

/* ============================================
   SEO — TRUST & AUTHORITY BOOT
============================================ */

const AboutUsSEO = () => {

  const title =
    "About ATM Franchise India – White Label ATM Franchise Experts in India";

  const description =
    "Learn about ATM Franchise India, a platform helping entrepreneurs start RBI-compliant White Label ATM franchises across India with complete setup, compliance and operational guidance.";

  const canonical = "https://atmfranchise.in/about";
  const image = "https://atmfranchise.in/assets/about-banner.webp";

  const modifiedDate = new Date().toISOString();

  return (
    <Helmet prioritizeSeoTags>

      {/* ================= PRIMARY SEO ================= */}

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1"
      />

      <link rel="canonical" href={canonical} />

      {/* ================= OPEN GRAPH ================= */}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ATM Franchise India" />
      <meta property="og:locale" content="en_IN" />

      {/* ================= TWITTER ================= */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

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
              "logo": {
                "@type": "ImageObject",
                "url": "https://atmfranchise.in/logo2.png"
              },
              "foundingLocation": {
                "@type": "Country",
                "name": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-88833-35553",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": [
                  "English",
                  "Hindi",
                  "Tamil",
                  "Kannada",
                  "Telugu"
                ]
              },
              "sameAs": [
                "https://www.facebook.com/atmfranchiseindia",
                "https://www.linkedin.com/company/atmfranchise"
              ]
            },

            {
              "@type": "WebSite",
              "@id": "https://atmfranchise.in/#website",
              "url": "https://atmfranchise.in/",
              "name": "ATM Franchise in India",
              "publisher": {
                "@id": "https://atmfranchise.in/#organization"
              }
            },

            {
              "@type": "AboutPage",
              "@id": `${canonical}#aboutpage`,
              "url": canonical,
              "name": title,
              "description": description,
              "isPartOf": {
                "@id": "https://atmfranchise.in/#website"
              },
              "about": {
                "@id": "https://atmfranchise.in/#organization"
              },
              "dateModified": modifiedDate
            },

            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://atmfranchise.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Us",
                  "item": canonical
                }
              ]
            }

          ]
        })}
      </script>

    </Helmet>
  );
};



/* ============================================
   HERO SECTION: Performance Optimized
============================================ */
const AboutUsHero = memo(() => (
  <section className="relative py-20 sm:py-32 bg-slate-900 overflow-hidden">
    <img
      src="/img/common/about-hero.webp"
      alt="Leading the ATM Franchise Revolution in India"
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      loading="eager"           // Performance: Load immediately
fetchpriority="high"     // SEO: LCP Optimization
      decoding="async"
      onError={(e) => {
        e.target.src = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1920";
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>

    <div className="relative max-w-7xl mx-auto px-6 text-center md:text-left z-10">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Pioneering <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Financial Inclusion</span> <br />
          for Bharat
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mt-6 leading-relaxed">
          Empowering entrepreneurs through <strong className="text-white">secure</strong> and <strong className="text-white">scalable</strong> ATM networks that bridge the gap between urban banking and rural accessibility.
        </p>
      </div>
    </div>
  </section>
));

/* ============================================
   VISION & MISSION (Semantic HTML5)
============================================ */
const VisionMissionSection = memo(() => (
  <section className="py-16 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
      <article className="group p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
          <Target className="w-7 h-7 text-blue-600 group-hover:text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
        <div
          className="text-gray-600 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: VISION_TEXT.replace(
              /(financial|growth|empower)/gi,
              (t) => `<strong class='text-blue-600'>${t}</strong>`
            )
          }}
        />
      </article>

      <article className="group p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition">
          <Landmark className="w-7 h-7 text-emerald-600 group-hover:text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
        <div
          className="text-gray-600 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: MISSION_TEXT.replace(
              /(secure|trusted|network|India)/gi,
              (t) => `<strong class='text-emerald-600'>${t}</strong>`
            )
          }}
        />
      </article>
    </div>
  </section>
));

/* ============================================
   CORE VALUES (Accessibility Boot)
============================================ */
const CoreValuesSection = memo(() => (
    <section className="relative py-20 bg-slate-900">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-6">
      <header className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Our Core <span className="text-blue-400">Values</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Operating with integrity and technical excellence to ensure your investment is protected.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {coreValuesData.map((item, index) => (
          <article
            key={index}
            className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all duration-300 group"
          >
            <item.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
));

/* ============================================
   WHO WE ARE: E-E-A-T BOOT
============================================ */
const WhoWeAreSection = memo(() => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <header className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
          The <span className="text-blue-600">Expert Team</span> Behind the Success
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          With over 50+ years of combined experience in ATM deployment, cash logistics, and banking software, our leadership ensures your franchise is in expert hands.
        </p>
      </header>

      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-5xl mx-auto group">
        <img
          src="/img/common/groups.webp"
          alt="ATM Franchise India Leadership and Operations Team"
          className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
          loading="lazy"
          width="1200"
          height="600"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
      </div>
    </div>
  </section>
));

/* ============================================
   EXPERTISE: Semantic Layout
============================================ */
const ExpertiseSection = memo(() => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <header className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Our Technical <span className="text-blue-600">Prowess</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          From site feasibility to 24/7 technical monitoring, our expertise ensures 99.9% uptime.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {expertiseData.map((item, index) => (
          <article
            key={index}
            className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
               <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
));

/* ============================================
   CTA: Conversion Boot
============================================ */
const CTASection = memo(() => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-700 to-blue-900 rounded-[2.5rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group-hover:scale-110 transition-transform duration-1000"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
          Partner with India's <span className="text-emerald-400">ATM Leaders</span>
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Leverage our expertise to build a high-ROI ATM business with the backing of India's strongest White Label ATM infrastructure.
        </p>
        
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-700 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95"
        >
          Begin Your Partnership
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  </section>
));

/* ============================================
   MAIN COMPONENT
============================================ */
const AboutUsPage = () => (
  <main className="bg-white min-h-screen antialiased selection:bg-blue-100 selection:text-blue-900">
    <AboutUsSEO />
    <AboutUsHero />
    <VisionMissionSection />
    <LiveATMLocations/>
    <CoreValuesSection />
    <WhoWeAreSection />
     <ComplianceModelSection/>
    <ExpertiseSection />
    <CTASection />
  </main>
);

export default AboutUsPage;