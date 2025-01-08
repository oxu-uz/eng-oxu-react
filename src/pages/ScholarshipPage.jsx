import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";

const ScholarshipPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "125px" }} data-cid="714">
                <img className="bg-image bg-blue-900" src="/thumb_362_1920_0_0_0_auto.jpg" alt="Scholarship" />
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
            <section className="container mx-auto px-5 py-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">AIU Scholarship Overview</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            The AIU Scholarship is an award provided to deserving students to attain their educational goals, meet their professional objectives, and succeed to their fullest ability. It is mainly based on academic merit, awarded to students with outstanding academic achievements.
                        </p>
                    </div>

                    {/* Scholarship Objective */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Objective</h3>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>To prepare and motivate students for competitive exams.</li>
                            <li>Decide scholarship for students based on their score.</li>
                            <li>To increase overall academic quality of students.</li>
                        </ul>
                    </div>

                    {/* Exam Pattern */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Exam Pattern for Scholarship</h3>
                        <ol className="list-decimal pl-5 text-gray-600">
                            <li><strong>Phase I:</strong> Top 20 students from one academic year (Medical subjects).</li>
                            <li><strong>Phase II:</strong> VIVA/OSCE (for clinical batches) - 180 marks. VIVA will be taken for top 20 students selected from Phase II.</li>
                            <li><strong>Phase III:</strong> Attendance marks.</li>
                        </ol>
                    </div>

                    {/* Exam Schedule */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Exam Schedule for Scholarship</h3>
                        <ul className="text-gray-600">
                            <li><strong>Phase I:</strong> After completion of both semester exams.</li>
                            <li><strong>Phase II:</strong> Date will be confirmed later, after completion of both semester exams.</li>
                        </ul>
                    </div>

                    {/* Scholarship Scoring System */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Scholarship Scoring System</h3>
                        <table className="table-auto w-full text-left">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Phases of Exam</th>
                                <th className="px-4 py-2">Marking</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-600">
                            <tr>
                                <td className="px-4 py-2">Phase I</td>
                                <td className="px-4 py-2">Total marks of medical subjects calculated from modules and semester.</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Phase II</td>
                                <td className="px-4 py-2">VIVA/OSCE exam (180 marks).</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Phase III</td>
                                <td className="px-4 py-2">Attendance — 20 marks.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Exclusion Criteria */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Exclusion Criteria from Scholarship</h3>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>Attendance records less than 80%.</li>
                            <li>Any record of disciplinary breach, verified by university.</li>
                            <li>Any type of cheating during exams.</li>
                            <li>Failure to pay the fees in time.</li>
                        </ul>
                    </div>

                    {/* Note */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Note</h3>
                        <p className="text-gray-600">
                            A scholarship committee will be formed to conduct and regulate the exam after approval from the rector of the university.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="text-center mt-8">
                        <Image
                            src="/images/scholarship_award.jpg"
                            alt="Scholarship Award"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ScholarshipPage;
