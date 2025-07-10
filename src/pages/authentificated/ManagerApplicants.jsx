import React, {useState, useEffect} from 'react';
import {
    getApplicants,
} from '../../services/manager/managerApplicantService.jsx';
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
    Avatar,
    Form,
    Input,
    Select,
    DatePicker,
    Row,
    Col
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
    ClockCircleOutlined,
    PlusOutlined,
    FilePdfOutlined
} from '@ant-design/icons';
import Button from '../../components/Button';
import {applicationForm, generateLetter} from "../../services/contact/contactService.jsx";

const {Text, Title} = Typography;
const {Option} = Select;
const {TextArea} = Input;

const ManagerApplicants = () => {
    const [applicants, setApplicants] = useState([]);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [createModalVisible, setCreateModalVisible] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);
    const [letterModalVisible, setLetterModalVisible] = useState(false);
    const [applicantForm] = Form.useForm();
    const [letterForm] = Form.useForm();
    const [selectedSemester, setSelectedSemester] = useState(null);

    const fetchApplicants = async () => {
        try {
            setLoading(true);
            const response = await getApplicants();
            setApplicants(response?.data || []);
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

    const handleGenerateLetter = (applicant) => {
        setSelectedApplicant(applicant);
        letterForm.resetFields();
        setLetterModalVisible(true);
    };

    const handleCreateApplicant = async (values) => {
        try {
            setModalLoading(true);
            const formattedValues = {
                ...values,
                b_date: values?.b_date.format('YYYY-MM-DD'),
                contact: values?.contact.replace(/\D/g, ''),
                extra_contact: values?.extra_contact ? values?.extra_contact.replace(/\D/g, '') : null,
                whatsapp: values?.whatsapp ? values?.whatsapp.replace(/\D/g, '') : null
            };

            await applicationForm(formattedValues);
            message.success('Applicant created successfully');
            applicantForm.resetFields();
            setCreateModalVisible(false);
            fetchApplicants();
        } catch (error) {
            console.error("Error creating applicant:", error);
            message.error("Failed to create applicant");
        } finally {
            setModalLoading(false);
        }
    };

    const handleGenerateLetterSubmit = async (values) => {
        try {
            setModalLoading(true);
            delete values?.kurs;
            const formattedValues = {
                ...values,
                // letter_date: values?.letter_date.format('YYYY-MM-DD'),
                applicant_id: selectedApplicant.id
            };

            await generateLetter(formattedValues);
            message.success('Letter generated successfully');
            letterForm.resetFields();
            setLetterModalVisible(false);
        } catch (error) {
            console.error("Error generating letter:", error);
            message.error("Failed to generate letter");
        } finally {
            fetchApplicants();
            setModalLoading(false);
        }
    };

    const handleSemesterChange = (value) => {
        setSelectedSemester(value);
        // Automatically determine course based on semester
        const course = Math.ceil(value / 2);
        letterForm.setFieldsValue({kurs: course});
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
                {record?.firstname} {record?.surname}
            </span>
            ),
            sorter: (a, b) => `${a?.firstname} ${a?.surname}`.localeCompare(`${b?.firstname} ${b?.surname}`),
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
            title: 'Admission Documents',
            key: 'letters',
            width: 280,
            render: (_, record) => (
                <div className="max-h-48 overflow-y-auto pr-2">
                    {record?.letter?.length > 0 ? (
                        <div className="space-y-2">
                            {record.letter?.map((letter) => (
                                <div
                                    key={letter?.id}
                                    className="border border-gray-100 rounded-lg p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center mb-1">
                                            <span className="font-medium text-gray-800 mr-2">
                                                {letter?.course}
                                            </span>
                                                <Tag color="blue" className="text-xs">
                                                    Sem {letter?.semestr}
                                                </Tag>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Tag
                                                    color={
                                                        letter?.type === 'letter' ? 'green' :
                                                            letter?.type === 'decree' ? 'orange' :
                                                                'cyan'
                                                    }
                                                    className="mr-2 text-xs"
                                                >
                                                    {letter?.type}
                                                </Tag>
                                                <span className="text-gray-500 text-xs">
                                                {new Date(letter?.created_at).toLocaleDateString()}
                                            </span>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            {letter?.url ? (
                                                <AntButton
                                                    type="link"
                                                    href={letter?.url}
                                                    target="_blank"
                                                    icon={<FilePdfOutlined/>}
                                                    className="text-blue-600 hover:text-blue-800 px-0"
                                                    download
                                                >
                                                    PDF
                                                </AntButton>
                                            ) : (
                                                <span className="inline-flex items-center text-gray-400 text-sm">
                                                <ClockCircleOutlined className="mr-1"/>
                                                Generating
                                            </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-4 border border-dashed border-gray-200 rounded-lg bg-gray-50">
                            <FilePdfOutlined className="text-gray-300 text-2xl mb-2"/>
                            <p className="text-gray-500 text-sm mb-2">No documents generated</p>
                            <AntButton
                                type="dashed"
                                onClick={() => handleGenerateLetter(record)}
                                icon={<PlusOutlined/>}
                                className="text-center"
                            >
                                Create Document
                            </AntButton>
                        </div>
                    )}
                </div>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            width: 200,
            render: (_, record) => (
                <Space size="small">
                    <AntButton
                        type="text"
                        icon={<EyeOutlined style={{color: '#1890ff'}}/>}
                        onClick={() => handleViewDetails(record)}
                        title="View Details"
                    />
                    <AntButton
                        type="text"
                        icon={<FilePdfOutlined style={{color: '#ff4d4f'}}/>}
                        onClick={() => handleGenerateLetter(record)}
                        title="Generate Letter"
                    />
                    <AntButton
                        type="text"
                        icon={<EditOutlined style={{color: '#52c41a'}}/>}
                        onClick={() => console.log('Edit', record?.id)}
                        title="Edit"
                    />
                    <Popconfirm
                        title="Delete this applicant?"
                        description="Are you sure you want to delete this applicant?"
                        onConfirm={() => handleDelete(record?.id)}
                        okText="Delete"
                        cancelText="Cancel"
                        okButtonProps={{danger: true}}
                    >
                        <AntButton
                            type="text"
                            icon={<DeleteOutlined style={{color: '#ff4d4f'}}/>}
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
                    <Avatar size={40} icon={<UserOutlined/>}/>
                    <div>
                        <Text strong className="text-lg">
                            {applicant.firstname} {applicant.surname}
                        </Text>
                        <div className="text-sm text-gray-500">{applicant.email}</div>
                    </div>
                </div>
                <Divider className="my-2"/>

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
                        icon={<EyeOutlined/>}
                        onClick={() => handleViewDetails(applicant)}
                        block
                    >
                        Details
                    </Button>
                    <Button
                        size="sm"
                        variant="danger"
                        icon={<FilePdfOutlined/>}
                        onClick={() => handleGenerateLetter(applicant)}
                        block
                    >
                        Generate Letter
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        icon={<EditOutlined/>}
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
                            icon={<DeleteOutlined/>}
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
                <AntButton
                    type="primary"
                    icon={<PlusOutlined/>}
                    onClick={() => {
                        applicantForm.resetFields();
                        setCreateModalVisible(true);
                    }}
                >
                    Create Applicant
                </AntButton>
            </div>

            {loading ? (
                <Skeleton active paragraph={{rows: 6}}/>
            ) : (
                <>
                    {/* Desktop Table */}
                    <div className="hidden md:block">
                        <Table
                            columns={columns}
                            dataSource={applicants}
                            rowKey="id"
                            pagination={false}
                            scroll={{x: true}}
                        />
                    </div>

                    {/* Mobile List */}
                    <div className="md:hidden">
                        <List
                            dataSource={applicants}
                            renderItem={renderMobileItem}
                            locale={{emptyText: 'No applicants found'}}
                        />
                    </div>
                </>
            )}

            {/* Applicant Details Modal */}
            <Modal
                title={
                    <div className="flex items-center gap-3">
                        <Avatar size={48} icon={<UserOutlined/>}/>
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
                width={850}
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
                            <Descriptions.Item label={<span><UserOutlined/> Full Name</span>}>
                                {selectedApplicant.firstname} {selectedApplicant.surname}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><GlobalOutlined/> Nationality</span>}>
                                <Tag color="geekblue">{selectedApplicant.nationality}</Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><MailOutlined/> Email</span>}>
                                <a href={`mailto:${selectedApplicant.email}`}>{selectedApplicant.email}</a>
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><BookOutlined/> Study Status</span>}>
                                <Tag color={selectedApplicant.study_status === 'bachelor' ? 'blue' : 'purple'}>
                                    {selectedApplicant.study_status.toUpperCase()}
                                </Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><PhoneOutlined/> Primary Phone</span>}>
                                {formatPhoneNumber(selectedApplicant.contact)}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><PhoneOutlined/> Secondary Phone</span>}>
                                {formatPhoneNumber(selectedApplicant.extra_contact) || 'N/A'}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><WhatsAppOutlined/> WhatsApp</span>}>
                                {formatPhoneNumber(selectedApplicant.whatsapp) || 'N/A'}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><HomeOutlined/> Address</span>} span={2}>
                                {selectedApplicant.address}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><ClockCircleOutlined/> Created At</span>}>
                                {new Date(selectedApplicant.created_at).toLocaleString()}
                            </Descriptions.Item>
                            <Descriptions.Item label={<span><ClockCircleOutlined/> Updated At</span>}>
                                {new Date(selectedApplicant.updated_at).toLocaleString()}
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                ) : (
                    <Skeleton active paragraph={{rows: 10}}/>
                )}
            </Modal>

            {/* Create Applicant Modal */}
            <Modal
                title="Create New Applicant"
                open={createModalVisible}
                onCancel={() => setCreateModalVisible(false)}
                footer={null}
                width={700}
                centered
                destroyOnClose
            >
                <Form
                    form={applicantForm}
                    layout="vertical"
                    onFinish={handleCreateApplicant}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="firstname"
                                label="First Name"
                                rules={[{required: true, message: 'Please enter first name'}]}
                            >
                                <Input placeholder="First name"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="surname"
                                label="Last Name"
                                rules={[{required: true, message: 'Please enter last name'}]}
                            >
                                <Input placeholder="Last name"/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[{required: true, message: 'Please select gender'}]}
                            >
                                <Select placeholder="Select gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="b_date"
                                label="Birth Date"
                                rules={[{required: true, message: 'Please select birth date'}]}
                            >
                                <DatePicker style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="nationality"
                                label="Nationality"
                                rules={[{required: true, message: 'Please enter nationality'}]}
                            >
                                <Input placeholder="Nationality"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="study_status"
                                label="Study Status"
                                rules={[{required: true, message: 'Please select study status'}]}
                            >
                                <Input placeholder="Study Status"/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {required: true, message: 'Please enter email'},
                                    {type: 'email', message: 'Please enter a valid email'}
                                ]}
                            >
                                <Input placeholder="Email"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="contact"
                                label="Primary Phone"
                                rules={[{required: true, message: 'Please enter phone number'}]}
                            >
                                <Input placeholder="Phone number"/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="extra_contact"
                                label="Secondary Phone (Optional)"
                            >
                                <Input placeholder="Secondary phone number"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="whatsapp"
                                label="WhatsApp (Optional)"
                            >
                                <Input placeholder="WhatsApp number"/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[{required: true, message: 'Please enter address'}]}
                    >
                        <TextArea rows={2} placeholder="Full address"/>
                    </Form.Item>

                    <Form.Item>
                        <div className="flex justify-end gap-3">
                            <AntButton onClick={() => setCreateModalVisible(false)}>
                                Cancel
                            </AntButton>
                            <AntButton
                                type="primary"
                                htmlType="submit"
                                loading={modalLoading}
                            >
                                Create Applicant
                            </AntButton>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>

            {/* Generate Letter Modal */}
            <Modal
                title={`Generate Letter for ${selectedApplicant?.firstname} ${selectedApplicant?.surname}`}
                open={letterModalVisible}
                onCancel={() => setLetterModalVisible(false)}
                footer={null}
                width={700}
                centered
                destroyOnClose
            >
                <Form
                    form={letterForm}
                    layout="vertical"
                    onFinish={handleGenerateLetterSubmit}
                    initialValues={{
                        type: 'letter',
                        kurs: selectedSemester ? Math.ceil(selectedSemester / 2) : 1
                    }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="course"
                                label="Course"
                                rules={[{required: true, message: 'Please select course'}]}
                            >
                                <Select placeholder="Select course">
                                    <Option value="MBBS">MBBS</Option>
                                    <Option value="BSBA">BSBA</Option>
                                    <Option value="BSIT">BSIT</Option>
                                    <Option value="MBA">MBA</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="year"
                                label="Academic Year"
                                rules={[{required: true, message: 'Please enter academic year'}]}
                            >
                                <Input placeholder="e.g. 2025"/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="semestr"
                                label="Semester"
                                rules={[{required: true, message: 'Please select semester'}]}
                            >
                                <Select
                                    placeholder="Select semester"
                                    onChange={handleSemesterChange}
                                >
                                    <Option value={1}>1st Semester</Option>
                                    <Option value={2}>2nd Semester</Option>
                                    <Option value={3}>3rd Semester</Option>
                                    <Option value={4}>4th Semester</Option>
                                    <Option value={5}>5th Semester</Option>
                                    <Option value={6}>6th Semester</Option>
                                    <Option value={7}>7th Semester</Option>
                                    <Option value={8}>8th Semester</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="kurs"
                                label="Course Year"
                            >
                                <Input disabled/>
                            </Form.Item>
                        </Col>
                    </Row>

                    {/*<Row gutter={16}>*/}
                    {/*    <Col span={12}>*/}
                    {/*        <Form.Item*/}
                    {/*            name="letter_num"*/}
                    {/*            label="Letter Number"*/}
                    {/*            rules={[{required: true, message: 'Please enter letter number'}]}*/}
                    {/*        >*/}
                    {/*            <Input placeholder="Letter number"/>*/}
                    {/*        </Form.Item>*/}
                    {/*    </Col>*/}
                    {/*    <Col span={12}>*/}
                    {/*        <Form.Item*/}
                    {/*            name="letter_date"*/}
                    {/*            label="Letter Date"*/}
                    {/*            rules={[{required: true, message: 'Please select letter date'}]}*/}
                    {/*        >*/}
                    {/*            <DatePicker style={{width: '100%'}}/>*/}
                    {/*        </Form.Item>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}

                    <Form.Item
                        name="type"
                        label="Document Type"
                        rules={[{required: true, message: 'Please select document type'}]}
                    >
                        <Select placeholder="Select document type">
                            <Option value="letter">Letter</Option>
                            <Option value="decree">Decree</Option>
                            <Option value="notification">Notification</Option>
                            <Option value="document">Document</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <div className="flex justify-end gap-3">
                            <AntButton onClick={() => setLetterModalVisible(false)}>
                                Cancel
                            </AntButton>
                            <AntButton
                                type="primary"
                                htmlType="submit"
                                loading={modalLoading}
                            >
                                Generate Letter
                            </AntButton>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ManagerApplicants;