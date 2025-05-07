import React, {useState} from 'react';
import {motion} from "framer-motion";
import {Link, useNavigate} from "react-router-dom";

const FindPrograms = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://oxu.uz/talabalar_hayoti-6.jpg',
        'https://oxu.uz/talabalar_hayoti-6.jpg',
        'https://oxu.uz/talabalar_hayoti-6.jpg',
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const navigate = useNavigate();

    const navItems = [
        {label: "Find Program", path: "/find-programs"},
        {label: "MD", path: "/admissions/md"},
        {label: "MBBS", path: "/admissions/mbbs"},
        {label: "BSBA", path: "/admissions/bsba"},
        {label: "BSIT", path: "/admissions/bsit"},
        {label: "MBA", path: "/admissions/mba"}
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="header-section3 relative">
                <div className="mx-auto px-4 sm:px-5">
                    <main
                        className="grid gap-x-10 gap-y-8 lg:grid-cols-2 place-items-center pt-12 pb-8 md:pt-12 md:pb-24">
                        <div className="order-2 lg:order-1">
                            <div className="divider mb-3 h-[5px] w-[100px] bg-[#012C6E]"/>
                            <h1 className="text-white uppercase font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-4xl">
                                In Partnership with Western University of Science and Technology (WUST), USA
                            </h1>
                            <p className="text-base sm:text-lg mt-4 text-white max-w-3xl">
                                Asia International University (AIU) offers internationally recognized degree programs in
                                collaboration with Western University of Science and Technology (WUST) in the United
                                States of America. These programs are designed to give students not only a solid
                                academic foundation but also global exposure and the opportunity to complete part of
                                their education in the USA.
                            </p>

                            {/* Call to Action */}
                            <div className="mt-6 bg-white/10 p-4 rounded-lg border border-white/20">
                                <h3 className="text-white text-xl font-bold mb-2">Take the First Step Toward a U.S. Degree</h3>
                                <p className="text-white">
                                    Asia International University offers a unique opportunity to begin your journey locally and complete it internationally in the United States. Our partnership with WUST ensures students gain not only an academic advantage but also life-changing international experience.
                                </p>
                            </div>
                        </div>

                        {/* Image Slider */}
                        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] order-1 lg:order-2">
                            <motion.div
                                key={currentIndex}
                                className="absolute inset-0 w-full h-full"
                                initial={{x: '100%'}}
                                animate={{x: 0}}
                                exit={{x: '-100%'}}
                                transition={{duration: 0.5}}
                            >
                                <img
                                    src={images[currentIndex]}
                                    alt={`slide-${currentIndex}`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </motion.div>

                            {/* Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`block h-1 rounded-2xl transition-all ${
                                            currentIndex === index ? 'w-8 bg-white' : 'w-4 bg-white/50'
                                        }`}
                                        onClick={() => setCurrentIndex(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 gap-6 lg:gap-10 mb-5">
                {/* Cards Section - Updated with WUST partnership benefits */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1 py-6 sm:py-8 lg:py-8">
                    <div className="bg-[#012C6E] text-white p-6 rounded-xl mb-6">
                        <h2 className="text-2xl font-bold mb-4">Why Study at AIU + WUST (USA)?</h2>
                        <ul className="space-y-3">
                            {[
                                "International Recognition: Earn a degree from an accredited U.S. institution",
                                "Global Mobility: Seamless transition to the USA for academic and cultural immersion",
                                "Career Readiness: Access to U.S. internships, networking, and job placement support",
                                "Affordable Entry: Begin your studies locally at AIU before transferring to WUST",
                                "Student Visa Support: Guidance for smooth transfer and F-1 visa application process"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="inline-block bg-white text-[#012C6E] rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Side Navigation - Unchanged */}
                <aside className="w-full lg:w-1/2 order-1 lg:order-2 my-4 lg:my-8 lg:sticky lg:top-32 h-max">
                    <ul className="sideNav bg-white shadow-lg rounded-lg overflow-hidden">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-3 sm:p-4 group">
                            <span
                                className="uppercase p-1 px-2 text-base sm:text-lg font-bold flex items-center gap-3 z-10">
                               Admission
                                <img
                                    className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
                                    src="/arrow.svg"
                                    alt="Arrow"
                                />
                            </span>
                            <span className="text-5xl sm:text-7xl absolute font-bold opacity-10">AIU</span>
                            <img
                                src="/Vector.svg"
                                className="absolute opacity-10 h-16 sm:h-20 right-0 bottom-0"
                                alt="Vector"
                            />
                        </li>

                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => navigate(item.path)}
                                className={`sideNav-links transition-colors cursor-pointer p-3 sm:p-4 ${
                                    location.pathname === item.path ? "sideNav-active" : ""
                                }`}
                            >
                                <span className="block">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default FindPrograms;