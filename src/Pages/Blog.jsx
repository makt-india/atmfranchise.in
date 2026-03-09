import React, { memo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react";
import { blogPosts, faqData } from "../blog-data";

/* ============================================
   SEO — BLOG LISTING
============================================ */





const BlogSEO = memo(() => {

  const title =
    "ATM Franchise Blog India 2026 – Investment Cost, Profit & RBI Compliance Guides";

  const description =
    "Expert ATM Franchise guides in India. Learn White Label ATM investment cost, monthly profit margin, commission structure, RBI regulations and location-based ROI strategies.";

  const canonical = "https://atmfranchise.in/blog";

  const image = "https://atmfranchise.in/img/common/main1.webp";

  const modifiedDate = new Date().toISOString();

  return (
    <Helmet prioritizeSeoTags>

      {/* ================= PRIMARY SEO ================= */}

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="author" content="ATM Franchise India Editorial Team" />

      <meta
        name="robots"
        content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      />

      <link rel="canonical" href={canonical} />

      {/* ================= OPEN GRAPH ================= */}

      <meta property="og:type" content="website" />

      <meta property="og:locale" content="en_IN" />

      <meta property="og:site_name" content="ATM Franchise India" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonical} />

      <meta property="og:image" content={image} />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:image:alt" content="ATM Franchise blog guides in India" />

      {/* ================= TWITTER ================= */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

      <meta name="twitter:creator" content="@atmfranchiseindia" />

      {/* ================= STRUCTURED DATA ================= */}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [

            {
              "@type": "CollectionPage",
              "@id": `${canonical}#webpage`,
              "url": canonical,
              "name": title,
              "description": description,
              "inLanguage": "en-IN",
              "dateModified": modifiedDate
            },

            {
              "@type": "Blog",
              "@id": `${canonical}#blog`,
              "url": canonical,
              "name": "ATM Franchise Blog",
              "description": description,
              "inLanguage": "en-IN",
              "mainEntityOfPage": {
                "@id": `${canonical}#webpage`
              },
              "publisher": {
                "@type": "Organization",
                "name": "ATM Franchise India",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://atmfranchise.in/img/common/logo2.png"
                }
              }
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
                  "name": "Blog",
                  "item": canonical
                }
              ]
            }

          ]
        })}
      </script>

    </Helmet>
  );
});
/* ============================================
   HERO SECTION
============================================ */
const BlogHero = memo(() => (
  <section className="relative py-24 md:py-36 bg-slate-950 overflow-hidden">
    <img
      src="/img/common/Atm-with-lady.webp"
      alt="ATM Franchise Business Growth Strategy"
      className="absolute inset-0 w-full h-full object-cover opacity-25"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-950/90 to-slate-950" />

    <div className="relative max-w-6xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        ATM Franchise <span className="text-emerald-400">Business Insights</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        Data-driven reports, RBI updates, profit models, and strategic blueprints
        to dominate the White Label ATM industry in 2026.
      </p>
    </div>
  </section>
));

/* ============================================
   FEATURED CARD
============================================ */
const FeaturedCard = memo(({ post }) => {
  const Icon = post.iconType === "TrendingUp" ? TrendingUp : BarChart3;

  return (
    <article className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-emerald-500/60 transition-all flex gap-6 shadow-lg hover:shadow-emerald-500/10">
      <div className="bg-emerald-500/10 p-4 rounded-2xl group-hover:bg-emerald-500 transition-all duration-300">
        <Icon className="w-10 h-10 text-emerald-400 group-hover:text-white" />
      </div>

      <div>
        <time className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
          {post.date}
        </time>

        <h2 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-emerald-400 transition">
          {post.title}
        </h2>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {post.summary}
        </p>

        {/* ✅ FIXED HERE */}
        <Link
          to={`/blog/${post.slug}`}
          className="text-white font-semibold inline-flex items-center hover:text-emerald-400 transition"
        >
          View Full Report
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </article>
  );
});

/* ============================================
   REGULAR BLOG CARD
============================================ */
const BlogCard = memo(({ post }) => (
  <article className="group bg-white rounded-3xl border border-gray-100 p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

    <div className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
      {post.date}
    </div>

    <h2 className="text-xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-blue-700 transition-colors duration-300">
      {post.title}
    </h2>

    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
      {post.summary}
    </p>

    {/* ✅ FIXED HERE */}
    <Link
      to={`/blog/${post.slug}`}
      className="mt-auto inline-flex items-center font-semibold text-blue-600 group-hover:text-blue-800 transition"
    >
      Read Full Guide
      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>

  </article>
));

/* ============================================
   BLOG GRID
============================================ */
const BlogGrid = memo(({ posts }) => {
  const featured = posts.filter((p) => p.isFeatured);
  const regular = posts.filter((p) => !p.isFeatured);

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {featured.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 gap-14 mb-28">
              {featured.map((post) => (
                <FeaturedCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}

        {regular.length > 0 && (
          <>
            <div className="flex items-center gap-6 mb-16">
              <div className="flex-grow h-px bg-gray-200"></div>
              <h3 className="text-gray-400 font-bold text-xs uppercase tracking-[0.35em]">
                Latest Articles
              </h3>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
              {regular.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
});

/* ============================================
   FAQ SECTION
============================================ */
const FAQSection = memo(() => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-14">
          ATM Franchise Industry FAQ
        </h2>

        <div className="space-y-5">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl bg-gray-50 hover:bg-gray-100 transition"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 flex justify-between items-center font-semibold text-left text-slate-800"
              >
                {item.q}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === i ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ============================================
   CTA SECTION
============================================ */
const BlogCTASection = memo(() => (
  <section className="py-24 bg-gradient-to-br from-blue-800 to-indigo-950 text-white text-center px-6">
    <Zap className="w-14 h-14 text-yellow-400 mx-auto mb-8" />

    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
      Ready to Start Your ATM Franchise in 2026?
    </h2>

    <p className="text-blue-100 max-w-xl mx-auto mb-10">
      Get expert guidance, location feasibility analysis, and ROI projections
      before you invest.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5">
      <Link
        to="/contact"
        className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg"
      >
        Book Free Consultation
      </Link>

      <a
        href="https://wa.me/918883335553"
        className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center transition shadow-lg"
      >
        <MessageCircle className="mr-2 w-5 h-5" />
        WhatsApp Experts
      </a>
    </div>
  </section>
));

/* ============================================
   PAGE EXPORT
============================================ */
const BlogPage = () => (
  <main className="min-h-screen bg-white">
    <BlogSEO />
    <BlogHero />
    <BlogGrid posts={blogPosts || []} />
    <FAQSection />
    <BlogCTASection />
  </main>
);

export default BlogPage;
