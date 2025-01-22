import React, {useState} from 'react';
import {ChevronRight} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {Carousel} from "antd";
import { motion } from 'framer-motion';

const Md = () => {
    const navigate = useNavigate();

    const navItems = [
        { label: "MD", path: "/admissions/md" },
        { label: "MBBS", path: "/admissions/mbbs" }
    ];


    return (
        <div>
            <section className="page-heading-content mb-5 " data-cid="714">
                <img className="bg-image" src="/doctor-doing-their-work-pediatrics-office.jpg" alt=""/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1>MD Program </h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/">Home<ChevronRight size="16"/></a>
                                </li>
                                <li className="sideNav-link">
                                                                    <span className="nav-link">
                                Admissions
                                                                                   <ChevronRight size="16"/>
                                                                    </span>
                                </li>
                                <li className="sideNav-link">
                                                                    <span className="nav-link">
                                Find Programs
                                                                                   <ChevronRight size="16"/>
                                                                    </span>
                                </li>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/admissions/md">
                                        MD
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex px-10 gap-10 mb-5">
                <div className="w-full mx-auto text-gray-800 space-y-10">
                    <section className="space-y-6">
                        <p className="text-lg font-semibold">
                            Welcome to the MD Program at Asia International University (AIU), where we offer a
                            comprehensive
                            and rigorous medical education that prepares you to become a competent and compassionate
                            healthcare professional. Our program is designed for students who are passionate about
                            medicine
                            and committed to making a difference in the lives of others.
                        </p>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#012c6e] border-b pb-3">Why Choose AIU for Your Medical
                            Education?</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">High-Quality Education</h3>
                                <p className="text-base">
                                    Our MD program is built on a foundation of excellence in medical education,
                                    combining
                                    cutting-edge research, innovative teaching methods, and a strong emphasis on
                                    clinical
                                    practice. Our curriculum is continuously updated to reflect the latest advancements
                                    in
                                    medicine, ensuring you receive a modern and relevant education.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Experienced Faculty</h3>
                                <p className="text-base">
                                    Learn from a diverse team of experienced and dedicated faculty members who are
                                    leaders
                                    in their respective fields. Our professors are not only educators but also active
                                    practitioners and researchers, providing you with insights into the real-world
                                    applications of medical knowledge.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">State-of-the-Art Facilities</h3>
                                <p className="text-base">
                                    At AIU, we believe that hands-on experience is crucial to medical education. Our
                                    university is equipped with state-of-the-art laboratories, simulation centers, and
                                    research facilities that allow you to apply your theoretical knowledge in a
                                    practical
                                    setting.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Clinical Training and
                                    Internships</h3>
                                <p className="text-base">
                                    Gain practical experience through extensive clinical training and internships at
                                    leading
                                    hospitals and medical centers. Our partnerships with top healthcare institutions
                                    provide
                                    you with the opportunity to work alongside experienced professionals, honing your
                                    skills
                                    in real-world environments.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">International Opportunities</h3>
                                <p className="text-base">
                                    As an international university, we offer unique opportunities for global exposure.
                                    You
                                    can participate in exchange programs, attend international conferences, and
                                    collaborate
                                    on research projects with peers from around the world, broadening your horizons and
                                    enhancing your medical education.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Supportive Learning Environment</h3>
                                <p className="text-base">
                                    At AIU, we prioritize your success. Our supportive learning environment ensures that
                                    you
                                    have access to the resources you need to excel, including academic advising,
                                    mentorship
                                    programs, and personalized support services.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#012c6e] border-b pb-3">Program Structure</h2>
                        <p className="text-base">
                            Our MD program spans six years, with the first two years focused on preclinical studies,
                            where
                            you will build a strong foundation in the basic sciences. The next three years involve
                            intensive
                            clinical training, with rotations in various medical specialties, allowing you to apply your
                            knowledge in real-world settings. The final year is dedicated to advanced clinical practice
                            and
                            preparation for licensing exams.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#012c6e] border-b pb-3">Admission Requirements</h2>
                        <p className="text-base">
                            We seek motivated and academically strong candidates who are ready to take on the challenges
                            of
                            medical education. Admission to our MD program is competitive, and we look for applicants
                            who
                            demonstrate:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A solid academic background, particularly in the sciences</li>
                            <li>A strong commitment to the medical profession</li>
                            <li>Relevant extracurricular activities, such as volunteer work or research experience</li>
                            <li>Proficiency in English, with a required minimum score on language proficiency tests</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#012c6e] border-b pb-3">How to Apply</h2>
                        <p className="text-base">
                            If you’re ready to embark on a rewarding journey in medicine, we invite you to apply to the
                            MD
                            program at AIU. Our admissions team is here to guide you through the application process and
                            answer any questions you may have. Visit our admissions page to learn more about the
                            application
                            requirements, deadlines, and how to submit your application.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#012c6e] border-b pb-3">Join Us at Asia International
                            University</h2>
                        <p className="text-base">
                            Becoming a doctor is not just a career choice—it’s a calling. At AIU, we are dedicated to
                            helping you achieve your dream of becoming a skilled and compassionate physician. Join us
                            and
                            start your journey towards a fulfilling and impactful career in medicine.
                        </p>
                    </section>
                </div>
                <aside className="w-1/2 max-h-max sticky top-32 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
    <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
       FIND PROGRAMS
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
                                className={`sideNav-links transition-colors cursor-pointer ${
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

export default Md;
