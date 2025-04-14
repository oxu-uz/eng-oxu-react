import React from 'react';
import {ChevronRight} from "lucide-react";
import {motion} from "framer-motion";
import {Link, useNavigate, useLocation} from "react-router-dom";

const LifeInBukhara = () => {
    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0},
    };

    const sectionVariants = {
        hidden: {opacity: 0, scale: 0.95},
        visible: {opacity: 1, scale: 1},
    };

    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {label: "About Uzbekistan", path: "/about-uzbekistan"},
        {label: "Life in bukhara", path: "/life-in-bukhara"}
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden mb-5 h-[150px] sm:h-[175px] md:h-[200px]">
                <img
                    className="absolute inset-0 w-full h-full object-cover bg-blue-900"
                    src="https://mediaim.expedia.com/destination/1/bc97c15b32d7c7b3c40c5d7dbffa4387.jpg"
                    alt="Bukhara"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="container mx-auto px-4 sm:px-6">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Life in Bukhara</h1>
                        <div className="breadcrumb">
                            <ul className="flex flex-wrap items-center text-sm sm:text-base">
                                <li className="flex items-center">
                                    <Link to="/en" className="text-white hover:text-gray-200 flex items-center">
                                        Home <ChevronRight size={14} className="ml-1"/>
                                    </Link>
                                </li>
                                <li className="flex items-center ml-1">
                                    <span className="text-white flex items-center">
                                        Life in Bukhara
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 gap-5 lg:gap-10 mb-10">
                {/* Mobile Navigation */}
                {/*<div className="lg:hidden mb-6">*/}
                {/*    <select*/}
                {/*        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700"*/}
                {/*        onChange={(e) => navigate(e.target.value)}*/}
                {/*        value={location.pathname}*/}
                {/*    >*/}
                {/*        {navItems.map((item, index) => (*/}
                {/*            <option key={index} value={item.path}>*/}
                {/*                {item.label}*/}
                {/*            </option>*/}
                {/*        ))}*/}
                {/*    </select>*/}
                {/*</div>*/}

                {/* Main Content */}
                <main className="w-full lg:w-2/3">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{duration: 0.6}}
                        className="container mx-auto px-0"
                    >
                        <div className="text-center mb-6 md:mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#00316b]">Discover the Vibrant Life in
                                Bukhara</h2>
                        </div>

                        {/* Info Cards - Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.2}}
                            >
                                <div
                                    className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg md:text-xl font-bold text-[#00316b] mb-2">Historical
                                        Significance</h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Bukhara is a storied city on the Silk Road with over 2,000 years of history,
                                        noted
                                        for its influence on Islamic culture and sciences.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.4}}
                            >
                                <div
                                    className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg md:text-xl font-bold text-[#00316b] mb-2">Architectural
                                        Heritage</h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Known for its magnificent architecture, Bukhara features the Kalyan Minaret, Ark
                                        Fortress, and many other historic mosques and madrasahs.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Info Cards - Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.6}}
                            >
                                <div
                                    className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg md:text-xl font-bold text-[#00316b] mb-2">UNESCO World
                                        Heritage Site</h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        The historic center of Bukhara is a UNESCO World Heritage site, emphasizing its
                                        global cultural value.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.8}}
                            >
                                <div
                                    className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg md:text-xl font-bold text-[#00316b] mb-2">Traditional
                                        Crafts</h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Bukhara is renowned for its traditional crafts, such as carpet weaving, pottery,
                                        and gold embroidery, reflecting its rich artisan heritage.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-6">
                            <div
                                className="group relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://minzifatravel.com/wp-content/uploads/2021/04/bukhara.jpg"
                                    loading="lazy"
                                    alt="Bukhara"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            <div
                                className="group relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                                <img
                                    src="https://minzifatravel.com/wp-content/uploads/2022/02/bukhara-uzbekistan-best-things-to-see-and-do-kalan-mosque-header.jpg"
                                    loading="lazy"
                                    alt="Bukhara Mosque"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            <div
                                className="group relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow sm:col-span-2">
                                <img
                                    src="https://uzbekistan.travel/storage/app/media/Otabek/asosiydagi%20rasmlar/cropped-images/shutterstock_1007253181-0-0-0-0-1728474450.jpg"
                                    loading="lazy"
                                    alt="Bukhara Streets"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            <div
                                className="group relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://mediaim.expedia.com/destination/1/0fa07e58724840de3c528174f4eb921a.jpg"
                                    loading="lazy"
                                    alt="Bukhara Architecture"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>

                        {/* Info Cards - Row 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 1.0}}
                            >
                                <div
                                    className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg md:text-xl font-bold text-[#00316b] mb-2">Vibrant Community
                                        Life</h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Daily life in Bukhara is vibrant, characterized by strong community bonds,
                                        traditional dining, and bustling social activities around central squares like
                                        Lyabi-Hauz.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 1.2}}
                            >
                                <div
                                    className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-lg md:text-xl font-bold text-[#00316b] mb-2">Urban
                                        Landscape</h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        The cityscape merges historical allure with modern living, with every part of
                                        the
                                        city offering a story of its rich past.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Climate Section */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{delay: 1.4}}
                            className="mt-6"
                        >
                            <div
                                className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg md:text-xl font-bold text-[#00316b] mb-2">Climate</h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    Bukhara experiences a continental climate, with hot, dry summers where temperatures
                                    can
                                    reach around 40°C (104°F) and cold winters with temperatures often dropping below
                                    freezing. Spring and autumn offer milder, more pleasant weather, making them ideal
                                    for
                                    visiting the city.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </main>

                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-full lg:w-1/3 sticky top-5 h-fit">
                    <div className="bg-white shadow-md overflow-hidden">
                        <ul className="divide-y divide-gray-200">
                            <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
    <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
        life in uzbekistan
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
                                    key={index}
                                    className={`px-4 py-3 cursor-pointer transition-colors ${
                                        location.pathname === item.path ? "bg-[#00316b]" : ""
                                    }`}
                                    onClick={() => navigate(item.path)}
                                >
                                    <div className="flex items-center  justify-between">
                                        <span className={`font-medium transition-colors ${
                                            location.pathname === item.path ? "text-white" : "text-gray-800"
                                        }`}>{item.label}</span>
                                        <ChevronRight size={16} className="text-gray-400"/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default LifeInBukhara;