"use client"

export function Hero() {
  return (
    <section className='hero-video w-full relative'>
        <video 
          src="/movie.mp4" 
          className="h-screen w-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
    </section>
  )
}
