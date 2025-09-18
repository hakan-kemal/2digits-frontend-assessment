import type { Metadata } from 'next';
import { Open_Sans, Roboto } from 'next/font/google';

import Footer from '@/app/components/footer';
import Header from '@/app/components/header';

import './globals.css';

const roboto = Roboto({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '2DIGITS blog site',
  description: 'Welcome to the 2DIGITS blog site!',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${openSans.className}`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
