import React, {useRef, useEffect, useState} from 'react';
import NewsCard from './NewsCard';
import {useInView, motion} from "framer-motion";
import { getNews } from '../../services/manager/posts/ManagerPostsService';

const newsData = [
    { id: 1, image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/d9871df031dd822b2a0766bf3a2647c28b72ed737baeeda88b2ab7d80d3a8517?apiKey=0e60d26ffe404316aa35b6241738714a&', category: 'Academic', title: 'Call for Application: Joint Certificate Program in Climate Smart Animal Production Systems', description: 'Osiyo Xalqaro Universiteti (OXU) va Washington University of Science and Technology (WUST) o‘rtasida xalqaro hamkorlik memorandumi yo‘lga qo‘yildi. Ushbu kelishuv OXU talabalariga global ta’lim standartlariga mos bilim olish, ilmiy-tadqiqot ishlari bilan shug‘ullanish uchun yangi eshiklarni ochadi.' },
    { id: 2, image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/dc33f13cf62ddc9a2e7032565f80e353788c1395af9f2ba66e01f59dfc1dccc7?apiKey=0e60d26ffe404316aa35b6241738714a&', category: 'Academic', title: 'Call for Application: Joint Certificate Program in Climate Smart Animal Production Systems' },
    { id: 3, image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/d7034aca5029b520615e9c6981325ad2b917bb357bfaea1c7b69021e6851b6f6?apiKey=0e60d26ffe404316aa35b6241738714a&', category: 'Academic', title: 'Call for Application: Joint Certificate Program in Climate Smart Animal Production Systems' },
    { id: 4, image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/34cd8d13aeaa938a0a6a1bc326981ec8719405870fbf13f7ae53b1f02914610e?apiKey=0e60d26ffe404316aa35b6241738714a&', category: 'Academic', title: 'Call for Application: Joint Certificate Program in Climate Smart Animal Production Systems' },
];

function NewsAndEvents() {
    const [news, setNews] = useState([]);
    const ref5 = useRef(null);
    const isInView5 = useInView(ref5, { once: false });

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

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

    return (
        <section
            className="flex flex-col items-center px-20 pt-14 pb-32 bg-white max-md:px-5 max-md:pb-24"
            ref={ref5}
        >
            <div className="flex flex-col w-full max-w-[1663px] max-md:max-w-full">
                <header className="flex flex-wrap gap-5 justify-start items-center w-full max-md:max-w-full">
                    <motion.h1
                        className="text-5xl font-extrabold leading-tight title-text max-md:text-4xl"
                        initial="hidden"
                        animate={isInView5 ? 'visible' : 'hidden'}
                        variants={animationVariants}
                    >
                        News & Events
                    </motion.h1>
                    <motion.button
                        className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#0a37b3] font-medium text-white"
                        initial="hidden"
                        animate={isInView5 ? 'visible' : 'hidden'}
                        variants={animationVariants}
                    >
                        <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </motion.button>
                </header>
                <main className="mt-8 max-md:max-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {news.slice(0, 4).map((newsItem) => (
          <motion.div
            key={newsItem.id}
            initial="hidden"
            animate={isInView5 ? "visible" : "hidden"}
            variants={animationVariants}
          >
            <NewsCard
              title={newsItem.title}
              image={newsItem.images[0].image_path}
              description={newsItem.description}
              category={newsItem.category.title}
            />
          </motion.div>
        ))}
      </div>
    </main>
            </div>
        </section>
    );
}

export default NewsAndEvents;