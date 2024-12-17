import React from 'react';
import CampusCard from './CampusCard';

const campusData = [
    {
        id: 1,
        name: 'AIU Main Campus',
        image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/df32fb3f28e93b91c2de69d41244ebf8f17813694539d87df6bde8b32c2eaee6?apiKey=0e60d26ffe404316aa35b6241738714a&',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales in turpis eget volutpat.',
    },
    {
        id: 2,
        name: 'AIU 2nd Campus',
        image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/f7bbc780d1b519d6601927dccc113d4ee2e966c607d44a36091a4e7c8428e684?apiKey=0e60d26ffe404316aa35b6241738714a&',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales in turpis eget volutpat.',
    },
    {
        id: 3,
        name: 'AIU 3rd Campus',
        image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/8663a46a0b50598bfdda1b082980a422b5e34186295ce9e04474a765d5e685ab?apiKey=0e60d26ffe404316aa35b6241738714a&',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales in turpis eget volutpat.',
    },
    {
        id: 4,
        name: 'AIU 4th Campus',
        image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/196d4d1016c534194eaa3cf33fa7c73a228c5a10afc726813ba0765ef939b825?apiKey=0e60d26ffe404316aa35b6241738714a&',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales in turpis eget volutpat.',
    },    {
        id: 5,
        name: 'AIU 4th Campus',
        image: 'https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/196d4d1016c534194eaa3cf33fa7c73a228c5a10afc726813ba0765ef939b825?apiKey=0e60d26ffe404316aa35b6241738714a&',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales in turpis eget volutpat.',
    },
];

function CampusSection() {
    return (
        <section className="px-16 py-16 bg-white max-md:px-5">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                        <h2 className="text-5xl font-extrabold leading-tight text-[#04247B] max-md:max-w-full max-md:text-4xl">
                            Different Campuses-One University
                        </h2>
                        <p className="mt-8 text-lg leading-loose text-zinc-800 max-md:max-w-full">
                            Explore our locations in Bukhara. Our campuses are united with features that encourage AIU lifestyle.
                        </p>
                        <div className="self-stretch mt-16 max-md:mt-10 w-full">
                            <div className="flex  gap-5">
                                {campusData.slice(0, 5).map((campus) => (
                                    <CampusCard key={campus.id} {...campus} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default CampusSection;