

import SimpleNavbar from '@/components/layout/simple-navbar'
import { Form } from './components/booking-form'
import SimpleFooter from '@/components/layout/simple-footer'

export default function BookingForm() {
  return (
    <>
     <SimpleNavbar />

     <div className="booking-form py-11">
        <Form />
        
     </div>
     
     <SimpleFooter />
    </>
  )
}