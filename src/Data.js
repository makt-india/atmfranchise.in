import {
  Home, Users, Briefcase, Feather, Mail,
  Zap, TrendingUp, DollarSign, CheckCircle,
  Activity, Shield, Wallet, Send, Settings, Landmark, Calendar, Target, Code,
  Globe, CreditCard, Award, Heart, Server, MapPin, BarChart3
} from 'lucide-react';

// --- Partner and Navigation Data ---

export const partnersData = [
  { 
    name: 'EPS', 
    view: 'PartnerEPS', 
    path: '/atm-franchise/eps', 
    icon: Zap, 
    imageUrl: "/img/common/eps-logo.webp", 
    image: "/img/eps/eps-hero.webp", 
    description: 'Electronic Payment and Services (EPS) stands as a titan in the payments industry, renowned for optimizing ATM operations with industry-leading 99.5% uptime and comprehensive end-to-end managed services.', 
    color: 'bg-blue-50', 
    imageText: 'High Efficiency & Uptime' 
  },
  { 
    name: 'Hitachi', 
    view: 'PartnerHitachi', 
    path: '/atm-franchise/hitachi', 
    icon: TrendingUp, 
    imageUrl: "/img/common/hitachi.webp", 
    image: "/img/hitachi/hitachihero2.webp", 
    description: 'Hitachi Payment Services brings global Japanese precision to cash management. They deliver secure, high-velocity transaction processing backed by a massive technological infrastructure.', 
    color: 'bg-emerald-50', 
    imageText: 'Global Technology Leader' 
  },
  { 
    name: 'Findi', 
    view: 'PartnerFindi', 
    path: '/atm-franchise/findi', 
    icon: DollarSign, 
    imageUrl: "/img/common/findi-logo.webp", 
    image: "/img/findi/Findihero.webp", 
    description: 'Findi Payments Bank is a champion of financial inclusion, aggressively bridging the banking gap in semi-urban India with a rapidly expanding network of highly accessible cash touchpoints.', 
    color: 'bg-amber-50', 
    imageText: 'Financial Inclusion Expert' 
  },
  { 
    name: 'India1', 
    view: 'PartnerIndia1', 
    path: '/atm-franchise/india1', 
    icon: CheckCircle, 
    imageUrl: "/img/common/india1-logo.webp", 
    image: "/img/india1/india1hero.webp", 
    description: 'India1 operates as the country’s largest White Label ATM operator. They specialize in high-penetration deployment within rural markets, driving massive transaction volumes and brand loyalty.', 
    color: 'bg-red-50', 
    imageText: 'Largest Rural Network' 
  },
];

export const testimonialsData = [
  {
    quote: "The operational support has been nothing short of phenomenal. My EPS ATM was fully installed and operational within just 15 days. The passive income generated has consistently exceeded my initial monthly financial projections.",
    name: "Rajesh Kumar",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
  },
  {
    quote: "I was initially skeptical about the White Label ATM model, but this partnership provided comprehensive legal and compliance guidance. It truly requires minimal effort for a solid, consistent 30% ROI.",
    name: "Anjali Mehta",
    location: "Pune, Maharashtra",
    rating: 5,
  },
  {
    quote: "Reliability is the cornerstone of the cash business. My Hitachi ATM rarely experiences downtime, and the cash loading support is incredibly prompt. It has been a hassle-free, profitable addition to my retail shop.",
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    rating: 4,
  },
  {
    quote: "The location vetting process was impressive and scientific. They didn't just place the machine anywhere; they identified a strategic spot in my town with guaranteed footfall near the central bus stand.",
    name: "Suresh Reddy",
    location: "Nellore, Andhra Pradesh",
    rating: 5,
  },
];

// --- Navigation Items ---
export const navItems = [
  { title: 'Home', path: '/', icon: Home },
  { title: 'About Us', path: '/about', icon: Users },
  { title: "Service", path: "/service" },

  { title: 'Blog', path: '/blog', icon: Feather },
  {
    title: 'ATM Franchise',
    path: '/atm-franchise',
    icon: Briefcase,
    isDropdown: true,
    children: partnersData.map(p => ({ title: p.name, path: p.path }))
  },
  { title: 'Contact Us', path: '/contact', icon: Mail },
];

