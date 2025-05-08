import React, {useState, useEffect, useTransition, useRef, lazy, Suspense, useMemo} from 'react';
import CampusSection from "../components/home/CampusSection.jsx";
import CountUp from 'react-countup';
import NewsAndEvents from "../components/home/NewsAndEvents.jsx";

const CustomCarousel = lazy(() => import("../components/home/CustomCarousel.jsx"));
import {
    AnimatePresence,
    motion,
    useAnimation,
    useInView,
    useReducedMotion,
    useSpring,
    useTransform
} from "framer-motion";
import FadeIn, {FadeInStagger} from "../components/FadeIn.jsx";
import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';
import {Link, Element} from 'react-scroll';
import InfiniteLogoSlider from "../components/home/InfiniteLogoSlider.jsx";
import StableCard from "../components/home/StableCard.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import {useNavigate} from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();
    const [isCarouselVisible, setCarouselVisible] = useState(false);
    const ref = useRef(null)
    const inView = useInView(ref, {once: true})
    const controls = useAnimation();
    const [isPending, startTransition] = useTransition();

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const isInView1 = useInView(ref1, {once: false});
    const isInView2 = useInView(ref2, {once: false});

    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, {once: false});

    const shouldReduceMotion = useReducedMotion();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0); // 0..100
    const intervalRef = useRef(null);

    // 1) Создаём spring-значение
    const springValue = useSpring(0, {stiffness: 100, damping: 20});

    // 2) Преобразуем число в строку вида "xx%" через useTransform
    const widthValue = useTransform(springValue, (val) => `${val}%`);

    // Обновляем springValue при каждом изменении progress
    useEffect(() => {
        springValue.set(progress);
    }, [progress, springValue]);

    // Перезапуск таймера при смене currentIndex
    useEffect(() => {
        clearInterval(intervalRef.current);
        setProgress(0);

        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setCurrentIndex((p) => (p + 1) % slides.length);
                    return 0;
                }
                return prev + 1;
            });
        }, 60); // 60мс * 100 шагов = 6 секунд

        return () => clearInterval(intervalRef.current);
    }, [currentIndex]);

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

    const icons = [
        "/icons/Vector-5.svg",
        "/icons/Vector-4.svg",
        "/icons/Group-1.svg",
        "/icons/Vector-3.svg",
        "/icons/Group.svg",
        "/icons/Group 1410110397.svg",
        "/icons/Vector-3.svg",
        "/icons/Vector-2.svg",
        "/icons/Vector-1.svg",
        "/icons/noun-innovative-7582211.svg",
        "/icons/Vector.svg",
        "/icons/Group 1410110396.svg"
    ];

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

    const slides = [
        {
            type: "image",
            src: "/DSC_9787.JPG",
            poster: "/DSC_9787.JPG",
            title:" Welcome to AIU. Ready to start on an exciting journey with us? Explore our university and become part of the family. ",
            description: "Experience world-class education guided by expert International faculty and supported by a vibrant, diverse I community. ",
            cta: "Apply Now"
        },
        {
            type: "image",
            src: "/DSC_1537.JPG",
            alt: "Image 1",
            title:"One of Central Asia's leading universities, providing premier education to shape students for global careers.",
            description: "Our state-of-the-art campus, innovative programs, and strong international partnerships empower students with the skills and knowledge to thrive in a competitive world.",
            cta: "Admission Open"
        },
        {
            type: "image",
            src: "/DSC_9801.JPG",
            alt: "Image 2",
            title: "A Central Asian home for students from all over the world.",
            description: "We make sure every student feels at home—no matter where they come from. It's more than just a place to study; it's a place to belong, where diverse cultures come together to learn, grow, and connect",
            cta: "Book your seat"
        },
        // Можно добавить ещё слайды
    ];

    const carouselVariants = {
        initial: {opacity: 0},
        animate: {opacity: 1},
        exit: {opacity: 0},
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    // Функция переключения на предыдущий слайд
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="bg-white">
            <section className="relative w-full min-h-[80vh] overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        variants={carouselVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{duration: 0.8, ease: "easeOut"}}
                        className="absolute inset-0"
                    >
                        {/* Картинка текущего слайда */}
                        <img
                            src={slides[currentIndex].src}
                            alt={slides[currentIndex].alt || "Slide image"}
                            className="absolute inset-0 object-cover w-full h-full"
                        />

                        {/* Тёмный оверлей */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"/>

                        {/* Содержимое поверх слайда */}
                        <div className="relative flex h-full flex-col items-center justify-center w-full z-20 text-white px-6 md:px-12 py-6 md:py-0">
                            {/*<motion.img*/}
                            {/*    src="/Frame 281.png"*/}
                            {/*    alt="Logo"*/}
                            {/*    className="mx-auto h-[150px] md:h-[210px] mb-6 md:mb-10"*/}
                            {/*    initial={{scale: 0.8, opacity: 0, rotate: -10}}*/}
                            {/*    animate={{scale: 1, opacity: 1, rotate: 0}}*/}
                            {/*    transition={{type: "spring", stiffness: 120, damping: 14, delay: 0.2}}*/}
                            {/*/>*/}
                            <motion.div
                                className="max-w-7xl text-center"
                                initial={{y: 100, opacity: 0, scale: 0.95}}
                                animate={{y: 0, opacity: 1, scale: 1}}
                                transition={{type: "spring", stiffness: 100, damping: 20, delay: 0.5}}
                            >
                                <h1 className="text-2xl md:text-3xl font-extrabold uppercase mb-3 md:mb-5">
                                    {slides[currentIndex].title}
                                </h1>
                                <p className="text-xs md:text-2xl mb-6">
                                    {slides[currentIndex].description}
                                </p>
                                <button onClick={()=>navigate('/international-form')} className="apply-now-btn">{slides[currentIndex].cta}</button>
                                {/*<motion.button*/}
                                {/*    onClick={() => navigate('/international-form')}*/}
                                {/*    className="px-6 py-3 rounded-md text-white font-medium text-sm md:text-lg"*/}
                                {/*    initial={{scale: 0.9, opacity: 0.8}}*/}
                                {/*    animate={{*/}
                                {/*        scale: [1, 1.095, 1],*/}
                                {/*        backgroundColor: ["#012c6e"],*/}
                                {/*        // boxShadow: ["0 0 0 #012c6e", "0 0 15px #1a4bcf", "0 0 0 #012c6e"]*/}
                                {/*    }}*/}
                                {/*    transition={{*/}
                                {/*        duration: 1.3,*/}
                                {/*        repeat: Infinity,*/}
                                {/*        ease: "linear"*/}
                                {/*    }}*/}
                                {/*    whileHover={{*/}
                                {/*        // scale: 1.1,*/}
                                {/*        boxShadow: "0 0 25px rgba(10, 55, 179, 0.8)"*/}
                                {/*    }}*/}
                                {/*    whileTap={{*/}
                                {/*        scale: 0.95,*/}
                                {/*        boxShadow: "0 0 15px rgba(10, 55, 179, 0.6)"*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    {slides[currentIndex].cta}*/}
                                {/*</motion.button>*/}
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Блок управления (controls) */}
                <div
                    className="absolute bottom-4 md:bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 md:space-x-6 z-30">
                    <div className="flex items-center space-x-2 md:space-x-3">
                        <button
                            onClick={prevSlide}
                            className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#012c6e] hover:bg-[#012152] transition-colors flex items-center justify-center"
                        >
                            <ChevronLeftIcon className="w-3 md:w-4 h-3 md:h-4 text-white" strokeWidth={2}/>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#012c6e] hover:bg-[#012152] transition-colors flex items-center justify-center"
                        >
                            <ChevronRightIcon className="w-3 md:w-4 h-3 md:h-4 text-white" strokeWidth={2}/>
                        </button>
                    </div>
                </div>
            </section>

            <Element name="news">
                <NewsAndEvents/>
            </Element>

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
                            className="absolute left-1/2 bottom-0 translate-x-[-50%] w-24 h-[3px] bg-[#012c6e]"></span>
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
                                    <div className="h-full bg-gradient-to-r from-[#012c6e] to-[#555] rounded-lg shadow-md p-6 flex flex-col justify-center">
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
                                    src="/photo_2025-04-28.jpg"
                                    alt=""
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="lg:w-1/2 px-4">
                            <h1 className="lg:text-4xl text-3xl leading-tight tracking-tight title-text font-extrabold">
                                Embark on Your Journey at Asia International University!
                            </h1>
                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                Step into a world where knowledge meets innovation, and discover your potential as a
                                future leader. Our cutting-edge programs empower you with the skills and expertise
                                needed to make a meaningful impact across industries. Join a vibrant community of
                                aspiring professionals, engage in hands-on experiences, and learn from distinguished
                                faculty dedicated to your success. At Asia International University, your journey to a
                                fulfilling career begins.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </FadeInStagger>

            <FadeInStagger>
                <FadeIn>
                    {/*<div*/}
                    {/*    className="mx-auto  py-5 bg-white sm:py-10 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-x-12 relative"*/}
                    {/*>*/}
                    {/*    /!* Text Section *!/*/}
                    {/*    <div className="lg:w-1/2 px-4">*/}
                    {/*        <h1 className="lg:text-4xl text-3xl leading-tight tracking-tight title-text font-extrabold">*/}
                    {/*            Excellence in Global Education: Asia International University Among World's Leading*/}
                    {/*            Institutions*/}
                    {/*        </h1>*/}
                    {/*        <p className="mt-4 text-lg leading-8 text-gray-600">*/}
                    {/*            Asia International University stands as a beacon of academic distinction, recognized*/}
                    {/*            among the world's most prestigious educational institutions. As an institution committed*/}
                    {/*            to developing future leaders and innovators, AIU has earned its place in international*/}
                    {/*            rankings of top universities.*/}

                    {/*            Through our steadfast dedication to academic rigor, research advancement, and global*/}
                    {/*            partnerships, AIU continues to shape the landscape of higher education. We empower*/}
                    {/*            students from all disciplines to excel in our rapidly changing world, providing them*/}
                    {/*            with the knowledge and skills to make meaningful contributions to society.*/}

                    {/*            Join our academic community and discover a world of opportunities where boundaries are*/}
                    {/*            pushed, horizons are expanded, and potential is realized. At AIU, we don't just educate*/}
                    {/*            - we inspire transformation.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}

                    {/*    /!* Image Section *!/*/}
                    {/*    <div className="lg:w-1/2 px-4">*/}
                    {/*        <div className="video-section relative">*/}
                    {/*            <img*/}
                    {/*                className="w-full object-cover h-auto rounded-tl-2xl rounded-br-2xl"*/}
                    {/*                src="/InShot_20241228_222756999.jpg"*/}
                    {/*                alt=""*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <Testimonials/>
                </FadeIn>
            </FadeInStagger>


            {/* Second Section */}


            <CampusSection/>


            <section className="h-auto sm:h-[360px] bg-cover w-full flex items-center bg-fixed"
                     style={{backgroundImage: "url('/IMG_2348.JPG')"}}
            >
                <div className="w-full h-full flex items-center bg-[#012c6e]/70">
                    <div className="container mx-auto px-4 sm:px-8">
                        {/* Statistics Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
                            {/* Statistic Item */}
                            <motion.div
                                ref={ref4}
                                className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <div
                                    className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
            <span className="text-white text-5xl sm:text-7xl font-extrabold">
              <CountUp
                  start={0}
                  end={25000}
                  duration={2.5}
                  separator=","
                  scrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                                </div>
                                <span className="text-white uppercase font-semibold text-lg sm:text-xl tracking-wider">
            Students
          </span>
                            </motion.div>

                            {/* Faculty Statistic */}
                            <motion.div
                                ref={ref4}
                                className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <div
                                    className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
            <span className="text-white text-5xl sm:text-7xl font-extrabold">
              <CountUp
                  start={0}
                  end={62}
                  duration={2.5}
                  scrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                                </div>
                                <span className="text-white uppercase font-semibold text-lg sm:text-xl tracking-wider">
            Faculty
          </span>
                            </motion.div>

                            {/* Partner Universities Statistic */}
                            <motion.div
                                ref={ref4}
                                className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <div
                                    className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
            <span className="text-white text-5xl sm:text-7xl font-extrabold">
              <CountUp
                  start={0}
                  end={30}
                  duration={2.5}
                  scrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                                </div>
                                <span className="text-white uppercase font-semibold text-lg sm:text-xl tracking-wider">
            Partner Universities
          </span>
                            </motion.div>

                            {/* Alumni Employment Statistic */}
                            <motion.div
                                ref={ref4}
                                className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50}}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                <div
                                    className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
            <span className="text-white text-5xl sm:text-7xl font-extrabold">
              <CountUp
                  start={0}
                  end={82}
                  duration={2.5}
                  suffix="%"
                  scrollSpy={true}
                  scrollSpyOnce={true}
              />
            </span>
                                </div>
                                <span className="text-white uppercase font-semibold text-lg sm:text-xl tracking-wider">
            Alumni Employment
          </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <InfiniteLogoSlider/>
        </div>
    );
};

export default HomePage;
