import NewsletterSubscribe from '@/components/newsletter-subscribe';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import Link from 'next/link';

function Footer() {
  return (
    <div className="flex flex-col pt-24 pb-6 bg-dark-background text-dark-foreground">
      <Container className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-6 justify-between mb-6 md:mb-24">
          <div className="flex flex-col md:w-1/4 lg:w-1/3 mb-4 md:mb-0">
            <div className="mb-4">
              <img loading="lazy" src="/images/logo-white.png" className="w-auto h-[30px]" />
            </div>
            <p>
              At Reland, we are dedicated to providing an innovative and enriching online learning
              experience for learners of all ages and backgrounds.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <Heading level="h5" className="mb-4">
              Teaching
            </Heading>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Become a teacher</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <Heading level="h5" className="mb-4">
              Community
            </Heading>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#">Team Plan</Link>
              </li>
              <li>
                <Link href="#">Refer a Friend</Link>
              </li>
              <li>
                <Link href="#">Scholarships</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <Heading level="h5" className="mb-4">
              Subscribe
            </Heading>
            <NewsletterSubscribe />
          </div>
        </div>

        <div className="text-sm flex flex-col md:flex-row  md:justify-between md:items-center">
          <div className="mb-3 md:mb-0">&copy; Copyright 2024 LGLab. All rights reserved.</div>
          <ul className="flex gap-5">
            <li>
              <Link href="#">Terms</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Cookie Settings</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
