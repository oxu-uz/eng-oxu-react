import React from 'react';
import {ChevronRight} from "lucide-react";
import {FaEye, FaRegEye} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {Image} from "antd";

const Vision = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        {label: "Vision", path: "/about/aiu/vision"},
        {label: "Mission", path: "/about/aiu/mission"},
        {label: "History", path: "/about/aiu/history"},
        // {label: "Administration", path: "/about/aiu/administration"},
        {label: "Vice-rector for academic affairs", path: "/about/aiu/vice-rector/academic"},
        {
            label: "First vice-rector for youth policy and recreational and educational affairs",
            path: "/about/aiu/vice-rector/youth"
        },
        {label: "Vice-rector for scientific affairs and innovations", path: "/about/aiu/vice-rector/innovation"},
        {label: "Vice-rector for financial and economic affairs", path: "/about/aiu/vice-rector/financial"},
        {label: "Head of Administration Department", path: "/about/aiu/registrar"},
    ];

    return (
        <div>
            {/*<section className="page-heading-content" data-cid="714">*/}
            {/*    <img className="bg-image" src="/headerbg3.svg" alt="Header background"/>*/}
            {/*    <div className="heading-content">*/}
            {/*        <div className="container mx-auto px-5 title">*/}
            {/*            <h1 className="text-2xl md:text-4xl font-bold">Vision in Medical Education</h1>*/}
            {/*        </div>*/}
            {/*        <div className="breadcrumb">*/}
            {/*            <div className="container mx-auto">*/}
            {/*                <ul className="flex flex-wrap items-center text-sm">*/}
            {/*                    <li className="sideNav-link">*/}
            {/*                        <a className="nav-link flex items-center" href="/en">*/}
            {/*                            Home <ChevronRight size="16"/>*/}
            {/*                        </a>*/}
            {/*                    </li>*/}
            {/*                    <li className="sideNav-link">*/}
            {/*                        <span className="nav-link flex items-center">*/}
            {/*                            About <ChevronRight size="16"/>*/}
            {/*                        </span>*/}
            {/*                    </li>*/}
            {/*                    <li className="sideNav-link">*/}
            {/*                        <span className="nav-link flex items-center">*/}
            {/*                            AIU <ChevronRight size="16"/>*/}
            {/*                        </span>*/}
            {/*                    </li>*/}
            {/*                    <li className="sideNav-link">*/}
            {/*                        <a className="nav-link" href="/about/aiu/vision">*/}
            {/*                            Vision*/}
            {/*                        </a>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <div data-v-1b1c0a2c=""
                 className="container-fluid statistics"
                 style={{
                     backgroundImage: 'url("/4343.png")'
                 }}>
                <div data-v-1b1c0a2c="" className="container mx-auto">
                    <div data-v-1b1c0a2c="" className="row">
                        <div data-v-1b1c0a2c="" className="col-12 text-center inner">
                            <div data-v-1b1c0a2c="" className="d-flex mb-6 justify-content-center">
                                <div data-v-1b1c0a2c=""/>
                                <div data-v-1b1c0a2c="" className="flex justify-center univ-title">
                                    <motion.img
                                        data-v-1b1c0a2c=""
                                        className="h-32"
                                        src="/logoo.svg"
                                        alt=""
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 1}}
                                    />
                                </div>
                                <motion.h1
                                    className="title p-5 bg-[#012152]/90 text-[22px] mt-5"
                                    initial={{y: -50, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    transition={{duration: 1}}
                                >
                                    Vision- Restoring Bukhara’s historical reputation as a center of knowledge and
                                    learning.
                                </motion.h1>
                            </div>

                            <motion.div
                                data-v-1b1c0a2c=""
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.5, duration: 1}}
                            >

                                <motion.ul
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 1, duration: 1}}
                                >
                                    <div className="numbers text-white">
                                        <ul>
                                            <motion.li
                                                initial={{opacity: 0, x: -50}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 1.5, duration: 1}}
                                            >
                                                Asia International University envisions the full revival and
                                                transformation of Bukhara into a 21st-century global hub of higher
                                                learning, research, and innovation. Bukhara, once one of the most
                                                celebrated centers of knowledge along the ancient Silk Road, was a
                                                renowned seat of intellectual achievement, particularly during the
                                                medieval Islamic Golden Age. It was home to legendary scholars,
                                                philosophers, and thinkers such as Avicenna (Ibn Sina), al-Biruni, and
                                                al-Khwarizmi, whose groundbreaking work in medicine, mathematics,
                                                astronomy, and philosophy not only shaped civilizations but also
                                                influenced the course of world history. For centuries, Bukhara attracted
                                                students and scholars from the farthest reaches of Asia, Europe, and
                                                Africa, creating a vibrant exchange of ideas that laid the foundations
                                                for many modern scientific and cultural advancements.
                                            </motion.li>
                                        </ul>
                                    </div>

                                    <div className="numbers text-white">
                                        <ul>
                                            <motion.li
                                                initial={{opacity: 0, x: -50}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 2, duration: 1}}
                                            >
                                                At Asia International University, we are driven by a mission to restore
                                                that legacy—reimagining Bukhara not only as a city of immense historical
                                                importance, but as a thriving academic destination for students and
                                                scholars from across the globe. We seek to reignite the intellectual
                                                spirit that once made Bukhara a center of learning, using it as a
                                                springboard for educational innovation in the 21st century.
                                            </motion.li>
                                        </ul>
                                    </div>

                                    <div className="numbers text-white">
                                        <ul>
                                            <motion.li
                                                initial={{opacity: 0, x: -50}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 2, duration: 1}}
                                            >
                                                Our vision is to build a university that blends the timeless wisdom of
                                                the past with the transformative energy of the future. Through
                                                forward-thinking educational programs, internationally recognized
                                                faculty, advanced research capabilities, and strong global partnerships,
                                                we aim to provide our students with the tools, mindset, and ethical
                                                foundation necessary to excel in a rapidly evolving world. We are
                                                committed to fostering innovation, critical thinking, and leadership
                                                while preserving the cultural heritage and intellectual spirit that once
                                                defined Bukhara.
                                            </motion.li>
                                        </ul>
                                    </div>

                                    <div className="numbers text-white">
                                        <ul>
                                            <motion.li
                                                initial={{opacity: 0, x: -50}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 2, duration: 1}}
                                            >
                                                Asia International University aspires to become a place where diversity
                                                is celebrated, curiosity is encouraged, and ambition is nurtured. Our
                                                campus will be more than just a space for learning—it will be a
                                                crossroads of ideas, cultures, and disciplines, where young minds are
                                                shaped not only to succeed professionally but also to contribute
                                                meaningfully to their societies.
                                            </motion.li>
                                        </ul>
                                    </div>

                                    <div className="numbers text-white">
                                        <ul>
                                            <motion.li
                                                initial={{opacity: 0, x: -50}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 2, duration: 1}}
                                            >
                                                By reviving the scholarly brilliance of Bukhara and adapting it to meet
                                                the challenges and opportunities of the modern world, we aim to
                                                establish Asia International University as a beacon of academic
                                                excellence and cultural dialogue—not only in Central Asia, but globally.
                                                In doing so, we will honor the city's storied past, including its time
                                                as the center of the renowned Samanid dynasty, while lighting the way
                                                for a new generation of global citizens, innovators, and changemakers.
                                            </motion.li>
                                        </ul>
                                    </div>
                                </motion.ul>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="container mx-auto flex flex-col md:flex-row gap-5 mb-10 px-5">*/}
            {/*    <p className="text-gray-800 font-medium relative overflow-hidden max-w-full md:max-w-4xl">*/}
            {/*        <span className="font-semibold block mb-4 text-xl text-center">Vision- Restoring Bukhara’s historical reputation as a center of knowledge and learning.</span>*/}
            {/*        Asia International University envisions the full revival and transformation of Bukhara into a*/}
            {/*        21st-century global hub of higher learning, research, and innovation. Bukhara, once one of the most*/}
            {/*        celebrated centers of knowledge along the ancient Silk Road, was a renowned seat of intellectual*/}
            {/*        achievement, particularly during the medieval Islamic Golden Age. It was home to legendary scholars,*/}
            {/*        philosophers, and thinkers such as Avicenna (Ibn Sina), al-Biruni, and al-Khwarizmi, whose*/}
            {/*        groundbreaking work in medicine, mathematics, astronomy, and philosophy not only shaped*/}
            {/*        civilizations but also influenced the course of world history. For centuries, Bukhara attracted*/}
            {/*        students and scholars from the farthest reaches of Asia, Europe, and Africa, creating a vibrant*/}
            {/*        exchange of ideas that laid the foundations for many modern scientific and cultural advancements.*/}

            {/*        At Asia International University, we are driven by a mission to restore that legacy—reimagining*/}
            {/*        Bukhara not only as a city of immense historical importance, but as a thriving academic destination*/}
            {/*        for students and scholars from across the globe. We seek to reignite the intellectual spirit that*/}
            {/*        once made Bukhara a center of learning, using it as a springboard for educational innovation in the*/}
            {/*        21st century.*/}

            {/*        Our vision is to build a university that blends the timeless wisdom of the past with the*/}
            {/*        transformative energy of the future. Through forward-thinking educational programs, internationally*/}
            {/*        recognized faculty, advanced research capabilities, and strong global partnerships, we aim to*/}
            {/*        provide our students with the tools, mindset, and ethical foundation necessary to excel in a rapidly*/}
            {/*        evolving world. We are committed to fostering innovation, critical thinking, and leadership while*/}
            {/*        preserving the cultural heritage and intellectual spirit that once defined Bukhara.*/}

            {/*        Asia International University aspires to become a place where diversity is celebrated, curiosity is*/}
            {/*        encouraged, and ambition is nurtured. Our campus will be more than just a space for learning—it will*/}
            {/*        be a crossroads of ideas, cultures, and disciplines, where young minds are shaped not only to*/}
            {/*        succeed professionally but also to contribute meaningfully to their societies.*/}

            {/*        By reviving the scholarly brilliance of Bukhara and adapting it to meet the challenges and*/}
            {/*        opportunities of the modern world, we aim to establish Asia International University as a beacon of*/}
            {/*        academic excellence and cultural dialogue—not only in Central Asia, but globally. In doing so, we*/}
            {/*        will honor the city's storied past, including its time as the center of the renowned Samanid*/}
            {/*        dynasty, while lighting the way for a new generation of global citizens, innovators, and*/}
            {/*        changemakers.*/}
            {/*        <FaRegEye size="200" className="opacity-10 absolute right-10 bottom-0 hidden md:block"/>*/}
            {/*    </p>*/}
            {/*    <aside className="w-full md:w-1/3 overflow-hidden">*/}
            {/*        <ul className="sideNav">*/}
            {/*            <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">*/}
            {/*                <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">*/}
            {/*                    University*/}
            {/*                    <img*/}
            {/*                        className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"*/}
            {/*                        src="/arrow.svg"*/}
            {/*                        alt="Arrow"*/}
            {/*                    />*/}
            {/*                </span>*/}
            {/*                <span className="text-7xl absolute font-bold opacity-10">AIU</span>*/}
            {/*                <img*/}
            {/*                    src="/Vector.svg"*/}
            {/*                    className="absolute opacity-10 h-20 right-0 bottom-0"*/}
            {/*                    alt="Vector"*/}
            {/*                />*/}
            {/*            </li>*/}
            {/*            {navItems.map((item, index) => (*/}
            {/*                <li*/}
            {/*                    onClick={() => navigate(item.path)}*/}
            {/*                    key={index}*/}
            {/*                    className={`sideNav-links transition-colors cursor-pointer p-2 ${location.pathname === item.path ? "sideNav-active" : ""}`}*/}
            {/*                >*/}
            {/*                    <Link to={item.path}>{item.label}</Link>*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </aside>*/}
            {/*</div>*/}
        </div>
    );
};

export default Vision;
