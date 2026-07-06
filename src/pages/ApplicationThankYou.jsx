import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleFilled } from "@ant-design/icons";
import { Button } from "antd";

const ApplicationThankYou = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
            <div className="max-w-lg w-full">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden text-center">
                    <div className="bg-[#012152] px-6 py-10">
                        <CheckCircleFilled className="text-5xl sm:text-6xl text-green-400 mb-4" />
                        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            Thank You!
                        </h1>
                        <p className="text-white/80 text-sm sm:text-base">
                            Your application has been submitted successfully.
                        </p>
                    </div>

                    <div className="px-6 sm:px-10 py-8 sm:py-10 space-y-6">
                        <div className="text-left bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h2 className="text-[#012152] font-bold mb-2">
                                What happens next?
                            </h2>
                            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                                <li className="flex gap-2">
                                    <span className="text-[#012152] font-bold">1.</span>
                                    Our admissions team will review your application.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#012152] font-bold">2.</span>
                                    We will contact you via email or phone within a few business days.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#012152] font-bold">3.</span>
                                    Keep an eye on your inbox for further instructions.
                                </li>
                            </ul>
                        </div>

                        <p className="text-gray-500 text-sm">
                            Questions? Reach us at{" "}
                            <a
                                href="mailto:admission@oxu.uz"
                                className="text-[#012152] font-medium hover:underline"
                            >
                                admission@oxu.uz
                            </a>{" "}
                            or call{" "}
                            <a
                                href="tel:+998500305876"
                                className="text-[#012152] font-medium hover:underline"
                            >
                                +998 50 030 58 76
                            </a>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button
                                size="large"
                                block
                                onClick={() => navigate("/")}
                                className="!h-12 !text-base"
                            >
                                Back to Home
                            </Button>
                            <Button
                                type="primary"
                                size="large"
                                block
                                onClick={() => navigate("/find-programs")}
                                className="!h-12 !text-base !font-semibold !bg-[#012152] hover:!bg-[#013a7a] !border-none !text-white hover:!text-white rounded-lg"
                            >
                                Explore Programs
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationThankYou;
