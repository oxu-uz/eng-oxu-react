import React from 'react';

function CampusCard({ name, image, description, additionalClasses = '' }) {
    return (
        <article className={`flex flex-col  max-md:ml-0 max-md:w-full ${additionalClasses}`}>
            <div className="flex flex-col grow max-md:mt-10">
                <div className="flex overflow-hidden flex-col bg-zinc-100">
                    <img loading="lazy" src={image} alt={`${name} campus`} className="object-contain w-full aspect-[1.5]" />
                </div>
                <h3 className="self-start mt-5 text-xl font-bold leading-tight text-blue-900">{name}</h3>
                <p className="mt-4 mr-8 text-sm font-medium leading-6 text-zinc-800 max-md:mr-2.5">{description}</p>
            </div>
        </article>
    );
}

export default CampusCard;