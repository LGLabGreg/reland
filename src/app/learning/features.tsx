import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';

import { features } from './config';

type FeaturesProps = {
  title?: string;
  description?: string;
};

const Features = () => {
  return (
    <div className="bg-primary text-primary-foreground py-10">
      <Container>
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 gap-x-8 gap-y-8 items-center">
          {features.map(({ title, description }: FeaturesProps) => (
            <li className="flex flex-col items-center" key={title}>
              {title && (
                <Heading level="h4" className="mb-1 text-3xl">
                  {title}
                </Heading>
              )}
              {description && <p className="text-xl text-center">{description}</p>}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Features;
