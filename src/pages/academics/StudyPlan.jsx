import React from 'react';
import {ChevronRight} from "lucide-react";
import {Image} from "antd";
import { motion } from "framer-motion";

const StudyPlan = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Animation variants for sections
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };


    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5 " style={{height: '125px'}} data-cid="714">
                <img className="bg-image bg-blue-900" src="/ba.jpg" alt=""/>

                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1>Study Plan</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/en">Home<ChevronRight size="16"/></a>
                                </li>
                                <li className="sideNav-link">
                                                                    <span className="nav-link">
                                Academics
                                                                                   <ChevronRight size="16"/>
                                                                    </span>
                                </li>

                                <li className="sideNav-link">
                                    <a className="nav-link" href="/academics/study-plan">
                                        Study plan
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className=" mx-auto  px-4 lg:px-8">
                <motion.p
                    className="text-xl my-5"
                    variants={sectionVariants}
                    transition={{duration: 0.7}}
                >
                    Our study plan is meticulously crafted to meet both national and international standards, ensuring
                    excellence in medical education.
                </motion.p>
                <motion.div
                    className="_row self-start text-left promo-section _with-indent4 builder-section--bottom0"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                >
                    <motion.div
                        className="h-2 bg-[#012C6E] w-20"
                        initial={{width: 0}}
                        animate={{width: "80px"}}
                        transition={{duration: 0.8, delay: 0.2}}
                    />
                    <motion.h2
                        className="builder-section__title text-[var(--color-primary)] font-semibold"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.8, delay: 0.4}}
                    >
                        Brochures
                    </motion.h2>
                    <motion.div
                        className="b-row"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.8, delay: 0.6}}
                    >
                        <div className="b-row__item b-row__item--size_4">
                            <motion.div
                                className="builder-section builder-section--with_indent0"
                                initial={{scale: 0.95}}
                                animate={{scale: 1}}
                                transition={{duration: 0.8, delay: 0.8}}
                            >
                                <p className="text-left flex items-center justify-start">
                                    <div className="flex items-center gap-5 justify-start">
                                        <Image.PreviewGroup>
                                            <motion.div
                                                whileHover={{scale: 1.1}}
                                                transition={{duration: 0.3}}
                                            >
                                                <Image
                                                    alt=""
                                                    src="/Standart Academic  Study Plan-1.png"
                                                    style={{height: 243}}
                                                />
                                            </motion.div>
                                            <motion.div
                                                whileHover={{scale: 1.1}}
                                                transition={{duration: 0.3}}
                                            >
                                                <Image
                                                    alt=""
                                                    src="/Standart Academic  Study Plan-2.png"
                                                    style={{height: 243}}
                                                />
                                            </motion.div>
                                            <motion.div
                                                whileHover={{scale: 1.1}}
                                                transition={{duration: 0.3}}
                                            >
                                                <Image
                                                    alt=""
                                                    src="/Standart Academic  Study Plan-3.png"
                                                    style={{height: 243}}
                                                />
                                            </motion.div>
                                        </Image.PreviewGroup>
                                    </div>
                                </p>
                                <motion.p
                                    className="text-left flex py-2 items-center justify-start"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.8, delay: 1}}
                                >
                                    <a
                                        className="mceDataFile2 relative pl-8"
                                        data-hse-file="PDF"
                                        href="/Standart Academic  Study Plan.pdf"
                                    >
                                        Study Plan (PDF)
                                    </a>
                                </motion.p>
                            </motion.div>
                        </div>
                        <div className="b-row__item b-row__item--size_4">
                            <div
                                className="builder-section builder-section--bottom0 builder-section--with_indent0"></div>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Humanitarian, Social, and Economic Cycle",
                            description: "Courses like Russian, Latin, Medical Philosophy, and History of Uzbekistan are aimed at fostering a broader understanding of societal dynamics."
                        },
                        {
                            title: "Natural Science Cycle",
                            description: "Fundamental sciences like biology, chemistry, and hygiene build a strong foundation for medical education."
                        },
                        {
                            title: "Basic Medicine",
                            description: "Core medical subjects include anatomy, physiology, pathology, pharmacology, and more."
                        },
                        {
                            title: "Clinical Blocks",
                            description: "Covering pediatrics, surgery, therapy, and obstetrics & gynecology to ensure hands-on expertise."
                        },
                        {
                            title: "Variable Part of the Discipline",
                            description: "Customizable electives and specializations to match career aspirations."
                        },
                        {
                            title: "Qualification Hospital Practical",
                            description: "Real-world hospital training to translate theoretical knowledge into practical skills."
                        },
                    ].map((card, index) => (
                        <motion.div
                            className="bg-white rounded-lg overflow-hidden card-plan relative border"
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                        >
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                                    {card.title}
                                </h2>
                                <p className="text-gray-700">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <motion.div
                    className="mt-12"
                    variants={sectionVariants}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-4">Why Choose Our Study
                        Plan?</h2>
                    <p className="text-center text-lg pb-10 text-gray-700 max-w-3xl mx-auto">
                        Our structured approach balances academic excellence, research opportunities, and
                        extracurricular activities to foster holistic development.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default StudyPlan;
