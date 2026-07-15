import { asset } from "./assets";

export const companyData = {
  name: "Cottage Interior Decor & Building Maintenance L.L.C. S.P.C.",
  shortName: "Cottage",
  tagline: "Spaces Transformed. Buildings Maintained.",
  subTagline: "From Design Support to Execution & Aftercare.",
  description:
    "Cottage Interior Decor & Building Maintenance L.L.C. S.P.C. is an Abu Dhabi-based company specializing in interior fit-out, building maintenance, renovation, civil works, MEP services, and project execution for residential, commercial, retail, hospitality, government, and industrial sectors. We deliver complete turnkey solutions — from design support to execution and maintenance — with skilled in-house manpower and experienced project management.",
  foundedNote: "Interior Fit-Out • Civil Works • MEP • Facility Maintenance",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const heroData = {
  eyebrow: "Interior Fit-Out & Building Maintenance — Abu Dhabi, UAE",
  title: "Spaces Transformed.\nBuildings Maintained.",
  subtitle:
    "Complete turnkey solutions — interior fit-out, renovation, civil works, MEP, and facility maintenance — delivered end to end by skilled in-house teams.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "View Our Work",
  backgroundImage: asset("home/hero.webp"),
  stats: [
    { number: "12+", label: "Integrated Service Lines" },
    { number: "14+", label: "Industries Served" },
    { number: "100%", label: "In-House Manpower" },
    { number: "AMC", label: "Maintenance Contracts" },
  ],
};

export const aboutData = {
  eyebrow: "Who We Are",
  title: "One Team, From Fit-Out to Facility Care",
  description:
    "We believe a space should be built well and kept well. Cottage Interior Decor & Building Maintenance brings design support, fit-out, civil works, MEP, and ongoing maintenance under one roof — so clients deal with a single accountable team from the first site survey to years after handover. With skilled in-house manpower and experienced project management, we deliver quality workmanship on time and at competitive prices, across every sector we serve.",
  highlights: [
    { number: "12+", label: "Service lines under one roof" },
    { number: "14+", label: "Industries served across the UAE" },
    { number: "360°", label: "Turnkey delivery, design to handover" },
    { number: "AMC", label: "Annual contracts & emergency repairs" },
  ],
};

// Home page services (top 6 of our 12 disciplines)
export const services = [
  {
    id: 1,
    slug: "interior-fit-out",
    title: "Interior Fit-Out",
    description:
      "Complete turnkey fit-out for offices, restaurants, cafés, retail shops, villas, and apartments — from design support to handover.",
    icon: "layout-panel-left",
    features: [
      "Office, Restaurant & Retail Fit-Out",
      "Villa & Apartment Renovation",
      "Reception Areas",
      "Exhibition & Event Structures",
    ],
  },
  {
    id: 2,
    slug: "civil-works",
    title: "Civil Works",
    description:
      "Block work, plastering, concrete, interlock, kerbstone, road repair, excavation, trenching, and foundation works.",
    icon: "hard-hat",
    features: [
      "Block Work, Plastering & Concrete",
      "Interlock & Kerbstone Installation",
      "Excavation, Trenching & Foundations",
    ],
  },
  {
    id: 3,
    slug: "marble-tile-works",
    title: "Marble & Tile Works",
    description:
      "Marble, granite, porcelain, and travertine installation — plus bench fabrication, staircase and wall cladding.",
    icon: "gem",
    features: [
      "Marble, Granite & Porcelain Installation",
      "Staircase & Wall Cladding",
      "Bench Fabrication",
    ],
  },
  {
    id: 4,
    slug: "gypsum-works",
    title: "Gypsum & Ceiling Works",
    description:
      "Gypsum partitions, suspended and decorative ceilings, bulkheads, and acoustic ceiling systems.",
    icon: "layers",
    features: [
      "Gypsum Partitions",
      "Suspended & Decorative Ceilings",
      "Bulkheads & Acoustic Ceilings",
    ],
  },
  {
    id: 5,
    slug: "mep-services",
    title: "MEP Services",
    description:
      "Electrical, plumbing, drainage, and water supply works — DB installation, lighting, power distribution, and pumps.",
    icon: "zap",
    features: [
      "Electrical Works & DB Installation",
      "Plumbing, Drainage & Water Supply",
      "Lighting, Power Distribution & Pumps",
    ],
  },
  {
    id: 6,
    slug: "facility-maintenance",
    title: "Facility Maintenance",
    description:
      "Annual Maintenance Contracts, emergency repairs, preventive maintenance, and building inspections.",
    icon: "wrench",
    features: [
      "Annual Maintenance Contracts (AMC)",
      "Emergency Repairs",
      "Preventive Maintenance & Inspections",
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Turnkey Solutions",
    description:
      "One accountable team from design support through execution to aftercare — no juggling multiple contractors.",
  },
  {
    title: "Experienced Project Management",
    description:
      "Structured planning, coordination, and reporting that keep every trade moving and every milestone on track.",
  },
  {
    title: "Skilled In-House Workforce",
    description:
      "Our own fit-out, civil, MEP, and finishing crews — quality we control directly, not subcontracted away.",
  },
  {
    title: "High-Quality Workmanship",
    description:
      "Defined quality-assurance checks at every stage, from material selection to final snagging and handover.",
  },
  {
    title: "Timely Completion",
    description:
      "Realistic programmes and disciplined execution so your space opens — and stays open — on schedule.",
  },
  {
    title: "Competitive Pricing",
    description:
      "In-house delivery keeps overheads lean, letting us price competitively without cutting corners.",
  },
  {
    title: "Safety Compliance",
    description:
      "Safe systems of work, trained crews, and full compliance with UAE safety regulations on every site.",
  },
  {
    title: "Quality Assurance",
    description:
      "Structured QA at every stage — material inspection, stage checks, and snagging — documented before handover.",
  },
  {
    title: "Reliable After-Sales Service",
    description:
      "AMCs, preventive maintenance, and emergency repairs — we stand behind our work long after handover.",
  },
];

export const industries = [
  {
    name: "Government",
    description: "Fit-out, renovation, and maintenance for government buildings and public-sector facilities.",
  },
  {
    name: "Commercial & Offices",
    description: "Complete office fit-outs, reception areas, and commercial building renovation and upkeep.",
  },
  {
    name: "Villas & Residential",
    description: "Villa and apartment renovation — from single rooms to full turnkey transformations.",
  },
  {
    name: "Retail",
    description: "Retail shop fit-outs and maintenance built around fast timelines and minimal downtime.",
  },
  {
    name: "Mosques & Community",
    description: "Sensitive renovation and maintenance works for mosques and community facilities.",
  },
  {
    name: "Restaurants, Cafés & Hotels",
    description: "F&B and hospitality fit-outs that balance design, durability, and operational flow.",
  },
  {
    name: "Warehouses & Industrial",
    description: "Civil works, MEP, and maintenance for warehouses and industrial facilities.",
  },
  {
    name: "Schools & Public Facilities",
    description: "Renovation and maintenance for schools, public parks, and community infrastructure.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Consultation & Site Survey",
    description: "We visit your site, understand your requirements, and establish scope, budget, and timeline.",
  },
  {
    step: 2,
    title: "Design Support & Quotation",
    description: "Layouts, material options, and a clear, itemized quotation — so you know exactly what you're getting.",
  },
  {
    step: 3,
    title: "Materials & Approvals",
    description: "Material selection, samples, and any required approvals handled before work begins.",
  },
  {
    step: 4,
    title: "Execution",
    description: "Our in-house civil, fit-out, and MEP crews deliver the works under continuous supervision.",
  },
  {
    step: 5,
    title: "Quality Checks & Snagging",
    description: "Stage-by-stage inspections and a full snagging pass before we call anything finished.",
  },
  {
    step: 6,
    title: "Handover & Aftercare",
    description: "Clean handover with documentation — and AMC, preventive maintenance, and emergency support after.",
  },
];

export const ctaData = {
  title: "Ready to Transform Your Space?",
  description: "From a single room renovation to a full turnkey fit-out — let's talk about your project.",
  primaryCta: "Schedule Consultation",
  secondaryCta: "View Our Projects",
};

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Interior Fit-Out", href: "/services#interior-fit-out" },
    { label: "Civil Works", href: "/services#civil-works" },
    { label: "MEP Services", href: "/services#mep-services" },
    { label: "Facility Maintenance", href: "/services#facility-maintenance" },
  ],
  support: [
    { label: "FAQ", href: "/contact#faq" },
    { label: "Portfolio", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
};

// TODO: Replace all placeholder contact details below with the company's real
// phone, email, address, and website before going live.
export const contactInfo = {
  phone: "+971 X XXX XXXX",
  phoneHref: "tel:+971XXXXXXX",
  whatsappHref: "https://wa.me/971XXXXXXXXX",
  email: "info@cottagedecor.ae",
  address: "Abu Dhabi, United Arab Emirates",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Abu+Dhabi+United+Arab+Emirates",
  website: "www.cottagedecor.ae",
};

// ABOUT PAGE DATA
export const aboutPageHero = {
  eyebrow: "About Cottage",
  title: "Built Well. Kept Well.",
  description:
    "An Abu Dhabi-based interior fit-out and building maintenance company delivering complete turnkey solutions with skilled in-house manpower.",
  backgroundImage: asset("about/hero.webp"),
};

export const companyOverview = {
  image: asset("about/story.webp"),
  eyebrow: "Our Story",
  title: "Turnkey, From Day One",
  description:
    "Cottage Interior Decor & Building Maintenance L.L.C. S.P.C. was built around a simple observation: most projects go wrong in the gaps between contractors. So we removed the gaps. Our in-house teams cover interior fit-out, civil works, marble and tile, gypsum, painting, MEP, waterproofing, joinery, aluminium and glass, metal fabrication, and signage — with facility maintenance to keep it all performing after handover.\n\nFor our clients, that means one point of contact, one accountable team, and one consistent standard of workmanship — whether we're fitting out a restaurant, renovating a villa, or maintaining a government facility under an annual contract.",
  founderQuote:
    "Our promise is simple: we treat every project as if we'll be the ones maintaining it — because we usually are. That changes how you build. Materials are chosen to last, details are finished properly, and handover is the start of a relationship, not the end of one.",
  founderName: "The Management Team",
  founderTitle: "Cottage Interior Decor & Building Maintenance",
  cta: "Start Your Project",
};

export const visionMission = [
  {
    type: "vision",
    title: "Our Vision",
    description:
      "To be the contractor Abu Dhabi trusts by default — the one team clients call whether they need a space designed, built, renovated, or maintained. We aim to grow across the UAE on the strength of finished work and long-term client relationships.",
  },
  {
    type: "mission",
    title: "Our Mission",
    description:
      "Deliver complete turnkey fit-out, renovation, civil, and MEP solutions with skilled in-house manpower — on time, at competitive prices, and to a standard we are proud to maintain. Support every handover with reliable after-sales service and structured maintenance programmes.",
  },
];

export const coreValues = [
  { title: "Integrity", description: "Honest communication, transparent pricing, and no surprises." },
  { title: "Quality", description: "Workmanship and materials we are willing to maintain for years." },
  { title: "Safety", description: "Full compliance and safe systems of work on every site." },
  { title: "Reliability", description: "We show up, we finish on time, and we answer the phone after handover." },
  { title: "Craftsmanship", description: "Skilled in-house trades, not the cheapest available subcontractor." },
  { title: "Client Satisfaction", description: "Your space working the way you need it to — that's the finish line." },
];

export const aboutWhyChooseUs = whyChooseUs;

export const industriesServed = [
  { name: "Government", icon: "building-2" },
  { name: "Commercial Buildings", icon: "building" },
  { name: "Offices", icon: "monitor" },
  { name: "Retail", icon: "shopping-bag" },
  { name: "Restaurants", icon: "utensils" },
  { name: "Cafés", icon: "coffee" },
  { name: "Hotels", icon: "hotel" },
  { name: "Villas", icon: "home" },
  { name: "Residential Buildings", icon: "building" },
  { name: "Warehouses", icon: "box" },
  { name: "Industrial Facilities", icon: "factory" },
  { name: "Schools", icon: "school" },
  { name: "Mosques", icon: "archway" },
  { name: "Public Parks", icon: "trees" },
];

export const hsePoints = [
  { title: "Risk Assessments", description: "Suitable and sufficient risk assessments carried out before every project." },
  { title: "Incident Investigation", description: "Every incident and near-miss investigated to determine causes and prevent recurrence." },
  { title: "Safe Plant & Equipment", description: "All plant and equipment maintained to a safe, reliable operating standard." },
  { title: "Safe Systems of Work", description: "Documented safe systems of work applied consistently across every site." },
  { title: "Training & Supervision", description: "Adequate supervision, training, instruction, and information for every employee." },
];

export const safetyPolicy = {
  title: "Safety Policy Statement",
  intro:
    "Cottage Interior Decor & Building Maintenance L.L.C. S.P.C. is totally committed to the promotion of Health & Safety. Management provides, as far as is reasonably practicable, the leadership and resources required to maintain health and safety on every site. We recognize that Health & Safety is a business function that must continually progress and change — our approach is based on the identification and control of risks.",
  commitments: [
    "Constantly improving Health & Safety standards and performance.",
    "Ensuring all relevant statutes, regulations and Codes of Practice are complied with.",
    "Exceeding minimum legal standards wherever there is a demonstrable benefit.",
    "Treating safety as the responsibility of every employee, not just management.",
  ],
  provide: [
    "Safe plant and equipment",
    "Safe place of work",
    "Safe systems of work",
    "Adequate supervision, training, instruction and information",
  ],
  ensure: [
    "Review the policy annually, or on significant changes in our business",
    "Make any such changes known to our employees",
    "Maintain procedures for communication and consultation between all levels of staff on health & safety matters",
  ],
};

export const qualityAssurance = {
  eyebrow: "Quality Assurance",
  title: "Quality, Checked at Every Stage",
  description:
    "Quality is what makes turnkey delivery work. Because our own teams handle every trade, we apply one consistent standard across the whole project — with defined checks from material selection through execution to final snagging. We keep pace with the latest materials and methods so clients get full satisfaction in both quality and service.",
  steps: [
    { step: "Material Inspection", order: 1 },
    { step: "Execution", order: 2 },
    { step: "Stage Quality Checks", order: 3 },
    { step: "Snagging", order: 4 },
    { step: "Final Handover", order: 5 },
  ],
};

// SERVICES PAGE DATA
export const servicesPageHero = {
  eyebrow: "Our Services",
  title: "Twelve Trades. One Accountable Team.",
  description:
    "Interior fit-out, civil works, MEP, finishes, and facility maintenance — a complete range of building services delivered turnkey by in-house crews.",
  backgroundImage: asset("service/hero.webp"),
};

export const serviceCategories = [
  {
    id: "interior-fit-out",
    title: "Interior Fit-Out",
    description:
      "Complete turnkey fit-out for offices, restaurants, cafés, retail shops, villas, and apartments — including reception areas and exhibition or event structures. From design support to handover, one team delivers it all.",
    image: asset("service/s2.webp"),
    features: [
      "Complete Office Fit-Out",
      "Restaurant & Café Fit-Out",
      "Retail Shop Fit-Out",
      "Villa & Apartment Renovation",
      "Reception Areas",
      "Exhibition & Event Structures",
    ],
  },
  {
    id: "civil-works",
    title: "Civil Works",
    description:
      "Structural and external works handled by our own civil crews — from block work and concrete to roads, excavation, and foundations.",
    image: asset("about/mission.webp"),
    features: [
      "Block Work & Plastering",
      "Concrete Works",
      "Interlock & Kerbstone Installation",
      "Road Repair",
      "Excavation & Trenching",
      "Foundation Works",
    ],
  },
  {
    id: "marble-tile-works",
    title: "Marble & Tile Works",
    description:
      "Natural stone and tile installation finished to premium standards — marble, granite, porcelain, and travertine, plus fabrication and cladding.",
    image: asset("service/s3.webp"),
    features: [
      "Marble & Granite Installation",
      "Porcelain Tile Installation",
      "Travertine Installation",
      "Bench Fabrication",
      "Staircase & Wall Cladding",
    ],
  },
  {
    id: "gypsum-works",
    title: "Gypsum & Ceiling Works",
    description:
      "Partitions and ceilings that define interior spaces — from clean suspended grids to decorative and acoustic ceiling features.",
    image: asset("home/i6.webp"),
    features: [
      "Gypsum Partitions",
      "Suspended Ceilings",
      "Decorative Ceilings",
      "Bulkheads",
      "Acoustic Ceilings",
    ],
  },
  {
    id: "painting-works",
    title: "Painting Works",
    description:
      "Interior and exterior painting with the right coating for every surface — including textures, waterproof coatings, and protective systems.",
    image: asset("home/about-main.webp"),
    features: [
      "Interior Painting",
      "Exterior Painting",
      "Texture Paint",
      "Waterproof Coatings",
      "Protective Coatings",
    ],
  },
  {
    id: "mep-services",
    title: "MEP Services",
    description:
      "Electrical, plumbing, and drainage works delivered by qualified in-house technicians — from DB installation to pumps and power distribution.",
    image: asset("home/why.webp"),
    features: [
      "Electrical Works & DB Installation",
      "Plumbing & Drainage",
      "Water Supply",
      "Lighting & Power Distribution",
      "Pump Installation",
    ],
  },
  {
    id: "waterproofing",
    title: "Waterproofing",
    description:
      "Protection where buildings need it most — roofs, wet areas, and basements, including injection waterproofing for existing structures.",
    image: asset("home/i7.webp"),
    features: [
      "Roof Waterproofing",
      "Wet Area Waterproofing",
      "Basement Waterproofing",
      "Injection Waterproofing",
    ],
  },
  {
    id: "joinery",
    title: "Joinery & Carpentry",
    description:
      "Custom woodwork fabricated and installed to fit — cabinets, doors, wardrobes, reception counters, and bespoke wooden features.",
    image: asset("service/s5.webp"),
    features: [
      "Cabinets & Wardrobes",
      "Doors",
      "Reception Counters",
      "Custom Wooden Features",
    ],
  },
  {
    id: "aluminium-glass",
    title: "Aluminium & Glass",
    description:
      "Glass partitions, aluminium doors and windows, mirrors, and curtain walls — fabricated and installed to precise tolerances.",
    image: asset("service/s1.webp"),
    features: [
      "Glass Partitions",
      "Aluminium Doors & Windows",
      "Mirrors",
      "Curtain Walls",
    ],
  },
  {
    id: "metal-fabrication",
    title: "Stainless Steel & Metal Fabrication",
    description:
      "Custom metalwork that combines structural safety with architectural detail — railings, decorative panels, bollards, and cladding.",
    image: asset("service/s4.webp"),
    features: [
      "Railings",
      "Decorative Panels",
      "Bollards",
      "Custom Fabrication",
      "Metal Cladding",
    ],
  },
  {
    id: "signage",
    title: "Signage",
    description:
      "Indoor, outdoor, and illuminated signage — acrylic letters and complete wayfinding systems designed, fabricated, and installed.",
    image: asset("home/i8.webp"),
    features: [
      "Indoor & Outdoor Signage",
      "Illuminated Signage",
      "Acrylic Letters",
      "Wayfinding Systems",
    ],
  },
  {
    id: "facility-maintenance",
    title: "Facility Maintenance",
    description:
      "Keep your building performing long after handover — annual contracts, preventive programmes, inspections, and emergency repairs.",
    image: asset("home/cta.webp"),
    features: [
      "Annual Maintenance Contracts (AMC)",
      "Emergency Repairs",
      "Preventive Maintenance",
      "Building Inspections",
    ],
  },
];

// CONTACT PAGE DATA
export const contactPageHero = {
  eyebrow: "Get In Touch",
  title: "Let's Start Your Project",
  description: "We'd love to hear from you. Reach out to discuss your fit-out, renovation, or maintenance needs.",
  backgroundImage: asset("contact/hero.webp"),
};

export const contactDetails = [
  {
    type: "phone",
    label: "Phone",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
  },
  {
    type: "email",
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    type: "office",
    label: "Office",
    value: contactInfo.address,
    href: contactInfo.mapsHref,
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: contactInfo.phone,
    href: contactInfo.whatsappHref,
  },
];

export const contactForm = {
  fields: [
    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+971 XX XXX XXXX", required: true },
    { name: "company", label: "Company", type: "text", placeholder: "Your Company", required: false },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your project...", required: true },
  ],
  submitButton: "Send Message",
};

export const faqItems = [
  {
    question: "What services does Cottage provide?",
    answer:
      "We provide complete turnkey building services: interior fit-out, civil works, marble and tile, gypsum and ceilings, painting, MEP (electrical and plumbing), waterproofing, joinery, aluminium and glass, stainless steel and metal fabrication, signage, and facility maintenance including Annual Maintenance Contracts.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "We are based in Abu Dhabi and serve residential, commercial, retail, hospitality, government, and industrial clients across the UAE.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer:
      "Yes. We offer AMC packages covering preventive maintenance, building inspections, and emergency repairs — tailored to your property type and usage.",
  },
  {
    question: "Can I request a site visit?",
    answer:
      "Absolutely. A site survey is the first step of every project — it lets us understand your space and provide an accurate, itemized quotation.",
  },
  {
    question: "Do you handle complete turnkey projects?",
    answer:
      "Yes. Turnkey delivery is what we do best — one team handles design support, civil works, fit-out, MEP, finishes, and handover, then stays on for maintenance and after-sales support.",
  },
];

export const contactPageCTA = {
  title: "One Call. Every Trade.",
  description: "Transform your space with a single accountable team — from design support to long-term maintenance.",
  primaryCta: "Schedule Consultation",
  secondaryCta: "View Our Work",
};
