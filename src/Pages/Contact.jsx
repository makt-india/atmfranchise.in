import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Aperture,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

/* =========================================
   SEO — FIXED & ENHANCED FOR 2025
========================================= */
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];
const providers = [
  "India1 ATM",
  "Findi ATM",
  "Hitachi ATM",
  "EPS Bancs",
  "Other"
];
const languages = [
  "English",
  "Hindi",
  "Tamil",
  "Kannada",
  "Telugu",
  "Malayalam",


  "Other"
];
const messageSuggestions = [
  "I want to apply for an ATM franchise.",
  "I need full investment and ROI details.",
  "I want to check location eligibility.",
  "Please call me and explain the process.",
  "I already have a shop and want to install an ATM."
];







const ContactSEO = () => {

  const title =
    "Contact ATM Franchise India – Apply for ATM Franchise in India";

  const description =
    "Apply for ATM Franchise in India. Contact our team for investment cost, commission structure, location eligibility and RBI-compliant White Label ATM setup guidance.";

  const canonical = "https://atmfranchise.in/contact";
  const image = "https://atmfranchise.in/assets/contact-banner.webp";
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

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ATM Franchise India" />

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
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-88833-35553",
                "email": "maktin.help@gmail.com",
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
              "name": "ATM Franchise in India",
              "publisher": {
                "@id": "https://atmfranchise.in/#organization"
              }
            },

            {
              "@type": "WebPage",
              "@id": `${canonical}#webpage`,
              "url": canonical,
              "name": title,
              "dateModified": modifiedDate,
              "isPartOf": {
                "@id": "https://atmfranchise.in/#website"
              }
            },

            {
              "@type": "ContactPage",
              "@id": `${canonical}#contactpage`,
              "url": canonical,
              "name": title,
              "description": description,
              "isPartOf": {
                "@id": "https://atmfranchise.in/#website"
              },
              "about": {
                "@id": "https://atmfranchise.in/#organization"
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
                  "name": "Contact",
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


/* =========================================
   HERO
========================================= */
const ContactUsHero = () => (
  <div className="relative pt-32 pb-40 md:pt-40 md:pb-48 bg-slate-900 overflow-hidden">
    <img
      src="/img/common/contact.webp"
      alt="Contact ATM Franchise India Experts"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80";
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-900/40" />

    <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Let's Start Your <span className="text-emerald-400">ATM Business</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Speak directly with our experts to understand investment costs, income
        potential, and location eligibility. We are here to guide you.
      </p>
    </div>
  </div>
);

/* =========================================
   CONTACT FORM
========================================= */
const ContactForm = () => {
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [error, setError] = useState("");

const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  email: "",
  city: "",
  provider: "",
  language: "",
  message: "",

});

const formatPhone = (phone) => {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return "91" + digits;
  }

  if (digits.startsWith("91") && digits.length === 12) {
    return digits;
  }

  return digits;
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (isSubmitting || isSuccess) return;

  setError("");
  setIsSuccess(false);

  // 🛑 Honeypot Bot Protection
  if (formData.company && formData.company.trim() !== "") {
    return; // bot detected silently
  }

  const cleanPhone = formatPhone(formData.phone);

  // 🔴 Strict Indian mobile validation
  if (!/^91[6-9]\d{9}$/.test(cleanPhone)) {
    setError("Enter valid 10-digit Indian mobile number.");
    return;
  }

  // 🔴 Required fields validation (LANGUAGE ADDED)
  if (
    !formData.fullName.trim() ||
    !formData.city.trim() ||
    !formData.email.trim() ||
    !formData.provider ||
    !formData.language ||
    !formData.message.trim()
  ) {
    setError("Please fill all required fields.");
    return;
  }

  // 🔴 Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    setError("Enter valid email address.");
    return;
  }

  setIsSubmitting(true);

  try {
    const formDataToSend = new FormData();

    formDataToSend.append("name", formData.fullName.trim());
    formDataToSend.append("phone", cleanPhone);
    formDataToSend.append("email", formData.email.trim());
    formDataToSend.append("city", formData.city.trim());
    formDataToSend.append("provider", formData.provider);

    // ✅ LANGUAGE APPENDED TO SHEET
    formDataToSend.append("language", formData.language);

    formDataToSend.append("message", formData.message.trim());

    // 🔵 Sheet tracking
    formDataToSend.append("source", "atmfranchise");
    formDataToSend.append("wa_status", "Pending");

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzMwI2gQAKJSHTSHKSi78wimhCvYfbMpOMcICWMw5cEetQWFnYT7vXqu5H-JPsegUy3/exec",
      {
        method: "POST",
        body: formDataToSend,
      }
    );

    const text = await response.text();
    const result = text.trim().toLowerCase();

    if (response.ok && result.includes("success")) {
      setIsSuccess(true);

      // 📱 Scroll to top so success message is visible
      window.scrollTo({ top: 0, behavior: "smooth" });

      // 🔄 Reset form including honeypot + language
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        provider: "",
        language: "",
        message: "",
        company: ""
      });

      // ⏳ Auto clear success after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } else if (result.includes("duplicate")) {
      setError("This mobile number already applied.");
    } else {
      setError("Something went wrong. Please try again.");
    }

  } catch (err) {
    setError("Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="p-8 md:p-12 bg-white h-full">
      <h3 className="text-2xl font-bold text-slate-800 mb-2">
        Send us a Message
      </h3>
      <p className="text-slate-500 mb-8 text-sm">
        Fill out the form below and we will get back to you within 24 hours.
      </p>

<form onSubmit={handleSubmit} className="space-y-6">

  {/* Hidden Honeypot Field (Spam Protection) */}
  <input
    type="text"
    name="company"
    value={formData.company}
    onChange={handleChange}
    className="hidden"
    autoComplete="off"
  />

  {isSuccess && (
    <Message
      icon={CheckCircle}
      text="Enquiry submitted! Our ATM specialist will contact you shortly."
      type="success"
    />
  )}

  {error && (
    <Message
      icon={AlertCircle}
      text={error}
      type="error"
    />
  )}

  <Input
    label="Full Name"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    required
    placeholder="ex. Sankar"
  />

  <Input
    label="Email Address"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="ex. maktin.help@gmail.com"
  />

  <Input
    label="Phone Number"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    required
    placeholder="ex. +91 98765 43210"
  />

  {/* State Dropdown */}
  <SelectField
    label="State"
    name="city"
    value={formData.city}
    onChange={handleChange}
    required
  >
    <option value="">Select Your State</option>
    {indianStates.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ))}
  </SelectField>

  {/* Provider Dropdown */}
  <SelectField
    label="Preferred ATM Provider"
    name="provider"
    value={formData.provider}
    onChange={handleChange}
    required
  >
    <option value="">Select Provider</option>
    {providers.map((provider) => (
      <option key={provider} value={provider}>
        {provider}
      </option>
    ))}
  </SelectField>

  {/* Language Dropdown */}
  <SelectField
    label="Preferred Language"
    name="language"
    value={formData.language}
    onChange={handleChange}
    required
  >
    <option value="">Select Language</option>
    {languages.map((lang) => (
      <option key={lang} value={lang}>
        {lang}
      </option>
    ))}
  </SelectField>

  {/* Message Dropdown + Typing */}
  <div className="space-y-1.5">
    <label className="block text-sm font-semibold text-slate-700">
      Your Message / Query
    </label>

    <Input
      name="message"
      value={formData.message}
      onChange={handleChange}
      list="messageOptions"
      required
      placeholder="Select a query or type your own..."
    />

    <datalist id="messageOptions">
      {messageSuggestions.map((item) => (
        <option key={item} value={item} />
      ))}
    </datalist>
  </div>

  <button
    disabled={isSubmitting || isSuccess}
    className="group w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
  >
    {isSubmitting ? (
      <Aperture className="animate-spin w-5 h-5" />
    ) : (
      <>
        Submit Enquiry
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </>
    )}
  </button>

