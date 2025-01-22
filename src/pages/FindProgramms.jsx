import React, {useState} from 'react';
import {motion} from "framer-motion";
import {Link, useNavigate} from "react-router-dom";

const FindPrograms = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Массив изображений
    const images = [
        'https://oxu.uz/talabalar_hayoti-6.jpg',
        'https://oxu.uz/talabalar_hayoti-6.jpg',
        'https://oxu.uz/talabalar_hayoti-6.jpg',
    ];

    // Функция для перехода к следующему слайду
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Функция для перехода к предыдущему слайду
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    }

    const navigate = useNavigate();

    const navItems = [
        { label: "MD", path: "/admissions/md" },
        { label: "MBBS", path: "/admissions/mbbs" }
    ];

    return (
        <div>
            <div className="header-section3 relative">
                <div className=" mx-auto px-5">
                    <main
                        className="grid gap-x-10 overflow-hidden lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
                        {" "}

                        <div>
                            <div className="divider mb-3 h-[5px] w-[100px] bg-[#012C6E]"/>
                            <h1
                                data-wow-offset={10}
                                data-wow-delay="0.5s"
                                data-wow-duration="2s"
                                className="wow fadeInUp text-white uppercase  font-bold text-3xl lg:text-4xl xl:text-4xl header-title"
                            >
                                Enter the realm of healing and healthcare at Asia International University's Medical
                                Faculty
                            </h1>{" "}
                            <p
                                data-wow-offset={10}
                                data-wow-delay="0.5s"
                                data-wow-duration="2s"
                                className="wow fadeInUp text-lg mt-4 text-white max-w-3xl"
                            >
                                We are pleased to welcome you as we commence a journey of discovery, learning, and
                                innovation in the
                                medical field. Join us in exploring the art and science of healing, advancing human
                                health, and
                                positively impacting the world. We look forward to sharing knowledge, nurturing empathy,
                                and promoting
                                collaboration as we pursue excellence in healthcare education and research. Welcome to
                                our community
                                of committed scholars and healthcare professionals!
                            </p>{" "}
                            {/*        <div className="mt-6 flex flex-col sm:flex-row gap-3">*/}
                            {/*            <Link*/}
                            {/*                to="/international-form"*/}
                            {/*                className="px-5 py-2.5 overflow-hidden button-lg rounded-md group bg-[#012c6e] relative hover:bg-gradient-to-r hover:from-[#012c6e] hover:to-[#0d1f3b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#182f53] transition-all ease-out duration-300"*/}
                            {/*            >*/}
                            {/*<span*/}
                            {/*    className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"/>*/}
                            {/*                <span className="relative">Apply now</span>*/}
                            {/*            </Link>*/}
                            {/*        </div>*/}
                            <div className="relative w-full flex">
                                <div
                                    className=" mt-5 bg-[#012152]/80 text-white rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-1 divide-y sm:divide-y-0 sm:divide-x divide-[hsla(0,0%,100%,.2)] bg-white-500 z-10">
                                    <div
                                        className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                                        style={{opacity: 1, transform: "none"}}
                                    >
                                        <div className="flex mx-auto w-40 sm:w-auto">
                                            <div
                                                className="flex flex-shrink-0 items-center justify-center stat-box-icon h-16 w-16 rounded">
                                                <img src="/icons8-teacher-50.png" alt=""/>
                                            </div>
                                            <div className="flex flex-col pl-4">
                                                <p className="text-xl text-black-600 font-bold">
                                                    330 {/* */}~
                                                </p>
                                                <p className="text-lg text-black-500">Professors</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                                        style={{opacity: 1, transform: "none"}}
                                    >
                                        <div className="flex mx-auto w-40 sm:w-auto">
                                            <div
                                                className="flex flex-shrink-0 items-center justify-center stat-box-icon  h-16 w-16 rounded">
                                                <img src="/icons8-computer-50.png" alt=""/>
                                            </div>
                                            <div className="flex flex-col pl-4">
                                                <p className="text-xl text-black-600 font-bold">12{/* */} ~</p>
                                                <p className="text-lg text-black-500">Computer labs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                                        style={{opacity: 1, transform: "none"}}
                                    >
                                        <div className="flex mx-auto w-40 sm:w-auto">
                                            <div
                                                className="flex flex-shrink-0 items-center justify-center stat-box-icon h-16 w-16 rounded">
                                                <img src="/icons8-laboratory-50.png" alt=""/>
                                            </div>
                                            <div className="flex flex-col pl-4">
                                                <p className="text-xl text-black-600 font-bold">4{/* */} ~</p>
                                                <p className="text-lg text-black-500">Laboratories</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
                                    style={{filter: "blur(114px)"}}
                                />
                            </div>
                        </div>
                        <div className="relative w-full h-[400px]">
                            {/* Картинка с анимацией с использованием framer-motion */}
                            <motion.div
                                key={currentIndex}
                                className="absolute inset-0 w-full h-full"
                                initial={{x: '100%'}}
                                animate={{x: 0}}
                                exit={{x: '-100%'}}
                                transition={{duration: 0.5}}
                            >
                                <img
                                    src='https://oxu.uz/talabalar_hayoti-6.jpg'
                                    alt={`slide-${currentIndex}`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </motion.div>

                            {/* Кнопки для переключения слайдов */}
                            {/*<button*/}
                            {/*    onClick={prevSlide}*/}
                            {/*    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"*/}
                            {/*>*/}
                            {/*    &#8592;*/}
                            {/*</button>*/}
                            {/*<button*/}
                            {/*    onClick={nextSlide}*/}
                            {/*    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"*/}
                            {/*>*/}
                            {/*    &#8594;*/}
                            {/*</button>*/}

                            {/* Индикаторы */}
                            <div className="absolute bottom-4 left-2/4  flex -translate-x-2/4 gap-2">
                                {images.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                            currentIndex === index ? 'w-8 bg-white' : 'w-4 bg-white/50'
                                        }`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        {" "}
                    </main>
                </div>
            </div>


            <div className="flex px-10 gap-10 mb-5">
                <div className="mx-auto w-full py-6 sm:py-9 lg:py-8">
                    <div className="main-metro js-tiles__inner">
                        <div
                            data-wow-offset={1}
                            data-wow-duration="2s"
                            data-wow-delay={0}
                            className="main-metro-card main-metro-card_2h 0"
                            style={{
                                backgroundImage: "url('/2-BINO TALABALAR (4).JPG')",
                                backgroundPosition: "center"
                            }}
                        >
                            <div className="main-metro-card__content">
                                <h3 className="main-metro-card__title">Faculties</h3>
                                <p className="main-metro-card__text">Our faculties provide a diverse educational
                                    programs
                                    encompassing a wide range of subjects and disciplines. Within our academic setting,
                                    we
                                    cultivate critical thinking, creativity, and intellectual aptitude.</p>
                                <svg
                                    className="main-metro-card__svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={8} cy={8} r={8} fill="white"/>
                                    <path
                                        d="M7 5.33337L9.66667 8.00004L7 10.6667"
                                        stroke="#0050CF"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="main-metro-card">
                            <div
                                className="main-metro-card__cover 0"
                                style={{
                                    backgroundImage: "url('/2-BINO TALABALAR (6).JPG')",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                }}
                            />
                            <div className="main-metro-card__content">
                                <h3 className="main-metro-card__title">Bachelor's Degree</h3>
                                <p className="main-metro-card__text">Our university's undergraduate programs are crafted
                                    to
                                    address contemporary trends in science, technology, and industry, equipping you for
                                    a
                                    prosperous career and advanced studies.</p>
                                <svg
                                    className="main-metro-card__svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={8} cy={8} r={8} fill="white"/>
                                    <path
                                        d="M7 5.33337L9.66667 8.00004L7 10.6667"
                                        stroke="#0050CF"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="main-metro-card">
                            <div
                                className="main-metro-card__cover 0"
                                style={{
                                    background: 'url("/2-BINO TALABALAR (3).JPG")',
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                }}
                            />
                            <div className="main-metro-card__content">
                                <h3 className="main-metro-card__title">Master's Degree</h3>
                                <p className="main-metro-card__text">The master's programs offered at our university are
                                    tailored to address current advancements in science, technology, and industry,
                                    preparing
                                    you for a prosperous career and continued academic pursuits.</p>
                                <svg
                                    className="main-metro-card__svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={8} cy={8} r={8} fill="white"/>
                                    <path
                                        d="M7 5.33337L9.66667 8.00004L7 10.6667"
                                        stroke="#0050CF"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="w-1/2 my-8 max-h-max sticky top-32 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
    <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
       FIND PROGRAMS
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

export default FindPrograms;
