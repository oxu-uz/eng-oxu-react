import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();

    const handleEnquireClick = () => {
        navigate('/international-form');
    };

    return (
        <section className="bg-white py-16 px-4 sm:px-8">
            <div className="max-w-[1663px] mx-auto">
                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-[#012152] mb-12">Contact us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
                    {/* Make an Enquiry Section */}
                    <div className="relative bg-[#012152] p-8 text-white overflow-hidden">
                        {/* PNG pattern overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-semibold mb-6">Make an enquiry</h2>
                            <p className="mb-6">We're here to help.</p>
                            <p className="mb-8">Get in touch with us today.</p>
                            <button
                                onClick={handleEnquireClick}
                                className="bg-white text-[#012152] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-md"
                            >
                                Enquire online
                            </button>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="relative bg-[#012152] p-8 text-white overflow-hidden">
                        {/* PNG pattern overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-semibold mb-6">AIU Main Campus</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium">Give us a call</p>
                                    <p className="opacity-80">From within Uzbekistan</p>
                                    <p className="text-lg font-semibold">+998 65 223 45 67</p>
                                </div>
                                <div>
                                    <p className="opacity-80">From outside Uzbekistan</p>
                                    <p className="text-lg font-semibold">+998 65 223 45 68</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block my-12 mx-4 sm:mx-6 lg:mx-8 border-t border-gray-200"></div>

                {/* Additional Contact Info */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-[#012152] p-6 text-white overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold mb-4">Admissions Office</h3>
                            <p>+998 65 223 45 69</p>
                            <p>admissions@aiu.edu</p>
                        </div>
                    </div>

                    <div className="relative bg-[#012152] p-6 text-white overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold mb-4">Student Support</h3>
                            <p>+998 65 223 45 70</p>
                            <p>support@aiu.edu</p>
                        </div>
                    </div>

                    <div className="relative bg-[#012152] p-6 text-white overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('/header1.png')] bg-repeat round" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
                            <p>+998 65 223 45 71</p>
                            <p>info@aiu.edu</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;