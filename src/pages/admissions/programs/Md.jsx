import React from 'react';
import {ChevronRight} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';

const Md = () => {
    const navigate = useNavigate();

    const navItems = [
        { label: "MD", path: "/admissions/md" },
        { label: "MBBS", path: "/admissions/mbbs" }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-64 md:h-96 overflow-hidden mb-5">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/doctor-doing-their-work-pediatrics-office.jpg"
                    alt="Doctor working in pediatrics office"
                />
                <div className="absolute inset-0 bg-[#012c6e]/70 flex flex-col justify-end">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                        >
                            MD Program
                        </motion.h1>

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
                                    <a className="text-white font-medium" href="/admissions/md">
                                        MD
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
                            Welcome to the MD Program at Asia International University (AIU), where we offer a comprehensive
                            and rigorous medical education that prepares you to become a competent and compassionate
                            healthcare professional.
                        </p>
                    </motion.section>

                    {/* Why Choose AIU */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Why Choose AIU for Your Medical Education?
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "High-Quality Education",
                                    content: "Our MD program combines cutting-edge research, innovative teaching methods, and a strong emphasis on clinical practice. Our curriculum is continuously updated to reflect the latest advancements in medicine."
                                },
                                {
                                    title: "Experienced Faculty",
                                    content: "Learn from a diverse team of experienced and dedicated faculty members who are leaders in their fields. Our professors are active practitioners and researchers."
                                },
                                {
                                    title: "State-of-the-Art Facilities",
                                    content: "Our university is equipped with state-of-the-art laboratories, simulation centers, and research facilities that allow you to apply your theoretical knowledge."
                                },
                                {
                                    title: "Clinical Training and Internships",
                                    content: "Gain practical experience through extensive clinical training and internships at leading hospitals and medical centers with our healthcare institution partners."
                                },
                                {
                                    title: "International Opportunities",
                                    content: "Participate in exchange programs, attend international conferences, and collaborate on research projects with peers from around the world."
                                },
                                {
                                    title: "Supportive Learning Environment",
                                    content: "We prioritize your success with academic advising, mentorship programs, and personalized support services."
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

                    {/* Program Structure */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Program Structure
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <p className="text-sm md:text-base">
                                Our MD program spans six years, with the first two years focused on preclinical studies.
                                The next three years involve intensive clinical training with rotations in various medical
                                specialties. The final year is dedicated to advanced clinical practice and preparation for
                                licensing exams.
                            </p>
                        </div>
                    </motion.section>

                    {/* Admission Requirements */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Admission Requirements
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <p className="text-sm md:text-base mb-3">
                                We seek motivated and academically strong candidates who are ready for the challenges of
                                medical education. Admission is competitive, and we look for applicants who demonstrate:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                                <li>A solid academic background in sciences</li>
                                <li>A strong commitment to the medical profession</li>
                                <li>Relevant extracurricular activities</li>
                                <li>Proficiency in English</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* How to Apply */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            How to Apply
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <p className="text-sm md:text-base mb-4">
                                Ready to embark on your medical journey? Our admissions team will guide you through the
                                application process. Visit our admissions page for requirements and deadlines.
                            </p>
                            <button
                                onClick={() => navigate('/admissions/apply')}
                                className="bg-[#012c6e] text-white px-6 py-2 rounded-md hover:bg-[#0a37b3] transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    </motion.section>

                    {/* Join Us */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Join Us at Asia International University
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm">
                            <p className="text-sm md:text-base">
                                Becoming a doctor is a calling. At AIU, we're dedicated to helping you achieve your dream
                                of becoming a skilled and compassionate physician. Start your journey with us today.
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
                                    FIND PROGRAMS
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

export default Md;