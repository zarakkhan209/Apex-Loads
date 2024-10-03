import React from 'react'
import Logo from '../assets/apexloads.png'

function Footer() {
  return (
    <>
      <div className='bg-[#171715]'>
        <div className='flex flex-col md:flex-row py-1 px-3 md:p-6 md:px-12 lg:p-12 lg:px-24'>
          <div className='w-full'>
            <img src={Logo} alt="logo" className='h-14' />
            <div className='px-6 py-2'>
              <p className='text-[#8F9FA3] text-xs font-bold'>The first free end-to-end analytics service for the site,<br /> designed to work with enterprises of various levels and <br /> business segments.</p>
              <p className='text-[#BF5540] text-xs py-3'>Feedback</p>
              <p className='text-[#FFFFFF66]'>Seeking personalized support?</p>
              <p className='text-white'>Request a call from our team</p>
              <div className='pt-6'>
                <div class="relative">
                  <label for="name" class="absolute left-2 top-1 text-gray-500 text-xs px-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    class="border text-white border-gray-400 rounded-lg md:rounded-md p-2 pt-3 w-full md:w-64 bg-transparent"
                    placeholder=" " />
                </div>
              </div>
              <div className='pt-3'>
                <div class="relative">
                  <label for="name" class="absolute left-2 top-1 text-gray-500 text-xs px-1">
                    Phone Number
                  </label>
                  <input
                    id="name"
                    type="number"
                    class="border text-white border-gray-400 rounded-lg md:rounded-md p-2 pt-3 w-full md:w-64 bg-transparent"
                    placeholder=" " />
                </div>
              </div>
              <div className='pt-3'>
                <button className='text-sm rounded-xl bg-red-600 text-white px-7 py-1'>
                  Send a request
                </button>
              </div>
            </div>
          </div>
          <div className='w-full px-5'>
            <div className='flex justify-between md:gap-32 lg:gap-32'>
              <div>
                <p className='text-[#D81E27] text-sm'>Useful Links</p>
                <ul className='text-[#CAC9C4] space-y-1 text-xs'>
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Contact Us</li>
                  <li>Newsletter</li>
                  <li>Pricing</li>
                  <li>Our Blog</li>
                  <li>FAQsEAC</li>
                  <li>Profile</li>
                </ul>
                <div className='block md:hidden'>
                  <p className='text-xs py-4 text-[#72716D]'>Contact us</p>
                  <div>
                    <div className='text-white text-xs md:text-sm'>
                      <p> +254 (0) 709 677 400</p>
                      <p>info@apexloads.com</p>
                    </div>
                    <div className='text-xs text-[#CAC9C4]'>
                      <p>2972 Westheimer Rd. Santa Ana,<br />
                        Illinois 85486 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-[#D81E27] text-sm'>Services</p>
                <div className='flex flex-col md:flex-row gap-10'>
                  <div>
                    <p className='text-white'>Transporters</p>
                    <ul className='text-[#CAC9C4] text-xs md:py-1'>
                      <li>Post Trucks</li>
                      <li>Search For Loads</li>
                    </ul>
                  </div>
                  <div>
                    <p className='text-white'>Brokers / Freight-Forwarders</p>
                    <ul className='text-[#CAC9C4] text-xs md:py-1'>
                      <li>Post Trucks</li>
                      <li>Search For Loads</li>
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-10 mt-4'>
                  <div>
                    <p className='text-white'>Shippers</p>
                    <ul className='text-[#CAC9C4] text-xs md:py-1'>
                      <li>Post Trucks</li>
                      <li>Search For Loads</li>
                    </ul>
                  </div>
                  <div>
                    <p className='text-white'>Full-Service Brokers</p>
                    <ul className='text-[#CAC9C4] text-xs md:py-1'>
                      <li>Post Trucks</li>
                      <li>Search For Loads</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden sm:block'>
              <p className='text-xs py-4 text-[#72716D]'>Contact us</p>
              <div className='flex flex-col md:flex-row justify-between'>
                <div className='text-white text-sm'>
                  <p> +254 (0) 709 677 400</p>
                  <p>info@apexloads.com</p>
                </div>
                <div className='text-xs text-[#CAC9C4]'>
                  <p>2972 Westheimer Rd. Santa Ana,<br />
                    Illinois 85486 </p>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-xs text-[#D81E27]'>Call me back</p>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-xs text-[#72716D]'>Follow Us</p>
                <div className='text-[#CAC9C4] flex flex-col md:flex-row text-sm py-2'>
                  <div>Telegram</div><span className='hidden sm:block px-8'>/</span>
                  <div>WhatsApp</div><span className='hidden sm:block px-8'>/</span>
                  <div>Instagram</div>
                </div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            </div>
            <div className='flex justify-between md:flex-col py-1 mt-6'>
              <p className='text-xs text-[#72716D]'>© 2024 — Copyright</p>
              <p className='text-xs text-[#72716D]'>PRIVACY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer