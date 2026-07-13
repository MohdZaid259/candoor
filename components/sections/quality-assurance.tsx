'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ClipboardCheck, HardHat, CheckCircle2, Ruler, Handshake, type LucideIcon } from 'lucide-react';
import { qualityAssurance } from '@/lib/data';
import SectionHeader from '@/components/ui/section-header';

const icons: LucideIcon[] = [ClipboardCheck, HardHat, CheckCircle2, Ruler, Handshake];

export default function QualityAssurance() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
      <div className="section-container relative">
        <SectionHeader
          eyebrow={qualityAssurance.eyebrow}
          title={qualityAssurance.title}
          description={qualityAssurance.description}
          ghost="Quality"
        />

        <motion.div
          className="flex flex-col lg:flex-row items-stretch justify-between gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {qualityAssurance.steps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div key={step.step} className="flex-1 flex items-center gap-3" variants={itemVariants}>
                <motion.div className="flex-1" whileHover={{ y: -6 }}>
                  <div className="bg-secondary rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 text-center h-full group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/15 rounded-full mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent group-hover:text-foreground transition-colors duration-300" strokeWidth={1.75} />
                    </div>
                    <p className="text-xs font-semibold text-accent mb-1">STEP {step.order}</p>
                    <h3 className="text-base font-semibold text-foreground">{step.step}</h3>
                  </div>
                </motion.div>

                {index < qualityAssurance.steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block shrink-0"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5 text-accent/50" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
