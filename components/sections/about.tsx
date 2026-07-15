'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { aboutData } from '@/lib/data';
import { asset } from '@/lib/assets';
import { ParallaxImg } from '@/components/ui/parallax';
import Counter from '@/components/ui/counter';

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
    <section id="about" className="relative py-24 sm:py-32 lg:py-36 bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Image collage */}
          <motion.div
            className="relative order-2 lg:order-1 pb-16 pr-6 sm:pr-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative photo-frame corner-notch-sm aspect-4/5">
              <ParallaxImg
                src={asset('home/about-main.webp')}
                alt="Cottage renovation and building works in progress"
              />
            </div>

            {/* Overlapping secondary image */}
            <motion.div
              className="absolute -bottom-2 right-0 w-1/2 photo-frame aspect-4/3 border-4 border-background shadow-2xl hidden sm:block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src={asset('home/about-overlap.webp')}
                alt="Cottage interior fit-out detail"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>

            <div
              className="absolute -top-6 -right-2 sm:right-6 bg-foreground text-background rounded-xl shadow-xl px-6 py-5"
            >
              <Counter value="12+" className="block text-3xl font-bold font-serif text-accent" />
              <p className="text-xs text-background/70 mt-1">Trades In-House</p>
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
              className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6"
              variants={itemVariants}
            >
              {aboutData.title}
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-10 leading-relaxed"
              variants={itemVariants}
            >
              {aboutData.description}
            </motion.p>

            <motion.div className="grid grid-cols-2 gap-4 mb-10" variants={itemVariants}>
              {aboutData.highlights.map((highlight) => (
                <motion.div
                  key={highlight.label}
                  className="p-5 bg-secondary rounded-lg border border-border hover:border-accent/60 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <Counter value={highlight.number} className="block text-2xl font-bold text-accent mb-1 font-serif" />
                  <p className="text-xs text-muted-foreground leading-snug">{highlight.label}</p>
                </motion.div>
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
      </div>
    </section>
  );
}
