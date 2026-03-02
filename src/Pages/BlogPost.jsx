import React, { memo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Calendar,
  Clock,
  Share2,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { blogPosts } from "../blog-data";

/* ============================================
   SEO — BLOG POST
============================================ */


const BlogPostSEO = memo(({ post }) => {
  if (!post) return null;

  const canonicalUrl = `https://atmfranchise.in/blog/${post.slug}`;
  const image =
    post.image || "https://atmfranchise.in/assets/blog-default.webp";

  const title =
    post.seoTitle ||
    `${post.title} – ATM Franchise in India 2026 Guide (Cost, Profit & RBI Rules)`;

  const description =
    post.summary ||
    `Complete 2026 guide on ${post.title}. Learn ATM franchise investment cost, monthly profit margin, commission structure, location strategy and RBI compliance rules in India.`;

  const modifiedDate = post.updatedAt || post.date;

  return (
    <Helmet prioritizeSeoTags>

      {/* ================= PRIMARY SEO ================= */}

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta name="author" content={post.author || "ATM Franchise Editorial Team"} />

      <link rel="canonical" href={canonicalUrl} />

      {/* ================= OPEN GRAPH ================= */}

      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="article:published_time" content={post.date} />
      <meta property="article:modified_time" content={modifiedDate} />

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
              }
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
              "@type": "WebPage",
              "@id": `${canonicalUrl}#webpage`,
              "url": canonicalUrl,
              "name": title,
              "isPartOf": {
                "@id": "https://atmfranchise.in/#website"
              },
              "dateModified": modifiedDate
            },

            {
              "@type": "BlogPosting",
              "@id": `${canonicalUrl}#article`,
              "headline": title,
              "description": description,
              "image": [image],
              "datePublished": post.date,
              "dateModified": modifiedDate,
              "inLanguage": "en-IN",
              "articleSection": "ATM Franchise Guides",
              "keywords": post.tags || [
                "ATM Franchise in India",
                "White Label ATM Cost",
                "ATM Profit Per Month",
                "RBI ATM Rules"
              ],
              "mainEntityOfPage": {
                "@id": `${canonicalUrl}#webpage`
              },
              "author": {
                "@type": "Person",
                "name": post.author || "ATM Franchise Editorial Team"
              },
              "publisher": {
                "@id": "https://atmfranchise.in/#organization"
              }
            },

            ...(post.faqs && post.faqs.length > 0
              ? [
                  {
                    "@type": "FAQPage",
                    "mainEntity": post.faqs.map((faq) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    }))
                  }
                ]
              : []),

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
                  "item": "https://atmfranchise.in/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": post.title,
                  "item": canonicalUrl
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
   NOT FOUND
============================================ */
const NotFound = memo(() => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <ArrowLeft className="w-12 h-12 text-blue-600 mb-4" />
    <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
    <Link
      to="/blog"
      className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold"
    >
      Back to Blog
    </Link>
  </div>
));

/* ============================================
   SHARE BUTTON
============================================ */
const ShareButton = memo(({ post }) => {
  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.summary,
          url,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      }
    } catch {}
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 hover:bg-blue-50 rounded-lg"
      aria-label="Share article"
    >
      <Share2 className="w-5 h-5 text-gray-600 hover:text-blue-600" />
    </button>
  );
});

/* ============================================
   MAIN PAGE
============================================ */
const BlogPostPage = () => {
  const { slug } = useParams();

  const post = blogPosts.find(
    (p) => p.slug === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <BlogPostSEO post={post} />

      <article className="max-w-3xl xl:max-w-4xl mx-auto px-6">

        {/* NAV */}
        <nav className="flex justify-between items-center mb-10">
          <Link
            to="/blog"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft className="mr-2 w-5 h-5" />
            Back to Blog
          </Link>
          <ShareButton post={post} />
        </nav>

        {/* HEADER */}
        <header className="mb-12">
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            {post.date && (
              <time dateTime={post.date} className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </time>
            )}
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            {post.title}
          </h1>

          {post.summary && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {post.summary}
              </p>
            </div>
          )}
        </header>

        {/* IMAGE */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="rounded-3xl mb-12 shadow-md"
            loading="eager"
          />
        )}

        {/* CONTENT */}
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm">
          {post.content?.map((section, i) => {

            if (section.type === "heading") {
              return (
                <h2
                  key={i}
                  className="text-2xl md:text-3xl font-bold mt-14 mb-6 text-gray-900"
                >
                  {section.text}
                </h2>
              );
            }

            if (section.type === "paragraph") {
              return (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed mb-6 text-lg"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              );
            }

            if (section.type === "bullet") {
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 mb-4 bg-blue-50 border border-blue-100 p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p
                    className="text-gray-800"
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                </div>
              );
            }

            if (section.type === "table") {
              return (
                <div key={i} className="overflow-x-auto my-12">
                  <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        {section.headers.map((head, idx) => (
                          <th
                            key={idx}
                            className="text-left px-6 py-4 text-gray-700 font-semibold"
                          >
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, rIndex) => (
                        <tr key={rIndex} className="border-t">
                          {row.map((cell, cIndex) => (
                            <td
                              key={cIndex}
                              className="px-6 py-4 text-gray-700"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Start Your ATM Franchise?
          </h3>

          <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
            Get expert guidance, site feasibility analysis, and real ROI projections
            before you invest. Our team helps you choose the right ATM partner
            based on your location and budget.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-800 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-300"
          >
            Book Free Consultation
          </Link>
        </div>

      </article>
    </div>
  );
};

export default BlogPostPage;
