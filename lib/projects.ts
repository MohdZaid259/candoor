export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  value: string;
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

export const projects: Project[] = [
  {
    id: "p01",
    slug: "barakah-om-building",
    title: "Operations & Maintenance Building — Barakah Nuclear Power Plant",
    category: "Government",
    location: "Barakah, Abu Dhabi",
    year: "2016 – 2017",
    value: "AED 4,350,000",
    contractor: "Yoomyung Engineering & Construction",
    consultant: "Samsung & Hyundai Joint Venture (KEPCO)",
    description:
      "Full curtain wall and structural glazing package for the Operations & Maintenance Building at the Barakah Nuclear Power Plant, delivered under a Samsung & Hyundai joint-venture consultancy.",
    shortDescription: "Curtain wall & structural glazing for a national utility landmark.",
    heroImage: "/work/braka-om-building__a.jpg",
    images: ["/work/braka-om-building__a.jpg", "/work/braka-om-building__b.jpg"],
    overview:
      "One of CanDoor's most significant government engagements, this project called for a fully glazed, high-performance curtain wall envelope for the O&M facility at the Barakah Nuclear Power Plant. Working within the strict compliance framework of a national utility project and under the oversight of the Samsung & Hyundai Joint Venture (KEPCO), our team delivered a facade system built to exacting structural and safety standards.",
    scope: [
      "Aluminium curtain wall system",
      "Structural glazing",
      "Aluminium thermal break sections",
      "Aluminium composite cladding",
    ],
    highlights: [
      "Delivered for a national nuclear utility facility",
      "Consultant oversight by Samsung & Hyundai JV (KEPCO)",
      "Full-height structural glazing envelope",
    ],
    status: "featured",
    relatedProjects: ["bnpp-workers-village-sila", "emirates-post-khalifa-city"],
  },
  {
    id: "p02",
    slug: "bnpp-workers-village-sila",
    title: "BNPP Workers Village-1 (G+1, 10 Buildings)",
    category: "Government",
    location: "Sila, Abu Dhabi",
    year: "2012 – 2013",
    value: "AED 4,800,000",
    contractor: "Yoomyung ENC Engineering & Construction",
    consultant: "Hyundai – Samsung Joint Venture",
    description:
      "Aluminium doors, windows and cladding across a ten-building workers' village supporting the Barakah Nuclear Power Plant project.",
    shortDescription: "Doors, windows & cladding across a 10-building workers village.",
    heroImage: "/work/bnpp-workers-village__b.jpg",
    images: [
      "/work/bnpp-workers-village__a.jpg",
      "/work/bnpp-workers-village__b.jpg",
      "/work/bnpp-workers-village__c.jpg",
    ],
    overview:
      "Supporting the wider Barakah Nuclear Power Plant program, CanDoor delivered aluminium and glazing works across ten ground-plus-one buildings forming Workers Village-1 in Sila. The scale of the project — repeated across multiple buildings — demanded consistent quality control and fabrication precision on every unit.",
    scope: [
      "Aluminium doors & windows (thermal & non-thermal)",
      "Aluminium composite cladding",
      "Structural glazing",
    ],
    highlights: [
      "10 buildings delivered to a consistent standard",
      "Supporting the Barakah Nuclear Power Plant program",
      "Consultant oversight by Hyundai–Samsung JV",
    ],
    status: "completed",
    relatedProjects: ["barakah-om-building", "warehouse-office-dynatrade"],
  },
  {
    id: "p03",
    slug: "warehouse-office-dynatrade",
    title: "Warehouse & Office for Dynatrade",
    category: "Industrial",
    location: "M-15, Musaffah, Abu Dhabi",
    year: "2017 – 2018",
    value: "AED 600,000",
    contractor: "Al Muwasim General Contracting LLC",
    description:
      "Aluminium and glass storefront systems and cladding detail for a warehouse and office facility in Musaffah.",
    shortDescription: "Storefront glazing & cladding for an industrial warehouse and office.",
    heroImage: "/work/dynatrade-warehouse__a.jpg",
    images: ["/work/dynatrade-warehouse__a.jpg", "/work/dynatrade-warehouse__b.jpg"],
    overview:
      "This combined warehouse and office facility required durable, low-maintenance aluminium glazing at the storefront and office frontage, paired with aluminium composite cladding across the elevation — balancing industrial function with a clean, professional street presence.",
    scope: [
      "Aluminium composite cladding",
      "Aluminium doors & windows",
      "Structural glazing",
    ],
    highlights: ["Combined warehouse & office delivery", "Clean storefront glazing frontage"],
    status: "completed",
    relatedProjects: ["warehouse-offices-m11", "commercial-al-ruaa"],
  },
  {
    id: "p04",
    slug: "office-building-khalidiya",
    title: "Office Building — Khalidiya Road",
    category: "Commercial",
    location: "Khalidiya Road, Abu Dhabi",
    year: "2017 – 2018",
    value: "AED 600,000",
    contractor: "Al Raid Aluminium & Glass LLC",
    description:
      "Striking architectural curtain wall glazing for a distinctive office building on Khalidiya Road.",
    shortDescription: "Architectural curtain wall glazing on a landmark office building.",
    heroImage: "/work/office-khalidiya__a.jpg",
    images: ["/work/office-khalidiya__a.jpg", "/work/office-khalidiya__b.jpg"],
    overview:
      "With its sculptural aluminium fins and full-height blue glazing, this Khalidiya Road office building called for precise structural glazing work to bring the architect's vision to life. CanDoor delivered the glass and aluminium envelope across the building's distinctive angular facade.",
    scope: [
      "Aluminium curtain wall",
      "Structural glazing",
      "Aluminium thermal break sections",
    ],
    highlights: ["Sculptural architectural facade", "Full-height structural glazing"],
    status: "featured",
    relatedProjects: ["commercial-al-braq", "daikin-company"],
  },
  {
    id: "p05",
    slug: "commercial-building-zaal",
    title: "Commercial Building for Mr. Zaal",
    category: "Commercial",
    location: "Moh'd Bin Zayed City, M-10",
    year: "2009 – 2010",
    value: "AED 1,423,500",
    contractor: "Palm Arabian Gen. Cont. Co.",
    consultant: "Shaheen Engineering Consultancy",
    description:
      "Full aluminium and glass glazing package for a Ground + Mezzanine + 7 Floor + Roof commercial tower.",
    shortDescription: "Full glazing package for a G+M+7-floor commercial tower.",
    heroImage: "/work/commercial-zaal__a.jpg",
    images: ["/work/commercial-zaal__a.jpg", "/work/commercial-zaal__b.jpg"],
    overview:
      "A ground-plus-mezzanine-plus-seven-floor commercial building in Mohammed Bin Zayed City, this project required consistent aluminium window and glazing installation across every floor of the tower, delivered under the supervision of Shaheen Engineering Consultancy.",
    scope: [
      "Aluminium doors & windows",
      "Aluminium composite cladding",
      "Structural glazing",
    ],
    highlights: ["7-storey commercial tower", "Full-elevation glazing consistency"],
    status: "completed",
    relatedProjects: ["commercial-building-hadi", "commercial-al-hada"],
  },
  {
    id: "p06",
    slug: "mosque-renovation",
    title: "9-Nos Mosque Renovation",
    category: "Religious",
    location: "Abu Dhabi",
    year: "2017 – 2018",
    value: "AED 980,000",
    contractor: "Rama Real Estate & General Contracting LLC",
    description: "Sensitive renovation works across nine mosques throughout Abu Dhabi.",
    shortDescription: "Renovation works delivered across nine mosques.",
    heroImage: "/work/mosque-renovation__a.jpg",
    images: ["/work/mosque-renovation__a.jpg", "/work/mosque-renovation__b.jpg"],
    overview:
      "A sensitive, multi-site renovation program spanning nine mosques across Abu Dhabi. Working around active places of worship required careful sequencing, respectful site management, and close coordination with the contractor to complete works without disrupting the community.",
    scope: [
      "Aluminium doors & windows",
      "Designer & specialty glass",
      "Structural glazing",
    ],
    highlights: ["9 mosques renovated", "Careful, community-conscious execution"],
    status: "completed",
    relatedProjects: ["villa-junaibi", "commercial-al-hada"],
  },
  {
    id: "p07",
    slug: "commercial-building-hadi",
    title: "Commercial Building for Mr. Hadi",
    category: "Commercial",
    location: "Mohamad Bin Zayed City, M-12",
    year: "2012",
    value: "AED 1,252,000",
    contractor: "Al Aqsa Eyes General Contracting Co.",
    consultant: "American Consultancy",
    description:
      "Aluminium window glazing across a bold red-and-white G+M+7-floor commercial building.",
    shortDescription: "Full-facade glazing on a striking red & white commercial tower.",
    heroImage: "/work/commercial-hadi__a.jpg",
    images: ["/work/commercial-hadi__a.jpg", "/work/commercial-hadi__b.jpg"],
    overview:
      "A visually bold commercial building finished in a striking red and white striped facade, this ground-plus-mezzanine-plus-seven-floor tower required precise aluminium window installation across every band of the elevation to match the architect's high-contrast design intent.",
    scope: [
      "Aluminium doors & windows",
      "Structural glazing",
    ],
    highlights: ["Bold high-contrast facade design", "7-storey commercial tower"],
    status: "completed",
    relatedProjects: ["commercial-building-zaal", "commercial-al-hada"],
  },
  {
    id: "p08",
    slug: "commercial-al-hada",
    title: "Commercial Building for Al Hada",
    category: "Commercial",
    location: "Shabia Khalifa, Abu Dhabi",
    year: "2010",
    value: "AED 1,250,000",
    contractor: "Al Wadhihi General Cont.",
    description:
      "Ornate stone-clad commercial tower with detailed aluminium window and glazing surrounds.",
    shortDescription: "Detailed glazing surrounds on an ornate commercial tower.",
    heroImage: "/work/commercial-al-hada__a.jpg",
    images: ["/work/commercial-al-hada__a.jpg", "/work/commercial-al-hada__b.jpg"],
    overview:
      "This ground-plus-mezzanine-plus-seven-floor tower in Shabia Khalifa combines classical stone detailing with modern glazing — every window surround finished with precision to complement the building's ornate facade language.",
    scope: [
      "Aluminium doors & windows",
      "Structural glazing",
      "Designer glass",
    ],
    highlights: ["Classical stone & glass facade", "7-storey commercial tower"],
    status: "completed",
    relatedProjects: ["commercial-building-hadi", "commercial-building-zaal"],
  },
  {
    id: "p09",
    slug: "emirates-post-khalifa-city",
    title: "Emirates Post Office Building",
    category: "Government",
    location: "Khalifa City, Abu Dhabi",
    year: "2008 – 2009",
    value: "AED 1,614,000",
    contractor: "Solid General Contracting LLC",
    description:
      "Full curtain wall glazing for a Ground + 3 Floor + Roof Emirates Post office building.",
    shortDescription: "Curtain wall glazing for a federal postal facility.",
    heroImage: "/work/emirates-post-khalifa-city__a.jpg",
    images: ["/work/emirates-post-khalifa-city__a.jpg", "/work/emirates-post-khalifa-city__b.jpg"],
    overview:
      "A federal postal facility in Khalifa City, this ground-plus-three-floor building was delivered with a full blue-tinted curtain wall system, giving Emirates Post a clean, contemporary public-facing presence.",
    scope: [
      "Aluminium curtain wall",
      "Structural glazing",
      "Aluminium doors & windows",
    ],
    highlights: ["Federal postal facility", "Full curtain wall envelope"],
    status: "completed",
    relatedProjects: ["emirates-post-al-rahba", "barakah-om-building"],
  },
  {
    id: "p10",
    slug: "royal-bakery",
    title: "Royal Bakery Office Building",
    category: "Commercial",
    location: "Musaffah, Abu Dhabi",
    year: "2010",
    value: "AED 298,000",
    contractor: "Golden Gate General Contracting LLC",
    description: "Reflective aluminium composite cladding and glazing for a Ground + 1 office building.",
    shortDescription: "Reflective cladding & glazing for a compact office building.",
    heroImage: "/work/royal-bakery__a.jpg",
    images: ["/work/royal-bakery__a.jpg", "/work/royal-bakery__b.jpg"],
    overview:
      "A compact, ground-plus-one office building in Musaffah, finished with reflective aluminium composite cladding panels and full-height glazing at ground level — delivering a polished, contemporary look for a modest footprint.",
    scope: [
      "Aluminium composite cladding",
      "Structural glazing",
      "Aluminium doors & windows",
    ],
    highlights: ["Reflective cladding facade", "Ground + 1 office building"],
    status: "completed",
    relatedProjects: ["office-al-dharmiki-icad", "warehouse-office-dynatrade"],
  },
  {
    id: "p11",
    slug: "village-mall",
    title: "Village Mall",
    category: "Retail",
    location: "Musaffah, Abu Dhabi",
    year: "2010s",
    value: "AED 1,100,000",
    contractor: "Arabian Industries",
    description: "Large-scale aluminium glazing package for a Ground + 3 Floor retail mall.",
    shortDescription: "Large-scale glazing package for a ground + 3 floor retail mall.",
    heroImage: "/work/village-mall__b.jpg",
    images: ["/work/village-mall__a.jpg", "/work/village-mall__b.jpg", "/work/village-mall__c.jpg"],
    overview:
      "One of our largest retail commissions, Village Mall's ground-plus-three-floor structure required an extensive aluminium and glass glazing package across its full perimeter — coordinated closely with the main contractor through every phase of a large, multi-storey construction program.",
    scope: [
      "Aluminium curtain wall",
      "Structural glazing",
      "Aluminium composite cladding",
    ],
    highlights: ["Ground + 3 floor retail mall", "Full-perimeter glazing package"],
    status: "featured",
    relatedProjects: ["warehouse-offices-m11", "emirates-post-al-rahba"],
  },
  {
    id: "p12",
    slug: "emirates-post-al-rahba",
    title: "Emirates Post Office Building",
    category: "Government",
    location: "Al Rahba City, Sheikh Zayed Road, Abu Dhabi",
    year: "2010s",
    value: "AED 1,846,000",
    contractor: "Solid General Contracting LLC",
    description: "Full curtain wall glazing for a Ground + 3 Floor + Roof Emirates Post facility on Sheikh Zayed Road.",
    shortDescription: "Curtain wall glazing on a landmark Sheikh Zayed Road facility.",
    heroImage: "/work/emirates-post-al-rahba__b.jpg",
    images: ["/work/emirates-post-al-rahba__a.jpg", "/work/emirates-post-al-rahba__b.jpg"],
    overview:
      "A second major Emirates Post commission, this ground-plus-three-floor facility on Sheikh Zayed Road called for a complete curtain wall installation across a large, multi-elevation structure — one of the highest-value contracts in our portfolio.",
    scope: [
      "Aluminium curtain wall",
      "Structural glazing",
      "Aluminium doors & windows",
    ],
    highlights: ["Highest-value contract in our portfolio", "Landmark Sheikh Zayed Road location"],
    status: "featured",
    relatedProjects: ["emirates-post-khalifa-city", "village-mall"],
  },
  {
    id: "p13",
    slug: "commercial-al-braq",
    title: "Commercial Building for Al Braq",
    category: "Commercial",
    location: "Airport Road, Abu Dhabi",
    year: "2006 – 2007",
    value: "AED 450,000",
    contractor: "Al Dharmiki General Cont.",
    description: "Aluminium composite cladding and window glazing for a Ground + Mezzanine + 5 Floor + Roof building.",
    shortDescription: "Cladding & glazing on a 5-floor Airport Road commercial tower.",
    heroImage: "/work/commercial-al-braq__a.jpg",
    images: ["/work/commercial-al-braq__a.jpg", "/work/commercial-al-braq__b.jpg"],
    overview:
      "One of our earliest commercial commissions, this ground-plus-mezzanine-plus-five-floor building on Airport Road was finished with a two-tone aluminium composite cladding system and precision window glazing across every level.",
    scope: [
      "Aluminium composite cladding",
      "Aluminium doors & windows",
    ],
    highlights: ["Two-tone cladding facade", "5-storey commercial building"],
    status: "completed",
    relatedProjects: ["office-al-dharmiki-icad", "commercial-al-ruaa"],
  },
  {
    id: "p14",
    slug: "emirati-kitchen-emirates-palace",
    title: "Emirati Kitchen — Emirates Palace Hotel",
    category: "Hospitality",
    location: "Abu Dhabi",
    year: "2017 – 2018",
    value: "AED 487,000",
    contractor: "Al Ruba General Contracting",
    description: "Stone-clad kitchen facility built for the Emirati Kitchen at Emirates Palace Hotel.",
    shortDescription: "Facade works for a kitchen facility at Emirates Palace Hotel.",
    heroImage: "/work/emirati-kitchen__b.jpg",
    images: ["/work/emirati-kitchen__a.jpg", "/work/emirati-kitchen__b.jpg"],
    overview:
      "Delivered for the prestigious Emirates Palace Hotel, this dedicated Emirati Kitchen facility required precise aluminium door and window installation finished to a standard befitting one of Abu Dhabi's most recognized hospitality addresses.",
    scope: [
      "Aluminium doors & windows",
      "Structural glazing",
    ],
    highlights: ["Delivered for Emirates Palace Hotel", "Premium hospitality-grade finish"],
    status: "featured",
    relatedProjects: ["daikin-company", "village-mall"],
  },
  {
    id: "p15",
    slug: "commercial-al-ruaa",
    title: "Commercial Building for Al Ruaa",
    category: "Commercial",
    location: "Musaffah, Abu Dhabi",
    year: "2010",
    value: "AED 450,000",
    description: "Storefront glazing for a Ground + 1 Floor commercial building housing Streamline Express & Logistics.",
    shortDescription: "Storefront glazing for a ground + 1 commercial building.",
    heroImage: "/work/commercial-al-ruaa__a.jpg",
    images: ["/work/commercial-al-ruaa__a.jpg", "/work/commercial-al-ruaa__b.jpg"],
    overview:
      "A ground-plus-one commercial building in Musaffah, finished with continuous storefront glazing and aluminium framing across its full street frontage — designed to give ground-floor tenants like Streamline Express & Logistics maximum visibility.",
    scope: [
      "Aluminium doors & windows",
      "Structural glazing",
    ],
    highlights: ["Continuous storefront glazing", "Ground + 1 commercial building"],
    status: "completed",
    relatedProjects: ["warehouse-office-dynatrade", "commercial-al-braq"],
  },
  {
    id: "p16",
    slug: "warehouse-offices-m11",
    title: "Warehouse & Offices Building",
    category: "Industrial",
    location: "M-11, Musaffah, Abu Dhabi",
    year: "2017 – 2018",
    value: "AED 1,150,000",
    contractor: "Ivory General Contracting LLC",
    description: "Aluminium cladding and glazing across a multi-unit warehouse and offices development.",
    shortDescription: "Cladding & glazing across a multi-unit warehouse development.",
    heroImage: "/work/warehouse-m11__a.jpg",
    images: ["/work/warehouse-m11__a.jpg", "/work/warehouse-m11__b.jpg", "/work/warehouse-m11__c.jpg"],
    overview:
      "A multi-building warehouse and office development in Musaffah's M-11 zone, featuring distinctive arched aluminium-framed glazing along the warehouse elevations and clean office glazing across the adjoining units.",
    scope: [
      "Aluminium composite cladding",
      "Aluminium doors & windows",
      "Structural glazing",
    ],
    highlights: ["Multi-building industrial development", "Distinctive arched glazing units"],
    status: "completed",
    relatedProjects: ["warehouse-office-dynatrade", "sabgra-studio-flats"],
  },
  {
    id: "p17",
    slug: "sabgra-studio-flats",
    title: "Studio Flats Building for Sabgra Properties",
    category: "Residential",
    location: "Musaffah, Abu Dhabi",
    year: "2010 – 2011",
    value: "AED 525,000",
    contractor: "Al Muwasim General Contracting LLC",
    description: "Aluminium window and cladding package for a Ground + 1 studio flats residential building.",
    shortDescription: "Window & cladding package for a studio flats residential building.",
    heroImage: "/work/sabgra-studio-flats__a.jpg",
    images: ["/work/sabgra-studio-flats__a.jpg", "/work/sabgra-studio-flats__b.jpg"],
    overview:
      "A ground-plus-one residential studio flats building developed for Sabgra Properties, delivered with aluminium composite cladding and window systems across the full building envelope.",
    scope: [
      "Aluminium composite cladding",
      "Aluminium doors & windows",
    ],
    highlights: ["Residential studio flats development", "Full envelope cladding & glazing"],
    status: "completed",
    relatedProjects: ["warehouse-offices-m11", "villa-junaibi"],
  },
  {
    id: "p18",
    slug: "daikin-company",
    title: "Daikin Company",
    category: "Corporate",
    location: "Dubai, UAE",
    year: "2026",
    value: "AED 500,000",
    contractor: "Win Interior",
    description: "Architectural facade glazing for the Daikin Company building in Dubai, featuring a sculptural curved glass canopy.",
    shortDescription: "Sculptural glazed canopy for the Daikin Company headquarters.",
    heroImage: "/work/daikin-company__a.jpg",
    images: ["/work/daikin-company__a.jpg", "/work/daikin-company__b.jpg", "/work/daikin-company__c.jpg"],
    overview:
      "One of CanDoor's latest flagship projects, this architectural building for Daikin Company features a striking curved glazed canopy and glass-block feature wall. The project showcases our ability to execute complex, sculptural glazing geometries alongside precise structural detailing.",
    scope: [
      "Structural & architectural glazing",
      "Curved glass canopy fabrication",
      "Glass block feature walls",
    ],
    highlights: ["Sculptural curved glass canopy", "One of our latest flagship deliveries"],
    status: "featured",
    relatedProjects: ["emirati-kitchen-emirates-palace", "pergola-design-hudayriyat"],
  },
  {
    id: "p19",
    slug: "office-al-dharmiki-icad",
    title: "Office Building for Al Dharmiki",
    category: "Corporate",
    location: "ICAD-1, Abu Dhabi",
    year: "2005",
    value: "AED 180,000",
    description: "Aluminium window glazing for a Ground + 1 Floor office building in ICAD-1.",
    shortDescription: "Window glazing for a ground + 1 industrial-zone office building.",
    heroImage: "/work/office-al-dharmiki-icad__b.jpg",
    images: ["/work/office-al-dharmiki-icad__a.jpg", "/work/office-al-dharmiki-icad__b.jpg"],
    overview:
      "Among our earliest recorded commissions, this ground-plus-one office building in the ICAD-1 industrial zone was delivered with clean aluminium window glazing across its street-facing elevation.",
    scope: [
      "Aluminium doors & windows",
      "Structural glazing",
    ],
    highlights: ["One of our earliest commissions", "ICAD-1 industrial zone"],
    status: "completed",
    relatedProjects: ["royal-bakery", "commercial-al-braq"],
  },
  {
    id: "p20",
    slug: "villa-junaibi",
    title: "Private Villa for Mr. Junaibi",
    category: "Residential",
    location: "Khalifa City, Abu Dhabi",
    year: "2010 – 2011",
    value: "AED 225,000",
    description: "Ornate designer glass and window detailing for a private classical-style villa, including a signature octagonal glass dome.",
    shortDescription: "Designer glass & a signature octagonal dome for a private villa.",
    heroImage: "/work/villa-junaibi__a.jpg",
    images: ["/work/villa-junaibi__a.jpg", "/work/villa-junaibi__b.jpg", "/work/villa-junaibi__c.jpg"],
    overview:
      "A private ground-plus-one villa in Khalifa City finished in a classical stone facade, showcasing CanDoor's designer glass capabilities — from arched, teal-toned window glazing to a striking octagonal glass dome skylight above the villa's central atrium.",
    scope: [
      "Designer glass",
      "Aluminium doors & windows",
      "Octagonal glass dome / skylight",
    ],
    highlights: ["Signature octagonal glass dome", "Classical private villa detailing"],
    status: "featured",
    relatedProjects: ["mosque-renovation", "pergola-design-hudayriyat"],
  },
  {
    id: "p21",
    slug: "pergola-design-hudayriyat",
    title: "Pergola Design — Al Hudayriyat Villa",
    category: "Residential",
    location: "Al Hudayriyat, Abu Dhabi",
    year: "2026",
    value: "Private commission",
    description: "Custom aluminium pergola and outdoor kitchen structure for a private villa on Al Hudayriyat Island.",
    shortDescription: "Custom aluminium pergola & outdoor kitchen for a private villa.",
    heroImage: "/work/pergola-design__a.jpg",
    images: ["/work/pergola-design__a.jpg", "/work/pergola-design__b.jpg", "/work/pergola-design__c.jpg"],
    overview:
      "One of our latest residential commissions, this custom aluminium pergola creates a shaded outdoor living and kitchen space for a private villa on Al Hudayriyat Island — combining a louvered aluminium roof structure with integrated marble-topped outdoor counters.",
    scope: [
      "Custom pergola design & fabrication",
      "Louvered aluminium roof structure",
      "Outdoor kitchen & counter integration",
    ],
    highlights: ["Louvered aluminium pergola roof", "Integrated outdoor kitchen"],
    status: "featured",
    relatedProjects: ["villa-junaibi", "daikin-company"],
  },
];

export const projectCategories = [
  "All",
  "Government",
  "Commercial",
  "Residential",
  "Retail",
  "Industrial",
  "Religious",
  "Hospitality",
  "Corporate",
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
