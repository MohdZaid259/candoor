import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Logo({
  className,
  imgClassName,
  showTagline = true,
}: {
  className?: string;
  imgClassName?: string;
  showTagline?: boolean;
}) {
  return (
    <Link href="/" className={cn('group flex items-center gap-3', className)}>
      <Image
        src="/candoor.svg"
        alt="CanDoor Glass Partitions"
        width={180}
        height={58}
        priority
        className={cn('h-8 w-auto sm:h-9', imgClassName)}
      />
      {showTagline && (
        <span className="hidden md:flex flex-col leading-none border-l border-current/20 pl-3">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70">
            Glass Partitions
          </span>
        </span>
      )}
    </Link>
  );
}
