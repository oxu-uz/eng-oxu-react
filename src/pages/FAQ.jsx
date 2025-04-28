import React, { useState } from 'react';
import { Collapse, Divider, Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Title, Text } = Typography;

const FAQSection = () => {
    const [activeKey, setActiveKey] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const faqCategories = [
        {
            title: 'Admissions',
            items: [
                {
                    question: 'What are the admission requirements for international students?',
                    answer: 'International students need to submit academic transcripts, proof of English proficiency (IELTS/TOEFL), a personal statement, letters of recommendation, and a copy of their passport. Some programs may have additional requirements.'
                },
                {
                    question: 'What is the application deadline?',
                    answer: 'We have rolling admissions, but we recommend applying at least 6 months before your intended start date for visa processing.'
                },
                {
                    question: 'Do you offer conditional admission?',
                    answer: 'Yes, conditional admission may be granted to students who meet academic requirements but need to improve their English proficiency.'
                }
            ]
        },
        {
            title: 'Tuition & Fees',
            items: [
                {
                    question: 'What is the tuition fee for international students?',
                    answer: 'Tuition varies by program. Undergraduate programs range from $15,000 to $25,000 per year, while graduate programs range from $18,000 to $30,000 per year.'
                },
                {
                    question: 'Are scholarships available for international students?',
                    answer: 'Yes, we offer merit-based scholarships ranging from 10% to 50% of tuition. Some departments also offer assistantships and research grants.'
                }
            ]
        },
        {
            title: 'Student Life',
            items: [
                {
                    question: 'What housing options are available?',
                    answer: 'We offer on-campus dormitories, shared apartments, and can assist with finding homestay families. All housing options are within walking distance of campus.'
                },
                {
                    question: 'What student support services are available?',
                    answer: 'We provide academic advising, career counseling, mental health services, international student support, disability services, and 24/7 campus security.'
                }
            ]
        },
        {
            title: 'Visa & Immigration',
            items: [
                {
                    question: 'What type of visa do I need?',
                    answer: 'Most international students will need a student visa (F-1 for the US or equivalent for other countries). Our international office will guide you through the process.'
                },
                {
                    question: 'Can I work while studying?',
                    answer: 'Yes, students can work on campus up to 20 hours per week during term time and full-time during breaks. Some programs also offer curricular practical training.'
                }
            ]
        }
    ];

    const filteredCategories = faqCategories.map(category => ({
        ...category,
        items: category.items.filter(item =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.items.length > 0);

    const handlePanelChange = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <div className="faq-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
                Frequently Asked Questions
            </Title>

            <div style={{ marginBottom: 30 }}>
                <Input
                    size="large"
                    placeholder="Search FAQs..."
                    prefix={<SearchOutlined />}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ maxWidth: 500, margin: '0 auto', display: 'flex' }}
                />
            </div>

            {filteredCategories.length > 0 ? (
                filteredCategories.map((category, catIndex) => (
                    <div key={catIndex} style={{ marginBottom: 40 }}>
                        <Title level={3} style={{ color: '#1890ff', marginBottom: 20 }}>
                            {category.title}
                        </Title>

                        <Collapse
                            accordion
                            activeKey={activeKey}
                            onChange={handlePanelChange}
                            bordered={false}
                            className="faq-accordion"
                        >
                            {category.items.map((item, itemIndex) => (
                                <Panel
                                    header={<Text strong>{item.question}</Text>}
                                    key={`${catIndex}-${itemIndex}`}
                                    className="faq-panel"
                                >
                                    <Text>{item.answer}</Text>
                                </Panel>
                            ))}
                        </Collapse>

                        {catIndex < filteredCategories.length - 1 && (
                            <Divider style={{ margin: '30px 0' }} />
                        )}
                    </div>
                ))
            ) : (
                <Text style={{ textAlign: 'center', display: 'block', marginTop: 40 }}>
                    No results found for "{searchTerm}". Please try a different search term.
                </Text>
            )}

            <div style={{ textAlign: 'center', marginTop: 40 }}>
                <Text strong style={{ display: 'block', marginBottom: 10 }}>
                    Still have questions?
                </Text>
                <Text>
                    Contact our <a href="/international-relations/contact">Admissions Office</a> or call +1 (555) 123-4567
                </Text>
            </div>
        </div>
    );
};

export default FAQSection;