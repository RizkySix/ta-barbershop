"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Card, CardBody, Img, Box, Flex, Text } from "@chakra-ui/react";
import "swiper/css";
import { advantagesData } from "../data/advantages.data";

export function Advatages() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  let icon = "";
  const advantageSlides = advantagesData.map((advantage, index) => {
    switch (index) {
      case 0:
        icon = "/cool.svg";
        break;
      case 1:
        icon = "/star.svg";
        break;
      case 2:
        icon = "/rainbow.svg";
        break;
      case 3:
        icon = "/love.svg";
        break;
    }

    return (
      <SwiperSlide key={index}>
      <Box mx="auto" width={{ base: "80%", md: "25%" }} textAlign="center">
      <Text 
        color="white" 
        fontSize={{ base: "md", md: "lg" }} 
        fontWeight="bold" 
        textShadow="0 0 10px rgba(0, 0, 0, 0.5)"
      >
        {advantage}
      </Text>
    </Box>
      </SwiperSlide>
    );
  });

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
      }}
      speed={800}
    >
      {advantageSlides}
    </Swiper>
  );
}


