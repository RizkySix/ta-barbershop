import Navbar from '@/components/layout/navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Services } from './components/services'
import Maps from './components/maps'
import Footer from '@/components/layout/footer'
import { Box, Flex } from '@chakra-ui/react'
import { VideoCompanyProfile } from './components/video'

export default function Home() {
  const arr = [1,2,3,4,5]
  for (let i in arr ) {
    if(arr[i] % 2 === 0) {
      arr.splice(Number(i), 1)
    }
  }

  console.log(arr)

  return (
    <>
      <Navbar />

      <Box as="section" py={{ base: 0, md: 0 }}>
        <Box className="hero">
          <Hero />
        </Box>

        <Flex id="about" direction="column" gap={{ base: 14, lg: 28 }} px={{base: 0, lg: 8}} py={{base: 8, md: 8, lg:0}}>
          <Box className="about">
            <About />
            
          </Box>

          <Box id="services" className="services">
            <Services />
          </Box>

          <Box id="location" className="map">
            <Maps />
          </Box>
        </Flex>
      </Box>

      <Footer />
    </>
  )
}
