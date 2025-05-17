import React from 'react';

function EmbarkJourneySec(props) {
    return (
        <div className="mx-auto mt-4 cta-section flex flex-col lg:flex-row items-center justify-between gap-x-12 relative">
            <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
            {/* Text Section */}
            <div className="lg:w-1/2 px-4">
                <h1 className="lg:text-4xl text-3xl leading-tight tracking-tight text-white font-extrabold">
                    Embark on Your Journey at Asia International University!
                </h1>
                <p className="mt-4 text-lg leading-8 text-gray-200">
                    Step into a world where knowledge meets innovation, and discover your potential as a
                    future leader. Our cutting-edge programs empower you with the skills and expertise
                    needed to make a meaningful impact across industries. Join a vibrant community of
                    aspiring professionals, engage in hands-on experiences, and learn from distinguished
                    faculty dedicated to your success. At Asia International University, your journey to a
                    fulfilling career begins.
                </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2">
                <div className="video-section relative">
                    <img
                        className="w-full object-cover h-auto"
                        src="/photo_2025-04-28.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default EmbarkJourneySec;