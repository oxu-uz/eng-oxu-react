import React, { useState, useEffect } from "react";
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
    Descriptions,
    Tag,
    Form,
    Input,
    DatePicker,
    Row,
    Col,
    Tooltip,
} from "antd";
import {
    EyeOutlined,
    GlobalOutlined,
    MailOutlined,
    PhoneOutlined,
    HomeOutlined,
    ClockCircleOutlined,
    PlusOutlined,
    FilePdfOutlined,
    BankOutlined,
    UserOutlined,
} from "@ant-design/icons";
import Button from "../../components/Button";
import {
    getMous,
    getMouById,
    generateMou,
    downloadMou,
} from "../../services/manager/managerMouService.jsx";

const { Text, Title } = Typography;
const { TextArea } = Input;

const ManagerMouPage = () => {
    const [mous, setMous] = useState([]);
    const [selectedMou, setSelectedMou] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [createModalVisible, setCreateModalVisible] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);
    const [downloadingId, setDownloadingId] = useState(null);
    const [mouForm] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 30,
        total: 0,
    });

    const fetchMous = async (page = 1, pageSize = 30) => {
        try {
            setLoading(true);
            const response = await getMous(page, pageSize);
            const paginator = response?.data;
            const items = Array.isArray(paginator?.data)
                ? paginator.data
                : Array.isArray(response?.data)
                  ? response.data
                  : [];

            setMous(items);
            setPagination((prev) => ({
                ...prev,
                current: paginator?.current_page || page,
                total: paginator?.total ?? items.length,
            }));
        } catch (error) {
            console.error("Error fetching MoU list:", error);
            messageApi.error("Failed to fetch MoU agreements");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMous(pagination.current);
    }, []);

    const handleTableChange = ({ current, pageSize }) => {
        setPagination((prev) => ({ ...prev, current, pageSize }));
        fetchMous(current, pageSize);
    };

    const handleViewDetails = async (mou) => {
        try {
            setModalVisible(true);
            setSelectedMou(null);
            const response = await getMouById(mou.id);
            setSelectedMou(response?.data || response);
        } catch (error) {
            console.error("Error fetching MoU details:", error);
            messageApi.error("Failed to load MoU details");
            setModalVisible(false);
        }
    };

    const handleDownload = async (record) => {
        try {
            setDownloadingId(record.id);

            if (record?.url) {
                const link = document.createElement("a");
                link.href = record.url;
                link.target = "_blank";
                link.download = `MoU_${record.company_name || record.id}.pdf`;
                document.body.appendChild(link);
                link.click();
                link.remove();
                return;
            }

            const response = await downloadMou(record.id);
            const blob = new Blob([response.data], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `MoU_${record.company_name || record.id}.pdf`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading MoU:", error);
            messageApi.error("Failed to download MoU");
        } finally {
            setDownloadingId(null);
        }
    };

    const handleCreateMou = async (values) => {
        try {
            setModalLoading(true);
            const formattedValues = {
                ...values,
                state: values.state || "",
                website: values.website || "",
                agreement_date: values.agreement_date.format("DD-MM-YYYY"),
            };

            await generateMou(formattedValues);
            messageApi.success("MoU agreement created successfully");
            mouForm.resetFields();
            setCreateModalVisible(false);
            fetchMous(pagination.current, pagination.pageSize);
        } catch (error) {
            console.error("Error creating MoU:", error);
            messageApi.error("Failed to create MoU agreement");
        } finally {
            setModalLoading(false);
        }
    };

    const renderDownloadButton = (record, block = false) => {
        const isDownloading = downloadingId === record.id;

        if (record?.url === null && record?.status === "generating") {
            return (
                <span className="inline-flex items-center text-gray-400 text-sm">
                    <ClockCircleOutlined className="mr-1" />
                    Generating
                </span>
            );
        }

        const button = (
            <AntButton
                type="link"
                icon={<FilePdfOutlined />}
                className="text-blue-600 hover:text-blue-800 px-0"
                loading={isDownloading}
                onClick={() => handleDownload(record)}
            >
                PDF
            </AntButton>
        );

        if (block) {
            return (
                <Button
                    size="sm"
                    variant="primary"
                    icon={<FilePdfOutlined />}
                    onClick={() => handleDownload(record)}
                    block
                    disabled={isDownloading}
                >
                    Download PDF
                </Button>
            );
        }

        return button;
    };

    const columns = [
        {
            title: "№",
            key: "index",
            width: 60,
            align: "center",
            render: (_, __, index) =>
                (pagination.current - 1) * pagination.pageSize + index + 1,
        },
        {
            title: "Company",
            dataIndex: "company_name",
            key: "company_name",
            render: (name) => <span className="font-medium">{name}</span>,
            sorter: (a, b) =>
                (a.company_name || "").localeCompare(b.company_name || ""),
        },
        {
            title: "Representative",
            dataIndex: "representative_name",
            key: "representative_name",
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
            render: (country) => <Tag color="geekblue">{country}</Tag>,
        },
        {
            title: "City",
            dataIndex: "city",
            key: "city",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            render: (email) => <a href={`mailto:${email}`}>{email}</a>,
        },
        {
            title: "Agreement Date",
            dataIndex: "agreement_date",
            key: "agreement_date",
        },
        {
            title: "Document",
            key: "document",
            width: 120,
            render: (_, record) => (
                <div className="border border-gray-100 rounded-lg p-3 bg-gray-50">
                    {renderDownloadButton(record)}
                </div>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            width: 100,
            fixed: "right",
            render: (_, record) => (
                <Space>
                    <Tooltip title="View details">
                        <AntButton
                            shape="circle"
                            icon={<EyeOutlined />}
                            onClick={() => handleViewDetails(record)}
                            className="text-blue-500 hover:bg-blue-50"
                        />
                    </Tooltip>
                    <Tooltip title="Download PDF">
                        <AntButton
                            shape="circle"
                            icon={<FilePdfOutlined />}
                            onClick={() => handleDownload(record)}
                            loading={downloadingId === record.id}
                            className="text-green-500 hover:bg-green-50"
                        />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const renderMobileItem = (mou) => (
        <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-3">
                <div>
                    <Text strong className="text-lg block">
                        {mou.company_name}
                    </Text>
                    <Text type="secondary">{mou.representative_name}</Text>
                </div>
                <Divider className="my-2" />

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <Text type="secondary">Country:</Text>
                        <Text className="block">{mou.country}</Text>
                    </div>
                    <div>
                        <Text type="secondary">City:</Text>
                        <Text className="block">{mou.city}</Text>
                    </div>
                    <div>
                        <Text type="secondary">Email:</Text>
                        <Text className="block">{mou.email}</Text>
                    </div>
                    <div>
                        <Text type="secondary">Agreement Date:</Text>
                        <Text className="block">{mou.agreement_date}</Text>
                    </div>
                </div>

                <Space className="w-full" size="small" direction="vertical">
                    <Button
                        size="sm"
                        variant="primary"
                        icon={<EyeOutlined />}
                        onClick={() => handleViewDetails(mou)}
                        block
                    >
                        Details
                    </Button>
                    {renderDownloadButton(mou, true)}
                </Space>
            </div>
        </Card>
    );

    return (
        <div className="container mx-auto p-2 md:p-4">
            {contextHolder}
            <div className="flex justify-between items-center mb-6">
                <Title level={3} className="!mb-0">
                    MoU Management
                </Title>
                <AntButton
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => {
                        mouForm.resetFields();
                        setCreateModalVisible(true);
                    }}
                >
                    Create MoU
                </AntButton>
            </div>

            {loading ? (
                <Skeleton active paragraph={{ rows: 6 }} />
            ) : (
                <>
                    <div className="hidden md:block">
                        <Table
                            columns={columns}
                            dataSource={mous}
                            rowKey="id"
                            scroll={{ x: true }}
                            pagination={{
                                showSizeChanger: false,
                                current: pagination.current,
                                pageSize: pagination.pageSize,
                                total: pagination.total,
                                onChange: (page, pageSize) =>
                                    handleTableChange({ current: page, pageSize }),
                            }}
                        />
                    </div>

                    <div className="md:hidden">
                        <List
                            dataSource={mous}
                            renderItem={renderMobileItem}
                            locale={{ emptyText: "No MoU agreements found" }}
                        />
                    </div>
                </>
            )}

            <Modal
                title={
                    <div className="flex items-center gap-3">
                        <BankOutlined className="text-xl text-blue-600" />
                        <div>
                            <Title level={4} className="!mb-0">
                                {selectedMou?.company_name}
                            </Title>
                            <Text type="secondary">
                                {selectedMou?.representative_name}
                            </Text>
                        </div>
                    </div>
                }
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
                width={850}
                centered
            >
                {selectedMou ? (
                    <div className="mt-6">
                        <Descriptions
                            column={2}
                            bordered
                            size="middle"
                            labelStyle={{
                                fontWeight: 600,
                                width: "180px",
                                backgroundColor: "#fafafa",
                            }}
                        >
                            <Descriptions.Item
                                label={
                                    <span>
                                        <BankOutlined /> Company
                                    </span>
                                }
                            >
                                {selectedMou.company_name}
                            </Descriptions.Item>
                            <Descriptions.Item
                                label={
                                    <span>
                                        <UserOutlined /> Representative
                                    </span>
                                }
                            >
                                {selectedMou.representative_name}
                            </Descriptions.Item>
                            <Descriptions.Item
                                label={
                                    <span>
                                        <GlobalOutlined /> Country
                                    </span>
                                }
                            >
                                <Tag color="geekblue">{selectedMou.country}</Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label="State">
                                {selectedMou.state || "N/A"}
                            </Descriptions.Item>
                            <Descriptions.Item label="City">
                                {selectedMou.city}
                            </Descriptions.Item>
                            <Descriptions.Item
                                label={
                                    <span>
                                        <MailOutlined /> Email
                                    </span>
                                }
                            >
                                <a href={`mailto:${selectedMou.email}`}>
                                    {selectedMou.email}
                                </a>
                            </Descriptions.Item>
                            <Descriptions.Item
                                label={
                                    <span>
                                        <PhoneOutlined /> Phone
                                    </span>
                                }
                            >
                                {selectedMou.phone_number}
                            </Descriptions.Item>
                            <Descriptions.Item label="Website">
                                {selectedMou.website ? (
                                    <a
                                        href={selectedMou.website}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {selectedMou.website}
                                    </a>
                                ) : (
                                    "N/A"
                                )}
                            </Descriptions.Item>
                            <Descriptions.Item label="Agreement Date">
                                {selectedMou.agreement_date}
                            </Descriptions.Item>
                            <Descriptions.Item
                                label={
                                    <span>
                                        <HomeOutlined /> Address
                                    </span>
                                }
                                span={2}
                            >
                                {selectedMou.address}
                            </Descriptions.Item>
                            {selectedMou.created_at && (
                                <Descriptions.Item
                                    label={
                                        <span>
                                            <ClockCircleOutlined /> Created At
                                        </span>
                                    }
                                >
                                    {new Date(
                                        selectedMou.created_at
                                    ).toLocaleString()}
                                </Descriptions.Item>
                            )}
                        </Descriptions>

                        <div className="mt-4 flex justify-end">
                            <AntButton
                                type="primary"
                                icon={<FilePdfOutlined />}
                                loading={downloadingId === selectedMou.id}
                                onClick={() => handleDownload(selectedMou)}
                            >
                                Download PDF
                            </AntButton>
                        </div>
                    </div>
                ) : (
                    <Skeleton active paragraph={{ rows: 10 }} />
                )}
            </Modal>

            <Modal
                title="Create MoU Agreement"
                open={createModalVisible}
                onCancel={() => setCreateModalVisible(false)}
                footer={null}
                width={700}
                centered
                destroyOnClose
            >
                <Form
                    form={mouForm}
                    layout="vertical"
                    onFinish={handleCreateMou}
                >
                    <Form.Item
                        name="company_name"
                        label="Company Name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter company name",
                            },
                        ]}
                    >
                        <Input placeholder="Company name" />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="representative_name"
                                label="Representative Name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter representative name",
                                    },
                                ]}
                            >
                                <Input placeholder="Representative name" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="agreement_date"
                                label="Agreement Date"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select agreement date",
                                    },
                                ]}
                            >
                                <DatePicker
                                    style={{ width: "100%" }}
                                    format="DD-MM-YYYY"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                name="country"
                                label="Country"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter country",
                                    },
                                ]}
                            >
                                <Input placeholder="Country" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="state" label="State">
                                <Input placeholder="State (optional)" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="city"
                                label="City"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter city",
                                    },
                                ]}
                            >
                                <Input placeholder="City" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            { required: true, message: "Please enter address" },
                        ]}
                    >
                        <TextArea rows={2} placeholder="Full address" />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="phone_number"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter phone number",
                                    },
                                ]}
                            >
                                <Input placeholder="Phone number" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter email",
                                    },
                                    {
                                        type: "email",
                                        message: "Please enter a valid email",
                                    },
                                ]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="website" label="Website">
                        <Input placeholder="Website (optional)" />
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
                                Create MoU
                            </AntButton>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ManagerMouPage;
