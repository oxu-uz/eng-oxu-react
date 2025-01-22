import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import FadeIn, {FadeInStagger} from "../components/FadeIn.jsx";
import {motion} from "framer-motion";
import Slider from 'react-infinite-logo-slider';
function IntHome() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Массив изображений
    const images = [
        'https://oxu.uz/talabalar_hayoti-6.jpg',
        'https://oxu.uz/talabalar_hayoti-6.jpg',
        'https://oxu.uz/talabalar_hayoti-6.jpg',
    ];

    return (
        <div className='header-section'>


            <div className="header-section2 relative">
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
                                Innovative Teaching Methodologies
                            </h1>{" "}
                            <p
                                data-wow-offset={10}
                                data-wow-delay="0.5s"
                                data-wow-duration="2s"
                                className="wow fadeInUp text-lg mt-4 text-white max-w-3xl"
                            >
                                Within the Faculty of Medicine at Asia International University, we are at the forefront
                                of incorporating contemporary technology into the academic realm. Our cutting-edge
                                distance education modules offer students distinctive learning prospects that are
                                tailored to align with the most recent advancements in medical science and technology.
                                Through the utilization of advanced educational platforms, our curriculum fosters
                                interactive learning environments that promote better understanding and active
                                participation among students.
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
                                    className=" mt-5 bg-[#fff] h-40 items-center text-white rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-1 py-1 divide-y sm:divide-y-0 sm:divide-x divide-[hsla(0,0%,100%,.2)] bg-white-500 z-10">
                                    <Slider
                                        className="partners-slider w-full"
                                        width="340px"
                                        duration={30}
                                        pauseOnHover={true}
                                        blurBorders={false}
                                        blurBoderColor={'#fff'}
                                    >
                                        <div className='logos-slide'>
                                            <img src="/part.png" alt="any" className='w-[250px] mx-auto' />
                                        </div>
                                        <div className='logos-slide'>
                                            <img src="/kfu_logo_0.jpg" alt="any" className='w-[250px] mx-auto' />
                                        </div>
                                        <div className='flex items-center w-[200px]'>
                                            <img src="/okanlogo.webp" alt="any" className='w-[100px] mx-auto' />
                                        </div>
                                        <div className='logos-slide'>
                                            <img src="/nara.webp" alt="any" className='w-[250px] mx-auto' />
                                        </div>
                                        {/*<div className='logos-slide'>*/}
                                        {/*    <img src="/esara.jpeg" alt="any" className='w-[120px] mx-auto' />*/}
                                        {/*</div>*/}
                                        <div className="logos-slide ">
                                            <img src="/originl.webp" alt="any" className='w-[250px] mx-auto' />
                                        </div>
                                        <div className='logos-slide'>
                                            <img src="/logonet.png" alt="any" className=' w-[250px] mx-auto' />
                                        </div>
                                        <div className='logos-slide'>
                                            <img src="/diulogoside.png" alt="any" className='w-[250px] mx-auto' />
                                        </div>
                                        <div className='logos-slide'>
                                            <img src="/web-undip-logo.png" alt="any" className='w-[250px] mx-auto' />
                                        </div>
                                        <div className='logos-slide'>
                                            <img src="/imisp-logo-blue-cyr2.png" alt="any" className='w-[250px] mx-auto' />
                                        </div>
                                        <div className='flex items-center w-[220px]'>
                                            <img src="/uomusLogo.png" alt="any2" className=' w-[150px] mx-auto' />
                                        </div>
                                        {/* <div className='logos-slide'>
                <img src="/sabahttin-zaim-university-logo.png" alt="any3" className='w-[250px] mx-auto' />
            </div> */}
                                        {/*<div className='logos-slide'>*/}
                                        {/*    <img src="/main_logo_en_5.png" alt="any3" className='w-[250px] mx-auto' />*/}
                                        {/*</div>*/}
                                        <div className='logos-slide'>
                                            <img src="/logo-ufla.jpg" alt="any3" className='w-[250px] mx-auto' />
                                        </div>
                                    </Slider>
                                </div>
                                <div
                                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
                                    style={{filter: "blur(114px)"}}
                                />
                            </div>
                        </div>
                        <div className="relative p-10 flex items-center w-full h-[400px]">
                            {/* Картинка с анимацией с использованием framer-motion */}
                            <img src="/IMG_9314.JPG"/>
                        </div>
                        {" "}
                    </main>
                </div>
            </div>



            <section className="py-12">

                <FadeInStagger>
                    <FadeIn>
                        <div
                            className="mx-auto  py-5 bg-white sm:py-10 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-x-12 relative"
                        >
                            {/* Image Section */}
                            <div className="lg:w-1/2 px-4">
                                <div className="video-section relative">
                                    <img loading="lazy"
                                        className="w-full object-cover h-auto rounded-tl-2xl rounded-br-2xl"
                                        src="/IMG_9276.JPG"
                                        alt=""
                                    />
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="lg:w-1/2 px-4">
                                <h1 className="text-4xl leading-tight tracking-tight title-text font-extrabold">
                                    Empowering Minds, Enriching Futures: Asia International University in
                                    the WHO Directory
                                </h1>
                                <p className="mt-4 text-lg leading-8 text-gray-600">
                                    Asia International University, a distinguished institution known for its academic
                                    excellence, stands
                                    prominently among esteemed educational establishments worldwide. Recognized for its
                                    commitment to
                                    nurturing future leaders and innovators, AIU holds a distinguished place in the
                                    reputable directory of
                                    medical schools curated by the World Health Organization. Through unwavering
                                    dedication
                                    to academic
                                    excellence, research innovation, and international collaboration, AIU remains at the
                                    forefront of
                                    shaping higher education, empowering students to thrive in an ever-evolving global
                                    landscape. Embark on
                                    a journey of exploration with us, where limitless possibilities abound.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </FadeInStagger>
            </section>


            {/*<div className="py-12 max-w-7xl mx-auto header-section">*/}
            {/*    /!*<PartnersCarousel/>*!/*/}

            {/*</div>*/}
            <div
                className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:pb-14 lg:mt-12 xl:max-w-6xl">
                {/* Image Column */}
                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img
                        className="h-full contrast-125 w-full object-cover"
                        src="/erasmus.webp"
                        alt="Winding mountain road"
                    />
                </div>
                <div
                    className="max-w-lg  bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-18 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
                    {/* Text Wrapper */}
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase title-text lg:text-4xl">
                            ERASMUS+
                        </h2>
                        <p className="mt-4">
                            We are proud to participate in international educational programs,
                            including ERASMUS+. Join us and discover new horizons of education!
                        </p>
                        {/* Button Container */}
                        <div className="mt-8">
                            <Link
                                target="_blank"
                                to="/international-form"
                                className="px-5 py-2.5 overflow-hidden button-lg rounded-md group bg-[#012c6e] relative hover:bg-gradient-to-r hover:from-[#012c6e] hover:to-[#0d1f3b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#182f53] transition-all ease-out duration-300"
                            >
                  <span
                      className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"/>
                                <span className="relative">Apply now</span>
                            </Link>
                        </div>
                    </div>
                    {/* Close Text Wrapper */}
                </div>
            </div>


            <div
                className="mx-auto grid max-w-full grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-14 sm:px-6 sm:py-12 lg:max-w-full lg:grid-cols-2 lg:px-12">
                <div>
                    <div className="divider mb-3 h-[5px] w-[80px] bg-[#012C6E]"/>
                    <h2 className="text-3xl title-text font-bold tracking-tight sm:text-4xl">
                        Unlocking the Art of Healing
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Asia International University, a distinguished institution known for its academic excellence,
                        stands
                        prominently among esteemed educational establishments worldwide. Recognized for its commitment
                        to
                        nurturing future leaders and innovators, AIU holds a distinguished place in the reputable
                        directory of
                        medical schools curated by the World Health Organization. Through unwavering dedication to
                        academic
                        excellence, research innovation, and international collaboration, AIU remains at the forefront
                        of shaping
                        higher education, empowering students to thrive in an ever-evolving global landscape. Embark on
                        a journey
                        of exploration with us, where limitless possibilities abound.
                    </p>
                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-bold text-2xl title-text">The MBBS Odyssey</dt>
                            <dd className="mt-2 text-md text-gray-500">
                                Embark on a comprehensive educational journey with our Bachelor of Medicine (MBBS)
                                program. Here,
                                stethoscopes symbolize the art of patient interaction, and textbooks are gateways to
                                profound
                                knowledge. From anatomy to interpersonal communication, we nurture the development of
                                well-rounded
                                healthcare providers who understand that medicine is an intricate blend of scientific
                                rigor and
                                compassionate care.
                            </dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-bold  text-2xl title-text">
                                The Alchemist’s Lab: MSM and MD
                            </dt>
                            <dd className="mt-2 text-md text-gray-500">
                                Our Master of Science in Medicine (MSM) and Doctor of Medicine (MD) programs are
                                transformative arenas
                                where curiosity blossoms into groundbreaking advancements. Engage in pioneering
                                research, decode the
                                complexities of genetics, and delve into data analysis. The transformative power of
                                medicine invites
                                you to explore a realm teeming with possibilities for innovation and discovery.
                            </dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-bold  text-2xl title-text">
                                The Explorer’s Compass: Pre-Med Track
                            </dt>
                            <dd className="mt-2 text-md text-gray-500">
                                For those aspiring to excel in medicine, our Pre-Med Track offers essential preparation.
                                Navigate
                                through foundational courses, unravel complex medical concepts, and embark on your path
                                toward a
                                future as a distinguished healthcare professional.
                            </dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-bold  text-2xl title-text">
                                Clinical Constellations
                            </dt>
                            <dd className="mt-2 text-md text-gray-500">
                                Our clinics are dynamic centers of healing. Our physicians wield stethoscopes as
                                instruments of care,
                                conducting routine check-ups and making precise diagnoses. Whether in Primary Care,
                                Specialty Clinics,
                                or the Emergency Medicine department, they stand ready to deliver care and healing to
                                all in need.
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 lg:gap-4">
                    <img
                        src="/IMG_9311.JPG"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        data-wow-offset={10}
                        data-wow-delay="0.5s"
                        data-wow-duration="2s"
                        className="wow fadeIn rounded-lg bg-gray-100"
                    />
                    <img
                        src="/IMG_9372.JPG"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        data-wow-offset={10}
                        data-wow-delay="0.5s"
                        data-wow-duration="2s"
                        className="wow fadeIn rounded-lg bg-gray-100"
                    />
                    <img
                        src="/IMG-20241205-WA0051.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        data-wow-offset={10}
                        data-wow-delay="0.5s"
                        data-wow-duration="2s"
                        className="wow fadeIn rounded-lg bg-gray-100"
                    />
                    <img
                        src="/IMG-20241204-WA0367.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        data-wow-offset={10}
                        data-wow-delay="0.5s"
                        data-wow-duration="2s"
                        className="wow fadeIn rounded-lg bg-gray-100"
                    />
                </div>
            </div>


        </div>


    )
}

export default IntHome