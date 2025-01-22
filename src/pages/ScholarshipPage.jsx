import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import {Link, useNavigate} from "react-router-dom";

const ScholarshipPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };
    const navigate = useNavigate();

    const navItems = [
        { label: "Scholarship ", path: "/scholarships" },
        { label: "Tuition and Cost ", path: "/tuition-fees" },
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "175px" }} data-cid="714">
                <img className="bg-image bg-blue-900" src="/P1007464.MP4_snapshot_00.01.493.jpg" alt="Scholarship" />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Scholarships</h1>
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
                                    <span className="nav-link text-white">Scholarships</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarship Info Section */}
            <div className="flex gap-10 px-10 mb-5">
                <section className="w-full px-5 py-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{duration: 0.6}}
                    >
                        <div className=" mb-8">
                            <h2 className="text-3xl font-bold text-[#00316b]">AIU Scholarship Overview</h2>
                            <p className="text-lg text-gray-600 mt-4">
                                The AIU Scholarship is an award provided to deserving students to attain their
                                educational goals, meet their professional objectives, and succeed to their fullest
                                ability. It is mainly based on academic merit, awarded to students with outstanding
                                academic achievements.
                            </p>
                        </div>

                        {/* Scholarship Objective */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Objective</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white flex flex-col items-center text-center border border-[rgba(159,171,185,.2)] rounded-lg p-5">
                                    <img src="/motivate.svg" className="mb-2" />
                                    <p className="text-gray-600">
                                        To prepare and motivate students for competitive
                                        exams.</p>
                                </div>

                                <div
                                    className="bg-white flex flex-col items-center text-center border border-[rgba(159,171,185,.2)] rounded-lg p-5">
                                    <img src="/increase.svg" className="mb-2"/>
                                    <p className="text-gray-600">Decide scholarship for students based on their
                                        score.</p>
                                </div>
                                <div
                                    className="bg-white border flex flex-col items-center text-center border-[rgba(159,171,185,.2)] rounded-lg p-5">
                                    <img src="/scholarship.svg" className="mb-2"/>
                                    <p className="text-gray-600">To increase overall academic quality of students.</p>
                                </div>
                            </div>

                        </div>

                        <img src="/P1007495.MP4_snapshot_00.03.671.jpg" className="h-[500px] mb-5 w-full object-cover object-top" />

                        {/* Exam Pattern */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Exam Pattern for Scholarship</h3>
                            <ol className="list-decimal pl-5 text-gray-600">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                    <div className="bg-white rounded-lg p-5 flex items-center gap-5">
                                        <img className="h-10 w-10" src="/1.svg"/>
                                        <p className="text-gray-600">Top 20 students from one academic year (Medical
                                            subjects).</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-5 flex items-center gap-5">
                                        <img className="h-10 w-10" src="/2.svg" />
                                        <p className="text-gray-600">VIVA/OSCE (for clinical batches) - 180 marks. VIVA
                                            will be taken for top 20 students selected from Phase II.</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-5 flex items-center gap-5">
                                        <img className="h-10 w-10" src="/3.svg"/>
                                        <p className="text-gray-600">Attendance marks.</p>
                                    </div>
                                </div>

                            </ol>
                        </div>

                        {/* Exam Schedule */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Exam Schedule for Scholarship</h3>
                            <ul className="text-gray-600">
                                <li className="py-5 list-none"><strong>Phase I:</strong> After completion of both semester exams.</li>
                                <li className="py-5 list-none"><strong>Phase II:</strong> Date will be confirmed later, after completion of both
                                    semester exams.
                                </li>
                            </ul>
                        </div>

                        {/* Scholarship Scoring System */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Scholarship Scoring System</h3>
                            <table className="table-auto w-full text-left text-gray-600 mt-6">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-lg font-bold text-[#00316b]">Phases of Exam</th>
                                    <th className="px-4 py-2 text-lg font-bold text-[#00316b]">Marking</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Phase I</td>
                                    <td className="border px-4 py-2">Total marks of medical subjects calculated from
                                        modules and semester.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Phase II</td>
                                    <td className="border px-4 py-2">VIVA/OSCE exam (180 marks).</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Phase III</td>
                                    <td className="border px-4 py-2">Attendance — 20 marks.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Exclusion Criteria */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Exclusion Criteria from
                                Scholarship</h3>
                            <ul className="list-disc pl-5 divide-y divide-[rgba(159,171,185,.2)] text-gray-600">
                                <li className="py-5 list-none">Attendance records less than 80%.</li>
                                <li className="py-5 list-none">Any record of disciplinary breach, verified by university.</li>
                                <li className="py-5 list-none">Any type of cheating during exams.</li>
                                <li className="py-5 list-none">Failure to pay the fees in time.</li>
                            </ul>
                        </div>

                        {/* Note */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Note</h3>
                            <p className="text-gray-600">
                                A scholarship committee will be formed to conduct and regulate the exam after approval
                                from the rector of the university.
                            </p>
                        </div>
                    </motion.div>
                </section>
                <aside className="w-1/2 max-h-max sticky top-32 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
                            <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
                                AIU ADMISSION
                                <img
                                    className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
                                    src="/arrow.svg"
                                    alt="Arrow"
                                />
                            </span>
                            <span className="text-7xl absolute font-bold opacity-10">AIU</span>
                            <img
                                src="/Vector.svg"
                                className="absolute opacity-10 h-20 right-0 bottom-0"
                                alt="Vector"
                            />
                        </li>

                        {navItems.map((item, index) => (
                            <li
                                onClick={() => navigate(item.path)}
                                key={index}
                                className={`sideNav-links transition-colors cursor-pointer p-2 ${
                                    location.pathname === item.path ? "sideNav-active" : ""
                                }`}
                            >
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default ScholarshipPage;
