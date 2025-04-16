"use client"

import { Img } from "@chakra-ui/react"

export function Hero() {
  return (
    <section className='hero-video w-full relative'>
        {/* <video 
          src="/movie.mp4" 
          className="h-screen w-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        /> */}
        <Img src="/hero-place2.jpeg" alt="hero-img" objectFit="cover" width="100%" height="xl" />
    </section>
  )
}
