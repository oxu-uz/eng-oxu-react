import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from './NewsCard';
import { useInView, motion } from 'framer-motion';
import { getNews } from '../../services/manager/posts/ManagerPostsService';

function AllNewsPage() {
    const [news, setNews] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const navigate = useNavigate();

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
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, []);

    return (
        <div className="bg-white">
            {/* Hero section with full width image */}
            <div className="w-full relative">
                <motion.div
                    className="relative w-full h-[300px] bg-gray-300"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                >
                    <img
                        src="https://via.placeholder.com/1663x256" // Replace with actual news header image URL
                        alt="News Header"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <motion.h1
                                className="text-4xl font-extrabold"
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={animationVariants}
                            >
                                All News Updates
                            </motion.h1>
                            <motion.p className="mt-4 text-lg max-w-2xl mx-auto">
                                Stay informed with the latest news and events from our community. Explore detailed stories and updates.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Breadcrumb navigation */}
            <div className="max-w-[1663px] mx-auto px-4 py-4">
                <nav className="text-gray-600 text-sm">
                    <a href="/" className="hover:text-blue-600">Home</a> /{' '}
                    <a href="/about" className="hover:text-blue-600">About</a> /{' '}
                    <a href="/news" className="text-blue-600 font-medium">News and Events</a>
                </nav>
            </div>

            {/* News content with container */}
            <section className="max-w-[1663px] mx-auto px-4 py-10 max-md:px-5" ref={ref}>
                <main className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {news.map((newsItem) => (
                            <motion.div
                                key={newsItem.id}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={animationVariants}
                                className="bg-white"
                            >
                                <NewsCard
                                    id={newsItem.id}
                                    title={newsItem.title}
                                    image={newsItem.images[0].image_path}
                                    description={newsItem.description}
                                    category={newsItem.category.title}
                                />
                            </motion.div>
                        ))}
                    </div>
                </main>
            </section>
        </div>
    );
}

export default AllNewsPage;