export const expertiseData = [
  { icon: Activity, title: "Data-Driven Placement", text: "We utilize advanced analytics to study hyper-local demographics, spending patterns, and footfall density, guaranteeing optimal ATM placement for maximum revenue." },
  { icon: Calendar, title: "Decade of Experience", text: "Leveraging over 10 years of specialized industry expertise in successful White Label ATM deployment and franchise lifecycle management." },
  { icon: Settings, title: "Technical Excellence", text: "Seamless integration with certified WLA payment processing networks, backed by 24/7 technical monitoring and rapid-response maintenance." },
  { icon: Target, title: "High-Yield Focus", text: "Our franchise models are engineered to prioritize locations with high transaction volume potential, ensuring quicker break-even and higher profitability." },
  { icon: Code, title: "Regulatory Compliance", text: "Strict adherence to RBI guidelines, EMV standards, and security protocols ensures your franchise operates with total legal peace of mind." },
];

// --- About Us Section Data ---
export const VISION_TEXT = "To be India's leading catalyst for financial accessibility, revolutionizing the banking landscape by ensuring secure, reliable, and ubiquitous cash services reach every corner of the nation through a robust network of empowered White Label ATM franchisees.";
export const MISSION_TEXT = "Our mission is to democratize wealth creation by offering local entrepreneurs a high-yield, passive income business model. We partner with RBI-certified giants to serve the under-banked population, bridging the gap between digital banking and physical cash access.";

export const coreValuesData = [
  { 
    icon: Heart, 
    title: "Customer-Centricity", 
    text: "We place the end-user experience at the core of our operations, ensuring every ATM delivers seamless access, maximum uptime, and instant cash availability for the community." 
  },
  { 
    icon: TrendingUp, 
    title: "Sustainable Growth", 
    text: "We drive long-term success by deploying data-driven strategies that boost profitability, ensuring a steady, reliable income stream for our partners year after year." 
  },
  { 
    icon: Shield, 
    title: "Integrity & Compliance", 
    text: "We operate under strict RBI compliance and ethical standards, maintaining 100% transparency and ensuring secure, encrypted transactions across our entire network." 
  },
  { 
    icon: Wallet, 
    title: "Entrepreneur Empowerment", 
    text: "We transform shop owners into bankers by providing a low-maintenance, high-earning franchise model backed by strong logistical and technical support." 
  },
  { 
    icon: Globe, 
    title: "Financial Inclusion", 
    text: "We are deeply committed to bridging the rural-urban divide by aggressively expanding ATM access in underserved Tier 2, 3, and 4 regions." 
  },
];

export const partnerStatsData = {
  EPS: {
    subheading: "EPS is a pioneer in the payments industry, managing one of the most efficient and reliable ATM networks in India.",
    stats: [
      { label: "ATMs Installed", value: "12,000+" },
      { label: "States Covered", value: "28+" },
      { label: "Daily Transactions", value: "15 Lakh+" },
      { label: "Uptime Guarantee", value: "99.5%" },
    ],
  },
  Hitachi: {
    subheading: "Hitachi Payment Services drives financial agility with one of the largest, most secure, and technologically advanced ATM infrastructures.",
    stats: [
      { label: "ATMs Managed", value: "60,000+" },
      { label: "Market Presence", value: "20+ Years" },
      { label: "Tech Centers", value: "50+" },
      { label: "Uptime Guarantee", value: "99.8%" },
    ],
  },
  Findi: {
    subheading: "Findi is revolutionizing rural banking with a rapidly growing network of physical cash touchpoints tailored for semi-urban India.",
    stats: [
      { label: "Retail Points", value: "1,00,000+" },
      { label: "ATM Terminals", value: "7,500+" },
      { label: "Daily Users", value: "6 Lakh+" },
      { label: "Support Availability", value: "24/7" },
    ],
  },
  India1: {
    subheading: "India1 is the undisputed leader in the White Label ATM space, serving millions of rural customers daily with unmatched brand trust.",
    stats: [
      { label: "WLAs Deployed", value: "13,000+" },
      { label: "Cities Covered", value: "5,500+" },
      { label: "Monthly Txns", value: "12 Cr+" },
      { label: "Market Rank", value: "#1 WLA" },
    ],
  },
};

