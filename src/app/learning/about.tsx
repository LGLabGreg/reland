'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useInView, useAnimate } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Paragraph } from '@/components/ui/paragraph';
import { Heading } from '@/components/ui/heading';
import Image from '@/components/ui/image';
import AnimateInView from '@/components/animate-in-view';

const About = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  return (
    <Section id="about" ref={scope}>
      <Container className="md:flex">
        <AnimateInView
          className="mb-8 md:mb-0 md:w-1/2 flex flex-col justify-center opacity-0 -translate-x-8"
          inViewClassName="opacity-1 translate-x-0"
        >
          <Image src="/images/learning/about/about.jpg" alt="about us" className="rounded" />
        </AnimateInView>
        <AnimateInView
          className="md:w-1/2 md:px-8 lg:px-16 flex flex-col justify-center opacity-0 translate-x-8"
          inViewClassName="opacity-1 translate-x-0"
        >
          <div className="text-primary mb-1 uppercase font-semibold">About us</div>
          <Heading level="h2">Personalized Learning Experience</Heading>
          <Paragraph variant="lg" className="text-neutral-800/80">
            We are dedicated to providing an innovative and enriching online learning experience for
            learners of all ages and backgrounds.
          </Paragraph>
          <Button className="self-start" asChild>
            <Link href="#">About Us</Link>
          </Button>
        </AnimateInView>
      </Container>
    </Section>
  );
};

export default About;
