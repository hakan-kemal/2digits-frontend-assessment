import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from './components/footer';
import Header from './components/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '2DIGITS blog site',
  description: 'Welcome to the 2DIGITS blog site!',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
