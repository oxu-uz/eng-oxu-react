import React from 'react';
import {Outlet} from "react-router-dom";
import FooterStatic from "../components/footerStatic.jsx";
import TopNav from "../components/navigation/TopNav.jsx";
import MidNav from "../components/navigation/MidNav.jsx";
import BotNav from "../components/navigation/BotNav.jsx";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <TopNav/>
            <MidNav/>
            {/*<BotNav/>*/}
            <main className="flex-grow">
                <Outlet/>
            </main>
            <FooterStatic/>
        </div>
    );
};

export default Layout;