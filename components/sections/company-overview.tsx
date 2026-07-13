'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { companyOverview } from '@/lib/data';
import { ParallaxImg } from '@/components/ui/parallax';

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
    <section className="relative py-24 sm:py-32 lg:py-36 bg-background overflow-hidden">
      <div className="section-container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Image + founder quote */}
          <motion.div variants={itemVariants} className="lg:sticky lg:top-28">
            <div className="relative photo-frame corner-notch-sm h-96 lg:h-105">
              <ParallaxImg src={companyOverview.image} alt="CanDoor Glass Partitions project" />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            <motion.div
              className="relative mt-6 bg-secondary border border-border border-l-4 border-l-accent rounded-xl p-6 sm:p-7 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <Quote className="w-7 h-7 text-accent/40 mb-3" />
              <p className="text-foreground/90 leading-relaxed mb-4 text-[0.95rem]">{companyOverview.founderQuote}</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{companyOverview.founderName}</p>
                <p className="text-xs text-muted-foreground">{companyOverview.founderTitle}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div className="flex flex-col pt-2" variants={containerVariants}>
            <motion.span className="eyebrow" variants={itemVariants}>
              {companyOverview.eyebrow}
            </motion.span>
            <motion.h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6" variants={itemVariants}>
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
      </div>
    </section>
  );
}
