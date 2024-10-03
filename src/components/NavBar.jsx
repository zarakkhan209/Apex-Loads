import React, { useState } from 'react'
import Logo from '../assets/apexloads.png'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#000000] py-2 px-3 md:px-20 text-white">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li className="ml-[-14px]">
                <img src={Logo} alt="logo" className='h-14' />
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar3" class="flex items-center w-full text-sm text-white">Transporters<svg class="w-2.5 h-1 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownNavbar3" class="z-10 hidden font-normal bg-black divide-y divide-gray-100 shadow w-44">
                  <ul class="py-2 mt-3 text-sm text-white" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-500">Search Loads</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-500">Post a truck</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-500">EAC profile</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar4" class="flex items-center w-full text-sm text-white">
                  <p>Full Service Broker</p>
                  <svg class="w-2.5 h-1 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownNavbar4" class="z-10 hidden font-normal bg-black divide-y divide-gray-100 shadow w-44">
                  <ul class="py-2 mt-3 text-sm text-white" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-500">Search Loads</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-500">Post a truck</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-500">EAC profile</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar5" class="flex items-center w-full text-sm text-white">Freight Forwarders/Brokers<svg class="w-2.5 h-1 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownNavbar5" class="z-10 hidden font-normal bg-black divide-y divide-gray-100 shadow w-44">
                  <ul class="py-2 mt-3 text-sm text-white" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-500">Search Loads</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-500">Post a truck</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-500">EAC profile</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center justify-end w-full">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex gap-3">
            <button className='text-sm rounded-lg bg-white text-red-600 px-4'>
              Pricing
            </button>
            <button className='text-sm rounded-lg bg-red-600 text-white px-4'>
              Book A Free Demo
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-2 text-white">
          <ul className="space-y-1">
            <hr />
            <li className="text-sm"> ▻ Transporters</li>
            <li className="text-sm"> ▻ Full Service Broker</li>
            <li className="text-sm"> ▻ Freight Forwarders/Brokers</li>
            <hr />
            <li>
              <button className='text-sm rounded-lg w-full bg-white text-red-600 px-4'>
                Pricing
              </button>
            </li>
            <li>
              <button className='text-sm rounded-lg w-full bg-red-600 text-white px-4'>
                Book A Free Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default NavBar