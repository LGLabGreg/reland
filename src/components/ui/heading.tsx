import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

const headingVariants = cva('font-semibold', {
  variants: {
    level: {
      h1: 'text-[clamp(2.25rem,0.86rem+5.68vw,4.5rem)] leading-tight mb-7 font-bold',
      h2: 'text-[clamp(1.875rem,1.36rem+2.55vw,3rem)] leading-tight mb-5',
      h3: 'text-[clamp(1.5rem,1.32rem+0.85vw,1.875rem)] leading-tight mb-4',
      h4: 'text-2xl lg:text-3xl leading-tight mb-3',
      h5: 'text-xl leading-tight mb-3',
      h6: 'text-lg leading-tight mb-3',
    },
  },
  defaultVariants: {
    level: 'h1',
  },
});

type Level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends ComponentPropsWithRef<'h1'> {
  level: Level;
  asChild?: boolean;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : level;
    return <Comp className={cn(headingVariants({ level, className }))} ref={ref} {...props} />;
  }
);
Heading.displayName = 'Heading';

export { Heading, headingVariants };
