'use client';

import { type ReactNode, type ComponentPropsWithoutRef, useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

interface AnimateInViewProps extends ComponentPropsWithoutRef<'div'> {
  inViewClassName: string;
  asChild?: boolean;
}

const AnimateInView = ({
  children,
  className = '',
  inViewClassName,
  asChild,
}: AnimateInViewProps): ReactNode => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const [_className, setClassName] = useState<string>(
    cn('transition-all duration-1000 ease-in-out', className)
  );
  const Comp = asChild ? Slot : 'div';

  useEffect(() => {
    if (isInView) {
      setClassName(cn(_className, inViewClassName));
    }
  }, [isInView]);

  return (
    <Comp ref={ref} className={_className}>
      {children}
    </Comp>
  );
};

export default AnimateInView;
