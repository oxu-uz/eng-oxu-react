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
                { label: "Structure of the university", link: "/about/aiu/university-structure" },
                { label: "Structure of the faculty", link: "/about/aiu/faculty-structure" },
                { label: "Regulatory Documents", link: "/about/aiu/regulatory-documents" },
                { label: "Faculty development plan", link: "/about/aiu/faculty-development-plan" },
            ],
        },
        {
            label: "Academics ",
            link: "/admissions",
            dropdown: [
                { label: "Academic Calendar", link: "/about/aiu/academic-calendar" },
                { label: "Study Plan/ Curriculum", link: "/about/aiu/study-plan" },
                {
                    label: "Departments",
                    submenu: [
                        { label: "Department of General Science", link: "/about/departments/general-science" },
                        { label: "Department of Fundamental Medicine", link: "/about/departments/fundamental-medicine" },
                        { label: "Department of Clinical Science", link: "/about/departments/clinical-science" },
                        { label: "Hospitals Affiliated", link: "/about/departments/hospitals-affiliated" },
                    ],
                }
            ],
        },
        { label: "International relations", link: "/international-relations" },
        {
            label: "Student Life in AIU",
            link: "/schools",
            dropdown: [
                {
                    label: "Councils",
                    submenu: [
                        { label: "Council of the Academic Activities", link: "/about/councils/academic-activities" },
                        { label: "Council for the Scientific Activities", link: "/about/councils/scientific-activities" },
                        { label: "Council for Sport", link: "/about/councils/sport" },
                        { label: "Council for Cultural Activities", link: "/about/councils/cultural-activities" },
                        { label: "Council for IT/ Media", link: "/about/councils/it-media" },
                    ],
                },
            ],
        },
        {
            label: "About Uzbekistan",
            link: "/experience",
            dropdown: [
                { label: "Life in Bukhara ", link: "/experience/campus" }
            ],
        },
        { label: "Admission", link: "/society",
            dropdown: [
                {
                    label: "Find program ",
                    submenu: [
                        { label: "MD", link: "/md" },
                        { label: "MBBS", link: "/mbbs" }
                    ],
                },
                { label: "Scholarship ", link: "/research/publications" },
                { label: "Tuition and Cost ", link: "/research/projects" },
                { label: "For partners / For applicants", link: "/research/labs", submenu: [
                        { label: "Login", link: "/md" },
                    ]  },
            ] },
        { label: "Gallery ", link: "/international-relations" },
        { label: "Alumni ", link: "/international-relations" },
        { label: "Contact ", link: "/international-relations" },
    ];

    return (
        <nav className="nav-bot sticky z-30 top-0 h-[65px]">
            <div className=" mx-auto flex h-full justify-center ">
                <div className="flex ">
                    {navItems.map((item, index) => (
                        <div key={index} className="group flex relative">
                            {item.dropdown ? (
                                <Menu allowHover animate={{mount: {y: 0}, unmount: {y: 25}}}>
                                    <MenuHandler>
                                        <div
                                            className="text-white nav-link uppercase flex cursor-pointer gap-3 shadow-none outline-none items-center px-4 py-2 top-nav-sup-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                            {item.label} <ChevronDown size="20"/>
                                        </div>
                                    </MenuHandler>
                                    <MenuList className="absolute left-0 mt-2 overflow-hidden min-w-64 rounded-md">
                                        {item.dropdown.map((dropdownItem, i) => (
                                            <div key={i} className="relative group outline-none right-0  hover:outline-none">
                                                {dropdownItem.submenu ? (
                                                    <Menu animate={{mount: {y: 0}, unmount: {y: 25}}}
                                                          placement="right-start">
                                                        <MenuHandler>
                                                            <MenuItem
                                                                className="hover:bg-gray-50 link group flex justify-between items-center">
                                                                {dropdownItem.label} <ChevronRight className="transition-transform group-hover:-translate-x-1/2" size="16"/>
                                                            </MenuItem>
                                                        </MenuHandler>
                                                        <MenuList
                                                            className="absolute left-full top-0 mt-[-8px] overflow-hidden w-64 rounded-md">
                                                            {dropdownItem.submenu.map((submenuItem, j) => (
                                                                <MenuItem key={j} className="hover:bg-gray-50 link">
                                                                    <a href={submenuItem.link}>{submenuItem.label}</a>
                                                                </MenuItem>
                                                            ))}
                                                        </MenuList>
                                                    </Menu>
                                                ) : (
                                                    <MenuItem className="hover:bg-gray-50 link outline-none ring-0 hover:outline-2 hover:ring-0">
                                                        <a className="outline-none ring-0 hover:outline-2 hover:ring-0" href={dropdownItem.link}>{dropdownItem.label}</a>
                                                    </MenuItem>
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
