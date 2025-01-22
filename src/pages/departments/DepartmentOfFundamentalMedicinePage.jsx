import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import { Link, useNavigate } from "react-router-dom";

const DepartmentOfFundamentalMedicinePage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    const navigate = useNavigate();

    const keyAreas = [
        "Human Anatomy",
        "Normal Physiology",
        "Histology, Embryology, and Cytology",
        "Latin Language",
        "Nursing, Care of Therapeutics, and Introduction to Medical Profession",
        "Microbiology and Virology",
        "Immunology and Parasitology",
        "Medical Bioethics",
        "Medical Philosophy",
    ];

    const navItems = [
        { label: "Academic Calendar", path: "/academics/academic-calendar" },
        { label: "Study Plan/ Curriculum", path: "/academics/study-plan" },
        { label: "Faculty development plan", path: "/about/aiu/faculty-development-plan" },
        { label: "Structure of the faculty", path: "/about/aiu/faculty-structure" },
        { label: "Department of General Science", path: "/about/departments/general-science" },
        { label: "Department of Fundamental Medicine", path: "/about/departments/fundamental-medicine" },
        { label: "Department of Clinical Science", path: "/about/departments/clinical-science" },
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "175px" }} data-cid="714">
                <img
                    className="bg-image bg-blue-800"
                    src="/PS5K8277.JPG"
                    alt="Department of Fundamental Medicine"
                />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Department of Fundamental Medicine</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link text-white" href="/en">
                                        Home <ChevronRight size="16" />
                                    </a>
                                </li>
                                <li className="sideNav-link">
                                    <span className="nav-link text-white">Department of Fundamental Medicine</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex px-10 gap-10 mb-5">
                <div>
                    {/* Overview Section */}
                    <section className="container mx-auto px-5 py-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={sectionVariants}
                            transition={{duration: 0.6}}
                        >
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[#00316b]">Overview</h2>
                                <p className="text-lg text-gray-600 mt-4">
                                    The Department of Fundamental Medicine is the cornerstone of medical education and
                                    research, focusing on the essential sciences that form the basis of medical
                                    knowledge
                                    and practice. It integrates multiple disciplines to provide a holistic understanding
                                    of the human body in health and disease.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    {/* Key Features Section */}
                    <section className="container mx-auto px-5 py-10 bg-gray-100 rounded-md">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={sectionVariants}
                            transition={{duration: 0.6}}
                        >
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[#00316b]">Key Features</h2>
                                <ul className="list-disc pl-5 text-gray-600 space-y-4">
                                    <li>
                                        <strong>Educational Foundation:</strong> Provides foundational coursework for
                                        medical students, emphasizing scientific principles critical for clinical
                                        training.
                                    </li>
                                    <li>
                                        <strong>Research and Innovation:</strong> Engages in cutting-edge research to
                                        advance understanding of diseases and develop medical solutions.
                                    </li>
                                    <li>
                                        <strong>Interdisciplinary Integration:</strong> Combines disciplines like
                                        anatomy, physiology, and genetics for a comprehensive approach to education and
                                        research.
                                    </li>
                                    <li>
                                        <strong>Clinical Relevance:</strong> Links basic sciences to clinical practices,
                                        ensuring students grasp the real-world application of their studies.
                                    </li>
                                    <li>
                                        <strong>Training and Skills Development:</strong> Equips students with critical
                                        scientific and technical skills through practical labs and workshops.
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </section>

                    {/* Key Areas Section */}
                    <section className="container mx-auto px-5 py-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={sectionVariants}
                            transition={{duration: 0.6}}
                        >
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[#00316b]">Key Areas Covered</h2>
                                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                    {keyAreas.map((area, index) => (
                                        <li key={index}>{area}</li>
                                    ))}
                                </ul>
                            </div>
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

export default DepartmentOfFundamentalMedicinePage;
