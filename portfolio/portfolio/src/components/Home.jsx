import React from 'react';
import Himg from '../assets/newpp.jpg';
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            {/* <img src={Himg} alt="" /> */}
            {/* <IoMdArrowDropright /> */}
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-6xl font-bold text-white'>
                        Hi, I am a Aditya Gupta
                    </h2>
                    <p className='py-4 text-gray-500 max-w-md'>I am a undergraduate student who have keen interest in web development, data science and problem solving.</p>
                    <p className='py-1 text-gray-500 max-w-md'> You can see my profile through this page.😀</p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <IoMdArrowDropright size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div >
                    <img src={Himg} alt="my photo" className="rounded-2xl mx-auto lg:w-[420px] md:w-[240px] sm:w-[120px] sm:h-auto" />
                </div>
            </div>
        </div >
    );
};

export default Home
