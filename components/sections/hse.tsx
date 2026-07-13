'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, AlertTriangle, Wrench, ShieldCheck, GraduationCap, CheckCircle2, type LucideIcon } from 'lucide-react';
import { hsePoints, safetyPolicy } from '@/lib/data';
import { ParallaxBand } from '@/components/ui/parallax';

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
    <ParallaxBand
      image="/work/bnpp-workers-village__a.jpg"
      alt="CanDoor site works"
      overlayClassName="bg-foreground/90"
      className="py-24 sm:py-32"
    >
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow justify-center">HSE</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-background mt-4 mb-6">Health, Safety & Environment</h2>
          <p className="text-lg text-background/70 leading-relaxed">{safetyPolicy.intro}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
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
                className="bg-background/5 backdrop-blur-sm p-6 rounded-xl border border-background/10 hover:border-accent/60 hover:bg-background/10 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <div className="mb-4 w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent group-hover:text-foreground transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-background mb-2">{point.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed">{point.description}</p>
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
          <div className="bg-background/5 backdrop-blur-sm rounded-xl border border-background/10 p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-background mb-4">In Order to Provide</h3>
            <ul className="space-y-3">
              {safetyPolicy.provide.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-background/70">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background/5 backdrop-blur-sm rounded-xl border border-background/10 p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-background mb-4">
              To Ensure This Policy Is Effective
            </h3>
            <ul className="space-y-3">
              {safetyPolicy.ensure.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-background/70">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </ParallaxBand>
  );
}
