import React, { useState } from "react";
import {Menu, MenuHandler, MenuList, MenuItem, Button} from "@material-tailwind/react";
import { ChevronDown, ChevronRight } from "lucide-react";

const BotNav = () => {
    
    const navItems = [
        { label: "Home", link: "/" },
        // {
        //     label: "About",
        //     link: "/about",
        //     dropdown: [
        //         { label: "Vision", link: "/about/aiu/vision" },
        //         { label: "Mission", link: "/about/aiu/mission" },
        //         { label: "Message from the Rector ", link: "/about/leadership" },
        //         { label: "History", link: "/about/aiu/history" },
        //         { label: "Registrar", link: "/about/aiu/registrar" },
        //         { label: "Administration", link: "/about/aiu/administration" },
        //         { label: "International Relations Office", link: "/about/aiu/international-relations" },
        //
        //     ],
        // },
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
            label: "Academics ",
            link: "/admissions",
            dropdown: [
                { label: "Academic Calendar", link: "/academics/academic-calendar" },
                { label: "Study Plan/ Curriculum", link: "/academics/study-plan" },
                { label: "Faculty development plan", link: "/about/aiu/faculty-development-plan" },
                { label: "Structure of the faculty", link: "/about/aiu/faculty-structure" },
                { label: "Department of General Science", link: "/about/departments/general-science" },
                { label: "Department of Fundamental Medicine", link: "/about/departments/fundamental-medicine" },
                { label: "Department of Clinical Science", link: "/about/departments/clinical-science" },
            ],
        },
        { label: "International relations", link: "/about/aiu/international-relations" },
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
                { label: "Life in Bukhara ", link: "/life-in-bukhara" }
            ],
        },
        { label: "Admission", link: "/society",
            dropdown: [
                {
                    label: "Find program ",
                    link: "/find-programs"
                },
                { label: "Scholarship ", link: "/scholarships" },
                { label: "Tuition and Cost ", link: "/tuition-fees" },
                { label: "For partners / For applicants", link: "/research/labs", submenu: [
                        { label: "Login", link: "/md" },
                    ]  },
            ] },
        { label: "Gallery ", link: "/gallery" },
        // { label: "Alumni ", link: "/international-relations" },
        { label: "Contact ", link: "/international-relations" },
    ];

    return (
        <nav className="nav-bot lg:block hidden bg-gradient-to-r from-[#092076] to-[#0a37b3] sticky z-30 top-0 h-[65px]">
            <div className=" mx-auto flex h-full justify-center ">
                <div className="flex ">
                    {navItems.map((item, index) => (
                        <div key={index} className="group flex  relative">
                            {item.dropdown ? (
                                <Menu allowHover animate={{mount: {y: 0}, unmount: {y: 25}}}>
                                    <MenuHandler>
                                        <div
                                            className="text-white nav-link uppercase flex cursor-pointer gap-3 shadow-none outline-none items-center px-4 py-2 top-nav-sup-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                            {item.label} <ChevronDown strokeWidth={1.2} size="20"/>
                                        </div>
                                    </MenuHandler>
                                    <MenuList className="absolute left-0 mt-2 overflow-hidden min-w-80 rounded-md">
                                        {item.dropdown.map((dropdownItem, i) => (
                                            <div key={i} className="relative group outline-none right-0  hover:outline-none">
                                                {dropdownItem.submenu ? (
                                                    <Menu animate={{mount: {y: 0}, unmount: {y: 25}}}
                                                          placement="right-start">
                                                        <MenuHandler>
                                                            <MenuItem
                                                                className="hover:bg-blue-50 hover:text-blue-700 link group flex justify-between items-center">
                                                                {dropdownItem.label} <ChevronRight className="transition-transform group-hover:-translate-x-1/2" size="16"/>
                                                            </MenuItem>
                                                        </MenuHandler>
                                                        <MenuList
                                                            className="absolute left-full top-0 mt-[-8px] overflow-hidden min-w-80 rounded-md">
                                                            {dropdownItem.submenu.map((submenuItem, j) => (
                                                                <a href={submenuItem.link} className="outline-none ring-0">
                                                                    <MenuItem key={j} className="hover:bg-blue-50 hover:text-blue-700 link">
                                                                        {submenuItem.label}
                                                                </MenuItem>
                                                                </a>
                                                            ))}
                                                        </MenuList>
                                                    </Menu>
                                                ) : (
                                                    <a className="outline-none ring-0 hover:outline-2 hover:ring-0"
                                                       href={dropdownItem.link}>
                                                        <MenuItem
                                                            className="hover:bg-blue-50 hover:text-blue-700 link outline-none ring-0 hover:outline-2 hover:ring-0">
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
                                    className="text-white uppercase nav-link flex items-center shadow-none outline-none ring-0 px-4 py-2 top-nav-sup-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                                >
                                    {item.label}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default BotNav;
