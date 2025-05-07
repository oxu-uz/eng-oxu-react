import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import { Link, useNavigate } from "react-router-dom";

const TuitionFeesPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };
    const navigate = useNavigate();

    const navItems = [
        {label: "Scholarship", path: "/scholarships"},
        {label: "Tuition and Cost", path: "/tuition-fees"},
        {label: "Find Program", path: "/find-programs"},
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden mb-5">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/P1007464.MP4_snapshot_00.01.493.jpg"
                    alt="Tuition Fees"
                    preview={false}
                />
                <div className="absolute inset-0 bg-[#00316b]/70 flex flex-col justify-end">
                    <div className="container mx-auto px-4 sm:px-5">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
                        >
                            Tuition Fees
                        </motion.h1>
                        <div className="breadcrumb">
                            <ul className="flex flex-wrap items-center text-sm text-white/80">
                                <li className="flex items-center">
                                    <a className="hover:text-white flex items-center" href="/en">
                                        Home <ChevronRight className="mx-1" size="14" />
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-white font-medium">Tuition Fees</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-10 mb-5">
                {/* Content Section */}
                <section className="w-full lg:w-2/3 px-0 sm:px-5 py-6 sm:py-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{duration: 0.6}}
                        className="space-y-8"
                    >
                        {/* Introduction */}
                        <div className="mb-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#00316b]">Dear Students and Parents,</h2>
                            <p className="text-base sm:text-lg text-gray-600 mt-3">
                                It has come to our attention that there are circulating rumors regarding the tuition
                                fees at Asia International University. We would like to provide you with accurate information.
                            </p>
                        </div>

                        {/* Tuition Fee Details */}
                        <div className="mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-4">Tuition Fees for MBBS Program</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: "/fee.svg",
                                        title: "Tuition and Management Fees",
                                        amount: "$2600 per year"
                                    },
                                    {
                                        icon: "/hostel.svg",
                                        title: "Hostel Fees",
                                        amount: "$600 per year (Optional)"
                                    },
                                    {
                                        icon: "/mess.svg",
                                        title: "Mess Charge",
                                        amount: "$1000 per year (Optional)"
                                    },
                                    {
                                        icon: "/visa.svg",
                                        title: "Visa and Registration Fees",
                                        amount: "$500 per year (Optional)"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        className="bg-white flex gap-4 border border-gray-200 rounded-lg p-4"
                                    >
                                        <img src={item.icon} className="h-10 w-10" alt={item.title} />
                                        <div>
                                            <h3 className="text-sm sm:text-base font-semibold text-gray-700">{item.title}</h3>
                                            <p className="text-gray-600 text-sm sm:text-base">{item.amount}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Clarification Statement */}
                        <div className="mb-8 bg-white p-4 sm:p-5 rounded-lg shadow-sm">
                            <p className="text-gray-600 text-sm sm:text-base">
                                These fees have been set after careful consideration of various factors, including
                                operational costs, academic resources, and the overall student experience we provide.
                            </p>
                        </div>

                        {/* Rector's Message */}
                        <div className="mb-8 relative bg-white p-4 sm:p-5 rounded-lg shadow-sm">
                            <img src="/quote.svg" className="absolute top-4 right-4 h-6 w-6" alt="Quote" />
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-3">Message from Rector</h3>
                            <p className="text-gray-800 text-sm sm:text-base mb-3">
                                If you have any questions or concerns regarding tuition fees or any other aspect of our
                                university's offerings, we are here to assist you.
                            </p>
                            <p className="text-[#00316b] text-right font-bold text-sm sm:text-base">
                                Sincerely, Rector Dekhkanov Sukhrob Sobirovich
                            </p>
                        </div>

                        {/* Fee Table */}
                        <div className="mb-8 overflow-x-auto">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-4">Tuition Fee Breakdown</h3>
                            <table className="min-w-full text-left text-gray-600 border">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-bold text-[#00316b]">Year</th>
                                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-bold text-[#00316b]">Description</th>
                                    <th className="px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-bold text-[#00316b]">Amount (USD)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {[
                                    {
                                        year: "1st Year",
                                        description: "Tuition, Hostel, Mess, Visa, Government Registration, Admission, Documentation, Translation, Airport Pick-up",
                                        amount: "International@oxu.uz"
                                    },
                                    {
                                        year: "2nd to 5th Year",
                                        description: "Hostel Fees: $600\nTuition Fees: $2600\nVisa Renewal: $250\nRegistration: $250",
                                        amount: "$3700"
                                    },
                                    {
                                        year: "Total (5 Years)",
                                        description: "Including all expenses",
                                        amount: "$22,100",
                                        bold: true
                                    }
                                ].map((row, index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className={`px-3 py-2 border sm:px-4 sm:py-3 text-sm sm:text-base ${row.bold ? "font-bold" : ""}`}>
                                            {row.year}
                                        </td>
                                        <td className={`px-3 py-2 border sm:px-4 sm:py-3 text-sm sm:text-base ${row.bold ? "font-bold" : ""} whitespace-pre-line`}>
                                            {row.description}
                                        </td>
                                        <td className={`px-3 py-2 border sm:px-4 sm:py-3 text-sm sm:text-base ${row.bold ? "font-bold" : ""}`}>
                                            {row.amount}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Additional Notes */}
                        <div className="mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#00316b] mb-4">Additional Notes</h3>
                            <ul className="space-y-3">
                                {[
                                    "6th-year fee is not included (depends on NMC rule).",
                                    "Medical insurance, if applicable, will be paid extra and not included in the above charge.",
                                    "Annual charges include university fee and visa safety.",
                                    "Annual Mess charge from 2nd year: $1000 (3 meals/day, approx. $1/meal).",
                                    "Hostel and mess are compulsory for the 1st two years.",
                                    "Self-cook kitchen is available (for hostel students)."
                                ].map((note, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        className="bg-white p-3 sm:p-4 rounded-lg text-gray-600 text-sm sm:text-base"
                                    >
                                        {note}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </section>

                {/* Side Navigation */}
                <aside className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:sticky lg:top-32 h-max">
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="sideNav bg-white shadow-md rounded-lg overflow-hidden"
                    >
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-3 sm:p-4 group">
                            <span className="uppercase p-1 px-2 text-base sm:text-lg font-bold flex items-center gap-3 z-10">
                                AIU ADMISSION
                                <img
                                    className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
                                    src="/arrow.svg"
                                    alt="Arrow"
                                />
                            </span>
                            <span className="text-4xl sm:text-5xl absolute font-bold opacity-10">AIU</span>
                            <img
                                src="/Vector.svg"
                                className="absolute opacity-10 h-16 sm:h-20 right-0 bottom-0"
                                alt="Vector"
                            />
                        </li>

                        {navItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                onClick={() => navigate(item.path)}
                                className={`sideNav-links transition-colors cursor-pointer p-3 sm:p-4 ${
                                    location.pathname === item.path ? "sideNav-active" : ""
                                }`}
                            >
                                <span className="block text-sm sm:text-base">{item.label}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </aside>
            </div>
        </div>
    );
};

export default TuitionFeesPage;