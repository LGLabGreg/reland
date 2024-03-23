import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
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
    <Section id="benefits" colour="grey">
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

        <div className="md:w-3/5 grid sm:grid-cols-2 gap-5 md:pl-16">
          {benefits.map(({ icon: Icon, title, description }: BenefitsProps) => (
            <div
              className="group border shadow rounded px-6 py-6 hover:bg-primary hover:text-primary-foreground transition-colors"
              key={title}
            >
              <div className="flex items-center mb-4">
                {Icon && (
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-background/10 mr-3 transition-colors">
                    <Icon className="text-foreground group-hover:text-dark-foreground transition-colors" />
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
    </Section>
  );
};

export default Benefits;
