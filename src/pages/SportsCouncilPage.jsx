import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";

const SportsCouncilPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "125px" }} data-cid="714">
                <img className="bg-image bg-blue-800" src="/thumb_362_1920_0_0_0_auto.jpg" alt="Council for Sport" />
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
                            The Sports Committee at Asia International University aims to promote physical fitness, teamwork, and a spirit of healthy competition among students. By organizing various sports events, tournaments, and recreational activities, the committee encourages active participation and fosters a culture of wellness on campus. The council helps students enhance their leadership and collaboration skills while focusing on holistic development through sports.
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
                            The Sports Committee plays a key role in promoting fitness and sportsmanship among students. Below are the primary roles and responsibilities:
                        </p>
                    </div>

                    <ul className="list-disc pl-5 text-gray-600 space-y-4">
                        <li><strong>Organizing Sports Events and Tournaments:</strong> Plan, coordinate, and oversee intra- and inter-collegiate sports competitions to encourage participation and showcase athletic talents.</li>
                        <li><strong>Promoting Physical Fitness:</strong> Initiate programs, workshops, and activities that emphasize the importance of health, fitness, and an active lifestyle among students.</li>
                        <li><strong>Supporting Team Development:</strong> Facilitate the formation and training of sports teams, providing resources, coaching support, and practice schedules to enhance performance.</li>
                        <li><strong>Managing Sports Facilities and Resources:</strong> Ensure the proper maintenance and availability of sports equipment and facilities, while addressing the needs and concerns of student athletes.</li>
                    </ul>
                </motion.div>
            </section>

            {/* Image Section */}
            <section className="text-center mt-8 mb-16">
                <Image
                    src="/images/sports_activities.jpg"
                    alt="Council for Sport"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </section>
        </div>
    );
};

export default SportsCouncilPage;
