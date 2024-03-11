import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';

const Home = () => {
  return (
    <Container className="py-4 flex justify-center items-center flex-col">
      <Heading level="h1">Heading H1</Heading>
      <Heading level="h2">Heading H2</Heading>
      <Heading level="h3">Heading H3</Heading>
      <Heading level="h4">Heading H4</Heading>
      <Heading level="h5">Heading H5</Heading>
      <Heading level="h6">Heading H6</Heading>
      <Button>Button</Button>
    </Container>
  );
};

export default Home;
