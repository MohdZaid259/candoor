'use client';

import { motion } from 'framer-motion';
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

const iconMap: Record<string, LucideIcon> = {
  'building-2': Building2,
  'door-open': DoorOpen,
  gem: Gem,
  'move-vertical': MoveVertical,
  'layout-panel-left': LayoutPanelLeft,
  sun: Sun,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="services" className="section-container bg-secondary/30">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">What We Offer</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">Our Services</h2>
        <p className="text-lg text-muted-foreground">
          Complete aluminium and glass fabrication and installation, engineered end to end
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Building2;
          return (
            <motion.div
              key={service.id}
              className="relative p-8 bg-background rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon className="w-7 h-7 text-accent" strokeWidth={1.75} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={`/services#${service.slug}`}
                className="inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-accent transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="text-center mt-14"
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
    </section>
  );
}
