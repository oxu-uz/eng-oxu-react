import React, {useState, useEffect, useRef} from 'react';
import {motion, AnimatePresence, useInView} from 'framer-motion';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false, margin: "-100px"});

    const testimonials = [
        {
            id: 1,
            quote: "I am currently pursuing my MBBS at Asia International University, Bukhara. I chose this university because of its strong academic reputation, affordable tuition fees, and supportive learning environment",
            name: "Mr. Avhimanyu Chand",
            title: "1st Year – Nepal",
            img: "/for site/IMG_7305.JPG"
        },
        {
            id: 2,
            quote: "The reason I choose this university because of quality of education Nd low budget fees and there is best option to get a scholarship. All facilities are provided here Including -Indian food good hostel best and most experienced faculty professors and lot of extracurricular activities.\n" +
                "Choosing Asia international university is my best decision.",
            name: "Ms. Kavita Chauhan",
            title: "1st Year-India",
            img: "/for site/IMG_7304.JPG"
        },
        {
            id: 3,
            quote: "I have seen that so many abroad colleges don’t feel like the colleges in our native. But here in ASIA INTERNATIONAL UNIVERSITY, it feels like home. I feel like I have chosen a right college for me to study well for my medical studies and help me to develop in so many other ways.",
            name: "Mr. Jignesh",
            title: "1st Year-India",
            img: "/for site/IMG_7300.JPG"
        },
        {
            id: 4,
            quote: "I chose this university because of its strong academic reputation and very supportive teachers. One of key factors that influenced my decision was the availability of scholarships. " +
                "Receiving a Scholarship not only eases the financial burden but also motivates me to work even harder and contribute actively in my academics.",
            name: "Ms. Laiba Sajjad",
            title: "Medicine, 1st Year – Pakistan",
            img: "/for site/IMG_7302.JPG"
        },
        {
            id: 5,
            quote: "I would like to thank the ASIA INTERNATIONAL UNIVERSITY for providing us with a good learning environment. The faculty is supportive, and the facilities are helpful for our studies. I hope there will be continuous improvement in areas like practical exposure, library resources, " +
                "and student support services. But still, some allegations always have, little bit of consequences, Overall, I am grateful for the opportunity to study here.",
            name: "Mr. Velu Gowtham",
            title: "1st Year-India",
            img: "/for site/IMG_7299.JPG"
        },
        {
            id: 6,
            quote: "AIU was the best choice I have made to pursue my medical dream. The faculty is top notch with well-equipped facilities and advance clinical exposure for the aspirants, also providing rich cultural experience at the hub of silk road.",
            name: "Ms. Munira Rifat",
            title: "3rd Year-Bangladesh",
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
            className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900"
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
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        What our Student Say
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="w-[30%] h-1 bg-white mx-auto"
                    ></motion.div>
                </motion.div>

                {/* Testimonial Slider */}
                <div className="relative h-[500px] md:h-[400px]">
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
                            <div
                                className="bg-white/65 backdrop-blur-sm rounded-xl shadow-2xl flex flex-col md:flex-row h-full overflow-hidden">
                                {/* Student Image */}
                                <div className="md:w-1/3 h-64 md:h-full relative">
                                    <img
                                        src={testimonials[currentIndex].img}
                                        alt={testimonials[currentIndex].name}
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r"></div>
                                </div>

                                {/* Testimonial Content */}
                                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                                    <blockquote className="text-lg md:text-xl italic text-gray-700 mb-8">
                                        "{testimonials[currentIndex].quote}"
                                    </blockquote>
                                    <div>
                                        <p className="text-xl font-semibold text-gray-900">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-[#0a37b3]">
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
                    className="flex justify-center mt-12 space-x-3"
                >
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            variants={itemVariants}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                currentIndex === index
                                    ? 'bg-[#0a37b3] scale-125'
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