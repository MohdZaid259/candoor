'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { contactPageCTA, contactInfo } from '@/lib/data';

export default function ContactCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="py-20 sm:py-28 bg-foreground text-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-background/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl sm:text-5xl font-bold mb-6 text-background" variants={itemVariants}>
            {contactPageCTA.title}
          </motion.h2>

          <motion.p className="text-lg sm:text-xl text-background/75 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
            {contactPageCTA.description}
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="button-accent inline-flex items-center justify-center gap-2 group">
              {contactPageCTA.primaryCta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/projects"
              className="px-8 py-3 border border-background/25 text-background font-medium text-sm rounded-lg hover:bg-background/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              {contactPageCTA.secondaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
