import React from 'react';
import '../leadership/style.css'
import {ChevronRight} from "lucide-react";
import {Link, useLocation, useNavigate} from "react-router-dom";

const Registrar = () => {
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
         <section className="page-heading-content mb-5" data-cid="714">
                <img className="bg-image" src="/headerbg3.svg" alt="Header background" />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-2xl md:text-4xl font-bold">Registrar</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul className="flex flex-wrap items-center text-sm">
                                <li>
                                    <a href="/en" className="nav-link">
                                        Home <ChevronRight size="16" />
                                    </a>
                                </li>
                                <li>
                                    <span className="nav-link">
                                        About <ChevronRight size="16" />
                                    </span>
                                </li>
                                <li>
                                    <a className="nav-link" href="/about/aiu/registrar">
                                        Registrar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto flex flex-col md:flex-row gap-5 px-5 mb-10">
                <div>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <img src="/dehkanov.jpg" className="h-[300px]"/>
                        <div>
                            <h6 className="text-[#012152]">Dexkanov Bexruz Sobirovich</h6>
                            <div className="line"></div>
                            <p className="text-gray-800 font-medium">The head of administration department</p>
                            <div className="flex items-center divide-x gap-3">
                                <a className="text-blue-600 font-medium">rector@oxu.uz</a>
                                <a className="text-blue-600 pl-3 font-medium">+998 (55) 305-00-09</a>
                            </div>
                            <div className="flex flex-col mt-4 gap-y-3">
                                <p className="text-gray-500  max-w-5xl">The Registrar Office is responsible for the provisions of
                                    Administrative, HRM and Academic support to various departments/sections/campuses of
                                    the
                                    University. The core task of the Registrar is to execute or provide strict and
                                    straight
                                    administrative compliance / support and assistance to the Rector`s directive /orders
                                    in
                                    general. </p>
                                <p className="text-gray-500  ">Mr. Dexkanov Bexruz Sobirovich has been working as Head
                                    of
                                    the Registrar Office, AIU University since 2022 and currently, has been assigned to
                                    work
                                    as Registrar, AIU University</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-lg font-bold mt-6 mb-4 uppercase">Educational information</h2>
                    <div className="mb-6">
                        <div className="flex  flex-wrap gap-2 w-full"><span
                            className="text-gray-700 font-bold"></span><p><span className="text-gray-700 mr-2">Management Development Institute of Singapore in Tashkent (2016-2020) Bachelors of Business Management</span><br/>
                        </p></div>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full"><span
                            className="text-lg font-bold uppercase">Work schedule </span><p><span
                            className="text-gray-700 mr-2">Tuesday, Thursday and Friday from 15:00 to 17:00</span></p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full"><span
                            className="text-lg font-bold uppercase">Address</span><p><span
                            className="text-gray-700 mr-2">Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74</span>
                        </p></div>
                    </div>
                </div>
                <aside className="w-full md:w-1/2 overflow-hidden">
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

export default Registrar;
