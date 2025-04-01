"use client"

import { Img, Box, Flex, Text, Link } from "@chakra-ui/react"
import { Advatages } from "./advantages"

export function Hero() {
  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <Img src="/hero-people.jpeg" alt="hero-img" objectFit="cover" width="100%" height="100%" />

      <Box
        position="absolute"
        top={{ base: "30%", md: "64" }}
        left="50%"
        transform="translateX(-50%)"
        width="100%"
        mx="auto"
      >
        <Advatages />
      </Box>

      <Box
        position="absolute"
        bottom="5%"
        left="50%"
        transform="translateX(-50%)"
        width="100%"
      >
        <Flex flexDirection="column" gap={4} alignItems="center">
          <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold" color="white" textAlign="center">
            {process.env.APP_NAME ?? "Master Silver Class"}
          </Text>
          <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold" color="white" textAlign="center">
            Rasakan Sentuhan Profesional
          </Text>
          <Text fontSize={{ base: "xs", md: "md" }} fontWeight="bold" color="white" textAlign="center" textDecoration="underline" cursor="pointer">
            <Link href="#location">LOCATION</Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}
