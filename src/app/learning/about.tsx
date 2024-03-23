import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Paragraph } from '@/components/ui/paragraph';

import { Heading } from '@/components/ui/heading';
import Link from 'next/link';

const About = () => {
  return (
    <Section id="about">
      <Container className="md:flex">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <img src="/images/learning/about/about.jpg" alt="about us" className="rounded" />
        </div>
        <div className="md:w-1/2 md:px-8 lg:px-16 flex flex-col justify-center">
          <div className="text-primary mb-1 uppercase font-semibold">About us</div>
          <Heading level="h2">Personalized Learning Experience</Heading>
          <Paragraph variant="lg" className="text-neutral-800/80">
            We are dedicated to providing an innovative and enriching online learning experience for
            learners of all ages and backgrounds.
          </Paragraph>
          <Button className="self-start" asChild>
            <Link href="#">About Us</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default About;
