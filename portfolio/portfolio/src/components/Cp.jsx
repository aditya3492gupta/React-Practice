import React from 'react';
import cc from "../assets/codechef.svg";
import cf from "../assets/Codeforces.svg";
import lc from "../assets/leetcode.png";

const Cp = () => {
    const techs = [
        {
            id: 1,
            src: cc,
            title: "CodeChef",
            style: "shadow-orange-500 bg-white text-black",
            href: "https://www.codechef.com/users/adityavarshney",

        },
        {
            id: 2,
            src: cf,
            title: "CodeForces",
            style: "shadow-blue-500",
            href: "https://codeforces.com/profile/adityasvarshney",
        },
        {
            id: 3,
            src: lc,
            title: "Leetcode",
            style: "shadow-yellow-500",
            href: "https://leetcode.com/aditya3492gupta/",
        },
    ];
    const handleClick = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div name="cp" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen  text-white md:h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Competitive Programming
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style, href }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                            <div>
                                <div className="flex items-center justify-center">
                                    {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Demo
                        </button> */}
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleClick(href)}>
                                        Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cp
