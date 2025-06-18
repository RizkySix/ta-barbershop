"use client"

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Image,
  Icon,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link } from "@chakra-ui/next-js"
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Logo = (props: any) => {
  return (
    <Image src='/logo.png' width={{ base: '48px', md: '64px' }}  />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
     mt={{base:"5%", md:"5%"}}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid fontSize={{ base: 'xs', lg: 'sm' }} columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Layanan</ListHeader>
            <Link href={'/#services'}>Rambut dan Wajah</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>A&G Salon</ListHeader>
            <Link href={'/#about'}>Kenapa Memilih Kami</Link>
            <Link href={'https://wa.me/6285963108412'}>Kontak</Link>
            <Link href={'/#location'}>Lokasi Kami</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Ikuti Sosmed A&G Salon</ListHeader>
            <Link href={'https://www.facebook.com/share/szbiEqro1QfVtjtz/?mibextid=qi2Omg'} isExternal display="flex" alignItems="center" mr={4}>
        <Icon as={FaFacebook} w={4} h={4} mr={2} color="blue.600" />
        Facebook
      </Link>
      <Link href={'https://www.instagram.com/master_silverclass?igsh=YzQyb3NiOXNyNmth'} isExternal display="flex" alignItems="center" mr={4}>
        <Icon as={FaInstagram} w={4} h={4} mr={2} color="pink.500" />
        Instagram
      </Link>
      <Link href={'https://www.tiktok.com/@silver.master.class?_t=8nF84p4260e&_r=1'} isExternal display="flex" alignItems="center">
        <Icon as={FaTiktok} w={4} h={4} mr={2} color="black" />
        TikTok
      </Link>
            
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
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
    </Box>
  );
}
