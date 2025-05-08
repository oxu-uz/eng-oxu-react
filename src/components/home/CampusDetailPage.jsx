import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const CampusDetailPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const controls = useAnimation();
    const galleryRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        });
    }, [controls]);

    if (!state?.campus) {
        navigate('/campuses');
        return null;
    }

    const { campus } = state;
    const { name, description, gallery } = campus;

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === gallery.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? gallery.length - 1 : prev - 1
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-blue-600 mb-8 hover:text-blue-800 transition-colors"
                >
                    <ChevronLeft size={20} className="mr-1" />
                    Back to Campuses
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Main Image */}
                        <div className="md:w-2/3 relative">
                            <div className="relative h-96 md:h-[500px] overflow-hidden">
                                <motion.img
                                    key={currentImageIndex}
                                    src={gallery[currentImageIndex]}
                                    alt={`${name} - ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                                >
                                    <ChevronLeft size={24} className="text-gray-800" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                                >
                                    <ChevronRight size={24} className="text-gray-800" />
                                </button>
                            </div>
                        </div>

                        {/* Campus Info */}
                        <div className="md:w-1/3 p-6 md:p-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
                            <p className="text-gray-600 mb-6">{description}</p>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Photo Gallery</h3>
                                <div
                                    ref={galleryRef}
                                    className="grid grid-cols-3 gap-3 max-h-60 overflow-y-auto pr-2"
                                >
                                    {gallery.map((img, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`relative cursor-pointer rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                                            onClick={() => setCurrentImageIndex(index)}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-20 object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CampusDetailPage;