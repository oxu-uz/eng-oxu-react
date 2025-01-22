import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import {Link, useNavigate} from "react-router-dom";

const ScientificCouncilPage = () => {
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
                <img className="bg-image bg-green-900" src="/P1007495.MP4_snapshot_00.03.671.jpg" alt="Council for the Scientific Activities and Research" />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Council for the Scientific Activities and Research</h1>
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
                                    <span className="nav-link text-white">Council for the Scientific Activities and Research</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex mb-5 gap-10 px-10">
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
                                <h2 className="text-3xl font-bold text-[#00316b]">Purpose of the Council</h2>
                                <p className="text-lg text-gray-600 mt-4">
                                    The Research Committee in the Student Council at Asia International University
                                    fosters a culture of academic inquiry, innovation, and intellectual growth among
                                    students. The committee aims to guide and support students in pursuing research
                                    initiatives, enhancing their analytical and critical thinking skills. It serves as a
                                    platform to connect students with research opportunities, mentors, and resources,
                                    encouraging interdisciplinary collaboration. Additionally, it aims to elevate the
                                    university's status as students publish their research under the guidance of
                                    supervisors.
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
                                <h2 className="text-3xl font-bold text-[#00316b]">Role and Responsibilities</h2>
                                <p className="text-lg text-gray-600 mt-4">
                                    The Research Committee plays a pivotal role in promoting research activities among
                                    students. Below are the key roles and responsibilities:
                                </p>
                            </div>

                            <ul className="list-disc pl-5 text-gray-600 space-y-4">
                                <li><strong>Facilitating Research Opportunities:</strong> Encourage and assist students
                                    in undertaking research projects by connecting them with faculty mentors and
                                    academic resources.
                                </li>
                                <li><strong>Organizing Workshops and Seminars:</strong> Conduct training sessions on
                                    research methodologies, report writing, and publication ethics to enhance students'
                                    research skills and knowledge.
                                </li>
                                <li><strong>Promoting Research Dissemination:</strong> Support students in publishing
                                    their work in journals, conference proceedings, and university publications, and
                                    showcase their achievements through events like research fairs.
                                </li>
                                <li><strong>Maintaining a Research Repository:</strong> Develop and manage a database of
                                    student research outputs, ensuring accessibility and documentation for future
                                    reference and inspiration.
                                </li>
                            </ul>
                        </motion.div>
                    </section>
                </div>
                <aside className="w-1/2 max-h-max sticky top-32 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
    <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
        STUDENT LIFE IN AIU
        <img
            className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
            src="/arrow.svg"
            alt="Arrow"
        />
    </span>
                            <span className="text-7xl absolute font-bold opacity-10">AIU</span>
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

export default ScientificCouncilPage;
