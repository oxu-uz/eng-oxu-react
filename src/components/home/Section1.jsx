import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { ChevronDown, ChevronRight } from "lucide-react";

function Section1(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const slides = [
        {
            type: "image",
            src: "/STUDENTS (11).JPG",
            poster: "/STUDENTS (11).JPG",
            title: "Welcome to AIU. Ready to start on an exciting journey with us? Explore our university and become part of the family.",
            description: "Experience world-class education guided by expert International faculty and supported by a vibrant, diverse I community.",
            cta: "Apply Now"
        },
        {
            type: "image",
            src: "/library (5).JPG",
            alt: "Image 1",
            title: "One of Central Asia's leading universities, providing premier education to shape students for global careers.",
            description: "Our state-of-the-art campus, innovative programs, and strong international partnerships empower students with the skills and knowledge to thrive in a competitive world.",
            cta: "Admission Open"
        },
        {
            type: "image",
            src: "/IMG_2363.JPG",
            alt: "Image 2",
            title: "A Central Asian home for students from all over the world.",
            description: "We make sure every student feels at home—no matter where they come from. It's more than just a place to study; it's a place to belong, where diverse cultures come together to learn, grow, and connect",
            cta: "Book your seat"
        },
    ];

    const navItems = [
        { type: "logo", src: "/logo_aiu.svg", src1: "/new_logo.svg", alt: "University Logo", link: "/" },
        {
            label: "About",
            link: "/about",
            dropdown: [
                { label: "Vision", link: "/about/aiu/vision" },
                { label: "Mission", link: "/about/aiu/mission" },
                { label: "Message from the Rector", link: "/about/leadership" },
                { label: "Structure of the university", link: "/about/aiu/structure-of-university" },
                { label: "Regulatory Documents", link: "/about/aiu/regulatory-documents" },
            ],
        },
        {
            label: "Academics",
            link: "/admissions",
            dropdown: [
                { label: "Academic Calendar", link: "/academics/academic-calendar" },
                { label: "Study Plan/ Curriculum", link: "/academics/study-plan" },
                {
                    label: "Structure of the faculty",
                    link: "/academics/faculty-structure",
                },
            ],
        },
        {
            label: "International relations",
            dropdown: [
                { label: "International Relations Office", link: "/international-relations" },
                { label: "ERASMUS+", link: "https://erasmus-plus.ec.europa.eu/" },
            ]
        },
        {
            label: "Student Life in AIU",
            link: "/schools",
            dropdown: [
                { label: "Council of the Academic Activities", link: "/academic-council" },
                { label: "Council for the Scientific Activities", link: "/scientific-council" },
                { label: "Council for Sport", link: "/sports-council" },
                { label: "Council for Cultural Activities", link: "/cultural-council" },
                { label: "Council for IT/ Media", link: "/it-media-council" },
            ],
        },
        {
            label: "About Uzbekistan",
            link: "/experience",
            dropdown: [
                { label: "About Uzbekistan", link: "/about-uzbekistan" },
                { label: "Life in Bukhara", link: "/life-in-bukhara" }
            ],
        },
        {
            label: "Admission",
            link: "/society",
            dropdown: [
                { label: "Find program", link: "/find-programs" },
                { label: "Scholarship", link: "/scholarships" },
                { label: "Tuition and Cost", link: "/tuition-fees" },
                {
                    label: "For partners / For applicants",
                    link: "/research/labs",
                    submenu: [
                        { label: "Login", link: "/login" },
                    ]
                },
            ]
        },
        { label: "Research and Publications", link: "/research" },
        { label: "FAQ", link: "/international/faq" },
    ];

    // Animation variants for navbar background
    const navVariants = {
        transparent: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        hovered: {
            backgroundColor: "#012152",
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    return (
        <div className="bg-opacity-50 z-10" style={{
            backgroundImage: "url(/P1087891.JPG)",
            height: '[100vh]',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div>
                <motion.nav
                    className="lg:block hidden py-5"
                    variants={navVariants}
                    animate={isNavHovered || isMenuOpen ? "hovered" : "transparent"}
                    onMouseEnter={() => setIsNavHovered(true)}
                    onMouseLeave={() => setIsNavHovered(false)}
                >
                    <div>
                        <div className="flex w-full md:w-full items-center justify-center">
                            {navItems.map((item, index) => (
                                <div key={index} className="group flex relative">
                                    {item.type === "logo" ? (
                                        <a
                                            href={item.link}
                                            className="flex items-center px-4"
                                        >
                                            <img
                                                src={isNavHovered ? item.src : item.src1}
                                                alt={item.alt}
                                                className="object-contain"
                                            />
                                        </a>
                                    ) : item.dropdown ? (
                                        <Menu
                                            allowHover
                                            animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
                                            onOpen={() => setIsMenuOpen(true)}
                                            onClose={() => setIsMenuOpen(false)}
                                        >
                                            <MenuHandler>
                                                <div
                                                    className={`${isNavHovered || isMenuOpen ? 'text-white' : 'text-[#012152]'} hover:text-white nav-link uppercase flex cursor-pointer gap-3 shadow-none outline-none items-center px-4 py-2 top-nav-sup-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors duration-300 text-lg`}
                                                >
                                                    {item.label} <ChevronDown strokeWidth={1.2} size="20"/>
                                                </div>
                                            </MenuHandler>
                                            <MenuList
                                                className="absolute left-0 mt-2 overflow-hidden min-w-80 rounded-md bg-white shadow-lg">
                                                {item.dropdown.map((dropdownItem, i) => (
                                                    <div key={i}
                                                         className="relative group outline-none right-0 hover:outline-none">
                                                        {dropdownItem.submenu ? (
                                                            <Menu
                                                                animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
                                                                placement="right-start"
                                                                onOpen={() => setIsMenuOpen(true)}
                                                                onClose={() => setIsMenuOpen(false)}
                                                            >
                                                                <MenuHandler>
                                                                    <MenuItem
                                                                        className="text-[#012152] hover:bg-blue-50 group flex justify-between items-center transition-colors duration-300"
                                                                    >
                                                                        {dropdownItem.label} <ChevronRight
                                                                        className="transition-transform group-hover:-translate-x-1/2"
                                                                        size="16"/>
                                                                    </MenuItem>
                                                                </MenuHandler>
                                                                <MenuList
                                                                    className="absolute left-full top-0 mt-[-8px] overflow-hidden min-w-80 rounded-md bg-white shadow-lg"
                                                                >
                                                                    {dropdownItem.submenu.map((submenuItem, j) => (
                                                                        <a href={submenuItem.link}
                                                                           className="outline-none ring-0">
                                                                            <MenuItem key={j}
                                                                                      className="text-[#012152] hover:bg-blue-50 link transition-colors duration-300">
                                                                                {submenuItem.label}
                                                                            </MenuItem>
                                                                        </a>
                                                                    ))}
                                                                </MenuList>
                                                            </Menu>
                                                        ) : (
                                                            <a className="outline-none ring-0" href={dropdownItem.link}>
                                                                <MenuItem
                                                                    className="text-[#012152] hover:bg-blue-50 link transition-colors duration-300">
                                                                    {dropdownItem.label}
                                                                </MenuItem>
                                                            </a>
                                                        )}
                                                    </div>
                                                ))}
                                            </MenuList>
                                        </Menu>
                                    ) : (
                                        <a
                                            href={item.link}
                                            className={`${isNavHovered || isMenuOpen ? 'text-white' : 'text-[#012152]'} hover:text-white uppercase nav-link flex items-center shadow-none outline-none ring-0 px-4 py-2 top-nav-sup-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors duration-300 text-lg`}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.nav>

                <div className="relative w-full min-h-[100vh] overflow-hidden">
                    <div className="absolute inset-0">
                        <div
                            className="relative flex h-full flex-col items-start justify-center w-full z-20 text-white px-6 md:px-12 py-6 md:py-0">
                            <div className="max-w-3xl text-left bg-black bg-opacity-25 p-6 md:p-8">
                                <h1 className="text-2xl md:text-3xl font-extrabold uppercase mb-3 md:mb-5">
                                    {slides[currentIndex].title}
                                </h1>
                                <p className="text-xs md:text-xl mb-6">
                                    {slides[currentIndex].description}
                                </p>
                                <button onClick={() => props.navigate('/international-form')} className="apply-now-btn">
                                    {/* PNG pattern overlay */}
                                    <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
                                    {slides[currentIndex].cta}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;