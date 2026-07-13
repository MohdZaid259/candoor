'use client';

import { motion } from 'framer-motion';
import { Clock, Globe2, Building, Landmark, ClipboardCheck, ShieldCheck, Users, Layers, type LucideIcon } from 'lucide-react';
import { whyChooseUs } from '@/lib/data';

const icons: LucideIcon[] = [Clock, Globe2, Building, Landmark, ClipboardCheck, ShieldCheck, Users, Layers];

export default function WhyChooseUs() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="section-container bg-background">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">Our Advantages</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">Why Choose CanDoor</h2>
        <p className="text-lg text-muted-foreground">
          The can-do spirit driving every project, from first consultation to final handover
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {whyChooseUs.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={item.title}
              className="p-8 bg-secondary rounded-xl border border-border hover:border-accent/50 group transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/15 text-accent rounded-full mb-5 group-hover:bg-accent group-hover:text-foreground transition-colors duration-300">
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
