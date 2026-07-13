'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface CounterProps {
  /** e.g. "15+", "AED 24M+", "20+" — the first number counts up, prefix/suffix stay as-is. */
  value: string;
  className?: string;
  duration?: number;
}

export default function Counter({ value, className, duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const match = value.match(/\d[\d,]*/);
  const prefix = match ? value.slice(0, match.index) : '';
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : '';

  useEffect(() => {
    if (!inView || !match || !ref.current) return;
    const target = parseInt(match[0].replace(/,/g, ''), 10);
    const node = ref.current;
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {match ? `${prefix}0${suffix}` : value}
    </span>
  );
}
