import React from 'react';
import Background from '../../assets/background2.png';
import Truck from '../../assets/truck.png';

function Section2() {
    return (
        <div
            className="relative w-full h-screen"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="flex flex-col md:flex-row justify-between items-center h-full px-6">
                <div className="text-white flex flex-col justify-center ml-0 md:ml-20 mb-4 md:mb-0">
                    <h2 className="text-5xl font-bold leading-tight">
                        About <span className='text-[#D91E27]'>us</span>
                    </h2>
                    <p className="text-md md:text-xl font-bold mt-3 leading-tight">
                        <span className='text-[#D91E27]'>Apexloads.com</span> is a premier digital platform designed <br />
                        to revolutionize the logistics and transportation <br />
                        industry,<span className='text-xs'> with a special focus on the African market. We aim to bridge the gap between <br />
                            shippers and truck owners, providing a seamless and efficient solution to manage freight <br />
                            loads. Our platform is built on the principles of innovation, reliability, and accessibility,<br />
                            ensuring that all users, regardless of their location, can optimize their logistics operations and <br />
                            drive their businesses forward.</span>
                    </p>
                    <button className="mt-4 w-36 text-sm md:text-xl border rounded-2xl px-3 text-white">
                        Know more
                    </button>
                </div>
                <div className="flex justify-end w-full md:w-auto">
                    <img src={Truck} alt="Truck" className="w-[150%] h-auto md:w-auto -mr-6" />
                </div>
            </div>
        </div>
    );
}

export default Section2;
