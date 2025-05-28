"use client";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  useToast,
  Grid,
  Box,
  Text,
} from "@chakra-ui/react";
import { MdDiscount } from "react-icons/md";
import { useEffect, useState } from "react";
import { RequestActionApi } from "@/app/action/action";
import { PromoResponse } from "@/app/response/response";
import { HelperFunc } from "@/lib/utils";
import { HoverButtonStyle } from "@/lib/style";

const PromoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [phoneInputs, setPhoneInputs] = useState<{ [promoId: number]: string }>({});

  const handleInputChange = (promoId: number, value: string) => {
    setPhoneInputs((prev) => ({ ...prev, [promoId]: value }));
  };

  const [promos, setPromos] = useState<Array<PromoResponse>>([])
  const GetPromos = async() => {
    const result = await RequestActionApi.GetAllPromo()
   
    if(result) {
        if(result.success) {
            setPromos(result.data as Array<PromoResponse>)
        }
    }
  }

  useEffect(() => {
    GetPromos()
  }, [])

  const handleClaim = async(promoId: number, promoTitle: string) => {
    const phone = phoneInputs[promoId] || "";

    if (!phone.startsWith("62")) {
      toast({
        title: "Format nomor tidak valid",
        description: "Nomor WA harus dimulai dengan 62",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const result = await RequestActionApi.ClaimPromo({
        phone: phone,
        promo_id: promoId
    })


    if(result) {
        if(!result.success) {
            toast({
                title: "Terjadi kesalahan",
                description: `${result.message}`,
                status: "info",
                duration: 3000,
                isClosable: true,
              });
              return;
        }
    }else {
        toast({
            title: "Terjadi kesalahan",
            description: "Terjadi kesalahan saat claim promo",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return;
    }

    toast({
      title: "Berhasil diklaim! 🎉",
      description: `Promo "${promoTitle}" berhasil diklaim untuk nomor ${phone}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setPhoneInputs((prev) => ({ ...prev, [promoId]: "" }));
  };


  return (
    <>
      <Button
        mt={0}
        w={"full"}
        leftIcon={<MdDiscount />}
        colorScheme="red"
        variant="outline"
        borderColor="#D44638"
        color="#D44638"
        _hover={HoverButtonStyle}
        onClick={onOpen}
      >
        <span className="text-xs lg:text-base">Lihat promo kami</span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "90%", md: "500px", lg: "700px" }} borderRadius="2xl" className="bg-pink-50">
          <ModalHeader className="text-pink-900 font-bold text-xl">
            Promo Spesial Untuk Kamu ✨
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        {promos.length > 0 ? (
            promos.map((promo) => {

            return (
                <Box
                key={promo.Uuid}
                className="rounded-2xl p-4 shadow-md bg-white border border-pink-200"
                >
                <Text className="text-pink-800 font-semibold mb-2">{promo.Name}</Text>
                <Text className="text-sm text-gray-600 mb-4">{promo.Description}</Text>

                <Text className="text-xs text-gray-500 mb-1">
                    Berlaku dari <strong>{HelperFunc.FormatBeautifullDate(promo.StartDate, true)}</strong> sampai <strong>{HelperFunc.FormatBeautifullDate(promo.EndDate, true)}</strong>
                </Text>

                <Input
                    placeholder="Masukkan No. WA (ex: 6281234xxx)"
                    value={phoneInputs[promo.ID] || ""}
                    onChange={(e) => handleInputChange(promo.ID, e.target.value)}
                    size="sm"
                    rounded="md"
                    mb={2}
                    className="bg-pink-50"
    
                />

                <Button
                    size="sm"
                    colorScheme={"pink"}
                    w="full"
                    onClick={() => handleClaim(promo.ID, promo.Name)}
          
                >
                    {"Klaim Sekarang"}
                </Button>
                </Box>
            );
            })
        ) : (
            <Box className="col-span-2 text-center rounded-2xl p-8 shadow-inner bg-pink-50 border-2 border-dashed border-pink-300">
            <Text className="text-pink-700 font-bold text-lg mb-2">Belum Ada Promo 💔</Text>
            <Text className="text-sm text-gray-600">
                Tenang, promo spesial akan segera hadir untuk kamu. Stay tuned ya, cantik! 🌸
            </Text>
            </Box>
        )}
        </Grid>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PromoModal;
