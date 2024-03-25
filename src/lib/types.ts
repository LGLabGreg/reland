import { ReactNode } from 'react';

export type NavigationProps = {
  label: string;
  href: string;
};

export type CourseProps = {
  image: string;
  instructor: string;
  title: string;
  category: string;
  numStudents: number;
  length: string;
  dialogMedia?: string;
  dialogMediaType?: string;
};

export type CategoryButtonProps = {
  onClick: (category: string | null) => void;
  children: ReactNode;
  filter: string | null;
  category: string | null;
};
