'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, AlertTriangle, Wrench, ShieldCheck, GraduationCap, CheckCircle2, type LucideIcon } from 'lucide-react';
import { hsePoints, safetyPolicy } from '@/lib/data';

const icons: LucideIcon[] = [ClipboardCheck, AlertTriangle, Wrench, ShieldCheck, GraduationCap];

export default function HSE() {
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
    <section className="section-container bg-secondary/20">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">HSE</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">Health, Safety & Environment</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{safetyPolicy.intro}</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {hsePoints.map((point, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={point.title}
              className="bg-background p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="mb-4 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-background rounded-xl border border-border p-7">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">In Order to Provide</h3>
          <ul className="space-y-3">
            {safetyPolicy.provide.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-background rounded-xl border border-border p-7">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">To Ensure This Policy Is Effective</h3>
          <ul className="space-y-3">
            {safetyPolicy.ensure.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
