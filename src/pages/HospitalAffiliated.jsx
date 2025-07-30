import React from 'react';
import {Row, Col, Card, Divider, Typography, List, Table, Space} from 'antd';
import {
    MedicineBoxOutlined,
    ExperimentOutlined,
    ScheduleOutlined,
    TeamOutlined,
    AppstoreOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons';
import {motion} from 'framer-motion';
import {FaHospital} from "react-icons/fa";
import {useInView} from 'react-intersection-observer';

const {Title, Paragraph, Text} = Typography;

// Animation variants
const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const fadeIn = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 0.8}}
};

const slideInFromLeft = {
    hidden: {x: -50, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.6}}
};

const slideInFromRight = {
    hidden: {x: 50, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.6}}
};

// Sample images
const hospitalImages = [
    '/hospitals/IMG_3755.jpg',
    '/hospitals/IMG_3756.jpg',
    '/hospitals/IMG_3757.jpg',
    '/hospitals/IMG_3758.jpg',
    '/hospitals/IMG_3759.jpg',
    '/hospitals/IMG_3760.jpg',
    '/hospitals/IMG_3761.jpg',
    '/hospitals/IMG_3762.jpg',
    '/hospitals/IMG_3763.jpg',
    '/hospitals/IMG_3764.jpg',
    '/hospitals/IMG_3765.jpg',
    '/hospitals/IMG_3766.jpg',
    '/hospitals/IMG_3767.jpg',
    '/hospitals/IMG_3768.jpg',
];

const internshipData = [
    {department: 'Internal Medicine', duration: '8 weeks'},
    {department: 'General Surgery', duration: '8 weeks'},
    {department: 'Obstetrics and Gynecology', duration: '8 weeks'},
    {department: 'Community-Based Medicine', duration: '8 weeks'},
    {department: 'Pediatrics', duration: '4 weeks'},
    {department: 'Emergency Medicine', duration: '2 weeks'},
    {department: 'Orthopedics', duration: '2 weeks'},
    {department: 'Ophthalmology', duration: '2 weeks'},
    {department: 'ENT (Otorhinolaryngology)', duration: '2 weeks'},
    {department: 'Psychiatry', duration: '1 week'},
    {department: 'Dermatology', duration: '1 week'},
    {department: 'Radiodiagnosis', duration: '1 week'},
    {department: 'Intensive Therapy (ICU)', duration: '1 week'},
];

const rotationDepartments = [
    'Internal Medicine',
    'General Surgery',
    'Pediatrics',
    'Gynecology and Obstetrics',
    'Psychiatry',
    'Emergency Medicine',
    'Radiology',
    'ENT, Ophthalmology, Orthopedics, and more'
];

const AnimatedCard = ({children, delay = 0}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{delay}}
        >
            {children}
        </motion.div>
    );
};

