import React, {useState} from 'react';
import {Card, Row, Col, Typography, Modal, Divider, Button} from 'antd';
import {UserOutlined, RightOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const {Title, Text} = Typography;

const StructureOfFaculty = () => {
    const [visible, setVisible] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const leadershipTeam = [
        {
            id: 1,
            name: "Dr. Bhandari Kishan",
            image:"/structureFaculty/kishan.png",
            position: "Dean",
            // work_schedule: "Every day from 09.00 to 18.00",
            // address: "Bukhara city, \"Yangiabad MFY\", Gijduvan street, house 74.",
            // educational_info: [
            //     "Bukhara Medical Institute (Medical) (2011-2017)",
            //     "Bukhara State University (Chemistry) (2017-2020)",
            //     "Bukhara State University (Master's) (2020-2022)",
            // ],
        },
        {
            id: 2,
            name: "Bahronov Ashurbek Baxodirovich",
            image:"/structureFaculty/ashurbek.png",
            position: "Specialist of International relations and Admission",
            // work_schedule: "Every day from 09.00 to 18.00",
            // address: "Bukhara city, \"Yangiabad MFY\", Gijduvan street, house 74.",
            // educational_info: [
            //     "Student at Bukhara Engineering and Technology Institute (2011-2015)",
            //     "Master's student at Tashkent State Pedagogical University (2015-2017)",
            //     "Network administrator of the Information Technology Center of Bukhara State Medical Institute (September-December 2017)",
            //     "PhD student at Bukhara Engineering and Technology Institute (2018-2020)",
            //     "Assistant at the Department of \"Innovative and Information Technologies in Medicine, Biophysics\" of Bukhara State Medical Institute (2018-2022)",
            //     "Associate Professor at the Department of \"Innovative and Information Technologies in Medicine, Biophysics\" of Bukhara State Medical Institute (2022-2024)",
            //     "Associate Professor of the Department of \"General Technical Sciences\" of Asian International University, on a reciprocal basis (2022-2023)",
            //     "Dean of the Faculty of \"Social Sciences and Technology\" of Asian International University (January-August 2024)",
            //     "First Vice-Rector for Spiritual and Educational Affairs, Department of Youth Policy (August 2024 - present)",
            // ],
        },
        {
            id: 3,
            name: "Dr. Askka S Jeril",
            image:"/structureFaculty/jerry.png",
            position: "International Student Administrator",
            // work_schedule: "Every day from 09.00 to 18.00",
            // address: "Bukhara city, \"Yangiabad MFY\", Gijduvan street, house 74.",
            // educational_info: [
            //     "Bukhara State University (Physical Education) (2002-2006)",
            //     "Bukhara State University (Economics) (2006-2009)",
            //     "Bukhara State University (Master's) (2010 - 2012)",
            //     "Doctor of Philosophy (PhD) in Pedagogical Sciences, Associate Professor",
            // ],
        },
        {
            id: 4,
            name: "Baxronova Maftuna Amriddin qizi",
            image:"/structureFaculty/maftuna.png",
            position: "Supervisor",
            // work_schedule: "Every day from 09.00 to 18.00",
            // address: "Bukhara city, \"Yangiabad MFY\", Gijduvan street, house 74.",
            // educational_info: [
            //     "Tashkent Institute of National Economy (1985)",
            //     "Academy of State and Society Building under the President of the Republic of Uzbekistan (Physical Education) (Master's degree) (2003)",
            // ],
        },
        {
            id: 5,
            name: "Dr. Badal Krishna Prasad",
            image:"/structureFaculty/krishna.png",
            position: "Head of the academics",
            // work_schedule: "Tuesday, Thursday and Friday from 15:00 to 17:00",
            // address: "Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74",
            // educational_info: [
            //     "Management Development Institute of Singapore in Tashkent (2016-2020) Bachelors of Business Management",
            // ],
        },
        {
            id: 6,
            name: "Dr. Khadka Ravi Roshan",
            image:"/structureFaculty/Ravi.png",
            position: "Head of the clinical skills",
            // work_schedule: "Tuesday, Thursday and Friday from 15:00 to 17:00",
            // address: "Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74",
            // educational_info: [
            //     "Management Development Institute of Singapore in Tashkent (2016-2020) Bachelors of Business Management",
            // ],
        },
        {
            id: 7,
            name: "Gyawali Meena",
            image:"/structureFaculty/Meena.png",
            position: "Head of the scientific research and co-curricular  activities",
            // work_schedule: "Tuesday, Thursday and Friday from 15:00 to 17:00",
            // address: "Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74",
            // educational_info: [
            //     "Management Development Institute of Singapore in Tashkent (2016-2020) Bachelors of Business Management",
            // ],
        },
        {
            id: 8,
            name: "Sharma Namrata",
            image:"/structureFaculty/Namrata.png",
            position: "Head of  extra-curricular activities ",
            // work_schedule: "Tuesday, Thursday and Friday from 15:00 to 17:00",
            // address: "Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74",
            // educational_info: [
            //     "Management Development Institute of Singapore in Tashkent (2016-2020) Bachelors of Business Management",
            // ],
        },
        {
            id: 9,
            name: "Mutti-Ur Rehman",
            image:"/structureFaculty/Mutti Ur rehman.png",
            position: "Associate Professor, Researcher",
            // work_schedule: "Tuesday, Thursday and Friday from 15:00 to 17:00",
            // address: "Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74",
            // educational_info: [
            //     "Management Development Institute of Singapore in Tashkent (2016-2020) Bachelors of Business Management",
            // ],
        },{
            id: 10,
            name: "Fouzia Amir",
            image:"/structureFaculty/Amir.png",
            position: "Associate Professors, Researcher",
            // work_schedule: "Tuesday, Thursday and Friday from 15:00 to 17:00",
            // address: "Bukhara city, Yangiobod MFY, Gijduvan St, Apt 74",
            // educational_info: [
            //     "Management Development Institute of Singapore in Tashkent (2016-2020) Bachelors of Business Management",
            // ],
        },
    ];

    const showModal = (member) => {
        setSelectedMember(member);
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const navItems = [
        {label: "Academics", path: "/academics/academic-calendar"},
        {label: "Study Plan/Curriculum", path: "/academics/study-plan"},
        {label: "Structure of the faculty", path: "/academics/faculty-structure"},
    ];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container-fluid statistics w-full mb-6 h-[150px]"
                style={{
                    backgroundImage: "url('/4343.png')",
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
                    Structure of the faculty
                </Title>
            </motion.div>

            <div className="container gap-5 mx-auto flex flex-col md:flex-row px-5 mb-10">
                <div className="w-full md:w-4/5 overflow-hidden">
                    <Row gutter={[24, 24]} justify="center">
                        {leadershipTeam.map(member => (
                            <Col key={member.id} xs={24} sm={12} md={8}>
                                <div className="flex flex-col items-center gap-5">
                                    <img src={member.image} className="h-[150px] w-[150px]"/>
                                    <div className="text-center">
                                        <h6 className="text-[#012152]">{member.name}</h6>
                                        <div className="line"></div>
                                        <p className="text-gray-800 font-medium">{member.position}</p>
                                        <button
                                            onClick={() => showModal(member)}
                                            style={{color: '#1890ff'}}
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </Col>


                        ))}
                    </Row>

                    <Modal
                        title={null}
                        visible={visible}
                        onCancel={handleCancel}
                        footer={null}
                        width={700}
                        bodyStyle={{padding: 0}}
                    >
                        {selectedMember && (
                            <div style={{padding: 20}}>
                                <Row gutter={24}>
                                    <Col span={8}>
                                        <img src={selectedMember.image} className="h-[150px] w-[150px]"/>
                                    </Col>
                                    <Col span={16}>
                                        <Title level={3} style={{marginBottom: 8}}>
                                            {selectedMember.name}
                                        </Title>
                                        <Text strong style={{
                                            display: 'block',
                                            color: '#1890ff',
                                            marginBottom: 16,
                                            fontSize: 16
                                        }}>
                                            {selectedMember.position}
                                        </Text>
                                        <Divider style={{margin: '16px 0'}}/>
                                        <Text style={{fontSize: 15, lineHeight: 1.7}}>
                                            {selectedMember.work_schedule}
                                        </Text>
                                        <Text style={{fontSize: 15, lineHeight: 1.7}}>
                                            {selectedMember.address}
                                        </Text>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </Modal>
                </div>

                <aside className="w-full md:w-1/5 overflow-hidden">
                    <ul className="sideNav">
                        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
    <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
        Academics
        <img
            className="h-2.5 transform transition-transform duration-300 group-hover:translate-x-2"
            src="/arrow.svg"
            alt="Arrow"
        />
    </span>
                            <span className="text-7xl absolute font-bold opacity-10">AIU</span>
                            <img
                                src="/Vector.svg"
                                className="absolute opacity-10 h-20 right-0 bottom-0"
                                alt="Vector"
                            />
                        </li>

                        {navItems.map((item, index) => (
                            <li
                                onClick={() => navigate(item.path)}
                                key={index}
                                className={`sideNav-links transition-colors cursor-pointer ${
                                    location.pathname === item.path ? "sideNav-active" : ""
                                }`}
                            >
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>

        </div>
    );
};

export default StructureOfFaculty;