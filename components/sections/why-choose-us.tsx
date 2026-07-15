'use client';

import { motion } from 'framer-motion';
import { Clock, Globe2, Building, Landmark, ClipboardCheck, ShieldCheck, Users, Layers, type LucideIcon } from 'lucide-react';
import { whyChooseUs } from '@/lib/data';
import { asset } from '@/lib/assets';
import { ParallaxImg } from '@/components/ui/parallax';
import Counter from '@/components/ui/counter';

const icons: LucideIcon[] = [Clock, Globe2, Building, Landmark, ClipboardCheck, ShieldCheck, Users, Layers];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section className="relative py-24 sm:py-32 lg:py-36 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint-light pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-16 items-start">
          {/* Sticky image column */}
          <motion.div
            className="lg:col-span-2 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="eyebrow">Our Advantages</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-background mt-4 mb-6">
              Why Choose <span className="text-accent">Cottage</span>
            </h2>
            <p className="text-lg text-background/70 leading-relaxed mb-10">
              The can-do spirit driving every project, from first consultation to final handover
            </p>

            <div className="relative photo-frame corner-notch-sm aspect-4/5 border-background/10">
              <ParallaxImg
                src={asset('home/why.webp')}
                alt="Cottage project management on site"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Counter value="100%" className="block text-3xl font-bold font-serif text-accent" />
                <p className="text-sm text-white/80 mt-1">in-house delivery — one accountable team</p>
              </div>
            </div>
          </motion.div>

          {/* Items grid */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {whyChooseUs.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={item.title}
                  className="relative p-7 bg-background/5 backdrop-blur-sm rounded-xl border border-background/10 hover:border-accent/60 hover:bg-background/10 group transition-all duration-300 overflow-hidden"
                  variants={itemVariants}
                >
                  <span className="absolute top-4 right-5 text-4xl font-black font-serif text-background/5 group-hover:text-accent/15 transition-colors duration-300 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="inline-flex items-center justify-center w-11 h-11 bg-accent/15 text-accent rounded-lg mb-5 group-hover:bg-accent group-hover:text-foreground ">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-base font-semibold text-background mb-2.5">{item.title}</h3>

                  <p className="text-background/60 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
