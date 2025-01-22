import React from 'react';
import {ChevronRight} from "lucide-react";
import {FaEye, FaRegEye} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FiTarget} from "react-icons/fi";

const History = () => {
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
                        <h1>AIU History</h1>
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
                                    <a className="nav-link" href="/about/aiu/history">
                                        History
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container flex gap-5 mb-10 mx-auto">
                <p className="text-gray-800 max-w-[1000px] min-h-40 centerCards  relative font-medium">
                    Asia International University began its operations under license № 047757. Currently, 6,250 students
                    are enrolled, including 721 in the medical program. The university also hosts 340 postgraduate
                    students. With 20 bachelor's programs, 8 master's programs, 25 residency programs, 5 doctoral
                    programs, and 4 distance learning programs, students can choose from full-time, part-time, or
                    evening classes. The university comprises 2 faculties and 6 departments, staffed by 26 professors
                    and over 130 instructors. To enhance the practical training of our students, we have established
                    agreements with various economic organizations, pre-school education departments, and healthcare
                    institutions. Medical students gain hands-on experience at designated treatment centers, learning
                    from qualified professionals. High-achieving students are recognized with a special Rector's
                    Scholarship. Our campus is well-equipped with facilities tailored to each field of study, including
                    2 laboratories, 5 computer rooms, and smart classrooms. We are also in the process of opening a new
                    7-story building for medical students, featuring state-of-the-art classrooms, laboratories,
                    practical rooms, a canteen, and other essential amenities for a high-quality education. At Asia
                    International University, we are committed to providing excellent education and ensuring our
                    graduates become experts in their fields.
                </p>
                <aside className="w-1/2 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
    <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
        University
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

export default History;
