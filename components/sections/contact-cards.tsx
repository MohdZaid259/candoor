'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, type LucideIcon } from 'lucide-react';
import { contactDetails } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  email: Mail,
  office: MapPin,
  whatsapp: MessageCircle,
};

export default function ContactCards() {
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
    <section className="relative py-24 sm:py-32 bg-secondary/40 overflow-hidden">
      <div className="section-container">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactDetails.map((detail) => {
          const Icon = iconMap[detail.type] ?? Phone;
          return (
            <motion.a
              key={detail.type}
              href={detail.href}
              target={detail.type === 'office' || detail.type === 'whatsapp' ? '_blank' : undefined}
              rel={detail.type === 'office' || detail.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
              className="relative bg-background p-8 rounded-xl border border-border hover:border-accent/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
              <div className="mb-5 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Icon className="w-5 h-5 text-accent group-hover:text-foreground transition-colors duration-300" strokeWidth={1.75} />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-2">{detail.label}</p>
              <p className="text-base font-semibold text-foreground leading-snug group-hover:text-accent transition-colors duration-300">
                {detail.value}
              </p>
            </motion.a>
          );
        })}
      </motion.div>
      </div>
    </section>
  );
}
