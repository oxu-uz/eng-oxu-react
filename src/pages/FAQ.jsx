// import React, {useState} from 'react';
// import {Collapse, Input, Typography, Card, Space, Divider, theme} from 'antd';
// import {SearchOutlined, PlusOutlined, MinusOutlined} from '@ant-design/icons';
//
// const {Panel} = Collapse;
// const {Title, Text} = Typography;
// const {useToken} = theme;
//
// const FAQSection = () => {
//     const {token} = useToken();
//     const [activeKey, setActiveKey] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');
//
//     const faqCategories = [
//         {
//             title: 'MBBS/MD',
//             icon: '🏥',
//             items: [
//                 {
//                     question: 'What is the duration of the MBBS program?',
//                     answer: 'The MBBS program typically takes 5–6 years, including one year of clinical internship.'
//                 },
//                 {
//                     question: 'Is the MBBS degree internationally recognized?',
//                     answer: 'Yes, our MBBS degree is recognized by bodies like WHO, ECFMG (USA), GMC (UK), NMC (India), depending on your home country\'s regulations.'
//                 },
//                 {
//                     question: 'What are the admission requirements?',
//                     answer: 'Applicants must have completed high school with Biology, Chemistry, and Physics. A minimum GPA and proof of English proficiency (IELTS/TOEFL) are required.'
//                 },
//                 {
//                     question: 'Is NEET mandatory for Indian students?',
//                     answer: 'Yes, Indian students must qualify NEET as per NMC (India) guidelines.'
//                 },
//                 {
//                     question: 'Are there entrance exams?',
//                     answer: 'In most cases, international students are selected based on academic performance and interviews. Some countries may require entrance exams.'
//                 },
//                 {
//                     question: 'What is the medium of instruction?',
//                     answer: 'All courses are taught in English.'
//                 },
//                 {
//                     question: 'Do students receive clinical training?',
//                     answer: 'Yes, clinical training is conducted in affiliated hospitals starting from the third or fourth year.'
//                 },
//                 {
//                     question: 'Are scholarships available for MBBS students?',
//                     answer: 'Yes, merit-based scholarships are available for top-performing international students.'
//                 },
//                 {
//                     question: 'Is the university hostel available for MBBS students?',
//                     answer: 'Yes, fully furnished hostel facilities with meal plans are available on campus.'
//                 }
//             ]
//         },
//         {
//             title: 'MBA',
//             icon: '📊',
//             items: [
//                 {
//                     question: 'How long is the MBA program?',
//                     answer: 'The MBA program is typically 1–2 years depending on full-time or part-time enrollment.'
//                 },
//                 {
//                     question: 'What are the admission requirements?',
//                     answer: "You need a bachelor's degree in any field, preferably with work experience. English proficiency and sometimes GMAT/GRE scores are also required."
//                 },
//                 {
//                     question: 'Do I need work experience to apply?',
//                     answer: 'While work experience is preferred, it is not mandatory for all MBA tracks.'
//                 },
//                 {
//                     question: 'What specializations are available?',
//                     answer: 'Specializations include Finance, Marketing, Operations, International Business, HR, and IT Management.'
//                 },
//                 {
//                     question: 'Is there a thesis or final project?',
//                     answer: 'Yes, students must complete a capstone project or research thesis.'
//                 },
//                 {
//                     question: 'Are evening or weekend classes available?',
//                     answer: 'Yes, flexible class schedules are available for working professionals.'
//                 },
//                 {
//                     question: 'Are scholarships available for MBA students?',
//                     answer: 'Yes, limited scholarships are available based on academic or professional merit.'
//                 },
//                 {
//                     question: 'Will the university help me find a job after graduation?',
//                     answer: 'Yes, we provide job placement assistance, industry networking, and alumni support.'
//                 }
//             ],
//             sub: {
//                 title: 'BBA',
//                 icon: '📈',
//                 subitems: [
//                     {
//                         question: 'What is the duration of the BBA program?',
//                         answer: 'The BBA program typically lasts 3–4 years.'
//                     },
//                     {
//                         question: 'What are the eligibility criteria for BBA?',
//                         answer: 'You need a high school diploma or equivalent with a good academic record and English proficiency (IELTS/TOEFL).'
//                     },
//                     {
//                         question: 'What subjects will I study in BBA?',
//                         answer: 'You will study core subjects such as Marketing, Finance, Accounting, Human Resources, and Management.'
//                     },
//                     {
//                         question: 'Can I specialize in a particular area?',
//                         answer: 'Yes, specializations such as International Business, Digital Marketing, and Entrepreneurship are offered.'
//                     },
//                     {
//                         question: 'Are internships included?',
//                         answer: 'Yes, internships are mandatory or strongly encouraged in the final year.'
//                     },
//                     {
//                         question: 'Are part-time jobs allowed while studying?',
//                         answer: 'Yes, you may work part-time as per your visa regulations.'
//                     },
//                     {
//                         question: 'Is the BBA program accredited?',
//                         answer: 'Yes, our business programs are accredited by national and international bodies.'
//                     },
//                     {
//                         question: 'Are career services provided?',
//                         answer: 'Yes, career counseling, job fairs, and resume/interview workshops are offered through our Career Services Office.'
//                     }
//                 ]
//             }
//         },
//         {
//             title: 'BSBA',
//             icon: '💼',
//             items: []
//         },
//         {
//             title: 'BSIT',
//             icon: '💻',
//             items: [],
//             sub: {
//                 title: 'IT',
//                 icon: '🔌',
//                 subitems: [
//                     {
//                         question: 'What programs are available under IT?',
//                         answer: 'We offer BSc in Computer Science, BSc in Software Engineering, BSc in Data Science, and MSc in IT/AI/Cybersecurity.'
//                     },
//                     {
//                         question: 'What is the duration of the IT degree?',
//                         answer: "Bachelor's programs last 3–4 years. Master's programs are usually 1.5–2 years."
//                     },
//                     {
//                         question: 'What are the admission requirements?',
//                         answer: "You need a high school diploma with mathematics and English proficiency for undergraduate programs. A relevant bachelor's degree is required for master's programs."
//                     },
//                     {
//                         question: 'Are programming skills required before applying?',
//                         answer: 'Not necessarily. Introductory courses are provided, especially for undergraduate applicants.'
//                     },
//                     {
//                         question: 'Are labs and hands-on training included?',
//                         answer: 'Yes, all IT courses include practical lab sessions, coding assignments, and projects.'
//                     },
//                     {
//                         question: 'Are industry certifications part of the curriculum?',
//                         answer: 'Optional certifications (e.g., AWS, Microsoft, Cisco) are available during the course.'
//                     },
//                     {
//                         question: 'What career options are available after graduation?',
//                         answer: 'Graduates can work in software development, data analysis, IT consulting, systems engineering, and AI/ML roles.'
//                     },
//                     {
//                         question: 'Can I participate in tech competitions or research?',
//                         answer: 'Yes, students are encouraged to take part in hackathons, research projects, and international conferences.'
//                     }
//                 ]
//             }
//         }
//     ];
//
//     const filterItems = (items = []) =>
//         items.filter(item =>
//             item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             item.answer.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//
//     const filteredCategories = faqCategories.map(category => {
//         const filteredItems = filterItems(category.items);
//         const sub = category.sub
//             ? {
//                 ...category.sub,
//                 subitems: filterItems(category.sub.subitems)
//             }
//             : null;
//
//         if (filteredItems.length > 0 || (sub && sub.subitems.length > 0)) {
//             return {...category, items: filteredItems, sub};
//         }
//         return null;
//     }).filter(Boolean);
//
//     const handlePanelChange = (key) => {
//         setActiveKey(activeKey === key ? null : key);
//     };
//
//     return (
//         <div className="faq-container flex flex-col items-center" style={{
//             // maxWidth: 1200,
//             margin: '0 auto',
//             // padding: '40px 20px',
//         }}>
//
//             <div data-v-1b1c0a2c=""
//                  className="container-fluid statistics w-full mb-6 h-[250px]"
//                  style={{backgroundImage:"url('/4343.png')",paddingTop:"70px"}}>
//                 <Title level={2} style={{
//                     textAlign: 'center',
//                     marginBottom: 0,
//                     color: "#fff",
//                     fontWeight: 600
//                 }}>
//                     Frequently Asked Questions
//                 </Title>
//
//                 <Text className="text-blue-gray-200 " style={{
//                     textAlign: 'center',
//                     display: 'block',
//                     fontSize: 20,
//                     // marginBottom: 40
//                 }}>
//                     Find answers to common questions about our programs
//                 </Text>
//             </div>
//
//             <Space direction="vertical" size="large" style={{width: '80%'}}>
//
//                 {/*<Card bordered={false} style={{*/}
//                 {/*    borderRadius: 12,*/}
//                 {/*    boxShadow: token.boxShadow,*/}
//                 {/*    marginBottom: 40*/}
//                 {/*}}>*/}
//                 {/*    <Input*/}
//                 {/*        size="large"*/}
//                 {/*        placeholder="Search FAQs..."*/}
//                 {/*        prefix={<SearchOutlined style={{color: token.colorTextSecondary}}/>}*/}
//                 {/*        onChange={(e) => setSearchTerm(e.target.value)}*/}
//                 {/*        style={{*/}
//                 {/*            maxWidth: 600,*/}
//                 {/*            margin: '0 auto',*/}
//                 {/*            borderRadius: 8*/}
//                 {/*        }}*/}
//                 {/*        allowClear*/}
//                 {/*    />*/}
//                 {/*</Card>*/}
//
//                 {filteredCategories.length > 0 ? (
//                     filteredCategories.map((category, catIndex) => (
//                         <Space key={catIndex} direction="vertical" size="middle" style={{width: '100%'}}>
//                             <Card
//                                 bordered={false}
//                                 style={{
//                                     borderRadius: 12,
//                                     boxShadow: token.boxShadowSecondary,
//                                     background: token.colorBgElevated
//                                 }}
//                                 bodyStyle={{padding: '24px 32px'}}
//                             >
//                                 <Space size="middle" align="center" style={{marginBottom: 24}}>
//                                     <Text style={{fontSize: 24}}>{category.icon}</Text>
//                                     <Title level={3} style={{
//                                         margin: 0,
//                                         color: "#012c6e"
//                                     }}>
//                                         {category.title}
//                                     </Title>
//                                 </Space>
//
//                                 {category.items.length > 0 && (
//                                     <Collapse
//                                         accordion
//                                         activeKey={activeKey}
//                                         onChange={handlePanelChange}
//                                         bordered={false}
//                                         expandIconPosition="end"
//                                         expandIcon={({isActive}) =>
//                                             isActive ?
//                                                 <MinusOutlined style={{color: "#01408e"}}/> :
//                                                 <PlusOutlined style={{color: "#01408e"}}/>
//                                         }
//                                     >
//                                         {category.items.map((item, itemIndex) => (
//                                             <Panel
//                                                 header={
//                                                     <Text strong style={{fontSize: 16}}>
//                                                         {item.question}
//                                                     </Text>
//                                                 }
//                                                 key={`${catIndex}-item-${itemIndex}`}
//                                                 style={{
//                                                     background: token.colorBgContainer,
//                                                     borderRadius: 8,
//                                                     marginBottom: 12,
//                                                     border: 'none'
//                                                 }}
//                                             >
//                                                 <Text style={{
//                                                     color: token.colorTextSecondary,
//                                                     paddingLeft: 24
//                                                 }}>
//                                                     {item.answer}
//                                                 </Text>
//                                             </Panel>
//                                         ))}
//                                     </Collapse>
//                                 )}
//
//                                 {category.sub && category.sub.subitems.length > 0 && (
//                                     <>
//                                         <Divider style={{
//                                             margin: '30px 0',
//                                             borderColor: token.colorBorderSecondary
//                                         }}/>
//
//                                         <Space size="middle" align="center" style={{marginBottom: 24}}>
//                                             <Text style={{fontSize: 20}}>{category.sub.icon}</Text>
//                                             <Title level={4} style={{
//                                                 margin: 0,
//                                                 color: "#012c6e"
//                                             }}>
//                                                 {category.sub.title}
//                                             </Title>
//                                         </Space>
//
//                                         <Collapse
//                                             accordion
//                                             activeKey={activeKey}
//                                             onChange={handlePanelChange}
//                                             bordered={false}
//                                             expandIconPosition="end"
//                                             expandIcon={({isActive}) =>
//                                                 isActive ?
//                                                     <MinusOutlined style={{color: "#01408e"}}/> :
//                                                     <PlusOutlined style={{color: "#01408e"}}/>
//                                             }
//                                         >
//                                             {category.sub.subitems.map((item, subIndex) => (
//                                                 <Panel
//                                                     header={
//                                                         <Text strong style={{fontSize: 16}}>
//                                                             {item.question}
//                                                         </Text>
//                                                     }
//                                                     key={`${catIndex}-sub-${subIndex}`}
//                                                     style={{
//                                                         background: token.colorBgContainer,
//                                                         borderRadius: 8,
//                                                         marginBottom: 12,
//                                                         border: 'none'
//                                                     }}
//                                                 >
//                                                     <Text style={{
//                                                         color: token.colorTextSecondary,
//                                                         paddingLeft: 24
//                                                     }}>
//                                                         {item.answer}
//                                                     </Text>
//                                                 </Panel>
//                                             ))}
//                                         </Collapse>
//                                     </>
//                                 )}
//                             </Card>
//                         </Space>
//                     ))
//                 ) : (
//                     <Card bordered={false} style={{
//                         textAlign: 'center',
//                         marginTop: 40,
//                         background: token.colorBgLayout,
//                         borderRadius: 12
//                     }}>
//                         <Text style={{fontSize: 16}}>
//                             No results found for "<Text strong>{searchTerm}</Text>". Please try a different search term.
//                         </Text>
//                     </Card>
//                 )}
//
//                 <Card bordered={false} style={{
//                     textAlign: 'center',
//                     marginTop: 40,
//                     background: token.colorBgElevated,
//                     borderRadius: 12,
//                     boxShadow: token.boxShadowTertiary
//                 }}>
//                     <Title level={4} style={{marginBottom: 16}}>
//                         Still have questions?
//                     </Title>
//                     <Text style={{fontSize: 16, marginBottom: 16, display: 'block'}}>
//                         We're here to help! Contact our admissions team for more information.
//                     </Text>
//                     <Space size="middle">
//                         <a href="/international-relations/contact" style={{
//                             color: "#01408e",
//                             fontWeight: 500
//                         }}>
//                             Contact Admissions
//                         </a>
//                         <Text strong>|</Text>
//                         <Text>
//                             <Text className="text-[#01408e]" strong>Call:</Text>
//                             <a className="main-footer__link" href="tel:+998500305876">
//                                 +998 50 030 58 76
//                             </a>
//                         </Text>
//                     </Space>
//                 </Card>
//             </Space>
//         </div>
//     );
// };
//
// export default FAQSection;

