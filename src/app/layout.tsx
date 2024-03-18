import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Urbanist } from 'next/font/google';
import './globals.scss';
import MainHeader from '@/components/main-header';

const font = Urbanist({ subsets: ['latin'] });

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
      <body className={font.className}>
        <MainHeader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
