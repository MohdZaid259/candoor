'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative overflow-hidden rounded-xl bg-muted aspect-3/4 border border-border group-hover:border-accent/50 transition-colors duration-300">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/30 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-foreground rounded text-xs font-semibold">
            {project.category}
          </div>

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <p className="flex items-center gap-1.5 text-white/70 text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </p>
            <h3 className="text-white text-lg font-semibold leading-snug mb-2">{project.title}</h3>
            <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              View Project <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
