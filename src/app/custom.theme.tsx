import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
   
    fonts: {
      heading: 'var(--font-edu)',
      body: 'var(--font-edu)',
    },

    //ini jika kita memakau edu font style
     fontSizes: {
    xs: "0.85rem",   // ~13.6px
    sm: "0.95rem",   // ~15.2px
    md: "1.05rem",   // ~16.8px
    lg: "1.2rem",    // ~19.2px
    xl: "1.5rem",    // ~24px
    "2xl": "1.875rem", // ~30px
    "3xl": "2.25rem",  // ~36px
    "4xl": "2.625rem", // ~42px
    "5xl": "3rem",     // ~48px
    "6xl": "3.75rem",  // ~60px
    "7xl": "4.5rem",   // ~72px
    "8xl": "6rem",     // ~96px
    "9xl": "8rem",     // ~128px
  },
});
