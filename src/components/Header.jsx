import React, { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="bg-[#D91E27] py-2 px-4 md:px-20 text-white">
                <div className="flex justify-between items-center">
                    <div className="hidden md:flex">
                        <ul className="flex gap-6">
                            <li className="flex items-center gap-1 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="white" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                <p>+254 (0) 709 677 400</p>
                            </li>
                            <li className="flex items-center gap-1 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <p>+254 (0) 709 677 400</p>
                            </li>
                            <li className="flex items-center gap-1 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <p>info@apexloads.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden flex items-center justify-end w-full">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <ul className="flex gap-6 items-center">
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1" class="flex items-center justify-between w-full text-sm text-white">Products<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbar1" class="z-10 hidden font-normal bg-red-600 divide-y divide-gray-100 shadow w-44">
                                    <ul class="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Search Loads</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Post a truck</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">EAC profile</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="text-xs">About Us</li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar2" class="flex items-center justify-between w-full text-sm text-white">Resources<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbar2" class="z-10 hidden font-normal bg-red-600 divide-y divide-gray-100 shadow w-44">
                                    <ul class="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Search Loads</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Post a truck</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">EAC profile</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:flex">
                        <button className='text-sm rounded-lg bg-white text-red-600 px-3'>
                            <div className='flex gap-1 items-center'>
                                <div>
                                    Login
                                </div>
                                <div>
                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.79289 5.54289L0.707107 2.45711C0.0771419 1.82714 0.523308 0.75 1.41421 0.75H7.58579C8.47669 0.75 8.92286 1.82714 8.29289 2.45711L5.20711 5.54289C4.81658 5.93342 4.18342 5.93342 3.79289 5.54289Z" fill="#D91E27" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[#D91E27] px-4 py-2 text-white">
                    <ul className="space-y-1">
                        <hr />
                        <li className="text-sm"> ▻ Products</li>
                        <li className="text-sm"> ▻ About Us</li>
                        <li className="text-sm"> ▻ Resources</li>
                        <hr />
                        <li>
                            <button className='text-sm rounded-lg w-full bg-white text-red-600 px-4'>
                                <div className='flex gap-1 justify-center items-center'>
                                    <div>
                                        Login
                                    </div>
                                    <div>
                                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.79289 5.54289L0.707107 2.45711C0.0771419 1.82714 0.523308 0.75 1.41421 0.75H7.58579C8.47669 0.75 8.92286 1.82714 8.29289 2.45711L5.20711 5.54289C4.81658 5.93342 4.18342 5.93342 3.79289 5.54289Z" fill="#D91E27" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
