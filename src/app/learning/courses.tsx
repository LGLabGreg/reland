'use client';

import { useState } from 'react';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Course from '@/components/course';

import { type CourseProps, type CategoryButtonProps } from '@/lib/types';

import { courses } from './config';
import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';

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
    <Section id="courses">
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
          {courses.map((course) => (
            <Course key={course.title} course={course} filter={filter} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Courses;
