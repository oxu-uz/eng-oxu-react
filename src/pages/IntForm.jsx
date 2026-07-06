import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Form,
    Input,
    Button,
    Checkbox,
    message,
    Select,
    DatePicker,
    Steps,
    Descriptions,
} from "antd";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { RiWhatsappFill } from "react-icons/ri";
import { isValidPhoneNumber } from "libphonenumber-js";
import { applicationForm } from "../services/contact/contactService.jsx";

const { Option } = Select;
const { TextArea } = Input;

const STEPS = [
    { title: "Personal", description: "Basic details" },
    { title: "Academic", description: "Education info" },
    { title: "Contact", description: "How to reach you" },
    { title: "Review", description: "Confirm & submit" },
];

const STEP_FIELDS = [
    ["firstname", "surname", "gender", "b_date", "nationality"],
    ["email", "study_status"],
    ["contact", "extra_contact", "whatsapp", "address"],
    [],
];

const phoneInputProps = {
    defaultCountry: "uz",
    className: "ant-input ant-input-lg w-full",
    inputStyle: { width: "100%", height: 40 },
    countrySelectorStyleProps: {
        buttonStyle: {
            padding: "8px",
            border: "1px solid #d1d5db",
            borderRadius: "6px 0 0 6px",
            height: 40,
        },
    },
};

