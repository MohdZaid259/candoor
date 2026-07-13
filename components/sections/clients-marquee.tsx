'use client';

import Marquee from '@/components/ui/marquee';

const clients = [
  'Barakah Nuclear Power Plant',
  'Emirates Post',
  'Emirates Palace Hotel',
  'Daikin',
  'Samsung–Hyundai JV (KEPCO)',
  'Yoomyung E&C',
  'Dynatrade',
  'Village Mall',
  'Royal Bakery',
  'Al Muwasim Contracting',
];

export default function ClientsMarquee() {
  return (
    <section className="py-10 sm:py-12 bg-foreground overflow-hidden">
      <p className="text-center text-[0.65rem] uppercase tracking-[0.25em] text-background/50 mb-6">
        Trusted by institutions & businesses across the UAE
      </p>
      <Marquee duration={40}>
        {clients.map((client) => (
          <span key={client} className="flex items-center shrink-0">
            <span className="text-background/80 font-serif font-semibold text-lg sm:text-xl whitespace-nowrap px-8">
              {client}
            </span>
            <span className="w-2 h-2 rotate-45 bg-accent/70 shrink-0" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
