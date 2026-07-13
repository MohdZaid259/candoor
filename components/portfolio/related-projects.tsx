"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import ProjectCard from "./project-card";

interface RelatedProjectsProps {
  projects: Project[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="section-container py-16 sm:py-24">
      <span className="eyebrow mb-4">More Work</span>
      <h2 className="mb-12">Related Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
