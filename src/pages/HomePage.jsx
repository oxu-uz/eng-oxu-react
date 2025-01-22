import React, {useState, useEffect, useTransition, useRef, lazy, Suspense} from 'react';
import CampusSection from "../components/home/CampusSection.jsx";
import CountUp from 'react-countup';
import NewsAndEvents from "../components/home/NewsAndEvents.jsx";
const CustomCarousel = lazy(() => import("../components/home/CustomCarousel.jsx"));
import {motion, useAnimation, useInView} from "framer-motion";
import FadeIn, {FadeInStagger} from "../components/FadeIn.jsx";


const HomePage = () => {
    const [isCarouselVisible, setCarouselVisible] = useState(false);
    const ref = useRef(null)
    const inView = useInView(ref, {once: false})
    const controls = useAnimation();
    const [isPending, startTransition] = useTransition();

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const isInView1 = useInView(ref1, {once: false});
    const isInView2 = useInView(ref2, {once: false});

    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, {once: false});

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.2;
            if (window.scrollY > scrollThreshold) {
                setCarouselVisible(true);
            } else {
                setCarouselVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const featureVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 15 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        },
    };

    const hoverEffect = {
        transition: {duration: 0.4, yoyo: Infinity},
        // boxShadow: '0px 8px 24px rgba(255, 255, 255, 0.5)',
    };


    const features = [
        "Accredited Medical Programs: Offers recognized M.B.B.S. and M.D. degrees, ensuring graduates meet national and international standards.",
        "Innovative Teaching Methods: Utilizes modern teaching techniques such as interactive learning and digital resources to enhance critical thinking.",
        "Strong Research Opportunities: Encourages student involvement in research, fostering analytical skills and contributing to medical advancements.",
        "Collaborative Learning Environment: Promotes teamwork and communication skills essential for healthcare through peer-learning opportunities.",
        "Comprehensive Support Services: Provides academic advising, counseling, and career services to guide students throughout their educational journey.",
        "International Partnerships: Offers opportunities for exchange programs and collaborative research through partnerships with global institutions.",
        "Community Engagement Initiatives: Encourages participation in health camps and outreach programs, making a positive impact on local communities.",
        "Advanced Simulation Lab Facilities: Features modern labs for hands-on clinical practice, enhancing readiness for real-world scenarios.",
        "Cultural and Extracurricular Activities: Offers various activities that promote personal development and a well-rounded experience.",
        "Emphasis on Lifelong Learning: Encourages ongoing education through workshops and specialty training to keep graduates updated in their field.",
        "Strong Alumni Network: Connects current students with professionals through a robust network for mentorship and career opportunities.",
        "Vibrant campus life: The campus is designed to provide a supportive and inclusive environment, encouraging students to form lasting friendships and share experiences that enhance their educational journey.",
    ];

    return (
        <div className="bg-white">
            <section className="relative cs-slide-paralax-bg">
                <video
                    className="absolute inset-0 object-cover w-full h-full z-0"
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/headerbg2.svg"
                >
                    <source src="/11064.mp4" type="video/mp4"/>
                    Ваш браузер не поддерживает видео.
                </video>

                <div className="relative flex h-[80vh] flex-col items-center justify-center w-full z-20">
                    <motion.img
                        src="/logoo.svg"
                        alt="Logo"
                        className="mx-auto h-[220px] mb-10"
                        initial={{x: 0, opacity: 1}}
                        animate={{x: 0, y: 0, opacity: 1}} // Adjusted to make the logo stay centered
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    />

                    <motion.div
                        className="text-center text-white max-w-7xl px-6 md:px-12 z-20"
                        initial={{y: 150, opacity: 0}}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 25,
                        }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">
                            Asia International University: One of the leading universities offering premier quality
                            education in Central Asia.
                        </h1>
                        <p className="text-xs md:text-2xl">
                            Asia International University is one of the leading universities in Central Asia, offering
                            premier medical education designed to prepare students for the healthcare field.
                        </p>
                    </motion.div>
                </div>
            </section>


            <div
                className="bg-[linear-gradient(135deg,var(--color-primary-light),var(--color-primary),var(--color-secondary-light))] overflow-hidden relative">
                <main className="max-w-[90%]  mx-auto py-8 px-4">

                    <section ref={ref}>
                        <motion.h2
                            initial={{opacity: 0, y: -20}}
                            animate={inView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.8, ease: 'easeOut'}}
                            className="text-4xl font-semibold uppercase text-white text-center mb-8"
                        >
                            Why Choose Us
                        </motion.h2>
                        {/*<img src="/GGG.svg" className="opacity-50 h-screen top-0 right-0 absolute z-0"/>*/}
                        <motion.ul
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={featureVariants}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={hoverEffect}
                                    variants={featureVariants}
                                    className="bg-blue-900/40 group backdrop-blur-sm group overflow-hidden p-6 cursor-pointer relative rounded-lg border-2 border-[#01408e]/60"
                                >
                                    {/* Border animation container */}
                                    <div
                                        className="absolute top-[0px] inset-0 flex  justify-center pointer-events-none">
                                        <div
                                            className="w-full h-[1px] animate-border-width rounded-full bg-gradient-to-r from-transparent via-white to-transparent"/>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        <h3 className="text-lg uppercase glow-effect font-bold will-change-transform text-[#fff] mb-2 tracking-wide ">
                                            {feature.split(':')[0]}
                                        </h3>
                                        <p className="text-white text-[15px] leading-relaxed will-change-transform">{feature.split(':')[1]}</p>
                                    </div>
                                    <img src="/logo1.svg"
                                         className="opacity-20 h-48 absolute right-0 will-change-transform group-hover:translate-y-[10%] transition-transform duration-[1.2s] top-[-80%]"/>
                                </motion.li>

                            ))}
                        </motion.ul>
                    </section>
                </main>
            </div>


            <FadeInStagger>
                <FadeIn>
                    <div
                        className="mx-auto  py-5 bg-white sm:py-10 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-x-12 relative"
                    >
                        {/* Image Section */}
                        <div className="lg:w-1/2 px-4">
                            <div className="video-section relative">
                                <img
                                    className="w-full object-cover h-auto rounded-tl-2xl rounded-br-2xl"
                                    src="/2-BINO%20TALABALAR%20(3).JPG"
                                    alt=""
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="lg:w-1/2 px-4">
                            <h1 className="text-4xl leading-tight tracking-tight title-text font-extrabold">
                                Embark on Your Journey to Medical Education at Asia International University’s Medical
                                Faculty!
                            </h1>
                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                Step into a world where knowledge meets compassion, and discover your potential as a
                                future
                                healthcare
                                hero. Our cutting-edge programs empower you with the skills and expertise needed to make
                                a
                                meaningful impact
                                in medicine. Join a vibrant community of aspiring professionals, engage in hands-on
                                clinical
                                experiences,
                                and learn from distinguished faculty dedicated to nurturing your growth. At Asia
                                International
                                University,
                                your journey in the realm of medical education begins. Are you ready to make a
                                difference in the
                                world of
                                healthcare? Enroll today and be part of something extraordinary!
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    <div
                        className="mx-auto  py-5 bg-white sm:py-10 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-x-12 relative"
                    >
                        {/* Text Section */}
                        <div className="lg:w-1/2 px-4">
                            <h1 className="text-4xl leading-tight tracking-tight title-text font-extrabold">
                                Educating Compassionate Healthcare Professionals: Asia International University in the
                                WHO
                                Directory
                            </h1>
                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                Asia International University, a distinguished institution known for its academic
                                excellence,
                                stands
                                prominently among esteemed educational establishments worldwide. Recognized for its
                                commitment
                                to nurturing
                                future leaders and innovators, AIU holds a distinguished place in the reputable
                                directory of
                                medical schools
                                curated by the World Health Organization. Through unwavering dedication to academic
                                excellence,
                                research
                                innovation, and international collaboration, AIU remains at the forefront of shaping
                                higher
                                education,
                                empowering students to thrive in an ever-evolving global landscape. Embark on a journey
                                of
                                exploration with
                                us, where limitless possibilities abound.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="lg:w-1/2 px-4">
                            <div className="video-section relative">
                                <img
                                    className="w-full object-cover h-auto rounded-tl-2xl rounded-br-2xl"
                                    src="/2-BINO%20TALABALAR%20(6).JPG"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </FadeInStagger>


            {/* Second Section */}


            <CampusSection/>


            <section className="h-[360px] bg-cover w-full flex items-center bg-fixed"
                     style={{backgroundImage: "url('http://localhost:5173/4-bino-2-scaled.jpg')"}}>
                <div className="w-full h-full flex items-center" style={{
                    background: 'linear-gradient(to top, rgba(1, 64, 142, 0.8), rgba(1, 64, 142, 0.6))'
                }}>
                    <div className="container mx-auto px-8">
                        {/* Statistics Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
                            {/* Statistic Item */}
                            <motion.div
                                ref={ref4}
                                className="stat flex flex-col items-center justify-center text-center space-y-6"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <div className="flex items-center justify-center gap-6 border-b border-white pb-6">
                                    {/*<img src="/Background.svg" alt="Students Icon" className="w-16 h-16"/>*/}
                                    <span className="text-white text-7xl font-extrabold">
                                    <CountUp start={0} end={25000} duration={2.5} separator=","/>
                                </span>
                                </div>
                                <span
                                    className="text-white uppercase font-semibold text-xl tracking-wider">Students</span>
                            </motion.div>

                            {/* Faculty Statistic */}
                            <motion.div
                                ref={ref4}
                                className="stat flex flex-col items-center justify-center text-center space-y-6"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <div className="flex items-center justify-center gap-6 border-b border-white pb-6">
                                    {/*<img src="/Background-1.svg" alt="Faculty Icon" className="w-16 h-16"/>*/}
                                    <span className="text-white text-7xl font-extrabold">
                                    <CountUp start={0} end={62} duration={2.5}/>
                                </span>
                                </div>
                                <span
                                    className="text-white uppercase font-semibold text-xl tracking-wider">Faculty</span>
                            </motion.div>

                            {/* Partner Universities Statistic */}
                            <motion.div
                                ref={ref4}
                                className="stat flex flex-col items-center justify-center text-center space-y-6"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <div className="flex items-center justify-center gap-6 border-b border-white pb-6">
                                    {/*<img src="/Background-2.svg" alt="Partner Universities Icon" className="w-16 h-16"/>*/}
                                    <span className="text-white text-7xl font-extrabold">
                                    <CountUp start={0} end={30} duration={2.5}/>
                                </span>
                                </div>
                                <span className="text-white uppercase font-semibold text-xl tracking-wider">Partner Universities</span>
                            </motion.div>

                            {/* Alumni Employment Statistic */}
                            <motion.div
                                ref={ref4}
                                className="stat flex flex-col items-center justify-center text-center space-y-6"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <div className="flex items-center justify-center gap-6 border-b border-white pb-6">
                                    {/*<img src="/Background-3.svg" alt="Alumni Employment Icon" className="w-16 h-16"/>*/}
                                    <span className="text-white text-7xl font-extrabold">
                                    <CountUp start={0} end={82} duration={2.5} suffix="%"/>
                                </span>
                                </div>
                                <span className="text-white uppercase font-semibold text-xl tracking-wider">Alumni Employment</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            <NewsAndEvents/>
        </div>
    );
};

export default HomePage;
