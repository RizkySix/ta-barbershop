"use client"
import { useEffect } from 'react';
import { Img, Box, Heading, Text, Flex } from "@chakra-ui/react";
import "@/styles/custom-style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // Pastikan animasi tidak hanya dijalankan sekali
        });

        // Memastikan AOS di-refresh setiap kali komponen dirender ulang
        AOS.refresh();
    }, []);
    
    return (
        <Box id="#about" width="100%" position="relative" my={{ base: 11, lg: 24 }} px={{ base: 4, lg: 11 }}>
            <Box display={{ lg: "block" }}>
                <Box float={{ lg: "left" }} width={{ lg: "50%" }} mb={{base:50, lg:0}}>
                    <Img data-aos="fade-up-right" src="/hero-place1.jpeg" alt="hero-img" height={{ lg: "100vh" }} width="100%" objectFit="cover" />
                </Box>

                <Box
                    float={{ lg: "right" }}
                    mt={{ base: 11, lg: "20%" }}
                    width={{ lg: "33.33%" }}
                    px={{ base: 6, lg: 0 }}
                    display="flex"
                    flexDirection="column"
                    gap={4}
                    justifyContent="center"
                >
                    <Box width={{ lg: "75%" }} display={{ base: "none", lg: "block" }}>
                        <Heading as="h4" fontSize="lg" fontWeight="bold" lineHeight="9">Kenapa Bersama Kami?</Heading>
                        <Text fontSize="md">A&G Salon hadir dengan konsep modern yang mengutamakan kenyamanan dan hasil maksimal. 
                        Berdiri di Bali sejak 2023, kami menghadirkan layanan lengkap untuk rambut dan perawatan wajah 
                        dengan teknik terkini dan produk premium. Tim stylist profesional kami siap membantu Anda 
                        tampil percaya diri dengan gaya yang personal dan sesuai kebutuhan.</Text>
                    </Box>
                    <Img data-aos="fade-up-left" src="/hero-place3.jpeg" alt="hero-img" height={{ base: "400px", lg: "700px" }} width="100%" objectFit="cover" />
                    {/* <FadeInImage src="/neckles.jpg" alt="hero-img" className="w-full h-[400px] lg:h-[700px] object-cover" /> */}
                    <Box width={{ base: "100%", md: "50%" }} display={{ lg: "none" }}>
                        <Heading as="h4" fontSize="sm" fontWeight="bold" lineHeight="9">Kenapa Bersama Kami?</Heading>
                        <Text fontSize="xs">A&G Salon hadir dengan konsep modern yang mengutamakan kenyamanan dan hasil maksimal. 
                        Berdiri di Bali sejak 2023, kami menghadirkan layanan lengkap untuk rambut dan perawatan wajah 
                        dengan teknik terkini dan produk premium. Tim stylist profesional kami siap membantu Anda 
                        tampil percaya diri dengan gaya yang personal dan sesuai kebutuhan.</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
