import Link from 'next/link';
import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';
import { Button } from '@/components/ui/button';
import TypeAnimation from '@/components/ui/type-animation';

const Hero = () => {
  return (
    <section id="home" className="pt-36 pb-24">
      <Container className="flex">
        <div className="w-1/2 flex flex-col justify-center">
          <Heading level="h1">
            Courses with
            <br />
            the <span className="text-primary underline">Best Mentors</span>.
            <br />
            Learn{' '}
            <TypeAnimation
              sequence={['Anything', 3000, 'Anywhere', 3000]}
              speed={50}
              repeat={Infinity}
            />
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
        <div className="w-1/2 flex flex-col justify-center items-center">
          <img src="images/learning/hero.png" alt="hero" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
