'use client';

import Link from 'next/link';
import { ScrollParallax } from 'react-just-parallax';

import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';
import { Button } from '@/components/ui/button';
import TypeAnimation from '@/components/ui/type-animation';
import { Section } from '@/components/ui/section';

const Hero = () => {
  return (
    <Section id="home" size="hero">
      <Container className="md:flex">
        <div className="md:w-3/5 flex flex-col justify-center mb-10 md:mb-0">
          <Heading level="h1">
            Learn{' '}
            <TypeAnimation
              sequence={['Anything', 3000, 'Anywhere', 3000]}
              speed={50}
              repeat={Infinity}
            />
            <br />
            Courses with
            <br />
            the <span className="text-primary underline">Best Mentors</span>
          </Heading>
          <Paragraph variant="lg" className="text-neutral-800/80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque asperiores nobis cumque
            esse doloremque, aspernatur possimus sed provident deserunt voluptatibus aliquam ipsa
            autem dicta a aperiam eos quis id temporibus!
          </Paragraph>
          <div className="flex">
            <Button size="lg" className="mr-2" asChild>
              <Link href="#explore">Explore courses</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="#become-mentor">become a mentor</Link>
            </Button>
          </div>
        </div>
        <div className="relative md:w-2/5 flex flex-col justify-center items-center px-5 py-5">
          <ScrollParallax isAbsolutelyPositioned>
            <img
              src="/images/learning/hero-teacher.png"
              className="w-56 absolute -left-[3.5rem] top-[3.5rem] drop-shadow-xl"
              alt=""
            />
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned>
            <img
              src="/images/learning/hero-learning.png"
              className="w-12 absolute right-[1rem] top-[3.5rem] drop-shadow-xl"
              alt=""
            />
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned>
            <img
              src="/images/learning/hero-daily-task.png"
              className="w-72 absolute right-[2rem] bottom-[3.5rem] drop-shadow-xl"
              alt=""
            />
          </ScrollParallax>

          <img src="images/learning/hero.png" alt="hero" />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
