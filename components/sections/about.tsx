'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { aboutData } from '@/lib/data';

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="about" className="section-container bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Image */}
        <motion.div
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative photo-frame corner-notch-sm aspect-4/5">
            <Image
              src="/work/village-mall__a.jpg"
              alt="CanDoor aluminium and glass facade fabrication in progress"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-4 sm:-right-8 bg-foreground text-background rounded-xl shadow-xl px-6 py-5">
            <p className="text-3xl font-bold font-serif text-accent">15+</p>
            <p className="text-xs text-background/70 mt-1">Years in the Industry</p>
          </div>
        </motion.div>

        {/* Right Column - Text + Stats */}
        <motion.div
          className="order-1 lg:order-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span className="eyebrow" variants={itemVariants}>
            {aboutData.eyebrow}
          </motion.span>
          <motion.h2
            className="text-4xl font-bold text-foreground mt-4 mb-6"
            variants={itemVariants}
          >
            {aboutData.title}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
            variants={itemVariants}
          >
            {aboutData.description}
          </motion.p>

          <motion.div className="grid grid-cols-2 gap-4 mb-8" variants={itemVariants}>
            {aboutData.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="p-5 bg-secondary rounded-lg border border-border hover:border-accent/60 transition-colors duration-300"
              >
                <p className="text-2xl font-bold text-accent mb-1 font-serif">{highlight.number}</p>
                <p className="text-xs text-muted-foreground leading-snug">{highlight.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/about" className="button-primary inline-flex items-center gap-2 group">
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
