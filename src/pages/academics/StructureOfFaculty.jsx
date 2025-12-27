import React, {useState} from 'react';
import {Card, Row, Col, Typography, Modal, Divider, Button} from 'antd';
import {UserOutlined, RightOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const {Title, Text} = Typography;

const StructureOfFaculty = () => {
    const [visible, setVisible] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const DEFAULT_AVATAR = "/structureFaculty/default.png";

    const leadershipTeam = [
        { id: 1, name: "Dr. Bhandari Kishan", image: "/structureFaculty/kishan.png", position: "Dean" },
    
        { id: 2, name: "Zarnigor Obidovna Djalilova", image: '/IMG_0167.PNG', position: "Vice dean for students Development and Research" },
    
        { id: 3, name: "Mirshod Murodillo o'g'li Abdulloev", image: '/34.jpg', position: "Vice dean for the academic affairs" },
    
        { id: 4, name: "Dr. Askka S Jeril", image: "/structureFaculty/jerry.png", position: "International Student Administrator" },
    
        { id: 5, name: "Bahronov Ashurbek Baxodirovich", image: "/structureFaculty/ashurbek.png", position: "Specialist of International relations and Admission" },
    
        { id: 6, name: "Rahimova Gulnoza Asrorovna", image: '/Rahimova Gulnoza Asrorovna.jpg', position: "Methodist" },
    
        { id: 7, name: "Dr. Badal Krishna Prasad", image: "/structureFaculty/krishna.png", position: "Head of the academics" },
    
        { id: 8, name: "Dr. Khadka Ravi Roshan", image: "/structureFaculty/Ravi.png", position: "Head of the clinical skills" },
    
        { id: 9, name: "Gyawali Meena", image: "/structureFaculty/Meena.png", position: "Head of the scientific research and co-curricular  activities" },
    
        { id: 10, name: "Sharma Namrata", image: "/structureFaculty/Namrata.png", position: "Head of  extra-curricular activities" },
    
        { id: 11, name: "Dr. Rashad Mahmud", image: '/Rashad Mahmud.png', position: "Professor" },
    
        { id: 12, name: "Mustafa Mohamed Saleh", image: '/Mustafa Mohamed Saleh.jpg', position: "Senior Teacher" },
    
        { id: 13, name: "Saidova Laziza", image: '/Saidova Laziza.jpg', position: "Supervisor, Student Academic & support" },
    
        { id: 14, name: "Bobur Nurullayev", image: '/Bobur Nurullayev.jpg', position: "Supervisor, Student Academic & support" },
    
        { id: 15, name: "Hossny Abd Elhamid esmaeil Mohammed Rezk", image: '/Hossny Abd Elhamid esmaeil Mohammed Rezk.jpg', position: "Supervisor, Student Academic & support" },
    
        { id: 16, name: "JOHN NIBIN JOHNSON", image: '/JOHN NIBIN JOHNSON.png', position: "Supervisor, Student Accommodation" },
    
        { id: 17, name: "AARTHI SOUNDARA RAJAN", image: '/AARTHI SOUNDARA RAJAN.jpeg', position: "Supervisor, Student Accommodation" },
    
        { id: 18, name: "SIVAPRAKASH SIVADHAS", image: '/SIVAPRAKASH SIVADHAS.jpg', position: "Supervisor, Student Accommodation / Senior Teacher" },
        { id: 19, name: "Amit Kamboj", image: '/Amit Kamboj.jpg', position: "Communications & Marketing Officer" },
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
                                    <img src={member.image} className="h-[150px] rounded-full object-cover w-[150px]"/>
                                    <div className="text-center">
                                        <h6 className="text-[#012152]">{member.name}</h6>
                                        <div className="line"></div>
                                        <p className="text-gray-800 font-medium">{member.position}</p>
                                        {/*<button*/}
                                        {/*    onClick={() => showModal(member)}*/}
                                        {/*    style={{color: '#1890ff'}}*/}
                                        {/*>*/}
                                        {/*    Read More*/}
                                        {/*</button>*/}
                                    </div>
                                </div>
                            </Col>


                        ))}
                    </Row>

                    {/*<Modal*/}
                    {/*    title={null}*/}
                    {/*    visible={visible}*/}
                    {/*    onCancel={handleCancel}*/}
                    {/*    footer={null}*/}
                    {/*    width={700}*/}
                    {/*    bodyStyle={{padding: 0}}*/}
                    {/*>*/}
                    {/*    {selectedMember && (*/}
                    {/*        <div style={{padding: 20}}>*/}
                    {/*            <Row gutter={24}>*/}
                    {/*                <Col span={8}>*/}
                    {/*                    <img src={selectedMember.image} className="h-[150px] w-[150px]"/>*/}
                    {/*                </Col>*/}
                    {/*                <Col span={16}>*/}
                    {/*                    <Title level={3} style={{marginBottom: 8}}>*/}
                    {/*                        {selectedMember.name}*/}
                    {/*                    </Title>*/}
                    {/*                    <Text strong style={{*/}
                    {/*                        display: 'block',*/}
                    {/*                        color: '#1890ff',*/}
                    {/*                        marginBottom: 16,*/}
                    {/*                        fontSize: 16*/}
                    {/*                    }}>*/}
                    {/*                        {selectedMember.position}*/}
                    {/*                    </Text>*/}
                    {/*                    <Divider style={{margin: '16px 0'}}/>*/}
                    {/*                    <Text style={{fontSize: 15, lineHeight: 1.7}}>*/}
                    {/*                        {selectedMember.work_schedule}*/}
                    {/*                    </Text>*/}
                    {/*                    <Text style={{fontSize: 15, lineHeight: 1.7}}>*/}
                    {/*                        {selectedMember.address}*/}
                    {/*                    </Text>*/}
                    {/*                </Col>*/}
                    {/*            </Row>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</Modal>*/}
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