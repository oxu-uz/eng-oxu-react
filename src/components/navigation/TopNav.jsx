import React from 'react';
import logo from "/logo.svg";
import bg from "../../assets/footerbg.svg.svg";
import {motion} from 'framer-motion';

const TopNav = () => {
    return (
        <div className="top-nav px-10 overflow-hidden h-[120px] border-b border-[hsla(0,0%,100%,.2)] relative flex justify-between">
            <img src={logo} className="h-20 my-auto z-10"/>

            {/* Animating images from bottom */}
            {/*<motion.div*/}
            {/*    className="absolute right-10 bottom-[-80px] top-0 flex"*/}
            {/*    initial={{ y: 100, opacity: 0 }} // Start from below with zero opacity*/}
            {/*    animate={{ y: 0, opacity: 1 }} // Move to original position with full opacity*/}
            {/*    transition={{*/}
            {/*        type: "spring",*/}
            {/*        stiffness: 50,*/}
            {/*        damping: 25,*/}
            {/*        delay: 0.3, // Delay for smooth entry*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <motion.img*/}
            {/*        src='/svg.svg'*/}
            {/*        className="my-auto h-[300px] z-0"*/}
            {/*        initial={{ opacity: 0 }} // Start with no visibility*/}
            {/*        animate={{ opacity: 1 }} // Fade in*/}
            {/*        transition={{ duration: 1 }}*/}
            {/*    />*/}
            {/*</motion.div>*/}

            <div className="main-panel__right mt-10">
                <form
                    className="main-input is-desktop"
                    action="https://www.hse.ru/search/index.html"
                >
                    <button className="main-input__button" title="Поиск">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.7">
                                <path
                                    d="M16.84 14.8446C17.5973 13.7072 18.0009 12.3711 18 11.0046C18.0021 9.44672 17.4844 7.93263 16.5289 6.70213C15.5733 5.47162 14.2347 4.59504 12.7248 4.21118C11.2149 3.82731 9.62007 3.95812 8.1929 4.58287C6.76573 5.20762 5.58776 6.29062 4.84552 7.66037C4.10328 9.03011 3.83919 10.6083 4.09508 12.1451C4.35096 13.6819 5.11219 15.0894 6.25823 16.1447C7.40426 17.2 8.8696 17.8429 10.4222 17.9715C11.9748 18.1001 13.526 17.7071 14.83 16.8546L18 20.0046L20 18.0046L16.84 14.8446ZM6 11.0046C6 10.0157 6.29325 9.04904 6.84266 8.22679C7.39206 7.40455 8.17296 6.76368 9.08659 6.38525C10.0002 6.00681 11.0056 5.90779 11.9755 6.10072C12.9454 6.29364 13.8363 6.76985 14.5355 7.46911C15.2348 8.16837 15.711 9.05929 15.9039 10.0292C16.0969 10.9991 15.9978 12.0044 15.6194 12.9181C15.241 13.8317 14.6001 14.6126 13.7779 15.162C12.9556 15.7114 11.9889 16.0046 11 16.0046C9.67392 16.0046 8.40215 15.4779 7.46447 14.5402C6.52679 13.6025 6 12.3307 6 11.0046Z"
                                    fill="white"
                                />
                            </g>
                        </svg>
                    </button>
                    <input
                        className="main-input__field"
                        placeholder="Поиск"
                        name="text"
                        defaultValue=""
                    />
                    <input type="hidden" name="searchid" defaultValue={2284688}/>
                    <input type="hidden" name="simple" defaultValue={1}/>
                </form>
                <span className="control control_search" title="Поиск">

  </span>
            </div>


            {/* Top Navigation Links */}
            <div className="top-nav-sup absolute right-0  divide-x divide-[hsla(0,0%,100%,.15)]  flex h-max z-10">
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link ">Contact us</a>
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link ">Library</a>
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link ">News & Events</a>
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link ">Career @ OXU</a>
                <a className=" text-sm p-3 px-4 cursor-pointer transition-colors top-nav-sup-link ">Apply Now</a>
            </div>
        </div>
    );
};

export default TopNav;
