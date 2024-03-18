import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    I'm an enthusiastic undergraduate student deeply passionate about web development, data science, and problem-solving. My journey began with a curiosity about website mechanics, leading me to master HTML, CSS, JavaScript, and various frameworks for crafting intuitive interfaces. Simultaneously, I've delved into the realm of data science, mastering machine learning algorithms, data visualization techniques, and statistical analysis methods to derive meaningful insights from complex datasets.
                </p>

                <br />

                <p className="text-xl">
                    Thriving in environments that challenge me, I approach each problem with determination and creativity, employing critical thinking to find effective solutions. Eager to continue expanding my knowledge and skills, I am committed to making a positive impact through technology and collaborative innovation.
                </p>
            </div>
        </div>
    );
};

export default About;