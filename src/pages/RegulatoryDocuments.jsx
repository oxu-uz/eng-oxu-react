import React from 'react';
import {ChevronRight} from "lucide-react";

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


    return (
        <div className="bg-gray-100">
            <section className="page-heading-content mb-5" style={{height: "175px"}} data-cid="714">
                <img className="bg-image bg-blue-900" src="/66e36e9d6e251891f12cc791_Managed IT Services.jpg" alt="Scholarship"/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Regulatory Documents</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link text-white" href="/">
                                        Home<ChevronRight size="16"/>
                                    </a>
                                </li>
                                <li className="sideNav-link">
                                    <span className="nav-link text-white">Regulatory Documents</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <ul className="space-y-2 p-5 flex flex-col divide-y divide-[rgba(159,171,185,.2)] list-none list-inside">
                {regulations.map((item, index) => (
                    <li key={index} className="text-gray-700 py-3">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegulatoryDocuments;
