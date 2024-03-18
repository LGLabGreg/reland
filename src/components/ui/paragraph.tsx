import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

const ParagraphVariants = cva('mb-5', {
  variants: {
    variant: {
      default: '',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type Variant = 'default' | 'lg';

export interface ParagraphProps extends ComponentPropsWithRef<'p'> {
  variant?: Variant;
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return <p className={cn(ParagraphVariants({ variant, className }))} ref={ref} {...props} />;
  }
);
Paragraph.displayName = 'Paragraph';

export { Paragraph, ParagraphVariants };
