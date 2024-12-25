import React from 'react';
import {ChevronRight} from "lucide-react";
import {FaEye, FaRegEye} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router-dom";

const Vision = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        {label: "Vision", path: "/about/aiu/vision"},
        {label: "Mission", path: "/about/aiu/mission"},
        {label: "History", path: "/about/aiu/history"},
        {label: "Registrar", path: "/about/aiu/registrar"},
        {label: "Administration", path: "/about/aiu/administration"},
        {label: "International Relations Office", path: "/about/aiu/international-relations"},
    ];

    return (
        <div>
            <section className="page-heading-content mb-5 " data-cid="714">
                <img className="bg-image" src="/headerbg3.svg" alt=""/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1>Ensuring Excellence in Medical Education</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/en">Home<ChevronRight size="16"/></a>
                                </li>
                                <li className="sideNav-link">
                                                                    <span className="nav-link">
                                About
                                                                                   <ChevronRight size="16"/>
                                                                    </span>
                                </li>
                                <li className="sideNav-link">
                                                                    <span className="nav-link">
                                AIU
                                                                                   <ChevronRight size="16"/>
                                                                    </span>
                                </li>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/about/aiu/vision">
                                        Vision
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container flex gap-5 mb-10 mx-auto">
                <p className="text-gray-800 min-h-40 centerCards max-w-4xl overflow-hidden relative font-medium">Our vision, "Ensuring
                    Excellence in Medical Education," is to be a premier institution recognized for our unwavering
                    commitment to nurturing the next generation of healthcare professionals. We aspire to provide a
                    transformative learning environment that fosters academic rigor, critical thinking, and ethical
                    practice, empowering students to excel in their medical careers. By integrating innovative teaching
                    methods, cutting-edge research, and hands-on clinical experience, we envision equipping our
                    graduates with the knowledge, skills, and compassion necessary to make a positive impact in the
                    healthcare field and improve the well-being of communities worldwide. Our goal is to set new
                    standards of excellence in medical education and contribute significantly to the advancement of
                    healthcare globally.
                    <FaRegEye size="200" className="opacity-10 absolute right-10 bottom-0"/>
                </p>
                <aside className="w-1/2 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
    <span className="uppercase p-1 px-2 text-lg font-black flex items-center gap-3 z-10">
        University
        <img
            className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
            src="/arrow.svg"
            alt="Arrow"
        />
    </span>
                            <span className="text-7xl absolute font-black opacity-10">AIU</span>
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

export default Vision;
