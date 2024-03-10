import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Heading } from '@/components/heading';

const Home = () => {
  return (
    <Container className="py-4 flex justify-center items-center flex-col">
      <Heading level="h1">Home</Heading>
      <Heading level="h2">Home</Heading>
      <Heading level="h3">Home</Heading>
      <Heading level="h4">Home</Heading>
      <Heading level="h5">Home</Heading>
      <Heading level="h6">Home</Heading>
      <Button>Button</Button>
    </Container>
  );
};

export default Home;
