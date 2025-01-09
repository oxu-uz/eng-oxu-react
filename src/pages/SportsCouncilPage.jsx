import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import {Link, useNavigate} from "react-router-dom";

const SportsCouncilPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    const navigate = useNavigate();

    const navItems = [
        { label: "Council of the Academic Activities", path: "/academic-council" },
        { label: "Council for the Scientific Activities", path: "/scientific-council" },
        { label: "Council for Sport", path: "/sports-council" },
        { label: "Council for Cultural Activities", path: "/cultural-council" },
        { label: "Council for IT/ Media", path: "/it-media-council" },
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "175px" }} data-cid="714">
                <img className="bg-image bg-blue-800" src="/P1007495.MP4_snapshot_00.03.671.jpg" alt="Council for Sport" />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Council for Sport</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link text-white" href="/en">
                                        Home<ChevronRight size="16" />
                                    </a>
                                </li>
                                <li className="sideNav-link">
                                    <span className="nav-link text-white">Council for Sport</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex gap-10 px-10 mb-5">
                <div>
                    {/* Purpose Section */}
                    <section className="container mx-auto px-5 py-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={sectionVariants}
                            transition={{duration: 0.6}}
                        >
                            <div className=" mb-8">
                                <h2 className="text-3xl font-black text-[#00316b]">Purpose of the Council</h2>
                                <p className="text-lg text-gray-600 mt-4">
                                    The Sports Committee at Asia International University aims to promote physical
                                    fitness, teamwork, and a spirit of healthy competition among students. By organizing
                                    various sports events, tournaments, and recreational activities, the committee
                                    encourages active participation and fosters a culture of wellness on campus. The
                                    council helps students enhance their leadership and collaboration skills while
                                    focusing on holistic development through sports.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    {/* Roles and Responsibilities Section */}
                    <section className="container mx-auto px-5 py-10 bg-gray-100 rounded-md">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={sectionVariants}
                            transition={{duration: 0.6}}
                        >
                            <div className=" mb-8">
                                <h2 className="text-3xl font-black text-[#00316b]">Role and Responsibilities</h2>
                                <p className="text-lg text-gray-600 mt-4">
                                    The Sports Committee plays a key role in promoting fitness and sportsmanship among
                                    students. Below are the primary roles and responsibilities:
                                </p>
                            </div>

                            <ul className="list-disc pl-5 text-gray-600 space-y-4">
                                <li><strong>Organizing Sports Events and Tournaments:</strong> Plan, coordinate, and
                                    oversee intra- and inter-collegiate sports competitions to encourage participation
                                    and showcase athletic talents.
                                </li>
                                <li><strong>Promoting Physical Fitness:</strong> Initiate programs, workshops, and
                                    activities that emphasize the importance of health, fitness, and an active lifestyle
                                    among students.
                                </li>
                                <li><strong>Supporting Team Development:</strong> Facilitate the formation and training
                                    of sports teams, providing resources, coaching support, and practice schedules to
                                    enhance performance.
                                </li>
                                <li><strong>Managing Sports Facilities and Resources:</strong> Ensure the proper
                                    maintenance and availability of sports equipment and facilities, while addressing
                                    the needs and concerns of student athletes.
                                </li>
                            </ul>
                        </motion.div>
                    </section>
                </div>
                <aside className="w-1/2 max-h-max sticky top-32 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
    <span className="uppercase p-1 px-2 text-lg font-black flex items-center gap-3 z-10">
        STUDENT LIFE IN AIU
        <img
            className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
            src="/arrow.svg"
            alt="Arrow"
        />
    </span>
                            <span className="text-7xl absolute font-black opacity-10">AIU</span>
                            <img
                                src="/Vector.svg"
                                className="absolute opacity-10 h-20 right-0 bottom-0"
                                alt="Vector"
                            />
                        </li>

                        {navItems.map((item, index) => (
                            <li
                                onClick={() => navigate(item.path)}
                                key={index}
                                className={`sideNav-links transition-colors cursor-pointer ${
                                    location.pathname === item.path ? "sideNav-active" : ""
                                }`}
                            >
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>

        </div>
    );
};

export default SportsCouncilPage;
