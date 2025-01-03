import React from "react";
import { motion } from "framer-motion";
import {ChevronRight} from "lucide-react";
import {Image} from "antd";


const AcademicCalendar = () => {
    return (
        <div
            data-v-1b1c0a2c=""
            className="container-fluid statistics"
            style={{
                backgroundImage: 'url("/4343.png")'
            }}
        >
            <div data-v-1b1c0a2c="" className="container mx-auto">
                <div data-v-1b1c0a2c="" className="row">
                    <div data-v-1b1c0a2c="" className="col-12 text-center inner">
                        <div data-v-1b1c0a2c="" className="d-flex justify-content-center">
                            <div data-v-1b1c0a2c=""/>
                            <div data-v-1b1c0a2c="" className="flex justify-center univ-title">
                                <motion.img
                                    data-v-1b1c0a2c=""
                                    className="h-32"
                                    src="/logoo.svg"
                                    alt=""
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 1}}
                                />
                            </div>
                            <motion.h1
                                className="title p-5 bg-[#012C6E]/90 text-[35px] mt-5"
                                initial={{y: -50, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{duration: 1}}
                            >
                                Academic Calendar
                            </motion.h1>
                        </div>

                        <motion.div
                            data-v-1b1c0a2c=""
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5, duration: 1}}
                        >


                            <div className="flex my-10 justify-between items-center w-full">
                                <div
                                    className="_row self-start  text-left  promo-section _with-indent4 builder-section--bottom0">
                                    <div className="h-2 bg-[#012C6E] w-20"></div>
                                    <h2 className="builder-section__title text-white">Brochures</h2>
                                    <div className="b-row">
                                        <div className="b-row__item  b-row__item--size_4">
                                            <div className="builder-section builder-section--with_indent0">
                                                <p className="text-left flex items-center justify-start">
                                                    <Image
                                                        alt=""
                                                        src="/calendar.jpg"
                                                        style={{height: 243}}
                                                    />
                                                </p>
                                                <p className="text-left flex items-center justify-start">
                                                    <a
                                                        className="mceDataFile relative text-white pl-8"
                                                        data-hse-file="PDF"
                                                        href="/calendar.jpg"
                                                    >
                                                        Academic Calendar (JPG)
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="b-row__item  b-row__item--size_4">
                                            <div
                                                className="builder-section builder-section--bottom0 builder-section--with_indent0"></div>
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-[64px] max-w-4xl text-left">
                                    The standard academic calendar at Asia International University consists of a
                                    52-week
                                    schedule per year as per the instruction of the Ministry of Higher Education,
                                    Science,
                                    and Innovation of Uzbekistan, incorporating theoretical classes, clinical rotations,
                                    exams,
                                    vacations, and clinical practical. Here's a breakdown of the key points:
                                </p>
                            </div>

                            <motion.ul
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 1, duration: 1}}
                            >
                                <div className="numbers text-white">
                                    <li>
                                        {/*<img src="/start.svg" className="mx-auto" />*/}
                                        <strong className="text-xl">Start Dates:</strong>
                                    </li>
                                    <ul>
                                        <motion.li
                                            initial={{opacity: 0, x: -50}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: 1.5, duration: 1}}
                                        >
                                            <strong className="numbers__title">First-Year Students:</strong> Typically
                                            begin their studies in the middle of October.
                                        </motion.li>
                                        <motion.li
                                            initial={{opacity: 0, x: -50}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: 1.8, duration: 1}}
                                        >
                                            <strong className="numbers__title">2nd to 5th Year
                                                Students:</strong> Expected to arrive at the university at the beginning
                                            of September.
                                        </motion.li>
                                    </ul>
                                </div>

                                <div className="numbers text-white">
                                    <li>
                                        {/*<img src="/vacation.svg" className="mx-auto h-[65px]"/>*/}
                                        <strong className="text-xl">Vacation Periods:</strong></li>
                                    <ul>
                                        <motion.li
                                            initial={{opacity: 0, x: -50}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: 2, duration: 1}}
                                        >
                                            <strong className="numbers__title">Winter Break:</strong> A short-term
                                            vacation occurring from the last week of December to the first week of
                                            January.
                                        </motion.li>
                                        <motion.li
                                            initial={{opacity: 0, x: -50}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: 2.3, duration: 1}}
                                        >
                                            <strong className="numbers__title">Summer Vacation:</strong> Extends through
                                            July and August, providing a longer break for students.
                                        </motion.li>
                                    </ul>
                                </div>

                                <div className="numbers text-white">
                                    <li>
                                        {/*<img src="/exam.svg" className="mx-auto h-[65px]"/>*/}
                                        <strong className="text-xl">Exam Schedule:</strong></li>
                                    <ul>
                                        <motion.li
                                            initial={{opacity: 0, x: -50}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: 2.5, duration: 1}}
                                        >
                                            <strong className="numbers__title">Intermediary Exam:</strong> Conducted in
                                            the 9th week after the semester's start, assessing students' progress and
                                            understanding.
                                        </motion.li>
                                        <motion.li
                                            initial={{opacity: 0, x: -50}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: 2.8, duration: 1}}
                                        >
                                            <strong className="numbers__title">Semester Exam:</strong> Held in the 18th
                                            week, evaluating students' comprehensive knowledge and skills gained during
                                            the semester through MCQs and viva exams.
                                        </motion.li>
                                    </ul>
                                </div>
                            </motion.ul>

                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 3, duration: 1}}
                                className="mb-[4px]"
                            >
                                This structured calendar ensures a balanced distribution of academic activities,
                                allowing students ample time for learning, exams, and rest throughout the year.
                            </motion.p>

                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 3.5, duration: 1}}
                                className="mb-[64px]"
                            >
                                The academic environment at Asia International University is enriched not only by a
                                comprehensive curriculum but also by a variety of co-curricular and extracurricular
                                activities. These activities aim to enhance students' overall development:
                            </motion.p>

                            <motion.ol
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 4, duration: 1}}
                                className="text-white"
                            >
                                <motion.li
                                    initial={{opacity: 0, x: -50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 4.5, duration: 1}}
                                    className="numbers"
                                >
                                    {/*<img src="/academic.svg" className="mx-auto h-[65px]"/>*/}
                                    <strong className="numbers__title">Academic Co-Curricular Activities:</strong> These
                                    include activities that enhance academic skills beyond the classroom setting, such
                                    as seminars, workshops, and research projects, which provide students with
                                    additional learning experiences.
                                </motion.li>
                                <motion.li
                                    initial={{opacity: 0, x: -50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 5, duration: 1}}
                                    className="numbers"
                                >
                                    {/*<img src="/noun-science-6774000 2.svg" className="mx-auto h-[65px]"/>*/}
                                    <strong className="numbers__title">Scientific Research Activities:</strong> Focused
                                    on cultivating research skills and innovation, students have opportunities to engage
                                    in scientific investigations, collaborate on research projects, and contribute to
                                    scholarly publications. These activities help students develop critical thinking and
                                    problem-solving skills.
                                </motion.li>
                                <motion.li
                                    initial={{opacity: 0, x: -50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 5.5, duration: 1}}
                                    className="numbers"
                                >
                                    {/*<img src="/culture.svg" className="mx-auto h-[65px]"/>*/}
                                    <strong className="numbers__title">Cultural Activities:</strong> Events and programs
                                    designed to promote cultural awareness and appreciation. These may involve music,
                                    dance, theater, and celebrations that reflect cultural diversity, helping students
                                    to develop a broader worldview.
                                </motion.li>
                                <motion.li
                                    initial={{opacity: 0, x: -50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 6, duration: 1}}
                                    className="numbers"
                                >
                                    <strong className="numbers__title">Sports Activities:</strong> A variety of physical
                                    activities and sports offerings that encourage fitness, teamwork, and healthy
                                    competition. These activities promote physical well-being and the spirit of teamwork
                                    among students.
                                </motion.li>
                            </motion.ol>

                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 6.5, duration: 1}}
                                className="pb-[64px]"
                            >
                                Together, these activities provide a holistic educational experience, promoting not just
                                academic excellence but also personal growth and cultural enrichment. This structured
                                calendar ensures a balanced distribution of academic, co-curricular, extra-curricular,
                                sports, and cultural activities, allowing students ample time for learning, exams, and
                                rest throughout the year.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AcademicCalendar;
