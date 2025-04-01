"use client"

import { Button, Img } from "@chakra-ui/react"
import { galleriesData } from "../data/galleries.data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import { HelperFunc } from "@/lib/utils";
import { MdWhatsapp } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SpinnerLoader from "@/components/ui/loading-spiner";

export function Galleries() {

  
      const galleriesSlide = galleriesData.map((gallery, index) =>  {
      
          return (
            <SwiperSlide key={index}>
                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0 ">
                    <Img src={gallery[0]} alt="Gallery Image 1" className="w-full h-[400px] lg:h-[700px] object-cover" />
                    <div className="flex flex-col gap-1">
                    <Img src={gallery[1]} alt="Gallery Image 2" className="w-full h-[200px] lg:h-[350px] object-cover" />
                    <Img src={gallery[2]} alt="Gallery Image 2" className="w-full h-[200px] lg:h-[350px] object-cover" />
                    </div>
                    <Img src={gallery[3]} alt="Gallery Image 3" className="w-full h-[400px] lg:h-[700px] object-cover col-span-2 lg:col-span-1" />
                    </div>
            </SwiperSlide>
          );
      });

      const router = useRouter()
      const [isLoading, setIsLoading] = useState(false);
      const toBooking = async() => {
          setIsLoading(true);
          try {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              router.push('/booking')
          } catch (error) {
              console.log(error)
          } finally {
              setIsLoading(false)
          }
      }
  
      return (
      
        <section className="mt-11">
            {isLoading && (
          SpinnerLoader()
       )}
        <div className="owner-header-title mx-auto my-11 lg:my-24 text-center flex flex-col items-center">
        <h1 className="text-sm lg:text-lg font-bold leading-7 lg:leading-9">Hasil Nyata, Kepuasan Terjamin</h1>
        <p className="text-xs lg:text-base mb-4 lg:mb-8 px-1 lg:px-0 text-center max-w-xl">
        Bukti nyata perawatan profesional kami yang bikin penampilan kamu makin kece.
        </p>  
        </div>

      
        <Swiper
        modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000
          }}
          speed={1000}
        >
          {galleriesSlide}
        </Swiper>

        </section>
        );
}
