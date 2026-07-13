'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/projects';

export default function Projects() {
  const featured = getFeaturedProjects().slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="projects" className="section-container bg-background">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow justify-center">Our Portfolio</span>
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">Featured Projects</h2>
        <p className="text-lg text-muted-foreground">
          From national utility facilities to private villas — a portfolio built on trust
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {featured.map((project) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                <p className="flex items-center gap-1.5 text-white/70 text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3 leading-snug">{project.title}</h3>
                <span className="inline-flex items-center gap-2 text-accent font-medium text-sm">
                  View Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-accent text-foreground rounded text-xs font-semibold">
                {project.category}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link href="/projects" className="button-primary inline-flex items-center gap-2">
          View All Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
