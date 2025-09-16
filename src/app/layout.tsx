import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Footer from './components/footer';
import Header from './components/header';

import './globals.css';

const roboto = Roboto({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '2DIGITS blog site',
  description: 'Welcome to the 2DIGITS blog site!',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
