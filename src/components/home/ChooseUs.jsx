import React, { useEffect, useMemo, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import Slider from "react-slick";
import StableCard from "./StableCard.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ChooseUs(props) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const features = useMemo(() => [
        "Accredited Academic Programs: AIU offers a wide range of accredited undergraduate and graduate degrees, ensuring graduates meet national and international standards in their respective disciplines.",
        "Innovative Teaching Methods: We utilize modern teaching techniques such as interactive learning, case studies, and digital resources to enhance critical thinking and practical application.",
        "Strong Research Opportunities: AIU encourages student involvement in research activities, fostering analytical skills and contributing to advancements across various fields.",
        "Collaborative Learning Environment: Our programs promote teamwork and communication skills essential for success through peer-learning opportunities and group projects.",
        "Comprehensive Support Services: Students benefit from academic advising, counseling, and career services, guiding them throughout their educational journey and beyond.",
        "International Partnerships: AIU offers opportunities for exchange programs, internships, and collaborative research through partnerships with prestigious global institutions.",
        "Community Engagement Initiatives: We encourage participation in outreach programs and community projects, making a positive social impact locally and internationally.",
        "Advanced Facilities and Laboratories: Our modern labs, libraries, and resource centers provide hands-on experiences and cutting-edge tools for academic and professional development.",
        "Cultural and Extracurricular Activities: AIU offers a vibrant selection of activities that promote personal development, leadership, and a well-rounded educational experience.",
        "Strong Alumni Network: Our robust alumni network connects current students with industry professionals for mentorship, internships, and career opportunities.",
        "Vibrant campus life: AIU’s campus provides a supportive and inclusive environment where students from diverse backgrounds can form lasting friendships, share experiences, and grow both personally and professionally.",
        "Emphasis on Lifelong Learning: We foster a culture of continuous education through workshops, specialty training, and professional development programs to keep graduates at the forefront of their fields.",
    ], []);

    const photos = useMemo(() => [
        "/for site/Accredited.png",
        "/for site/Innovative Teaching Methods.JPG",
        "/for site/.Strong Research Opportunities.JPG",
        "/for site/Collaborative Learning Environment.jpg",
        "/IMG_7688.JPG",
        "/for site/International Partnerships.JPG",
        "/for site/Community Engagement Initiatives.JPG",
        "/IMG_7685.JPG",
        "/for site/Cultural and Extracurricular Activities.JPG",
        "/for site/Strong Alumini Network.jpeg",
        "/for site/Vibrant Campus Life.JPG",
        "/for site/Emphasis on Lifelong Learning.jpg",
    ], []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        autoplay: true, // Enable auto-sliding
        autoplaySpeed: 4000, // Set to 4 second (4000 milliseconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        // Custom class for dots to style them
        dotsClass: "slick-dots custom-dots",
        // Custom arrow components for larger size
        nextArrow: (
            <div className="slick-arrow slick-next">
                <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        ),
        prevArrow: (
            <div className="slick-arrow slick-prev">
                <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </div>
        ),
    };

    return (
        <section
            ref={ref}
            className="relative py-12 bg-cover bg-center bg-[#012152] h-[60vh]"
        >
            {/* PNG pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
            <div className="relative z-10 max-w-[1663px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative pb-4 text-3xl md:text-4xl font-extrabold text-center text-white"
                >
                    Why Choose Us
                    <span className="absolute left-1/2 bottom-0 translate-x-[-50%] w-36 h-[3px] bg-white"></span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="relative transform translate-y-12" // Move the entire slider down
                >
                    <Slider {...sliderSettings}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={`feature-${index}`}
                                variants={itemVariants}
                                className="px-2"
                            >
                                {photos[index] ? (
                                    <StableCard
                                        title={feature?.split(':')[0].trim()}
                                        subtitle={feature?.split(':')[1].trim()}
                                        imageSrc={photos[index]}
                                        className="bg-white shadow-lg p-6"
                                    />
                                ) : (
                                    <div className="bg-gradient-to-r from-[#012152] to-[#555] shadow-lg p-6 flex flex-col justify-center">
                                        <h3 className="text-white text-xl font-bold mb-2">
                                            {feature?.split(':')[0].trim()}
                                        </h3>
                                        <p className="text-blue-100">
                                            {feature?.split(':')[1].trim()}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </Slider>
                </motion.div>
            </div>

            {/* Custom CSS for styling the dots and arrows */}
            <style>
                {`
                    .custom-dots li button:before {
                        color: white !important;
                        font-size: 12px !important;
                    }
                    .custom-dots li.slick-active button:before {
                        display:none !important;
                    }
                    .slick-arrow {
                        z-index: 10;
                    }
                    .slick-prev {
                        left: -50px;
                    }
                    .slick-next {
                        right: -50px;
                    }
                    .slick-prev:before, .slick-next:before {
                        display: none; /* Hide default arrows */
                    }
                `}
            </style>
        </section>
    );
}

export default ChooseUs;