export const partnerPackagesData = {
  EPS: { premiumPrice: "4,00,000", cabinPrice: "3,40,000", sisPrice: "3,40,000" },
  Hitachi: { premiumPrice: "3,50,000", cabinPrice: "2,30,000", sisPrice: "2,00,000" },
  Findi: { premiumPrice: "3,00,000", cabinPrice: "2,00,000", sisPrice: "1,70,000" },
  India1: { premiumPrice: "3,80,000", cabinPrice: "2,60,000", sisPrice: "2,20,000" }
};

export const partnerPackageCardsData = {
  EPS: {
    premiumTitle: "EPS Platinum Franchise",
    premiumSub: "A high-performance package featuring advanced security protocols and priority access to technical support teams.",
    cabinSub: "Optimized for standalone cabins in high-density residential areas with steady footfall.",
    shopSub: "A zero-rent model ideal for supermarkets, pharmacies, and high-traffic retail outlets.",
    badges: ["99.5% Uptime", "Low Maintenance", "Priority Support"]
  },
  Hitachi: {
    premiumTitle: "Hitachi Elite Franchise",
    premiumSub: "Leverage global Japanese technology for the fastest transaction processing speeds in the market.",
    cabinSub: "Perfect solution for commercial hubs, business districts, and busy market squares.",
    shopSub: "Compact footprint designed specifically for high-footfall retail outlets and convenience stores.",
    badges: ["Global Tech", "Top Security", "Fast Processing"]
  },
  Findi: {
    premiumTitle: "Findi Growth Franchise",
    premiumSub: "Designed for rapid deployment and high scalability in semi-urban areas with high cash dependency.",
    cabinSub: "The best value model for aggressive expansion in Tier 2 & 3 cities.",
    shopSub: "A Plug-and-play model allowing existing shop owners to monetize extra space instantly.",
    badges: ["Fast Setup", "High ROI", "Rural Focus"]
  },
  India1: {
    premiumTitle: "India1 Prime Franchise",
    premiumSub: "Join India's largest network with massive brand recognition and unshakeable customer trust.",
    cabinSub: "The most popular and recognizable model for rural market centers and village hubs.",
    shopSub: "High visibility model perfect for busy transport hubs and bus stations.",
    badges: ["#1 Brand", "Trusted Network", "High Volume"]
  }
};

