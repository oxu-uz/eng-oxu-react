import React, {useState} from 'react';
import {Row, Col, Card, Divider, Typography, List, Table, Space, Image, Skeleton} from 'antd';
import {
    MedicineBoxOutlined,
    ExperimentOutlined,
    ScheduleOutlined,
    TeamOutlined,
    AppstoreOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons';
import {motion} from 'framer-motion';
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

const slideUp = {
    hidden: {y: 50, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {duration: 0.6}}
};

// Clinic data with single representative image for each
const clinics = [
    {
        name: "AIU Main Teaching Hospital",
        image: "/hospitals/main_hospital.jpeg",
        thumbnail: "/hospitals/thumbnails/main_hospital.jpg",
        description: "Our flagship hospital with state-of-the-art facilities",
        featured: true
    },
    {
        name: "Bukhara Pediatric Center",
        image: "/hospitals/pediatric_center.jpg",
        thumbnail: "/hospitals/thumbnails/pediatric_center.webp",
        description: "Specialized care for children and adolescents"
    },
    {
        name: "AIU Surgical Institute",
        image: "/hospitals/carment.jpg",
        thumbnail: "/hospitals/thumbnails/carmen.webp",
        description: "Advanced surgical training and practice"
    },
    {
        name: "Community Health Clinic",
        image: "/hospitals/himchan.jpg",
        thumbnail: "/hospitals/thumbnails/himchan.webp",
        description: "Serving local communities with primary care"
    }
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

const AnimatedImage = ({src, thumbnail, alt, style, className}) => {
    const [loaded, setLoaded] = useState(false);
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
            style={style}
            className={className}
            whileHover={{scale: 1.03}}
            transition={{type: 'spring', stiffness: 300}}
        >
            <Image
                src={inView ? src : thumbnail}
                alt={alt}
                preview={loaded}
                placeholder={
                    <Skeleton.Image
                        active
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />
                }
                onLoad={() => setLoaded(true)}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
                }}
            />
        </motion.div>
    );
};

