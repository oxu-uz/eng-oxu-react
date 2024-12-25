import React from 'react';
import logo from "/logo.svg";
import bg from "../../assets/footerbg.svg.svg";
import { motion } from 'framer-motion';

const TopNav = () => {
    return (
        <div className="top-nav px-14 h-[120px] relative flex justify-between">
            <img src={logo} className="h-20 my-auto z-10" />

            {/* Animating images from bottom */}
            <motion.div
                className="absolute right-10 bottom-[-80px] top-0 flex"
                initial={{ y: 100, opacity: 0 }} // Start from below with zero opacity
                animate={{ y: 0, opacity: 1 }} // Move to original position with full opacity
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 25,
                    delay: 0.3, // Delay for smooth entry
                }}
            >
                <motion.img
                    src='/svg.svg'
                    className="my-auto h-[300px] z-0"
                    initial={{ opacity: 0 }} // Start with no visibility
                    animate={{ opacity: 1 }} // Fade in
                    transition={{ duration: 1 }}
                />
            </motion.div>

            {/* Top Navigation Links */}
            <div className="top-nav-sup flex h-max z-10">
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link">Contact us</a>
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link">Library</a>
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link">News & Events</a>
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link">Career @ OXU</a>
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link">Apply Now</a>
            </div>
        </div>
    );
};

export default TopNav;