// --- Why Choose Data (Updated Colors to Blue/Slate) ---
export const partnerWhyData = {
EPS: [
{
  title: "Operational Excellence & 99.9% Uptime Architecture",
  text: `
    EPS is recognised as one of India’s most reliable
    <span class="text-blue-600 font-bold">White Label ATM (WLA) operators</span>.
    Its platform is built on an enterprise-grade transaction engine designed for
    high-volume loads, real-time monitoring, and uninterrupted performance.
    <br/><br/>
    Advanced AI diagnostics continuously track terminal health, predict faults
    before they occur, and trigger proactive service — keeping your ATM live
    and transacting even when other machines in the area go offline.
    <br/><br/>
    The result is a consistently higher 
    <span class="text-slate-900 font-bold">Transaction Success Rate (TSR)</span>,
    which directly translates into stable, predictable earnings every single day
    for franchise owners.
  `,
  text2: `
    When you partner through
    <span class="text-slate-900 font-bold">findiatmfranchise.com</span>,
    you plug into the same high-availability infrastructure that powers
    millions of secure ATM transactions across India.
    EPS uses banking-grade encryption, hardened data centres, and
    fully-redundant network routes to keep your ATM online, secure,
    and revenue-ready 24×7 — with almost zero manual effort from your side.
    <br/><br/>
    From day one, you benefit from a battle-tested stack:
    centralised switch, 24×7 NOC, automated alerts, and compliance-ready
    processes that meet strict banking and regulatory expectations.
  `,
  points: [
    "99.5%+ historical uptime, helping maximise daily transaction volume",
    "24×7 NOC monitoring across every deployed terminal in the network",
    "AI‑powered predictive maintenance to minimise unplanned downtime",
    "Automated cash forecasting and alerts to prevent cash‑out situations",
    "Fastest technical response and resolution times in the WLA ecosystem",
    "Banking-grade security standards across hardware, software, and networks",
    "Scalable architecture ready for UPI, ICCW, and future payment rails"
  ],
  image: "/img/eps/eps2.webp"
},
{
  title: "Next-Gen UPI & Cardless Cash (ICCW) Support",
  text: `
    <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm flex flex-col sm:flex-row items-start gap-5">
      
      <div class="shrink-0">
        <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>

      <div>
        <h4 class="text-xl font-bold text-blue-900 mb-2">
          Grow Revenue with UPI Cardless Cash
        </h4>
        
        <p class="text-blue-800 text-sm leading-relaxed mb-2">
          Our latest EPS ATMs are fully <span class="font-bold">UPI-integrated</span>.
          Customers simply <span class="font-bold">scan a QR code</span> on the ATM screen
          using <strong>PhonePe, Google Pay, or Paytm</strong> to withdraw cash instantly –
          with no physical debit card required.
        </p>

        <p class="text-blue-800 text-sm leading-relaxed mb-2">
          This <span class="font-bold">Interoperable Cardless Cash Withdrawal (ICCW)</span> flow
          is fast, secure, and familiar to India’s digital users, which means more
          successful transactions at your ATM and higher monthly commission for you.
        </p>

        <p class="text-blue-700 font-semibold text-sm italic">
          Even when customers forget their card, your ATM remains their go‑to cash point – and you earn on every approved transaction.
        </p>
      </div>

    </div>
  `,
  text2: `
    As an ATM franchise owner with
    <span class="font-bold text-slate-900">OwnATM.in</span>,
    adopting UPI‑based withdrawals is no longer a “nice to have” — it is essential.
    It turns your terminal into a 
    <span class="text-blue-700 font-bold">digital‑first cash access point</span>
    that fits perfectly into India’s UPI‑driven payment lifestyle.
    <br/><br/>
    This single feature can significantly lift footfall from younger,
    digital‑native users who rarely carry debit cards but always carry their phones,
    helping your location capture more transactions than nearby legacy ATMs.
  `,
  points: [
    "Scan & withdraw instantly via GPay, PhonePe & Paytm",
    "No debit card needed — ideal for digital‑first customers",
    "Earn full commission on every UPI / ICCW transaction",
    "Eliminates risk of card skimming, cloning, or card capture",
    "Attracts high‑frequency, high‑volume digital users",
    "Future‑ready rail for upcoming UPI and ICCW enhancements"
  ],
  image: "/img/eps/eps1.webp"
}

  ],



  Hitachi: [

  {
    title: "World-Class Banking Technology",
    text: `
      Hitachi Payment Services brings
      <span class="text-blue-600 font-bold">Japanese technological precision</span>
      and global banking expertise to the Indian ATM ecosystem.
      Their terminals are engineered for <span class="font-bold">high-speed transaction processing</span>,
      rock‑solid reliability, and advanced fraud defence — even in demanding,
      high‑footfall locations.
      <br/><br/>
      Each Hitachi ATM is built on industrial‑grade components and
      <span class="text-slate-900 font-bold">EMV-compliant hardware</span>,
      delivering smoother customer experiences, fewer errors, and stronger
      protection against skimming and card misuse.
    `,
    text2: `
      Choosing a Hitachi-powered ATM franchise means choosing
      <span class="text-slate-900 font-bold">banking-grade security</span>
      and performance. From secure encryption and tamper‑resistant design to
      finely tuned cash handling mechanisms, every element is optimised to
      keep transactions fast, accurate, and safe — building long‑term trust
      with your customers and your local market.
    `,
    points: [
      "Ultra-fast, reliable transaction processing for shorter queues",
      "Advanced anti-skimming and EMV-compliant card reader technology",
      "Rugged, bank-grade build quality for heavy daily usage",
      "Optimised cash dispensing to reduce jams and transaction failures",
      "Designed to perform in both metro and rural environments"
    ],
    image: "/img/hitachi/hitachi1.webp"
  },
  {
    title: "Robust Support Infrastructure",
    text: `
      With a nationwide service footprint and a dense network of field
      engineers, Hitachi ensures <span class="text-blue-600 font-bold">quick on-ground support</span>
      whenever your ATM needs attention.
      Their central <span class="text-blue-600 font-bold">National Command Center</span>
      monitors every terminal in real time — tracking uptime, cash levels,
      error codes, and suspicious activity 24/7.
      <br/><br/>
      This always‑on monitoring allows Hitachi to act before a small issue
      becomes downtime, keeping your ATM available, trusted, and top‑of‑mind
      for repeat users.
    `,
    text2: `
      For a franchise owner, this translates into fewer service disruptions,
      smoother cash replenishment, and happier customers.
      Hitachi’s <span class="text-slate-900 font-bold">proactive maintenance model</span>
      and structured cash management cycles help your site maintain
      consistently high uptime — directly supporting higher transaction
      volumes and stronger monthly income.
    `,
    points: [
      "24/7 centralised real-time monitoring of all deployed ATMs",
      "Efficient and secure cash replenishment and reconciliation cycles",
      "Proactive maintenance alerts with rapid issue resolution",
      "Local field support presence across major regions",
      "Higher uptime and reliability, leading to repeat customer usage"
    ],
    image: "/img/hitachi/hitachi2.webp"
  }
],
  Findi: [
  {
    title: "Untapped Market Potential",
    text: `
      Findi strategically focuses on 
      <span class="text-blue-600 font-bold">underserved Tier 2, Tier 3 and rural markets</span>,
      where traditional bank branches are limited but daily cash demand remains very high.
      In these locations, even a single ATM can become a critical part of the local financial ecosystem.
      <br/><br/>
      By hosting a Findi ATM, you position yourself as the 
      <span class="text-slate-900 font-bold">primary cash point</span> for your neighbourhood — 
      serving salaried employees, shopkeepers, farmers, and pensioners who depend on 
      easy, nearby cash access.
    `,
    text2: `
      This creates a powerful win‑win:
      the community gains convenient access to their own money and you enjoy
      <span class="text-slate-900 font-bold">steady, recurring footfall</span>
      into your shop or premises every single day.
      In many Findi locations, the ATM is the only reliable cash outlet within a large radius,
      making it a staple stop for residents and travellers alike.
    `,
    points: [
      "Low competition and high visibility in target micro-markets",
      "Extremely high repeat usage as locals adopt your ATM as their default cash point",
      "Positions you as a vital community service provider, not just a business owner",
      "Backed by one of India’s largest independent, non-bank ATM operators"
    ],
    image: "/img/findi/findi.webp"
  },
  {
    title: "Volume-Driven Earnings",
    text: `
      In Findi’s focus geographies, ATM density is still low compared to metro cities,
      so each machine typically handles 
      <span class="text-blue-600 font-bold">significantly higher transaction volumes</span>
      than ATMs in already saturated urban clusters.
      Instead of fighting for a small share of traffic, your ATM can dominate local demand.
      <br/><br/>
      This <span class="font-bold">volume-based earning model</span> converts every extra withdrawal,
      balance enquiry or mini-statement into more commission for you, turning your location
      into a high‑throughput, high‑impact cash point.
    `,
    text2: `
      The Findi ATM franchise model is designed for 
      <span class="text-slate-900 font-bold">strong returns on a compact footprint</span>.
      ATMs are optimised for small retail spaces while still handling heavy daily traffic,
      helping you achieve faster ROI without needing a large shop or extensive renovation.
      For many partners, the ATM becomes the most consistent income stream within their premises.
    `,
    points: [
      "High daily footfall in low‑ATM, high‑cash‑demand zones",
      "Optimised for small retail footprints (≈80 sq.ft. works efficiently)",
      "Faster ROI potential driven by strong transaction volumes",
      "End‑to‑end ATM setup, monitoring & maintenance handled by FindiATM",
      "Earn on every approved transaction while Findi manages the technology backbone"
    ],
    image: "/img/findi/findi2.webp"
  }
],

  India1: [
  {
    title: "The Power of Brand Trust",
    text: `
      As one of India’s most recognised White Label ATM brands, customers
      actively look for the <span class="text-blue-600 font-bold">India1 logo</span>
      when they need cash in semi‑urban and rural locations.
      Strong brand recall and trust mean more walk‑ins to your ATM
      compared to unbranded or lesser‑known machines.
      <br/><br/>
      For many users, an India1 ATM symbolises
      <span class="text-slate-900 font-bold">safety, reliability and familiar service</span>,
      which directly converts into higher footfall and more transactions
      at your franchise location.
    `,
    text2: `
      By joining the India1 network, you become part of an ecosystem that
      serves <span class="text-slate-900 font-bold">millions of Indians every day</span>
      across towns and villages.
      You leverage a brand already trusted by salary earners, shop owners,
      farmers and pensioners — instead of building awareness from zero.
      This built‑in trust gives your ATM an immediate advantage from day one.
    `,
    points: [
      "Instantly recognisable, high‑trust ATM brand in non‑metro India",
      "Higher comfort and repeat usage compared to unbranded ATMs",
      "Brand strength that acts like free marketing for your location",
      "Positive perception with banks, merchants and end‑customers alike"
    ],
    image: "/img/india1/i1.webp"
  },
  {
    title: "Optimized for Rural Economy",
    text: `
      India1 has perfected the operational model for
      <span class="text-blue-600 font-bold">rural and semi‑urban logistics</span>.
      Their cash loading, route planning and maintenance schedules are
      designed specifically for non‑metro geographies where access roads,
      distances and demand patterns are very different from big cities.
      <br/><br/>
      This ground‑level expertise ensures your ATM stays funded, functional
      and dependable — so customers quickly make it their default cash point.
    `,
    text2: `
      The India1 model is built around the realities of the
      <span class="text-slate-900 font-bold">cash‑driven rural economy</span>:
      frequent withdrawals for daily needs, government benefits,
      remittances and small‑ticket spends.
      Their network design and support systems aim to keep your terminal
      live and liquid, helping you maintain a
      <span class="text-slate-900 font-bold">continuous, location‑independent revenue flow</span>,
      even when broader economic conditions are volatile.
    `,
    points: [
      "Specialised rural logistics and service network focused on smaller towns and villages",
      "Cash management tuned to actual rural withdrawal patterns",
      "Business model aligned with India’s long‑term cash demand in Bharat",
      "Stable, resilient income stream less affected by urban competition",
      "Stronger stickiness as the ‘only reliable ATM’ in the catchment area"
    ],
    image: "/img/india1/i2.webp"
  }
]
};

