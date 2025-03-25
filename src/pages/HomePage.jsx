import React, {useState, useEffect, useTransition, useRef, lazy, Suspense} from 'react';
import CampusSection from "../components/home/CampusSection.jsx";
import CountUp from 'react-countup';
import NewsAndEvents from "../components/home/NewsAndEvents.jsx";
const CustomCarousel = lazy(() => import("../components/home/CustomCarousel.jsx"));
import {AnimatePresence, motion, useAnimation, useInView, useReducedMotion, useSpring, useTransform} from "framer-motion";
import FadeIn, {FadeInStagger} from "../components/FadeIn.jsx";
import Slider from "react-infinite-logo-slider";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';


const HomePage = () => {
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
    const springValue = useSpring(0, { stiffness: 100, damping: 20 });
    
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
      }, 100); // 100мс * 100 шагов = 10 секунд
  
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


    const containerVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          // Указываем, что перед анимацией дочерних элементов
          // контейнер должен стать видимым
          when: "beforeChildren",
          // Задержка между появлением каждого элемента
          staggerChildren: 0.2,
        },
      },
    };
    
    // Варианты анимации для каждого элемента
    const itemVariants = {
      hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -5,
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          // Spring-анимация для более «живого» движения
          type: "spring",
          stiffness: 100,
          damping: 12,
          duration: 0.6,
        },
      },
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

      const slides = [
        {
          type: "image",
          src: "/IMG_2327.JPG",
          poster: "/IMG_2327.JPG",
        },
        {
          type: "image",
          src: "/IMG_2298.JPG",
          alt: "Image 1",
        },
        {
          type: "image",
          src: "/IMG_2372.JPG",
          alt: "Image 2",
        },
        // Можно добавить ещё слайды
      ];

      const carouselVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0"
    >
      {/* Картинка текущего слайда */}
      <img
        src={slides[currentIndex].src}
        alt={slides[currentIndex].alt}
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Тёмный оверлей */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Содержимое поверх слайда */}
      <div className="relative flex h-full flex-col items-center justify-center w-full z-20 text-white px-6 md:px-12 py-6 md:py-0">
        <motion.img
          src="/Frame 281.png"
          alt="Logo"
          className="mx-auto h-[150px] md:h-[210px] mb-6 md:mb-10"
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.2 }}
        />
        <motion.div
          className="max-w-7xl text-center"
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
        >
          <h1 className="text-2xl md:text-5xl font-extrabold uppercase mb-3 md:mb-5">
            One of the leading universities offering premier quality education in Central Asia.
          </h1>
          <p className="text-xs md:text-2xl">
            Asia International University is one of the leading universities in Central Asia, offering premier medical education designed to prepare students for the healthcare field.
          </p>
        </motion.div>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* Блок управления (controls) */}
  <div className="absolute bottom-4 md:bottom-14 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 md:space-x-6 z-30">
    {/* "01 --- 06" с прогресс-баром */}
    <div className="flex items-center space-x-2 md:space-x-3 text-white">
      {/* Текущее значение (двухзначное) */}
      <span className="text-base md:text-xl font-semibold tabular-nums">
        {String(currentIndex + 1).padStart(2, "0")}
      </span>
      {/* Мини-прогресс-бар */}
      <div className="relative w-16 md:w-24 h-[2px] bg-gray-400/60">
        <motion.div
          className="h-full bg-white"
          style={{ width: widthValue }}
        />
      </div>
      {/* Общее число слайдов (двухзначное) */}
      <span className="text-base md:text-xl font-semibold text-white/60 tabular-nums">
        {String(slides.length).padStart(2, "0")}
      </span>
    </div>

    {/* Кнопки переключения слайдов */}
    <div className="flex items-center space-x-2 md:space-x-3">
      <button
        onClick={prevSlide}
        className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#0a37b3] hover:bg-[#092076] transition-colors flex items-center justify-center"
      >
        <ChevronLeftIcon className="w-3 md:w-4 h-3 md:h-4 text-white" strokeWidth={2} />
      </button>
      <button
        onClick={nextSlide}
        className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#0a37b3] hover:bg-[#092076] transition-colors flex items-center justify-center"
      >
        <ChevronRightIcon className="w-3 md:w-4 h-3 md:h-4 text-white" strokeWidth={2} />
      </button>
    </div>
  </div>
