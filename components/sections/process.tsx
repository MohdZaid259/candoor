'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PenTool, ClipboardCheck, HardHat, CheckCircle2, Handshake, type LucideIcon } from 'lucide-react';
import { processSteps } from '@/lib/data';
import SectionHeader from '@/components/ui/section-header';

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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="process" className="relative py-24 sm:py-32 lg:py-36 bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint pointer-events-none" />

      <div className="section-container relative">
        <SectionHeader
          eyebrow="Our Approach"
          title="Our Process"
          description="A systematic approach, backed by our Quality Control team, at every stage of your project"
          ghost="Process"
        />

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14 pt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {processSteps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div key={step.step} className="relative group" variants={itemVariants} >
                {/* Connector line (desktop only) */}
                {index < processSteps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(100%-1.5rem)] w-8 h-px bg-linear-to-r from-accent/50 to-accent/0 z-10" />
                )}

                {/* Card */}
                <div className="relative p-8 pt-10 bg-background rounded-xl border border-accent/50 group-hover:shadow-xl transition-all duration-300 h-full">
                  {/* Step Number Circle */}
                  <div
                    className="absolute -top-6 left-8 w-14 h-14 bg-accent rounded-full flex items-center justify-center text-foreground shadow-lg"
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="absolute top-5 right-6 text-5xl font-bold font-serif text-foreground/5 group-hover:text-accent/15 transition-colors duration-300 select-none">
                    {String(step.step).padStart(2, '0')}
                  </span>

                  <h3 className="text-xl font-semibold text-foreground mb-3 pt-4">{step.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
