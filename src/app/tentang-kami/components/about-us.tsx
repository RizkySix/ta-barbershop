"use client";

import { VideoCompanyProfile } from "@/app/components/video";
import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function AboutUsDetail() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // Pastikan animasi tidak hanya dijalankan sekali
        });

        // Memastikan AOS di-refresh setiap kali komponen dirender ulang
        AOS.refresh();
    }, []);
  return (
   <Box>
     <Box
        id="us"
      as="section"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 12 }}
      bg="white"
      textAlign="center"
    >
      <VStack spacing={2} maxW="4xl" mx="auto">
       <h1 className="text-sm lg:text-lg font-bold leading-7 lg:leading-9">
           PROFILE KAMI
          </h1>

        <p className="text-xs lg:text-base mb-4 lg:mb-8 px-1 lg:px-0 text-center max-w-full">
          A&G Salon hadir dengan konsep modern yang mengutamakan kenyamanan dan hasil maksimal.
          A&G Salon berdiri sejak 2023 dan beralamat di Jl. Kebo Iwa, Banjar Wanasara Kelod, Desa Bongan, Tabanan.
          Kami menghadirkan layanan lengkap dari ujung kepala hingga kaki untuk pria dan wanita
          dengan teknik terkini dan produk premium.
        </p>

        <p className="text-xs lg:text-base mb-4 lg:mb-8 px-1 lg:px-0 text-center max-w-full">
          Dengan menggabungkan keahlian stylist profesional dan sentuhan personal yang hangat,
          A&G Salon menjadi tempat transformasi bukan hanya dari penampilan, tetapi juga rasa percaya diri.
          Kami percaya bahwa setiap individu memiliki kecantikan unik, dan tugas kami adalah memperkuat pesonanya.
        </p>

        <Box pt={4}>
          <Text
            fontSize={{ base: "base", md: "2xl" }}
            fontStyle="italic"
            fontWeight="semibold"
            color="#b0662c"
          >
            “Beautify Your Beauty”
          </Text>
        </Box>
      </VStack>
    </Box>

    <Box data-aos="fade-up" id="video" className="videos">
            <VideoCompanyProfile />
        </Box>
   </Box>
  );
}
