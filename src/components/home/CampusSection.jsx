import React, {useRef} from 'react';
import CampusCard from './CampusCard';
import {useInView, motion} from "framer-motion";

const campusData = [
    {
        id: 1,
        name: 'AIU Primary Campus',
        image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/df32fb3f28e93b91c2de69d41244ebf8f17813694539d87df6bde8b32c2eaee6?apiKey=0e60d26ffe404316aa35b6241738714a&',
        description: '74 G`ijduvon Street, "Yangiobod MFY", Bukhara city',
    },
    {
        id: 2,
        name: 'AIU 2nd Campus',
        image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/f7bbc780d1b519d6601927dccc113d4ee2e966c607d44a36091a4e7c8428e684?apiKey=0e60d26ffe404316aa35b6241738714a&',
        description: '86 G`ijduvon Street, "Yangiobod MFY", Bukhara city',
    },
    {
        id: 3,
        name: 'AIU 3rd Campus',
        image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/8663a46a0b50598bfdda1b082980a422b5e34186295ce9e04474a765d5e685ab?apiKey=0e60d26ffe404316aa35b6241738714a&',
        description: '20a Koksaray Street, Bukhara city',
    },
    {
        id: 4,
        name: 'AIU 4th Campus',
        image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/196d4d1016c534194eaa3cf33fa7c73a228c5a10afc726813ba0765ef939b825?apiKey=0e60d26ffe404316aa35b6241738714a&',
        description: '100 G`ijduvon Street , Bukhara city',
    },
    {
        id: 5,
        name: 'AIU 5th Campus',
        image: '/DSC_0307.JPG',
        description: '82 Samarkand Street, "Kukaldosh SMG", Bukhara city',
    },
];

function CampusSection() {
    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, {once: false});

    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    const textVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.8, ease: "easeOut"},
        },
    };

    return (
        <section className="py-20 px-4 sm:px-8">
            <div className="mx-auto max-w-[1663px]">
                {/* Header Section */}
                <div className="flex flex-col items-center w-full mb-12">
                    <motion.h2
                        variants={textVariants}
                        initial="hidden"
                        animate={isInView3 ? "visible" : "hidden"}
                        className="relative pb-4 text-3xl md:text-4xl font-extrabold title-text text-center"
                    >
                        Different Campuses – One University
                        <span className="absolute left-1/2 bottom-0 translate-x-[-50%] w-[50%] h-[3px] bg-[#012152]"></span>
                    </motion.h2>

                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate={isInView3 ? "visible" : "hidden"}
                        className="mt-4 text-xl md:text-2xl font-semibold text-[#012152] text-center max-w-3xl leading-relaxed px-4"
                    >
                        Explore our locations in Bukhara. Our campuses are united with features that encourage an
                        innovative AIU lifestyle.
                    </motion.p>
                </div>

                {/* Campus Cards Grid */}
                <div ref={ref3} className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
                        {campusData.map((campus, index) => (
                            <motion.div
                                key={campus.id}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView3 ? "visible" : "hidden"}
                                className="bg-white"
                            >
                                <CampusCard {...campus} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CampusSection;