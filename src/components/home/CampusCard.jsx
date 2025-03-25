import React from 'react';

function CampusCard({ name, image, description, additionalClasses = '' }) {
    return (
        <article className={`flex group flex-col  max-md:ml-0 max-md:w-full ${additionalClasses}`}>
            <div className="flex flex-col grow max-md:mt-10">
                <div className="flex overflow-hidden flex-col cursor-pointer bg-zinc-100">
                    <img loading="lazy" src={image} alt={`${name} campus`} className=" h-[150px] will-change-transform object-cover object-top rounded-md group-hover:scale-110 transition-transform duration-500 w-full aspect-[1.5]" />
                </div>
                <h3 className="article-card__title title-text mt-2">{name}</h3>
                <p className="mt-1 mr-8 text-sm font-medium opacity-70 leading-6 text-zinc-800 max-md:mr-2.5">{description}</p>
            </div>
        </article>
    );
}

export default CampusCard;