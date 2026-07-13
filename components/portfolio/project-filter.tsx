'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-2.5 justify-center mb-14"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
            activeCategory === category
              ? 'bg-accent text-foreground border-accent shadow-sm'
              : 'border-border text-muted-foreground hover:border-accent/50 hover:text-foreground'
          )}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}
