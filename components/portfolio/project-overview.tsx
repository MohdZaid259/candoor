'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-container py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-14"
      >
        <span className="eyebrow mb-4">Project Overview</span>
        <p className="text-lg text-muted-foreground leading-relaxed">{project.overview}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Scope of Work */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h3 className="text-lg font-semibold mb-6 flex items-center gap-2" variants={itemVariants}>
            Scope of Work
          </motion.h3>
          <motion.div className="space-y-3" variants={containerVariants}>
            {project.scope.map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
              >
                <div className="shrink-0 w-6 h-6 rounded bg-accent/15 flex items-center justify-center mt-0.5 group-hover:bg-accent/25 transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground text-sm font-medium group-hover:text-accent transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h3 className="text-lg font-semibold mb-6 flex items-center gap-2" variants={itemVariants}>
            Key Highlights
          </motion.h3>
          <motion.div className="space-y-3" variants={containerVariants}>
            {project.highlights.map((highlight) => (
              <motion.div key={highlight} variants={itemVariants} className="flex gap-3 items-start group">
                <div className="shrink-0 w-6 h-6 rounded bg-accent/15 flex items-center justify-center mt-0.5 group-hover:bg-accent/25 transition-colors duration-300">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="text-foreground text-sm font-medium group-hover:text-accent transition-colors duration-300">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
