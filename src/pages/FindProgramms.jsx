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
        { label: "MD", path: "/admissions/md" },
        { label: "MBBS", path: "/admissions/mbbs" }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="header-section3 relative">
                <div className="mx-auto px-4 sm:px-5">
                    <main className="grid gap-x-10 gap-y-8 lg:grid-cols-2 place-items-center pt-12 pb-8 md:pt-12 md:pb-24">
                        <div className="order-2 lg:order-1">
                            <div className="divider mb-3 h-[5px] w-[100px] bg-[#012C6E]"/>
                            <h1 className="text-white uppercase font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-4xl">
                                Enter the realm of healing and healthcare at Asia International University's Medical
                                Faculty
                            </h1>
                            <p className="text-base sm:text-lg mt-4 text-white max-w-3xl">
                                We are pleased to welcome you as we commence a journey of discovery, learning, and
                                innovation in the medical field. Join us in exploring the art and science of healing,
                                advancing human health, and positively impacting the world.
                            </p>

                            {/* Stats Section */}
                            <div className="relative w-full flex mt-6 sm:mt-8">
                                <div className="bg-[#012152]/80 text-white rounded-lg w-full grid grid-cols-1 sm:grid-cols-3 py-1 divide-y sm:divide-y-0 sm:divide-x divide-[hsla(0,0%,100%,.2)]">
                                    {[
                                        { icon: "/icons8-teacher-50.png", value: "330", label: "Professors" },
                                        { icon: "/icons8-computer-50.png", value: "12", label: "Computer labs" },
                                        { icon: "/icons8-laboratory-50.png", value: "4", label: "Laboratories" }
                                    ].map((stat, index) => (
                                        <div key={index} className="flex items-center justify-center py-4 sm:py-6 px-4">
                                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                                                <div className="flex-shrink-0">
                                                    <img src={stat.icon} alt="" className="h-12 w-12"/>
                                                </div>
                                                <div className="text-center sm:text-left">
                                                    <p className="text-xl font-bold">{stat.value}</p>
                                                    <p className="text-sm sm:text-base">{stat.label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0 blur-[114px]"/>
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
                {/* Cards Section */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1 py-6 sm:py-8 lg:py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Faculties",
                                text: "Our faculties provide diverse educational programs encompassing a wide range of subjects and disciplines. We cultivate critical thinking, creativity, and intellectual aptitude.",
                                image: "/2-BINO TALABALAR (4).JPG"
                            },
                            {
                                title: "Bachelor's Degree",
                                text: "Our undergraduate programs address contemporary trends in science, technology, and industry, equipping you for a prosperous career and advanced studies.",
                                image: "/2-BINO TALABALAR (6).JPG"
                            },
                            {
                                title: "Master's Degree",
                                text: "Our master's programs are tailored to current advancements in science, technology, and industry, preparing you for a prosperous career and continued academic pursuits.",
                                image: "/2-BINO TALABALAR (3).JPG"
                            }
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="main-metro-card relative h-64 sm:h-72 rounded-xl overflow-hidden"
                                style={{
                                    backgroundImage: `url('${card.image}')`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
                                <div className="main-metro-card__content absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                    <h3 className="main-metro-card__title text-white text-xl sm:text-2xl font-bold mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="main-metro-card__text text-white text-sm sm:text-base mb-3">
                                        {card.text}
                                    </p>
                                    <svg
                                        className="main-metro-card__svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx={8} cy={8} r={8} fill="white"/>
                                        <path
                                            d="M7 5.33337L9.66667 8.00004L7 10.6667"
                                            stroke="#0050CF"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Side Navigation */}
                <aside className="w-full lg:w-1/2 order-1 lg:order-2 my-4 lg:my-8 lg:sticky lg:top-32 h-max">
                    <ul className="sideNav bg-white shadow-lg rounded-lg overflow-hidden">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-3 sm:p-4 group">
                            <span className="uppercase p-1 px-2 text-base sm:text-lg font-bold flex items-center gap-3 z-10">
                                FIND PROGRAMS
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