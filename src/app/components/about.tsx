"use client"
import { useEffect } from 'react';
import { Img, Box, Heading, Text, Flex } from "@chakra-ui/react";
import "@/styles/custom-style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VideoCompanyProfile } from './video';

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
        <Box id="#about" width="100%" position="relative" my={{ base: 11, lg: "24" }} px={{ base: 4, lg: 11 }}>
            <Box display={{ lg: "block" }}>
                {/* Bagian Gambar Kiri */}
                <Box float={{ lg: "left" }} width={{ lg: "50%" }} mb={{ base: 50, lg: 0 }}>
                    <Img data-aos="fade-up-right" src="/about1.png" alt="hero-img" height={{ lg: "100vh" }} width="100%" objectFit="cover" />
                     {/* 🎬 Sisipkan Video di sini */}
                    <Box data-aos="fade-up">
                        <VideoCompanyProfile />
                    </Box>
                </Box>

                {/* Konten Kanan + VIDEO */}
                <Box
                    float={{ lg: "right" }}
                    mt={{ base: 11, lg: "10%", xl: "20%" }}
                    width={{ lg: "33.33%" }}
                    px={{ base: 6, lg: 0 }}
                    display="flex"
                    flexDirection="column"
                    gap={4}
                    justifyContent="center"
                >
                    {/* Deskripsi atas */}
                    <Box width={{ lg: "75%" }} display={{ base: "none", lg: "block" }}>
                        <Text fontSize="md">
                           A&G Salon hadir dengan konsep modern yang mengutamakan kenyamanan dan hasil maksimal. A&G salon berdiri sejak 2023 beralamat di jl.kebo iwa Banjar Wanasara kelod,Desa bongan,Tabanan, kami menghadirkan layanan lengkap dari ujung kepala hingga kaki untuk pria dan wanita dengan teknik terkini dan produk premium.
                        </Text>
                    </Box>

                    {/* Gambar ke-2 */}
                    <Img data-aos="fade-up-left" src="/hero-place3.jpeg" alt="hero-img" height={{ base: "400px", lg: "700px" }} width="100%" objectFit="cover" />

                    {/* Deskripsi bawah (untuk mobile) */}
                    <Box width={{ base: "100%", md: "50%" }} display={{ lg: "none" }}>
                        <Text fontSize="xs">
                          A&G Salon hadir dengan konsep modern yang mengutamakan kenyamanan dan hasil maksimal. A&G salon berdiri sejak 2023 beralamat di jl.kebo iwa Banjar Wanasara kelod,Desa bongan,Tabanan, kami menghadirkan layanan lengkap dari ujung kepala hingga kaki untuk pria dan wanita dengan teknik terkini dan produk premium.
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
