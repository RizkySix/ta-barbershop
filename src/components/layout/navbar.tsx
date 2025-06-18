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
          height={{ base : "80px" , md: "112px"}}
          p="3"
          bg="white"
          borderBottom="1px"
          borderColor="gray.200"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Hamburger Menu */}
          <IconButton
            aria-label="Open menu"
            icon={<MdMenu size={28} />} // Ganti icon & perbesar
            variant="ghost"
            onClick={onOpen}
          />

          {/* Logo di tengah */}
          <Link
            href="/"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src="/logo.png"  width={{ base: '60px', md: '80px' }}
              height={{ base: '60px', md: '80px' }} alt="Logo" />
          </Link>

          {/* Tempat dummy biar logo tetap di tengah */}
          <Box width="40px" /> {/* Biar spasi kanan sama dengan kiri */}
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
    <span>Home</span>
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
    <span>Galleri</span>
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