const IntForm = () => {
    const navigate = useNavigate();
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const validatePhoneNumber = (_, value) => {
        if (!value) {
            return Promise.reject(new Error("Phone number is required"));
        }
        if (isValidPhoneNumber(value)) {
            return Promise.resolve();
        }
        return Promise.reject(new Error("Invalid phone number"));
    };

    const handleNext = async () => {
        try {
            await form.validateFields(STEP_FIELDS[currentStep]);
            setCurrentStep((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch {
            message.warning("Please fill in all required fields before continuing.");
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleFinish = async (values) => {
        if (!acceptTerms) {
            message.warning("Please accept the Terms and Conditions to continue.");
            return;
        }

        setLoading(true);
        try {
            const formData = {
                ...values,
                b_date: values.b_date?.format?.("YYYY-MM-DD"),
                contact: values.contact ? values.contact.replace(/\D/g, "") : null,
                extra_contact: values.extra_contact
                    ? values.extra_contact.replace(/\D/g, "")
                    : null,
                whatsapp: values.whatsapp
                    ? values.whatsapp.replace(/\D/g, "")
                    : null,
            };

            const response = await applicationForm(formData);

            if (response && response.success) {
                form.resetFields();
                setAcceptTerms(false);
                setCurrentStep(0);
                navigate("/international-form/thank-you");
            } else {
                message.error(
                    response?.message ||
                        "Failed to submit application. Please try again."
                );
            }
        } catch (error) {
            console.error("Submission error:", error);
            if (error.response) {
                message.error(
                    error.response.data?.message || "Server error occurred"
                );
            } else if (error.request) {
                message.error("Network error. Please check your connection.");
            } else {
                message.error("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    const values = Form.useWatch([], form);

    const formatReviewValue = (key, value) => {
        if (value == null || value === "") return "—";
        if (key === "b_date") return value.format?.("DD MMM YYYY") || value;
        if (key === "gender") {
            return value === "male" ? "Male" : value === "female" ? "Female" : value;
        }
        return String(value);
    };

    const reviewLabels = {
        firstname: "First Name",
        surname: "Last Name",
        gender: "Gender",
        b_date: "Birth Date",
        nationality: "Nationality",
        email: "Email",
        study_status: "Study Status",
        contact: "Phone Number",
        extra_contact: "Alternative Phone",
        whatsapp: "WhatsApp",
        address: "Address",
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                        <Form.Item
                            label="First Name"
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your first name",
                                },
                            ]}
                        >
                            <Input size="large" placeholder="First Name" />
                        </Form.Item>

                        <Form.Item
                            label="Last Name"
                            name="surname"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your last name",
                                },
                            ]}
                        >
                            <Input size="large" placeholder="Last Name" />
                        </Form.Item>

                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[
                                { required: true, message: "Please select gender" },
                            ]}
                        >
                            <Select size="large" placeholder="Select gender">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="b_date"
                            label="Birth Date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select birth date",
                                },
                            ]}
                        >
                            <DatePicker
                                size="large"
                                style={{ width: "100%" }}
                                placeholder="Select date"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Nationality"
                            name="nationality"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your nationality",
                                },
                            ]}
                            className="md:col-span-2"
                        >
                            <Input size="large" placeholder="Nationality" />
                        </Form.Item>
                    </div>
                );

            case 1:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your email",
                                },
                                {
                                    type: "email",
                                    message: "Please enter a valid email",
                                },
                            ]}
                            className="md:col-span-2"
                        >
                            <Input size="large" placeholder="email@example.com" />
                        </Form.Item>

                        <Form.Item
                            label="Current Study Status"
                            name="study_status"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your study status",
                                },
                            ]}
                            className="md:col-span-2"
                        >
                            <Input
                                size="large"
                                placeholder="e.g. High school graduate, Bachelor's degree"
                            />
                        </Form.Item>
                    </div>
                );

            case 2:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                        <Form.Item
                            label="Phone Number"
                            name="contact"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your phone number",
                                },
                                { validator: validatePhoneNumber },
                            ]}
                            validateTrigger={["onBlur"]}
                        >
                            <PhoneInput {...phoneInputProps} />
                        </Form.Item>

                        <Form.Item
                            label="Alternative Phone Number"
                            name="extra_contact"
                        >
                            <PhoneInput {...phoneInputProps} />
                        </Form.Item>

                        <Form.Item
                            label="WhatsApp Number"
                            name="whatsapp"
                            className="md:col-span-2"
                        >
                            <Input
                                prefix={
                                    <RiWhatsappFill color="#25D366" size={20} />
                                }
                                size="large"
                                placeholder="WhatsApp Number (optional)"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your address",
                                },
                            ]}
                            className="md:col-span-2"
                        >
                            <TextArea
                                rows={3}
                                placeholder="Full address including city and country"
                            />
                        </Form.Item>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 sm:p-6">
                            <Descriptions
                                column={1}
                                bordered
                                size="middle"
                                labelStyle={{
                                    fontWeight: 600,
                                    width: "180px",
                                    backgroundColor: "#fafafa",
                                }}
                            >
                                {Object.entries(reviewLabels).map(([key, label]) => (
                                    <Descriptions.Item key={key} label={label}>
                                        {formatReviewValue(key, values?.[key])}
                                    </Descriptions.Item>
                                ))}
                            </Descriptions>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <Checkbox
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                            >
                                <span className="text-gray-600 text-sm">
                                    I agree to the{" "}
                                    <a
                                        className="text-[#012152] font-medium hover:underline"
                                        href="https://www.lex.uz/acts/4396419"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Terms and Conditions
                                    </a>{" "}
                                    and Privacy Policy
                                </span>
                            </Checkbox>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const stepHints = [
        "Tell us a bit about yourself.",
        "Share your academic background.",
        "How can we reach you?",
        "Review your details before submitting.",
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-16 pt-10 sm:pt-14">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-[#012152] px-6 sm:px-10 py-8 text-white">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                Apply to AIU
                            </h2>
                            <p className="text-white/80 text-sm sm:text-base max-w-2xl">
                                Complete the steps below. Our admissions team will
                                contact you shortly after submission.
                            </p>
                        </div>

                        <div className="px-4 sm:px-10 py-6 sm:py-8 border-b border-gray-100 bg-gray-50/50">
                            <Steps
                                current={currentStep}
                                responsive={false}
                                items={STEPS}
                                className="int-form-steps"
                            />
                        </div>

                        <div className="px-6 sm:px-10 py-8 sm:py-10">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-[#012152]">
                                    {STEPS[currentStep].title}
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    {stepHints[currentStep]}
                                </p>
                            </div>

                            <Form
                                layout="vertical"
                                form={form}
                                onFinish={handleFinish}
                                requiredMark="optional"
                                className="int-form"
                            >
                                {renderStepContent()}

                                <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-100">
                                    {currentStep > 0 && (
                                        <Button
                                            size="large"
                                            onClick={handleBack}
                                            className="sm:w-auto !h-12 !text-base"
                                        >
                                            Back
                                        </Button>
                                    )}

                                    <div className="flex-1" />

                                    {currentStep < STEPS.length - 1 ? (
                                        <Button
                                            type="primary"
                                            size="large"
                                            onClick={handleNext}
                                            className="sm:min-w-[160px] !h-12 !text-base !font-semibold !bg-[#012152] hover:!bg-[#013a7a] !border-none !text-white hover:!text-white rounded-lg"
                                        >
                                            Continue
                                        </Button>
                                    ) : (
                                        <Button
                                            type="primary"
                                            size="large"
                                            htmlType="submit"
                                            disabled={!acceptTerms}
                                            loading={loading}
                                            className="sm:min-w-[200px] !h-12 !text-base !font-semibold !bg-[#012152] hover:!bg-[#013a7a] !border-none !text-white hover:!text-white rounded-lg"
                                        >
                                            Submit Application
                                        </Button>
                                    )}
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .int-form-steps .ant-steps-item-process .ant-steps-item-icon {
                    background-color: #012152;
                    border-color: #012152;
                }
                .int-form-steps .ant-steps-item-finish .ant-steps-item-icon {
                    background-color: #012152;
                    border-color: #012152;
                }
                .int-form-steps .ant-steps-item-finish .ant-steps-item-icon .ant-steps-icon,
                .int-form-steps .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon {
                    color: #fff;
                }
                .int-form-steps .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {
                    background-color: #012152;
                }
                .int-form-steps .ant-steps-item-finish .ant-steps-item-title,
                .int-form-steps .ant-steps-item-process .ant-steps-item-title {
                    color: #012152 !important;
                    font-weight: 600;
                }
                @media (max-width: 640px) {
                    .int-form-steps .ant-steps-item-description {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default IntForm;
