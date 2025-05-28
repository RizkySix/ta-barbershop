"use client"

import { Box, Img } from "@chakra-ui/react"

export function Hero() {
  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <Img src="/gallery-hero.jpg" alt="hero-img" objectFit="cover" width="100%" height="100%" />
      </Box>
  )
}
