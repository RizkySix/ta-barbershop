"use client"

import { Button, Img, Grid, GridItem, List, ListItem, ListIcon, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, PopoverCloseButton, Box, Heading, Text, Spinner, Badge, Icon } from "@chakra-ui/react"
import "@/styles/custom-style.css"
import { MdCall, MdCheckCircle, MdDesignServices, MdDirectionsCarFilled, MdFaceRetouchingNatural, MdFastfood, MdGroups3, MdOutlineAttachMoney, MdOutlineFace2, MdOutlineFaceRetouchingOff, MdOutlineSportsRugby, MdSettings, MdSpa, MdWatchLater, MdWhatsapp } from "react-icons/md"
import { HelperFunc } from "@/lib/utils"
import { useRouter } from "next/navigation"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react"
import { 
    FaCut,         FaHandSparkles,         // Haircut
    FaPalette,     FaRing,     // Coloring
    FaSmile,
    FaWhatsapp,       // Facial
  } from 'react-icons/fa';
  import { 
    GiBeard,       // Beard
    GiLipstick,    // Makeup
    GiHairStrands, // Hair treatment
  } from 'react-icons/gi';

  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';
import { FaHand } from "react-icons/fa6"

export function Services() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

    // const toBooking = async () => {
    //     setIsLoading(true);
    //     try {
    //         await new Promise((resolve) => setTimeout(resolve, 1000));
    //         router.push('/booking')
    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    const toBooking = () => {
      const phoneNumber = '6287762582176';
      const message = 'Halo, saya ingin booking atau bertanya layanan di A&G Salon';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // Pastikan animasi tidak hanya dijalankan sekali
        });

        // Memastikan AOS di-refresh setiap kali komponen dirender ulang
        AOS.refresh();
    }, []);

    return (
        <>
            {isLoading && (
                <Box display="flex" justifyContent="center" alignItems="center" position="fixed" top="0" left="0" width="100vw" height="100vh" bg="rgba(0, 0, 0, 0.3)" zIndex="1000">
                    <Spinner size="xl" />
                </Box>
            )}
            <Box width="100%" position="relative" px={{ base: 0, lg: 11 }}>
                <Box display={{ lg: "block" }} className="clearfix">
                    <Box float={{ lg: "left" }} width={{ lg: "50%" }}>
                        <Grid
                            h="auto"
                            w="100%"
                            templateRows="repeat(1, 1fr)"
                            templateColumns="repeat(7, 1fr)"
                            gap={4}
                        >
                            <GridItem colSpan={4}>
                                <Img data-aos="flip-right" src="/serv-1.jpeg" alt="serv-img" height={{ base: "200px", lg: "full" }} width="100%" objectFit="cover" />
                            </GridItem>
                            <GridItem colSpan={3}>
                                <Img data-aos="flip-right" src="/serv-2.jpeg" alt="serv-img" height={{ base: "200px", lg: "full" }} width="100%" objectFit="cover" />
                            </GridItem>
                            <GridItem colSpan={7}>
                                <Img data-aos="flip-left" src="/serv-3.jpeg" alt="serv-img" height="full" width="100%" objectFit="cover" />
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box 
  float={{ lg: "right" }} 
  mt={{ base: 12, lg: "20%" }} 
  width={{ lg: "33.33%" }} 
  px={{ base: 6, lg: 0 }} 
  display="flex" 
  flexDirection="column" 
  gap={4} 
  justifyContent="center"
>
  <Heading as="h4" fontSize={{ base: "sm", lg: "lg" }} fontWeight="bold" lineHeight={{ base: "5", lg: "9" }}>
    Layanan Yang Kami Tawarkan
  </Heading>

  {/* Fixed List Wrapper */}
  <List spacing={3}>
    {/* Hair Services */}
    <ListItem fontSize={{ base: "xs", lg: "md" }}>
      <ListIcon as={FaCut} color="green.500" />
      Potong & Styling Rambut (Pria & Wanita)
    </ListItem>
    <ListItem fontSize={{ base: "xs", lg: "md" }}>
      <ListIcon as={FaPalette} color="green.500" />
      Pewarnaan & Highlight Rambut
    </ListItem>
    <ListItem fontSize={{ base: "xs", lg: "md" }}>
      <ListIcon as={GiHairStrands} color="green.500" />
      Treatment Rambut Premium
    </ListItem>

    {/* Facial Services */}
    <ListItem fontSize={{ base: "xs", lg: "md" }}>
      <ListIcon as={FaSmile} color="green.500" />
      Perawatan Wajah
    </ListItem>
    <ListItem fontSize={{ base: "xs", lg: "md" }}>
      <ListIcon as={GiBeard} color="green.500" />
      Grooming Jenggot (Pria)
    </ListItem>

    {/* Additional Services */}
    <ListItem fontSize={{ base: "xs", lg: "md" }}>
      <ListIcon as={GiLipstick} color="green.500" />
      Layanan Makeup Profesional
    </ListItem>
    <ListItem fontSize={{ base: "xs", lg: "md" }}>
      <ListIcon as={FaHand} color="green.500" />
      Manicure & Pedicure
    </ListItem>
  </List>

  <Popover placement="bottom">
  <PopoverTrigger>
    <Text as="span" cursor="pointer" fontSize={{ base: "xs", lg: "md" }} textDecoration="underline" _hover={{ color: "green.500" }}>
      Lihat Detail Layanan & Harga
    </Text>
  </PopoverTrigger>
  <PopoverContent width={{ base: "xs", lg: "md" }} maxW="600px" boxShadow="xl" borderRadius="lg">
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody p={4}>
      <Accordion allowToggle>
        {/* Haircut Service */}
        <AccordionItem border="none" mb={3}>
          <AccordionButton 
            bg="green.50" 
            _hover={{ bg: "green.100" }}
            borderRadius="md"
            px={4}
            py={3}
          >
            <Box flex="1" textAlign="left" display="flex" alignItems="center">
              <Icon as={FaCut} color="green.500" mr={2} />
              <Text fontSize={{ base: "xs", lg: "md" }} fontWeight="bold">Potong & Styling Rambut</Text>
              <Badge ml={3} colorScheme="green">Mulai IDR 200k</Badge>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          
          <AccordionPanel pb={4} px={2}>
            <List spacing={3}>
              <ListItem display="flex" alignItems="center" fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={FaCut} color="green.300" />
                <Box flex="1">
                  <Text fontWeight="bold">Potong Rambut Pria</Text>
                  <Text fontSize={{ base: "xs", lg: "md" }} color="gray.600">Termasuk keramas & pijat kepala</Text>
                </Box>
                <Text fontWeight="bold">IDR 200k</Text>
              </ListItem>
              
              <ListItem display="flex" alignItems="center" fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={FaCut} color="green.300" />
                <Box flex="1">
                  <Text fontWeight="bold">Potong Rambut Wanita</Text>
                  <Text fontSize={{ base: "xs", lg: "md" }} color="gray.600">Pendek/sedang</Text>
                </Box>
                <Text fontWeight="bold">IDR 250k-350k</Text>
              </ListItem>
              
              <ListItem display="flex" alignItems="center" fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={GiHairStrands} color="green.300" />
                <Box flex="1">
                  <Text fontWeight="bold">Styling (Blow/Curly)</Text>
                </Box>
                <Text fontWeight="bold">+IDR 150k</Text>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>

        {/* Coloring Service */}
        <AccordionItem border="none" mb={3}>
          <AccordionButton 
            bg="purple.50" 
            _hover={{ bg: "purple.100" }}
            borderRadius="md"
            px={4}
            py={3}
          >
            <Box flex="1" textAlign="left" display="flex" alignItems="center">
              <Icon as={FaPalette} color="purple.500" mr={2} />
              <Text fontWeight="bold" fontSize={{ base: "xs", lg: "md" }}>Pewarnaan Rambut</Text>
              <Badge ml={3} colorScheme="purple">Mulai IDR 500k</Badge>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          
          <AccordionPanel pb={4} px={2}>
            <List spacing={3}>
              <ListItem display="flex" alignItems="center" fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={FaPalette} color="purple.300" />
                <Box flex="1">
                  <Text fontWeight="bold">Full Color</Text>
                  <Text fontSize={{ base: "xs", lg: "md" }} color="gray.600">Tergantung panjang rambut</Text>
                </Box>
                <Text fontWeight="bold">IDR 500k-1.2jt</Text>
              </ListItem>
              
              <ListItem display="flex" alignItems="center" fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={FaPalette} color="purple.300" />
                <Box flex="1">
                  <Text fontWeight="bold">Highlights</Text>
                </Box>
                <Text fontWeight="bold">IDR 750k-1.5jt</Text>
              </ListItem>
              
              <ListItem display="flex" alignItems="center" fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={FaPalette} color="purple.300" />
                <Box flex="1">
                  <Text fontWeight="bold">Balayage/Ombre</Text>
                  <Text fontSize={{ base: "xs", lg: "md" }} color="gray.600">Konsultasi gratis</Text>
                </Box>
                <Text fontWeight="bold">IDR 1.5jt-2.5jt</Text>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>

        {/* Facial Service */}
        <AccordionItem border="none" mb={3}>
          <AccordionButton 
            bg="blue.50" 
            _hover={{ bg: "blue.100" }}
            borderRadius="md"
            px={4}
            py={3}
          >
            <Box flex="1" textAlign="left" display="flex" alignItems="center">
              <Icon as={FaSmile} color="blue.500" mr={2} />
              <Text fontWeight="bold" fontSize={{ base: "xs", lg: "md" }}>Perawatan Wajah</Text>
              <Badge ml={3} colorScheme="blue">Mulai IDR 300k</Badge>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          
          <AccordionPanel pb={4} px={2}>
            <List spacing={3}>
              <ListItem display="flex" alignItems="center" fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={MdSpa} color="blue.300" />
                <Box flex="1">
                  <Text fontWeight="bold">Facial Basic</Text>
                  <Text fontSize={{ base: "xs", lg: "md" }} color="gray.600">Cleansing + Masker</Text>
                </Box>
                <Text fontWeight="bold">IDR 300k</Text>
              </ListItem>
              
              <ListItem display="flex" alignItems="center" fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={MdSpa} color="blue.300" />
                <Box flex="1">
                  <Text fontWeight="bold">Acne Treatment</Text>
                </Box>
                <Text fontWeight="bold">IDR 450k</Text>
              </ListItem>
              
              <ListItem display="flex" alignItems="center" fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={MdSpa} color="blue.300" />
                <Box flex="1">
                  <Text fontWeight="bold">Gold Facial</Text>
                  <Text fontSize={{ base: "xs", lg: "md" }} color="gray.600">Dengan serum emas</Text>
                </Box>
                <Text fontWeight="bold">IDR 650k</Text>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </PopoverBody>
  </PopoverContent>
</Popover>

  <Box mt={{ lg: 3 }}>
    <Text fontWeight="semibold" lineHeight="9" fontSize={{ base: "xs", lg: "md" }} mb={{ lg: 1 }}>
      Mulai dari IDR 200k
    </Text>
    <Button 
      onClick={toBooking} 
      colorScheme="green" 
      variant="outline" 
      borderColor="#2F8F2F" 
      color="#2F8F2F" 
      _hover={{ bgColor: '#E6F4E6' }} 
      size={HelperFunc.IsMobile() ? 'sm' : "md"}
      leftIcon={<FaWhatsapp />}
    >
      <Text fontSize={{ base: "xs", lg: "md" }}>Pesan Sekarang</Text>
    </Button>
  </Box>
</Box>
                </Box>
            </Box>
        </>
    )
}
