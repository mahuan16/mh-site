import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Outfit, Silkscreen } from 'next/font/google';



import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const silkscreen = Silkscreen({
     subsets: ['latin'],
     weight: ['400', '700'], 
     variable: '--font-silkscreen'
   });

export const metadata: Metadata = {
  title: "Maria Huan | Portfolio",
  description: "Personal portfolio and blog for Maria Huan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${outfit.variable} ${silkscreen.variable} font-sans h-screen flex flex-col`}>
        <Navbar fontClass={silkscreen.className} />
          <main className="flex-1">
          {children}
          </main>
        <Footer fontClass={silkscreen.className} />
        </body>
    </html>
  );
}
