'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { imageLogger } from '@/lib/imageLogger';

interface ParallaxBandProps {
  image: string;
  alt?: string;
  overlayClassName?: string;
  className?: string;
  children: React.ReactNode;
}

/** Full-bleed section whose background image scrolls slower than the page. */
export function ParallaxBand({ image, alt = '', overlayClassName, className, children }: ParallaxBandProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const logId = useRef<string | null>(null);

  return (
    <section ref={ref} className={cn('relative isolate overflow-hidden', className)}>
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={prefersReduced ? undefined : { y }}
          className="absolute -top-[14%] -bottom-[14%] left-0 right-0"
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
            onLoad={() => {
              if (!logId.current) {
                logId.current = imageLogger.startLoad(image, alt, 'ParallaxBand');
              } else {
                imageLogger.success(logId.current);
              }
            }}
            onError={(error) => {
              if (logId.current) imageLogger.error(logId.current, error);
            }}
          />
        </motion.div>
        <div className={cn('absolute inset-0', overlayClassName ?? 'bg-foreground/85')} />
      </div>
      {children}
    </section>
  );
}

interface ParallaxImgProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/** Image that drifts inside its (overflow-hidden, relative) frame as you scroll. */
export function ParallaxImg({ src, alt, className, sizes, priority }: ParallaxImgProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const logId = useRef<string | null>(null);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={prefersReduced ? undefined : { y }}
        className="absolute -top-[10%] -bottom-[10%] left-0 right-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? '(max-width: 1024px) 100vw, 50vw'}
          className={cn('object-cover', className)}
          onLoad={() => {
            if (!logId.current) {
              logId.current = imageLogger.startLoad(src, alt, 'ParallaxImg');
            } else {
              imageLogger.success(logId.current);
            }
          }}
          onError={(error) => {
            if (logId.current) imageLogger.error(logId.current, error);
          }}
        />
      </motion.div>
    </div>
  );
}
