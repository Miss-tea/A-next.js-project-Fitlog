import "./globals.css";
import Navbar from '@/components/Navbar';

import {Bebas_Neue } from 'next/font/google'

const displayFont = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en" className="{displayFont.variable}">  
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        <main>{children}</main>
        </body>
    </html>
  );
}
