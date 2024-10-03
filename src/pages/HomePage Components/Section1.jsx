import React from 'react'
import Background from '../../assets/background1.png'

function Section1() {
    return (
        <>
            <div>
                <div className="relative overflow-hidden">
                    <img src={Background} alt="background" className="w-full h-[240px] md:h-full" />
                    <div className="absolute top-7 md:top-24 left-6 w-full flex justify-start md:justify-center">
                        <span className="text-white text-5xl md:text-7xl font-bold">RELIABLE <br />TRANSPORT</span>
                    </div>
                    <div className="absolute top-32 md:top-60 left-6 md:left-32 w-full flex justify-start md:justify-center">
                        <span className="text-white text-md md:text-4xl font-bold">SOLUTIONS FOR <br />YOUR FREIGHT</span>
                    </div>
                    <div className="absolute bottom-6 left-6 md:left-24 md:bottom-56 w-full flex justify-start md:justify-center">
                        <button className="text-white text-sm md:text-xl border rounded-2xl px-3">Book Your Free Trial →</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1