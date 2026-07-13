'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Factory,
  Briefcase,
  Monitor,
  ShoppingBag,
  Hotel,
  Home,
  Building,
  Box,
  Landmark,
  Mail,
  type LucideIcon,
} from 'lucide-react';
import { industriesServed } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  'building-2': Building2,
  factory: Factory,
  briefcase: Briefcase,
  monitor: Monitor,
  'shopping-bag': ShoppingBag,
  hotel: Hotel,
  home: Home,
  building: Building,
  box: Box,
  archway: Landmark,
  mail: Mail,
};

export default function IndustriesServed() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section className="section-container bg-background">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">Sector Expertise</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">Industries We Serve</h2>
        <p className="text-lg text-muted-foreground">
          Our expertise spans government, commercial, and residential markets across the UAE.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {industriesServed.map((industry) => {
          const Icon = iconMap[industry.icon] ?? Building2;
          return (
            <motion.div
              key={industry.name}
              className="group bg-secondary/30 p-6 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="mb-3 w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                {industry.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
