'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ctaData } from '@/lib/data';
import { asset } from '@/lib/assets';
import { ParallaxBand } from '@/components/ui/parallax';

export default function CTA() {
  return (
    <ParallaxBand
      image={asset('home/cta.webp')}
      alt="CanDoor glazing project"
      overlayClassName="bg-linear-to-t from-foreground via-foreground/85 to-foreground/70"
      className="py-28 sm:py-40"
    >
      {/* Background accents */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow justify-center text-accent/90">Let's Talk</span>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mt-4 mb-6">{ctaData.title}</h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-background/75 mb-12 max-w-2xl mx-auto leading-relaxed">
            {ctaData.description}
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact" className="button-accent inline-flex items-center justify-center gap-2 group">
              {ctaData.primaryCta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 border border-background/40 text-background font-medium text-sm rounded-lg hover:bg-background/10 transition-all duration-300 active:scale-95 inline-flex items-center justify-center"
            >
              {ctaData.secondaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </ParallaxBand>
  );
}
