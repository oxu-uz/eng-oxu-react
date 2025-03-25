import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import { Link, useNavigate } from "react-router-dom";

const GeneralSciencesPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    const navigate = useNavigate();

    const navItems = [
        { label: "Academic Calendar", path: "/academics/academic-calendar" },
        { label: "Study Plan/ Curriculum", path: "/academics/study-plan" },
        { label: "Faculty development plan", path: "/about/aiu/faculty-development-plan" },
        { label: "Structure of the faculty", path: "/about/aiu/faculty-structure" },
        { label: "Department of General Science", path: "/about/departments/general-science" },
        { label: "Department of Fundamental Medicine", path: "/about/departments/fundamental-medicine" },
        { label: "Department of Clinical Science", path: "/about/departments/clinical-science" },
    ];

    return (
        <div className="bg-gray-50">
  {/* Hero Section */}
  <section className="page-heading-content mb-5 relative" style={{ height: "175px" }}>
    <img
      className="bg-image bg-blue-800 w-full h-full object-cover"
      src="/PS5K8277.JPG"
      alt="Department of General Sciences"
    />
    <div className="heading-content absolute inset-0 flex flex-col justify-center">
      <div className="container mx-auto px-5 title">
        <h1 className="text-white text-4xl font-bold">Department of General Sciences</h1>
      </div>
      <div className="breadcrumb mt-2">
        <div className="container mx-auto">
          <ul className="flex flex-wrap items-center space-x-2">
            <li className="sideNav-link">
              <a className="nav-link text-white flex items-center" href="/">
                Home <ChevronRight size="16" />
              </a>
            </li>
            <li className="sideNav-link">
              <span className="nav-link text-white">Department of General Sciences</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 px-5 lg:px-10 mb-5">
    {/* Main Content */}
    <div className="w-full">
      {/* Overview Section */}
      <section className="container mx-auto px-5 py-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#00316b]">Overview</h2>
            <p className="text-lg text-gray-600 mt-4">
              The Department of General Sciences generally covers a wide array of basic scientific disciplines.
              Its primary focus is to provide foundational understanding and skills in scientific principles,
              while promoting critical thinking and analytical abilities. This department often offers introductory
              courses, interdisciplinary programs, and research opportunities for students pursuing diverse fields of medicine.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-5 py-10 bg-gray-100 rounded-md">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#00316b]">Key Features</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-4 mt-4">
              <li>
                <strong>Foundational Education:</strong> Provides a broad-based education in key scientific disciplines,
                including biology, chemistry, and environmental science.
              </li>
              <li>
                <strong>Skill Development:</strong> Focuses on developing critical thinking and analytical skills through
                diverse course offerings and laboratory experiences.
              </li>
              <li>
                <strong>Interdisciplinary Approach:</strong> Integrates various scientific principles to help students
                understand and tackle complex concepts.
              </li>
              <li>
                <strong>Preparation for Specialization:</strong> Lays the groundwork for students pursuing advanced degrees
                or careers in fields like science, technology, healthcare, and engineering.
              </li>
              <li>
                <strong>Research and Inquiry:</strong> Encourages engagement in research and hands-on projects, fostering an
                environment of exploration and innovation.
              </li>
              <li>
                <strong>Practical Application:</strong> Emphasizes real-world problem-solving skills, preparing students to
                apply their scientific knowledge practically.
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-5 py-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#00316b]">Courses Offered</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-4 mt-4">
              <li>Medical Biology and Genetics</li>
              <li>General Hygiene</li>
              <li>Medical Chemistry (Bio-organic Chemistry)</li>
              <li>Biochemistry</li>
              <li>Pharmacology</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>

    {/* Sidebar */}
    <aside className="w-full lg:w-1/3 max-h-max sticky top-32 overflow-hidden">
      <ul className="sideNav">
        <li className="transition-all cursor-pointer flex relative items-center gap-3 sideNav-active p-2 py-5 mb-[1px] group">
          <span className="uppercase p-1 px-2 text-lg font-bold flex items-center gap-3 z-10">
            ACADEMIC DEPARTMENTS
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
            className={`sideNav-links transition-colors cursor-pointer p-2 ${
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

export default GeneralSciencesPage;
