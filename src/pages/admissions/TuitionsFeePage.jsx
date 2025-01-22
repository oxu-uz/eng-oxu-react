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
        { label: "Scholarship ", path: "/scholarships" },
        { label: "Tuition and Cost ", path: "/tuition-fees" },
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="page-heading-content mb-5" style={{height: "175px"}}>
                <img className="bg-image bg-blue-900" src="/P1007464.MP4_snapshot_00.01.493.jpg" alt="Tuition Fees"/>
                <div className="heading-content">
                    <div className="container mx-auto px-5 title">
                        <h1 className="text-white text-4xl font-bold">Tuition Fees</h1>
                    </div>
                    <div className="breadcrumb">
                        <div className="container mx-auto">
                            <ul>
                                <li className="sideNav-link">
                                    <a className="nav-link text-white" href="/en">
                                        Home<ChevronRight size="16"/>
                                    </a>
                                </li>
                                <li className="sideNav-link">
                                    <span className="nav-link text-white">Tuition Fees</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tuition Info Section */}
            <div className="flex gap-10 px-10 mb-5">
                <section className="w-full px-5 py-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{duration: 0.6}}
                    >
                        {/* Introduction */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-[#00316b]">Dear Students and Parents,</h2>
                            <p className="text-lg text-gray-600 mt-4">
                                It has come to our attention that there are circulating rumors regarding the tuition
                                fees
                                at Asia International University. We would like to take this opportunity to provide you
                                with accurate information and dispel any misunderstandings.
                            </p>
                        </div>

                        {/* Tuition Fee Details */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Tuition Fees for MBBS Program</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                <div className="bg-white flex gap-5 border border-[rgba(159,171,185,.2)] rounded-lg p-5">
                                    <img src="/fee.svg" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-700">Tuition and Management
                                            Fees:</h3>
                                        <p className="text-gray-600">$2600 per year</p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white flex gap-5 border border-[rgba(159,171,185,.2)] rounded-lg p-5">
                                    <img src="/hostel.svg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-700">Hostel Fees:</h3>
                                        <p className="text-gray-600">$600 per year (Optional)</p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white flex gap-5 border border-[rgba(159,171,185,.2)] rounded-lg p-5">
                                    <img src="/mess.svg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-700">Mess Charge:</h3>
                                        <p className="text-gray-600">$1000 per year (Optional)</p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white flex gap-5 border border-[rgba(159,171,185,.2)] rounded-lg p-5">
                                    <img src="/visa.svg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-700">Visa and Registration
                                            Fees:</h3>
                                        <p className="text-gray-600">$500 per year (Optional; students can pay directly
                                            to
                                            the government)</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Clarification Statement */}
                        <div className="mb-8">
                            <p className="text-lg text-gray-600">
                                These fees have been set after careful consideration of various factors, including
                                operational costs, academic resources, and the overall student experience we strive to
                                provide. We encourage all prospective and current students to refer only to official
                                communications from the university or our designated representatives for accurate
                                information.
                            </p>
                        </div>

                        {/* Rector's Message */}
                        <div className="mb-8 relative">
                            <img src="/quote.svg" className="absolute top-0 right-0" />
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Message from Rector</h3>
                            <p className="text-gray-800 text-lg">
                                If you have any questions or concerns regarding tuition fees or any other aspect of our
                                university's offerings, we are here to assist you and provide clarity on any issues you
                                may have.
                            </p>
                            <p className="text-[#00316b] text-right mt-2 font-bold">Sincerely, Rector Dekhkanov Sukhrob Sobirovich</p>
                        </div>

                        {/* Fee Table */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Tuition Fee Breakdown</h3>
                            <table className="table-auto w-full text-left text-gray-600 mt-6">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-lg font-bold text-[#00316b]">Year</th>
                                    <th className="px-4 py-2 text-lg font-bold text-[#00316b]">Description</th>
                                    <th className="px-4 py-2 text-lg font-bold text-[#00316b]">Amount (USD)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border px-4 py-2">1st Year</td>
                                    <td className="border px-4 py-2">
                                        Tuition, Hostel, Mess, Visa, Government Registration, Admission,
                                        Documentation, Translation, Airport Pick-up
                                    </td>
                                    <td className="border px-4 py-2">International@oxu.uz</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">2nd to 5th Year</td>
                                    <td className="border px-4 py-2">
                                        Hostel Fees: $600<br/>
                                        Tuition Fees: $2600<br/>
                                        Visa Renewal: $250<br/>
                                        Registration: $250
                                    </td>
                                    <td className="border px-4 py-2">$3700</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-bold">Total (5 Years)</td>
                                    <td className="border px-4 py-2 font-bold">Including all expenses</td>
                                    <td className="border px-4 py-2 font-bold">$22,100</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Additional Notes */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00316b] mb-4">Additional Notes</h3>
                            <ul className="list-disc pl-5 divide-y divide-[rgba(159,171,185,.2)] text-gray-600">
                                <li className="py-5 list-none">6th-year fee is not included (depends on NMC rule).</li>
                                <li className="py-5 list-none">Medical insurance, if applicable, will be paid extra and not included in the above
                                    charge.
                                </li>
                                <li className="py-5 list-none">Annual charges include university fee and visa safety.</li>
                                <li className="py-5 list-none">Annual Mess charge from 2nd year: $1000 (3 meals/day, approx. $1/meal).</li>
                                <li className="py-5 list-none">Hostel and mess are compulsory for the 1st two years.</li>
                                <li className="py-5 list-none">Self-cook kitchen is available (for hostel students).</li>
                            </ul>
                        </div>
                    </motion.div>
                </section>
                <aside className="w-1/2 max-h-max sticky top-32 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
                            <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
                                AIU ADMISSION
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
                                onClick={() => navigate(item.path)}
                                key={index}
                                className={`sideNav-links transition-colors cursor-pointer p-2 ${
                                    location.pathname === item.path ? "sideNav-active" : ""
                                }`}
                            >
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>

        </div>
    );
};

export default TuitionFeesPage;
