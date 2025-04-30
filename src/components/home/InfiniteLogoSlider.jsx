import React, { useState, useEffect, useRef } from 'react';

const InfiniteLogoSlider = () => {
    const logos = [
        { src: "/Рисунок5.png", width: "w-[230px]" },
        { src: "/Group 1410110485.png", width: "w-[120px]" },
        { src: "/kfu_logo_0.jpg", width: "w-[250px]" },
        { src: "/okanlogo.webp", width: "w-[100px]", containerClass: "flex items-center w-[200px]" },
        { src: "/nara.webp", width: "w-[250px]" },
        { src: "/originl.webp", width: "w-[250px]" },
        { src: "/logonet.png", width: "w-[250px]" },
        { src: "/diulogoside.png", width: "w-[250px]" },
        { src: "/web-undip-logo.png", width: "w-[250px]" },
        { src: "/imisp-logo-blue-cyr2.png", width: "w-[250px]" },
        { src: "/uomusLogo.png", width: "w-[150px]", containerClass: "flex items-center w-[220px]" },
        { src: "/logo-ufla.jpg", width: "w-[250px]" }
    ];

    // Duplicate logos for seamless infinite effect
    const sliderLogos = [...logos, ...logos];
    const sliderRef = useRef(null);
    const [animationPaused, setAnimationPaused] = useState(false);
    const animationDuration = 30; // seconds for one full cycle

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Reset animation position when it completes
        const handleAnimationIteration = () => {
            slider.style.animation = 'none';
            slider.offsetHeight; // Trigger reflow
            slider.style.animation = `slide ${animationDuration}s linear infinite`;
        };

        slider.addEventListener('animationiteration', handleAnimationIteration);
        return () => {
            slider.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    return (
        <div className="relative w-full overflow-hidden py-8">
            <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

            <div
                ref={sliderRef}
                className={`flex whitespace-nowrap ${animationPaused ? 'animation-paused' : ''}`}
                style={{
                    animation: `slide ${animationDuration}s linear infinite`,
                    width: `calc(${logos.length * 400}px)`
                }}
                onMouseEnter={() => setAnimationPaused(true)}
                onMouseLeave={() => setAnimationPaused(false)}
            >
                {sliderLogos.map((logo, index) => (
                    <div
                        key={`logo-${index}`}
                        className={`inline-flex items-center justify-center mx-12 ${logo.containerClass || ''}`}
                    >
                        <img
                            src={logo.src}
                            alt={`partner-logo-${index}`}
                            className={`${logo.width} h-auto object-contain `}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteLogoSlider;