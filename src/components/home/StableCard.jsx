// 1. Alohida faylga ajratib oling (masalan, StableCard.jsx)
import React from 'react';

const StableCard = ({ title, subtitle, imageSrc }) => {
    return (
        <div className="w-full h-80 relative overflow-hidden group rounded-xl shadow-lg">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"/>

            {/* Always Visible Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-medium text-lg">{title}</h3>
                <p className="text-white transition-colors duration-300 text-sm mt-1">
                    {subtitle.split(' ').slice(0, 10).join(' ')}...
                </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#0a37b3]/90 p-6 flex flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default React.memo(StableCard);