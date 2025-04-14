import React, { useState, useEffect } from 'react';
import { addStudent, getUserAddedStudents } from '../../services/AgentsService';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Card, List, Typography, Divider, Skeleton, message } from 'antd';

const { Title, Text } = Typography;

const AgentDashboard = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        password: '',
    });
    const [creating, setCreating] = useState(false);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const data = await getUserAddedStudents();
            setStudents(data);
        } catch (err) {
            setError('Error loading students');
            message.error('Failed to load students');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddStudent = async (e) => {
        e.preventDefault();
        try {
            setCreating(true);
            await addStudent({
                full_name: formData.full_name,
                phone: Number(formData.phone),
                password: formData.password,
            });
            message.success('Student added successfully');
            setFormData({ full_name: '', phone: '', password: '' });
            fetchStudents();
        } catch (err) {
            setError('Error adding student');
            message.error('Failed to add student');
        } finally {
            setCreating(false);
        }
    };

    // Mobile list item renderer
    const renderMobileItem = (student) => (
        <Card
            size="small"
            className="mb-3 shadow-sm hover:shadow-md transition-shadow"
            bodyStyle={{ padding: '12px' }}
        >
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <Text strong className="text-gray-600">ID:</Text>
                    <Text className="font-mono">{student.id}</Text>
                </div>
                <Divider className="my-2" />

                <div className="flex justify-between items-center">
                    <Text strong className="text-gray-600">Full Name:</Text>
                    <Text>{student.full_name}</Text>
                </div>
                <Divider className="my-2" />

                <div className="flex justify-between items-center">
                    <Text strong className="text-gray-600">Phone:</Text>
                    <Text>{student.phone}</Text>
                </div>
            </div>
        </Card>
    );

    return (
        <div className="container mx-auto p-2 md:p-4">
            <Title level={3} className="mb-4">Agents Management</Title>

            {error && <Text type="danger">{error}</Text>}

            {/* Add Student Form */}
            <Card
                title="Add New Student"
                className="mb-6"
                headStyle={{ fontSize: '1rem', fontWeight: '600', padding: '12px' }}
                bodyStyle={{ padding: '12px' }}
            >
                <form onSubmit={handleAddStudent} className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                        <Input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChange}
                            placeholder="Full name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                        <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone number"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                        <Input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="pt-2">
                        <Button
                            type="primary"
                            htmlType="submit"
                            variant="primary"
                            size="rg"
                            loading={creating}
                            className="bg-[#0a37b3] hover:bg-[#01408e]"
                        >
                            {creating ? 'Adding...' : 'Add Student'}
                        </Button>
                    </div>
                </form>
            </Card>

            {/* Students List */}
            <Card
                title="Your Students"
                className="overflow-hidden"
                bodyStyle={{ padding: '12px' }}
            >
                {loading ? (
                    <Skeleton active paragraph={{ rows: 5 }} />
                ) : (
                    <>
                        {/* Desktop Table (hidden on mobile) */}
                        <div className="hidden md:block">
                            <table className="min-w-full">
                                <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Full Name</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Phone</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {students.map((student) => (
                                    <tr key={student.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 text-sm text-gray-700">{student.id}</td>
                                        <td className="px-4 py-2 text-sm text-gray-700">{student.full_name}</td>
                                        <td className="px-4 py-2 text-sm text-gray-700">{student.phone}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile List (visible only on mobile) */}
                        <div className="md:hidden">
                            <List
                                dataSource={students}
                                renderItem={renderMobileItem}
                                pagination={{
                                    pageSize: 5,
                                    size: 'small',
                                    showSizeChanger: false,
                                }}
                                locale={{ emptyText: 'No students found' }}
                            />
                        </div>
                    </>
                )}
            </Card>
        </div>
    );
};

export default AgentDashboard;