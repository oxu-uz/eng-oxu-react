import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import {Link, useNavigate} from "react-router-dom";

const CulturalCouncilPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    const navigate = useNavigate();

    const navItems = [
        { label: "Council of the Academic Activities", path: "/academic-council" },
        { label: "Council for the Scientific Activities", path: "/scientific-council" },
        { label: "Council for Sport", path: "/sports-council" },
        { label: "Council for Cultural Activities", path: "/cultural-council" },
        { label: "Council for IT/ Media", path: "/it-media-council" },
    ];

    return (
        <div className="bg-gray-50">
        {/* Hero Section */}
        <section
          className="page-heading-content mb-5 relative"
          style={{ height: "175px" }}
          data-cid="714"
        >
          <img
            className="bg-image bg-orange-800 w-full h-full object-cover"
            src="/P1007495.MP4_snapshot_00.03.671.jpg"
            alt="Council for Cultural Activities"
          />
          <div className="heading-content absolute inset-0 flex flex-col justify-center">
            <div className="container mx-auto px-5 title">
              <h1 className="text-white text-4xl font-bold">
                Council for Cultural Activities
              </h1>
            </div>
            <div className="breadcrumb">
              <div className="container mx-auto">
                <ul className="flex flex-wrap items-center space-x-2">
                  <li className="sideNav-link">
                    <a className="nav-link text-white flex items-center" href="/en">
                      Home <ChevronRight size="16" />
                    </a>
                  </li>
                  <li className="sideNav-link">
                    <span className="nav-link text-white">
                      Council for Cultural Activities
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      
        <div className="flex flex-col md:flex-row gap-10 mb-5 px-5 md:px-10">
          <div className="flex-1">
            {/* Purpose Section */}
            <section className="container mx-auto px-5 py-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#00316b]">
                    Purpose of the Council
                  </h2>
                  <p className="text-lg text-gray-600 mt-4">
                    The Cultural Activities Committee at Asia International University
                    fosters creativity, cultural exchange, and personal expression. The
                    committee organizes a range of cultural events and activities, including
                    art exhibitions, music performances, dance shows, and theater productions.
                    These activities serve as platforms for students to explore their artistic
                    talents, appreciate diverse cultures, and contribute to a vibrant campus
                    life that celebrates inclusivity and unity.
                  </p>
                </div>
              </motion.div>
            </section>
      
            {/* Roles and Responsibilities Section */}
            <section className="container mx-auto px-5 py-10 bg-gray-100 rounded-md">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#00316b]">
                    Role and Responsibilities
                  </h2>
                  <p className="text-lg text-gray-600 mt-4">
                    The Cultural Activities Committee plays a pivotal role in organizing and promoting
                    cultural events. Here are the main roles and responsibilities of the committee:
                  </p>
                </div>
      
                <ul className="list-disc pl-5 text-gray-600 space-y-4">
                  <li>
                    <strong>Organizing Cultural Events and Festivals:</strong> Plan and execute campus-wide
                    events like cultural festivals, music performances, dance shows, and art exhibitions to
                    showcase students’ talents and foster cultural appreciation.
                  </li>
                  <li>
                    <strong>Promoting Cultural Exchange:</strong> Encourage students to participate in cultural
                    exchange programs, where they can learn from different cultures and broaden their global
                    perspectives.
                  </li>
                  <li>
                    <strong>Supporting Artistic Talent:</strong> Provide platforms for students to express themselves
                    creatively through art, music, dance, drama, and literature.
                  </li>
                  <li>
                    <strong>Collaborating with External Artists and Institutions:</strong> Bring external
                    performers, artists, and cultural institutions to campus, enhancing the cultural exposure
                    of students and promoting cross-cultural engagement.
                  </li>
                  <li>
                    <strong>Enhancing Student Engagement:</strong> Ensure active student participation in cultural
                    activities by encouraging inclusivity and creating a welcoming environment for all students
                    to get involved.
                  </li>
                </ul>
              </motion.div>
            </section>
          </div>
      
          <aside className="md:w-1/3 w-full max-h-max sticky top-32 overflow-hidden">
            <ul className="sideNav">
              <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
                <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
                  STUDENT LIFE IN AIU
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

export default CulturalCouncilPage;
