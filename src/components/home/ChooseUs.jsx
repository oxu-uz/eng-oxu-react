import React, {useEffect, useMemo, useRef} from 'react';
import {motion, useAnimation, useInView} from "framer-motion";
import StableCard from "./StableCard.jsx";

function ChooseUs(props) {
    const ref = useRef(null)
    const inView = useInView(ref, {once: true})
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    // Animatsiya variantlari
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
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
        null,// "Comprehensive Support Services: Students benefit from academic advising, counseling, and career services, guiding them throughout their educational journey and beyond.",
        "International Partnerships: AIU offers opportunities for exchange programs, internships, and collaborative research through partnerships with prestigious global institutions.",
        null,// "Community Engagement Initiatives: We encourage participation in outreach programs and community projects, making a positive social impact locally and internationally.",
        "Advanced Facilities and Laboratories: Our modern labs, libraries, and resource centers provide hands-on experiences and cutting-edge tools for academic and professional development.",
        "Cultural and Extracurricular Activities: AIU offers a vibrant selection of activities that promote personal development, leadership, and a well-rounded educational experience.",
        "Strong Alumni Network: Our robust alumni network connects current students with industry professionals for mentorship, internships, and career opportunities.",
        "Vibrant campus life: AIU’s campus provides a supportive and inclusive environment where students from diverse backgrounds can form lasting friendships, share experiences, and grow both personally and professionally.",
        null,//"Emphasis on Lifelong Learning: We foster a culture of continuous education through workshops, specialty training, and professional development programs to keep graduates at the forefront of their fields.",
    ], []);

    const photos = useMemo(() => [
        "/for site/Accredited.png",
        "/for site/Innovative Teaching Methods.JPG",
        "/for site/.Strong Research Opportunities.JPG",
        "/for site/Collaborative Learning Environment.jpg",
        null,// "/IMG_7688.JPG",
        "/for site/International Partnerships.JPG",
        null, //"/for site/Community Engagement Initiatives.JPG",
        "/IMG_7685.JPG",
        "/for site/Cultural and Extracurricular Activities.JPG",
        "/for site/Vibrant Campus Life.JPG",
        "/for site/Strong Alumini Network.jpeg",
        //"/for site/Emphasis on Lifelong Learning.jpg",
    ], [])

    return (
            <section ref={ref} className="px-4 md:px-32 mx-auto py-12">
                <div className="max-w-[1663px] max-md:max-w-full w-full mx-auto">
                    <motion.h2
                        initial={{opacity: 0, y: -20}}
                        animate={inView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.8, ease: 'easeOut'}}
                        className="relative pb-4 text-3xl md:text-4xl font-extrabold title-text text-center mb-8"
                    >
                        Why Choose Us
                        <span
                            className="absolute left-1/2 bottom-0 translate-x-[-50%] w-36 h-[3px] bg-[#012c6e]"></span>
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={`feature-${index}`}
                                variants={itemVariants}
                                layout
                                className="w-full max-w-xs sm:max-w-none"
                            >
                                {photos[index] ? (
                                    <StableCard
                                        title={feature?.split(':')[0].trim()}
                                        subtitle={feature?.split(':')[1].trim()}
                                        imageSrc={photos[index]}
                                    />
                                ) : (
                                    <div
                                        className="h-full bg-gradient-to-r from-[#012c6e] to-[#555] rounded-lg shadow-md p-6 flex flex-col justify-center">
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
                    </motion.div>
                </div>
            </section>
    );
}

export default ChooseUs;