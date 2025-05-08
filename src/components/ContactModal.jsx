import React, {useState} from 'react';
import { Modal, Input, Form, Button, Row, Col } from 'antd';

const { TextArea } = Input;

function ContactModal({ isOpen, onClose, onSubmit }) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleFinish = async (values) => {
        setLoading(true);
        try {
            await onSubmit(values);
            form.resetFields();
            onClose();
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title={<h2 className="text-2xl title-text font-semibold text-center">Contact Us</h2>}
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            width="100%" // Ensures modal uses the full width available
            style={{
                maxWidth: '700px', // Max width for large screens
                width: '100%',
            }}
        >
            <Form
                layout="vertical"
                form={form}
                onFinish={handleFinish}
                className="space-y-4"
            >
                <Form.Item
                    label={<span className="font-medium text-gray-700">Full Name</span>}
                    name="name"
                    rules={[{ required: true, message: 'Please enter your full name' }]}
                >
                    <Input
                        placeholder="Your full name"
                        className="rounded-lg py-2 px-4 border border-gray-300 focus:border-blue-500"
                    />
                </Form.Item>

                {/*<Form.Item*/}
                {/*    label={<span className="font-medium text-gray-700">Phone number</span>}*/}
                {/*    name="phone"*/}
                {/*    rules={[*/}
                {/*        { required: true, message: 'Please enter your phone number' },*/}
                {/*        { type: 'phone', message: 'Please enter a valid phone number' },*/}
                {/*    ]}*/}
                {/*>*/}
                {/*    <Input*/}
                {/*        placeholder="+998 xx xxx xx xx"*/}
                {/*        className="rounded-lg py-2 px-4 border border-gray-300 focus:border-blue-500"*/}
                {/*    />*/}
                {/*</Form.Item>*/}

                <Form.Item
                    label={<span className="font-medium text-gray-700">Email</span>}
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' },
                    ]}
                >
                    <Input
                        placeholder="example@domain.com"
                        className="rounded-lg py-2 px-4 border border-gray-300 focus:border-blue-500"
                    />
                </Form.Item>

                <Form.Item
                    label={<span className="font-medium text-gray-700">Message</span>}
                    name="message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                >
                    <TextArea
                        rows={5}
                        placeholder="Write your message here..."
                        className="rounded-lg px-4 py-2 border border-gray-300 focus:border-blue-500"
                    />
                </Form.Item>

                <Form.Item className="flex justify-center mt-6">
                    <button
                        type="primary"
                        className="w-full mx-auto block px-6 py-2 text-white bg-[#012c6e] hover:bg-[#012152] rounded-lg shadow transition duration-300"
                    >
                        Send Message
                    </button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ContactModal;