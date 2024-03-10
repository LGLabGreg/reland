import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

const headingVariants = cva(' font-bold dark:text-white', {
  variants: {
    as: {
      default: 'text-5xl',
      h2: 'text-4xl',
    },
  },
  defaultVariants: {
    as: 'default',
  },
});

export interface HeadingProps
  extends ComponentPropsWithRef<'h1'>,
    VariantProps<typeof headingVariants> {
  level?: string;
  asChild?: boolean;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 'h1', asChild = false, as, ...props }, ref) => {
    const Comp = asChild ? Slot : level;
    return <Comp className={cn(headingVariants({ as }))} ref={ref} {...props} />;
  }
);
Heading.displayName = 'Heading';

export { Heading, headingVariants };
