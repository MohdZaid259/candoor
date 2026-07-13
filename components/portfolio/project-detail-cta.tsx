"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectDetailCTA() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-foreground rounded-2xl p-12 text-center text-background overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl z-0" />
        <h2 className="text-background mb-4 relative">Ready for Your Next Project?</h2>
        <p className="text-background/75 text-lg mb-8 max-w-2xl mx-auto relative">
          Let&apos;s discuss how we can bring the same precision to your next glass and aluminium project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
          <Link href="/contact" className="button-accent">
            Schedule Consultation
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 border border-background/25 text-background font-medium text-sm rounded-lg hover:bg-background/10 transition-all duration-300"
          >
            View More Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
