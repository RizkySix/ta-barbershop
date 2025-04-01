"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Box, Heading, Text, Flex, Image as ChakraImage } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      p={4}
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
      >
        <ChakraImage
          src="/leaf.gif"
          alt="Background"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Box position="relative" zIndex={10} data-aos="fade-down">
        <ChakraImage src={'/logo.png'} alt="Logo" width={{base:28, md: 40}} height={{base:40, md:60}} />
      </Box>
      <Heading
        as="h1"
        size="4xl"
        color="blue.600"
        mt={8}
        position="relative"
        zIndex={10}
        data-aos="fade-up"
      >
        404
      </Heading>
      <Heading
        as="h2"
        size="xl"
        fontWeight="semibold"
        color="gray.800"
        mt={4}
        position="relative"
        zIndex={10}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Page Not Found
      </Heading>
      <Text
        color="gray.600"
        mt={2}
        mb={8}
        textAlign="center"
        position="relative"
        zIndex={10}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Sorry, the page you are looking for does not exist.
      </Text>
      <Box
        position="relative"
        zIndex={10}
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => router.push('/')}
        >
          Go Back Home
        </Button>
      </Box>
    </Box>
  );
}

export default NotFoundPage;
