import { Button } from '@/components/button';
import { Heading } from '@/components/heading';

const Home = () => {
  return (
    <main className="container mx-auto py-4 flex justify-center items-center flex-col">
      <Heading>Home</Heading>
      <Heading level="h2">Home</Heading>
      <Button>Button</Button>
    </main>
  );
};

export default Home;
