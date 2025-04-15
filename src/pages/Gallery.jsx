import React, { useState } from "react";
import {Image} from "antd";
import {ChevronRight} from "lucide-react";

const Gallery = () => {
    const [activeTab, setActiveTab] = useState(0);

    const navItems = [
        {
            label: "1st Campus",
            images: [
                "/1campus/1.JPG",
                "/1campus/2.JPG",
                "/1campus/3.JPG",
                "/1campus/4.jpg",
                "/1campus/6.jpg",
                "/1campus/image_2023-10-19_16-46-45.png",
                "/1campus/image_2023-10-19_16-47-59.png",
                "/1campus/P1007485.MP4_snapshot_00.02.636.jpg",
            ],
        },
        {
            label: "2nd Campus",
            images: [
                "/2campus/P1007523.MP4_snapshot_00.23.972.jpg",
                "/2campus/P1007526.MP4_snapshot_00.11.167.jpg",
                "/2campus/P1007534.MP4_snapshot_00.00.664 (2).jpg",
                "/2campus/P1007537.MP4_snapshot_00.00.437 (2).jpg",
            ],
        }, {
            label: "3rd Campus",
            images: [
                "/3campus/DSC_0285.JPG",
                "/3campus/DSC_0284.JPG",
                "/3campus/DSC_0286.JPG",
                "/3campus/DSC_0287.JPG",
                "/3campus/DSC_0288.JPG",
                "/3campus/DSC_0289.JPG",
                "/3campus/DSC_0290.JPG",
                "/3campus/DSC_0291.JPG",
            ],
        },{
            label: "4th Campus",
            images: [
                "/4campus/2.JPG",
                "/4campus/4.JPG",
                "/4campus/5.jpg",
                "/4campus/3.JPG",
                "/4campus/6.jpg",
                "/4campus/7.jpg",
            ],
        },{
            label: "5th Campus",
            images: [
                "/5campus/DSC_0291 (2).JPG",
                "/5campus/DSC_0294.JPG",
                "/5campus/DSC_0295.JPG",
                "/5campus/DSC_0298.JPG",
                "/5campus/DSC_0300.JPG",
                "/5campus/DSC_0301.JPG",
                "/5campus/DSC_0307.JPG",
            ],
        },
    ];

    return (
        <div>
            <section className="page-heading-content mb-5" style={{height: "275px"}} data-cid="714">
                <img className="bg-image bg-blue-900" src="/1campus/OXU.jpg" alt="Scholarship"/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">GALLERY</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link text-white" href="/">
                                        Home<ChevronRight size="16"/>
                                    </a>
                                </li>
                                <li className="sideNav-link">
                                    <span className="nav-link text-white">Gallery</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex lg:flex-nowrap flex-wrap gap-10 px-10 my-5">
                {/* Gallery */}
                <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-4">
                    {navItems[activeTab].images.map((image, index) => (
                        <div key={index} className="break-inside-avoid rounded-lg overflow-hidden mb-4">
                            <Image
                                className="w-full h-auto rounded-lg"
                                src={image}
                                alt={`Campus ${activeTab + 1} - Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
                {/* Tabs */}
                <aside className="w-1/2 max-h-max sticky top-32 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
            <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
              AIU GALLERY
              <img
                  className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
                  src="/arrow.svg"
                  alt="Arrow"
              />
            </span>
                            <span className="text-7xl absolute font-bold opacity-10">AIU</span>
                            <img
                                src="/Vector.svg"
                                className="absolute opacity-10 h-20 right-0 bottom-0"
                                alt="Vector"
                            />
                        </li>
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`sideNav-links transition-colors cursor-pointer p-2 ${
                                    activeTab === index ? "sideNav-active" : ""
                                }`}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default Gallery;
