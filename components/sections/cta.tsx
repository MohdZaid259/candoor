'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ctaData } from '@/lib/data';

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/work/daikin-company__a.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/90" />
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/85 to-foreground/70" />
      </div>

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
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
          <h2 className="text-4xl sm:text-5xl font-bold text-background mt-4 mb-6">
            {ctaData.title}
          </h2>

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
    </section>
  );
}
