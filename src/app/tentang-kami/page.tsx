
import Navbar from "@/components/layout/navbar";

import Footer from "@/components/layout/footer";
import { Hero } from "../galleries/components/hero";
import { AboutUsDetail } from "./components/about-us";


export default function BookingForm() {
  return (
    <>
     <Navbar />

     <div className="">
        <div className="hero  ">
        <Hero image="/hero-place1.jpeg" />
        </div>

        <div className="content flex flex-col lg:gap-4">
            <div>
              <AboutUsDetail />
            </div>
        </div>
      </div>
     
    <Footer />
    </>
  )
}