import React from 'react';
import {ChevronRight} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';

const Bsba = () => {
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
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-64 md:h-96 overflow-hidden mb-5">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/66e36e9d6e251891f12cc791_Managed IT Services.jpg"
                    alt="Business professionals in meeting"
                />
                <div className="absolute inset-0 bg-[#012c6e]/70 flex flex-col justify-end">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                        >
                            Bachelor of Science in Business Administration (BSBA)
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-lg md:text-xl text-white max-w-2xl"
                        >
                            In Collaboration with WUST – USA
                        </motion.p>

                        {/* Breadcrumb */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="breadcrumb py-3"
                        >
                            <ul className="flex flex-wrap items-center text-sm md:text-base text-white/80">
                                <li className="flex items-center">
                                    <a className="hover:text-white flex items-center" href="/">
                                        Home <ChevronRight className="mx-1" size="16"/>
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center mx-1">
                                        Admissions <ChevronRight className="mx-1" size="16"/>
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center mx-1">
                                        Find Programs <ChevronRight className="mx-1" size="16"/>
                                    </span>
                                </li>
                                <li>
                                    <a className="text-white font-medium" href="/admissions/bsba">
                                        BSBA
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row px-4 md:px-6 lg:px-10 gap-6 lg:gap-10 mb-10">
                {/* Content Section */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1 text-gray-800 space-y-8">
                    {/* Introduction */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <p className="text-base md:text-lg font-medium leading-relaxed">
                            The BSBA program at AIU, with transfer options to WUST, USA, is designed for future business leaders who aspire to compete on the global stage. Students gain a solid understanding of business operations, leadership, entrepreneurship, and international markets.
                        </p>
                    </motion.section>

                    {/* Key Highlights */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Key Highlights
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "Global Business Focus",
                                    content: "Focus on global business trends, digital innovation, and strategic thinking"
                                },
                                {
                                    title: "Practical Learning",
                                    content: "Real-world projects and U.S.-style case studies to enhance practical understanding"
                                },
                                {
                                    title: "International Experience",
                                    content: "Opportunities for internships in both local and U.S. markets"
                                },
                                {
                                    title: "Transfer Options",
                                    content: "Flexible pathways to continue studies at WUST in the USA"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.3 }}
                                    className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm"
                                >
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base">
                                        {item.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Study Options */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Study Options
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <ul className="space-y-3 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="font-semibold mr-2">• 1+3 Pathway:</span>
                                    <span>1 year at AIU + 3 years at WUST (USA)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-semibold mr-2">• 2+2 Pathway:</span>
                                    <span>2 years at AIU + 2 years at WUST (USA)</span>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Career Opportunities */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Career Opportunities
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <p className="text-sm md:text-base">
                                Graduates are equipped for international careers in finance, marketing, operations, consulting, and entrepreneurship, with the added advantage of a U.S. university experience.
                            </p>
                        </div>
                    </motion.section>

                    {/* Admission Requirements */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Admission Requirements
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                                <li>High school diploma or equivalent</li>
                                <li>Strong academic record</li>
                                <li>English language proficiency</li>
                                <li>Personal statement</li>
                                <li>Letters of recommendation (optional)</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* How to Apply */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            How to Apply
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <p className="text-sm md:text-base mb-4">
                                Ready to start your journey to becoming a global business leader? Our admissions team is here to guide you through the application process.
                            </p>
                            <button
                                onClick={() => navigate('/admissions/apply')}
                                className="bg-[#012c6e] text-white px-6 py-2 rounded-md hover:bg-[#012152] transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    </motion.section>

                    {/* Join Us */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Become a Global Business Leader
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <p className="text-sm md:text-base">
                                At AIU, we prepare you for success in the international business arena. With our partnership with WUST in the USA, you'll gain the knowledge, skills, and global perspective needed to excel in today's competitive business world.
                            </p>
                        </div>
                    </motion.section>
                </div>

                {/* Side Navigation */}
                <aside className="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 lg:sticky lg:top-32 h-max">
                    <div className="lg:pl-6">
                        <motion.ul
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="sideNav bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-3 md:p-4 group">
                                <span className="uppercase p-1 px-2 text-base md:text-lg font-bold flex items-center gap-3 z-10">
                                    Admission
                                    <img
                                        className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
                                        src="/arrow.svg"
                                        alt="Arrow"
                                    />
                                </span>
                                <span className="text-4xl md:text-5xl lg:text-7xl absolute font-bold opacity-10">AIU</span>
                                <img
                                    src="/Vector.svg"
                                    className="absolute opacity-10 h-12 md:h-16 lg:h-20 right-0 bottom-0"
                                    alt="Vector"
                                />
                            </li>

                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.3 }}
                                    onClick={() => navigate(item.path)}
                                    className={`sideNav-links transition-colors cursor-pointer p-3 md:p-4 ${
                                        location.pathname === item.path ? "sideNav-active" : ""
                                    }`}
                                >
                                    <span className="block text-sm md:text-base">{item.label}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Bsba;