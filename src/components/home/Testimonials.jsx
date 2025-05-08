import React, {useState, useEffect, useRef} from 'react';
import {motion, AnimatePresence, useInView} from 'framer-motion';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false, margin: "-50px"});

    const testimonials = [
        {
            id: 1,
            quote: "I am currently pursuing my MBBS at Asia International University, Bukhara. I chose this university because of its strong academic reputation, affordable tuition fees, and supportive learning environment",
            name: "Mr. Avhimanyu Chand",
            title: "Nepal",
            img: "/for site/IMG_7305.JPG"
        },
        {
            id: 2,
            quote: "The reason I choose this university because of quality of education and low budget fees and there is best option to get a scholarship. All facilities are provided here Including -Indian food good hostel best and most experienced faculty professors and lot of extracurricular activities. Choosing Asia international university is my best decision.",
            name: "Ms. Kavita Chauhan",
            title: "India",
            img: "/for site/IMG_7304.JPG"
        },
        {
            id: 3,
            quote: "I have seen that so many abroad colleges don't feel like the colleges in our native. But here in ASIA INTERNATIONAL UNIVERSITY, it feels like home. I feel like I have chosen a right college for me to study well for my medical studies and help me to develop in so many other ways.",
            name: "Mr. Jignesh",
            title: "India",
            img: "/for site/IMG_7300.JPG"
        },
        {
            id: 4,
            quote: "I chose this university because of its strong academic reputation and very supportive teachers. One of key factors that influenced my decision was the availability of scholarships. Receiving a Scholarship not only eases the financial burden but also motivates me to work even harder and contribute actively in my academics.",
            name: "Ms. Laiba Sajjad",
            title: "Pakistan",
            img: "/for site/IMG_7302.JPG"
        },
        {
            id: 5,
            quote: "The University is very good, and the doctors are kind & University is equipped to the highest standard and I am very happy to have joined the Asia International University",
            name: "MOHAMMED RAGAB ABDELHADY",
            title: "Egypt",
            img: "/for site/IMG_7583.JPG"
        },
        {
            id: 6,
            quote: "AIU was the best choice I have made to pursue my medical dream. The faculty is top notch with well-equipped facilities and advance clinical exposure for the aspirants, also providing rich cultural experience at the hub of silk road.",
            name: "Ms. Munira Rifat",
            title: "Bangladesh",
            img: "/for site/IMG_7301.JPG"
        },
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 8000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Animation variants
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            ref={ref}
            className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900"
            id="testimonials"
        >
            {/* Blurred Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/P1087891.JPG"
                    alt="University Campus"
                    className="w-full h-full object-cover object-center"
                    style={{
                        filter: "blur(8px) brightness(0.7)",
                        transform: "scale(1.02)"
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-8 md:mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4"
                    >
                        What our Students Say
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="w-[60%] sm:w-[50%] md:w-[30%] h-1 bg-white mx-auto"
                    ></motion.div>
                </motion.div>

                {/* Testimonial Slider */}
                <div className="relative h-[500px] md:h-[400px] mb-8 md:mb-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonials[currentIndex].id}
                            initial={{opacity: 0, x: 100}}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {duration: 0.6, ease: "easeInOut"}
                            }}
                            exit={{
                                opacity: 0,
                                x: -100,
                                transition: {duration: 0.4}
                            }}
                            className="absolute inset-0"
                        >
                            {/* Mobile Layout - Full background image with overlay */}
                            <div className="md:hidden relative w-full h-full rounded-xl overflow-hidden">
                                <img
                                    src={testimonials[currentIndex].img}
                                    alt={testimonials[currentIndex].name}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-10 pb-6 px-6 flex flex-col justify-end">
                                    <blockquote className="text-white text-base italic mb-4 leading-relaxed">
                                        "{testimonials[currentIndex].quote}"
                                    </blockquote>
                                    <div className="mt-auto flex items-center w-full justify-between">
                                        <p className="text-white text-lg font-semibold">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-blue-gray-200 text-base">
                                            {testimonials[currentIndex].title}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout - Side by side */}
                            <div
                                className="hidden md:flex bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl w-full h-full overflow-hidden">
                                <div className="w-1/3 h-full relative">
                                    <img
                                        src={testimonials[currentIndex].img}
                                        alt={testimonials[currentIndex].name}
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                                </div>

                                <div className="w-2/3 p-8 lg:p-10 flex flex-col justify-center">
                                    <blockquote
                                        className="text-gray-800 text-lg lg:text-xl italic mb-6 leading-relaxed">
                                        "{testimonials[currentIndex].quote}"
                                    </blockquote>
                                    <div>
                                        <p className="text-gray-900 text-xl font-semibold">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-[#012c6e] text-base">
                                            {testimonials[currentIndex].title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex justify-center mt-6 md:mt-10 space-x-2 md:space-x-3"
                >
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            variants={itemVariants}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                                currentIndex === index
                                    ? 'bg-[#012c6e] scale-125'
                                    : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`View testimonial from ${testimonials[index].name}`}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;