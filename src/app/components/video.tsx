"use client";

import { Box, Heading, Text, AspectRatio } from "@chakra-ui/react";

export function VideoCompanyProfile() {
  return (
    <Box
      as="section"
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 8 }}
      textAlign="center"
      width={"full"}
    >

      <Text fontSize={{ base: "xs", md: "md" }} mb={8} color="gray.600">
        Kenali lebih dekat tentang A&G Salon dan bagaimana kami membantu Anda
        tampil percaya diri dengan layanan profesional dan berkualitas ✨
      </Text>

      <AspectRatio ratio={16 / 9} maxW={{base : "90%", lg: "80%"}} maxH={"500px"} mx="auto">
        <iframe
          src="https://www.youtube.com/embed/2nk4ck1sb3g?si=g5q15Uaj2-0ejIcN"
          title="A&G Salon Company Profile"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </AspectRatio>
    </Box>
  );
}
