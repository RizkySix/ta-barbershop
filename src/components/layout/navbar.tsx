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
import { FaBurger } from 'react-icons/fa6';
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
      }else if(pathName === "/galleries") {
        pageIndex = 2
      }
     
      setPageIndex(pageIndex);
    }
  }, []);

  const baseContent = [
    {
      tag:"#about",
      title: "Siapa kami"
    },
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
      router.push('/booking');
    } else{
      router.push('/galleries');
    }
  };

  useEffect(() => {
    const pathName = window.location.pathname;
  
    if (pathName === '/') {
      setContent(baseContent);
    } else if (pathName === '/galleries') {
      setContent([
        {
          tag: "#whyus",
          title: "Kenapa bersama kami?"
        },
        {
          tag: "#testimoni",
          title: "Galleries"
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
          height="112px"
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
            <Image src="/logo.png" width="56px" height="56px" alt="Logo" />
            <Heading
              as="h5"
              textAlign="center"
              fontWeight="bold"
              fontSize={{ base: 'base', md: 'lg' }}
            >
              {process.env.APP_NAME ?? 'A&G Salon'}
            </Heading>
          </Link>

          {/* Tempat dummy biar logo tetap di tengah */}
          <Box width="40px" /> {/* Biar spasi kanan sama dengan kiri */}
        </Flex>

        {/* Tab List */}
        <TabList bg="white">
          <Tab fontSize={{ base: 'sm', md: 'md' }}><span>Siapa Kami</span></Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }}><span>Promo</span></Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }}><span>Galleries</span></Tab>
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
