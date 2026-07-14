'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target } from 'lucide-react';
import { visionMission } from '@/lib/data';
import { asset } from '@/lib/assets';

const icons = { vision: Eye, mission: Target };

const images = {
  vision: asset('about/vision.webp'),
  mission: asset('about/mission.webp'),
};

export default function VisionMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative py-24 sm:py-32 bg-secondary/40 overflow-hidden">
      <div className="section-container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {visionMission.map((item) => {
            const Icon = icons[item.type as keyof typeof icons];
            const image = images[item.type as keyof typeof images];
            return (
              <motion.div
                key={item.type}
                className="relative rounded-xl overflow-hidden group min-h-105 flex flex-col justify-end"
                variants={itemVariants}
              >
                {/* Image background */}
                <Image
                  src={image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/95 via-foreground/70 to-foreground/30" />
                <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

                {/* Content */}
                <div className="relative p-8 lg:p-12">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-6 h-6 text-foreground"/>
                  </div>
                  <h3 className="text-3xl font-bold text-background mb-4">{item.title}</h3>
                  <p className="text-lg text-background/75 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
