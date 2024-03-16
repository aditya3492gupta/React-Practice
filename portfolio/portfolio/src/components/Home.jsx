import React from 'react';
import Himg from '../assets/newpp.jpg';
import { IoMdArrowDropright } from "react-icons/io";
const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            {/* <img src={Himg} alt="" /> */}
            {/* <IoMdArrowDropright /> */}
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-6xl font-bold text-white'>
                        I am a developer and a competitive coder
                    </h2>
                    <p className='py-4 text-gray-500 max-w-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, illo! Voluptate adipisci quis quidem quos sit ut blanditiis! Iure dolor aliquid unde consectetur quam suscipit, dolorem eos n</p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 capitalize'>
                            portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <IoMdArrowDropright size={25} className='ml-1' />
                            </span>
                        </button>

                    </div>
                </div>
                <div >
                    <img src={Himg} alt="my photo" className="rounded-2xl mx-auto lg:w-[420px] md:w-full" />
                </div>
            </div>
        </div >
    );
};

export default Home
