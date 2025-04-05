"use client";

import { HelperFunc } from "@/lib/utils";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  FormLabel,
  Switch,
  useColorModeValue,
  Divider,
  useToast,
  Select,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MdDiscount, MdEmail, MdPeople, MdWhatsapp } from "react-icons/md";
import { RequestActionApi } from "@/app/action/action";
import { useRouter } from "next/navigation";
import PromoModal from "./promo-modal";

export function Form() {
  const avatars = [
    {
      name: "Ryan Florence",
      url: "https://bit.ly/ryan-florence",
    },
    {
      name: "Segun Adebayo",
      url: "https://bit.ly/sage-adebayo",
    },
    {
      name: "Kent Dodds",
      url: "https://bit.ly/kent-c-dodds",
    },
    {
      name: "Prosper Otemuyiwa",
      url: "https://bit.ly/prosper-baba",
    },
    {
      name: "Christian Nwamba",
      url: "https://bit.ly/code-beast",
    },
  ];

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  
  const toast = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
  
    
    if (!name || !phone || !address) {
      toast({
        title: "Semua field wajib diisi",
        description: "Pastikan nama, nomor HP, dan alamat sudah lengkap.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (!phone.startsWith("62")) {
      toast({
        title: "Format nomor salah",
        description: "Nomor WhatsApp harus dimulai dengan 62, bukan 08 atau lainnya.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  
    // Lanjut kirim ke API jika semua field terisi
    const result = await RequestActionApi.RegisterPhoneNumber({
      name,
      phone,
      address,
    });

    console.log(result)
    if(result) {
      if(result.success) {
        toast({
          title: "Registrasi Berhasil!",
          description: "Nomor whatsapp didaftarkan, silahkan claim promo-promo kami!.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
  
      }else {
        toast({
          title: "Registrasi gagal",
          description: `${result.message}`,
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
      }
    }


      toast({
        title: "Terjadi kesaahan",
        description: "Coba beberapa saat lagi!.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
  };

  const router = useRouter()

  const handleToChatBotWa = () => {
    const message = "Hallo!"
    const whatsAppUrl = `https://wa.me/6285963108412?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsAppUrl, "_blank");
  }
  return (
    <>
      <section className="px-4 lg:px-11 lg:w-3/4 mx-auto lg:flex md:h-screen justify-center">
        <Box position={"relative"}>
          <Container
            as={SimpleGrid}
            maxW={"full"}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}
          >
            <Stack spacing={{ base: 10, md: 20 }}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              >
                Promo menarik kami untuk anda{" "}
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  !!!
                </Text>{" "}
                <PromoModal />
              </Heading>
              <Stack direction={"row"} spacing={4} align={"center"}>
                <AvatarGroup>
                  {avatars.map((avatar) => (
                    <Avatar
                      key={avatar.name}
                      name={avatar.name}
                      src={avatar.url}
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                      position={"relative"}
                      zIndex={2}
                      _before={{
                        content: '""',
                        width: "full",
                        height: "full",
                        rounded: "full",
                        transform: "scale(1.125)",
                        bgGradient: "linear(to-bl, red.400,pink.400)",
                        position: "absolute",
                        zIndex: -1,
                        top: 0,
                        left: 0,
                      }}
                    />
                  ))}
                </AvatarGroup>
                <Text
                  fontFamily={"heading"}
                  fontSize={{ base: "4xl", md: "6xl" }}
                >
                  +
                </Text>
                <Flex
                  align={"center"}
                  justify={"center"}
                  fontFamily={"heading"}
                  fontSize={{ base: "sm", md: "lg" }}
                  bg={"gray.800"}
                  color={"white"}
                  rounded={"full"}
                  minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
                  minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
                  position={"relative"}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, orange.400,yellow.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                >
                  YOU
                </Flex>
              </Stack>
            </Stack>
            <Stack
              bg={"gray.50"}
              rounded={"xl"}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}
            >
              <Stack spacing={4}>
                <Heading
                  color={"gray.800"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  Bergabung dan Claim Promonya
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text"
                  >
                    !
                  </Text>
                </Heading>
                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Hai! A&G Salon bakal rutin ngadain promo-promo menarik buat semua layanan kita!
                Mulai dari hair treatment sampai body care, semua bisa kamu nikmatin dengan harga spesial. Stay glowin’, stay hemat! Jangan lupa pantengin terus info promo dari kita ya ✨
                </Text>
              </Stack>
              <Box as={"form"} mt={0} onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={4}
                  >
                    <GridItem colSpan={1}>
                      <Input
                        placeholder="Nama kamu"
                        name="name"
                        bg={"white"}
                        required
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                          fontSize: { base: "14px", md: "16px", lg: "16px" },
                        }}
                        onChange={handleInputChange}
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Input
                        placeholder="Whatsapp ex: 6287762xxx"
                        name="phone"
                        bg={"white"}
                        required
                        border={0}
                        type="number"
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                          fontSize: { base: "14px", md: "16px", lg: "16px" },
                        }}
                        onChange={handleInputChange}
                      />
                    </GridItem>
                
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                      <Input
                        placeholder="Alamat kamu"
                        type="text"
                        name="address"
                        bg={"white"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                          fontSize: { base: "14px", md: "16px", lg: "16px" },
                        }}
                        onChange={handleInputChange}
                      />
                    </GridItem>
                  </Grid>
                 
                </Stack>
                <Button
                  type="submit"
                  mt={5}
                  w={"full"}
                  leftIcon={<MdPeople />}
                  colorScheme="whatsapp"
                  variant="outline"
                  borderColor="#0118D8"
                  color="#0118D8"
                  _hover={{ bgColor: "#1B56FD" }}
                >
                  <span className="text-xs lg:text-base">Daftarkan</span>
                </Button>

                <p className="py-2 text-xs md:text-sm italic">
                  *Selanjutnya kamu ke aksi-aksi berikut!
                </p>

                <Button
                onClick={() => handleToChatBotWa()}
                  type="button"
                  mt={5}
                  w={"full"}
                  leftIcon={<MdWhatsapp />}
                  colorScheme="whatsapp"
                  variant="outline"
                  borderColor="#25D366"
                  color="#25D366"
                  _hover={{ bgColor: "#E6F4E6" }}
                >
                  <span className="text-xs lg:text-base">Chat bot kami</span>
                </Button>

                <Flex align="center" my={4}>
                  <Divider borderColor="gray.300" />
                  <Text
                    px={3}
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "gray.300")}
                    whiteSpace="nowrap"
                  >
                    Atau
                  </Text>
                  <Divider borderColor="gray.300" />
                </Flex>

                <PromoModal />
              </Box>
              form
            </Stack>
          </Container>
          <Blur
            position={"absolute"}
            top={-10}
            left={-10}
            style={{ filter: "blur(70px)" }}
          />
        </Box>
      </section>
    </>
  );
}

export const Blur = (props: IconProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(HelperFunc.IsMobile());
    };

    handleResize(); // Check on initial load

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Always call hooks unconditionally
  const width = useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" });
  const zIndex = useBreakpointValue({ base: -1, md: -1, lg: 0 });

  // Render a placeholder initially to match the server-rendered output
  if (!isMobile) {
    return <></>;
  }

  return (
    <Icon
      width={width}
      zIndex={zIndex}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#90EE90" />{" "}
      {/* Warna hijau terang */}
      <circle cx="244" cy="106" r="139" fill="#ADFF2F" />{" "}
      {/* Warna hijau lebih terang */}
      <circle cy="291" r="139" fill="#ADFF2F" />{" "}
      {/* Warna hijau lebih terang */}
      <circle cx="80.5" cy="189.5" r="101.5" fill="#FFA07A" />{" "}
      {/* Warna merah terang */}
      <circle cx="196.5" cy="317.5" r="101.5" fill="#FF7F50" />{" "}
      {/* Warna merah lebih terang */}
      <circle cx="70.5" cy="458.5" r="101.5" fill="#90EE90" />{" "}
      {/* Warna hijau terang */}
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#ADFF2F" />{" "}
      {/* Warna hijau lebih terang */}
    </Icon>
  );
};
