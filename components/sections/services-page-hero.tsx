'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { servicesPageHero } from '@/lib/data';

export default function ServicesPageHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative isolate min-h-[65vh] flex items-end overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={servicesPageHero.backgroundImage}
          alt="CanDoor aluminium and glass fabrication"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/70 to-foreground/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div className="max-w-2xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.p className="eyebrow mb-5" variants={itemVariants}>
            {servicesPageHero.eyebrow}
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-background mb-6 leading-tight text-shadow-sm"
            variants={itemVariants}
          >
            {servicesPageHero.title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-background/80 max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            {servicesPageHero.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
