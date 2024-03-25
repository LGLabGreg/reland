import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import AnimateInView from '@/components/animate-in-view';

import { features } from './config';

type FeaturesProps = {
  title?: string;
  description?: string;
};

const Features = () => {
  return (
    <Section id="features" size="small" colour="primary">
      <Container>
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 gap-x-8 gap-y-8 items-center">
          {features.map(({ title, description }: FeaturesProps) => (
            <AnimateInView
              key={title}
              className="flex flex-col items-center opacity-0 -translate-y-8"
              inViewClassName="opacity-1 translate-y-0"
              asChild
            >
              <li>
                {title && (
                  <Heading level="h4" className="mb-1 lg:text-6xl">
                    {title}
                  </Heading>
                )}
                {description && <p className="text-xl text-center">{description}</p>}
              </li>
            </AnimateInView>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Features;
