import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import {Link, useNavigate} from "react-router-dom";

const ITMediaCouncilPage = () => {
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
                <img className="bg-image bg-blue-800" src="/P1007495.MP4_snapshot_00.03.671.jpg" alt="Council for IT/Media" />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Council for IT/Media</h1>
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
                                    <span className="nav-link text-white">Council for IT/Media</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex px-10 gap-10 mb-5">
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
                                    The IT/Media Committee at Asia International University aims to harness the power of
                                    technology and digital media to enhance communication, collaboration, and engagement
                                    both on and off-campus. The committee focuses on managing digital platforms,
                                    promoting events, and ensuring efficient dissemination of information. Additionally,
                                    the committee provides opportunities for students to develop technical and creative
                                    skills while showcasing their talents in areas like media production, graphic
                                    design, and video editing.
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
                                    The IT/Media Committee plays a crucial role in managing the university’s digital
                                    presence, supporting campus events, and fostering students’ technical creativity.
                                    Here are the primary roles and responsibilities:
                                </p>
                            </div>

                            <ul className="list-disc pl-5 text-gray-600 space-y-4">
                                <li><strong>Managing Digital Communication:</strong> Oversee the creation and
                                    maintenance of social media pages, websites, and other digital platforms to ensure
                                    timely updates about events and university news.
                                </li>
                                <li><strong>Promoting Campus Activities:</strong> Design and create promotional
                                    materials, including videos, images, posters, and flyers to highlight student
                                    council initiatives, events, and achievements.
                                </li>
                                <li><strong>Technical Support:</strong> Provide technical assistance for events, such as
                                    audio-visual setup, live streaming, and digital presentations, ensuring smooth
                                    execution of programs.
                                </li>
                                <li><strong>Collaboration:</strong> Collaborate with other committees to enhance
                                    students’ technical skills in areas like graphic design, video editing, and social
                                    media management. Encourage cross-collaboration for more creative and engaging
                                    campaigns.
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

export default ITMediaCouncilPage;
