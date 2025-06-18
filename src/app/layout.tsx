import type { Metadata } from "next";

import "./globals.css";
import { Providers } from './providers'
import { arial, cormorant, edu, playfair, poppins } from "@/lib/global.fonts";
import Head from "next/head";



export const metadata: Metadata = {
  title: "A&G Salon - Salon Kecantikan Profesional di Bali",
  description: "Temukan pengalaman perawatan rambut dan kecantikan premium di A&G Salon Bali. Stylist profesional kami siap membantu Anda tampil maksimal dengan gaya terkini.",
  icons: {
    icon: '/logo.png',
  },
  keywords: [
    "salon Bali", 
    "perawatan rambut profesional", 
    "styling rambut", 
    "facial treatment", 
    "salon pria dan wanita",
    "kecantikan rambut",
    "salon terbaik di Ubud"
  ],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "A&G Salon - Transformasi Kecantikan Profesional di Bali",
    description: "Dari potong rambut hingga perawatan wajah, kami menciptakan penampilan terbaik untuk Anda di Bali.",
    type: "website",
    url: "https://www.agsalonbali.com",
    images: [
      {
        url: "https://www.agsalonbali.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior modern A&G Salon di Bali",
      },
    ],
    siteName: "A&G Salon Bali",
  },
  twitter: {
    card: "summary_large_image",
    title: "A&G Salon - Solusi Kecantikan Terbaik di Bali",
    description: "Temukan stylist profesional dan perawatan premium untuk penampilan terbaik Anda di Bali.",
    images: ["https://www.agsalonbali.com/twitter-card.jpg"],
    creator: "@AGSalonBali",
  },
  alternates: {
    canonical: "https://www.agsalonbali.com",
  },
  metadataBase: new URL("https://www.agsalonbali.com"),
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={arial.variable}>
      <body>
        <div >
        <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}