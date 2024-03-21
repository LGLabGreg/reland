import Link from 'next/link';
import { type LucideIcon, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Paragraph } from '@/components/ui/paragraph';

import { Heading } from '@/components/ui/heading';

import { benefits } from './config';

type BenefitsProps = {
  icon?: LucideIcon;
  title?: string;
  description?: string;
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-20 bg-zinc-50">
      <Container className="md:flex">
        <div className="md:w-2/5 flex flex-col justify-center mb-8 md:mb-0 ">
          <div className="text-primary mb-1 uppercase font-semibold">Benefits</div>
          <Heading level="h2">What you get learning with us</Heading>
          <Paragraph variant="lg" className="text-neutral-800/80">
            With 10 years experience we want to always provide learning services that are not taught
            in school.
          </Paragraph>
          <Button className="self-start" asChild>
            <Link href="#">Explore Courses</Link>
          </Button>
        </div>

        <div className="md:w-3/5 grid sm:grid-cols-2 gap-5 md:flex-col md:pl-16">
          {benefits.map(({ icon: Icon, title, description }: BenefitsProps) => (
            <div
              className="border-2 border-primary rounded px-6 py-6 hover:bg-primary hover:text-primary-foreground transition-colors"
              key={title}
            >
              <div className="flex items-center mb-4">
                {Icon && (
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary mr-3">
                    <Icon className="text-foreground" />
                  </div>
                )}
                <Heading level="h3" className="text-xl mb-0">
                  {title}
                </Heading>
              </div>
              <Paragraph className="mb-0">{description}</Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
