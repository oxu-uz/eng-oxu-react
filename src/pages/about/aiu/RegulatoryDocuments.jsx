import React from 'react';
import {ChevronRight, FileText} from "lucide-react";
import {motion} from "framer-motion";

const RegulatoryDocuments = () => {

    const regulations = [
        "Charter of the Institution 'Asian International University'",
        "Licenses of Academic Programs",
        "Strategic Development Plan of Asian International University for 2025-2030",
        "Functional structure of AMU",
        "Regulations on the Administrative Council under the Rector of AMU",
        "Regulations on the Educational and Methodological Council",
        "Regulations on the Procedure for the Production, Storage, Issuance and Registration of Documents according to the State Model",
        "Regulations on the Head of the Educational Program",
        "Regulations on Internal Accreditation of EP",
        "Internal rules and regulations of AMU",
        "Internal rules and regulations for students",
        "Internal rules and regulations for Personnel of AMU",
        "Regulations on the Faculty of AMU",
        "Functional structure faculties",
        "Regulations on the Department of AMU",
        "Regulations about work of Tutors",
        "Regulations on the Procedure for Developing Job Descriptions and Job Descriptions for All Personnel in the AMU",
        "Code of Ethics for Faculty, Staff and Students of AMU",
        "Regulations on Rewarding Employees of AMU",
        "Regulations on Career Development of AMU",
        "Regulations on the Procedure for Forming the Personnel Reserve of the AMU",
        "Regulations on the Personnel Policy of the AMU",
        "Regulations on the Procedure for Selecting, Recruiting and Hiring Personnel at the AMU",
        "Regulations on the Procedure for Appointing a Substitute for the Positions of the Administration, Staffs of AMU",
        "Regulations on the Ethical Commission of the AMU",
        "Regulations on the Procedure for Considering Complaints and Suggestions of the AMU",
        "Regulation on the Processing and Protection of Personal Data of AMU",
        "Regulations on Risk Management and Opportunities of the AMU",
        "Regulations on Anti-corruption",
        "Regulations on the Procedure for Organizing and Conducting a Competition for Filling the Positions of Teaching Staff in the AMU",
        "Regulations of the department of legal affairs and human resources",
        "Regulations on the Academic Department of AMU",
        "Bulletin of the norms of planning and accounting of the academic load",
        "Regulations on admission of students to modules and examination sessions and re-submission of academic debts",
        "Regulations on the intermediate and examination session at AMU",
        "Regulations on control of students' knowledge by computer testing",
        "Regulation on syllabus",
        "Regulations on the development of Educational and Methodological Complexes (EMC)",
        "Regulations on Monitoring of the BEP AMU",
        "Regulation on the Procedure for Determining the Liquidation and Entering Academic Differences in the Hemis IS",
        "Regulations on the Procedure for Transfer, Expulsion and Reinstatement of Students of AMU",
        "Regulations on the Procedure for the Development and Approval of Curricula and Work Plans for Training at AMU",
        "Regulations on the Rules for Creating Modules, Test Tasks for Passing Exams and Uploading on the HEMIS Portal",
        "Regulations on conducting current, intermediate, final certification of students with disabilities",
        "Regulations on the current examination and midterm assessment of AMU Students",
        "Regulations on the Organization of the Final State Certification of Students of the AMU",
        "Regulations on the organization of student internships of AMU",
        "Regulations on the organization of independent work of students of Higher Professional Education",
        "Regulations on the organization of the Educational Process using credit technology of education",
        "Regulations on the Main Educational Program of Higher Professional Education of AMU",
        "Competency Model of Graduate 5+1 Years MBBS",
        "Competency Model of Graduate 6 Years MD",
        "AMU Regulations on Coursework",
        "Regulations about Study Group",
        "Regulations on the leader of Study Groups at AMU",
        "Regulations on the Procedure for Selecting Elective Disciplines",
        "Regulations on the Procedure for Providing Re-training to Students",
        "Regulations on Planning and Organizing Open Classes and Mutual Visits to Classes",
        "Regulations About OSCE(The Objective Structured Clinical Examination - OSCE) And OSPE (The Objective Structured Practical Examination - OSPE)",
        "Regulations on the Organization of the Educational Process Using Distance Educational Technologies at AMU",
        "Methodological Development and Requirements for It Methodological Recommendations",
        "Regulations on Conducting Educational Work with Students",
        "Regulations on Youth AMU Committee",
        "Regulations on Student Council",
        "Regulations on the Alumni",
        "Regulations on Student Dormitories of AMU",
        "Plan of formative work with Students",
        "Regulations on the Procedure for Organizing and Conducting Events and Competitions among Students at AMU",
        "Directory-Guide For Students",
        "Regulations on the Procedure for Providing Benefits to Students of AMU on Payment",
        "Regulations on Stimulating Salaries of PPS AMU",
        "Regulations on Remuneration of AMU",
        "Regulations on the Scientific Department of AMU",
        "Regulations on the Scientific Research Activities of Students and Faculty of the University",
        "Plan for the Organization and Implementation of Research Work and Activities of Students and Faculty of AMU",
        "Regulations on the Development Plan of the International Relations of the University",
        "Regulations on the Procedure for Admission of Foreign Citizens",
        "Migration Registration Rules for Students from Visa Countries",
        "Regulations on the Organization of Academic Mobility of Students and Teachers",
        "Terms of Use Library of Asian International University",
        "Regulations on the Library of the Asian International University",
        "Regulations on the AMU Website",
        "Regulations on Information Educational Resources of AMU HEMIS",
        "Regulations on the Procedure for the Production, Issuance, and Storage of a Student Identification Card",
        "Regulations on the Quality Department of AMU",
        "Regulations on the Organization for professional development of the AMU",
        "Education Quality Assurance Policy at AMU",
        "Regulations on Monitoring the Quality of Education at AMU",
        "Regulations on issuing academic certificates and diplomas",
        "Fire safety regulations"
    ];

    // Animation variants
    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0, transition: {duration: 1}}
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-64 overflow-hidden bg-blue-900">
                <img
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    src="/66e36e9d6e251891f12cc791_Managed%20IT%20Services.jpg"
                    alt="Documents background"
                />
                <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-white mb-2">Regulatory Documents</h1>
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                                <li className="inline-flex items-center">
                                    <a href="/public"
                                       className="inline-flex items-center text-sm font-medium text-white hover:text-blue-200">
                                        HOME
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <ChevronRight className="mx-2 text-white" size={16}/>
                                        <span className="text-sm font-medium text-white">REGULATORY DOCUMENTS</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Animated Documents List */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800">All Documents</h2>
                        <p className="text-sm text-gray-500 mt-1">{regulations.length} documents available</p>
                    </div>

                    <motion.ul
                        className="divide-y divide-gray-200"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {regulations.map((docName, index) => (
                            <motion.li
                                key={index}
                                variants={item}
                                whileHover={{
                                    scale: 1.01,
                                    backgroundColor: "#012152",
                                }}
                                whileTap={{scale: 0.98}}
                                className="group sideNav-links transition-colors cursor-pointer"
                            >
                                <div className="px-6 py-4 flex items-center">
                                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg mr-4">
                                        <FileText className="text-[#012152]" size={18}/>
                                    </div>
                                    <span className="text-gray-800 font-medium group-hover:text-white">
            {docName}
        </span>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default RegulatoryDocuments;
