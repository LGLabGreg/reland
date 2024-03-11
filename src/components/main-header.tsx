import Link from 'next/link';
import Image from 'next/image';
import { AlignJustify, ShoppingCart } from 'lucide-react';

import { Navbar, NavbarCenter, NavbarLeft, NavbarRight } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';

import { navigation } from '@/lib/config';

import logo from '@/assets/logo.png';

const MainHeader = () => {
  return (
    <Navbar className="border-b" el={'header'}>
      <NavbarLeft>
        <Button size={'icon'} variant={'ghost'} className="lg:hidden mr-2">
          <AlignJustify />
        </Button>
        <Link href="/">
          <Image src={logo} height={30} alt="logo" />
        </Link>
      </NavbarLeft>
      <NavbarCenter className="hidden lg:flex">
        <ul className="flex gap-[20px]">
          {navigation.map((item) => {
            return (
              <li key={item.label}>
                <Button variant="ghost" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </NavbarCenter>
      <NavbarRight>
        <Button size={'icon'} variant={'ghost'}>
          <ShoppingCart />
        </Button>
      </NavbarRight>
    </Navbar>
  );
};

export default MainHeader;
