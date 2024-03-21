import Link from 'next/link';
import { type LucideIcon, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Paragraph } from '@/components/ui/paragraph';

import { Heading } from '@/components/ui/heading';

import { creators } from './config';

type CreatorsProps = {
  image: string;
  title: string;
  description: string;
};

const Creators = () => {
  return (
    <section id="benefits" className="py-16 md:py-20 bg-zinc-50">
      <Container className="md:flex">
        <div className="md:w-2/5 flex flex-col justify-center mb-8 md:mb-0 ">
          <div className="text-primary mb-1 uppercase font-semibold">Creators</div>
          <Heading level="h2">Learn from creative experts</Heading>
          <Paragraph variant="lg" className="text-neutral-800/80">
            With 10 years experience we want to always provide learning services that are not taught
            in school.
          </Paragraph>
          <Button className="self-start" asChild>
            <Link href="#">View all Creators</Link>
          </Button>
        </div>

        <div className="md:w-3/5 grid sm:grid-cols-2 gap-5 md:pl-16">
          {creators.map(({ image, title, description }: CreatorsProps) => (
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="relative overflow-hidden rounded bg-cover bg-center h-[240px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-inherit before:bg-cover before:origin-center before:transition-transform hover:before:scale-110 pseudo-image-hover"
              key={title}
            >
              <div className="absolute bottom-0 rounded-b w-full px-3 py-3 text-white bg-gradient-to-t from-black">
                <p className="font-semibold text-lg">{title}</p>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Creators;
