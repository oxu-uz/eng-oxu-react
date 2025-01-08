import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";

const CulturalCouncilPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "125px" }} data-cid="714">
                <img className="bg-image bg-orange-800" src="/thumb_362_1920_0_0_0_auto.jpg" alt="Council for Cultural Activities" />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Council for Cultural Activities</h1>
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
                                    <span className="nav-link text-white">Council for Cultural Activities</span>
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
                            The Cultural Activities Committee at Asia International University fosters creativity, cultural exchange, and personal expression. The committee organizes a range of cultural events and activities, including art exhibitions, music performances, dance shows, and theater productions. These activities serve as platforms for students to explore their artistic talents, appreciate diverse cultures, and contribute to a vibrant campus life that celebrates inclusivity and unity.
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
                            The Cultural Activities Committee plays a pivotal role in organizing and promoting cultural events. Here are the main roles and responsibilities of the committee:
                        </p>
                    </div>

                    <ul className="list-disc pl-5 text-gray-600 space-y-4">
                        <li><strong>Organizing Cultural Events and Festivals:</strong> Plan and execute campus-wide events like cultural festivals, music performances, dance shows, and art exhibitions to showcase students’ talents and foster cultural appreciation.</li>
                        <li><strong>Promoting Cultural Exchange:</strong> Encourage students to participate in cultural exchange programs, where they can learn from different cultures and broaden their global perspectives.</li>
                        <li><strong>Supporting Artistic Talent:</strong> Provide platforms for students to express themselves creatively through art, music, dance, drama, and literature.</li>
                        <li><strong>Collaborating with External Artists and Institutions:</strong> Bring external performers, artists, and cultural institutions to campus, enhancing the cultural exposure of students and promoting cross-cultural engagement.</li>
                        <li><strong>Enhancing Student Engagement:</strong> Ensure active student participation in cultural activities by encouraging inclusivity and creating a welcoming environment for all students to get involved.</li>
                    </ul>
                </motion.div>
            </section>

            {/* Image Section */}
            <section className="text-center mt-8 mb-16">
                <Image
                    src="/images/cultural_activities.jpg"
                    alt="Council for Cultural Activities"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </section>
        </div>
    );
};

export default CulturalCouncilPage;
