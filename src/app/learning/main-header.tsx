'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { Navbar, NavbarCenter, NavbarLeft, NavbarRight } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';

import { useScrollProps, useSectionObserver } from '@/lib/hooks';

import MobileNav from './mobile-nav';
import { navigation } from './config';

const MainHeader = () => {
  const activeSectionId = useSectionObserver(navigation);
  const scrollProps = useScrollProps();

  return (
    <Navbar
      className={`fixed left-0 w-full z-50 border-b border-transparent transition-all ${
        scrollProps.position > 0 && 'bg-white border-border'
      } ${scrollProps.direction === 'up' ? 'top-0' : '-top-mainnav'}`}
      el={'header'}
    >
      <Container className="flex">
        <NavbarLeft>
          <MobileNav />
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={120} height={0} />
          </Link>
        </NavbarLeft>
        <NavbarCenter className="hidden lg:flex">
          <ul className="flex gap-2">
            {navigation.map((item) => {
              return (
                <li key={item.label}>
                  <Button variant={'mainmenu'} data-active={activeSectionId === item.href} asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </NavbarCenter>
        <NavbarRight>
          <Button>Join Now</Button>
        </NavbarRight>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
