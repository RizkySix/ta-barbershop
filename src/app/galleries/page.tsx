import Navbar from "@/components/layout/navbar";
import { Hero } from "./components/hero";
import { Owner } from "./components/owner";
import { Galleries } from "./components/galleries";
import Footer from "@/components/layout/footer";
import SimpleFooter from "@/components/layout/simple-footer";


export default function BookingForm() {
  return (
    <>
     <Navbar />

     <div className="">
        <div className="hero  ">
        <Hero />
        </div>

        <div className="content flex flex-col gap-14 lg:gap-28">
            <div id="whyus">
              <Owner />
            </div>

            <div id="testimoni">
              <Galleries />
            </div>
        </div>
      </div>
     
      <SimpleFooter />
    </>
  )
}