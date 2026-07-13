'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ClipboardCheck, HardHat, CheckCircle2, Ruler, Handshake, type LucideIcon } from 'lucide-react';
import { qualityAssurance } from '@/lib/data';

const icons: LucideIcon[] = [ClipboardCheck, HardHat, CheckCircle2, Ruler, Handshake];

export default function QualityAssurance() {
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
        className="max-w-3xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">{qualityAssurance.eyebrow}</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">{qualityAssurance.title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{qualityAssurance.description}</p>
      </motion.div>

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
              <div className="flex-1">
                <div className="bg-secondary rounded-xl p-6 border border-border hover:border-accent/50 transition-colors duration-300 text-center h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/15 rounded-full mb-4">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <p className="text-xs font-semibold text-accent mb-1">STEP {step.order}</p>
                  <h3 className="text-base font-semibold text-foreground">{step.step}</h3>
                </div>
              </div>

              {index < qualityAssurance.steps.length - 1 && (
                <div className="hidden lg:block shrink-0">
                  <ArrowRight className="w-5 h-5 text-accent/40" />
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
