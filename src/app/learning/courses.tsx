'use client';

import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

import { formatNumber } from '@/lib/utils';

import { courses } from './config';
import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';

export type CourseProps = {
  image: string;
  instructor: string;
  title: string;
  category: string;
  numStudents: number;
  length: string;
};

type CategoryButtonProps = {
  onClick: (category: string | null) => void;
  children: ReactNode;
  filter: string | null;
  category: string | null;
};

const CategoryButton = ({ onClick, children, filter, category }: CategoryButtonProps) => (
  <Button
    variant={category === filter ? 'default' : 'outline'}
    size="sm"
    onClick={() => onClick(category)}
    className="rounded-full"
  >
    {children}
  </Button>
);

const Courses = () => {
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <section id="courses" className="py-16 md:py-20">
      <Container>
        <div className="w-2/3 mx-auto flex flex-col justify-center items-center text-center mb-6">
          <div className="text-primary mb-1 uppercase font-semibold">Featured Courses</div>
          <Heading level="h2">Explore our most popular courses</Heading>
          <Paragraph variant="lg" className="text-neutral-800/80">
            Whether you're looking to enhance your professional skills, explore a new hobby, or
            delve into academic subjects, our extensive course catalog has something for everyone.
          </Paragraph>
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-3 mb-6">
            <li>
              <CategoryButton
                filter={filter}
                category={null}
                onClick={(category) => setFilter(category)}
              >
                Featured
              </CategoryButton>
            </li>
            {courses
              .reduce((acc: string[], course: CourseProps) => {
                if (acc.includes(course.category)) {
                  return acc;
                }
                return [...acc, course.category];
              }, [])
              .map((category: string) => (
                <li key={category}>
                  <CategoryButton
                    filter={filter}
                    category={category}
                    onClick={(category) => setFilter(category)}
                  >
                    {category}
                  </CategoryButton>
                </li>
              ))}
          </ul>
        </nav>
        <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {courses
            .filter(({ category }) => !filter || category === filter)
            .map(({ image, instructor, title, numStudents, length }) => (
              <AnimatePresence key={title}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col rounded drop-shadow overflow-hidden bg-white"
                >
                  <div className="flex items-center justify-center h-[164px] overflow-hidden">
                    <img src={image} alt={title} />
                  </div>
                  <div className="flex flex-col flex-grow py-3 px-3">
                    <p className="text-muted text-sm mb-2">{instructor}</p>
                    <p className="font-semibold mb-3">{title}</p>
                    <div className="flex justify-between items-center mt-auto text-muted text-sm">
                      <div>{formatNumber(numStudents)} students</div>
                      <div>{length}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Courses;
