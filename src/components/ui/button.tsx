import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded font-semibold transition-all',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        active: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'text-primary/70 hover:text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
        tab: 'border-0 border-b-2 border-b-border rounded-none data-[active=true]:border-b-primary',
        mainmenu: 'text-neutral-800/70 data-[active=true]:text-neutral-800 hover:text-neutral-800',
      },
      size: {
        default: 'py-[8px] px-[16px]',
        sm: 'py-[6px] px-[12px]',
        lg: 'py-[14px] px-[24px]',
        icon: 'py-[8px] px-[8px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = 'button', variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
