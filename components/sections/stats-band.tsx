'use client';

import { motion } from 'framer-motion';
import { ParallaxBand } from '@/components/ui/parallax';
import Counter from '@/components/ui/counter';

const stats = [
  { number: '15+', label: 'Years in the Industry' },
  { number: '20+', label: 'Projects Delivered' },
  { number: 'AED 24M+', label: 'Project Value Delivered' },
  { number: '2', label: 'Countries Served' },
];

export default function StatsBand() {
  return (
    <ParallaxBand
      image="/work/village-mall__c.jpg"
      alt="CanDoor facade project"
      overlayClassName="bg-foreground/80"
      className="py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-grid-faint-light -z-10 pointer-events-none" />
      <div className="section-container">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow justify-center">Track Record</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-background mt-4">
            Numbers Built on <span className="text-accent">Trust</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <Counter
                value={stat.number}
                className="block text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-accent mb-3"
                duration={2.2}
              />
              <p className="text-sm text-background/70 uppercase tracking-wider">{stat.label}</p>
              {index < stats.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-14 bg-background/15" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxBand>
  );
}
