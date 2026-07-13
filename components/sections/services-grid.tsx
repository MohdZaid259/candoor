'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { serviceCategories } from '@/lib/data';

export default function ServicesGrid() {
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
      <div className="space-y-20 sm:space-y-28">
        {serviceCategories.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-28"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-120px' }}
            >
              {/* Image */}
              <motion.div
                className={`relative photo-frame corner-notch-sm h-96 lg:h-112 ${!isEven ? 'lg:order-2' : ''}`}
                variants={itemVariants}
              >
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </motion.div>

              {/* Content */}
              <motion.div className={`flex flex-col ${!isEven ? 'lg:order-1' : ''}`} variants={containerVariants}>
                <motion.span className="eyebrow mb-4" variants={itemVariants}>
                  Service {String(index + 1).padStart(2, '0')}
                </motion.span>

                <motion.h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" variants={itemVariants}>
                  {service.title}
                </motion.h3>

                <motion.p className="text-lg text-muted-foreground mb-8 leading-relaxed" variants={itemVariants}>
                  {service.description}
                </motion.p>

                {/* Features List */}
                <motion.ul className="space-y-3 mb-8" variants={containerVariants}>
                  {service.features.map((feature) => (
                    <motion.li key={feature} className="flex items-start gap-3 text-foreground/90" variants={itemVariants}>
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={itemVariants}>
                  <Link href="/contact" className="button-primary w-fit inline-flex items-center gap-2 group">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
