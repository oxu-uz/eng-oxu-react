import React from "react";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import { motion } from "framer-motion";
import {Link, useNavigate} from "react-router-dom";

const AboutUz = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    const sections = [
        {
            title: "Geography",
            text: "Uzbekistan is located in Central Asia, bordered by Kazakhstan to the north, Kyrgyzstan to the northeast, Tajikistan to the southeast, Afghanistan to the south, and Turkmenistan to the southwest. It is a landlocked country known for its diverse landscapes, including deserts, fertile valleys, and mountain ranges.",
            image: "https://minzifatravel.com/wp-content/uploads/2021/04/bukhara.jpg",
        },
        {
            title: "History",
            text: "Uzbekistan has a rich history influenced by various empires and cultures, including the Persian Empire, Alexander the Great's conquests, and the caliphates. It flourished during the Silk Road era, with cities like Samarkand and Bukhara becoming renowned centers of trade, culture, and science.",
            image: "https://dancingpandas.com/wp-content/uploads/2023/06/20230406_134139-compressed-1024x577.jpg",
        },
        {
            title: "Culture",
            text: "Uzbekistan is famous for its contributions to arts, particularly in traditional dance, music, and handicrafts like ceramics, carpets, and embroidery. The architectural heritage is notable, with landmarks such as the Registan in Samarkand and the Ark Fortress in Bukhara.",
            image: "https://minzifatravel.com/wp-content/uploads/2022/02/bukhara-uzbekistan-best-things-to-see-and-do-kalan-mosque-header.jpg",
        },
        {
            title: "Population",
            text: "The population is around 35 million, making it the most populous country in Central Asia. The majority of the population is ethnic Uzbek, with Russian, Tajik, Kazakh, and other minority groups also present.",
            image: "https://mediaim.expedia.com/destination/1/bc97c15b32d7c7b3c40c5d7dbffa4387.jpg",
        },
        {
            title: "Economy",
            text: "Uzbekistan's modern economy is transitioning from a centrally planned system to a market-oriented one, driven by significant reforms. Agriculture remains vital, particularly cotton production. The country is rich in resources like gold and natural gas, with mining and energy being key sectors.",
            image: "https://trvlland.com/wp-content/uploads/2022/09/uzbekistan_tashkent-3.jpg",
        },
        {
            title: "Tourism",
            text: "Uzbekistan's tourism sector is flourishing due to its rich history and stunning architectural sites, especially those connected to the ancient Silk Road. Key destinations include the cities of Samarkand, Bukhara, and Khiva, known for their impressive Islamic architecture, vibrant bazaars, and historical significance.",
            image: "https://daryo.uz/static/2024/03/19/3de2fa67_dbec59816418f8602445bea654d819c6404e476e-mF3CeK5X-um_wGyU4.jpeg",
        },
        {
            title: "Climate",
            text: "The country experiences a continental climate with hot summers and cold winters. The landscape influences the climate, with deserts and mountains creating significant temperature variations.",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/94/4d/d3/caption.jpg?w=1200&h=700&s=1",
        },
    ];

    const navigate = useNavigate();

    const navItems = [
        { label: "About Uzbekistan", path: "/about-uzbekistan" },
        { label: "Life in bukhara", path: "/life-in-bukhara" }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{ height: "175px" }} data-cid="714">
                <img className="bg-image bg-blue-900" src="/thumb_362_1920_0_0_0_auto.jpg" alt="" />
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1>About Uzbekistan</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/en">
                                        Home
                                        <ChevronRight size="16" />
                                    </a>
                                </li>
                                <li className="sideNav-link">
                  <span className="nav-link">
                    About Uzbekistan
                    <ChevronRight size="16" />
                  </span>
                                </li>
                                <li className="sideNav-link">
                                    <a className="nav-link" href="/about-uzbekistan">
                                        About Uzbekistan
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex gap-10 px-10">
                {/* Main Content */}
                <motion.div
                    className="container mx-auto px-5 py-10"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{duration: 0.5}}
                >
                    {sections.map((section, index) => (
                        <motion.section
                            key={index}
                            className="mb-12 flex flex-col md:flex-row items-center gap-8"
                            variants={cardVariants}
                            transition={{duration: 0.5, delay: index * 0.2}}
                        >
                            <Image
                                src={section.image}
                                alt={section.title}
                                width="400px"
                                className="w-full object-cover  rounded-lg shadow-lg"
                            />
                            <div className="md:w-3/5">
                                <h2 className="text-3xl font-bold text-[#00316b] mb-4">{section.title}</h2>
                                <p className="text-lg text-gray-700">{section.text}</p>
                            </div>
                        </motion.section>
                    ))}
                    <motion.div
                        className="text-xl font-medium mt-10"
                        variants={cardVariants}
                        transition={{duration: 0.5}}
                    >
                        Uzbekistan continues to develop both economically and culturally, embracing its historical
                        legacy while looking towards modernization and international cooperation.
                    </motion.div>
                </motion.div>

                <aside className="w-1/2 max-h-max sticky top-32 overflow-hidden">
                    <ul className="sideNav">
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

export default AboutUz;
