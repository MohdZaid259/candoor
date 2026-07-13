'use client';

import { motion } from 'framer-motion';
import { Clock, Globe2, Building, Landmark, ClipboardCheck, ShieldCheck, Users, Layers, type LucideIcon } from 'lucide-react';
import { aboutWhyChooseUs } from '@/lib/data';
import SectionHeader from '@/components/ui/section-header';

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
    <section className="relative py-24 sm:py-32 bg-secondary/40 overflow-hidden">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our Commitments"
          title="What We Bring to Every Project"
          ghost="Commitments"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {aboutWhyChooseUs.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.title}
                className="relative bg-background p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group hover:shadow-xl overflow-hidden"
                variants={itemVariants}
              >
                <div className="mb-4 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent ">
                  <Icon className="w-5 h-5 text-accent group-hover:text-foreground transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
