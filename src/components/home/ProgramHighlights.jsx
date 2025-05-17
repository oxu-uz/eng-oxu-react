import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProgramHighlights = () => {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleFindPrograms = () => {
        navigate('/find-programs');
    };

    const programs = [
        {
            title: "HEAL & SERVE",
            subtitle: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            title: "LEAD & STRATEGIZE",
            subtitle: "BSBA (Bachelor of Science in Business Administration)",
            image: "/bsba.jfif"
        },
        {
            title: "CODE & INNOVATE",
            subtitle: "BSIT (Bachelor of Science in Information Technology)",
            image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        },
        {
            title: "Global & Strategic Leadership",
            subtitle: "MBA (Master of Business Administration)",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-8">
            <div className="max-w-[1663px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Images with Text Overlays */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                className="relative h-80 overflow-hidden shadow-lg"
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                initial={false}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover"
                                    animate={{
                                        filter: hoveredIndex === index ? 'brightness(0.7)' : 'brightness(0.9)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                <motion.div
                                    className="absolute inset-0 flex items-end p-6"
                                    initial={false}
                                    animate={{
                                        background: hoveredIndex === index
                                            ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)'
                                            : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-white">
                                        <motion.h3
                                            animate={{
                                                y: hoveredIndex === index ? 0 : 10,
                                                opacity: hoveredIndex === index ? 1 : 0.9
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="text-xl uppercase mb-1"
                                        >
                                            {program.title}
                                        </motion.h3>
                                        <motion.p
                                            animate={{
                                                y: hoveredIndex === index ? 0 : 5,
                                                opacity: hoveredIndex === index ? 1 : 0.8
                                            }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="text-base font-semibold"
                                        >
                                            {program.subtitle}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="space-y-16">
                            <div className="max-w-[70%]">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#012152] mb-4">
                                    Breaking Borders, Building Futures: Gateway to Global Education
                                </h3>
                                <p className="text-gray-600 text-xl mb-6">
                                    At AIU, we don't just teach—we ignite ambition. With world-class faculty, hands-on learning, and a global outlook, we empower students to become changemakers in medicine, technology, business, and beyond.
                                </p>
                                <p className="text-gray-600 text-lg font-semibold mb-8">
                                    Your future isn't just waiting—it starts here.
                                </p>
                            </div>

                            <button
                                onClick={handleFindPrograms}
                                className="relative view-all-btn rounded-lg"
                            >
                                <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat " />
                                FIND YOUR PROGRAM
                                {/*<svg*/}
                                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                {/*    className="h-5 w-5 ml-2"*/}
                                {/*    viewBox="0 0 20 20"*/}
                                {/*    fill="currentColor"*/}
                                {/*>*/}
                                {/*    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />*/}
                                {/*</svg>*/}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramHighlights;