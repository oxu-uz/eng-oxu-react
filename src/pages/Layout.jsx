import React, {useEffect} from 'react';
import { Outlet, useLocation } from "react-router-dom";
import FooterStatic from "../components/footerStatic.jsx";
import TopNav from "../components/navigation/TopNav.jsx";
import MidNav from "../components/navigation/MidNav.jsx";
import BotNav from "../components/navigation/BotNav.jsx";

const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            <TopNav/>
            <MidNav/>
            {/* Render BotNav on all pages except homepage */}
            {!isHomePage && <BotNav/>}
            <main className="flex-grow -mt-[1px]">
                <Outlet/>
            </main>
            <FooterStatic/>
        </div>
    );
};

export default Layout;