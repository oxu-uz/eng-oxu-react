import React, {useState} from 'react';
import {Form, Input, Button, Checkbox, message, Select, DatePicker} from 'antd';
import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
import {RiWhatsappFill} from 'react-icons/ri';
import {isValidPhoneNumber} from "libphonenumber-js";
import {applicationForm} from "../services/contact/contactService.jsx";

const IntForm = () => {
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleFinish = async (values) => {
        setLoading(true);
        try {
            // Prepare the data with phone number formatting
            const formData = {
                ...values,
                contact: values.contact ? values.contact.replace(/\D/g, '') : null,
                extra_contact: values.extra_contact ? values.extra_contact.replace(/\D/g, '') : null,
                whatsapp: values.whatsapp ? values.whatsapp.replace(/\D/g, '') : null
            };

            // Call the API service
            const response = await applicationForm(formData);

            // Check if the request was successful
            if (response && response.success) {
                message.success('Application submitted successfully!');
                form.resetFields(); // Reset the form after successful submission
                setAcceptTerms(false); // Reset the terms checkbox
            } else {
                message.error(response.message || 'Failed to submit application. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            // Handle different types of errors appropriately
            if (error.response) {
                // Server responded with a status code outside 2xx range
                message.error(error.response.data.message || 'Server error occurred');
            } else if (error.request) {
                // Request was made but no response received
                message.error('Network error. Please check your connection.');
            } else {
                // Something happened in setting up the request
                message.error('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const validatePhoneNumber = (_, value) => {
        if (!value) {
            return Promise.reject(new Error('Phone number is required'));
        }
        if (isValidPhoneNumber(value)) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Invalid phone number'));
    };

    return (
        <div className='h-full bg-gray-50 pb-10'>
            <div className='mx-auto max-w-7xl'>
                <div className='flex flex-col lg:flex-row justify-center px-6 py-12 gap-8'>
                    <div
                        className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                        <video
                            id='video'
                            className='w-full h-auto rounded-lg'
                            src='/videos/uni.mp4'
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>

                    <div className='w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg'>
                        <h3 className='text-2xl text-gray-800 font-bold mb-6'>
                            Application Form
                        </h3>

                        <Form
                            layout="vertical"
                            form={form}
                            onFinish={handleFinish}
                            className='w-full'
                        >
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <Form.Item
                                    label="First Name"
                                    name='firstname'
                                    rules={[{required: true, message: 'Please input your first name'}]}
                                >
                                    <Input size="large" placeholder="First Name"/>
                                </Form.Item>

                                <Form.Item
                                    label="Last Name"
                                    name='surname'
                                    rules={[{required: true, message: 'Please input your last name'}]}
                                >
                                    <Input size="large" placeholder="Last Name"/>
                                </Form.Item>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <Form.Item
                                    name="gender"
                                    label="Gender"
                                    rules={[{required: true, message: 'Please select gender'}]}
                                >
                                    <Select size={'large'} allowClear placeholder="Select gender">
                                        <Option value="M">Male</Option>
                                        <Option value="F">Female</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name="b_date"
                                    label="Birth Date"
                                    rules={[{required: true, message: 'Please select birth date'}]}
                                >
                                    <DatePicker size={'large'} style={{width: '100%'}}/>
                                </Form.Item>
                            </div>

                            <Form.Item
                                label="Nationality"
                                name='nationality'
                                rules={[{required: true, message: 'Please input your nationality'}]}
                            >
                                <Input size="large" placeholder="Nationality"/>
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name='email'
                                rules={[
                                    {required: true, message: 'Please input your email'},
                                    {type: 'email', message: 'Please enter a valid email'}
                                ]}
                            >
                                <Input size="large" placeholder="Email"/>
                            </Form.Item>

                            <Form.Item
                                label="Current Study Status"
                                name='study_status'
                                rules={[{required: true, message: 'Please input your study status'}]}
                            >
                                <Input size="large" placeholder="Study Status"/>
                            </Form.Item>

                            <Form.Item
                                label="Phone Number"
                                name="contact"
                                rules={[
                                    {required: true, message: 'Please input your phone number'},
                                    {validator: validatePhoneNumber}
                                ]}
                                validateTrigger={['onBlur']}
                            >
                                <PhoneInput
                                    defaultCountry="us"
                                    className="ant-input ant-input-lg"
                                    inputStyle={{width: '100%'}}
                                    countrySelectorStyleProps={{
                                        buttonStyle: {
                                            padding: '8px',
                                            border: '1px solid #d1d5db',
                                            borderRadius: '6px 0 0 6px'
                                        }
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Alternative Phone Number"
                                name='extra_contact'
                            >
                                <PhoneInput
                                    defaultCountry="us"
                                    className="ant-input ant-input-lg"
                                    inputStyle={{width: '100%'}}
                                    countrySelectorStyleProps={{
                                        buttonStyle: {
                                            padding: '8px',
                                            border: '1px solid #d1d5db',
                                            borderRadius: '6px 0 0 6px'
                                        }
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label="WhatsApp Number"
                                name='whatsapp'
                            >
                                <div className="flex gap-2 items-center">
                                    <Input
                                        prefix={<RiWhatsappFill color="#25D366" size={20}/>}
                                        size="large"
                                        placeholder="WhatsApp Number"
                                    />
                                </div>
                            </Form.Item>

                            <Form.Item
                                label="Address"
                                name='address'
                                rules={[{required: true, message: 'Please input your address'}]}
                            >
                                <Input.TextArea rows={3} placeholder="Full Address"/>
                            </Form.Item>

                            <Form.Item>
                                <Checkbox
                                    checked={acceptTerms}
                                    onChange={(e) => setAcceptTerms(e.target.checked)}
                                >
                                    I agree to the <a className="text-blue-600" href="https://www.lex.uz/acts/4396419"
                                                      target="_blank" rel="noopener noreferrer">Terms and
                                    Conditions</a> and Privacy Policy
                                </Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    block
                                    size="large"
                                    type='primary'
                                    htmlType='submit'
                                    disabled={!acceptTerms}
                                    loading={loading}
                                >
                                    Submit Application
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntForm;