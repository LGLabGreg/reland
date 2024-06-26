import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Paragraph } from '@/components/ui/paragraph';
import { Heading } from '@/components/ui/heading';
import AnimateInView from '@/components/animate-in-view';
import { creators } from './config';

type CreatorsProps = {
  image: string;
  title: string;
  description: string;
};

const Creators = () => {
  return (
    <Section id="creators" colour="grey">
      <Container className="md:flex">
        <AnimateInView
          className="md:w-2/5 flex flex-col justify-center mb-8 md:mb-0 opacity-0 -translate-x-8"
          inViewClassName="opacity-1 translate-x-0"
        >
          <div className="text-primary mb-1 uppercase font-semibold">Creators</div>
          <Heading level="h2">Learn from creative experts</Heading>
          <Paragraph variant="lg" className="text-neutral-800/80">
            With 10 years experience we want to always provide learning services that are not taught
            in school.
          </Paragraph>
          <Button className="self-start" asChild>
            <Link href="#">View all Creators</Link>
          </Button>
        </AnimateInView>

        <AnimateInView
          className="md:w-3/5 grid sm:grid-cols-2 gap-5 md:pl-16 opacity-0 translate-x-8"
          inViewClassName="opacity-1 translate-x-0"
        >
          {creators.map(({ image, title, description }: CreatorsProps) => (
            <Link href="#" key={title}>
              <div
                style={{ backgroundImage: `url(${image})` }}
                className="relative overflow-hidden rounded bg-cover bg-center h-[240px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-inherit before:bg-cover before:origin-center before:transition-transform hover:before:scale-110 pseudo-image-hover drop-shadow"
              >
                <div className="absolute bottom-0 rounded-b w-full px-3 py-3 text-white bg-gradient-to-t from-black">
                  <p className="font-semibold text-lg">{title}</p>
                  <p>{description}</p>
                </div>
              </div>
            </Link>
          ))}
        </AnimateInView>
      </Container>
    </Section>
  );
};

export default Creators;
