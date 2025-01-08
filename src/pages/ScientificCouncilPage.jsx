import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";

const ScientificCouncilPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "125px" }} data-cid="714">
                <img className="bg-image bg-green-900" src="/thumb_362_1920_0_0_0_auto.jpg" alt="Council for the Scientific Activities and Research" />
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

            {/* Purpose Section */}
            <section className="container mx-auto px-5 py-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Purpose of the Council</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            The Research Committee in the Student Council at Asia International University fosters a culture of academic inquiry, innovation, and intellectual growth among students. The committee aims to guide and support students in pursuing research initiatives, enhancing their analytical and critical thinking skills. It serves as a platform to connect students with research opportunities, mentors, and resources, encouraging interdisciplinary collaboration. Additionally, it aims to elevate the university's status as students publish their research under the guidance of supervisors.
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
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Role and Responsibilities</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            The Research Committee plays a pivotal role in promoting research activities among students. Below are the key roles and responsibilities:
                        </p>
                    </div>

                    <ul className="list-disc pl-5 text-gray-600 space-y-4">
                        <li><strong>Facilitating Research Opportunities:</strong> Encourage and assist students in undertaking research projects by connecting them with faculty mentors and academic resources.</li>
                        <li><strong>Organizing Workshops and Seminars:</strong> Conduct training sessions on research methodologies, report writing, and publication ethics to enhance students' research skills and knowledge.</li>
                        <li><strong>Promoting Research Dissemination:</strong> Support students in publishing their work in journals, conference proceedings, and university publications, and showcase their achievements through events like research fairs.</li>
                        <li><strong>Maintaining a Research Repository:</strong> Develop and manage a database of student research outputs, ensuring accessibility and documentation for future reference and inspiration.</li>
                    </ul>
                </motion.div>
            </section>

            {/* Image Section */}
            <section className="text-center mt-8 mb-16">
                <Image
                    src="/images/scientific_research.jpg"
                    alt="Council for Scientific Activities and Research"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </section>
        </div>
    );
};

export default ScientificCouncilPage;
