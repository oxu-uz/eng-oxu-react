import React from 'react';
import './style.css'
import {ChevronRight} from "lucide-react";

const Leadership = () => {
    return (
        <div>
            <section className="page-heading-content mb-5 " data-cid="714">
                <img className="bg-image" src="/headerbg2.svg" alt=""/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1>Leadership &amp; Governance</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li>
                                    <a href="/en">Home<ChevronRight size="16"/></a>
                                </li>
                                <li>
                                                                    <span>
                                About
                                                                                   <ChevronRight size="16"/>
                                                                    </span>
                                </li>
                                <li>
                                    <a href="/about/leadership">
                                        Leadership &amp; Governance
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto">
                <div className="flex items-center gap-10">
                    <img src="/DSC_5234.JPG" className="h-[300px]"/>
                    <div>
                        <h6 className="text-[#012152]">Dexkanov Suxrob Sobirovich</h6>
                        <div className="line"></div>
                        <p className="text-gray-800 font-medium">Founding Rector of Asia International University</p>
                        <div className="flex items-center divide-x gap-3">
                            <a className="text-blue-600 font-medium">rector@oxu.uz</a>
                            <a className="text-blue-600 pl-3 font-medium">+998 (55) 305-00-09</a>
                        </div>
                        <div className="flex mt-4 gap-x-5">
                            <img className="self-start" src="/quote.svg"/>
                            <p className="text-gray-500  ">Dear Students, In today's competitive world, there
                                is an increasing
                                demand for individuals with high intellectual potential who can thrive in complex
                                situations, communicate in multiple languages, and excel in information and
                                communication
                                technologies. We hope you draw inspiration from the achievements of scholars like
                                al-Khwarizmi, Ibn Sina, Farabi, and Ulughbek. Many young people are already setting a
                                positive example by actively participating in the processes of social renewal. Our
                                dedicated
                                faculty is eager to share their knowledge and experience with you. Learn from our highly
                                qualified teachers and scientists. Our goal is to train top-tier professionals. I hope
                                you
                                see the results of your hard work during your studies, gain respect and recognition, and
                                contribute to the development of our country as the future of Uzbekistan. Never forget
                                that
                                our people and our nation have great expectations from you!</p>
                            <img className="self-end" src="/quote.svg"/>
                        </div>
                    </div>
                </div>
                <h2 className="text-lg font-bold mt-6 mb-4 uppercase">Educational information</h2>
                <div className="mb-6">
                    <div className="flex  flex-wrap gap-2 w-full"><span
                        className="text-gray-700 font-bold"></span><p><span className="text-gray-700 mr-2">Beijing Language and Culture University (Bachelor) (2012-2016)</span><br/><span
                        className="text-gray-700 mr-2">Herriot Watt University (Masters) Business Administration (MBA) (2020-2021)</span><br/>
                    </p></div>
                </div>
                <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full"><span
                        className="text-lg font-bold uppercase">Work schedule </span><p><span
                        className="text-gray-700 mr-2">Tuesday, Thursday and Friday from 15:00 to 17:00</span></p></div>
                </div>
                <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full"><span
                        className="text-lg font-bold uppercase">Address</span><p><span className="text-gray-700 mr-2">Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74</span>
                    </p></div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;