import React, { useState } from 'react';
import { Collapse, Input, Typography, Card, Space, Divider } from 'antd';
import { SearchOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'antd-style';

const { Panel } = Collapse;
const { Title, Text } = Typography;

const FAQSection = () => {
    const token = useTheme();
    const [activeKey, setActiveKey] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const faqCategories = [
        {
            title: 'MBBS/MD',
            icon: '🏥',
            items: [
                {
                    question: 'What is the duration of the MBBS program?',
                    answer: 'The MBBS program typically takes 5–6 years, including one year of clinical internship.'
                },
                {
                    question: 'Is the MBBS degree internationally recognized?',
                    answer: 'Yes, our MBBS degree is recognized by bodies like WHO, ECFMG (USA), GMC (UK), NMC (India), depending on your home country\'s regulations.'
                },
                {
                    question: 'What are the admission requirements?',
                    answer: 'Applicants must have completed high school with Biology, Chemistry, and Physics. A minimum GPA and proof of English proficiency (IELTS/TOEFL) are required.'
                },
                {
                    question: 'Is NEET mandatory for Indian students?',
                    answer: 'Yes, Indian students must qualify NEET as per NMC (India) guidelines.'
                },
                {
                    question: 'Are there entrance exams?',
                    answer: 'In most cases, international students are selected based on academic performance and interviews. Some countries may require entrance exams.'
                },
                {
                    question: 'What is the medium of instruction?',
                    answer: 'All courses are taught in English.'
                },
                {
                    question: 'Do students receive clinical training?',
                    answer: 'Yes, clinical training is conducted in affiliated hospitals starting from the third or fourth year.'
                },
                {
                    question: 'Are scholarships available for MBBS students?',
                    answer: 'Yes, merit-based scholarships are available for top-performing international students.'
                },
                {
                    question: 'Is the university hostel available for MBBS students?',
                    answer: 'Yes, fully furnished hostel facilities with meal plans are available on campus.'
                }
            ]
        },
        {
            title: 'MBA',
            icon: '📊',
            items: [
                {
                    question: 'How long is the MBA program?',
                    answer: 'The MBA program is typically 1–2 years depending on full-time or part-time enrollment.'
                },
                {
                    question: 'What are the admission requirements?',
                    answer: "You need a bachelor's degree in any field, preferably with work experience. English proficiency and sometimes GMAT/GRE scores are also required."
                },
                {
                    question: 'Do I need work experience to apply?',
                    answer: 'While work experience is preferred, it is not mandatory for all MBA tracks.'
                },
                {
                    question: 'What specializations are available?',
                    answer: 'Specializations include Finance, Marketing, Operations, International Business, HR, and IT Management.'
                },
                {
                    question: 'Is there a thesis or final project?',
                    answer: 'Yes, students must complete a capstone project or research thesis.'
                },
                {
                    question: 'Are evening or weekend classes available?',
                    answer: 'Yes, flexible class schedules are available for working professionals.'
                },
                {
                    question: 'Are scholarships available for MBA students?',
                    answer: 'Yes, limited scholarships are available based on academic or professional merit.'
                },
                {
                    question: 'Will the university help me find a job after graduation?',
                    answer: 'Yes, we provide job placement assistance, industry networking, and alumni support.'
                }
            ],
            sub: {
                title: 'BBA',
                icon: '📈',
                subitems: [
                    {
                        question: 'What is the duration of the BBA program?',
                        answer: 'The BBA program typically lasts 3–4 years.'
                    },
                    {
                        question: 'What are the eligibility criteria for BBA?',
                        answer: 'You need a high school diploma or equivalent with a good academic record and English proficiency (IELTS/TOEFL).'
                    },
                    {
                        question: 'What subjects will I study in BBA?',
                        answer: 'You will study core subjects such as Marketing, Finance, Accounting, Human Resources, and Management.'
                    },
                    {
                        question: 'Can I specialize in a particular area?',
                        answer: 'Yes, specializations such as International Business, Digital Marketing, and Entrepreneurship are offered.'
                    },
                    {
                        question: 'Are internships included?',
                        answer: 'Yes, internships are mandatory or strongly encouraged in the final year.'
                    },
                    {
                        question: 'Are part-time jobs allowed while studying?',
                        answer: 'Yes, you may work part-time as per your visa regulations.'
                    },
                    {
                        question: 'Is the BBA program accredited?',
                        answer: 'Yes, our business programs are accredited by national and international bodies.'
                    },
                    {
                        question: 'Are career services provided?',
                        answer: 'Yes, career counseling, job fairs, and resume/interview workshops are offered through our Career Services Office.'
                    }
                ]
            }
        },
        {
            title: 'BSBA',
            icon: '💼',
            items: []
        },
        {
            title: 'BSIT',
            icon: '💻',
            items: [],
            sub: {
                title: 'IT',
                icon: '🔌',
                subitems: [
                    {
                        question: 'What programs are available under IT?',
                        answer: 'We offer BSc in Computer Science, BSc in Software Engineering, BSc in Data Science, and MSc in IT/AI/Cybersecurity.'
                    },
                    {
                        question: 'What is the duration of the IT degree?',
                        answer: "Bachelor's programs last 3–4 years. Master's programs are usually 1.5–2 years."
                    },
                    {
                        question: 'What are the admission requirements?',
                        answer: "You need a high school diploma with mathematics and English proficiency for undergraduate programs. A relevant bachelor's degree is required for master's programs."
                    },
                    {
                        question: 'Are programming skills required before applying?',
                        answer: 'Not necessarily. Introductory courses are provided, especially for undergraduate applicants.'
                    },
                    {
                        question: 'Are labs and hands-on training included?',
                        answer: 'Yes, all IT courses include practical lab sessions, coding assignments, and projects.'
                    },
                    {
                        question: 'Are industry certifications part of the curriculum?',
                        answer: 'Optional certifications (e.g., AWS, Microsoft, Cisco) are available during the course.'
                    },
                    {
                        question: 'What career options are available after graduation?',
                        answer: 'Graduates can work in software development, data analysis, IT consulting, systems engineering, and AI/ML roles.'
                    },
                    {
                        question: 'Can I participate in tech competitions or research?',
                        answer: 'Yes, students are encouraged to take part in hackathons, research projects, and international conferences.'
                    }
                ]
            }
        }
    ];

    const filterItems = (items = []) =>
        items.filter(item =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const filteredCategories = faqCategories.map(category => {
        const filteredItems = filterItems(category.items);
        const sub = category.sub
            ? {
                ...category.sub,
                subitems: filterItems(category.sub.subitems)
            }
            : null;

        if (filteredItems.length > 0 || (sub && sub.subitems.length > 0)) {
            return {...category, items: filteredItems, sub};
        }
        return null;
    }).filter(Boolean);

    const handlePanelChange = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const panelVariants = {
        closed: { height: 0, opacity: 0 },
        open: { height: 'auto', opacity: 1 }
    };

    return (
        <div className="faq-container flex flex-col items-center" style={{
            margin: '0 auto',
        }}>
            {/* Animated Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container-fluid statistics w-full mb-6 h-[250px]"
                style={{
                    backgroundImage: "url('/4343.png')",
                    paddingTop: "70px",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <Title level={2} style={{
                    textAlign: 'center',
                    marginBottom: 0,
                    color: "#fff",
                    fontWeight: 600
                }}>
                    Frequently Asked Questions
                </Title>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Text className="text-blue-gray-200" style={{
                        textAlign: 'center',
                        display: 'block',
                        fontSize: 20,
                    }}>
                        Find answers to common questions about our programs
                    </Text>
                </motion.div>
            </motion.div>

            <Space direction="vertical" size="large" style={{ width: '80%' }}>
                {/*Animated Search (if you want to re-enable it)*/}
                {/*<motion.div*/}
                {/*    initial={{ opacity: 0, y: 20 }}*/}
                {/*    animate={{ opacity: 1, y: 0 }}*/}
                {/*    transition={{ delay: 0.4 }}*/}
                {/*>*/}
                {/*    <Card bordered={false} style={{*/}
                {/*        borderRadius: 12,*/}
                {/*        boxShadow: token.boxShadow,*/}
                {/*        marginBottom: 40*/}
                {/*    }}>*/}
                {/*        <Input*/}
                {/*            size="large"*/}
                {/*            placeholder="Search FAQs..."*/}
                {/*            prefix={<SearchOutlined style={{ color: token.colorTextSecondary }} />}*/}
                {/*            onChange={(e) => setSearchTerm(e.target.value)}*/}
                {/*            style={{*/}
                {/*                maxWidth: 600,*/}
                {/*                margin: '0 auto',*/}
                {/*                borderRadius: 8*/}
                {/*            }}*/}
                {/*            allowClear*/}
                {/*        />*/}
                {/*    </Card>*/}
                {/*</motion.div>*/}

                {filteredCategories.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        style={{ width: '100%' }}
                    >
                        {filteredCategories.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                variants={itemVariants}
                                style={{ marginBottom: 40 }}
                            >
                                <Card
                                    bordered={false}
                                    style={{
                                        borderRadius: 12,
                                        boxShadow: token.boxShadowSecondary,
                                        background: token.colorBgElevated
                                    }}
                                    bodyStyle={{ padding: '24px 32px' }}
                                >
                                    <Space size="middle" align="center" style={{ marginBottom: 24 }}>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Text style={{ fontSize: 24 }}>{category.icon}</Text>
                                        </motion.div>
                                        <Title level={3} style={{
                                            margin: 0,
                                            color: "#012c6e"
                                        }}>
                                            {category.title}
                                        </Title>
                                    </Space>

                                    {category.items.length > 0 && (
                                        <Collapse
                                            accordion
                                            activeKey={activeKey}
                                            onChange={handlePanelChange}
                                            bordered={false}
                                            expandIconPosition="end"
                                            expandIcon={({ isActive }) => (
                                                <motion.div
                                                    animate={{ rotate: isActive ? 0 : 180 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {isActive ? (
                                                        <MinusOutlined style={{ color: "#01408e" }} />
                                                    ) : (
                                                        <PlusOutlined style={{ color: "#01408e" }} />
                                                    )}
                                                </motion.div>
                                            )}
                                        >
                                            {category.items.map((item, itemIndex) => (
                                                <Panel
                                                    header={
                                                        <motion.div
                                                            whileHover={{ x: 5,backgroundColor:"aliceblue",padding:"10px"}}
                                                            transition={{ type: 'tween', stiffness: 300 }}
                                                        >
                                                            <Text strong style={{ fontSize: 16 }}>
                                                                {item.question}
                                                            </Text>
                                                        </motion.div>
                                                    }
                                                    key={`${catIndex}-item-${itemIndex}`}
                                                    style={{
                                                        background: token.colorBgContainer,
                                                        borderRadius: 8,
                                                        marginBottom: 12,
                                                        border: 'none'
                                                    }}
                                                >
                                                    <AnimatePresence>
                                                        <motion.div
                                                            initial="closed"
                                                            animate="open"
                                                            exit="closed"
                                                            variants={panelVariants}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <Text style={{
                                                                color: token.colorTextSecondary,
                                                                paddingLeft: 24
                                                            }}>
                                                                {item.answer}
                                                            </Text>
                                                        </motion.div>
                                                    </AnimatePresence>
                                                </Panel>
                                            ))}
                                        </Collapse>
                                    )}

                                    {category.sub && category.sub.subitems.length > 0 && (
                                        <>
                                            <Divider style={{
                                                margin: '30px 0',
                                                borderColor: token.colorBorderSecondary
                                            }} />

                                            <Space size="middle" align="center" style={{ marginBottom: 24 }}>
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Text style={{ fontSize: 20 }}>{category.sub.icon}</Text>
                                                </motion.div>
                                                <Title level={4} style={{
                                                    margin: 0,
                                                    color: "#012c6e"
                                                }}>
                                                    {category.sub.title}
                                                </Title>
                                            </Space>

                                            <Collapse
                                                accordion
                                                activeKey={activeKey}
                                                onChange={handlePanelChange}
                                                bordered={false}
                                                expandIconPosition="end"
                                                expandIcon={({ isActive }) => (
                                                    <motion.div
                                                        animate={{ rotate: isActive ? 0 : 180 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {isActive ? (
                                                            <MinusOutlined style={{ color: "#01408e" }} />
                                                        ) : (
                                                            <PlusOutlined style={{ color: "#01408e" }} />
                                                        )}
                                                    </motion.div>
                                                )}
                                            >
                                                {category.sub.subitems.map((item, subIndex) => (
                                                    <Panel
                                                        header={
                                                            <motion.div
                                                                whileHover={{ x: 5,backgroundColor:"aliceblue",padding:"10px"}}
                                                                transition={{ type: 'tween', stiffness: 300 }}
                                                            >
                                                                <Text strong style={{ fontSize: 16 }}>
                                                                    {item.question}
                                                                </Text>
                                                            </motion.div>
                                                        }
                                                        key={`${catIndex}-sub-${subIndex}`}
                                                        style={{
                                                            background: token.colorBgContainer,
                                                            borderRadius: 8,
                                                            marginBottom: 12,
                                                            border: 'none'
                                                        }}
                                                    >
                                                        <AnimatePresence>
                                                            <motion.div
                                                                initial="closed"
                                                                animate="open"
                                                                exit="closed"
                                                                variants={panelVariants}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <Text style={{
                                                                    color: token.colorTextSecondary,
                                                                    paddingLeft: 24
                                                                }}>
                                                                    {item.answer}
                                                                </Text>
                                                            </motion.div>
                                                        </AnimatePresence>
                                                    </Panel>
                                                ))}
                                            </Collapse>
                                        </>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card bordered={false} style={{
                            textAlign: 'center',
                            marginTop: 40,
                            background: token.colorBgLayout,
                            borderRadius: 12
                        }}>
                            <Text style={{ fontSize: 16 }}>
                                No results found for "<Text strong>{searchTerm}</Text>". Please try a different search term.
                            </Text>
                        </Card>
                    </motion.div>
                )}

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                >
                    <Card bordered={false} style={{
                        textAlign: 'center',
                        marginTop: 40,
                        background: token.colorBgElevated,
                        borderRadius: 12,
                        boxShadow: token.boxShadowTertiary
                    }}>
                        <Title level={4} style={{ marginBottom: 16 }}>
                            Still have questions?
                        </Title>
                        <Text style={{ fontSize: 16, marginBottom: 16, display: 'block' }}>
                            We're here to help! Contact our admissions team for more information.
                        </Text>
                        <Space size="middle">
                            <motion.a
                                href="/international-relations/contact"
                                style={{
                                    color: "#01408e",
                                    fontWeight: 500
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Admissions
                            </motion.a>
                            <Text strong>|</Text>
                            <Text>
                                <Text className="text-[#01408e]" strong>Call:</Text>
                                <motion.a
                                    className="main-footer__link"
                                    href="tel:+998500305876"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    +998 50 030 58 76
                                </motion.a>
                            </Text>
                        </Space>
                    </Card>
                </motion.div>
            </Space>
        </div>
    );
};

export default FAQSection;