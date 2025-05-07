import React from 'react';
import {ChevronRight} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";

const Mbbs = () => {
    const navigate = useNavigate();

    const navItems = [
        {label: "Find Program", path: "/find-programs"},
        {label: "MD", path: "/admissions/md"},
        {label: "MBBS", path: "/admissions/mbbs"},
        {label: "BSBA", path: "/admissions/bsba"},
        {label: "BSIT", path: "/admissions/bsit"},
        {label: "MBA", path: "/admissions/mba"}
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-64 md:h-96 overflow-hidden mb-5">
                <img
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    src="/medical-education-stethoscope-book-graduate-hat-medical-concept-blue-background-graduate.jpg"
                    alt="Medical education"
                />
                <div className="absolute inset-0 bg-[#012c6e]/70 flex flex-col justify-end">
                    <div className="container mx-auto px-4 md:px-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">MBBS Program</h1>

                        {/* Breadcrumb */}
                        <div className="breadcrumb py-3">
                            <ul className="flex flex-wrap items-center text-sm md:text-base text-white/80">
                                <li className="flex items-center">
                                    <a className="hover:text-white flex items-center" href="/">
                                        Home <ChevronRight className="mx-1" size="16"/>
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center mx-1">
                                        Admissions <ChevronRight className="mx-1" size="16"/>
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center mx-1">
                                        Find Programs <ChevronRight className="mx-1" size="16"/>
                                    </span>
                                </li>
                                <li>
                                    <a className="text-white font-medium" href="/admissions/mbbs">
                                        MBBS
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row px-4 md:px-6 lg:px-10 gap-6 lg:gap-10 mb-10">
                {/* Content Section */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1 text-gray-800 space-y-8">
                    {/* Introduction */}
                    <section className="space-y-4">
                        <p className="text-base md:text-lg font-medium leading-relaxed">
                            Embark on a rewarding journey to become a medical professional with the MBBS program at Asia
                            International University (AIU). Our program is designed to provide you with a solid
                            foundation in medical science, clinical skills, and patient care.
                        </p>
                    </section>

                    {/* Why Choose AIU */}
                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Why Choose AIU for Your MBBS?
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Comprehensive Curriculum",
                                    content: "Our MBBS program offers a well-rounded education that covers all essential aspects of medical science, from basic sciences to clinical practice. We ensure that our curriculum is aligned with international standards."
                                },
                                {
                                    title: "Expert Faculty",
                                    content: "Learn from a team of accomplished and experienced faculty members who are dedicated to your academic and professional growth. Our professors are active practitioners and researchers."
                                },
                                {
                                    title: "Modern Facilities",
                                    content: "AIU boasts state-of-the-art facilities, including advanced laboratories, simulation centers, and research facilities. These resources allow you to gain hands-on experience."
                                },
                                {
                                    title: "Clinical Exposure",
                                    content: "We believe that early and extensive clinical exposure is key to developing competent medical professionals. Our MBBS program includes clinical rotations at top hospitals."
                                },
                                {
                                    title: "International Perspective",
                                    content: "As a globally oriented university, AIU offers numerous opportunities for international exposure. Engage in student exchange programs and international medical conferences."
                                },
                                {
                                    title: "Supportive Academic Environment",
                                    content: "At AIU, your success is our priority. We offer a nurturing academic environment with personalized support services, academic advising, and mentorship programs."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 p-4 md:p-5 rounded-lg">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Program Structure */}
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Program Structure
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg">
                            <p className="text-sm md:text-base">
                                The MBBS program at AIU is structured over five years, followed by a one-year compulsory
                                internship. The first two years focus on preclinical subjects, such as anatomy,
                                physiology,
                                and biochemistry. The next three years are dedicated to clinical subjects, including
                                pathology, pharmacology, microbiology, and community medicine, as well as clinical
                                rotations.
                                The final year of internship provides hands-on experience in hospitals.
                            </p>
                        </div>
                    </section>

                    {/* Admission Requirements */}
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            Admission Requirements
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg">
                            <p className="text-sm md:text-base mb-3">
                                We seek dedicated and academically talented students who are passionate about pursuing a
                                career in medicine. Admission to the MBBS program is competitive, and we consider
                                applicants who
                                demonstrate:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                                <li>Strong academic performance, particularly in the sciences</li>
                                <li>A deep commitment to the field of medicine</li>
                                <li>Involvement in extracurricular activities</li>
                                <li>Proficiency in English</li>
                            </ul>
                        </div>
                    </section>

                    {/* How to Apply */}
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#012c6e] border-b pb-2">
                            How to Apply
                        </h2>
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg">
                            <p className="text-sm md:text-base">
                                If you're ready to take the first step toward a fulfilling career in medicine, we invite
                                you
                                to apply to the MBBS program at AIU. Our admissions team is here to support you
                                throughout the
                                application process. Visit our admissions page for detailed information.
                            </p>
                            <button
                                onClick={() => navigate('/admissions/apply')}
                                className="mt-4 bg-[#012c6e] text-white px-6 py-2 rounded-md hover:bg-[#0a37b3] transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    </section>
                </div>

                {/* Side Navigation - Hidden on mobile, shown on desktop */}
                <aside className="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 lg:sticky lg:top-32 h-max">
                    <div className="lg:pl-6">
                        <ul className="sideNav bg-white shadow-md rounded-lg overflow-hidden">
                            <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-3 md:p-4 group">
                                <span
                                    className="uppercase p-1 px-2 text-base md:text-lg font-bold flex items-center gap-3 z-10">
                                    Admission
                                    <img
                                        className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
                                        src="/arrow.svg"
                                        alt="Arrow"
                                    />
                                </span>
                                <span
                                    className="text-4xl md:text-5xl lg:text-7xl absolute font-bold opacity-10">AIU</span>
                                <img
                                    src="/Vector.svg"
                                    className="absolute opacity-10 h-12 md:h-16 lg:h-20 right-0 bottom-0"
                                    alt="Vector"
                                />
                            </li>

                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => navigate(item.path)}
                                    className={`sideNav-links transition-colors cursor-pointer p-3 md:p-4 ${
                                        location.pathname === item.path ? "sideNav-active" : ""
                                    }`}
                                >
                                    <span className="block text-sm md:text-base">{item.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Mbbs;