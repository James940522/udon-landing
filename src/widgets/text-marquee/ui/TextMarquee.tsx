import { cn } from '@/shared/lib/utils';

type TextMarqueeVariant = 'flame' | 'charcoal' | 'cream';
type TextMarqueeDirection = 'left' | 'right';

interface TextMarqueeProps {
  items: string[];
  variant?: TextMarqueeVariant;
  direction?: TextMarqueeDirection;
  speed?: number;
  repeat?: number;
  className?: string;
  ariaLabel?: string;
}

const variantClassNames: Record<
  TextMarqueeVariant,
  {
    root: string;
    dot: string;
  }
> = {
  flame: {
    root: 'bg-[#5b160b] text-[#fff4d4] border-y border-[#d59a35] shadow-[0_8px_0_rgba(25,10,3,0.55)]',
    dot: 'bg-[#e6a52f] shadow-[0_0_0_3px_rgba(230,165,47,0.18)]',
  },
  charcoal: {
    root: 'bg-[#1b0d05] text-[#f5d89b] border-y border-[#8d571d] shadow-[0_8px_0_rgba(0,0,0,0.45)]',
    dot: 'bg-[#b66b20] shadow-[0_0_0_3px_rgba(182,107,32,0.2)]',
  },
  cream: {
    root: 'bg-[#f4dfb8] text-[#2d1507] border-y border-[#b9822c] shadow-[0_8px_0_rgba(70,33,8,0.18)]',
    dot: 'bg-[#8e1f10] shadow-[0_0_0_3px_rgba(142,31,16,0.14)]',
  },
};

export default function TextMarquee({
  items,
  variant = 'flame',
  direction = 'left',
  speed = 24,
  repeat = 3,
  className,
  ariaLabel = 'Brand highlights',
}: TextMarqueeProps) {
  const marqueeItems = items.length > 0 ? items : ['TODAY UDON'];
  const repeatedItems = Array.from({ length: repeat }, () => marqueeItems).flat();
  const animationName =
    direction === 'left' ? 'text-marquee-scroll-left' : 'text-marquee-scroll-right';
  const variantClassName = variantClassNames[variant];

  return (
    <section
      className={cn(
        'relative isolate overflow-hidden py-3 md:py-4',
        'before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-linear-to-r before:from-[#180904]/60 before:to-transparent',
        'after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-linear-to-l after:from-[#180904]/60 after:to-transparent',
        variantClassName.root,
        className
      )}
      aria-label={ariaLabel}
    >
      <p className="sr-only">{marqueeItems.join(', ')}</p>
      <div
        aria-hidden="true"
        className="flex w-max min-w-full items-center gap-8 whitespace-nowrap will-change-transform md:gap-12"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {[0, 1].map((trackIndex) => (
          <div key={trackIndex} className="flex shrink-0 items-center gap-8 md:gap-12">
            {repeatedItems.map((item, index) => (
              <span
                key={`${trackIndex}-${item}-${index}`}
                className="flex items-center gap-8 md:gap-12"
              >
                <span className="font-heading text-base font-bold uppercase tracking-normal md:text-xl">
                  {item}
                </span>
                <span className={cn('size-2 rounded-full md:size-2.5', variantClassName.dot)} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
