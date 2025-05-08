import React from 'react';
import {ChevronRight} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';

const Mba = () => {
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
                    src="/mba.jpg"
                    alt="Business executives in meeting"
                />
                <div className="absolute inset-0 bg-[#012c6e]/70 flex flex-col justify-end">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                        >
                            Master of Business Administration (MBA)
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-lg md:text-xl text-white max-w-2xl"
                        >
                            Joint Program with WUST – USA
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
                                    <a className="text-white font-medium" href="/admissions/mba">
                                        MBA
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
                            The MBA program at AIU is a transformative graduate-level experience designed to accelerate careers in leadership, innovation, and global business. With the opportunity to complete the second year at WUST in the USA, students benefit from direct exposure to international business environments.
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
                                    title: "Executive-Level Curriculum",
                                    content: "Aligned with U.S. and global business standards for maximum career impact"
                                },
                                {
                                    title: "Immersive Learning",
                                    content: "Hands-on experience through simulations, consulting projects, and networking events"
                                },
                                {
                                    title: "Global Faculty Access",
                                    content: "Learn from American faculty, industry professionals, and cross-cultural exchange opportunities"
                                },
                                {
                                    title: "International Exposure",
                                    content: "Direct experience with global business practices through our U.S. partnership"
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

                    {/* Study Option */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Study Option
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <ul className="space-y-3 text-sm md:text-base">
                                <li className="flex items-start">
                                    <span className="font-semibold mr-2">• 1+1 Pathway:</span>
                                    <span>1 year at AIU + 1 year at WUST (USA)</span>
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
                                AIU-WUST MBA graduates are prepared for senior roles in management, finance, international trade, policy, and entrepreneurship — with the added prestige of U.S.-based education and potential post-study opportunities in the USA.
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
                                <li>Bachelor's degree from an accredited institution</li>
                                <li>Minimum 2 years professional work experience (preferred)</li>
                                <li>Strong academic record</li>
                                <li>English language proficiency</li>
                                <li>Statement of purpose and letters of recommendation</li>
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
                                Ready to transform your career with our internationally recognized MBA program? Our admissions team will guide you through the application process.
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
                            Accelerate Your Leadership Journey
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <p className="text-sm md:text-base">
                                Our AIU-WUST MBA program is designed for professionals ready to take their careers to the next level with global perspective and executive skills. Join a network of business leaders transforming organizations worldwide.
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

export default Mba;