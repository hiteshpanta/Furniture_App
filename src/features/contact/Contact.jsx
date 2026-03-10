import FeatureSection from '@/components/account/FeatureSection'
import TopBanner from '@/components/account/TopBanner'
import { LocateIcon, MapIcon, MapPinHouseIcon, PhoneCallIcon, TimerIcon } from 'lucide-react'
import React from 'react'
import ContactDetailForm from './ContactDetailForm'

export default function Contact() {
  return (
    <div>
      <div>
        <TopBanner 
          title="Contact Us"
          paths={[
            { label: "Home", href: "/"},
            {label: "Contact"}

          ]}
          />
      </div>

      <div className='mt-5 flex flex-col items-center'>
         <div className='flex flex-col items-center justify-centers'>
            <h3 className='flex justify-center'>Get In Touch With Us</h3>
            <p className='mt-2 text-gray-400 justify-center text-sm'>For more information About Our Product & Services. Please Feel Free To Drop Us <br />
                An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className='grid grid-cols-2 grid-[1.4fr,1.6fr] gap-30 mt-5'>
            <div className='flex flex-col'>

                <div className='flex flex-col'>
                  <div className='flex gap-8'>
                    <MapPinHouseIcon />
                    <h4 className='font-medium'>Address</h4>
                  </div>
                  
                  <p>236 5th SE Avenue, New <br />
                    York Ny10000, United <br />
                    States</p>
                </div>

                <div className='mt-5 flex flex-col'>
                  <div className='flex gap-8'>
                     <PhoneCallIcon/>
                    <h4 className='font-medium'>Phone</h4> <br />
                  </div>
                 
                  <p>Mobile: +(84) 546-6789 <br />
                    Hotline: +(84) 456-6789</p>
                </div>

                <div className='mt-5 flex flex-col'>
                  <div className='flex gap-8'>
                    <TimerIcon/>
                  <h4 className='font-medium'>Working time</h4> <br />
                  </div>
                  
                  <div>
                    <p className='flex flex-col'>Monday-Friday: 9:00- <br />
                    22:00 <br />
                    Saturday-Sunday: 9:00 - <br />
                    21:00</p>
                  </div>

                  
                  
                </div>


            </div>

            <div>
                <ContactDetailForm/>
            </div>


        </div>
      </div>

      <div className='mt-10'>
        <FeatureSection />
      </div>
      
     
    </div>
  )
}
