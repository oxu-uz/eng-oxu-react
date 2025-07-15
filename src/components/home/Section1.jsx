import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {useNavigate} from "react-router-dom";

function Section1(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    const slides = [
        {
            type: "image",
            src: "/section1.jpg",
            poster: "/section1.jpg",
            title: "Welcome to AIU. Ready to start on an exciting journey with us? Explore our university and become part of the family.",
            description: "Experience world-class education guided by expert International faculty and supported by a vibrant, diverse community.",
            cta: "Apply Now"
        },
    ];

    // Extract "Welcome to AIU" from the title
    const welcomeText = slides[currentIndex].title.split('.')[0];
    const remainingText = slides[currentIndex].title.split('.').slice(1).join('.').trim();

    useEffect(() => {
        let timer;
        const typingSpeed = 100;
        const deletingSpeed = 100;
        const pauseDurationAfterType = 3000;
        const pauseDurationAfterDelete = 2000;

        if (isTyping && !isDeleting) {
            if (displayText.length < welcomeText.length) {
                timer = setTimeout(() => {
                    setDisplayText(welcomeText.substring(0, displayText.length + 1));
                }, typingSpeed);
            } else {
                timer = setTimeout(() => {
                    setIsTyping(false);
                    setIsDeleting(true);
                }, pauseDurationAfterType);
            }
        } else if (isDeleting) {
            if (displayText.length > 0) {
                timer = setTimeout(() => {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                }, deletingSpeed);
            } else {
                timer = setTimeout(() => {
                    setIsDeleting(false);
                    setIsTyping(true);
                }, pauseDurationAfterDelete);
            }
        }

        return () => clearTimeout(timer);
    }, [displayText, isTyping, isDeleting, welcomeText]);

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

    // Updated navVariants in your existing code
    const navVariants = {
        transparent: {
            backgroundColor: "rgba(0,0,0, 0.1)", // Subtle white overlay
            backdropFilter: "blur(2px)",
            transition: { duration: 0.3 }
        },
        hovered: {
            backgroundColor: "#012152", // More opaque when hovered
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        }
    };

    // Fixed button click handler
    const handleApplyNow = () => {
        navigate('/international-form'); // Using the explicit link from slides data
    };

    return (
        <div className="bg-opacity-50 z-10" style={{
            backgroundImage: "url(/section1.jpg)",
            height: '100vh',
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
                                                src={isNavHovered ? item.src : item.src}
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
                                                    className={`${isNavHovered || isMenuOpen ? 'text-white' : 'text-white'} hover:text-white nav-link uppercase flex cursor-pointer gap-3 shadow-none outline-none items-center px-4 py-2 top-nav-sup-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors duration-300 text-lg`}
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
                                                                        className="text-white hover:bg-blue-50 group flex justify-between items-center transition-colors duration-300"
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
                                                                                      className="text-white hover:bg-blue-50 link transition-colors duration-300">
                                                                                {submenuItem.label}
                                                                            </MenuItem>
                                                                        </a>
                                                                    ))}
                                                                </MenuList>
                                                            </Menu>
                                                        ) : (
                                                            <a className="outline-none ring-0" href={dropdownItem.link}>
                                                                <MenuItem
                                                                    className="text-white hover:bg-blue-50 link transition-colors duration-300">
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
                                            className={`${isNavHovered || isMenuOpen ? 'text-white' : 'text-white'} hover:text-white uppercase nav-link flex items-center shadow-none outline-none ring-0 px-4 py-2 top-nav-sup-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors duration-300 text-lg`}
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
                        <div className="relative flex h-full flex-col items-start justify-center w-full z-20 text-[#012152] py-6 md:py-0">
                            <div className="max-w-3xl text-left bg-white opacity-80 p-6 md:p-8 rounded-lg">
                                {/* Welcome Text with Backspace Animation */}
                                <div className="flex items-center">
                                    <motion.span
                                        className="text-2xl md:text-4xl font-extrabold uppercase"
                                    >
                                        {displayText}
                                    </motion.span>
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1,
                                            repeatDelay: isTyping && !isDeleting ? 0 : 0.5
                                        }}
                                        className="ml-1 text-2xl md:text-4xl"
                                    >
                                        |
                                    </motion.span>
                                </div>

                                {/* Remaining Title Text */}
                                <motion.h2
                                    className="text-xl md:text-2xl font-bold mb-3 md:mb-5 mt-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {remainingText}
                                </motion.h2>

                                {/* Description */}
                                <motion.p
                                    className="text-xs md:text-xl mb-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    {slides[currentIndex].description}
                                </motion.p>

                                <div>
                                    {/* Fixed CTA Button */}
                                    <button
                                        onClick={handleApplyNow} // Using the fixed handler
                                        className="apply-now-btn rounded-lg"
                                    >
                                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
                                        <span className="relative z-10">{slides[currentIndex].cta}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;