import React, { useState } from 'react';
import logo from "/logo_aiu.svg";
import bg from "../../assets/footerbg.svg.svg";
import {motion} from 'framer-motion';
import {ChevronDown, MenuIcon} from "lucide-react";
import { useAuth } from '../../hooks/AuthContext';
import { Link } from 'react-router-dom';

const navItems = [
  { label: "Home", link: "/" },
  {
    label: "About",
    link: "/about",
    dropdown: [
      { label: "Vision", link: "/about/aiu/vision" },
      { label: "Mission", link: "/about/aiu/mission" },
      { label: "Message from the Rector", link: "/about/leadership" },
      { label: "Structure of the university", link: "/about/aiu/structure-of-university" },
      { label: "Regulatory Documents", link: "/about/aiu/regulatory-documents" },
    ],
  },
  {
    label: "Academics",
    link: "/admissions",
    dropdown: [
      { label: "Academic Calendar", link: "/academics/academic-calendar" },
      { label: "Study Plan/ Curriculum", link: "/academics/study-plan" },
      { label: "Faculty development plan", link: "/about/aiu/faculty-development-plan" },
      { label: "Structure of the faculty", link: "/about/aiu/faculty-structure" },
      { label: "Department of General Science", link: "/about/departments/general-science" },
      { label: "Department of Fundamental Medicine", link: "/about/departments/fundamental-medicine" },
      { label: "Department of Clinical Science", link: "/about/departments/clinical-science" },
    ],
  },
  { label: "International relations", link: "/about/aiu/international-relations" },
  {
    label: "Student Life in AIU",
    link: "/schools",
    dropdown: [
      { label: "Council of the Academic Activities", link: "/academic-council" },
      { label: "Council for the Scientific Activities", link: "/scientific-council" },
      { label: "Council for Sport", link: "/sports-council" },
      { label: "Council for Cultural Activities", link: "/cultural-council" },
      { label: "Council for IT/ Media", link: "/it-media-council" },
    ],
  },
  {
    label: "About Uzbekistan",
    link: "/experience",
    dropdown: [
      { label: "About Uzbekistan", link: "/about-uzbekistan" },
      { label: "Life in Bukhara", link: "/life-in-bukhara" },
    ],
  },
  { 
    label: "Admission", 
    link: "/society",
    dropdown: [
      { label: "Find program", link: "/find-programs" },
      { label: "Scholarship", link: "/scholarships" },
      { label: "Tuition and Cost", link: "/tuition-fees" },
      { 
        label: "For partners / For applicants", 
        link: "/research/labs", 
        submenu: [
          { label: "Login", link: "/md" },
        ]
      },
    ],
  },
  { label: "Gallery", link: "/gallery" },
  { label: "Contact", link: "/international-relations" },
];

