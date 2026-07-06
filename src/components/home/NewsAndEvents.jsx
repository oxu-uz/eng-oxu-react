import React, {useRef, useEffect, useState, useMemo} from 'react';
import NewsCard from './NewsCard';
import {useInView, motion} from "framer-motion";
import {getNews} from '../../services/manager/posts/ManagerPostsService';
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewsAndEvents() {
    const [news, setNews] = useState([]);
    const ref5 = useRef(null);
    const isInView5 = useInView(ref5, { once: true, amount: 0.2 });
    const navigate = useNavigate();

    const animationVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 1}},
    };

    const settings = useMemo(() => ({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }), []);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await getNews();
                setNews(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        fetchNews();
    }, []);

    const handleViewAll = () => {
        navigate('/news/all');
    };

    return (
        <section className="flex flex-col items-center px-20 max-md:px-5 md:pb-[50px]" ref={ref5}>
            <div className="flex flex-col w-full max-w-[1663px] max-md:max-w-full">
                <header className="flex pt-[50px] flex-col justify-start items-center w-full max-md:max-w-full">
                    <motion.h2
                        className="relative text-3xl w-full font-extrabold title-text text-center md:text-4xl pb-4"
                        initial="hidden"
                        animate={isInView5 ? 'visible' : 'hidden'}
                        variants={animationVariants}
                    >
                        Latest News
                        <span className="absolute left-1/2 bottom-0 translate-x-[-50%] w-36 h-[3px] bg-[#012152]"></span>
                    </motion.h2>
                    {/*<motion.p*/}
                    {/*    variants={textVariants}*/}
                    {/*    initial="hidden"*/}
                    {/*    animate={isInView5 ? "visible" : "hidden"}*/}
                    {/*    className="mt-4 text-xl md:text-2xl font-semibold text-[#012152] text-center max-w-3xl leading-relaxed px-4"*/}
                    {/*>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab dicta ipsam iure laborum pariatur.*/}
                    {/*</motion.p>*/}
                </header>
                <main className="mt-8 max-md:max-w-full flex flex-col items-center">
                    <div className="w-full">
                        <Slider {...settings}>
                            {news.map((newsItem) => (
                                <div
                                    key={newsItem?.id}
                                    className="px-2"
                                >
                                    <NewsCard
                                        id={newsItem?.id}
                                        title={newsItem?.title}
                                        image={newsItem?.images[0].image_path}
                                        description={newsItem?.description}
                                        category={newsItem?.category.title}
                                        className="bg-white"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="mt-[25px]">
                        <button onClick={handleViewAll} className="view-all-btn rounded-lg">
                            {/* PNG pattern overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
                            View all news
                        </button>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default NewsAndEvents;