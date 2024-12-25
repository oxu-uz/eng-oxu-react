import React from 'react';
import {FaNewspaper} from "react-icons/fa";

function NewsCard({ image, category, title, className }) {
    return (
        <article className={`flex group cursor-pointer flex-col ${className}`}>
            <div className="flex overflow-hidden flex-col grow w-full bg-zinc-100 max-md:mt-8">
                <img loading="lazy" src={image} alt="" className="object-contain group-hover:scale-110 transition-transform duration-500 w-full aspect-[2]" />
            </div>
            <div className="flex flex-col group-hover:bg-[#01408e] transition-colors items-start py-4 px-4 mt-4 w-full text-white top-nav max-md:pr-5">
                <div className="flex items-center gap-2 text-sm">
                    <FaNewspaper size="20" />
                    <div className="my-auto">{category}</div>
                </div>
                <h2 className="mt-2.5 text-[16px] font-semibold leading-6">{title}</h2>
            </div>
        </article>
    );
}

export default NewsCard;