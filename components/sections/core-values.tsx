'use client';

import { motion } from 'framer-motion';
import { Handshake, Gem, ShieldCheck, Sparkles, Clock, Heart, type LucideIcon } from 'lucide-react';
import { coreValues } from '@/lib/data';

const icons: LucideIcon[] = [Handshake, Gem, ShieldCheck, Sparkles, Clock, Heart];

export default function CoreValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">What Drives Us</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">Our Core Values</h2>
        <p className="text-lg text-muted-foreground">
          These principles guide every decision we make and every project we undertake.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {coreValues.map((value, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={value.title}
              className="group bg-secondary/30 p-8 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:bg-secondary/60"
              variants={itemVariants}
            >
              <div className="mb-5 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
