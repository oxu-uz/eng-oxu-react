import React, {useRef} from 'react';
import {motion, useInView} from 'framer-motion';
import {useNavigate} from "react-router-dom";

// Animation variants
const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
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


const StudentLife = () => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/international-form')
    }

    return (
        <section className="student-life-combined" ref={ref}>
            {/* Highlights Ticker */}
            <div className="relative cta-section py-4 overflow-hidden">
                {/* PNG pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round"/>
                <div className="flex justify-around animate-ticker">
                    <div className="mx-10 font-semibold text-white whitespace-nowrap">
                        <span className="mr-2">📚</span> 50+ Academic Programs
                    </div>
                    <div className="mx-10 font-semibold text-white whitespace-nowrap">
                        <span className="mr-2">🔬</span> Cutting-Edge Research
                    </div>
                    <div className="mx-10 font-semibold text-white whitespace-nowrap">
                        <span className="mr-2">⚽</span> 12 Varsity Sports
                    </div>
                    <div className="mx-10 font-semibold text-white whitespace-nowrap">
                        <span className="mr-2">🎨</span> Cultural Festivals
                    </div>
                    <div className="mx-10 font-semibold text-white whitespace-nowrap">
                        <span className="mr-2">💻</span> Tech Innovation Hub
                    </div>
                </div>
            </div>

            {/* Interactive Card Grid */}
            <div id="life-highlights" className="py-20 max-w-[1663px] mx-auto px-4">
                <motion.div
                    className="flex flex-col items-center mb-12"
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                >
                    <motion.h2
                        className="relative text-3xl w-full font-extrabold title-text text-center md:text-4xl pb-4"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={itemVariants}
                    >
                        Student Activities at AIU
                        <span
                            className="absolute left-1/2 bottom-0 translate-x-[-50%] w-36 h-[3px] bg-[#012152]"></span>
                    </motion.h2>
                    <motion.div
                        className="w-full flex justify-center"
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <p className="text-xl md:text-2xl font-semibold text-[#012152] max-w-3xl leading-relaxed px-4 text-center mt-4">
                            Explore diverse opportunities beyond the classroom
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Academic Activities */}
                    <motion.div
                        className="overflow-hidden shadow-lg hover:shadow-xl border border-gray-200"
                        variants={itemVariants}
                        whileHover={{scale: 1.03}}
                    >
                        <div className="h-48 bg-[url('/academic-activities.jfif')] bg-cover bg-center relative">
                            <div className="absolute bottom-4 left-4 bg-[#012152] text-white px-4 py-1 font-semibold">
                                Academic
                            </div>
                        </div>
                        <div className="p-5 bg-white">
                            <h4 className="font-bold text-lg mb-2 text-[#012152]">Academic Activities</h4>
                            <p className="mb-4 text-gray-700 leading-relaxed text-sm">
                                Debate clubs, academic competitions, language circles, and subject-specific societies
                            </p>
                            <a href="/academic-council"
                               className="text-[#012152] font-semibold text-sm inline-flex items-center hover:underline">
                                Learn more →
                            </a>
                        </div>
                    </motion.div>

                    {/* Scientific Activities */}
                    <motion.div
                        className="overflow-hidden shadow-lg hover:shadow-xl border border-gray-200"
                        variants={itemVariants}
                        whileHover={{scale: 1.03}}
                    >
                        <div className="h-48 bg-[url('/scientific-activities.jfif')] bg-cover bg-center relative">
                            <div className="absolute bottom-4 left-4 bg-[#012152] text-white px-4 py-1 font-semibold">
                                Scientific
                            </div>
                        </div>
                        <div className="p-5 bg-white">
                            <h4 className="font-bold text-lg mb-2 text-[#012152]">Scientific Activities</h4>
                            <p className="mb-4 text-gray-700 leading-relaxed text-sm">
                                Research projects, science fairs, innovation labs, and STEM competitions
                            </p>
                            <a href="/scientific-council"
                               className="text-[#012152] font-semibold text-sm inline-flex items-center hover:underline">
                                Explore research →
                            </a>
                        </div>
                    </motion.div>

                    {/* Sport Activities */}
                    <motion.div
                        className="overflow-hidden shadow-lg hover:shadow-xl border border-gray-200"
                        variants={itemVariants}
                        whileHover={{scale: 1.03}}
                    >
                        <div className="h-48 bg-[url('/sport-activities.jfif')] bg-cover bg-center relative">
                            <div className="absolute bottom-4 left-4 bg-[#012152] text-white px-4 py-1 font-semibold">
                                Sports
                            </div>
                        </div>
                        <div className="p-5 bg-white">
                            <h4 className="font-bold text-lg mb-2 text-[#012152]">Sport Activities</h4>
                            <p className="mb-4 text-gray-700 leading-relaxed text-sm">
                                Varsity teams, intramural leagues, fitness classes, and outdoor adventures
                            </p>
                            <a href="/sports-council"
                               className="text-[#012152] font-semibold text-sm inline-flex items-center hover:underline">
                                View sports →
                            </a>
                        </div>
                    </motion.div>

                    {/* Cultural Activities */}
                    <motion.div
                        className="overflow-hidden shadow-lg hover:shadow-xl border border-gray-200"
                        variants={itemVariants}
                        whileHover={{scale: 1.03}}
                    >
                        <div className="h-48 bg-[url('/aboutuz/uzb-4.webp')] bg-cover bg-center relative">
                            <div className="absolute bottom-4 left-4 bg-[#012152] text-white px-4 py-1 font-semibold">
                                Cultural
                            </div>
                        </div>
                        <div className="p-5 bg-white">
                            <h4 className="font-bold text-lg mb-2 text-[#012152]">Cultural Activities</h4>
                            <p className="mb-4 text-gray-700 leading-relaxed text-sm">
                                International festivals, art exhibitions, music ensembles, and theater productions
                            </p>
                            <a href="/cultural-council"
                               className="text-[#012152] font-semibold text-sm inline-flex items-center hover:underline">
                                See events →
                            </a>
                        </div>
                    </motion.div>

                    {/* IT Activities */}
                    <motion.div
                        className="overflow-hidden shadow-lg hover:shadow-xl border border-gray-200"
                        variants={itemVariants}
                        whileHover={{scale: 1.03}}
                    >
                        <div className="h-48 bg-[url('/it-activities.jfif')] bg-cover bg-center relative">
                            <div className="absolute bottom-4 left-4 bg-[#012152] text-white px-4 py-1 font-semibold">
                                IT & Tech
                            </div>
                        </div>
                        <div className="p-5 bg-white">
                            <h4 className="font-bold text-lg mb-2 text-[#012152]">IT Activities</h4>
                            <p className="mb-4 text-gray-700 leading-relaxed text-sm">
                                Hackathons, coding clubs, robotics teams, and tech innovation challenges
                            </p>
                            <a href="/it-media-council"
                               className="text-[#012152] font-semibold text-sm inline-flex items-center hover:underline">
                                Discover tech →
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="py-20 px-5">
                <motion.div
                    className="max-w-[1663px] relative mx-auto cta-section shadow-lg p-12 text-center"
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.7}}
                >
                    {/* PNG pattern overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round"/>
                    <h3 className="text-3xl text-white mb-6 font-bold">Ready to Join Our Vibrant Community?</h3>
                    <motion.div
                        className="flex justify-center w-full"
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <p className="text-xl md:text-2xl font-semibold text-white max-w-3xl leading-relaxed">
                            Experience the dynamic student life at AIU firsthand
                        </p>
                    </motion.div>
                    <motion.button
                        onClick={handleNavigate}
                        className="mt-8 bg-white relative z-30 text-[#012152] px-8 py-3 font-semibold hover:bg-gray-100 shadow-md"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.98}}
                    >
                        Contact Admissions
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default StudentLife;