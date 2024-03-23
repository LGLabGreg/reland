'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';
import Testimonial from '@/components/testimonial';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { testimonials } from './config';

const Courses = () => {
  return (
    <Section id="testimonials">
      <Container>
        <div className="w-2/3 mx-auto flex flex-col justify-center items-center text-center mb-6">
          <div className="text-primary mb-1 uppercase font-semibold">Testimonials</div>
          <Heading level="h2">Why student love our platform</Heading>
          <Paragraph variant="lg" className="text-neutral-800/80">
            Whether you're looking to enhance your professional skills, explore a new hobby, or
            delve into academic subjects, our extensive course catalog has something for everyone.
          </Paragraph>
        </div>
        <div>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-[80%] md:max-w-[90%] mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="md:basis-1/2 lg:basis-1/3 self-center"
                >
                  <Testimonial {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};

export default Courses;
