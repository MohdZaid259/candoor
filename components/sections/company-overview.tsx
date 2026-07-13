'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { companyOverview } from '@/lib/data';

export default function CompanyOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="section-container bg-background">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Image + founder quote */}
        <motion.div variants={itemVariants} className="lg:sticky lg:top-28">
          <div className="relative photo-frame corner-notch-sm h-96 lg:h-105">
            <Image
              src={companyOverview.image}
              alt="CanDoor Glass Partitions project"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative mt-6 bg-secondary border border-border rounded-xl p-6 sm:p-7">
            <Quote className="w-7 h-7 text-accent/40 mb-3" />
            <p className="text-foreground/90 leading-relaxed mb-4 text-[0.95rem]">
              {companyOverview.founderQuote}
            </p>
            <div>
              <p className="font-semibold text-foreground text-sm">{companyOverview.founderName}</p>
              <p className="text-xs text-muted-foreground">{companyOverview.founderTitle}</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div className="flex flex-col pt-2" variants={containerVariants}>
          <motion.span className="eyebrow" variants={itemVariants}>
            {companyOverview.eyebrow}
          </motion.span>
          <motion.h2 className="text-4xl font-bold text-foreground mt-4 mb-6" variants={itemVariants}>
            {companyOverview.title}
          </motion.h2>

          {companyOverview.description.split('\n\n').map((para, i) => (
            <motion.p
              key={i}
              className="text-lg text-muted-foreground mb-6 leading-relaxed last:mb-8"
              variants={itemVariants}
            >
              {para}
            </motion.p>
          ))}

          <motion.a href="/contact" className="button-primary w-fit" variants={itemVariants}>
            {companyOverview.cta}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
