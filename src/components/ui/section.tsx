import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';

const sectionVariants = cva('', {
  variants: {
    size: {
      default: 'py-16 md:py-20',
      small: 'py-10',
      hero: 'pt-28 pb-20 md:pt-36 md:pb-24',
    },
    colour: {
      default: 'bg-background',
      grey: 'bg-grey-background',
      primary: 'bg-primary text-primary-foreground',
    },
  },
  defaultVariants: {
    size: 'default',
    colour: 'default',
  },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  children: ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, id, size, colour, ...props }, ref) => {
    return (
      <section
        id={id}
        className={cn(sectionVariants({ size, colour, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';

export { Section, sectionVariants };
