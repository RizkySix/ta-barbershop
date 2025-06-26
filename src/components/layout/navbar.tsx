"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel, Image, Box, Heading, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

export default function Navbar() {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathName = window.location.pathname;
      let pageIndex = 0
      if(pathName === "/") {
        pageIndex = 0
      }else if(pathName === "/tentang-kami") {
        pageIndex = 1
      }else if(pathName === "/promo") {
        pageIndex = 2
      }else if(pathName === "/galleries") {
        pageIndex = 3
      }
     
      setPageIndex(pageIndex);
    }
  }, []);

  const baseContent = [
    {
      tag:"#services",
      title: "Layanan kami"
    },
    {
      tag:"#location",
      title: "Lokasi kami"
    }
  ]
  const [content, setContent] = useState(baseContent)

  const handleTabsChange = (index: number) => {
    setPageIndex(index);
    if (index === 0) {
      router.push('/');
    } else if(index === 1) {
      router.push('/tentang-kami');
    } else if(index === 2) {
      router.push('/promo');
    } else if(index === 3) {
      router.push('/galleries');
    } 
  };

  useEffect(() => {
    const pathName = window.location.pathname;
  
    if (pathName === '/') {
      setContent(baseContent);
    } else if (pathName === "/tentang-kami") {
      setContent([
          {
            tag: "#us",
            title: "Tentang kami"
          },
          {
            tag: "#video",
            title: "Video profile"
          },
        ]);
    } else if (pathName === '/galleries') {
      setContent([
        {
          tag: "#whyus",
          title: "Kenapa bersama kami?"
        },
        {
          tag: "#testimoni",
          title: "Gallery"
        },
      ]);
    }
  }, [router]); // atau tambahkan dependency pada pageIndex

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" className="navbar" position="sticky" top="0" zIndex="50">
      <Tabs isFitted size="md" variant="enclosed" index={pageIndex} onChange={handleTabsChange}>
        {/* Header Section */}
        <Flex
        width="full"
        height={{ base: "80px", md: "112px" }}
        px="4"
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        alignItems="center"
        justifyContent="space-between"
        position="relative"
        className="shadow-sm"
      >

        
        {/* KIRI: Dekoratif gradient */}
        <Box
          className="hidden md:block"
          position="absolute"
          left="0"
          top="0"
          height="100%"
          width="50%"
          zIndex="0"
          bgGradient="linear(to-r, #eac7a1, transparent)"

        />
        
        {/* KANAN: Dekoratif gradient */}
        <Box
          className="hidden md:block"
          position="absolute"
          right="0"
          top="0"
          height="100%"
          width="50%"
          zIndex="0"
           bgGradient="linear(to-l, #eac7a1, transparent)"

        />

        {/* Hamburger Menu */}
        <IconButton
          aria-label="Open menu"
          icon={<MdMenu size={28} />}
          variant="ghost"
          onClick={onOpen}
          zIndex="10"
        />

        {/* Logo */}
        <Link
          href="/"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={{ base: "60px", md: "80px" }}
            height={{ base: "60px", md: "80px" }}
          />
        </Link>

        {/* Dummy box supaya logo tetap center */}
        <Box width="40px" zIndex="10" />
      </Flex>

        {/* Tab List */}
        <TabList bg="white" color="black">
  <Tab
    roundedTopLeft="none"
    fontSize={{ base: 'xs', md: 'md' }}
    px={{ base: 2, md: 4 }}
    whiteSpace="nowrap"
    _selected={{ color: 'white', bg: '#b0662c' }}
    _hover={{ bg: '#b0662c', color: 'white' }}
  >
    <span>Beranda</span>
  </Tab>
  <Tab
    fontSize={{ base: 'xs', md: 'md' }}
    px={{ base: 2, md: 4 }}
    whiteSpace="nowrap"
    _selected={{ color: 'white', bg: '#b0662c' }}
    _hover={{ bg: '#b0662c', color: 'white' }}
  >
    <span>Tentang Kami</span>
  </Tab>
  <Tab
    fontSize={{ base: 'xs', md: 'md' }}
    px={{ base: 2, md: 4 }}
    whiteSpace="nowrap"
    _selected={{ color: 'white', bg: '#b0662c' }}
    _hover={{ bg: '#b0662c', color: 'white' }}
  >
    <span>Promo</span>
  </Tab>
  <Tab
    roundedTopRight="none"
    fontSize={{ base: 'xs', md: 'md' }}
    px={{ base: 2, md: 4 }}
    whiteSpace="nowrap"
    _selected={{ color: 'white', bg: '#b0662c' }}
    _hover={{ bg: '#b0662c', color: 'white' }}
  >
    <span>Galeri</span>
  </Tab>
</TabList>


      </Tabs>

      {/* Drawer (Sidebar) */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent height="100vh">
          <DrawerCloseButton />
          <DrawerHeader>Konten Halaman</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              {content.map((cont, key) => (
                 <Link key={key} href={cont.tag} onClick={onClose}>{cont.title}</Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
