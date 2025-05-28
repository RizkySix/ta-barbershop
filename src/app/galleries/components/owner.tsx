"use client";
import { useEffect } from "react";
import { Img } from "@chakra-ui/react";
import "@/styles/custom-style.css";
import FadeInImage from "@/components/ui/fade-image";
import AOS from "aos";
import "aos/dist/aos.css";

export function Owner() {
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
      <section className="owner w-full relative lg:px-11 px-4 ">
        <div className="owner-header-title mx-auto my-11 lg:my-24 text-center flex flex-col items-center">
          <h1 className="text-sm lg:text-lg font-bold leading-7 lg:leading-9">
            KECANTIKAN YANG MEMUKAU
          </h1>
          <p className="text-xs lg:text-base mb-4 lg:mb-8 px-1 lg:px-0 text-center max-w-xl">
            Rambut indah, wajah bersinar - Inilah yang bisa Anda dapatkan dari
            perawatan profesional di A&G Salon.
          </p>
        </div>

        <div className="lg:clearfix">
          <div className="house-img lg:float-left lg:w-1/2">
            <Img
              data-aos="fade-up-right"
              src="/owner-gallery.jpg"
              alt="owner-img"
              className="lg:h-screen h-auto w-full object-cover"
            />
          </div>

          <div className="owner-text lg:float-right mt-11 lg:mt-[20%] lg:w-2/6 lg:px-0 px-6 flex flex-col gap-4 justify-center">
            <div className="text-owner w-3/4 hidden lg:block">
              <h4 className="text-lg font-bold leading-9">
                Kami Mendengarkan Kebutuhan Anda
              </h4>
              <p className="block">
                Setiap kunjungan di A&G Salon dimulai dengan konsultasi mendalam
                untuk memahami keinginan Anda. Karena kami percaya, kecantikan
                sejati dimulai dari memahami karakter unik setiap pelanggan.
              </p>
            </div>

            <div className="text-owner w-full md:w-1/2 block lg:hidden">
              <h4 className="text-sm font-bold leading-9">
                Kami Mendengarkan Kebutuhan Anda
              </h4>
              <p className="block text-xs">
                Setiap kunjungan di A&G Salon dimulai dengan konsultasi mendalam
                untuk memahami keinginan Anda. Karena kami percaya, kecantikan
                sejati dimulai dari memahami karakter unik setiap pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
