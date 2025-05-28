"use client"

import { Box, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

export default function SimpleNavbar() {
  return (
    <Box as="section" className='navbar' position="sticky" top="0" zIndex="50">
      <Box w="full" p={3} bg="white" borderBottom="1px" borderColor="gray.200" display="flex" flexDirection="column" gap={3} mx="auto">
      <Link href="/" display="flex" flexDirection="column" alignItems="center" textDecoration="none" _hover={{ textDecoration: 'none', color:'black' }}>
       <Image src="/logo.png"  width={{ base: '60px', md: '80px' }}
                     height={{ base: '60px', md: '80px' }} alt="Logo" />
          
        </Link>
      </Box>
    </Box>
  )
}
