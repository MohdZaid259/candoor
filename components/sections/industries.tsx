'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Landmark, Building2, Home, ShoppingBag, Users, Hotel, Factory, Briefcase, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { industries } from '@/lib/data';
import { asset } from '@/lib/assets';
import SectionHeader from '@/components/ui/section-header';

const icons: LucideIcon[] = [Landmark, Building2, Home, ShoppingBag, Users, Hotel, Factory, Briefcase];

const images = [
  asset('home/i1.webp'),
  asset('home/i2.webp'),
  asset('home/i3.webp'),
  asset('home/i4.webp'),
  asset('home/i5.webp'),
  asset('home/i6.webp'),
  asset('home/i7.webp'),
  asset('home/i10.webp'),
];

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="industries" className="relative py-24 sm:py-32 lg:py-36 bg-secondary/40 overflow-hidden">
      <div className="section-container">
        <SectionHeader
          eyebrow="Sector Expertise"
          title="Industries We Serve"
          description="Proven delivery across government, commercial, and residential sectors"
          ghost="Sectors"
        />

        {/* Image-backed industry cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {industries.map((industry, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={industry.name}
                className="relative group overflow-hidden rounded-xl h-80"
                variants={itemVariants}
              >
                <Image
                  src={images[index % images.length]}
                  alt={industry.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/40 to-foreground/10" />

                <Link href="/projects" className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <Icon className="w-5 h-5 text-accent group-hover:text-foreground transition-colors duration-300" strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/0 group-hover:text-accent -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </div>

                  <h3 className="text-lg font-semibold text-white leading-snug mb-1">{industry.name}</h3>

                  {/* Description reveals on hover */}
                  <p className="text-white/70 text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2 overflow-hidden transition-all duration-500">
                    {industry.description}
                  </p>

                  <div className="mt-4 w-8 group-hover:w-full h-0.5 bg-accent transition-all duration-500" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
