import React from 'react'
import Truck1 from '../../assets/truck1.png'
import Truck2 from '../../assets/truck2.png'
import Truck3 from '../../assets/truck3.png'

function Section3() {
    return (
        <>
            <div className='bg-black'>
                <div className='px-4 md:px-20 py-3'>
                    <div className='flex justify-between'>
                        <p className='text-white text-5xl font-bold'>Services We <span className='text-[#D91E27]'>Offer</span></p>
                        <button className='hidden md:block bg-red-600 rounded-3xl text-xs text-white px-7'>
                            Book A Free Demo
                        </button>
                    </div>
                    <div className="py-6 flex overflow-x-auto">
                        <div className="flex gap-6">
                            <div className="max-w-xs flex-shrink-0 rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={Truck1} alt="Sunset in the mountains" />
                                <div className="bg-white px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                    <div className="py-4">
                                        <button className="bg-red-600 rounded-3xl text-xs text-white px-5 py-1">Know More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-xs flex-shrink-0 rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={Truck2} alt="Sunset in the mountains" />
                                <div className="bg-white px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                    <div className="py-4">
                                        <button className="bg-red-600 rounded-3xl text-xs text-white px-5 py-1">Know More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-xs flex-shrink-0 rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={Truck3} alt="Sunset in the mountains" />
                                <div className="bg-white px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                    <div className="py-4">
                                        <button className="bg-red-600 rounded-3xl text-xs text-white px-5 py-1">Know More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='block md:hidden bg-red-600 rounded-3xl text-xs text-white px-7'>
                        Book A Free Demo
                    </button>
                </div>
            </div>
        </>
    )
}

export default Section3