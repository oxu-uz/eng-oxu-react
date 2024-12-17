import React, { useState } from "react";
import {Menu, MenuHandler, MenuList, MenuItem, Button} from "@material-tailwind/react";
import { ChevronDown, ChevronRight } from "lucide-react";

const BotNav = () => {
    const navItems = [
        { label: "Home", link: "/" },
        {
            label: "About",
            link: "/about",
            dropdown: [
                { label: "Leadership", link: "/about/leadership" },
                {
                    label: "AIU",
                    link: "/about/aiu",
                    submenu: [
                        { label: "Vision", link: "/about/aiu/vision" },
                        { label: "Mission", link: "/about/aiu/mission" },
                        { label: "History", link: "/about/aiu/history" },
                        { label: "Registrar", link: "/about/aiu/registrar" },
                        { label: "Administration", link: "/about/aiu/administration" },
                        { label: "International Relations Office", link: "/about/aiu/international-relations" },
                    ],
                },
            ],
        },
        {
            label: "Admissions",
            link: "/admissions",
            dropdown: [
                {
                    label: "Find Program",
                    submenu: [
                        { label: "MD", link: "/admissions/md" },
                        { label: "MBBS", link: "/admissions/mbbs" },
                    ],
                },
                { label: "Scholarship", link: "/admissions/scholarship" },
                { label: "Tuition and costs", link: "/admissions/tuition-and-costs" },
            ],
        },
        {
            label: "Academics",
            link: "/academics",
            dropdown: [
                { label: "Programs", link: "/academics/programs" },
                { label: "Departments", link: "/academics/departments" },
                { label: "Faculty", link: "/academics/faculty" },
            ],
        },
        {
            label: "Schools",
            link: "/schools",
            dropdown: [
                { label: "School of Business", link: "/schools/business" },
                { label: "School of Engineering", link: "/schools/engineering" },
                { label: "School of Arts", link: "/schools/arts" },
            ],
        },
        {
            label: "OXU Experience",
            link: "/experience",
            dropdown: [
                { label: "Campus Life", link: "/experience/campus" },
                { label: "Clubs", link: "/experience/clubs" },
                { label: "Events", link: "/experience/events" },
            ],
        },
        { label: "OXU Society", link: "/society" },
        {
            label: "Research",
            link: "/research",
            dropdown: [
                { label: "Publications", link: "/research/publications" },
                { label: "Projects", link: "/research/projects" },
                { label: "Labs", link: "/research/labs" },
            ],
        },
    ];

    return (
        <nav className="nav-bot sticky z-30 top-0 h-[65px]">
            <div className="max-w-7xl mx-auto flex h-full justify-center ">
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