const HospitalAffiliated = () => {
    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <div style={{padding: '24px', backgroundColor: '#f5f7fa'}}>
            {/* Hero Section */}
            <motion.div
                ref={heroRef}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={fadeIn}
                style={{
                    background: 'linear-gradient(135deg, #012152, #012c6e)',
                    color: 'white',
                    padding: '60px 24px',
                    borderRadius: '12px',
                    marginBottom: '32px',
                    textAlign: 'center',
                    boxShadow: '0 10px 20px rgba(1, 33, 82, 0.2)'
                }}
            >
                <motion.div
                    initial={{scale: 0.8}}
                    animate={{scale: 1}}
                    transition={{delay: 0.3}}
                >
                    {/*<FaHospital style={{fontSize: '64px', marginBottom: '20px', color: '#4dabf7'}}/>*/}
                </motion.div>
                <Title level={2} style={{color: 'white', marginBottom: '16px'}}>
                    Clinical Practice and Hospital Training
                </Title>
                <Title level={4} style={{color: 'rgba(255,255,255,0.9)', fontWeight: 'normal'}}>
                    At Asia International University
                </Title>
                <Paragraph style={{
                    fontSize: '18px',
                    maxWidth: '800px',
                    margin: '20px auto',
                    lineHeight: '1.7'
                }} className="text-gray-50">
                    We recognize that clinical experience is the cornerstone of medical education. Our programs are
                    designed to ensure students develop practical skills, clinical confidence, and real-world competence
                    from the very beginning of their journey.
                </Paragraph>
            </motion.div>

            {/* Affiliated Hospitals */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.2}}
                variants={containerVariants}
            >
                <AnimatedCard>
                    <Card
                        style={{
                            marginBottom: '32px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                        }}
                        bodyStyle={{padding: '24px'}}
                    >
                        <Row gutter={[32, 32]} align="middle">
                            <Col xs={24} md={12}>
                                <motion.div variants={slideInFromLeft}>
                                    <Title level={3} style={{color: '#012152', marginBottom: '16px'}}>
                                        <TeamOutlined style={{marginRight: '12px', color: '#012c6e'}}/>
                                        Our Teaching Hospitals Network
                                    </Title>
                                    <Paragraph style={{fontSize: '16px', lineHeight: '1.7'}}>
                                        We are proud to have our own teaching hospitals and 46 affiliated hospitals and
                                        clinics across Bukhara City. These partnerships provide our students with
                                        wide-ranging exposure to various patient populations, medical systems, and
                                        healthcare delivery models.
                                    </Paragraph>
                                </motion.div>
                            </Col>
                            <Col xs={24} md={12}>
                                <motion.div variants={slideInFromRight}>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: '12px',
                                        borderRadius: '8px',
                                        overflow: 'hidden'
                                    }}>
                                        {hospitalImages.slice(0, 4).map((img, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{scale: 1.03}}
                                                transition={{type: 'spring', stiffness: 400, damping: 10}}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Hospital ${index + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '160px',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                                        transition: 'transform 0.3s ease'
                                                    }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </Col>
                        </Row>
                    </Card>
                </AnimatedCard>
            </motion.div>

            <Divider orientation="left">
                <Text strong style={{color: '#012152', fontSize: '20px'}}>Our Clinical Training Approach</Text>
            </Divider>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.1}}
                variants={containerVariants}
                style={{marginBottom: '32px'}}
            >
                <Row gutter={[32, 32]}>
                    {/* Hospital Rotations */}
                    <Col xs={24} md={12}>
                        <AnimatedCard delay={0.1}>
                            <Card
                                title={
                                    <Space>
                                        <MedicineBoxOutlined style={{color: '#012c6e', fontSize: '20px'}}/>
                                        <Text strong style={{fontSize: '18px'}}>Hospital Rotations: Real-World Clinical
                                            Exposure</Text>
                                    </Space>
                                }
                                style={{
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                    height: '100%'
                                }}
                            >
                                <Paragraph style={{fontSize: '16px', lineHeight: '1.7'}}>
                                    Our students rotate through essential medical departments, including:
                                </Paragraph>
                                <List
                                    dataSource={rotationDepartments}
                                    renderItem={item => (
                                        <List.Item style={{padding: '8px 0'}}>
                                            <Text style={{fontSize: '15px'}}>• {item}</Text>
                                        </List.Item>
                                    )}
                                />
                                <Paragraph style={{fontSize: '16px', lineHeight: '1.7', marginTop: '16px'}}>
                                    They actively participate in inpatient and outpatient care under the close
                                    supervision of experienced clinical mentors.
                                </Paragraph>
                            </Card>
                        </AnimatedCard>
                    </Col>

                    {/* Simulation Learning */}
                    <Col xs={24} md={12}>
                        <AnimatedCard delay={0.2}>
                            <Card
                                title={
                                    <Space>
                                        <ExperimentOutlined style={{color: '#012c6e', fontSize: '20px'}}/>
                                        <Text strong style={{fontSize: '18px'}}>Simulation-Based Learning</Text>
                                    </Space>
                                }
                                style={{
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                    height: '100%'
                                }}
                            >
                                <Paragraph style={{fontSize: '16px', lineHeight: '1.7'}}>
                                    To bridge the gap between theory and practice, AIU is launching a state-of-the-art
                                    Simulation Center. This virtual clinical training environment will allow students
                                    to:
                                </Paragraph>
                                <List
                                    dataSource={[
                                        'Rehearse procedures in realistic scenarios',
                                        'Develop clinical reasoning and decision-making skills',
                                        'Improve patient communication and bedside manner'
                                    ]}
                                    renderItem={item => (
                                        <List.Item style={{padding: '8px 0'}}>
                                            <Text style={{fontSize: '15px'}}>• {item}</Text>
                                        </List.Item>
                                    )}
                                />
                                <Paragraph style={{fontSize: '16px', lineHeight: '1.7', marginTop: '16px'}}>
                                    All in a safe, risk-free setting that accelerates learning while ensuring patient
                                    safety.
                                </Paragraph>
                            </Card>
                        </AnimatedCard>
                    </Col>
                </Row>
            </motion.div>

            {/* Internship Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={fadeIn}
            >
                <AnimatedCard delay={0.3}>
                    <Card
                        title={
                            <Space>
                                <ScheduleOutlined style={{color: '#012c6e', fontSize: '20px'}}/>
                                <Text strong style={{fontSize: '18px'}}>One-Year Internship (Final Year – 6th
                                    Year)</Text>
                            </Space>
                        }
                        style={{
                            marginBottom: '32px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                        }}
                    >
                        <Paragraph style={{fontSize: '16px', lineHeight: '1.7'}}>
                            AIU places a strong emphasis on internship-based learning. In the final year, students
                            undergo a structured 52-week clinical internship in various specialties, allowing them to
                            refine their knowledge and become hospital-ready:
                        </Paragraph>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.4}}
                        >
                            <Table
                                dataSource={internshipData}
                                columns={[
                                    {
                                        title: <Text strong>Department</Text>,
                                        dataIndex: 'department',
                                        key: 'department',
                                        render: (text) => <Text>{text}</Text>
                                    },
                                    {
                                        title: <Text strong>Duration</Text>,
                                        dataIndex: 'duration',
                                        key: 'duration',
                                        render: (text) => <Text>{text}</Text>
                                    },
                                ]}
                                pagination={false}
                                size="middle"
                                style={{
                                    margin: '20px 0',
                                    borderRadius: '8px',
                                    overflow: 'hidden'
                                }}
                                rowClassName={() => 'hover-row'}
                            />
                        </motion.div>

                        <Paragraph style={{fontSize: '16px', lineHeight: '1.7'}}>
                            This rigorous and diverse internship ensures that our graduates are clinically competent,
                            globally competitive, and professionally prepared for any medical challenge.
                        </Paragraph>
                    </Card>
                </AnimatedCard>
            </motion.div>

            {/* Mentorship Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={fadeIn}
            >
                <AnimatedCard delay={0.4}>
                    <Card
                        title={
                            <Space>
                                <SafetyCertificateOutlined style={{color: '#012c6e', fontSize: '20px'}}/>
                                <Text strong style={{fontSize: '18px'}}>Mentorship & Supervision</Text>
                            </Space>
                        }
                        style={{
                            marginBottom: '32px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                        }}
                    >
                        <Row gutter={[32, 32]} align="middle">
                            <Col xs={24} md={14}>
                                <Paragraph style={{fontSize: '16px', lineHeight: '1.7'}}>
                                    Throughout the clinical years, every student is guided by certified clinical mentors
                                    who provide:
                                </Paragraph>
                                <List
                                    dataSource={[
                                        'Personalized feedback and evaluation',
                                        'Hands-on procedural training',
                                        'Professional development guidance',
                                        'Patient safety oversight',
                                        'Career advice and specialty counseling'
                                    ]}
                                    renderItem={item => (
                                        <List.Item style={{padding: '8px 0'}}>
                                            <Text style={{fontSize: '15px'}}>• {item}</Text>
                                        </List.Item>
                                    )}
                                />
                            </Col>
                            <Col xs={24} md={10}>
                                <motion.div
                                    whileHover={{scale: 1.02}}
                                    transition={{type: 'spring', stiffness: 400, damping: 10}}
                                >
                                    <img
                                        src="/hospitals/mentorship2.jpg" // Replace with actual image
                                        alt="Medical mentorship"
                                        style={{
                                            width: '100%',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                        }}
                                    />
                                </motion.div>
                            </Col>
                        </Row>
                    </Card>
                </AnimatedCard>
            </motion.div>

            {/* Final Statement */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={fadeIn}
            >
                <AnimatedCard delay={0.5}>
                    <div style={{
                        background: 'linear-gradient(135deg, #012152, #012c6e)',
                        color: 'white',
                        padding: '40px 24px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        marginBottom: '32px',
                        boxShadow: '0 10px 20px rgba(1, 33, 82, 0.2)'
                    }}>
                        <motion.div
                            whileHover={{rotate: 10}}
                            transition={{type: 'spring'}}
                        >
                            <AppstoreOutlined style={{fontSize: '48px', marginBottom: '20px', color: '#fff'}}/>
                        </motion.div>
                        <Title level={3} style={{color: 'white', marginBottom: '16px'}}>
                            At AIU, we don't just teach medicine — we prepare doctors who are ready to serve from day
                            one.
                        </Title>
                        <Text className="text-gray-50" style={{fontSize: '16px', opacity: 0.9}}>
                            Our graduates enter the medical field with confidence, competence, and compassion.
                        </Text>
                    </div>
                </AnimatedCard>
            </motion.div>

            {/* Hospital Images Gallery */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={containerVariants}
            >
                <Divider orientation="left">
                    <Text strong style={{color: '#012152', fontSize: '20px'}}>Our Affiliated Hospitals</Text>
                </Divider>
                <motion.div variants={fadeIn}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '20px',
                        marginBottom: '32px'
                    }}>
                        {hospitalImages.map((img, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
                                }}
                                transition={{type: 'spring', stiffness: 300}}
                                style={{
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                    height: '240px'
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Hospital ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HospitalAffiliated;