</form>
    </div>
  );
}

/* =========================================
   HELPERS
========================================= */
const Input = ({ label, list, ...props }) => (
  <div className="space-y-1.5">
    <label className="block text-sm font-semibold text-slate-700">
      {label}
    </label>
    <input
      {...props}
      list={list}
      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 text-slate-800"
    />
  </div>
);


const Message = ({ icon: Icon, text, type }) => (
  <div
    className={`p-4 rounded-lg flex items-start border ${
      type === "success"
        ? "bg-emerald-50 border-emerald-100 text-emerald-700"
        : "bg-red-50 border-red-100 text-red-700"
    }`}
  >
    <Icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const ContactInfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">
        {label}
      </h4>
      <p className="text-lg font-medium text-white break-words">{value}</p>
    </div>
  </div>
);
const SelectField = ({ label, children, ...props }) => (
  <div className="space-y-1.5">
    <label className="block text-sm font-semibold text-slate-700">
      {label}
    </label>
    <select
      {...props}
      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 text-slate-800"
    >
      {children}
    </select>
  </div>
);


/* =========================================
   MAIN PAGE
========================================= */
const ContactUsPage = () => (
  <div className="min-h-screen bg-slate-50 font-sans">
    <ContactSEO />
    <ContactUsHero />

    <section className="relative -mt-20 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-5">
          
          <div className="md:col-span-3 order-2 md:order-1">
            <ContactForm />
          </div>

          <div className="md:col-span-2 order-1 md:order-2 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-10">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Contact Info</h3>
                <p className="text-slate-400 text-sm">
                  Reach out to us directly through any of these channels.
                </p>
              </div>

              <div className="space-y-8">
                <ContactInfoItem 
                  icon={Phone} 
                  label="Call Us" 
                  value="+91 88833 35553" 
                />
                <ContactInfoItem 
                  icon={Mail} 
                  label="Email Us" 
                  value="maktin.help@gmail.com" 
                />
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 leading-relaxed">
                Our advisors assist with ATM location approval, investment
                breakdown, partner selection (Findi, EPS, Hitachi, India1) and
                onboarding guidance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default ContactUsPage;