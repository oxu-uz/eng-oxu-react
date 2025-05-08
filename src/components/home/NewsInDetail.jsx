import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {getNews, getNewsById} from "../../services/manager/posts/ManagerPostsService.jsx";
import {Typography} from "antd";

function NewsInDetail() {
    const {id} = useParams();
    const [announcement, setAnnouncement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getNewsById(id);
                setAnnouncement(data);
            } catch (error) {
                console.error('Xatolik e\'lonni yuklashda:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchAllNews = async () => {
            try {
                const all = await getNews();
                setAnnouncements(all);
            } catch (error) {
                console.error('Xatolik barcha e\'lonlarni yuklashda:', error);
            }
        };

        fetchData();
        fetchAllNews();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!announcement) return <div>Announcement not found</div>;

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            {/* Chap tomon (asosiy yangilik) */}
            <section className="p-6 w-full lg:w-2/3">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    {announcement.images?.[0]?.image_path && (
                        <img
                            src={announcement.images[0].image_path}
                            alt="News"
                            loading="lazy"
                            className="object-cover brightness-50 absolute inset-0 size-full"
                        />
                    )}
                </div>
                <h1 className="text-2xl font-bold mt-6">{announcement.title}</h1>
                <Typography.Paragraph className="text-gray-700 mt-4 leading-6 text-base">
                    {announcement.description}
                </Typography.Paragraph>
            </section>

            <aside className="hidden md:w-1/3 lg:w-1/3 py-4 md:block">
                <div className="sticky top-12 flex flex-col gap-2 p-2 rounded-xl">
                    <div className="section-header-title pl-3">
                        <h2 className="section-title text-[#012c6e] uppercase text-3xl font-black">YANGILIKLAR</h2>
                        <span className="section-green-link flex items-center gap-x-3">
                            Barcha xabarlar
                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="#182f53"></path>
                            </svg>
                        </span>
                        <div className="section-header-line"></div>
                        <div className="main-news-text-list mt-5 overflow-hidden overflow-y-auto max-h-[60vh]">
                            <div className="flex flex-col gap-3 max-h-[70vh] overflow-y-auto pr-2">
                                {announcements.map((item, index) => (
                                    <Link
                                        to={`/news/${item.id}`}
                                        key={item.id}
                                        className={`p-3 rounded-md border transition duration-200 bg-white hover:bg-[#f0f9ff] hover:border-[#012152] hover:shadow-lg hover:scale-[0.97]`}>
                                        <p className="text-xs text-gray-400">{item.created_at}</p>
                                        <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
                                        <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default NewsInDetail;