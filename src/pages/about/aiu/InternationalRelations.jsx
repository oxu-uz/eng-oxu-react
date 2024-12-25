import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ChevronRight} from "lucide-react";

const InternationalRelations = () => {
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
                <img className="bg-image" src="/headerbg2.svg" alt=""/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1>International Relations Office</h1>
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
                                        International Relations Office
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container relative gap-5 justify-between flex mx-auto">
                <div>
                    <div className="flex w-full gap-10">
                        <img src="/international.jpg" className="h-[300px] object-cover  w-[224px]"/>
                        <div>
                            <h6 className="text-[#012152]">Babayev Suxrob Tuyg’unovich</h6>
                            <div className="line"></div>
                            <p className="text-gray-800 font-medium">The head of International relations department</p>
                            <div className="flex items-center divide-x gap-3">
                                <a href="mailto:•	international@oxu.uz"
                                   className="text-blue-600 font-medium">international@oxu.uz</a>
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

                            <div className="mb-6 mt-2">
                                <span className=" font-bold uppercase">Educational information</span>
                                <div className="flex flex-wrap gap-2 w-full"><span
                                    className="text-gray-700 font-bold"></span><p><span className="text-gray-700 mr-2">Graduate student of Bukhara State University (2007 - 2009)</span><br/><span
                                    className="text-gray-700 mr-2">Graduate student of Kazan Federal University (2022 - 2024) (Master's Degree)</span><br/><span
                                    className="text-gray-700 mr-2">Director of Strategic Development in the International Institute of Central Asian Studies (2019 - 2023)</span><br/><span
                                    className="text-gray-700 mr-2">Head of International Relations Department of Asia International University (2023)</span>
                                </p></div>
                            </div>
                        </div>
                    </div>

                    <h1 className="uppercase text-2xl mb-3 font-black text-white px-3 py-4 bg-[#012C6E] relative overflow-hidden">Meet
                        out team
                        <img src="/logo1.svg" className="opacity-20 h-52 absolute right-0 top-[-125%] rotate-[45deg]"/>
                    </h1>

                    <div className="flex mb-5 w-full gap-10">
                        <img src="/ashurbek.jpg" className="h-[300px] object-cover  w-[224px]"/>
                        <div>
                            <h6 className="text-[#012152]">Bahronov Ashurbek Bahodirovich</h6>
                            <div className="line"></div>
                            <div className="flex mt-2 items-center divide-x gap-3">
                                <a href="tel:+998(93)836-72-70"
                                   className="text-blue-600 font-medium">+998(93)836-72-70</a>
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

                            <div className="mb-6 mt-2">
                                <span className=" font-bold uppercase">Educational information</span>
                                <div className="flex flex-wrap gap-2 w-full"><span
                                    className="text-gray-700 font-bold"></span><p><span className="text-gray-700 mr-2">Bukhara State University, Bachelors of English Philology (2014-2018)</span><br/><span
                                    className="text-gray-700 mr-2">Yewon University, (Masters) Entertainment Management (2020-2022)</span><br/>
                                </p></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-10">
                            <img src="/mutti.jpg" className="h-[300px] object-cover  w-[224px]"/>
                            <div>
                                <h6 className="text-[#012152]">Mutti-Ur Rehman</h6>
                                <div className="line"></div>
                                <p className="text-gray-800 font-medium">Visiting Associate Professor (2023–2024):
                                    University of Nevada, Reno, USA.</p>
                                <div className="flex items-center divide-x gap-3">
                                    <a className="text-blue-600 font-medium">mutti.abbasi@gmail.com</a>
                                    <a className="text-blue-600 pl-3 font-medium">+1 755-287-4832</a>
                                </div>
                                <div className="flex flex-col mt-4 gap-y-3">
                                    <p className="text-gray-500  max-w-3xl">
                                        Dr. Mutti-Ur Rehman was a visiting associate
                                        professor of mathematics at the Department of Mathematics and Statistics,
                                        University of Nevada, Reno-USA during the period 2023-2024. Dr. Mutti-Ur Rehman
                                        has broad research interests in the area of Numerical Analysis. Some areas of
                                        interest include the Stability of numerical methods for differential equations,
                                        Matrix Nearness Problems, Matrix Computation, and Stability, and Instability
                                        analysis of feedback systems in the linear control theory. His main contribution
                                        to his Ph.D. thesis is the "Development of a novel iterative method to
                                        approximate the Structured Singular Values". He is a member of SIAM, Society for
                                        Industrial and Applied Mathematics; AMS, American Mathematical Society, and IMA,
                                        Institute of Mathematics and Applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-lg font-bold mt-6 mb-4 uppercase">Educational information</h2>
                        <div className="mb-6">
                            <div className="flex  flex-wrap gap-2 w-full"><span
                                className="text-gray-700 font-bold"></span>
                                <p><span className="text-gray-700 mr-2">Ph.D. in Mathematics (2013–2017): Gran Sasso Science Institute (GSSI) and SISSA, Italy</span><br/>
                                    <span className="text-gray-700 mr-2">Focus: Numerical Analysis (Structured Singular Values</span><br/>
                                    <span className="text-gray-700 mr-2">Postdoctoral Studies (2020–2021): Massachusetts Institute of Technology (MIT), USA</span><br/>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <aside className="w-1/4 sticky top-0 overflow-hidden">
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

export default InternationalRelations;
