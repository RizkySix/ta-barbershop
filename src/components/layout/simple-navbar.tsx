"use client"

import { Box, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

export default function SimpleNavbar() {
  return (
    <Box as="section" className='navbar' position="sticky" top="0" zIndex="50">
      <Box w="full" p={3} bg="white" borderBottom="1px" borderColor="gray.200" display="flex" flexDirection="column" gap={3} mx="auto">
      <Link href="/" display="flex" flexDirection="column" alignItems="center" textDecoration="none" _hover={{ textDecoration: 'none', color:'black' }}>
        <Image src='/logo.png' width="44px" height="56px" mx="auto" mb="1" />
          <Text textAlign="center" fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>
            {process.env.APP_NAME ?? "A&G Salon"}
          </Text>
        </Link>
      </Box>
    </Box>
  )
}
