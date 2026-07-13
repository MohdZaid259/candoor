'use client';

import { motion } from 'framer-motion';
import { Handshake, Gem, ShieldCheck, Sparkles, Clock, Heart, type LucideIcon } from 'lucide-react';
import { coreValues } from '@/lib/data';
import SectionHeader from '@/components/ui/section-header';

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
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="section-container">
        <SectionHeader
          eyebrow="What Drives Us"
          title="Our Core Values"
          description="These principles guide every decision we make and every project we undertake."
          ghost="Values"
        />

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
                className="relative group bg-secondary/40 p-8 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:bg-secondary/70 hover:shadow-xl overflow-hidden"
                variants={itemVariants}
              >
                <span className="absolute -top-2 right-4 text-6xl font-black font-serif text-foreground/4 group-hover:text-accent/10 transition-colors duration-300 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="mb-5 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent">
                  <Icon className="w-6 h-6 text-accent group-hover:text-foreground transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
