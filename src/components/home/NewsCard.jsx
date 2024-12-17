import React from 'react';

function NewsCard({ image, category, title, className }) {
    return (
        <article className={`flex flex-col ${className}`}>
            <div className="flex overflow-hidden flex-col grow w-full bg-zinc-100 max-md:mt-8">
                <img loading="lazy" src={image} alt="" className="object-contain w-full aspect-[2]" />
            </div>
            <div className="flex flex-col items-start py-4 pr-20 pl-4 mt-4 w-full text-white top-nav max-md:pr-5">
                <div className="flex gap-2 text-sm">
                    <div className="grow font-black leading-none"></div>
                    <div className="my-auto">{category}</div>
                </div>
                <h2 className="mt-2.5 text-base font-medium leading-6">{title}</h2>
            </div>
        </article>
    );
}

export default NewsCard;