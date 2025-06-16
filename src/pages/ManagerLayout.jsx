import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {Outlet, useNavigate} from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    LogoutOutlined,
    UserOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import FooterStatic from '../components/footerStatic';
import {useAuth} from '../hooks/AuthContext';
import ContactModal from "../components/ContactModal.jsx";
import {Link} from "react-scroll";
import MidNav from "../components/navigation/MidNav.jsx";
import {FaUserCheck} from "react-icons/fa";

const {Header, Sider, Content} = Layout;

const ManagerLayout = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate();
    const {logout} = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContactClick = () => {
        setIsModalOpen(true);
    };

    const handleSend = (formData) => {
        console.log("Form yuborildi:", formData);
        // Bu yerda API ga yuborish yoki boshqa action qilishingiz mumkin
    };

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Layout className="bg-[#eeeff4]" style={{minHeight: '100vh'}}>
            <MidNav/>
            {/* Header */}
            <Header className="header flex items-center px-5" style={{background: '#fff'}}>
                <img onClick={() => navigate('/')} src="/lg.svg" className="h-[55px] my-auto will-change-auto"
                     alt="Logo"/>
                {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                        className: 'trigger',
                        onClick: toggle,
                        style: {padding: '0 24px', fontSize: '18px', cursor: 'pointer'},
                    }
                )}
            </Header>
            {/* Sidebar and Content */}
            <Layout>
                <Sider
                    className="aside--left"
                    collapsible
                    collapsed={collapsed}
                    trigger={null}
                    style={{background: '#fff'}}
                >
                    <div style={{padding: '16px', textAlign: 'center', fontWeight: 'bold'}}>
                        Manager
                    </div>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['students']}>
                        <Menu.Item
                            key="students"
                            icon={<DashboardOutlined/>}
                            onClick={() => navigate('/manager/dashboard')}
                        >
                            Students
                        </Menu.Item>
                        <Menu.Item
                            key="users"
                            icon={<UserOutlined/>}
                            onClick={() => navigate('/manager/dashboard/users')}
                        >
                            Users
                        </Menu.Item>
                        <Menu.Item
                            key="applicants"
                            icon={<FaUserCheck />}
                            onClick={() => navigate('/manager/dashboard/applicants')}
                        >
                            Applicants
                        </Menu.Item>
                        <Menu.SubMenu key="news" icon={<FileTextOutlined/>} title="News">
                            <Menu.Item
                                key="category"
                                onClick={() => navigate('/manager/dashboard/category')}
                            >
                                Category
                            </Menu.Item>
                            <Menu.Item
                                key="posts"
                                onClick={() => navigate('/manager/dashboard/posts')}
                            >
                                Posts
                            </Menu.Item>
                        </Menu.SubMenu>

                        <Menu.Item
                            key="logout"
                            icon={<LogoutOutlined/>}
                            onClick={handleLogout}
                        >
                            Logout
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{margin: '24px 16px', background: '#fff',minHeight: '80vh'}}>
                    <Outlet/>
                </Content>
            </Layout>
            <FooterStatic/>
        </Layout>
    );
};

export default ManagerLayout;
