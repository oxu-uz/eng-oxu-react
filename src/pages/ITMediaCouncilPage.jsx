import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";

const ITMediaCouncilPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "125px" }} data-cid="714">
                <img className="bg-image bg-blue-800" src="/thumb_362_1920_0_0_0_auto.jpg" alt="Council for IT/Media" />
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
                            The IT/Media Committee at Asia International University aims to harness the power of technology and digital media to enhance communication, collaboration, and engagement both on and off-campus. The committee focuses on managing digital platforms, promoting events, and ensuring efficient dissemination of information. Additionally, the committee provides opportunities for students to develop technical and creative skills while showcasing their talents in areas like media production, graphic design, and video editing.
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
                            The IT/Media Committee plays a crucial role in managing the university’s digital presence, supporting campus events, and fostering students’ technical creativity. Here are the primary roles and responsibilities:
                        </p>
                    </div>

                    <ul className="list-disc pl-5 text-gray-600 space-y-4">
                        <li><strong>Managing Digital Communication:</strong> Oversee the creation and maintenance of social media pages, websites, and other digital platforms to ensure timely updates about events and university news.</li>
                        <li><strong>Promoting Campus Activities:</strong> Design and create promotional materials, including videos, images, posters, and flyers to highlight student council initiatives, events, and achievements.</li>
                        <li><strong>Technical Support:</strong> Provide technical assistance for events, such as audio-visual setup, live streaming, and digital presentations, ensuring smooth execution of programs.</li>
                        <li><strong>Collaboration:</strong> Collaborate with other committees to enhance students’ technical skills in areas like graphic design, video editing, and social media management. Encourage cross-collaboration for more creative and engaging campaigns.</li>
                    </ul>
                </motion.div>
            </section>

            {/* Image Section */}
            <section className="text-center mt-8 mb-16">
                <Image
                    src="/images/it_media_activities.jpg"
                    alt="Council for IT/Media"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </section>
        </div>
    );
};

export default ITMediaCouncilPage;
