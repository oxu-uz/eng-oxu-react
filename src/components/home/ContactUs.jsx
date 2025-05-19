import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {motion, useInView} from 'framer-motion';

function ContactUs() {
    const navigate = useNavigate();

    const handleEnquireClick = () => {
        navigate('/international-form');
    };

    // Animation variants
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hover: {
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            className="py-16 px-4 sm:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-[1663px] mx-auto">
                {/* Main Heading */}
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-center title-text mb-12"
                    variants={itemVariants}
                >
                    Contact us
                </motion.h1>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                >
                    {/* Make an Enquiry Section */}
                    <motion.div
                        className="relative cta-section p-8 text-white overflow-hidden"
                        whileHover="hover"
                        variants={cardVariants}
                    >
                        {/* PNG pattern overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round"/>
                        <div className="relative z-10">
                            <motion.h2
                                className="text-2xl font-semibold mb-6"
                                variants={itemVariants}
                            >
                                Make an enquiry
                            </motion.h2>
                            <motion.p
                                className="mb-6"
                                variants={itemVariants}
                            >
                                We're here to help.
                            </motion.p>
                            <motion.p
                                className="mb-8"
                                variants={itemVariants}
                            >
                                Get in touch with us today.
                            </motion.p>
                            <motion.button
                                onClick={handleEnquireClick}
                                className="bg-white rounded-lg text-[#012152] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors shadow-md"
                                variants={itemVariants}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.98}}
                            >
                                Enquire online
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Contact Info Section */}
                    <motion.div
                        className="relative cta-section p-8 text-white overflow-hidden"
                        whileHover="hover"
                        variants={cardVariants}
                    >
                        {/* PNG pattern overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round"/>
                        <div className="relative z-10">
                            <motion.h2
                                className="text-2xl font-semibold mb-6"
                                variants={itemVariants}
                            >
                                AIU Main Campus
                            </motion.h2>
                            <motion.div
                                className="space-y-4"
                                variants={containerVariants}
                            >
                                <motion.div variants={itemVariants}>
                                    <p className="font-medium">Give us a call</p>
                                    <p className="opacity-80">From within Uzbekistan</p>
                                    <p className="text-lg">+998 55 305 00 09</p>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <p className="opacity-80">From outside Uzbekistan</p>
                                    <p className="text-lg">+998 50 754 20 19</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="hidden md:block my-12 mx-4 sm:mx-6 lg:mx-8 border-t border-gray-200"
                    variants={itemVariants}
                />

                {/* Additional Contact Info */}
                <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                >
                    <motion.div
                        className="relative cta-section p-6 text-white overflow-hidden"
                        whileHover="hover"
                        variants={cardVariants}
                    >
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round"/>
                        <div className="relative z-10">
                            <motion.h3
                                className="text-xl font-semibold mb-4"
                                variants={itemVariants}
                            >
                                Admissions Office
                            </motion.h3>
                            <motion.p variants={itemVariants}>+998 50 030 58 76</motion.p>
                            <motion.p variants={itemVariants}>admission@oxu.uz</motion.p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative cta-section p-6 text-white overflow-hidden"
                        whileHover="hover"
                        variants={cardVariants}
                    >
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round"/>
                        <div className="relative z-10">
                            <motion.h3
                                className="text-xl font-semibold mb-4"
                                variants={itemVariants}
                            >
                                Student Support
                            </motion.h3>
                            <motion.p variants={itemVariants}>+998 50 030 58 76</motion.p>
                            <motion.p variants={itemVariants}>aiudean@oxu.uz</motion.p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative cta-section p-6 text-white overflow-hidden"
                        whileHover="hover"
                        variants={cardVariants}
                    >
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round"/>
                        <div className="relative z-10">
                            <motion.h3
                                className="text-xl font-semibold mb-4"
                                variants={itemVariants}
                            >
                                General Inquiries
                            </motion.h3>
                            <motion.p variants={itemVariants}>+998 50 030 58 76</motion.p>
                            <motion.p variants={itemVariants}>info@oxu.uz</motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default ContactUs;