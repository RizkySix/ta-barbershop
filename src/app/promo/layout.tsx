import type { Metadata } from "next";
import { Providers } from "../providers";
import "../globals.css";
import { poppins } from "@/lib/global.fonts";

export const metadata: Metadata = {
  title: "Booking Form - Master Silver Class",
  description: "Book your spot at Master Silver Class in Bali and join us to create unique and beautifully crafted silver jewelry. Experience the joy and excitement of making silver crafts with our expert instructors.",
  icons: {
    icon: '/logo.png',
  },
  keywords: "booking form, silver crafting class booking, Bali jewelry class, book silver class, join silver workshop, silver jewelry making, artisan jewelry, happy crafting experience",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Booking Form - Master Silver Class",
    description: "Book your spot at Master Silver Class in Bali and join us to create unique and beautifully crafted silver jewelry. Experience the joy and excitement of making silver crafts with our expert instructors.",
    type: "website",
    url: "https://www.mastersilverclass.com/booking",
    images: [
      {
        url: "https://www.mastersilverclass.com/utility.jpeg",
        width: 800,
        height: 600,
        alt: "Booking at Master Silver Class",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Booking Form - Master Silver Class",
    description: "Book your spot at Master Silver Class in Bali and join us to create unique and beautifully crafted silver jewelry. Experience the joy and excitement of making silver crafts with our expert instructors.",
    images: ["https://www.mastersilverclass.com/utility.jpeg"],
  },
  alternates: {
    canonical: "https://www.mastersilverclass.com/booking",
  },
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