import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({
  className,
  showTagline = true,
}: {
  className?: string;
  imgClassName?: string;
  showTagline?: boolean;
}) {
  return (
    <Link href="/" className={cn('group flex items-center gap-3', className)}>
      <span className="flex items-baseline gap-1.5">
        <span className="w-2.5 h-2.5 rotate-45 bg-accent shrink-0 self-center" aria-hidden="true" />
        <span className="font-serif text-2xl sm:text-[1.65rem] font-bold tracking-tight leading-none">
          Cottage
        </span>
      </span>
      {showTagline && (
        <span className="hidden md:flex flex-col leading-none border-l border-current/20 pl-3">
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase opacity-70">
            Interior Decor &
          </span>
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase opacity-70 mt-1">
            Building Maintenance
          </span>
        </span>
      )}
    </Link>
  );
}
