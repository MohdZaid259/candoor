'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, CalendarDays } from 'lucide-react';
import { Wallet, HardHat, Users } from 'lucide-react';
import { Project } from '@/lib/projects';
import ProjectInfoCard from './project-info-card';

interface ProjectDetailHeroProps {
  project: Project;
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-96 sm:h-125 lg:h-150 w-full overflow-hidden">
        <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/10 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="section-container pt-0!">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 -mt-24 sm:-mt-28 mb-16 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-background border border-border rounded-2xl p-8 sm:p-10 shadow-xl">
            <div className="space-y-4">
              <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">
                {project.category}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{project.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground font-semibold">Location</p>
                    <p className="text-foreground font-medium text-sm">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground font-semibold">Duration</p>
                    <p className="text-foreground font-medium text-sm">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div variants={itemVariants} className="space-y-4">
            {project.value && <ProjectInfoCard label="Project Value" value={project.value} icon={Wallet} />}
            <ProjectInfoCard label="Delivery Model" value="Turnkey — in-house teams" icon={HardHat} />
            {project.contractor && <ProjectInfoCard label="Contractor" value={project.contractor} icon={HardHat} />}
            {project.consultant && <ProjectInfoCard label="Consultant" value={project.consultant} icon={Users} />}
            <ProjectInfoCard label="Aftercare" value="AMC & emergency support" icon={Users} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
