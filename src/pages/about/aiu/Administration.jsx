import React from 'react';
import '../leadership/style.css'
import {ChevronRight} from "lucide-react";
import {Link, useLocation, useNavigate} from "react-router-dom";

const Administration = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { label: "Vision", path: "/about/aiu/vision" },
        { label: "Mission", path: "/about/aiu/mission" },
        { label: "History", path: "/about/aiu/history" },
        { label: "Registrar", path: "/about/aiu/registrar" },
        { label: "Administration", path: "/about/aiu/administration" },
        { label: "International Relations Office", path: "/about/aiu/international-relations" },
    ];
    return (
        <div>
            <section className="page-heading-content mb-5 " data-cid="714">
                <img className="bg-image" src="/headerbg2.svg" alt=""/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1>Administration</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li>
                                    <a className="nav-link" href="/en">Home<ChevronRight size="16"/></a>
                                </li>
                                <li>
                                                                    <span className="nav-link">
                                About
                                                                                   <ChevronRight size="16"/>
                                                                    </span>
                                </li>
                                <li>
                                    <a className="nav-link" href="/about/aiu/administration">
                                        Administration
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container gap-5 justify-between flex mx-auto">
                <div>
                    <div className="flex w-full gap-10">
                        <img src="/hr.jpg" className="h-[300px] object-cover  w-[224px]"/>
                        <div>
                            <h6 className="text-[#012152]">Klicheva Gulnoza Odiljonovna</h6>
                            <div className="line"></div>
                            <p className="text-gray-800 font-medium">The head of HR and Organizational Control
                                Department</p>
                            <div className="flex items-center divide-x gap-3">
                                <a href="mailto:hr@oxu.uz" className="text-blue-600 font-medium">hr@oxu.uz</a>
                                <a className="text-blue-600 pl-3 font-medium">+998 (93) 471-00-01</a>
                            </div>

                            <div className="my-3">
                                <div className="flex justify-between flex-wrap gap-2 w-full"><span
                                    className=" font-bold uppercase">Work schedule </span><p><span
                                    className="text-gray-700 mr-2">Tuesday, Thursday and Friday from 15:00 to 17:00</span>
                                </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between flex-wrap gap-2 w-full"><span
                                    className="font-bold uppercase">Address</span><p><span
                                    className="text-gray-700 mr-2">Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74</span>
                                </p></div>
                            </div>


                            <div className="tg-bg"><h5>Check the university's official vacancy website</h5> <a
                                href="https://vacancy.oxu.uz">
                                <button className="mt-2">www.vacancy.oxu.uz</button>
                            </a></div>

                        </div>
                    </div>
                    <h2 className="text-lg font-bold mt-6 mb-4 uppercase">Educational information</h2>
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2 w-full"><span
                            className="text-gray-700 font-bold"></span><p><span className="text-gray-700 mr-2">Bukhara Institute of Food and Light Industry Technology (2006 - 2010)</span><br/><span
                            className="text-gray-700 mr-2">Manager of Vocational Education Faculty in Bukhara Institute of Food and Light Industry Technology (2007 - 2011)</span><br/><span
                            className="text-gray-700 mr-2">Teacher of the Department of Information Technologies, Bukhara Pedagogical College (2010 - 2019)</span><br/><span
                            className="text-gray-700 mr-2">Manager of a sports school specialized in sport Yakka Kurash in Bukhara region (2019 - 2022)</span><br/><span
                            className="text-gray-700 mr-2">Head of Human Resources and Organizational Control, Asia International University (2022)</span><br/>
                        </p></div>
                    </div>

                </div>
                <aside className="w-1/4 overflow-hidden">
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

export default Administration;
