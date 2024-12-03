import React from 'react'
import bgImage from '../assets/1.jpg'

function Hero() {
    return (
        <div className='h-screen flex flex-col'>
            <div className="bg-cover h-[40%]" style={{ backgroundImage: `url(${bgImage})` }}>
                <h3 className="text-white font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl sm:text-left p-6 sm:p-10 md:p-16">
                    ToDo
                </h3>


            </div>
            <div className=" bg-black bg-cover h-[60%]">
                {/* Add any content here */}
            </div>
        </div >
    )
}

export default Hero
