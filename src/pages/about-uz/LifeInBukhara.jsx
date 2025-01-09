import React from 'react';
import { ChevronRight } from "lucide-react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {Link, useNavigate} from "react-router-dom";
import { Image } from "antd";
const LifeInBukhara = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };


    const navigate = useNavigate();

    const navItems = [
        { label: "About Uzbekistan", path: "/about-uzbekistan" },
        { label: "Life in bukhara", path: "/life-in-bukhara" }
    ];


    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{height: '175px'}} data-cid="714">
                <img className="bg-image bg-blue-900" src="https://mediaim.expedia.com/destination/1/bc97c15b32d7c7b3c40c5d7dbffa4387.jpg" alt="Bukhara"/>

                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Life in Bukhara</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link text-white" href="/en">Home<ChevronRight size="16"/></a>
                                </li>
                                <li className="sideNav-link">
                                    <span className="nav-link text-white">Life in Bukhara<ChevronRight
                                        size="16"/></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

         <div className="flex px-10 gap-10 mb-5">
             {/* Main Content */}
             <section className="container mx-auto px-5 ">
                 <motion.div
                     initial="hidden"
                     animate="visible"
                     variants={sectionVariants}
                     transition={{duration: 0.6}}
                 >
                     <div className="text-center mb-8">
                         <h2 className="text-3xl font-black text-[#00316b]">Discover the Vibrant Life in Bukhara</h2>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8">
                         {/* Historical Significance */}
                         <motion.div
                             variants={cardVariants}
                             initial="hidden"
                             animate="visible"
                             transition={{delay: 0.2}}
                         >
                             <div className="bg-white border border-[rgba(159,171,185,.2)] rounded-lg p-6">
                                 <h3 className="text-xl font-bold text-[#00316b]">Historical Significance</h3>
                                 <p className="text-gray-600 mt-2">
                                     Bukhara is a storied city on the Silk Road with over 2,000 years of history, noted
                                     for its influence on Islamic culture and sciences.
                                 </p>
                             </div>
                         </motion.div>

                         {/* Architectural Heritage */}
                         <motion.div
                             variants={cardVariants}
                             initial="hidden"
                             animate="visible"
                             transition={{delay: 0.4}}
                         >
                             <div className="bg-white border border-[rgba(159,171,185,.2)] rounded-lg p-6">
                                 <h3 className="text-xl font-bold text-[#00316b]">Architectural Heritage</h3>
                                 <p className="text-gray-600 mt-2">
                                     Known for its magnificent architecture, Bukhara features the Kalyan Minaret, Ark
                                     Fortress, and many other historic mosques and madrasahs.
                                 </p>
                             </div>
                         </motion.div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8 mt-8">
                         {/* UNESCO World Heritage */}
                         <motion.div
                             variants={cardVariants}
                             initial="hidden"
                             animate="visible"
                             transition={{delay: 0.6}}
                         >
                             <div className="bg-white border border-[rgba(159,171,185,.2)] rounded-lg p-6">
                                 <h3 className="text-xl font-bold text-[#00316b]">UNESCO World Heritage Site</h3>
                                 <p className="text-gray-600 mt-2">
                                     The historic center of Bukhara is a UNESCO World Heritage site, emphasizing its
                                     global cultural value.
                                 </p>
                             </div>
                         </motion.div>

                         {/* Traditional Crafts */}
                         <motion.div
                             variants={cardVariants}
                             initial="hidden"
                             animate="visible"
                             transition={{delay: 0.8}}
                         >
                             <div className="bg-white border border-[rgba(159,171,185,.2)] rounded-lg p-6">
                                 <h3 className="text-xl font-bold text-[#00316b]">Traditional Crafts</h3>
                                 <p className="text-gray-600 mt-2">
                                     Bukhara is renowned for its traditional crafts, such as carpet weaving, pottery,
                                     and
                                     gold embroidery, reflecting its rich artisan heritage.
                                 </p>
                             </div>
                         </motion.div>
                     </div>

                     <div className="grid grid-cols-2 my-5 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                         {/* image - start */}
                         <a
                             href="#"
                             className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                         >
                             <img
                                 src="https://minzifatravel.com/wp-content/uploads/2021/04/bukhara.jpg"
                                 loading="lazy"
                                 alt="Photo by Minh Pham"
                                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                             />
                             <div
                                 className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                         </a>
                         {/* image - end */}
                         {/* image - start */}
                         <a
                             href="#"
                             className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                         >
                             <img
                                 src="https://minzifatravel.com/wp-content/uploads/2022/02/bukhara-uzbekistan-best-things-to-see-and-do-kalan-mosque-header.jpg"
                                 loading="lazy"
                                 alt="Photo by Magicle"
                                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                             />
                             <div
                                 className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                         </a>
                         {/* image - end */}
                         {/* image - start */}
                         <a
                             href="#"
                             className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                         >
                             <img
                                 src="https://uzbekistan.travel/storage/app/media/Otabek/asosiydagi%20rasmlar/cropped-images/shutterstock_1007253181-0-0-0-0-1728474450.jpg"
                                 loading="lazy"
                                 alt="Photo by Martin Sanchez"
                                 className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                             />
                             <div
                                 className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                         </a>
                         {/* image - end */}
                         {/* image - start */}
                         <a
                             href="#"
                             className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                         >
                             <img
                                 src="https://mediaim.expedia.com/destination/1/0fa07e58724840de3c528174f4eb921a.jpg"
                                 loading="lazy"
                                 alt="Photo by Lorenzo Herrera"
                                 className="absolute inset-0 h-full w-full object-cover object-right transition duration-200 group-hover:scale-110"
                             />
                             <div
                                 className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                         </a>
                         {/* image - end */}
                     </div>

                     <div className="grid md:grid-cols-2 gap-8 mt-8">
                         {/* Vibrant Community Life */}
                         <motion.div
                             variants={cardVariants}
                             initial="hidden"
                             animate="visible"
                             transition={{delay: 1}}
                         >
                             <div className="bg-white border border-[rgba(159,171,185,.2)] rounded-lg p-6">
                                 <h3 className="text-xl font-bold text-[#00316b]">Vibrant Community Life</h3>
                                 <p className="text-gray-600 mt-2">
                                     Daily life in Bukhara is vibrant, characterized by strong community bonds,
                                     traditional dining, and bustling social activities around central squares like
                                     Lyabi-Hauz.
                                 </p>
                             </div>
                         </motion.div>

                         {/* Urban Landscape */}
                         <motion.div
                             variants={cardVariants}
                             initial="hidden"
                             animate="visible"
                             transition={{delay: 1.2}}
                         >
                             <div className="bg-white border border-[rgba(159,171,185,.2)] rounded-lg p-6">
                                 <h3 className="text-xl font-bold text-[#00316b]">Urban Landscape</h3>
                                 <p className="text-gray-600 mt-2">
                                     The cityscape merges historical allure with modern living, with every part of the
                                     city offering a story of its rich past.
                                 </p>
                             </div>
                         </motion.div>
                     </div>

                     {/* Climate */}
                     <motion.div
                         variants={cardVariants}
                         initial="hidden"
                         animate="visible"
                         transition={{delay: 1.4}}
                     >
                         <div className="bg-white border border-[rgba(159,171,185,.2)] rounded-lg p-6 mt-8">
                             <h3 className="text-xl font-bold text-[#00316b]">Climate</h3>
                             <p className="text-gray-600 mt-2">
                                 Bukhara experiences a continental climate, with hot, dry summers where temperatures can
                                 reach around 40°C (104°F) and cold winters with temperatures often dropping below
                                 freezing. Spring and autumn offer milder, more pleasant weather, making them ideal for
                                 visiting the city.
                             </p>
                         </div>
                     </motion.div>
                 </motion.div>

             </section>

             <aside className="w-1/2 max-h-max sticky top-32 overflow-hidden">
                 <ul className="sideNav">
                     <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
    <span className="uppercase p-1 px-2 text-lg font-black flex items-center gap-3 z-10">
        life in uzbekistan
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

export default LifeInBukhara;
