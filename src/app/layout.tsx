import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.scss';
import MainHeader from '@/components/main-header';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Tailwind',
  description: 'Next.js Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