export const partnerReqEligibilityData = {
  EPS: {
    subheading: "Prerequisites for establishing a successful EPS ATM Franchise.",
    requirements: [
      { label: "Carpet Area", value: "60–80 sq. ft. (Clear rectangular shape preferred)" },
      { label: "Power Load", value: "1 KVA Single Phase + Proper Earthing" },
      { label: "Connectivity", value: "VSAT / Wired Broadband / Strong 4G" },
      { label: "Visibility", value: "Ground floor, road-facing location preferred" },
      { label: "V-SAT Space", value: "Roof access required for antenna installation" }
    ],
    eligibility: [
      "Indian Citizen / Registered Partnership / LLP",
      "Clean financial record (CIBIL > 700 preferred)",
      "Ownership proof or valid rental agreement",
      "Capacity for initial investment (₹2-3 Lakhs)",
      "Commitment to daily cleaning and monitoring"
    ]
  },
  Hitachi: {
    subheading: "Technical and site standards for Hitachi Money Spot ATMs.",
    requirements: [
      { label: "Room Dimensions", value: "Min 8 ft x 10 ft (Dedicated Cabin)" },
      { label: "Shop-in-Shop", value: "Min 4 ft x 4 ft (Counter side placement)" },
      { label: "Power Backup", value: "UPS with 4-hour backup mandatory" },
      { label: "Surveillance", value: "Provision for CCTV installation" },
      { label: "Flooring", value: "Tiled/Concrete flooring required" }
    ],
    eligibility: [
      "Individual > 18 years or Private Ltd Company",
      "Full KYC compliance (PAN, Aadhaar, GST if applicable)",
      "No criminal record / Police Verification required",
      "Financial capability for refundable deposit",
      "Active involvement in site maintenance"
    ]
  },
  Findi: {
    subheading: "Operational requirements to join the growing Findi network.",
    requirements: [
      { label: "Total Space", value: "40–60 sq. ft. (Flexible configurations)" },
      { label: "Electrical", value: "Standard commercial connection" },
      { label: "Network", value: "Good 4G signal strength area" },
      { label: "Facade", value: "Space for 8ft x 3ft Glow Sign Board" },
      { label: "Location", value: "High footfall (Markets, Bus Stands)" }
    ],
    eligibility: [
      "Existing shop owners or new entrepreneurs",
      "Valid Bank Account for settlements",
      "Local residence proof",
      "Investment readiness (₹1.5–2.5 Lakhs)",
      "Basic tech literacy for reporting"
    ]
  },
  India1: {
    subheading: "Criteria for becoming a partner with India1.",
    requirements: [
      { label: "Cabin Size", value: "Minimum 50 sq. ft." },
      { label: "Power", value: "Stabilized power supply + Earthing" },
      { label: "Data", value: "Feasibility for VSAT installation" },
      { label: "Structure", value: "Concrete roof/walls for security" },
      { label: "Access", value: "24/7 Public Access required" }
    ],
    eligibility: [
      "Resident Individual / Proprietorship",
      "PAN Card & Aadhaar Card mandatory",
      "NOC from landlord (if rented)",
      "Investment capital ₹2–3 Lakhs",
      "Willingness for long-term lease (3-5 years)"
    ]
  }
};


