import React, { useState, useEffect } from 'react';
import { getApplicants } from '../../services/manager/ManagerUsersService';
import {
    Table,
    Modal,
    Card,
    List,
    Typography,
    Divider,
    Skeleton,
    Button as AntButton,
    Space,
    message,
    Popconfirm,
    Descriptions,
    Tag,
    Avatar
} from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    GlobalOutlined,
    BookOutlined,
    WhatsAppOutlined,
    HomeOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import Button from '../../components/Button';

const { Text, Title } = Typography;

const ManagerApplicants = () => {
    const [applicants, setApplicants] = useState([]);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);

    const fetchApplicants = async () => {
        try {
            setLoading(true);
            const response = await getApplicants();
            setApplicants(response?.data?.data || []);
        } catch (error) {
            console.error("Error fetching applicants:", error);
            message.error("Failed to fetch applicants");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApplicants();
    }, []);

    const handleViewDetails = (applicant) => {
        setSelectedApplicant(applicant);
        setModalVisible(true);
    };

    const handleDelete = async (id) => {
        // try {
        //     await deleteApplicant(id);
        //     message.success('Applicant deleted successfully');
        //     fetchApplicants();
        // } catch (error) {
        //     console.error("Error deleting applicant:", error);
        //     message.error("Failed to delete applicant");
        // }
    };

    const formatPhoneNumber = (phone) => {
        if (!phone) return 'N/A';
        return phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            width: 80,
        },
        {
            title: 'Name',
            key: 'name',
            render: (record) => (
                <span className="font-medium">
                    {record.firstname} {record.surname}
                </span>
            ),
            sorter: (a, b) => `${a.firstname} ${a.surname}`.localeCompare(`${b.firstname} ${b.surname}`),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (email) => <a href={`mailto:${email}`}>{email}</a>,
        },
        {
            title: 'Study Status',
            dataIndex: 'study_status',
            key: 'study_status',
            render: (status) => (
                <Tag color={status === 'bachelor' ? 'blue' : 'purple'}>
                    {status.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            width: 150,
            render: (_, record) => (
                <Space size="small">
                    <AntButton
                        type="text"
                        icon={<EyeOutlined style={{ color: '#1890ff' }} />}
                        onClick={() => handleViewDetails(record)}
                        title="View Details"
                    />
                    <AntButton
                        type="text"
                        icon={<EditOutlined style={{ color: '#52c41a' }} />}
                        onClick={() => console.log('Edit', record.id)}
                        title="Edit"
                    />
                    <Popconfirm
                        title="Delete this applicant?"
                        description="Are you sure you want to delete this applicant?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Delete"
                        cancelText="Cancel"
                        okButtonProps={{ danger: true }}
                    >
                        <AntButton
                            type="text"
                            icon={<DeleteOutlined style={{ color: '#ff4d4f' }} />}
                            title="Delete"
                        />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const renderMobileItem = (applicant) => (
        <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <Avatar size={40} icon={<UserOutlined />} />
                    <div>
                        <Text strong className="text-lg">
                            {applicant.firstname} {applicant.surname}
                        </Text>
                        <div className="text-sm text-gray-500">{applicant.email}</div>
                    </div>
                </div>
                <Divider className="my-2" />

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <Text type="secondary">ID:</Text>
                        <Text className="block">{applicant.id}</Text>
                    </div>
                    <div>
                        <Text type="secondary">Status:</Text>
                        <div className="block">
                            <Tag color={applicant.study_status === 'bachelor' ? 'blue' : 'purple'}>
                                {applicant.study_status.toUpperCase()}
                            </Tag>
                        </div>
                    </div>
                    <div>
                        <Text type="secondary">Phone:</Text>
                        <Text className="block">{formatPhoneNumber(applicant.contact)}</Text>
                    </div>
                    <div>
                        <Text type="secondary">Nationality:</Text>
                        <Text className="block">{applicant.nationality}</Text>
                    </div>
                </div>

                <Space className="w-full" size="small">
                    <Button
                        size="sm"
                        variant="primary"
                        icon={<EyeOutlined />}
                        onClick={() => handleViewDetails(applicant)}
                        block
                    >
                        Details
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        icon={<EditOutlined />}
                        onClick={() => console.log('Edit', applicant.id)}
                        block
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Delete this applicant?"
                        description="This action cannot be undone"
                        onConfirm={() => handleDelete(applicant.id)}
                        okText="Delete"
                        cancelText="Cancel"
                    >
                        <Button
                            size="sm"
                            variant="danger"
                            icon={<DeleteOutlined />}
                            block
                        >
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            </div>
        </Card>
    );

    return (
        <div className="container mx-auto p-2 md:p-4">
            <div className="flex justify-between items-center mb-6">
                <Title level={3} className="!mb-0">Applicant Management</Title>
            </div>

            {loading ? (
                <Skeleton active paragraph={{ rows: 6 }} />
            ) : (
                <>
                    {/* Desktop Table */}
                    <div className="hidden md:block">
                        <Table
                            columns={columns}
                            dataSource={applicants}
                            rowKey="id"
                            pagination={false}
                            scroll={{ x: true }}
                        />
                    </div>

                    {/* Mobile List */}
                    <div className="md:hidden">
                        <List
                            dataSource={applicants}
                            renderItem={renderMobileItem}
                            locale={{ emptyText: 'No applicants found' }}
                        />
                    </div>
                </>
            )}

            {/* Applicant Details Modal */}
            <Modal
                title={
                    <div className="flex items-center gap-3">
                        <Avatar size={48} icon={<UserOutlined />} />
                        <div>
                            <Title level={4} className="!mb-0">
                                {selectedApplicant?.firstname} {selectedApplicant?.surname}
                            </Title>
                            <Text type="secondary">{selectedApplicant?.email}</Text>
                        </div>
                    </div>
                }
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
                width={800}
                centered
                className="applicant-detail-modal"
            >
                {selectedApplicant ? (
                    <div className="mt-6">
                        <Descriptions
                            column={2}
                            bordered
                            size="middle"
                            labelStyle={{
                                fontWeight: 600,
                                width: '160px',
                                backgroundColor: '#fafafa'
                            }}
                        >
                            <Descriptions.Item label={<span><UserOutlined /> Full Name</span>}>
                                {selectedApplicant.firstname} {selectedApplicant.surname}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><GlobalOutlined /> Nationality</span>}>
                                <Tag color="geekblue">{selectedApplicant.nationality}</Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><MailOutlined /> Email</span>}>
                                <a href={`mailto:${selectedApplicant.email}`}>{selectedApplicant.email}</a>
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><BookOutlined /> Study Status</span>}>
                                <Tag color={selectedApplicant.study_status === 'bachelor' ? 'blue' : 'purple'}>
                                    {selectedApplicant.study_status.toUpperCase()}
                                </Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><PhoneOutlined /> Primary Phone</span>}>
                                {formatPhoneNumber(selectedApplicant.contact)}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><PhoneOutlined /> Secondary Phone</span>}>
                                {formatPhoneNumber(selectedApplicant.extra_contact) || 'N/A'}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><WhatsAppOutlined /> WhatsApp</span>}>
                                {formatPhoneNumber(selectedApplicant.whatsapp) || 'N/A'}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><HomeOutlined /> Address</span>} span={2}>
                                {selectedApplicant.address}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><ClockCircleOutlined /> Created At</span>}>
                                {new Date(selectedApplicant.created_at).toLocaleString()}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><ClockCircleOutlined /> Updated At</span>}>
                                {new Date(selectedApplicant.updated_at).toLocaleString()}
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                ) : (
                    <Skeleton active paragraph={{ rows: 10 }} />
                )}
            </Modal>
        </div>
    );
};

export default ManagerApplicants;