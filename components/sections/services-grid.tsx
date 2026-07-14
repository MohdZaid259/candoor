'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { serviceCategories } from '@/lib/data';
import { asset } from '@/lib/assets';
import { ParallaxImg, ParallaxBand } from '@/components/ui/parallax';
import Counter from '@/components/ui/counter';

function ServiceRow({ service, index }: { service: (typeof serviceCategories)[number]; index: number }) {
  const isEven = index % 2 === 0;

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
    <motion.div
      id={service.id}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
    >
      {/* Ghost number */}
      <span
        aria-hidden="true"
        className={`hidden lg:block absolute -top-14 text-[9rem] leading-none font-black font-serif text-ghost select-none ${
          isEven ? '-left-6' : '-right-6'
        }`}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Image */}
      <motion.div
        className={`relative photo-frame corner-notch-sm h-96 lg:h-112 group ${!isEven ? 'lg:order-2' : ''}`}
        variants={itemVariants}
      >
        <ParallaxImg src={service.image} alt={service.title} />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/30 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 px-4 py-2 bg-accent text-foreground rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
          Service {String(index + 1).padStart(2, '0')}
        </div>
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
            <motion.li
              key={feature}
              className="flex items-start gap-3 text-foreground/90 group/item"
              variants={itemVariants}
            >
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
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
}

export default function ServicesGrid() {
  const firstHalf = serviceCategories.slice(0, 3);
  const secondHalf = serviceCategories.slice(3);

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
        <div className="section-container">
          <div className="space-y-24 sm:space-y-36">
            {firstHalf.map((service, index) => (
              <ServiceRow key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page parallax break */}
      <ParallaxBand
        image={asset('service/mid.webp')}
        alt="CanDoor pergola craftsmanship"
        overlayClassName="bg-foreground/80"
        className="py-24 sm:py-32"
      >
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow justify-center">Fabricated In-House</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-background mt-4 mb-6 max-w-3xl mx-auto">
              Precision Fabricated. <span className="text-accent">Installed With Care.</span>
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto mb-10">
              Every system is fabricated in our Musaffah facility under defined quality-control procedures — then
              installed by the same team that built it.
            </p>
            <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
              {[
                { number: '15+', label: 'Years of Craft' },
                { number: '20+', label: 'Projects Delivered' },
                { number: '6', label: 'Service Disciplines' },
              ].map((stat) => (
                <div key={stat.label}>
                  <Counter value={stat.number} className="block text-4xl font-bold font-serif text-accent mb-1" />
                  <p className="text-sm text-background/60 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </ParallaxBand>

      <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
        <div className="section-container">
          <div className="space-y-24 sm:space-y-36">
            {secondHalf.map((service, index) => (
              <ServiceRow key={service.id} service={service} index={index + firstHalf.length} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