export const whyAtmFranchiseData = [
  { 
    icon: Wallet, 
    title: "High Passive Income", 
    text: "Unlock a steady, reliable revenue stream. With a <span class='text-blue-600 font-bold'>WLA ATM Franchise</span>, you earn a fixed commission on every single transaction (financial & non-financial). Successful locations generate an <span class='text-slate-900 font-bold'>ROI of 35-50% annually</span>."
  },
  { 
    icon: TrendingUp, 
    title: "High Demand Market", 
    text: "Cash is the lifeline of the Indian economy. Tap into a market with <span class='text-slate-900 font-bold'>guaranteed footfall</span>. Unlike retail trends that fade, the demand for instant cash access is perennial and recession-proof."
  },
  { 
    icon: CreditCard, 
    title: "Asset-Lite Model", 
    text: "Begin your journey with <span class='text-blue-600 font-bold'>optimized capital expenditure</span>. The setup includes branding, installation, and network connectivity. You avoid the high overheads of inventory, massive staffing, or marketing."
  },
  { 
    icon: Shield, 
    title: "Zero Regulatory Hassle", 
    text: "We partner exclusively with <span class='text-blue-600 font-bold'>RBI-approved operators</span>. All compliance, cash logistics, and network security are managed centrally, making this a <span class='text-slate-900 font-bold'>stress-free business model</span> for you."
  },
];

export const timelineStepsData = [
  { 
    title: "Application & Partner Match", 
    description: "Submit your inquiry online. Our team analyzes your pin code potential and matches you with the best provider—<b>Tata Indicash, Hitachi, or India1</b>—to maximize your expected monthly ROI." 
  },
  { 
    title: "Site Feasibility Check", 
    description: "Our engineers conduct a physical survey of your shop or commercial space. We verify <b>High Footfall</b>, power stability, and <b>RBI Safety Guidelines</b> to ensure the location is profitable." 
  },
  { 
    title: "Agreement & Fast Setup", 
    description: "Sign the official <b>Franchise Agreement</b>. We handle the complete logistics—shipping, VSAT installation, and branding—getting your ATM ready in just <b>10-14 Days</b>." 
  },
  { 
    title: "Go Live & Monthly Payouts", 
    description: "The machine is loaded with cash by secure agencies. You start earning <b>₹8-₹15 per transaction</b> immediately. Enjoy transparent <b>Monthly Settlements</b> directly to your bank account." 
  },
];
export const HERO_IMAGE_URL = `/img/common/main1.webp`;