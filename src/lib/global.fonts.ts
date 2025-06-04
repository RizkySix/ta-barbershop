import { Inter, Poppins, Playfair_Display, Cormorant_Garamond, Edu_QLD_Beginner  } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-display",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-heading"
});

const edu = Edu_QLD_Beginner({
  subsets: ["latin"],
  weight: ["400", "700"], // gunakan 400 utk normal, 700 utk tebal
  variable: "--font-edu"
});

export {poppins,inter, playfair, cormorant, edu}