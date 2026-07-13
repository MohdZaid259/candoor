'use client';

import { motion } from 'framer-motion';
import { Clock, Globe2, Building, Landmark, ClipboardCheck, ShieldCheck, Users, Layers, type LucideIcon } from 'lucide-react';
import { aboutWhyChooseUs } from '@/lib/data';

const icons: LucideIcon[] = [Clock, Globe2, Building, Landmark, ClipboardCheck, ShieldCheck, Users, Layers];

export default function AboutWhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section className="section-container bg-secondary/20">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">Our Commitments</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">What We Bring to Every Project</h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {aboutWhyChooseUs.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={item.title}
              className="bg-background p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="mb-4 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
