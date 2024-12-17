import React from 'react';
import {Outlet} from "react-router-dom";
import TopNav from "../components/navigation/TopNav.jsx";
import BotNav from "../components/navigation/BotNav.jsx";
import {Facebook, Instagram} from "lucide-react";

const Layout = () => {
    return (
        <div>
            {/*<div className="icon-bar">*/}
            {/*    <a href="#" className="youtube">*/}
            {/*       <img src="/Social%20Icons-1.svg"/>*/}
            {/*    </a>*/}
            {/*    <a href="#" className="facebook">*/}
            {/*        <img src="/Social%20Icons.svg"/>*/}
            {/*    </a>*/}
            {/*    <a href="#" className="twitter">*/}
            {/*        <img src="/Social%20Icons-2.svg"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
            <TopNav/>
            <BotNav/>
            <Outlet/>
        </div>
    );
};

export default Layout;
