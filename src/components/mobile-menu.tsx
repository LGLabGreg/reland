import Link from 'next/link';
import { AlignJustify } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';

import logo from '@/assets/logo.png';

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden mr-2">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Link href="/">
            <Image src={logo} height={30} alt="logo" />
          </Link>
          <SheetTitle>Lorem Ipsum</SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
