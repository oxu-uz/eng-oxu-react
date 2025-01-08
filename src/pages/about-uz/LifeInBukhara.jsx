import React from 'react';
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import { motion } from "framer-motion";

const LifeInBukhara = () => {
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
                <img className="bg-image bg-blue-900" src="/thumb_362_1920_0_0_0_auto.jpg" alt="Bukhara" />

                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Life in Bukhara</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link text-white" href="/en">Home<ChevronRight size="16" /></a>
                                </li>
                                <li className="sideNav-link">
                                    <span className="nav-link text-white">Life in Bukhara<ChevronRight size="16" /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-5 py-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Discover the Vibrant Life in Bukhara</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Historical Significance */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2 }}
                        >
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-700">Historical Significance</h3>
                                <p className="text-gray-600 mt-2">
                                    Bukhara is a storied city on the Silk Road with over 2,000 years of history, noted for its influence on Islamic culture and sciences.
                                </p>
                            </div>
                        </motion.div>

                        {/* Architectural Heritage */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.4 }}
                        >
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-700">Architectural Heritage</h3>
                                <p className="text-gray-600 mt-2">
                                    Known for its magnificent architecture, Bukhara features the Kalyan Minaret, Ark Fortress, and many other historic mosques and madrasahs.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        {/* UNESCO World Heritage */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.6 }}
                        >
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-700">UNESCO World Heritage Site</h3>
                                <p className="text-gray-600 mt-2">
                                    The historic center of Bukhara is a UNESCO World Heritage site, emphasizing its global cultural value.
                                </p>
                            </div>
                        </motion.div>

                        {/* Traditional Crafts */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.8 }}
                        >
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-700">Traditional Crafts</h3>
                                <p className="text-gray-600 mt-2">
                                    Bukhara is renowned for its traditional crafts, such as carpet weaving, pottery, and gold embroidery, reflecting its rich artisan heritage.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        {/* Vibrant Community Life */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 1 }}
                        >
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-700">Vibrant Community Life</h3>
                                <p className="text-gray-600 mt-2">
                                    Daily life in Bukhara is vibrant, characterized by strong community bonds, traditional dining, and bustling social activities around central squares like Lyabi-Hauz.
                                </p>
                            </div>
                        </motion.div>

                        {/* Urban Landscape */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 1.2 }}
                        >
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-700">Urban Landscape</h3>
                                <p className="text-gray-600 mt-2">
                                    The cityscape merges historical allure with modern living, with every part of the city offering a story of its rich past.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Climate */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.4 }}
                    >
                        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
                            <h3 className="text-xl font-bold text-gray-700">Climate</h3>
                            <p className="text-gray-600 mt-2">
                                Bukhara experiences a continental climate, with hot, dry summers where temperatures can reach around 40°C (104°F) and cold winters with temperatures often dropping below freezing. Spring and autumn offer milder, more pleasant weather, making them ideal for visiting the city.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default LifeInBukhara;