// Компонент для мобильного пункта меню с возможностью вложенности
const MobileMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-blue-900">
      {item.dropdown ? (
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center py-3 px-4 text-white capitalize lg:uppercase lg:text-base text-sm focus:outline-none"
          >
            <span>{item.label}</span>
            <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} size={16} />
          </button>
          {open && (
            <div className="ml-4">
              {item.dropdown.map((subitem, index) =>
                subitem.submenu ? (
                  // Если есть вложенное подменю, рендерим его рекурсивно
                  <MobileMenuItem key={index} item={subitem} />
                ) : (
                  <a
                    key={index}
                    href={subitem.link}
                    className="block py-3 px-4 capitalize lg:uppercase lg:text-base text-sm  text-white hover:bg-[#072799]"
                  >
                    {subitem.label}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      ) : (
        <a
          href={item.link}
          className="block py-3 px-4 text-white capitalize lg:uppercase lg:text-base text-sm  hover:bg-[#072799]"
        >
          {item.label}
        </a>
      )}
    </div>
  );
};


const TopNav = () => {
    const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const getUserRole = () => {
        if (user && user.role) return user.role;
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const parsed = JSON.parse(storedUser);
            return parsed.role;
          } catch (e) {
            console.error("Error parsing stored user:", e);
          }
        }
        return null;
      };


      const getPersonalCabinetPath = () => {
        const role = getUserRole();
        if (!role) return '/login';
        switch (role) {
          case 'student':
            return '/student/dashboard';
          case 'manager':
            return '/manager/dashboard';
          case 'agent':
            return '/agent/dashboard';
          case 'admin':
            return '/admin/dashboard';
          default:
            return '/login';
        }
      };


    
    return (
<>
<div
            className="top-nav bg-gradient-to-r from-[#092076] to-[#0a37b3] lg:px-10 px-5 overflow-hidden h-[120px] border-b border-[hsla(0,0%,100%,.2)] relative flex justify-between">
            <img src={logo} className="lg:h-20 h-[68px] lg:my-auto my-0 mt-2 z-10"/>


    

           <div className='flex gap-5 items-center'>
           <div className="lg:block hidden pt-14">
                <div className="main-panel__right ">
                    {/* Форма будет видима только на десктопе */}
                    <form
                        className="main-input hidden md:flex"
                        // action="https://www.hse.ru/search/index.html"
                    >
                        <button className="main-input__button" title="Поиск">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity="0.7">
                                    <path
                                        d="M16.84 14.8446C17.5973 13.7072 18.0009 12.3711 18 11.0046C18.0021 9.44672 17.4844 7.93263 16.5289 6.70213C15.5733 5.47162 14.2347 4.59504 12.7248 4.21118C11.2149 3.82731 9.62007 3.95812 8.1929 4.58287C6.76573 5.20762 5.58776 6.29062 4.84552 7.66037C4.10328 9.03011 3.83919 10.6083 4.09508 12.1451C4.35096 13.6819 5.11219 15.0894 6.25823 16.1447C7.40426 17.2 8.8696 17.8429 10.4222 17.9715C11.9748 18.1001 13.526 17.7071 14.83 16.8546L18 20.0046L20 18.0046L16.84 14.8446ZM6 11.0046C6 10.0157 6.29325 9.04904 6.84266 8.22679C7.39206 7.40455 8.17296 6.76368 9.08659 6.38525C10.0002 6.00681 11.0056 5.90779 11.9755 6.10072C12.9454 6.29364 13.8363 6.76985 14.5355 7.46911C15.2348 8.16837 15.711 9.05929 15.9039 10.0292C16.0969 10.9991 15.9978 12.0044 15.6194 12.9181C15.241 13.8317 14.6001 14.6126 13.7779 15.162C12.9556 15.7114 11.9889 16.0046 11 16.0046C9.67392 16.0046 8.40215 15.4779 7.46447 14.5402C6.52679 13.6025 6 12.3307 6 11.0046Z"
                                        fill="white"
                                    />
                                </g>
                            </svg>
                        </button>
                        <input
                            className="main-input__field placeholder:text-sm"
                            placeholder="Search..."
                            name="text"
                            defaultValue=""
                        />
                        <input type="hidden" name="searchid" defaultValue={2284688}/>
                        <input type="hidden" name="simple" defaultValue={1}/>
                    </form>
                    <span
                        className="control control_search"
                        title="Search..."
                    ></span>
                </div>
            </div>

<div className=' self-end text-sm mb-4.5 '>
<a href={getPersonalCabinetPath()} className="text-white hover:underline">
            Personal Cabinet
          </a>

</div>
           
           </div>
           <div className="md:hidden">
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="text-white focus:outline-none"
                    >
                      {mobileMenuOpen ?<MenuIcon size="25" className="my-7 lg:hidden block"/> :  <MenuIcon size="25" className="my-7 lg:hidden block"/>}
                    </button>
                  </div>


            {/* Top Navigation Links */}
            <div className="top-nav-sup bg-[#072799] absolute right-0 lg:top-0 bottom-0  divide-x divide-[hsla(0,0%,100%,.15)]  flex h-max z-10">
                {/* <a className=" lg:text-sm text-xs p-3 lg:px-4 px-2 cursor-pointer transition-colors top-nav-sup-link ">Contact
                    us</a> */}
                <a className=" lg:text-sm text-xs p-3 lg:px-4 px-2 cursor-pointer transition-colors top-nav-sup-link ">Library</a>
                <a className=" lg:text-sm text-xs p-3 lg:px-4 px-2 cursor-pointer transition-colors top-nav-sup-link ">News &
                    Events</a>
                <a className=" lg:text-sm text-xs p-3 lg:px-4 px-2 cursor-pointer transition-colors top-nav-sup-link ">Career @
                    OXU</a>
                <a className=" lg:text-sm text-xs p-3 lg:px-4 px-2 cursor-pointer transition-colors top-nav-sup-link ">Apply
                    Now</a>
            </div>

        </div>

{mobileMenuOpen && (
  <div className="md:hidden bg-gradient-to-r from-[#092076] to-[#0a37b3]">
    <nav className="bg-gradient-to-r from-[#092076] to-[#0a37b3] border-b border-[hsla(0,0%,100%,.1)] py-3 text-white">
  <div className="container mx-auto px-4 flex flex-wrap items-center justify-center md:justify-between gap-4">
    {/* Блок 1 */}
    <div className="flex flex-col items-center text-center">
      <span className="text-sm font-semibold leading-tight">
        info@oxu.uz
      </span>
      <span className="text-xs opacity-80">
        Cooperative email
      </span>
    </div>

    {/* Разделитель (скрываем на маленьких экранах, показываем на md и выше) */}
    <div className="block h-6 border-l border-white/20"></div>

    {/* Блок 2 */}
    <div className="flex flex-col items-center text-center">
      <span className="text-sm font-semibold leading-tight">
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
      <span className="text-sm font-semibold leading-tight">
        Contacts
      </span>
      <span className="text-xs opacity-80">
        Address and telephone
      </span>
    </div>

    {/* Разделитель */}
    <div className="block h-6 border-l border-white/20"></div>

    {/* Блок соцсетей */}
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center divide-x divide-[hsla(0,0%,100%,.15)]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/people/Osiyo-Xalqaro-Universiteti/100088012691808/?sk=about"
        >
          <svg
            className="mx-1"
            width="26"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.554 8.8756H21.5015V5.4836C21.1655 5.43737 20.01 5.33337 18.6642 5.33337C15.8562 5.33337 13.9327 7.0996 13.9327 10.3458V13.3334H10.834V17.1254H13.9327V26.6667H17.7318V17.1263H20.7051L21.1771 13.3343H17.7309V10.7218C17.7318 9.62582 18.0269 8.8756 19.554 8.8756Z"
              fill="white"
            ></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/aiu_uzbekistan/"
        >
          <svg
            className="mx-1"
            width="26"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0031 10.5226C12.9782 10.5226 10.5293 12.9741 10.5293 15.9964C10.5293 19.0213 12.9809 21.4702 16.0031 21.4702C19.028 21.4702 21.4769 19.0186 21.4769 15.9964C21.4769 12.9715 19.0253 10.5226 16.0031 10.5226Z"
              fill="white"
            ></path>
            <path
              d="M20.3971 5.40136C18.4345 5.30981 13.5731 5.31425 11.6087 5.40136C9.88246 5.48225 8.35979 5.89914 7.13223 7.12669C5.08068 9.17825 5.3429 11.9427 5.3429 15.9969C5.3429 20.1462 5.11179 22.8467 7.13223 24.8671C9.19179 26.9258 11.9962 26.6565 16.0025 26.6565C20.1127 26.6565 21.5313 26.6591 22.9847 26.0965C24.9607 25.3294 26.4522 23.5631 26.598 20.3907C26.6905 18.4271 26.6851 13.5667 26.598 11.6022C26.422 7.85736 24.4122 5.58625 20.3971 5.40136V5.40136ZM23.5038 23.5098C22.1589 24.8547 20.2931 24.7347 15.9767 24.7347C11.5322 24.7347 9.75001 24.8005 8.44957 23.4965C6.95179 22.0058 7.2229 19.612 7.2229 15.9827C7.2229 11.0716 6.7189 7.53469 11.6478 7.28225C12.7802 7.24225 13.1136 7.22892 15.9642 7.22892L16.0042 7.25558C20.7411 7.25558 24.4576 6.75958 24.6807 11.6876C24.7313 12.812 24.7429 13.1498 24.7429 15.996C24.742 20.3889 24.8256 22.1818 23.5038 23.5098V23.5098Z"
              fill="white"
            ></path>
            <path
              d="M21.6951 11.5859C22.4016 11.5859 22.9742 11.0133 22.9742 10.3068C22.9742 9.60039 22.4016 9.02771 21.6951 9.02771C20.9887 9.02771 20.416 9.60039 20.416 10.3068C20.416 11.0133 20.9887 11.5859 21.6951 11.5859Z"
              fill="white"
            ></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/Asiainternationaluniversity_uz"
        >
          <svg
            className="mx-1"
            width="26"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7048 18.8275L13.3519 23.7911C13.8568 23.7911 14.0755 23.5742 14.3377 23.3137L16.7048 21.0515L21.6097 24.6435C22.5093 25.1449 23.143 24.8809 23.3857 23.816L26.6053 8.72975L26.6061 8.72886C26.8915 7.39908 26.1253 6.87908 25.2488 7.2053L6.32436 14.4506C5.03281 14.952 5.05236 15.672 6.10481 15.9982L10.943 17.5031L22.1813 10.4711C22.7101 10.1209 23.191 10.3146 22.7955 10.6649L13.7048 18.8275Z"
              fill="white"
            ></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/@Osiyo.Xalqaro.Universiteti"
          className="pl-1"
        >
          <svg
            className="mx-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0155 3.50851H4.98449C2.23163 3.50851 0 5.74015 0 8.49301V15.507C0 18.2599 2.23163 20.4915 4.98449 20.4915H19.0155C21.7684 20.4915 24 18.2599 24 15.507V8.49301C24 5.74015 21.7684 3.50851 19.0155 3.50851ZM15.6445 12.3413L9.08177 15.4713C8.9069 15.5547 8.7049 15.4272 8.7049 15.2335V8.77778C8.7049 8.5813 8.91221 8.45396 9.08744 8.54278L15.6502 11.8685C15.8453 11.9673 15.8419 12.2472 15.6445 12.3413Z"
              fill="white"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</nav>

    {navItems.map((item, index) => (
      <MobileMenuItem key={index} item={item} />
    ))}
  </div>
)}
</>
    );
};

export default TopNav;
