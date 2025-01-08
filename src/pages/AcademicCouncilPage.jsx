import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";

const AcademicCouncilPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "125px" }} data-cid="714">
                <img className="bg-image bg-blue-900" src="/thumb_362_1920_0_0_0_auto.jpg" alt="Council of the Academic Activities" />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Council of the Academic Activities</h1>
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
                                    <span className="nav-link text-white">Council of the Academic Activities</span>
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
                            The purpose of an Academic Co-Curricular Committee in conducting activities like quizzes, presentations, Olympiads, science exhibitions, and similar events is to complement classroom learning by fostering critical thinking, creativity, and practical application of knowledge. These activities provide students with opportunities to explore subjects beyond the syllabus, develop essential life skills such as teamwork, communication, and problem-solving, and cultivate a competitive yet collaborative spirit. By engaging in these events, students gain exposure to diverse perspectives, enhance their intellectual curiosity, and build confidence, preparing them for academic and professional challenges in a dynamic world.
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
                            The Academic Co-Curricular Committee plays a crucial role in organizing, promoting, and evaluating various academic activities and events. Below are the key roles and responsibilities:
                        </p>
                    </div>

                    <ul className="list-disc pl-5 text-gray-600 space-y-4">
                        <li><strong>Organizing and Promoting Activities:</strong> Plan and coordinate academic and co-curricular events such as quizzes, debates, Olympiads, science exhibitions, and seminars to enrich students' learning experiences as mentioned in the academic calendar.</li>
                        <li><strong>Encouraging Student Participation:</strong> Motivate and guide students to actively participate in events, ensuring inclusivity and equal opportunities for all.</li>
                        <li><strong>Collaboration and Resource Management:</strong> Collaborate with faculty, external experts, and resource persons to facilitate workshops, competitions, and other programs, while managing the required logistics and materials.</li>
                        <li><strong>Evaluation and Feedback:</strong> Assess the effectiveness of activities, gather feedback from participants, and implement improvements for future initiatives to align with the committee’s educational goals.</li>
                    </ul>
                </motion.div>
            </section>

            {/* Image Section */}
            <section className="text-center mt-8 mb-16">
                <Image
                    src="/images/academic_activities.jpg"
                    alt="Council of Academic Activities"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </section>
        </div>
    );
};

export default AcademicCouncilPage;
