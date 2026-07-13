'use client';

import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { visionMission } from '@/lib/data';

const icons = { vision: Eye, mission: Target };

export default function VisionMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="section-container bg-secondary/20">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {visionMission.map((item) => {
          const Icon = icons[item.type as keyof typeof icons];
          return (
            <motion.div
              key={item.type}
              className="relative bg-background p-8 lg:p-12 rounded-xl border border-border overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
