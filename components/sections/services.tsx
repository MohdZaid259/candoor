'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  DoorOpen,
  Gem,
  MoveVertical,
  LayoutPanelLeft,
  Sun,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/data';
import SectionHeader from '@/components/ui/section-header';

const iconMap: Record<string, LucideIcon> = {
  'building-2': Building2,
  'door-open': DoorOpen,
  gem: Gem,
  'move-vertical': MoveVertical,
  'layout-panel-left': LayoutPanelLeft,
  sun: Sun,
};

const imageMap: Record<string, string> = {
  'curtain-wall-structural-glazing': '/work/braka-om-building__a.jpg',
  'doors-windows-partitions': '/work/office-khalidiya__a.jpg',
  'specialty-designer-glass': '/work/villa-junaibi__b.jpg',
  'metal-handrail-works': '/work/villa-junaibi__c.jpg',
  'interior-fit-out-elements': '/work/emirati-kitchen__a.jpg',
  'pergola-outdoor-structures': '/work/pergola-design__a.jpg',
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 lg:py-36 bg-secondary/40 overflow-hidden">
      <div className="section-container">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Services"
          description="Complete aluminium and glass fabrication and installation, engineered end to end"
          ghost="Services"
        />

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Building2;
            const image = imageMap[service.slug] ?? '/work/cover-hero__hero.jpg';
            return (
              <motion.div
                key={service.id}
                className="relative bg-background rounded-xl border border-accent/50 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col"
                variants={itemVariants}
              >
                {/* Image header */}
                <Link href={`/services#${service.slug}`} className="relative h-52 overflow-hidden block">
                  <Image
                    src={image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-foreground/10 to-transparent" />
                  <span className="absolute top-4 right-4 text-5xl font-black font-serif text-white/15 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {/* Icon chip overlapping the image edge */}
                  <div className="absolute bottom-8 left-4 translate-y-1/2 w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg z-10">
                    <Icon className="w-7 h-7 text-foreground"  />
                  </div>
                </Link>

                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>                
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/services" className="button-secondary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
