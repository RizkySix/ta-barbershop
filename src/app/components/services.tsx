"use client";

import {
  Button,
  Img,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  Heading,
  Text,
  Spinner,
  Badge,
  Icon,
} from "@chakra-ui/react";
import "@/styles/custom-style.css";
import {
  MdCall,
  MdCheckCircle,
  MdDesignServices,
  MdDirectionsCarFilled,
  MdFaceRetouchingNatural,
  MdFastfood,
  MdGroups3,
  MdOutlineAttachMoney,
  MdOutlineFace2,
  MdOutlineFaceRetouchingOff,
  MdOutlineSportsRugby,
  MdSettings,
  MdSpa,
  MdWatchLater,
  MdWhatsapp,
} from "react-icons/md";
import { HelperFunc } from "@/lib/utils";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  FaCut,
  FaHandSparkles, // Haircut
  FaPalette,
  FaRing, // Coloring
  FaSmile,
  FaWhatsapp, // Facial
} from "react-icons/fa";
import {
  GiBeard, // Beard
  GiLipstick, // Makeup
  GiHairStrands,
  GiBodyBalance,
  GiHand, // Hair treatment
} from "react-icons/gi";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FaHand } from "react-icons/fa6";
import { HoverAStyle, HoverButtonStyle } from "@/lib/style";
import { ButtonTemplate } from "@/components/ui/button";

