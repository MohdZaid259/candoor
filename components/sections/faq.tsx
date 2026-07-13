'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/lib/data';
import { useState } from 'react';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="faq" className="section-container bg-secondary/20 scroll-mt-24">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">FAQ</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground">
          Find answers to common questions about our services and process.
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faqItems.map((item, index) => (
          <motion.div
            key={item.question}
            variants={itemVariants}
            className="bg-background rounded-xl border border-border overflow-hidden"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-4 p-6 hover:bg-secondary/30 transition-colors duration-300 text-left"
            >
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{item.question}</h3>
              <motion.span
                className="text-accent shrink-0"
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: expandedIndex === index ? 'auto' : 0,
                opacity: expandedIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{item.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
