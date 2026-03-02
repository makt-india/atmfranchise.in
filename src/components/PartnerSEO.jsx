import { Helmet } from "react-helmet-async";

const PartnerSEO = ({ partner }) => {
  if (!partner) return null;

  const name = partner.name;
  const slug = partner.path?.split("/").pop();

  const title = `${name} ATM Franchise in India 2026 – Cost, Investment, Profit & Apply Online`;
  const description = `Looking for ${name} ATM Franchise in India? Check latest 2026 investment cost, commission per transaction, monthly profit margin, eligibility criteria and RBI compliant setup process.`;

  const canonical = `https://atmfranchise.in/atm-franchise/${slug}`;
  const image = `https://atmfranchise.in/img/partners/${slug}-og.png`;

  const publishedDate = "2024-01-01";
  const modifiedDate = new Date().toISOString();

  return (
    <Helmet prioritizeSeoTags>

      {/* ================= PRIMARY SEO ================= */}

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link rel="canonical" href={canonical} />

      {/* ================= OPEN GRAPH ================= */}

      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="ATM Franchise India" />
      <meta property="og:image" content={image} />
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
              }
            },

            {
              "@type": "WebPage",
              "@id": `${canonical}#webpage`,
              "url": canonical,
              "name": title,
              "isPartOf": {
                "@id": "https://atmfranchise.in/#website"
              },
              "about": {
                "@type": "Service",
                "name": `${name} ATM Franchise`
              }
            },

            {
              "@type": "Article",
              "@id": `${canonical}#article`,
              "headline": title,
              "description": description,
              "image": image,
              "datePublished": publishedDate,
              "dateModified": modifiedDate,
              "author": {
                "@id": "https://atmfranchise.in/#organization"
              },
              "publisher": {
                "@id": "https://atmfranchise.in/#organization"
              },
              "mainEntityOfPage": {
                "@id": `${canonical}#webpage`
              }
            },

            {
              "@type": "Service",
              "name": `${name} ATM Franchise`,
              "url": canonical,
              "description": description,
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "provider": {
                "@id": "https://atmfranchise.in/#organization"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": "200000",
                  "maxPrice": "500000",
                  "priceCurrency": "INR"
                },
                "availability": "https://schema.org/InStock",
                "url": canonical
              }
            },

            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `What is the cost of ${name} ATM Franchise in India?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The investment typically ranges between ₹2 lakh to ₹5 lakh depending on city category, rental cost and operator setup requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": `How much profit can I earn from ${name} ATM Franchise?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Monthly earnings depend on transaction volume and interchange commission. High traffic locations generate stronger ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": `Is ${name} ATM Franchise RBI approved?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "White Label ATM operators in India function under RBI regulatory framework. Compliance and approval depend on the operator’s licensing status."
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
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "ATM Franchise",
                  "item": "https://atmfranchise.in/atm-franchise"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": name,
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

export default PartnerSEO;