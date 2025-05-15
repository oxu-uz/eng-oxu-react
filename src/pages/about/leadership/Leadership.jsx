import React from 'react';
import { ChevronRight } from "lucide-react";

const Leadership = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-64 md:h-[450px] overflow-hidden mb-8">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/1campus/OXU.jpg"  // Replace with your actual image path
                    alt="Asia International University Leadership"
                />
                <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="container mx-auto px-4 md:px-6 z-10">
                        {/* Breadcrumb */}
                        <div className="breadcrumb py-4">
                            <ul className="flex items-center text-sm md:text-base text-white/80 space-x-2">
                                <li className="flex items-center">
                                    <a href="/" className="hover:text-white flex items-center">
                                        Home <ChevronRight className="mx-1" size={16} />
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <span className="flex items-center">
                                        About <ChevronRight className="mx-1" size={16} />
                                    </span>
                                </li>
                                <li>
                                    <a href="/about/leadership" className="text-white font-medium">
                                        Leadership & Governance
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#012152] to-transparent opacity-90"></div>
            </section>

            {/* Rector Profile Section */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
                    <div className="flex flex-col md:flex-row">
                        {/* Rector Image */}
                        <div className="md:w-1/3">
                            <img
                                src="/DSC_0414.jpg"
                                alt="Rector of Asia International University"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Rector Details */}
                        <div className="md:w-2/3 p-6 md:p-8">
                            <div className="mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#012152]">Dexkanov Suxrob Sobirovich</h2>
                                <div className="w-36 h-1 bg-[#012152] my-3"></div>
                                <p className="text-gray-700 font-medium text-lg">
                                    Founding Rector of Asia International University
                                </p>
                                <div className="flex flex-wrap items-center gap-4 mt-4">
                                    <a href="mailto:rector@oxu.uz" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        rector@oxu.uz
                                    </a>
                                    <a href="tel:+998553050009" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +998 (55) 305-00-09
                                    </a>
                                </div>
                            </div>

                            {/* Message from Rector */}
                            <div className="border-t pt-6">
                                <h3 className="text-xl font-bold text-[#012152] mb-4">Message from the Rector</h3>
                                <div className="relative">
                                    <svg className="w-8 h-8 text-gray-300 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <blockquote className="text-gray-700 italic pl-8 pr-4 text-justify">
                                        Dear Students, In today's competitive world, there is an increasing demand for individuals with high intellectual potential who can thrive in complex situations, communicate in multiple languages, and excel in information and communication technologies. We hope you draw inspiration from the achievements of scholars like al-Khwarizmi, Ibn Sina, Farabi, and Ulughbek. Many young people are already setting a positive example by actively participating in the processes of social renewal. Our dedicated faculty is eager to share their knowledge and experience with you. Learn from our highly qualified teachers and scientists. Our goal is to train top-tier professionals. I hope you see the results of your hard work during your studies, gain respect and recognition, and contribute to the development of our country as the future of Uzbekistan. Never forget that our people and our nation have great expectations from you!
                                    </blockquote>
                                    <svg className="w-8 h-8 text-gray-300 absolute -bottom-2 -right-2 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education & Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Education */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-[#012152] mb-4 border-b pb-2">Education</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="bg-[#012152] text-white rounded-full p-2 mr-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Bachelor's Degree</h4>
                                    <p className="text-gray-600">Beijing Language and Culture University (2012-2016)</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-[#012152] text-white rounded-full p-2 mr-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Master of Business Administration (MBA)</h4>
                                    <p className="text-gray-600">Heriot-Watt University (2020-2021)</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Work Schedule */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-[#012152] mb-4 border-b pb-2">Office Hours</h3>
                        <div className="flex items-start">
                            <div className="bg-[#012152] text-white rounded-full p-2 mr-3">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Meeting Schedule</h4>
                                <p className="text-gray-600">Tuesday, Thursday and Friday from 15:00 to 17:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address Section */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-12">
                    <h3 className="text-xl font-bold text-[#012152] mb-4 border-b pb-2">Office Address</h3>
                    <div className="flex items-start">
                        <div className="bg-[#012152] text-white rounded-full p-2 mr-3">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-gray-600">Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74</p>
                            {/*<div className="mt-4">*/}
                            {/*    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">*/}
                            {/*        View on map*/}
                            {/*        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />*/}
                            {/*        </svg>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;