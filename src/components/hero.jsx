import React, { useEffect } from 'react';
import hamza from '../images/kebir.jpeg';
import Typed from 'typed.js';
import video from '../../public/video.mp4';

const Hero = () => {
    useEffect(() => {
        const options = {
            strings: ['', 'FullStack Developer,', 'Frontend Developer,', 'Backend Developer,'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        };

        const typed = new Typed('.typing', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="home" className="relative w-full h-screen bg-gray-900 dark:bg-gray-200">
            {/* Background Video */}
            <video
                src={video}
                autoPlay
                loop
                muted
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col md:flex-row gap-4 justify-center items-center px-8 md:px-16 py-20">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        className="rounded-full md:max-w-[70%] sm:max-w-[40%] xs:max-w-[30%] md:block hidden"
                        src={hamza}
                        alt="My Image"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-white dark:text-gray-800">
                    <h1 className="text-4xl font-semibold font-serif text-center md:text-left">Hello, I'm KEBIR Hamza</h1>
                    <h3 className="capitalize text-rose-400 text-center md:text-left">
                        I'm <span className="typing text-green-500 dark:text-green-700">fullstack developer</span>
                    </h3>
                    <p className="text-center md:text-left">
                        Junior Full Stack Web Developer specializing in React.js and Laravel. Passionate about web development, I create responsive, efficient web applications and I'm eager to take on new challenges to grow my skills and contribute to impactful projects.
                    </p>
                    <div className="sm:mt-4 xs:mt-2">
                        <button className="px-6 py-1 bg-rose-500 text-white rounded-sm">Get In Touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
