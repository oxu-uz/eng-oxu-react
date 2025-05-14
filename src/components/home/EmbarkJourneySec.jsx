import React from 'react';

function EmbarkJourneySec(props) {
    return (
        <div
            className="mx-auto  py-5 bg-white  sm:py-10 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-x-12 relative">
            {/* Image Section */}
            <div className="lg:w-1/2 px-4">
                <div className="video-section relative">
                    <img
                        className="w-full object-cover h-auto rounded-tl-2xl rounded-br-2xl"
                        src="/photo_2025-04-28.jpg"
                        alt=""
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 px-4">
                <h1 className="lg:text-4xl text-3xl leading-tight tracking-tight title-text font-extrabold">
                    Embark on Your Journey at Asia International University!
                </h1>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    Step into a world where knowledge meets innovation, and discover your potential as a
                    future leader. Our cutting-edge programs empower you with the skills and expertise
                    needed to make a meaningful impact across industries. Join a vibrant community of
                    aspiring professionals, engage in hands-on experiences, and learn from distinguished
                    faculty dedicated to your success. At Asia International University, your journey to a
                    fulfilling career begins.
                </p>
            </div>
        </div>
    );
}

export default EmbarkJourneySec;