import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Image } from "antd";
import { Link, useNavigate } from "react-router-dom";

const ClinicalSciencesPage = () => {
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
  <section
    className="page-heading-content mb-5 relative"
    style={{ height: "175px" }}
    data-cid="714"
  >
    <img
      className="bg-image bg-blue-800 w-full h-full object-cover"
      src="/PS5K8277.JPG"
      alt="Department of Clinical Sciences"
    />
    <div className="heading-content absolute inset-0 flex flex-col justify-center">
      <div className="container mx-auto px-5 title">
        <h1 className="text-white text-4xl font-bold">
          Department of Clinical Sciences
        </h1>
      </div>
      <div className="breadcrumb">
        <div className="container mx-auto">
          <ul className="flex flex-wrap items-center space-x-2">
            <li className="sideNav-link">
              <a className="nav-link text-white flex items-center" href="/">
                Home <ChevronRight size="16" />
              </a>
            </li>
            <li className="sideNav-link">
              <span className="nav-link text-white">
                Department of Clinical Sciences
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div className="flex flex-col lg:flex-row px-5 lg:px-10 gap-5 lg:gap-10 mb-5">
    {/* Main Content */}
    <div className="w-full ">
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
              The Department of Clinical Sciences serves as a crucial link between foundational medical knowledge and real-world healthcare practice. It provides education and training focused on patient care, emphasizing the application of medical theories in diagnosing and treating illnesses. Through hands-on clinical experiences and evidence-based practices, it prepares future healthcare professionals for the complexities of medical practice and further specialization in various clinical fields.
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
                <strong>Clinical Education:</strong> Focuses on the practical aspects of healthcare, bridging the gap between basic medical sciences and clinical practice.
              </li>
              <li>
                <strong>Patient-Centered Training:</strong> Emphasizes the application of medical knowledge in patient care, including diagnosis, treatment, and prevention of diseases.
              </li>
              <li>
                <strong>Interdisciplinary Collaboration:</strong> Promotes teamwork among different healthcare specialties to provide comprehensive patient care.
              </li>
              <li>
                <strong>Hands-On Experience:</strong> Provides opportunities for clinical rotations and hands-on practice in various medical settings, such as hospitals and clinics.
              </li>
              <li>
                <strong>Professional Skills Development:</strong> Develops essential skills like communication, decision-making, and ethical practice in a clinical setting.
              </li>
              <li>
                <strong>Research and Evidence-Based Practice:</strong> Encourages students to engage in clinical research and apply evidence-based methods to improve patient outcomes.
              </li>
              <li>
                <strong>Preparation for Internship Training:</strong> Prepares students for residency programs and further specialization in various medical fields.
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
              <li>Clinical Anatomy</li>
              <li>Pathological Anatomy</li>
              <li>Pathological Physiology</li>
              <li>Propedeutics of Internal Medicine</li>
              <li>Internal Medicine</li>
              <li>Emergency Medicine</li>
              <li>Infectious Diseases</li>
              <li>Propedeutics of Pediatrics</li>
              <li>Children Diseases</li>
              <li>Pediatrics</li>
              <li>Propedeutics of Surgery</li>
              <li>General Surgery</li>
              <li>Surgical Diseases</li>
              <li>Pediatric Surgery</li>
              <li>Anesthesiology</li>
              <li>Urology</li>
              <li>Obstetrics and Gynecology</li>
              <li>Public Health</li>
              <li>Epidemiology and Medical Research</li>
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

export default ClinicalSciencesPage;
