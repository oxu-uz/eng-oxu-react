import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {ChevronRight, Briefcase, MapPin, Clock, GraduationCap, Globe, Users, Award, BookOpen} from "lucide-react";

const InternationalRelations = () => {
    const location = useLocation();

    const navItems = [
        {label: "ERASMUS+", path: "https://erasmus-plus.ec.europa.eu/"},
    ];

    const partnerLogos = [
        { src: "/Рисунок5.png", width: "w-[230px]" },
        { src: "/Group 1410110485.png", width: "w-[120px]" },
        { src: "/kfu_logo_0.jpg", width: "w-[250px]" },
        { src: "/okanlogo.webp", width: "w-[100px]", containerClass: "flex items-center w-[200px]" },
        { src: "/nara.webp", width: "w-[250px]" },
        { src: "/originl.webp", width: "w-[250px]" },
        { src: "/logonet.png", width: "w-[250px]" },
        { src: "/diulogoside.png", width: "w-[250px]" },
        { src: "/web-undip-logo.png", width: "w-[250px]" },
        { src: "/imisp-logo-blue-cyr2.png", width: "w-[250px]" },
        { src: "/uomusLogo.png", width: "w-[150px]", containerClass: "flex items-center w-[220px]" },
        { src: "/photo_2025-05-02_14-59-35.jpg", width: "w-[250px]" },
        { src: "/photo_2025-05-02_14-59-35 (2).jpg", width: "w-[250px]" },
        { src: "/photo_2025-05-02_14-59-35 (3).jpg", width: "w-[200px]" },
        { src: "/photo_2025-05-02_14-59-35 (4).jpg", width: "w-[250px]" },
        { src: "/photo_2025-05-02_14-59-35 (5).jpg", width: "w-[180px]" },
        { src: "/photo_2025-05-02_14-59-36.jpg", width: "w-[250px]" },
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section style={{height:'450px'}} className="relative page-heading-content mb-12" data-cid="714">
                <img className="bg-image object-cover" src="/international-office-bg.jpg" alt="International Relations Office"/>
                <div className="absolute inset-0 bg-[#0a37b3]/60"></div>
                <div className="heading-content relative">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">International Relations Office</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li>
                                    <a className="nav-link text-white hover:text-blue-200" href="/en">Home<ChevronRight size="16"/></a>
                                </li>
                                <li>
                                    <span className="nav-link text-white">
                                        About
                                        <ChevronRight size="16"/>
                                    </span>
                                </li>
                                <li>
                                    <a className="nav-link text-white font-medium" href="/international-relations">
                                        International Relations
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto flex flex-col md:flex-row gap-8 px-5 mb-16">
                {/* Main Content */}
                <div className="flex-1 space-y-8">
                    {/* Staff Information */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="flex flex-col md:flex-row items-start gap-8">
                            <div className="relative">
                                <img
                                    src="/structureUni/fotor-20250505122327.png"
                                    className="w-48 h-48 object-cover rounded-full border-4 border-[#0a37b3]"
                                    alt="Head of International Relations"
                                />
                                <div className="absolute inset-0 rounded-full border-2 border-white -m-1"></div>
                            </div>

                            <div className="flex-1">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-[#0a37b3]">Inoyatov Boymurod Negmurodovich</h2>
                                    <p className="text-lg text-gray-700 font-medium mt-1">Head of International Relations</p>
                                </div>

                                <div className="space-y-5">
                                    <div className="flex items-start">
                                        <Briefcase className="text-[#0a37b3] mt-1 mr-3 flex-shrink-0" size={20}/>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Work Schedule</h4>
                                            <p className="text-gray-600">Monday to Friday: 09:00 - 18:00</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <MapPin className="text-[#0a37b3] mt-1 mr-3 flex-shrink-0" size={20}/>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Office Address</h4>
                                            <p className="text-gray-600">
                                                74 Gijduvan Street<br/>
                                                Yangiabad MFY<br/>
                                                Bukhara, Uzbekistan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="text-[#0a37b3] mt-1 mr-3 flex-shrink-0" size={20}/>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Contact Information</h4>
                                            <p className="text-gray-600">+998 (99) 224-00-09</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-xl font-bold text-[#0a37b3] mb-6 flex items-center">
                                <GraduationCap className="mr-3 text-[#0a37b3]" size={24}/>
                                Academic Background
                            </h2>

                            <div className="space-y-6 pl-2">
                                <div className="pl-6 border-l-2 border-blue-700 relative">
                                    <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-blue-700 border-2 border-white"></div>
                                    <h3 className="font-semibold text-gray-800">
                                        Uzbekistan State University of Foreign Languages
                                    </h3>
                                    <p className="text-gray-600">2016 - 2019</p>
                                    <p className="text-gray-500 mt-1">Bachelor's Degree in International Relations</p>
                                </div>

                                <div className="pl-6 border-l-2 border-blue-700 relative">
                                    <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-blue-700 border-2 border-white"></div>
                                    <h3 className="font-semibold text-gray-800">
                                        Ulster University
                                    </h3>
                                    <p className="text-gray-600">2019 - 2022</p>
                                    <p className="text-gray-500 mt-1">Master's Program in Global Studies</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Department Overview Card */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-[#0a37b3] mb-6 flex items-center">
                            <Globe className="mr-3 text-[#0a37b3]" size={24}/>
                            About Our Department
                        </h2>
                        <div className="prose max-w-none text-gray-700">
                            <p className="mb-4">
                                The International Relations Department at Asia International University (AIU) is dedicated to fostering a globally integrated educational environment through strategic partnerships, academic mobility, and international accreditation.
                            </p>
                            <p className="mb-4">
                                AIU collaborates with universities and organizations in over 15 countries, including the USA and several European nations, to enhance academic exchange, joint research, and professional opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Key Focus Areas */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-[#0a37b3] mb-6">Key Focus Areas</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Global Partnerships */}
                            <div className="border-l-4 border-blue-700 pl-4">
                                <div className="flex items-center mb-3">
                                    <Users className="text-[#0a37b3] mr-3" size={20}/>
                                    <h3 className="text-xl font-semibold text-gray-800">Global Partnerships</h3>
                                </div>
                                <p className="text-gray-700">
                                    AIU has built strong ties with international universities, research institutes, embassies, and global organizations to support academic collaboration, research, and internship opportunities.
                                </p>
                            </div>

                            {/* Academic Mobility */}
                            <div className="border-l-4 border-blue-700 pl-4">
                                <div className="flex items-center mb-3">
                                    <Globe className="text-[#0a37b3] mr-3" size={20}/>
                                    <h3 className="text-xl font-semibold text-gray-800">Academic Mobility</h3>
                                </div>
                                <p className="text-gray-700">
                                    Through student and faculty exchange programs, international workshops, and conferences, the department promotes cross-cultural learning and professional development.
                                </p>
                            </div>

                            {/* International Accreditation */}
                            <div className="border-l-4 border-blue-700 pl-4">
                                <div className="flex items-center mb-3">
                                    <Award className="text-[#0a37b3] mr-3" size={20}/>
                                    <h3 className="text-xl font-semibold text-gray-800">International Accreditation</h3>
                                </div>
                                <p className="text-gray-700">
                                    AIU pursues global accreditations to ensure its programs meet international standards and follow best practices in higher education.
                                </p>
                            </div>

                            {/* Global Research */}
                            <div className="border-l-4 border-blue-700 pl-4">
                                <div className="flex items-center mb-3">
                                    <BookOpen className="text-[#0a37b3] mr-3" size={20}/>
                                    <h3 className="text-xl font-semibold text-gray-800">Global Research & Policy</h3>
                                </div>
                                <p className="text-gray-700">
                                    The department encourages students and faculty to engage in international research and contribute to policy development at the global level.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-gray-700">
                                Through these initiatives, AIU prepares its academic community to thrive in an interconnected world, supporting global competency and academic excellence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Navigation */}
                <aside className="w-full md:w-1/3">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                        <ul className="divide-y divide-gray-200">
                            <li className="p-4 bg-[#0a37b3] text-white">
                                <h3 className="font-bold text-lg">International Programs</h3>
                            </li>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        target={item.path.startsWith('http') ? '_blank' : '_self'}
                                        className={`block p-4 hover:bg-blue-50 transition-colors ${location.pathname === item.path ? 'text-[#0a37b3] font-medium' : 'text-gray-700'}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Partner Universities Section */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-4 bg-[#0a37b3] text-white">
                            <h3 className="font-bold text-lg">Partner Universities</h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                                {partnerLogos.map((logo, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-center items-center p-3 bg-gray-50 rounded ${logo.containerClass || ''}`}
                                    >
                                        <img
                                            src={logo.src}
                                            alt={`Partner University ${index + 1}`}
                                            className={`${logo.width} h-auto max-h-16 object-contain`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default InternationalRelations;