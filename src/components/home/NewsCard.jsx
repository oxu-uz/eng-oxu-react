import React from 'react';

function NewsCard({ image, category, title, className, description }) {
    return (
        <article className={`flex group cursor-pointer flex-col ${className}`}>
            <div className="flex overflow-hidden flex-col grow w-full bg-zinc-100 max-md:mt-8">
                <img loading="lazy" src={image} alt="" className="object-cover group-hover:scale-110 transition-transform duration-500 w-full aspect-[2]" />
            </div>
            <div className="flex flex-col  transition-colors items-start py-2 mt-1 w-full  max-md:pr-5">
                <h2 className="mt-2.5 text-[16px] font-semibold leading-6 group-hover:text-[#0A39B3]">{title}</h2>
                <p className='article-card__description text-sm mt-2'>
                    {description}
                </p>

                <div className="flex items-center gap-2 text-sm">
                    <div className="my-auto tags-list__item text-[rgba(20,22,48,0.5)]">{category}</div>
                </div>
            </div>
        </article>
    );
}

export default NewsCard;