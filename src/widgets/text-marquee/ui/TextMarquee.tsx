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
    root: 'bg-[#3b2115] text-[#fff2d8] border-y border-[#c9a24d] shadow-[0_8px_0_rgba(25,10,3,0.55)]',
    dot: 'bg-[#c9a24d] shadow-[0_0_0_3px_rgba(230,165,47,0.18)]',
  },
  charcoal: {
    root: 'bg-[#170c08] text-[#e6cf9b] border-y border-[#765421] shadow-[0_8px_0_rgba(0,0,0,0.45)]',
    dot: 'bg-[#a66732] shadow-[0_0_0_3px_rgba(182,107,32,0.2)]',
  },
  cream: {
    root: 'bg-[#ead8bb] text-[#26140e] border-y border-[#a66732] shadow-[0_8px_0_rgba(70,33,8,0.18)]',
    dot: 'bg-[#8f3528] shadow-[0_0_0_3px_rgba(142,31,16,0.14)]',
  },
};

export default function TextMarquee({
  items,
  variant = 'flame',
  direction = 'left',
  speed = 24,
  repeat = 5,
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
        'relative isolate overflow-hidden py-2 md:py-2.5',
        'before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-12 before:bg-linear-to-r before:from-[#170c08]/60 before:to-transparent',
        'after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-12 after:bg-linear-to-l after:from-[#170c08]/60 after:to-transparent',
        variantClassName.root,
        className
      )}
      aria-label={ariaLabel}
    >
      <p className="sr-only">{marqueeItems.join(', ')}</p>
      <div
        aria-hidden="true"
        className="flex w-max min-w-full items-center gap-5 whitespace-nowrap will-change-transform md:gap-7"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {[0, 1].map((trackIndex) => (
          <div key={trackIndex} className="flex shrink-0 items-center gap-5 md:gap-7">
            {repeatedItems.map((item, index) => (
              <span
                key={`${trackIndex}-${item}-${index}`}
                className="flex items-center gap-5 md:gap-7"
              >
                <span className="font-roadmap-display text-sm uppercase md:text-base">{item}</span>
                <span className={cn('size-1.5 rounded-full md:size-2', variantClassName.dot)} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
