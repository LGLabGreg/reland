import NewsletterSubscribe from '@/components/newsletter-subscribe';
import { Container } from '@/components/ui/container';

function Footer() {
  return (
    <div className="flex flex-col py-10 bg-zinc-800 text-white">
      <Container className="flex flex-col">
        <div>
          <img loading="lazy" src="/images/logo-white.png" className="w-auto h-[30px] max-w-none" />
        </div>
        <div className="">
          <div className="font-medium leading-[140%]">
            © Copyright 2024 LGLab. All rights reserved.
          </div>
          <div className="flex gap-5 my-auto leading-[87.5%]">
            <div>Terms</div>
            <div>Privacy</div>
            <div>Cookie Settings</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