const HospitalImageCard = ({clinic, isFeatured = false}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={isFeatured ? fadeIn : slideUp}
            whileHover={{scale: isFeatured ? 1.01 : 1.03}}
            transition={{type: 'spring', stiffness: 300}}
            style={{
                height: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
            }}
        >
            <div style={{
                position: 'relative',
                height: isFeatured && '800px',
                width: '100%'
            }}>
                <Image
                    src={clinic.image}
                    alt={clinic.name}
                    preview={false}
                    style={{
                        // height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '24px',
                    color: 'white'
                }}>
                    <Title level={3} style={{color: 'white', marginBottom: '8px'}}>
                        {clinic.name}
                    </Title>
                    <Text style={{color: 'rgba(255,255,255,0.9)', fontSize: '16px'}}>
                        {clinic.description}
                    </Text>
                </div>
            </div>
        </motion.div>
    );
};

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
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                style={{
                    background: 'linear-gradient(135deg, #012152, #012c6e)',
                    color: 'white',
                    padding: '60px 24px',
                    borderRadius: '12px',
                    marginBottom: '48px',
                    textAlign: 'center',
                    boxShadow: '0 10px 20px rgba(1, 33, 82, 0.2)'
                }}
            >
                <Title level={2} style={{color: 'white', marginBottom: '16px'}}>
                    Clinical Practice and Hospital Training
                </Title>
                <Paragraph style={{
                    fontSize: '18px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.7',
                    color: 'rgba(255,255,255,0.9)'
                }}>
                    We recognize that clinical experience is the cornerstone of medical education.
                </Paragraph>
            </motion.div>

            {/* Main Hospital Showcase */}
            <div style={{marginBottom: '48px'}}>
                <HospitalImageCard clinic={clinics[0]} isFeatured={true}/>
            </div>

            {/* Our Clinics Section */}
            <Divider orientation="left">
                <Text strong style={{color: '#012152', fontSize: '20px'}}>Our Affiliated Clinics</Text>
            </Divider>

            <Row gutter={[24, 24]} style={{marginBottom: '48px'}}>
                {clinics.slice(1).map((clinic, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <HospitalImageCard clinic={clinic}/>
                    </Col>
                ))}
            </Row>

            {/*/!* Our Clinics Section *!/*/}
            {/*<motion.div*/}
            {/*    initial="hidden"*/}
            {/*    whileInView="visible"*/}
            {/*    viewport={{once: true}}*/}
            {/*    variants={containerVariants}*/}
            {/*>*/}
            {/*    <Divider orientation="left">*/}
            {/*        <Text strong style={{color: '#012152', fontSize: '20px'}}>Our Affiliated Clinics</Text>*/}
            {/*    </Divider>*/}

            {/*    <Row gutter={[24, 24]} style={{marginBottom: '32px'}}>*/}
            {/*        {clinics.slice(1).map((clinic, index) => (*/}
            {/*            <Col xs={24} sm={12} key={index}>*/}
            {/*                <Card*/}
            {/*                    hoverable*/}
            {/*                    style={{*/}
            {/*                        borderRadius: '12px',*/}
            {/*                        overflow: 'hidden',*/}
            {/*                        height: '100%'*/}
            {/*                    }}*/}
            {/*                    bodyStyle={{padding: '16px'}}*/}
            {/*                    cover={*/}
            {/*                        <AnimatedImage*/}
            {/*                            src={clinic.image}*/}
            {/*                            thumbnail={clinic.thumbnail}*/}
            {/*                            alt={clinic.name}*/}
            {/*                            style={{height: '220px'}}*/}
            {/*                        />*/}
            {/*                    }*/}
            {/*                >*/}
            {/*                    <Title level={4} style={{color: '#012152', marginBottom: '8px'}}>*/}
            {/*                        {clinic.name}*/}
            {/*                    </Title>*/}
            {/*                    <Paragraph style={{fontSize: '15px'}}>*/}
            {/*                        {clinic.description}*/}
            {/*                    </Paragraph>*/}
            {/*                </Card>*/}
            {/*            </Col>*/}
            {/*        ))}*/}
            {/*    </Row>*/}
            {/*</motion.div>*/}

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
                                    style={{
                                        borderRadius: '8px',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <AnimatedImage
                                        src="/hospitals/mentorship.jpg"
                                        alt="Medical mentorship"
                                        thumbnail="/hospitals/mentorship.jpg"
                                        style={{
                                            width: '100%',
                                            borderRadius: '8px'
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
                style={{
                    background: 'linear-gradient(135deg, #012152, #012c6e)',
                    color: 'white',
                    padding: '40px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    marginTop: '48px',
                    boxShadow: '0 10px 20px rgba(1, 33, 82, 0.2)'
                }}
            >
                <AppstoreOutlined style={{fontSize: '48px', marginBottom: '20px', color: '#fff'}}/>
                <Title level={3} style={{color: 'white', marginBottom: '16px'}}>
                    At AIU, we don't just teach medicine — we prepare doctors who are ready to serve from day one.
                </Title>
            </motion.div>

            {/* Hospital Images Gallery */}
            {/*<motion.div*/}
            {/*    initial="hidden"*/}
            {/*    whileInView="visible"*/}
            {/*    viewport={{once: true}}*/}
            {/*    variants={containerVariants}*/}
            {/*>*/}
            {/*    <Divider orientation="left">*/}
            {/*        <Text strong style={{color: '#012152', fontSize: '20px'}}>Our Affiliated Hospitals</Text>*/}
            {/*    </Divider>*/}
            {/*    <div style={{*/}
            {/*        display: 'grid',*/}
            {/*        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',*/}
            {/*        gap: '20px',*/}
            {/*        marginBottom: '32px'*/}
            {/*    }}>*/}
            {/*        {hospitalImages.map((img, index) => (*/}
            {/*            <AnimatedImage*/}
            {/*                key={index}*/}
            {/*                src={img.src}*/}
            {/*                thumbnail={img.thumbnail}*/}
            {/*                alt={img.alt}*/}
            {/*                style={{height: '240px'}}*/}
            {/*            />*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</motion.div>*/}
        </div>
    );
};

export default HospitalAffiliated;