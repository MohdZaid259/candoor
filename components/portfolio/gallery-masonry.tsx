"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryMasonryProps {
  images: string[];
  title?: string;
}

export default function GalleryMasonry({ images, title }: GalleryMasonryProps) {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  if (images.length === 0) return null;

  return (
    <div className="section-container">
      <span className="eyebrow mb-4">{title ?? 'Gallery'}</span>
      <h2 className="mb-12">Project Gallery</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image}
            className="relative overflow-hidden rounded-xl bg-muted border border-border group"
            variants={itemVariants}
          >
            <div className="relative w-full aspect-4/3">
              <Image
                src={image}
                alt={`Gallery photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
