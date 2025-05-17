import React, {useRef, useState, useEffect} from 'react';
import {useInView, motion} from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "I am currently pursuing my MBBS at Asia International University, Bukhara. I chose this university because of its strong academic reputation, affordable tuition fees, and supportive learning environment",
            name: "Mr. Avhimanyu Chand",
            title: "Nepal",
            img: "/for site/testimonials6.png"
        },
        {
            id: 2,
            quote: "The reason I choose this university because of quality of education and low budget fees and there is best option to get a scholarship. All facilities are provided here Including -Indian food good hostel best and most experienced faculty professors and lot of extracurricular activities. Choosing Asia international university is my best decision.",
            name: "Ms. Kavita Chauhan",
            title: "India",
            img: "/for site/testimonials5.png"
        },
        {
            id: 3,
            quote: "I have seen that so many abroad colleges don't feel like the colleges in our native. But here in ASIA INTERNATIONAL UNIVERSITY, it feels like home. I feel like I have chosen a right college for me to study well for my medical studies and help me to develop in so many other ways.",
            name: "Mr. Jignesh",
            title: "India",
            img: "/for site/testimonials2.png"
        },
        {
            id: 4,
            quote: "I chose this university because of its strong academic reputation and very supportive teachers. One of key factors that influenced my decision was the availability of scholarships. Receiving a Scholarship not only eases the financial burden but also motivates me to work even harder and contribute actively in my academics.",
            name: "Ms. Laiba Sajjad",
            title: "Pakistan",
            img: "/for site/testimonials4.png"
        },
        {
            id: 5,
            quote: "The University is very good, and the doctors are kind & University is equipped to the highest standard and I am very happy to have joined the Asia International University",
            name: "MOHAMMED RAGAB ABDELHADY",
            title: "Egypt",
            img: "/for site/testimonials7.png"
        },
        {
            id: 6,
            quote: "AIU was the best choice I have made to pursue my medical dream. The faculty is top notch with well-equipped facilities and advance clinical exposure for the aspirants, also providing rich cultural experience at the hub of silk road.",
            name: "Ms. Munira Rifat",
            title: "Bangladesh",
            img: "/for site/testimonials3.png"
        },
    ];

    const animationVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 1}},
    };

    // Slider settings
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section
            className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#012152] overflow-hidden"
            id="testimonials"
            ref={ref}
        >
            {/*<div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat" />*/}
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

            <div className="relative z-10 max-w-[1663px] mx-auto">
                {/* Section Header */}
                <header className="flex flex-col justify-start items-center w-full mb-12">
                    <motion.h2
                        className="relative text-3xl w-full font-extrabold text-white text-center md:text-4xl pb-4"
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={animationVariants}
                    >
                        What our Students Say
                        <span className="absolute left-1/2 bottom-0 translate-x-[-50%] w-36 h-[3px] bg-white"></span>
                    </motion.h2>
                </header>

                {/* Testimonial Slider */}
                <main className="w-full">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={animationVariants}
                                className="px-3 h-[450px]"
                            >
                                <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                                    {/* Circular Image Container */}
                                    <div className="flex justify-center pt-8">
                                        <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <img
                                                src={testimonial.img}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <blockquote className="text-gray-800 italic mb-4 flex-1">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className="mt-auto text-center">
                                            <p className="text-[#012152] font-semibold text-lg">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {testimonial.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </main>

                {/* Custom Navigation Dots */}
                <div className="flex justify-center mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`mx-1 w-3 h-3 rounded-full transition-all ${
                                currentIndex === index
                                    ? 'bg-white w-6'
                                    : 'bg-white/50'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;