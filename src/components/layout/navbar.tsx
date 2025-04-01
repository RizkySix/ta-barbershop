"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel, Image, Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathName = window.location.pathname;
      const pageIndex = pathName === '/' ? 0 : 1;
      setPageIndex(pageIndex);
    }
  }, []);

  const handleTabsChange = (index: number) => {
    setPageIndex(index);
    if (index === 0) {
      router.push('/');
    } else {
      router.push('/galleries');
    }
  };

  return (
    <Box as="section" className='navbar' position="sticky" top="0" zIndex="50">
      <Tabs
        isFitted
        size="md"
        variant='enclosed'
        index={pageIndex}
        onChange={handleTabsChange}
      >
        <Box width="full" p="3" bg="white" borderBottom="1px" borderColor="gray.200" display="flex" flexDirection="column" gap="3" mx="auto">
          <Link href={'/'}>
            <Image src='/logo.png' width="44px" height="56px" mx="auto" mb="1" />
            <Heading as="h5" textAlign="center" fontWeight="bold" fontSize={{ base: 'base', md: 'lg' }}>
              {process.env.APP_NAME ?? "Master Silver Class"}
            </Heading>
          </Link>
        </Box>
        <TabList bg="white">
          <Tab fontSize={{ base: 'sm', md: 'md' }}><span>Siapa Kami</span></Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }}><span>Galleries</span></Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}
