import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";

const StudentCouncilPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "125px" }} data-cid="714">
                <img className="bg-image bg-blue-900" src="/thumb_362_1920_0_0_0_auto.jpg" alt="AIU International Students Council" />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">AIU International Students Council</h1>
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
                                    <span className="nav-link text-white">AIU International Students Council</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Purpose of the Council Section */}
            <section className="container mx-auto px-5 py-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Purpose of Establishing the Student Council</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            The purpose of establishing a Student Council at Asia International University (AIU) is to provide students with a platform to develop essential leadership, teamwork, and organizational skills, which are crucial for their future careers in healthcare. The Student Council will help students improve their time management, multitasking, and problem-solving abilities by actively engaging them in campus activities and event planning. It will also foster a collaborative environment, encouraging students to work together and represent the interests of their peers, while enhancing student engagement and creating a more vibrant, inclusive campus life. Ultimately, the Student Council will equip students with the skills and experience needed to thrive both during their academic journey and in their professional careers.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Student Council Structure Section */}
            <section className="container mx-auto px-5 py-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Student Council Structure</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            The AIU International Student Council will be made up of the following committees:
                        </p>
                    </div>

                    <ul className="list-disc pl-5 text-gray-600 space-y-4">
                        <li><strong>Executive Committee (Core Council)</strong></li>
                        <li><strong>Advisory Committee</strong></li>
                        <li><strong>Sub Council</strong>
                            <ul className="list-decimal pl-6 space-y-2">
                                <li>Council of Academic Activities</li>
                                <li>Council for Scientific Activities</li>
                                <li>Council for Sports</li>
                                <li>Council for Cultural Activities</li>
                                <li>Council for IT/Media</li>
                            </ul>
                        </li>
                    </ul>
                </motion.div>
            </section>

            {/* Executive Committee Section */}
            <section className="container mx-auto px-5 py-10 bg-gray-100 rounded-md">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Executive Committee (Core Council)</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            The Executive Committee, or Core Council, consists of the President and Vice President. They play an important role in leading and managing the council, ensuring that all activities align with the goals and objectives of the Student Council.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Advisory Committee Section */}
            <section className="container mx-auto px-5 py-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Advisory Committee</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            An advisory committee consisting of faculty members plays a crucial role in the smooth running of the council. This committee provides guidance, support, and expertise, ensuring that the council's activities align with academic standards and institutional goals. Faculty members contribute their experience and insights to strategic planning, problem-solving, and decision-making processes. Their involvement helps maintain effective governance, promotes collaboration, and enhances the overall functioning and impact of the council. They primarily serve as mentors and ensure the council's effectiveness and integrity.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Image Section */}
            <section className="text-center mt-8 mb-16">
                <Image
                    src="/images/student_council.jpg"
                    alt="AIU International Students Council"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </section>
        </div>
    );
};

export default StudentCouncilPage;
