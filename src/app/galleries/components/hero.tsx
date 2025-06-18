"use client"

import { Box, Img } from "@chakra-ui/react"

export function Hero({image = "/gallery-hero.jpg"} : {image?: string}) {
  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <Img src={image} alt="hero-img" objectFit="cover" width="100%" height="100%" />
      </Box>
  )
}
