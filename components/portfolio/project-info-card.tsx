'use client';

import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface ProjectInfoCardProps {
  label: string;
  value: string;
  icon?: LucideIcon;
}

export default function ProjectInfoCard({ label, value, icon: Icon }: ProjectInfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-300 group bg-background"
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
            <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
          </div>
        )}
        <div className="space-y-1 min-w-0">
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">{label}</p>
          <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
