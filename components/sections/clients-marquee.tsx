'use client';

import Marquee from '@/components/ui/marquee';

const capabilities = [
  'Interior Fit-Out',
  'Villa & Apartment Renovation',
  'Civil Works',
  'MEP Services',
  'Marble & Tile',
  'Gypsum & Ceilings',
  'Painting',
  'Waterproofing',
  'Joinery',
  'Aluminium & Glass',
  'Metal Fabrication',
  'Signage',
  'Facility Maintenance (AMC)',
];

export default function ClientsMarquee() {
  return (
    <section className="py-10 sm:py-12 bg-foreground overflow-hidden">
      <p className="text-center text-[0.65rem] uppercase tracking-[0.25em] text-background/50 mb-6">
        Every trade under one roof — turnkey delivery across the UAE
      </p>
      <Marquee duration={44}>
        {capabilities.map((item) => (
          <span key={item} className="flex items-center shrink-0">
            <span className="text-background/80 font-serif font-semibold text-lg sm:text-xl whitespace-nowrap px-8">
              {item}
            </span>
            <span className="w-2 h-2 rotate-45 bg-accent/70 shrink-0" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