export function Services() {
  const router = useRouter();
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
    const phoneNumber = "6287762582176";
    const message =
      "Halo, saya ingin booking atau bertanya layanan di A&G Salon";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.3)"
          zIndex="1000"
        >
          <Spinner size="xl" />
        </Box>
      )}
      <Box width="100%" position="relative" px={{ base: 0, lg: 11 }}>
        <Box display={{ lg: "block" }} className="clearfix">
          <Box float={{ lg: "left" }} width={{ lg: "60%" }}>
            <Grid
              h="auto"
              w="100%"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(7, 1fr)"
              gap={4}
            >
              <GridItem colSpan={4}>
                <Img
                  data-aos="flip-right"
                  src="/service1.jpg"
                  alt="serv-img"
                  height={{ base: "400px", lg: "700px" }}
                  width="100%"
                  objectFit="cover"
                />
              </GridItem>
              <GridItem colSpan={3}>
                <Img
                  data-aos="flip-right"
                    src="/service2.jpg"
                  alt="serv-img"
                  height={{ base: "400px", lg: "700px" }}
                  width="100%"
                  objectFit="cover"
                />
              </GridItem>
              <GridItem colSpan={7}>
                <Img
                  data-aos="flip-left"
                    src="/service3.jpg"
                  alt="serv-img"
                  height={{base: "sm", md: "md"}}
                  width="100%"
                  objectFit="cover"
                />
              </GridItem>
            </Grid>
          </Box>

          <Box
            float={{ lg: "right" }}
            mt={{ base: 12, lg: "20%" }}
            width={{ lg: "30%" }}
            px={{ base: 6, lg: 0 }}
            display="flex"
            flexDirection="column"
            gap={4}
            justifyContent="center"
          >
            <Heading
              as="h4"
              fontSize={{ base: "sm", lg: "lg" }}
              fontWeight="bold"
              lineHeight={{ base: "5", lg: "9" }}
            >
              Layanan Yang Kami Tawarkan
            </Heading>

            {/* Fixed List Wrapper */}
            <List spacing={3}>
              {/* Hair Services */}
              <ListItem fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={FaPalette} color="#b0662c" />
                Perawatan Rambut (Wanita)
              </ListItem>
              <ListItem fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={FaSmile} color="#b0662c" />
                Perawatan Wajah (Wanita)
              </ListItem>
              <ListItem fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={GiHand} color="#b0662c" />
                Perawatan Kulit & Body (Wanita)
              </ListItem>

              {/* Facial Services */}
              <ListItem fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={GiHairStrands} color="#b0662c" />
                Treatment Lain (Wanita)
              </ListItem>

              {/* Additional Services */}
              <ListItem fontSize={{ base: "xs", lg: "md" }}>
                <ListIcon as={FaCut} color="#b0662c" />
                Haircut Pria (Pria)
              </ListItem>
            </List>

            <Popover placement="bottom">
              <PopoverTrigger>
                <Text
                  as="span"
                  cursor="pointer"
                  fontSize={{ base: "xs", lg: "md" }}
                  textDecoration="underline"
                  _hover={HoverAStyle}
                >
                  Lihat Detail Layanan & Harga
                </Text>
              </PopoverTrigger>
              <PopoverContent
                width={{ base: "xs", lg: "md" }}
                maxW="600px"
                boxShadow="xl"
                borderRadius="lg"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody p={4}>
                  <Accordion allowToggle>
                    {/* Rambut Wanita */}
                    <AccordionItem border="none" mb={3}>
                      <AccordionButton
                        bg="gray.50"
                        _hover={{ bg: "gray.100" }}
                        borderRadius="md"
                        px={4}
                        py={3}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          display="flex"
                          alignItems="center"
                        >
                          <Icon as={FaPalette} color="#b0662c" mr={2} />
                          <Text
                            fontWeight="bold"
                            fontSize={{ base: "xs", lg: "md" }}
                          >
                            Perawatan Rambut (Wanita)
                          </Text>
                          <Badge ml={3} colorScheme="gray">
                            Start 35k
                          </Badge>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} px={2}>
                        <List spacing={3}>
                          {[
                            ["Cuci Catok", "IDR 35k"],
                            ["Haircut + Styling", "IDR 35k-50k"],
                            ["Smoothing Keratin", "IDR 150k-800k"],
                            ["Smoothing + Color", "IDR 300k-1jt"],
                            ["Hair Color", "IDR 75k-300k"],
                          ].map(([title, price]) => (
                            <ListItem
                              display="flex"
                              alignItems="center"
                              key={title}
                            >
                              <ListIcon as={FaPalette} color="#b0662c" />
                              <Box flex="1">
                                <Text fontWeight="bold">{title}</Text>
                              </Box>
                              <Text fontWeight="bold">{price}</Text>
                            </ListItem>
                          ))}
                        </List>
                      </AccordionPanel>
                    </AccordionItem>

                    {/* Wajah Wanita */}
                    <AccordionItem border="none" mb={3}>
                      <AccordionButton
                         bg="gray.50"
                         _hover={{ bg: "gray.100" }}
                        borderRadius="md"
                        px={4}
                        py={3}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          display="flex"
                          alignItems="center"
                        >
                          <Icon as={FaSmile} color="#b0662c" mr={2} />
                          <Text
                            fontWeight="bold"
                            fontSize={{ base: "xs", lg: "md" }}
                          >
                            Perawatan Wajah (Wanita)
                          </Text>
                          <Badge ml={3} colorScheme="gray">
                            Start 35k
                          </Badge>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} px={2}>
                        <List spacing={3}>
                          {[
                            ["Facial", "IDR 35k"],
                            ["Facial Detox", "IDR 65k"],
                          ].map(([title, price]) => (
                            <ListItem
                              display="flex"
                              alignItems="center"
                              key={title}
                            >
                              <ListIcon as={MdSpa} color="#b0662c" />
                              <Box flex="1">
                                <Text fontWeight="bold">{title}</Text>
                              </Box>
                              <Text fontWeight="bold">{price}</Text>
                            </ListItem>
                          ))}
                        </List>
                      </AccordionPanel>
                    </AccordionItem>

                    {/* Kulit & Body Wanita */}
                    <AccordionItem border="none" mb={3}>
                      <AccordionButton
                        bg="gray.50"
                        _hover={{ bg: "gray.100" }}
                        borderRadius="md"
                        px={4}
                        py={3}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          display="flex"
                          alignItems="center"
                        >
                          <Icon as={GiHand} color="#b0662c" mr={2} />
                          <Text
                            fontWeight="bold"
                            fontSize={{ base: "xs", lg: "md" }}
                          >
                            Perawatan Kulit & Body (Wanita)
                          </Text>
                          <Badge ml={3} colorScheme="gray">
                            Start 50k
                          </Badge>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} px={2}>
                        <List spacing={3}>
                          {[
                            ["Massage", "IDR 50k"],
                            ["Massage + Lulur", "IDR 85k"],
                            ["Massage + Lulur + Bleaching", "IDR 200k"],
                            ["Bleaching Full Body", "IDR 150k"],
                          ].map(([title, price]) => (
                            <ListItem
                              display="flex"
                              alignItems="center"
                              key={title}
                            >
                              <ListIcon as={GiHand} color="#b0662c" />
                              <Box flex="1">
                                <Text fontWeight="bold">{title}</Text>
                              </Box>
                              <Text fontWeight="bold">{price}</Text>
                            </ListItem>
                          ))}
                        </List>
                      </AccordionPanel>
                    </AccordionItem>

                    {/* Treatment Lain */}
                    <AccordionItem border="none" mb={3}>
                      <AccordionButton
                        bg="gray.50"
                        _hover={{ bg: "gray.100" }}
                        borderRadius="md"
                        px={4}
                        py={3}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          display="flex"
                          alignItems="center"
                        >
                          <Icon as={GiHairStrands} color="#b0662c" mr={2} />
                          <Text
                            fontWeight="bold"
                            fontSize={{ base: "xs", lg: "md" }}
                          >
                            Treatment Lain (Wanita)
                          </Text>
                          <Badge ml={3} colorScheme="gray">
                            Start 2k
                          </Badge>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} px={2}>
                        <List spacing={3}>
                          {[
                            ["Eyelash Extension", "IDR 70k - 125k"],
                            ["Lash Lift + Tint", "IDR 70k"],
                            ["Nail Gel Kaki", "IDR 40k"],
                            ["Nail Gel Tangan", "IDR 50k"],
                            ["Acc/Art", "Start IDR 2k - 7k"],
                            ["Makeup Hairdo", "IDR 150k - 250k"],
                          ].map(([title, price]) => (
                            <ListItem
                              display="flex"
                              alignItems="center"
                              key={title}
                            >
                              <ListIcon as={GiHairStrands} color="#b0662c" />
                              <Box flex="1">
                                <Text fontWeight="bold">{title}</Text>
                              </Box>
                              <Text fontWeight="bold">{price}</Text>
                            </ListItem>
                          ))}
                        </List>
                      </AccordionPanel>
                    </AccordionItem>

                    {/* Pria */}
                    <AccordionItem border="none" mb={3}>
                      <AccordionButton
                        bg="gray.50"
                        _hover={{ bg: "gray.100" }}
                        borderRadius="md"
                        px={4}
                        py={3}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          display="flex"
                          alignItems="center"
                        >
                          <Icon as={FaCut} color="#b0662c" mr={2} />
                          <Text
                            fontWeight="bold"
                            fontSize={{ base: "xs", lg: "md" }}
                          >
                            Haircut (Pria)
                          </Text>
                          <Badge ml={3} colorScheme="gray">
                            Start 25k
                          </Badge>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} px={2}>
                        <List spacing={3}>
                          <ListItem display="flex" alignItems="center">
                            <ListIcon as={FaCut} color="#b0662c" />
                            <Box flex="1">
                              <Text fontWeight="bold">Haircut Pria</Text>
                            </Box>
                            <Text fontWeight="bold">IDR 25k</Text>
                          </ListItem>
                          <ListItem display="flex" alignItems="center">
                            <ListIcon as={FaCut} color="#b0662c" />
                            <Box flex="1">
                              <Text fontWeight="bold">Haircut + Keramas</Text>
                            </Box>
                            <Text fontWeight="bold">IDR 30k</Text>
                          </ListItem>
                        </List>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Box mt={{ lg: 3 }}>
              <Text
                fontWeight="semibold"
                lineHeight="9"
                fontSize={{ base: "xs", lg: "md" }}
                mb={{ lg: 1 }}
              >
                Mulai dari IDR 200k
              </Text>
              <ButtonTemplate title="Pesan Sekarang" onClick={toBooking} icon={<FaWhatsapp />}>

              </ButtonTemplate>
             
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
