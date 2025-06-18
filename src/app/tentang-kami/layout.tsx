import type { Metadata } from "next";
import { Providers } from "../providers";
import "../globals.css";
import { poppins } from "@/lib/global.fonts";

export const metadata: Metadata = {
  title: "Galeri - Transformasi Kecantikan di A&G Salon Bali",
  description: "Lihat hasil karya terbaik kami dan momen bahagia pelanggan setelah perawatan di A&G Salon. Bukti nyata layanan profesional stylist kami.",
  icons: {
    icon: '/logo.png',
  },
  keywords: [
    "hasil potong rambut Bali",
    "sebelum setelah salon",
    "galeri styling rambut",
    "facial treatment Bali",
    "transformasi kecantikan",
    "testimoni salon Ubud",
    "karya terbaik stylist"
  ],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Tentang A&G Salon - Beutify Your Beauty",
    description: "Kumpulan hasil karya dan momen spesial pelanggan kami yang telah merasakan perawatan profesional di A&G Salon Bali.",
    type: "website",
    url: "https://www.agsalonbali.com/tentang-kami",
    images: [
      {
        url: "https://www.agsalonbali.com/galeri-og.jpg",
        width: 1200,
        height: 630,
        alt: "Hasil styling rambut dan perawatan wajah di A&G Salon",
      },
    ],
    siteName: "A&G Salon Bali",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lihat Transformasi Menakjubkan di A&G Salon Bali",
    description: "Scroll galeri kami dan buktikan sendiri perubahan menakjubkan yang bisa kami berikan untuk penampilan Anda",
    images: ["https://www.agsalonbali.com/galeri-twitter.jpg"],
    creator: "@AGSalonBali",
  },
  alternates: {
    canonical: "https://www.agsalonbali.com/tentang-kami",
  },
  metadataBase: new URL("https://www.agsalonbali.com"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div >
        <Providers>{children}</Providers>
    </div>
  )
}