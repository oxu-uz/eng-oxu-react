import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import {ChevronLeft, ChevronRight} from "lucide-react";

// Стиль карточек с фоном
const cardStyles = [
    {
        height: '463px',
        backgroundImage: 'url(/DSC_3324.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
    }, // Высокая карточка с изображением
    {
        height: '340px',
        backgroundImage: 'url(/DSC_3426.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }, // Средняя карточка с изображением
    {
        height: '340px',
        backgroundImage: 'url(/img1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }, // Низкая карточка с изображением
];

// Анимация для карточек: снизу вверх с плавным раскрытием
const cardAnimation = {
    hidden: { opacity: 0, y: 100 }, // Начальная позиция с небольшим смещением вниз и скрытым состоянием
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }, // Карточка плавно выдвигается вверх
};

const CustomCarousel = () => {
    return (
        <div className="carousel-container" style={{maxWidth: '900px', margin: '0 auto'}}>
            <Swiper
                spaceBetween={20} // Расстояние между слайдами
                slidesPerView={3} // Количество видимых слайдов
                loop
                autoplay={{delay: 1000}} // Автопрокрутка
            >
                {cardStyles.map((style, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial="hidden" // Начальное состояние
                            whileInView="visible" // Анимация при появлении в зоне видимости
                            viewport={{once: true, amount: 0.2}} // Триггер срабатывания анимации
                            variants={cardAnimation} // Подключение анимации
                            style={{
                                ...style,
                                display: 'flex',
                                alignItems: 'flex-end',
                                position: 'relative',
                            }}
                        >
                            <span
                                className="absolute left-10 mx-auto max-w-max bg-[#012C6E] text-white text-xs p-1 px-1.5 z-10 top-[-12px]">CAMPUS</span>
                            {/* Слой с градиентом */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '220px', // Высота градиента меньше половины
                                    background: 'linear-gradient(to top, #012C6E, rgba(4, 36, 123, 0.2), rgba(4, 36, 123, 0))',
                                    zIndex: 1,
                                    transition: 'all 0.3s ease', // Плавный переход для анимаций
                                }}
                            ></div>
                            {/* Текст */}
                            <h3
                                style={{
                                    color: '#fff',
                                    textShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                                    position: 'relative',
                                    zIndex: 2, // Текст поверх градиента
                                }}
                            >
                                Card {index + 1}
                            </h3>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className="flex gap-2 mt-5 text-lg font-black leading-none text-white whitespace-nowrap max-w-[97px] rounded-[90px]">
                <div
                    className="flex items-center justify-center border-2 h-10 w-10 border-white border-solid rounded-full">
                   <ChevronLeft size="20" />
                </div>
                <div
                    className="flex items-center justify-center border-2 h-10 w-10 border-white border-solid rounded-full">
                    <ChevronRight size="20"/>
                </div>
            </div>
        </div>
    );
};

export default CustomCarousel;
