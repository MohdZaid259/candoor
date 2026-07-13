'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds for one full loop. */
  duration?: number;
}

export default function Marquee({ children, className, duration = 36 }: MarqueeProps) {
  return (
    <div className={cn('overflow-hidden marquee-mask', className)}>
      <div
        className="flex w-max animate-marquee"
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
