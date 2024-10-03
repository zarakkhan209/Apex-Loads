import React from 'react';

function Section4() {
    return (
        <>
            <div className='bg-[#D91E27] h-[500px]'>
                <div className='p-2 md:p-16'>
                    <p className='text-center text-xl md:text-5xl font-bold text-white'>Lorem ipsum dolor sit amet <br /> consectetur.</p>
                    <p className='text-center py-4 text-white text-xs'>At Apex Loads, we pride ourselves on our proven track record of excellence in the logistics industry. With <br /> years of experience and a deep understanding of Africa’s unique logistical challenges, we have established <br /> ourselves as a trusted partner for businesses across the continent.</p>
                    <div className="relative">
                        <div className="flex justify-center py-8">
                            <iframe
                                className="w-full md:w-[560px] md:h-[315px] h-auto"
                                src="https://www.dailymotion.com/video/x6zrgap"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section4;
