import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Urbanist } from 'next/font/google';
import './globals.scss';
import MainHeader from './main-header';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reland',
  description: 'Next.js Tailwind Landing Page template',
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
        <SpeedInsights />
      </body>
    </html>
  );
}
