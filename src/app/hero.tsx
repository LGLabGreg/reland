import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';

import image from '@/assets/hero/1.jpg';
import Image from 'next/image';
import { TextStyle } from '@/components/ui/text-style';

const Hero = () => {
  return (
    <section id="home" className="pt-[120px] bg-rose-50">
      <Container className="flex">
        <div className="flex flex-1 justify-center items-center px-5 py-5">
          <Heading level="h1">
            Manage your <TextStyle>product and team</TextStyle>
            <br />
            in one app
          </Heading>
        </div>
        <div className="flex flex-1 justify-center items-center px-5 py-5">
          <Image src={image} alt="" height={300} className="rounded-3xl" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
