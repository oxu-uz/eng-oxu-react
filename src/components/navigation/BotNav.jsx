import React, { useState } from "react";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { navItems } from "../../config/navigation";
import { useLocation } from "react-router-dom";

const BotNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <nav className={`lg:block hidden sticky top-0 z-30 bg-[#012152] ${isHomePage ? 'py-5' : 'py-5'}`}>
            <div className="mx-auto">
                <div className="flex w-full items-center justify-center">
                    {navItems.map((item, index) => (
                        <div key={index} className="group flex relative">
                            {item.type === "logo" ? (
                                <a href={item.link} className="flex items-center px-4">
                                    <img
                                        src={item.src} // Always use the light version since background is always dark
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
                                        <div className="text-white hover:text-white nav-link uppercase flex cursor-pointer gap-3 shadow-none outline-none items-center px-4 py-2 top-nav-sup-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors duration-300 text-lg">
                                            {item.label} <ChevronDown strokeWidth={1.2} size="20"/>
                                        </div>
                                    </MenuHandler>
                                    <MenuList className="absolute left-0 mt-2 overflow-hidden min-w-80 rounded-md bg-white shadow-lg">
                                        {item.dropdown.map((dropdownItem, i) => (
                                            <div key={i} className="relative group outline-none right-0 hover:outline-none">
                                                {dropdownItem.submenu ? (
                                                    <Menu
                                                        animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
                                                        placement="right-start"
                                                        onOpen={() => setIsMenuOpen(true)}
                                                        onClose={() => setIsMenuOpen(false)}
                                                    >
                                                        <MenuHandler>
                                                            <MenuItem className="text-[#012152] hover:bg-blue-50 group flex justify-between items-center transition-colors duration-300">
                                                                {dropdownItem.label} <ChevronRight className="transition-transform group-hover:-translate-x-1/2" size="16"/>
                                                            </MenuItem>
                                                        </MenuHandler>
                                                        <MenuList className="absolute left-full top-0 mt-[-8px] overflow-hidden min-w-80 rounded-md bg-white shadow-lg">
                                                            {dropdownItem.submenu.map((submenuItem, j) => (
                                                                <a href={submenuItem.link} key={j} className="outline-none ring-0">
                                                                    <MenuItem className="text-[#012152] hover:bg-blue-50 link transition-colors duration-300">
                                                                        {submenuItem.label}
                                                                    </MenuItem>
                                                                </a>
                                                            ))}
                                                        </MenuList>
                                                    </Menu>
                                                ) : (
                                                    <a className="outline-none ring-0" href={dropdownItem.link}>
                                                        <MenuItem className="text-[#012152] hover:bg-blue-50 link transition-colors duration-300">
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
                                    className="text-white hover:text-white uppercase nav-link flex items-center shadow-none outline-none ring-0 px-4 py-2 top-nav-sup-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors duration-300 text-lg"
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