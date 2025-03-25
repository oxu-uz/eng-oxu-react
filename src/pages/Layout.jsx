import React, { useState } from 'react';
import {Outlet} from "react-router-dom";
import TopNav from "../components/navigation/TopNav.jsx";
import BotNav from "../components/navigation/BotNav.jsx";
import {Facebook, Instagram} from "lucide-react";
import FooterStatic from "../components/footerStatic.jsx";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <div >
         <nav className="bg-gradient-to-r lg:block hidden from-[#092076] to-[#0a37b3] border-b border-[hsla(0,0%,100%,.1)] py-2 text-white">
  <div className="container mx-auto flex flex-row items-center justify-center md:justify-between gap-4">
    {/* Блок 1 */}
    <div className="flex flex-col items-center text-center">
      <span className="text-base font-semibold leading-tight">
      info@oxu.uz
      </span>
      <span className="text-xs opacity-80">
        Cooperative email
      </span>
    </div>

    {/* Разделитель */}
    <div className="block h-6 border-l border-white/20"></div>

    {/* Блок 2 */}
    <div className="flex flex-col items-center text-center">
      <span className="text-base font-semibold leading-tight">
      +998 55 305 00 09
      </span>
      <span className="text-xs opacity-80">
      Hotline for applicants
      </span>
    </div>

    {/* Разделитель */}
    <div className="block h-6 border-l border-white/20"></div>

    {/* Блок 3 */}
    <div className="flex flex-col items-center text-center">
      <span className="text-base font-semibold leading-tight">
        Contacts
      </span>
      <span className="text-xs opacity-80">
       Address and telephone
      </span>
    </div>

    {/* Разделитель */}
    <div className="block h-6 border-l border-white/20"></div>

    {/* Блок соц сетей */}
    <div className="flex flex-col items-center text-center">
      {/* <span className="text-base font-semibold leading-tight">
        Social links
      </span> */}
     <div class="flex items-center  divide-x divide-[hsla(0,0%,100%,.15)] ">
        <a data-v-4b8a97f0="" target="_blank" href="https://www.facebook.com/people/Osiyo-Xalqaro-Universiteti/100088012691808/?sk=about">
        <i data-v-4b8a97f0=""><svg class="mx-1" data-v-4b8a97f0="" width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-4b8a97f0="" d="M19.554 8.8756H21.5015V5.4836C21.1655 5.43737 20.01 5.33337 18.6642 5.33337C15.8562 5.33337 13.9327 7.0996 13.9327 10.3458V13.3334H10.834V17.1254H13.9327V26.6667H17.7318V17.1263H20.7051L21.1771 13.3343H17.7309V10.7218C17.7318 9.62582 18.0269 8.8756 19.554 8.8756Z" fill="white"></path></svg></i></a> <a data-v-4b8a97f0="" target="_blank" href="https://www.instagram.com/aiu_uzbekistan/"><i data-v-4b8a97f0=""><svg class="mx-1" data-v-4b8a97f0="" width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-4b8a97f0="" d="M16.0031 10.5226C12.9782 10.5226 10.5293 12.9741 10.5293 15.9964C10.5293 19.0213 12.9809 21.4702 16.0031 21.4702C19.028 21.4702 21.4769 19.0186 21.4769 15.9964C21.4769 12.9715 19.0253 10.5226 16.0031 10.5226V10.5226ZM16.0031 19.5493C14.0395 19.5493 12.4502 17.959 12.4502 15.9964C12.4502 14.0337 14.0404 12.4435 16.0031 12.4435C17.9657 12.4435 19.556 14.0337 19.556 15.9964C19.5569 17.959 17.9666 19.5493 16.0031 19.5493V19.5493Z" fill="white"></path><path data-v-4b8a97f0="" d="M20.3971 5.40136C18.4345 5.30981 13.5731 5.31425 11.6087 5.40136C9.88246 5.48225 8.35979 5.89914 7.13223 7.12669C5.08068 9.17825 5.3429 11.9427 5.3429 15.9969C5.3429 20.1462 5.11179 22.8467 7.13223 24.8671C9.19179 26.9258 11.9962 26.6565 16.0025 26.6565C20.1127 26.6565 21.5313 26.6591 22.9847 26.0965C24.9607 25.3294 26.4522 23.5631 26.598 20.3907C26.6905 18.4271 26.6851 13.5667 26.598 11.6022C26.422 7.85736 24.4122 5.58625 20.3971 5.40136V5.40136ZM23.5038 23.5098C22.1589 24.8547 20.2931 24.7347 15.9767 24.7347C11.5322 24.7347 9.75001 24.8005 8.44957 23.4965C6.95179 22.0058 7.2229 19.612 7.2229 15.9827C7.2229 11.0716 6.7189 7.53469 11.6478 7.28225C12.7802 7.24225 13.1136 7.22892 15.9642 7.22892L16.0042 7.25558C20.7411 7.25558 24.4576 6.75958 24.6807 11.6876C24.7313 12.812 24.7429 13.1498 24.7429 15.996C24.742 20.3889 24.8256 22.1818 23.5038 23.5098V23.5098Z" fill="white"></path><path data-v-4b8a97f0="" d="M21.6951 11.5859C22.4016 11.5859 22.9742 11.0133 22.9742 10.3068C22.9742 9.60039 22.4016 9.02771 21.6951 9.02771C20.9887 9.02771 20.416 9.60039 20.416 10.3068C20.416 11.0133 20.9887 11.5859 21.6951 11.5859Z" fill="white"></path></svg></i></a> <a data-v-4b8a97f0="" target="_blank" href="https://t.me/Asiainternationaluniversity_uz"><i data-v-4b8a97f0=""><svg class="mx-1" data-v-4b8a97f0="" width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-4b8a97f0="" d="M13.7048 18.8275L13.3519 23.7911C13.8568 23.7911 14.0755 23.5742 14.3377 23.3137L16.7048 21.0515L21.6097 24.6435C22.5093 25.1449 23.143 24.8809 23.3857 23.816L26.6053 8.72975L26.6061 8.72886C26.8915 7.39908 26.1253 6.87908 25.2488 7.2053L6.32436 14.4506C5.03281 14.952 5.05236 15.672 6.10481 15.9982L10.943 17.5031L22.1813 10.4711C22.7101 10.1209 23.191 10.3146 22.7955 10.6649L13.7048 18.8275Z" fill="white"></path></svg></i></a> <a data-v-4b8a97f0="" target="_blank" href="https://www.youtube.com/@Osiyo.Xalqaro.Universiteti" class="pl-1"><svg class="mx-1" data-v-4b8a97f0="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-4b8a97f0="" d="M19.0155 3.50851H4.98449C2.23163 3.50851 0 5.74015 0 8.49301V15.507C0 18.2599 2.23163 20.4915 4.98449 20.4915H19.0155C21.7684 20.4915 24 18.2599 24 15.507V8.49301C24 5.74015 21.7684 3.50851 19.0155 3.50851ZM15.6445 12.3413L9.08177 15.4713C8.9069 15.5547 8.7049 15.4272 8.7049 15.2335V8.77778C8.7049 8.5813 8.91221 8.45396 9.08744 8.54278L15.6502 11.8685C15.8453 11.9673 15.8419 12.2472 15.6445 12.3413Z" fill="white"></path></svg></a></div>
    </div>
  </div>
</nav>


            <TopNav/>
            <BotNav/>
            <div className="relative">
            <Outlet/>
            </div>
            <FooterStatic/>
        </div>
    );
};

export default Layout;
