import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const NumberFormat = new Intl.NumberFormat('en-US');

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatNumber = (number: number): string => NumberFormat.format(number);
