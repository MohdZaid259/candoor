'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Landmark, Building2, Home, ShoppingBag, Users, Hotel, Factory, Briefcase, type LucideIcon } from 'lucide-react';
import { industries } from '@/lib/data';

const icons: LucideIcon[] = [Landmark, Building2, Home, ShoppingBag, Users, Hotel, Factory, Briefcase];

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
    <section id="industries" className="section-container bg-secondary/30">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">Sector Expertise</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">Industries We Serve</h2>
        <p className="text-lg text-muted-foreground">
          Proven delivery across government, commercial, and residential sectors
        </p>
      </motion.div>

      {/* Industries Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {industries.map((industry, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div key={industry.name} className="relative group overflow-hidden rounded-xl" variants={itemVariants}>
              {/* Background with hover effect */}
              <div className="absolute inset-0 bg-linear-to-br from-foreground/5 to-accent/10 group-hover:from-foreground/10 group-hover:to-accent/20 transition-all duration-300" />
              <div className="absolute inset-0 border border-border group-hover:border-accent/50 transition-colors duration-300 rounded-xl" />

              {/* Content */}
              <Link href="/projects" className="relative p-8 h-full flex flex-col justify-between">
                <div className="w-11 h-11 rounded-lg bg-background/80 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </Link>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
