import { asset } from "./assets";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  value?: string;
  contractor?: string;
  consultant?: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  images: string[];
  overview: string;
  scope: string[];
  highlights: string[];
  status: "completed" | "featured";
  relatedProjects: string[];
}

// NOTE: This is a representative portfolio illustrating Cottage's typical
// project types and scopes. Replace each entry with real completed projects
// (titles, locations, durations, photos) as they become available.
export const projects: Project[] = [
  {
    id: "p01",
    slug: "corporate-office-fit-out",
    title: "Corporate Office Fit-Out",
    category: "Offices",
    location: "Abu Dhabi, UAE",
    year: "8–12 weeks",
    description:
      "Complete turnkey office fit-out — gypsum partitions, suspended ceilings, glass partitions, flooring, joinery, MEP, and a custom reception area.",
    shortDescription: "Turnkey office fit-out from shell to move-in ready.",
    heroImage: asset("service/hs2.webp"),
    images: [asset("service/s2.webp"), asset("service/hs2.webp"), asset("contact/side.webp")],
    overview:
      "A typical corporate fit-out engagement takes a unit from bare shell to move-in ready. Our in-house teams handle gypsum partitioning and ceilings, glass-partitioned meeting rooms, electrical and data distribution, lighting, flooring, painting, and custom joinery — including reception counters and storage — under one programme and one point of contact.",
    scope: [
      "Gypsum partitions & suspended ceilings",
      "Glass partitions & aluminium doors",
      "Electrical, lighting & DB installation",
      "Flooring, painting & joinery",
      "Reception area build-out",
    ],
    highlights: [
      "Single team across every trade",
      "Move-in ready handover with snagging complete",
    ],
    status: "featured",
    relatedProjects: ["restaurant-cafe-fit-out", "retail-shop-fit-out"],
  },
  {
    id: "p02",
    slug: "restaurant-cafe-fit-out",
    title: "Restaurant & Café Fit-Out",
    category: "F&B",
    location: "Abu Dhabi, UAE",
    year: "6–10 weeks",
    description:
      "F&B fit-out covering kitchen MEP, dining area finishes, decorative ceilings, custom counters, and signage — built for authority approvals and fast opening.",
    shortDescription: "F&B fit-out built for approvals and fast opening.",
    heroImage: asset("project/cafe.webp"),
    images: [asset("home/i6.webp"), asset("service/s5.webp"), asset("service/hs5.webp")],
    overview:
      "Restaurant and café projects demand tight coordination between front-of-house finishes and back-of-house services. We deliver kitchen plumbing, drainage, and power; dining-area flooring, gypsum features, and decorative ceilings; custom counters and joinery; and illuminated signage — sequenced so inspections and approvals never hold up the opening date.",
    scope: [
      "Kitchen MEP — plumbing, drainage & power",
      "Dining area finishes & decorative ceilings",
      "Custom counters & joinery",
      "Illuminated signage",
    ],
    highlights: [
      "Approval-ready MEP documentation",
      "Sequenced for the fastest possible opening",
    ],
    status: "featured",
    relatedProjects: ["corporate-office-fit-out", "hospitality-refurbishment"],
  },
  {
    id: "p03",
    slug: "retail-shop-fit-out",
    title: "Retail Shop Fit-Out",
    category: "Retail",
    location: "Abu Dhabi, UAE",
    year: "4–8 weeks",
    description:
      "Retail fit-out with display joinery, feature lighting, flooring, storefront glass, and wayfinding signage — delivered around mall working-hour restrictions.",
    shortDescription: "Retail fit-out delivered around mall restrictions.",
    heroImage: asset("project/shop.webp"),
    images: [asset("home/i4.webp"), asset("home/i8.webp")],
    overview:
      "Retail units come with landlord requirements, night-shift working windows, and hard opening dates. Our crews deliver display joinery, feature lighting and power, flooring, storefront glazing, and signage on programmes planned around mall operating restrictions — with snagging and handover documentation ready for landlord inspection.",
    scope: [
      "Display joinery & shelving",
      "Feature lighting & power",
      "Flooring & painting",
      "Storefront glass & signage",
    ],
    highlights: [
      "Night-shift capable crews",
      "Landlord inspection-ready handover",
    ],
    status: "completed",
    relatedProjects: ["corporate-office-fit-out", "restaurant-cafe-fit-out"],
  },
  {
    id: "p04",
    slug: "villa-renovation",
    title: "Full Villa Renovation",
    category: "Residential",
    location: "Abu Dhabi, UAE",
    year: "10–16 weeks",
    description:
      "Complete villa renovation — marble flooring, bathroom remodelling, kitchen joinery, gypsum ceilings, painting, MEP upgrades, and waterproofing.",
    shortDescription: "Whole-villa transformation, structure to finishes.",
    heroImage: asset("project/villa.webp"),
    images: [asset("home/i3.webp"), asset("service/s3.webp"), asset("service/hs3.webp")],
    overview:
      "A full villa renovation touches every one of our trades: civil alterations, marble and tile throughout, remodelled bathrooms with new plumbing and waterproofing, custom kitchen and wardrobe joinery, gypsum ceilings, complete repainting, and upgraded electrical distribution. One team carries the family from design choices to a finished home.",
    scope: [
      "Marble & tile flooring",
      "Bathroom remodelling & waterproofing",
      "Kitchen & wardrobe joinery",
      "Gypsum ceilings & painting",
      "Electrical & plumbing upgrades",
    ],
    highlights: [
      "Every trade delivered in-house",
      "Design support through material selection",
    ],
    status: "featured",
    relatedProjects: ["apartment-renovation", "hospitality-refurbishment"],
  },
  {
    id: "p05",
    slug: "apartment-renovation",
    title: "Apartment Renovation",
    category: "Residential",
    location: "Abu Dhabi, UAE",
    year: "4–8 weeks",
    description:
      "Apartment upgrades — kitchen and bathroom renovation, flooring, painting, and joinery — planned around building management rules and occupied-unit logistics.",
    shortDescription: "Apartment upgrades around building-management rules.",
    heroImage: asset("home/i2.webp"),
    images: [asset("home/i2.webp"), asset("service/hs5.webp")],
    overview:
      "Apartment works bring their own constraints: building-management permits, service-lift bookings, working-hour limits, and neighbours on every side. We plan renovations around these realities — kitchens, bathrooms, flooring, painting, and built-in joinery — keeping dust, noise, and disruption tightly controlled.",
    scope: [
      "Kitchen & bathroom renovation",
      "Flooring & painting",
      "Built-in joinery & wardrobes",
      "Minor MEP modifications",
    ],
    highlights: [
      "Building-management coordination handled",
      "Clean, contained site practices",
    ],
    status: "completed",
    relatedProjects: ["villa-renovation", "corporate-office-fit-out"],
  },
  {
    id: "p06",
    slug: "hospitality-refurbishment",
    title: "Hospitality Refurbishment",
    category: "Hospitality",
    location: "Abu Dhabi, UAE",
    year: "8–14 weeks",
    description:
      "Hotel and hospitality refurbishment — lobby finishes, decorative ceilings, stone cladding, metal and glass features, and phased works around live operations.",
    shortDescription: "Refurbishment phased around live hotel operations.",
    heroImage: asset("service/s4.webp"),
    images: [asset("service/s4.webp"), asset("home/i6.webp")],
    overview:
      "Hospitality refurbishment means working inside a live, guest-facing environment. We phase lobby and public-area works — stone and tile, decorative gypsum ceilings, stainless steel and glass balustrades, painting, and lighting — so operations continue while spaces transform section by section.",
    scope: [
      "Lobby & public area finishes",
      "Stone cladding & decorative ceilings",
      "Stainless steel & glass features",
      "Phased execution around operations",
    ],
    highlights: [
      "Zero-closure phased delivery",
      "Guest-environment site standards",
    ],
    status: "completed",
    relatedProjects: ["restaurant-cafe-fit-out", "villa-renovation"],
  },
  {
    id: "p07",
    slug: "government-facility-maintenance",
    title: "Government Facility Maintenance (AMC)",
    category: "Government",
    location: "Abu Dhabi, UAE",
    year: "Annual contract",
    description:
      "Annual maintenance covering preventive programmes, building inspections, MEP servicing, and emergency repairs for government and public-sector facilities.",
    shortDescription: "AMC coverage for public-sector facilities.",
    heroImage: asset("home/i1.webp"),
    images: [asset("home/i1.webp"), asset("home/why.webp")],
    overview:
      "Under an Annual Maintenance Contract, our teams take responsibility for keeping a facility performing: scheduled preventive maintenance, periodic building inspections, electrical and plumbing servicing, finishing repairs, and a rapid-response channel for emergencies — all documented and reported to facility management.",
    scope: [
      "Preventive maintenance programme",
      "Periodic building inspections",
      "Electrical & plumbing servicing",
      "Emergency repair response",
    ],
    highlights: [
      "Documented, report-backed servicing",
      "Rapid-response emergency coverage",
    ],
    status: "featured",
    relatedProjects: ["warehouse-civil-mep", "mosque-renovation-works"],
  },
  {
    id: "p08",
    slug: "warehouse-civil-mep",
    title: "Warehouse Civil & MEP Package",
    category: "Industrial",
    location: "Abu Dhabi, UAE",
    year: "6–12 weeks",
    description:
      "Industrial works package — block work, concrete, interlock and kerbstone, power distribution, lighting, drainage, and roof waterproofing.",
    shortDescription: "Civil, MEP & waterproofing for industrial facilities.",
    heroImage: asset("home/i7.webp"),
    images: [asset("home/i7.webp"), asset("about/mission.webp"), asset("service/mid.webp")],
    overview:
      "Warehouse and industrial clients need durable, low-maintenance works delivered without disrupting operations. Typical packages combine civil works — block work, concrete, interlock, kerbstones — with electrical distribution and industrial lighting, drainage, and roof waterproofing, executed to handle daily operational wear.",
    scope: [
      "Block work & concrete works",
      "Interlock & kerbstone installation",
      "Power distribution & industrial lighting",
      "Drainage & roof waterproofing",
    ],
    highlights: [
      "Built for operational durability",
      "Works phased around live operations",
    ],
    status: "completed",
    relatedProjects: ["government-facility-maintenance", "corporate-office-fit-out"],
  },
  {
    id: "p09",
    slug: "mosque-renovation-works",
    title: "Mosque Renovation Works",
    category: "Community",
    location: "Abu Dhabi, UAE",
    year: "6–10 weeks",
    description:
      "Sensitive renovation for mosques and community buildings — stone and marble works, painting, gypsum repair, lighting, and washroom refurbishment.",
    shortDescription: "Respectful renovation of mosques & community buildings.",
    heroImage: asset("home/i5.webp"),
    images: [asset("home/i5.webp"), asset("service/s3.webp")],
    overview:
      "Community and religious buildings call for careful, respectful execution. Our renovation scopes cover marble and stone restoration, internal and external painting, gypsum and ceiling repair, lighting upgrades, washroom and ablution area refurbishment, and waterproofing — scheduled around prayer times and community use.",
    scope: [
      "Marble & stone works",
      "Interior & exterior painting",
      "Gypsum & ceiling repair",
      "Washroom & ablution refurbishment",
    ],
    highlights: [
      "Works scheduled around prayer times",
      "Respectful, clean site conduct",
    ],
    status: "completed",
    relatedProjects: ["government-facility-maintenance", "villa-renovation"],
  },
];

export const projectCategories = [
  "All",
  "Offices",
  "F&B",
  "Retail",
  "Residential",
  "Hospitality",
  "Government",
  "Industrial",
  "Community",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return projects.filter((p) => slugs.includes(p.slug));
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.status === "featured").slice(0, 6);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
