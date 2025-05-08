import React, { useState } from 'react';
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
import { internationalRelationsContact } from "../services/contact/contactService.jsx";
import {message} from "antd";

function InternationalRelationsContact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handlePhoneChange = (phone) => {
        setFormData(prev => ({ ...prev, phone }));
        if (errors.phone) {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
            isValid = false;
        } else if (formData.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters";
            isValid = false;
        }

        // Phone validation
        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
            isValid = false;
        } else if (formData.phone.length < 5) {
            newErrors.phone = "Please enter a valid phone number";
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitSuccess(false);

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const contactData = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                message: formData.message || "No message provided"
            };

            const response = await internationalRelationsContact(contactData);

            if (response.success) {
                // Formani tozalash
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });
                setSubmitSuccess(true);
            } else {
                throw new Error(response.message || "Failed to submit form");
            }
        } catch (error) {
            console.error("Submission error:", error);
            message.error(error.message || "An error occurred while submitting the form");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-8">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-6"
                noValidate
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#01408e]">International Relations Contact Form</h2>

                {submitSuccess && (
                    <div className="p-4 bg-green-100 text-green-700 rounded-md">
                        Thank you for your submission! We will contact you soon.
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                                errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
                            }`}
                            required
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                        </label>
                        <PhoneInput
                            defaultCountry="uz"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            countrySelectorStyleProps={{
                                buttonStyle: {
                                    padding: '8px',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '6px 0 0 6px'
                                }
                            }}
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@example.com"
                        className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
                        }`}
                        required
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your questions or comments..."
                        rows={4}
                        className={`w-full border px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 ${
                            errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
                        }`}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-[80%] mx-auto block px-6 py-3 text-white rounded-lg shadow transition duration-300 ${
                            loading
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-[#012c6e] hover:bg-[#012152]'
                        }`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </div>
                        ) : (
                            'Submit Application'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InternationalRelationsContact;