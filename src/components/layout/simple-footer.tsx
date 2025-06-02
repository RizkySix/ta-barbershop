"use client"

import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react';
  import { Link } from "@chakra-ui/next-js"
  const Logo = (props: any) => {
    return (
      <Image src='/logo.png' width={{ base: '48px', md: '64px' }}  />
    );
  };
  
  
  export default function SimpleFooter() {
    return (
        <Box mt={{base:"5%", md:"5%"}} py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2025 A&G Salon. All rights reserved
        </Text>
      </Box>
    );
  }