import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';

const Home = () => {
  return (
    <Container className="flex justify-center items-center flex-col">
      <section id="home" className="pt-mainnav">
        <Heading level="h1">Home</Heading>
      </section>
      <section id="about" className="pt-mainnav">
        <Heading level="h1">About</Heading>
      </section>
      <section id="portfolio" className="pt-mainnav">
        <Heading level="h1">Portfolio</Heading>
      </section>
    </Container>
  );
};

export default Home;
