import React from 'react';
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import { motion } from "framer-motion";

const AboutUz = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: '125px' }} data-cid="714">
                <img className="bg-image bg-blue-900" src="/thumb_362_1920_0_0_0_auto.jpg" alt="" />

                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1>About Uzbekistan</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/en">Home<ChevronRight size="16" /></a>
                                </li>
                                <li className="sideNav-link">
                                    <span className="nav-link">About Uzbekistan<ChevronRight size="16" /></span>
                                </li>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/about-uzbekistan">About Uzbekistan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <motion.div
                className="container mx-auto px-5 py-10"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Geography</h2>
                    <motion.p variants={cardVariants} transition={{ duration: 0.3 }}>
                        Uzbekistan is located in Central Asia, bordered by Kazakhstan to the north, Kyrgyzstan to the northeast, Tajikistan to the southeast, Afghanistan to the south, and Turkmenistan to the southwest. It is a landlocked country known for its diverse landscapes, including deserts, fertile valleys, and mountain ranges.
                    </motion.p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">History</h2>
                    <motion.p variants={cardVariants} transition={{ duration: 0.3 }}>
                        Uzbekistan has a rich history influenced by various empires and cultures, including the Persian Empire, Alexander the Great's conquests, and the caliphates. It flourished during the Silk Road era, with cities like Samarkand and Bukhara becoming renowned centers of trade, culture, and science.
                    </motion.p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Culture</h2>
                    <motion.p variants={cardVariants} transition={{ duration: 0.3 }}>
                        Uzbekistan is famous for its contributions to arts, particularly in traditional dance, music, and handicrafts like ceramics, carpets, and embroidery. The architectural heritage is notable, with landmarks such as the Registan in Samarkand and the Ark Fortress in Bukhara.
                    </motion.p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Population</h2>
                    <motion.p variants={cardVariants} transition={{ duration: 0.3 }}>
                        The population is around 35 million, making it the most populous country in Central Asia. The majority of the population is ethnic Uzbek, with Russian, Tajik, Kazakh, and other minority groups also present.
                    </motion.p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Economy</h2>
                    <motion.p variants={cardVariants} transition={{ duration: 0.3 }}>
                        Uzbekistan's modern economy is transitioning from a centrally planned system to a market-oriented one, driven by significant reforms. Agriculture remains vital, particularly cotton production. The country is rich in resources like gold and natural gas, with mining and energy being key sectors. Efforts are underway to diversify through industrial expansion and special economic zones, focusing on manufacturing.
                    </motion.p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Tourism</h2>
                    <motion.p variants={cardVariants} transition={{ duration: 0.3 }}>
                        Uzbekistan's tourism sector is flourishing due to its rich history and stunning architectural sites, especially those connected to the ancient Silk Road. Key destinations include the cities of Samarkand, Bukhara, and Khiva, known for their impressive Islamic architecture, vibrant bazaars, and historical significance.
                    </motion.p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Climate</h2>
                    <motion.p variants={cardVariants} transition={{ duration: 0.3 }}>
                        The country experiences a continental climate with hot summers and cold winters. The landscape influences the climate, with deserts and mountains creating significant temperature variations.
                    </motion.p>
                </section>

                <motion.div
                    className="text-lg font-medium mt-10"
                    variants={cardVariants}
                    transition={{ duration: 0.5 }}
                >
                    Uzbekistan continues to develop both economically and culturally, embracing its historical legacy while looking towards modernization and international cooperation.
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutUz;
