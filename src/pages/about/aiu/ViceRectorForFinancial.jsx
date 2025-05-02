import React from 'react';
import '../leadership/style.css'
import {ChevronRight} from "lucide-react";
import {Link, useLocation, useNavigate} from "react-router-dom";

const ViceRectorForFinancial = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        {label: "Vision", path: "/about/aiu/vision"},
        {label: "Mission", path: "/about/aiu/mission"},
        {label: "History", path: "/about/aiu/history"},
        {label: "Administration", path: "/about/aiu/administration"},
        {label: "Vice-rector for academic affairs", path: "/about/aiu/vice-rector/academic"},
        {
            label: "First vice-rector for youth policy and recreational and educational affairs",
            path: "/about/aiu/vice-rector/youth"
        },
        {label: "Vice-rector for scientific affairs and innovations", path: "/about/aiu/vice-rector/innovation"},
        {label: "Vice-rector for financial and economic affairs", path: "/about/aiu/vice-rector/financial"},
        {label: "Head of Administration Department", path: "/about/aiu/registrar"},
        // { label: "International Relations Office", path: "/about/aiu/international-relations" },
    ];
    return (
        <div>
            <section className="page-heading-content mb-5" data-cid="714">
                <img className="bg-image" src="/headerbg3.svg" alt="Header background"/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-2xl md:text-4xl font-bold">VVICE-RECTOR FOR FINANCIAL AND ECONOMIC AFFAIRS</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul className="flex flex-wrap items-center text-sm">
                                <li>
                                    <a href="/en" className="nav-link">
                                        Home <ChevronRight size="16"/>
                                    </a>
                                </li>
                                <li>
                                    <span className="nav-link">
                                        About <ChevronRight size="16"/>
                                    </span>
                                </li>
                                <li>
                                    <a className="nav-link" href="/about/aiu/vice-rector/innovation">
                                        VICE-RECTOR FOR FINANCIAL AND ECONOMIC AFFAIRS
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
                        <img src="/_MG_5005.jpg" className="h-[300px] object-cover  w-[224px]"/>
                        <div>
                            <h6 className="text-[#012152]">Bafoev Ilkhom Inoyatovich</h6>
                            <div className="line"></div>
                            <p className="text-gray-800 font-medium">Vice-rector for financial and economic affairs</p>
                            <div className="flex items-center divide-x gap-3">
                                {/*<a className="text-blue-600 font-medium">rector@oxu.uz</a>*/}
                                <a className="text-blue-600 pl-3 font-medium">+998 (55) 305-00-09</a>
                            </div>
                            <div className="mb-6 mt-6">
                                <div className="flex justify-between items-center flex-wrap gap-2 w-full"><span
                                    className="text-lg font-bold uppercase">Work schedule </span><p><span
                                    className="text-gray-700 mr-2">Every day from 09.00 to 18.00</span></p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between items-center flex-wrap gap-2 w-full"><span
                                    className="text-lg font-bold uppercase">Address</span><p><span
                                    className="text-gray-700 mr-2">Bukhara city, "Yangiabad MFY", Gijduvan street, house 74.</span>
                                </p></div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-lg font-bold mt-6 mb-4 uppercase">Educational Information</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-gray-400 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Tashkent Institute of National Economy</span> (1985)
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-3 h-3 bg-gray-400 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                            <div>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Academy of State and Society Building under the President of the Republic of Uzbekistan</span> (Physical Education)
                                    (Master's degree) (2003)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="w-full md:w-1/3 overflow-hidden">
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

export default ViceRectorForFinancial;

