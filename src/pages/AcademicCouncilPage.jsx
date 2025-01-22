import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import {Link, useNavigate} from "react-router-dom";

const AcademicCouncilPage = () => {
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
        <div>
            <section className="page-heading-content mb-5" style={{height: "175px"}} data-cid="714">
                <img className="bg-image  bg-blue-900" src="/P1007495.MP4_snapshot_00.03.671.jpg"
                     alt="Council of the Academic Activities"/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Council of the Academic Activities</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link text-white" href="/en">
                                        Home<ChevronRight size="16"/>
                                    </a>
                                </li>
                                <li className="sideNav-link">
                                    <span className="nav-link text-white">Council of the Academic Activities</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex mb-5 w-full gap-10 px-10">
                <div className="bg-gray-50">
                    {/* Hero Section */}


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
                                    The purpose of an Academic Co-Curricular Committee in conducting activities like
                                    quizzes,
                                    presentations, Olympiads, science exhibitions, and similar events is to complement
                                    classroom
                                    learning by fostering critical thinking, creativity, and practical application of
                                    knowledge.
                                    These activities provide students with opportunities to explore subjects beyond the
                                    syllabus, develop essential life skills such as teamwork, communication, and
                                    problem-solving, and cultivate a competitive yet collaborative spirit. By engaging
                                    in
                                    these
                                    events, students gain exposure to diverse perspectives, enhance their intellectual
                                    curiosity, and build confidence, preparing them for academic and professional
                                    challenges
                                    in
                                    a dynamic world.
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
                                    The Academic Co-Curricular Committee plays a crucial role in organizing, promoting,
                                    and
                                    evaluating various academic activities and events. Below are the key roles and
                                    responsibilities:
                                </p>
                            </div>

                            <ul className="list-disc pl-5 text-gray-600 space-y-4">
                                <li><strong>Organizing and Promoting Activities:</strong> Plan and coordinate academic
                                    and
                                    co-curricular events such as quizzes, debates, Olympiads, science exhibitions, and
                                    seminars
                                    to enrich students' learning experiences as mentioned in the academic calendar.
                                </li>
                                <li><strong>Encouraging Student Participation:</strong> Motivate and guide students to
                                    actively
                                    participate in events, ensuring inclusivity and equal opportunities for all.
                                </li>
                                <li><strong>Collaboration and Resource Management:</strong> Collaborate with faculty,
                                    external
                                    experts, and resource persons to facilitate workshops, competitions, and other
                                    programs,
                                    while managing the required logistics and materials.
                                </li>
                                <li><strong>Evaluation and Feedback:</strong> Assess the effectiveness of activities,
                                    gather
                                    feedback from participants, and implement improvements for future initiatives to
                                    align
                                    with
                                    the committee’s educational goals.
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
    )
        ;
};

export default AcademicCouncilPage;
