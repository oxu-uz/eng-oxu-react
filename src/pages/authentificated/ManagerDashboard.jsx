import React, { useState, useEffect } from 'react';
import { getAllStudents, getRegisteredStudents, getAllDeletedStudents, getStudentInfos } from '../../services/manager/ManagerStudentsService';
import Button from '../../components/Button';
import {Modal, Card, List, Typography, Divider, Tabs, Skeleton, Layout, Grid} from 'antd';


const { Content } = Layout;
const { TabPane } = Tabs;
const { useBreakpoint } = Grid;
const { Text, Title } = Typography;

const ManagerDashboard = () => {
    const [activeTab, setActiveTab] = useState('all'); // 'all' | 'registered' | 'deleted'
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const screens = useBreakpoint();

    const fetchStudents = async () => {
        setLoading(true);
        try {
            let data = [];
            if (activeTab === 'all') {
                data = await getAllStudents();
            } else if (activeTab === 'registered') {
                data = await getRegisteredStudents();
            } else if (activeTab === 'deleted') {
                data = await getAllDeletedStudents();
            }
            setStudents(data);
        } catch (error) {
            console.error("Error fetching students:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, [activeTab]);

    const viewStudentDetails = async (studentId) => {
        try {
            const details = await getStudentInfos(studentId);
            setSelectedStudent(details);
            setModalVisible(true);
        } catch (error) {
            console.error("Error fetching student details:", error);
        }
    };

    // Mobile list item renderer - fixed version
    const renderMobileItem = (student) => (
        <List.Item className="!p-0 mb-3">
            <Card
                size="small"
                className="w-full shadow-sm hover:shadow-md transition-shadow"
                bodyStyle={{ padding: '12px' }}
            >
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <Text strong className="text-gray-600">ID:</Text>
                        <Text className="font-mono">{student.id}</Text>
                    </div>
                    <Divider className="my-2" />

                    <div className="flex justify-between items-center">
                        <Text strong className="text-gray-600">Name:</Text>
                        <Text>{student.full_name}</Text>
                    </div>
                    <Divider className="my-2" />

                    <div className="flex justify-between items-center">
                        <Text strong className="text-gray-600">Phone:</Text>
                        <Text className="break-all">{student.phone}</Text>
                    </div>

                    <div className="pt-2">
                        <Button
                            size="sm"
                            variant="primary"
                            onClick={() => viewStudentDetails(student.id)}
                            block
                        >
                            View Details
                        </Button>
                    </div>
                </div>
            </Card>
        </List.Item>
    );

    return (
                <div className="container mx-auto p-2 md:p-4 flex flex-col min-h-[calc(100vh-150px)]">
                    <div className="flex-grow">
                        <Title level={3} className="mb-4">Manager Students</Title>

                        {/* Tabs for desktop, buttons for mobile */}
                        <div className="hidden md:block mb-4">
                            <Tabs activeKey={activeTab} onChange={setActiveTab}>
                                <TabPane tab="All Students" key="all" />
                                <TabPane tab="Registered Students" key="registered" />
                                <TabPane tab="Deleted Students" key="deleted" />
                            </Tabs>
                        </div>

                        <div className="md:hidden mb-4 flex space-x-2 overflow-x-auto pb-2">
                            <Button
                                size="sm"
                                onClick={() => setActiveTab('all')}
                                variant={activeTab === 'all' ? 'primary' : 'secondary'}
                            >
                                All
                            </Button>
                            <Button
                                size="sm"
                                onClick={() => setActiveTab('registered')}
                                variant={activeTab === 'registered' ? 'primary' : 'secondary'}
                            >
                                Registered
                            </Button>
                            <Button
                                size="sm"
                                onClick={() => setActiveTab('deleted')}
                                variant={activeTab === 'deleted' ? 'primary' : 'secondary'}
                            >
                                Deleted
                            </Button>
                        </div>

                        {loading ? (
                            <Skeleton active paragraph={{ rows: 6 }} />
                        ) : (
                            <>
                                {/* Desktop Table (hidden on mobile) */}
                                <div className="hidden md:block">
                                    <table className="min-w-full bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                                        <thead className="bg-gray-100 dark:bg-gray-800">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">ID</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Phone</th>
                                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {students.map((student) => (
                                            <tr
                                                key={student.id}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                            >
                                                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{student.id}</td>
                                                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{student.full_name}</td>
                                                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{student.phone}</td>
                                                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <Button size="sm" variant="primary" onClick={() => viewStudentDetails(student.id)}>
                                                        View Details
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile List (visible only on mobile) */}
                                <div className="md:hidden mb-10">
                                    <List
                                        dataSource={students}
                                        renderItem={renderMobileItem}
                                        pagination={{
                                            pageSize: 5,
                                            size: 'small',
                                            showSizeChanger: false,
                                            position: 'bottom'
                                        }}
                                        locale={{ emptyText: 'No students found' }}
                                        className="pb-4"
                                    />
                                </div>
                            </>
                        )}

                        <Modal
                            title="Student Details"
                            visible={modalVisible}
                            onCancel={() => setModalVisible(false)}
                            footer={[
                                <Button key="close" onClick={() => setModalVisible(false)}>
                                    Close
                                </Button>
                            ]}
                            width="90%"
                            style={{ maxWidth: '600px' }}
                        >
                            {selectedStudent ? (
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <Text strong className="text-gray-600">ID:</Text>
                                            <Text className="block">{selectedStudent.id}</Text>
                                        </div>
                                        <div>
                                            <Text strong className="text-gray-600">Full Name:</Text>
                                            <Text className="block">{selectedStudent.full_name}</Text>
                                        </div>
                                        <div>
                                            <Text strong className="text-gray-600">Phone:</Text>
                                            <Text className="block">{selectedStudent.phone}</Text>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Skeleton active paragraph={{ rows: 4 }} />
                            )}
                        </Modal>
                    </div>

                    {/* Footer space - adjust height as needed */}
                    <div className="h-16"></div>
                </div>
    );
};

export default ManagerDashboard;