'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PenTool, ClipboardCheck, HardHat, CheckCircle2, Handshake, type LucideIcon } from 'lucide-react';
import { processSteps } from '@/lib/data';

const icons: LucideIcon[] = [MessageSquare, PenTool, ClipboardCheck, HardHat, CheckCircle2, Handshake];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="process" className="section-container bg-background">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">Our Approach</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">Our Process</h2>
        <p className="text-lg text-muted-foreground">
          A systematic approach, backed by our Quality Control team, at every stage of your project
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {processSteps.map((step, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div key={step.step} className="relative" variants={itemVariants}>
              {/* Connector line (desktop only) */}
              {index < processSteps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%-1.5rem)] w-8 h-px bg-linear-to-r from-accent/50 to-accent/0 z-10" />
              )}

              {/* Card */}
              <div className="relative p-8 pt-10 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group h-full">
                {/* Step Number Circle */}
                <motion.div
                  className="absolute -top-6 left-8 w-14 h-14 bg-accent rounded-full flex items-center justify-center text-foreground shadow-lg group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </motion.div>
                <span className="absolute top-5 right-6 text-4xl font-bold font-serif text-foreground/5 select-none">
                  {String(step.step).padStart(2, '0')}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 pt-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
