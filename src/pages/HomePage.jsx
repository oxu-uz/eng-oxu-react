import React, { useState, useEffect, useTransition } from 'react';
import CampusSection from "../components/home/CampusSection.jsx";
import CountUp from 'react-countup';
import NewsAndEvents from "../components/home/NewsAndEvents.jsx";
import CustomCarousel from "../components/home/CustomCarousel.jsx";
import {motion} from "framer-motion";

const HomePage = () => {
    const [isCarouselVisible, setCarouselVisible] = useState(false);

    // Use the useTransition hook for optimized state updates
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.2; // 10% высоты окна
            if (window.scrollY > scrollThreshold) {
                setCarouselVisible(true);
            } else {
                setCarouselVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <section className="relative cs-slide-paralax-bg">
                {/*<div className="absolute inset-0 bg-black/40 z-10"></div>*/}
                <video
                    className="absolute inset-0 object-cover w-full h-full z-0"
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/headerbg2.svg"
                >
                    <source src="/11064.mp4" type="video/mp4"/>
                    Ваш браузер не поддерживает видео.
                </video>

                <div className="relative flex items-center justify-center h-full w-full z-20">
                    {/* Animated logo with useTransition */}
                    <motion.img
                        src="/headerlogo.svg"
                        alt="Logo"
                        className="mx-auto"
                        initial={{x: 0, opacity: 1}} // Initial position
                        animate={isCarouselVisible ? {x: "-85%", opacity: 1} : {x: 0, opacity: 1}}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    />

                    {/* Carousel with transition based on visibility */}
                    <motion.div
                        className="absolute right-10 bottom-10 max-w-7xl transition-opacity duration-700"
                        initial={{y: 150, opacity: 0}}
                        animate={isCarouselVisible ? {y: 0, opacity: 1} : {y: 150, opacity: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}
                    >
                        {isPending ? <p>Loading carousel...</p> : <CustomCarousel />}
                    </motion.div>
                </div>
            </section>

            <CampusSection />

            <section className="h-[280px] bg-cover w-full flex items-center" style={{ backgroundImage: "url('/statbg.svg')" }}>
                <div className="container grid grid-cols-4 gap-[100px] mx-auto">
                    {/* Statistics Section */}
                    <div className="stat flex flex-col items-center justify-center">
                        <div className="flex gap-3 border-b border-white pb-2">
                            <img src="/Background.svg" alt="Students Icon"/>
                            <span className="text-white text-5xl font-black">
                                <CountUp start={0} end={25000} duration={2.5} separator="," />
                            </span>
                        </div>
                        <span className="text-white uppercase font-semibold text-lg text-center">Students</span>
                    </div>
                    <div className="stat flex flex-col items-center justify-center">
                        <div className="flex gap-3 border-b border-white pb-2">
                            <img src="/Background-1.svg" alt="Faculty Icon"/>
                            <span className="text-white text-5xl font-black">
                                <CountUp start={0} end={62} duration={2.5}/>
                            </span>
                        </div>
                        <span className="text-white uppercase font-semibold text-lg text-center">FACULTY</span>
                    </div>
                    <div className="stat flex flex-col items-center justify-center">
                        <div className="flex gap-3 border-b border-white pb-2">
                            <img src="/Background-2.svg" alt="Partner Universities Icon"/>
                            <span className="text-white text-5xl font-black">
                                <CountUp start={0} end={30} duration={2.5}/>
                            </span>
                        </div>
                        <span className="text-white uppercase font-semibold text-lg text-center">Partner Universities</span>
                    </div>
                    <div className="stat flex flex-col items-center justify-center">
                        <div className="flex gap-3 border-b border-white pb-2">
                            <img src="/Background-3.svg" alt="Alumni Employment Icon"/>
                            <span className="text-white text-5xl font-black">
                                <CountUp start={0} end={82} duration={2.5} suffix="%"/>
                            </span>
                        </div>
                        <span className="text-white uppercase font-semibold text-lg text-center">ALUMNI EMPLOYMENT</span>
                    </div>
                </div>
            </section>

            <NewsAndEvents />
        </div>
    );
};

export default HomePage;