</section>

<div ref={ref} className="px-4 md:px-32 mt-10 mx-auto">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="text-3xl md:text-4xl font-extrabold title-text text-center mb-8"
  >
    Why Choose Us
  </motion.h2>

  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-5"
    variants={containerVariants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
  >
    {features.map((feature, index) => (
      <motion.div key={index} className="text_rev_card relative" variants={itemVariants}>
        <div className="h-16 w-16 bg-white flex flex-col items-center text-center border border-[rgba(159,171,185,.2)] rounded-lg p-2 mx-auto">
          <img src={icons[index]} alt={`Icon for ${feature.split(':')[0]}`} />
        </div>
        <div className="absolute top-0 inset-0 flex justify-center pointer-events-none">
          <div className="w-full h-[1px] animate-border-width rounded-full bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
        <div className="relative z-10 text-center">
          <h3 className="text-lg glow-effect font-bold will-change-transform mb-2 tracking-wide">
            {feature.split(':')[0]}
          </h3>
          <p className="text-sm leading-relaxed will-change-transform">
            {feature.split(':')[1]}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
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
                                    src="/IMG_2363.JPG"
                                    alt=""
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="lg:w-1/2 px-4">
                            <h1 className="lg:text-4xl text-3xl leading-tight tracking-tight title-text font-extrabold">
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
                            <h1 className="lg:text-4xl text-3xl leading-tight tracking-tight title-text font-extrabold">
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
                                    src="/IMG_2372.JPG"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </FadeInStagger>


            {/* Second Section */}


            <CampusSection/>


            <section className="h-auto sm:h-[360px] bg-cover w-full flex items-center bg-fixed"
  style={{ backgroundImage: "url('/IMG_2348.JPG')" }}
>
  <div className="w-full h-full flex items-center bg-gradient-to-r from-[#092076]/70 to-[#0a37b3]/70">
    <div className="container mx-auto px-4 sm:px-8">
      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16">
        {/* Statistic Item */}
        <motion.div
          ref={ref4}
          className="stat flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 border-b border-white pb-4 sm:pb-6">
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


            <Slider
                className="partners-slider w-full"
                width="340px"
                duration={60}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <div className='logos-slide'>
                    <img src="/Рисунок5.png" alt="any" className='w-[230px] mx-12'/>
                </div>
                <div className='logos-slide'>
                    <img src="/Group 1410110485.png" alt="any" className='w-[120px] mx-12'/>
                </div>
                <div className='logos-slide'>
                    <img src="/part.png" alt="any" className='w-[250px] mx-12'/>
                </div>
                <div className='logos-slide'>
                    <img src="/kfu_logo_0.jpg" alt="any" className='w-[250px] mx-12'/>
                </div>
                <div className='flex items-center w-[200px]'>
                    <img src="/okanlogo.webp" alt="any" className='w-[100px] mx-12'/>
                </div>
                <div className='logos-slide'>
                    <img src="/nara.webp" alt="any" className='w-[250px] mx-12'/>
                </div>
                {/*<div className='logos-slide'>*/}
                {/*    <img src="/esara.jpeg" alt="any" className='w-[120px] mx-auto' />*/}
                {/*</div>*/}
                <div className="logos-slide ">
                    <img src="/originl.webp" alt="any" className='w-[250px] mx-12'/>
                </div>
                <div className='logos-slide'>
                    <img src="/logonet.png" alt="any" className=' w-[250px] mx-12'/>
                </div>
                <div className='logos-slide'>
                    <img src="/diulogoside.png" alt="any" className='w-[250px] mx-12'/>
                </div>
                <div className='logos-slide'>
                    <img src="/web-undip-logo.png" alt="any" className='w-[250px] mx-12'/>
                </div>
                <div className='logos-slide'>
                    <img src="/imisp-logo-blue-cyr2.png" alt="any"
                         className='w-[250px] mx-12'/>
                </div>
                <div className='flex items-center w-[220px]'>
                    <img src="/uomusLogo.png" alt="any2" className=' w-[150px] mx-12'/>
                </div>
                <div className='logos-slide'>
                    <img src="/logo-ufla.jpg" alt="any3" className='w-[250px] mx-12'/>
                </div>
            </Slider>

            <NewsAndEvents/>
        </div>
    );
};

export default HomePage;
