import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/main-header';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Wordpress App',
  description: 'Next.js Wordpress App',
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
