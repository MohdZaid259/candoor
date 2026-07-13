'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Huge outlined word rendered behind the header. */
  ghost?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  ghost,
  align = 'center',
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        'relative max-w-3xl mb-16 sm:mb-20',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {ghost && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute left-1/2 -translate-x-1/2 -top-8 sm:-top-12 text-6xl sm:text-8xl font-black font-serif uppercase tracking-tight whitespace-nowrap',
            dark ? 'text-ghost-light' : 'text-ghost',
            align === 'left' && 'left-0 translate-x-0'
          )}
        >
          {ghost}
        </span>
      )}
      <span className={cn('eyebrow relative', align === 'center' && 'justify-center')}>{eyebrow}</span>
      <h2
        className={cn(
          'relative text-4xl lg:text-5xl font-bold mt-4',
          dark ? 'text-background' : 'text-foreground',
          description ? 'mb-6' : ''
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('relative text-lg leading-relaxed', dark ? 'text-background/70' : 'text-muted-foreground')}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
