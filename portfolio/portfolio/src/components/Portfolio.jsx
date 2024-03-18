import React from 'react';
import CaraHelp from "../assets/Caravansary_Help.jpg";
import CusSeg from "../assets/Customer_Segmentation.png";
import UE from "../assets/Udit_Electricals.png"
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: CaraHelp,
            href: "https://github.com/aditya3492gupta/Caravansary-Help",
        },
        {
            id: 2,
            src: CusSeg,
            href: "https://github.com/aditya3492gupta/Customer-Segmentation",
        },
        {
            id: 3,
            src: UE,
            href: "https://github.com/aditya3492gupta/Udit-Electricals",
        },

    ];
    const handleClick = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div name="portfolio" className='w-full h-screen flex bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, href }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105" />
                            <div>
                                <div className="flex items-center justify-center">
                                    {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Demo
                                    </button> */}
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleClick(href)}>
                                        Source Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Portfolio
