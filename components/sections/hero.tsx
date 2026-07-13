'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { heroData } from '@/lib/data';

export default function Hero() {
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
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 relative isolate overflow-hidden bg-background">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-faint -z-20" />
      <div className="absolute top-0 right-0 w-lg h-128 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p className="eyebrow mb-6" variants={itemVariants}>
              {heroData.eyebrow}
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-[3.4rem] xl:text-7xl font-bold text-foreground mb-6 leading-[1.05]"
              variants={itemVariants}
            >
              {heroData.title.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-accent">{line}</span> : line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 mb-16" variants={itemVariants}>
              <Link href="/contact" className="button-accent inline-flex items-center justify-center gap-2 group">
                {heroData.ctaPrimary}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/projects" className="button-secondary inline-flex items-center justify-center">
                {heroData.ctaSecondary}
              </Link>
            </motion.div>

            <motion.div
              className="pt-10 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
              variants={itemVariants}
            >
              {heroData.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1 font-serif">{stat.number}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative photo-frame corner-notch aspect-4/5 lg:aspect-3/4">
              <Image
                src={heroData.backgroundImage}
                alt="CanDoor glass facade installation, Abu Dhabi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute inset-0 border-2 border-accent/40 corner-notch pointer-events-none" />
            </div>

            {/* Floating credential card */}
            <motion.div
              className="absolute -bottom-8 -left-6 sm:-left-10 bg-card border border-border rounded-xl shadow-xl p-5 max-w-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">Barakah Nuclear Power Plant</p>
                  <p className="text-xs text-muted-foreground">Delivered O&M facility glazing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
