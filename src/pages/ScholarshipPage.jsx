import React from "react";
import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";
import {Image} from "antd";
import {Link, useNavigate} from "react-router-dom";

const ScholarshipPage = () => {
    const sectionVariants = {
        hidden: {opacity: 0, scale: 0.95},
        visible: {opacity: 1, scale: 1},
    };
    const navigate = useNavigate();

    const navItems = [
        {label: "Scholarship", path: "/scholarships"},
        {label: "Tuition and Cost", path: "/tuition-fees"},
        {label: "Find Program", path: "/find-programs"},
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden mb-5">
                <img className="absolute inset-0 w-full h-full object-cover" src="/P1007464.MP4_snapshot_00.01.493.jpg" alt="Scholarship" preview={false}/>
                <div className="absolute inset-0 bg-[#00316b]/70 flex flex-col justify-end">
                    <div className="container mx-auto px-4 sm:px-5">
                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
                        >
                            Scholarships
                        </motion.h1>
                        <div className="breadcrumb">
                            <ul className="flex flex-wrap items-center text-sm text-white/80">
                                <li className="flex items-center">
                                    <a className="hover:text-white flex items-center" href="/en">
                                        Home <ChevronRight className="mx-1" size="14"/>
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white font-medium">Scholarships</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-10 mb-5">
                {/* Content Section */}
                <section className="w-full lg:w-2/3 px-0 sm:px-5 py-6 sm:py-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{duration: 0.6}}
                        className="space-y-8"
                    >
                        {/* Overview */}
                        <div className="mb-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#00316b]">AIU Scholarship Overview</h2>
                            <p className="text-base sm:text-lg text-gray-600 mt-3">
                                The AIU Scholarship is an award provided to deserving students to attain their
                                educational goals, meet their professional objectives, and succeed to their fullest
                                ability.
                            </p>
                        </div>

                        {/* Scholarship Objective */}
                        <div className="mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-4">Objective</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    {
                                        icon: "/motivate.svg",
                                        text: "To prepare and motivate students for competitive exams"
                                    },
                                    {
                                        icon: "/increase.svg",
                                        text: "Decide scholarship for students based on their score"
                                    },
                                    {
                                        icon: "/scholarship.svg",
                                        text: "To increase overall academic quality of students"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{y: -5}}
                                        className="bg-white flex flex-col items-center text-center border border-gray-200 rounded-lg p-4 sm:p-5"
                                    >
                                        <img src={item.icon} className="mb-2 h-12 w-12" alt="Objective icon"/>
                                        <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Scholarship Image */}
                        <div className="mb-8">
                            <Image
                                src="/P1007495.MP4_snapshot_00.03.671.jpg"
                                className="w-full h-auto sm:h-[350px] md:h-[400px] object-cover object-top rounded-lg"
                                alt="Scholarship students"
                                preview={false}
                            />
                        </div>

                        {/* Exam Pattern */}
                        <div className="mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-4">Exam Pattern for
                                Scholarship</h3>
                            <ol className="space-y-4">
                                {[
                                    "Top 20 students from one academic year (Medical subjects)",
                                    "VIVA/OSCE (for clinical batches) - 180 marks. VIVA will be taken for top 20 students selected from Phase II",
                                    "Attendance marks"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{x: -20}}
                                        animate={{x: 0}}
                                        transition={{delay: index * 0.1}}
                                        className="bg-white rounded-lg p-4 flex items-start gap-4"
                                    >
                                        <img className="h-8 w-8 mt-1" src={`/${index + 1}.svg`}
                                             alt={`Step ${index + 1}`}/>
                                        <p className="text-gray-600 text-sm sm:text-base">{item}</p>
                                    </motion.li>
                                ))}
                            </ol>
                        </div>

                        {/* Exam Schedule */}
                        <div className="mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-4">Exam Schedule for
                                Scholarship</h3>
                            <ul className="space-y-4">
                                <li className="bg-white p-4 rounded-lg">
                                    <strong className="text-[#00316b]">Phase I:</strong> After completion of both
                                    semester exams.
                                </li>
                                <li className="bg-white p-4 rounded-lg">
                                    <strong className="text-[#00316b]">Phase II:</strong> Date will be confirmed later,
                                    after completion of both semester exams.
                                </li>
                            </ul>
                        </div>

                        {/* Scholarship Scoring System */}
                        <div className="mb-8 overflow-x-auto">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-4">Scholarship Scoring
                                System</h3>
                            <table className="min-w-full text-left text-gray-600 border">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-3 text-sm sm:text-base font-bold text-[#00316b]">Phases of
                                        Exam
                                    </th>
                                    <th className="px-4 py-3 text-sm sm:text-base font-bold text-[#00316b]">Marking</th>
                                </tr>
                                </thead>
                                <tbody>
                                {[
                                    ["Phase I", "Total marks of medical subjects calculated from modules and semester"],
                                    ["Phase II", "VIVA/OSCE exam (180 marks)"],
                                    ["Phase III", "Attendance — 20 marks"]
                                ].map(([phase, marking], index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="px-4 border py-3 text-sm sm:text-base">{phase}</td>
                                        <td className="px-4 border py-3 text-sm sm:text-base">{marking}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Exclusion Criteria */}
                        <div className="mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-4">Exclusion Criteria from
                                Scholarship</h3>
                            <ul className="space-y-3">
                                {[
                                    "Attendance records less than 80%",
                                    "Any record of disciplinary breach, verified by university",
                                    "Any type of cheating during exams",
                                    "Failure to pay the fees in time"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{x: 5}}
                                        className="bg-white p-4 rounded-lg text-gray-600 text-sm sm:text-base"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Note */}
                        <div className="mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-4">Note</h3>
                            <p className="text-gray-600 bg-white p-4 rounded-lg text-sm sm:text-base">
                                A scholarship committee will be formed to conduct and regulate the exam after approval
                                from the rector of the university.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Side Navigation */}
                <aside className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:sticky lg:top-32 h-max">
                    <motion.ul
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        className="sideNav bg-white shadow-md rounded-lg overflow-hidden"
                    >
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-3 sm:p-4 group">
                            <span
                                className="uppercase p-1 px-2 text-base sm:text-lg font-bold flex items-center gap-3 z-10">
                                AIU ADMISSION
                                <img
                                    className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
                                    src="/arrow.svg"
                                    alt="Arrow"
                                />
                            </span>
                            <span className="text-4xl sm:text-5xl absolute font-bold opacity-10">AIU</span>
                            <img
                                src="/Vector.svg"
                                className="absolute opacity-10 h-16 sm:h-20 right-0 bottom-0"
                                alt="Vector"
                            />
                        </li>

                        {navItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.4 + (index * 0.1)}}
                                onClick={() => navigate(item.path)}
                                className={`sideNav-links transition-colors cursor-pointer p-3 sm:p-4 ${
                                    location.pathname === item.path ? "sideNav-active" : ""
                                }`}
                            >
                                <span className="block text-sm sm:text-base">{item.label}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </aside>
            </div>
        </div>
    );
};

export default ScholarshipPage;