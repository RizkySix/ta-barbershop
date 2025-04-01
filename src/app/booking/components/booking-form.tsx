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
import Datepicker from "react-tailwindcss-datepicker";
import { addDays } from "date-fns";
import SimpleFooter from "@/components/layout/simple-footer";
import { sendEmail } from "@/lib/send-email";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import SpinnerLoader from "@/components/ui/loading-spiner";

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

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    date: "",
    person: 1,
    time: "",
    hotel: "",
    sortMessage: "",
    transport: false,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      date: new Date(newValue.startDate).toDateString(),
    }));
  };

  const handleInputChange = (e: any) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitchChange = (e: any) => {
    setDataForm({
      ...dataForm,
      transport: e.target.checked,
    });
  };

  const [sendMailLoadStatus, setSendMailLoadStatus] = useState(false);

  const toast = useToast();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const person = formData.get("person");
    const time = formData.get("time");
    const hotel = formData.get("hotel") ?? "Not provided";
    const sortMessage = formData.get("sortMessage") ?? "No note.";
    const date = dataForm.date;
    const transport = formData.get("transport") === "on" ? "Yes" : "No";
    const message = `Hello,

            I would like to book a spot in the Silver Class. Here are my details:

            My name: ${name}
            My email: ${email}
            Number of person: ${person}
            Preferred date: ${date}
            Session time: ${time}
            Hotel : ${hotel}
            Transport Needed: ${transport} ${
      transport == "Yes"
        ? "(Available to pay 300k IDR transport from Ubud Central)"
        : ""
    }
            Note: ${sortMessage}
            Thank you!`;
    const whatsAppUrl = `https://wa.me/6285963108412?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsAppUrl, "_blank");
  };

  const sendMailSubmit = async (e: any) => {
    setSendMailLoadStatus(true);

    const name = dataForm.name;
    const email = dataForm.email;
    const date = dataForm.date;
    const person = dataForm.person;
    const time = dataForm.time;
    const hotel = dataForm.hotel ?? "Not provided";
    const sortMessage = dataForm.sortMessage ?? "No note.";
    const transport = dataForm.transport
      ? "Yes (Available to pay 300k IDR transport from Ubud Central)"
      : "No";

    if (!name || !email || !date || !person || !time) {
      toast({
        title: "Please fill the form!",
        status: "warning",
        duration: 5000,
        position: "top",
      });
      setSendMailLoadStatus(false);
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast({
        title: "Invalid email format!",
        status: "error",
        duration: 5000,
        position: "top",
      });

      setSendMailLoadStatus(false);
      return;
    }

    //send mail
    const mailSent = await sendEmail({
      name: name,
      email: email,
      full_data: {
        name: name,
        email: email,
        date: date,
        person: person,
        hotel: hotel,
        sortMessage: sortMessage,
        time: time,

        transport: transport,
      },
    });

    setSendMailLoadStatus(false);
    if (mailSent == "success") {
      toast({
        title: "Success! booking email sent",
        description: "Our admin will contact you soon!",
        status: "success",
        duration: 9000,
        position: "top",
      });
    } else {
      toast({
        title: "Something went wrong 🙄",
        description: "Please try again or book via whatsapp!",
        status: "error",
        duration: 9000,
        position: "top",
      });
    }
  };

  return (
    <>
      {sendMailLoadStatus && SpinnerLoader()}
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
                Practicing The Best Silver Class In Bali{" "}
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  &
                </Text>{" "}
                With Professional Instructor
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
                  Join now
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text"
                  >
                    !
                  </Text>
                </Heading>
                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                  We’re excited to welcome you to our exclusive Silver Class!
                  Join our elite group and enhance your skills in a premium
                  learning environment. Don't miss the opportunity to elevate
                  your expertise and achieve new heights!
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
                        placeholder="Your name"
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
                        placeholder="Your email"
                        type="email"
                        name="email"
                        required
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
                    <GridItem colSpan={1}>
                      <Input
                        placeholder="Number of person"
                        type="number"
                        name="person"
                        required
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
                    <GridItem colSpan={1}>
                      <Datepicker
                        asSingle={true}
                        useRange={false}
                        minDate={addDays(new Date(), 1)}
                        value={value}
                        onChange={handleValueChange}
                        placeholder="Select date"
                        inputClassName={
                          HelperFunc.IsMobile()
                            ? "w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[14px]"
                            : "w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[16px]"
                        }
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Box
                        as={Select}
                        required
                        name="time"
                        placeholder="Choose session time"
                        bg={"white"}
                        border={0}
                        color={"gray.500"}
                        sx={{
                          color: "gray.500",
                          fontSize: { base: "14px", md: "16px", lg: "16px" },
                        }}
                        onChange={handleInputChange}
                      >
                        <option value="9.00 am - 11.00 am">
                          9.00 am - 11.00 am
                        </option>
                        <option value="11.00 am - 1.00 pm">
                          11.00 am - 1.00 pm
                        </option>
                        <option value="2.00 pm - 4.00 pm">
                          2.00 pm - 4.00 pm
                        </option>
                        <option value="4.00 pm - 6.00 pm">
                          4.00 pm - 6.00 pm
                        </option>
                      </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Input
                        placeholder="Hotel name (Optional)"
                        type="text"
                        name="hotel"
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
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                      <Input
                        placeholder="Sort message (Optional)"
                        type="text"
                        name="sortMessage"
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
                  <div className="flex items-center">
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Include transport?
                    </FormLabel>
                    <Switch
                      id="email-alerts"
                      name="transport"
                      onChange={handleSwitchChange}
                    />
                  </div>
                </Stack>
                <p className="py-2 text-xs md:text-sm italic">
                  *For additional details, please provide by yourself on
                  WhatsApp chat!
                </p>

                <Button
                  type="submit"
                  mt={5}
                  w={"full"}
                  leftIcon={<MdWhatsapp />}
                  colorScheme="whatsapp"
                  variant="outline"
                  borderColor="#25D366"
                  color="#25D366"
                  _hover={{ bgColor: "#E6F4E6" }}
                >
                  <span className="text-xs lg:text-base">Book now</span>
                </Button>

                <Flex align="center" my={4}>
                  <Divider borderColor="gray.300" />
                  <Text
                    px={3}
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "gray.300")}
                    whiteSpace="nowrap"
                  >
                    Or
                  </Text>
                  <Divider borderColor="gray.300" />
                </Flex>

                <Button
                  onClick={sendMailSubmit}
                  mt={0}
                  w={"full"}
                  leftIcon={<MdEmail />}
                  colorScheme="red"
                  variant="outline"
                  borderColor="#D44638"
                  color="#D44638"
                  _hover={{ bgColor: "#FBEAEA" }}
                >
                  <span className="text-xs lg:text-base">Book via Email</span>
                </Button>
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
