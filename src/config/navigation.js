export const navItems = [
  {
    type: "logo",
    src: "/logo_aiu.svg",
    src1: "/new_logo.svg",
    alt: "University Logo",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
    dropdown: [
      { label: "Vision", link: "/about/aiu/vision" },
      { label: "Mission", link: "/about/aiu/mission" },
      { label: "Message from the Rector", link: "/about/leadership" },
      {
        label: "Structure of the university",
        link: "/about/aiu/structure-of-university",
      },
      {
        label: "Regulatory Documents",
        link: "/about/aiu/regulatory-documents",
      },
      {
        label: "Sustainable development goalsnav",
        link: "/about/aiu/sustainable-development-goals",
      },
    ],
  },
  {
    label: "Academics",
    link: "/admissions",
    dropdown: [
      { label: "Academic Calendar", link: "/academics/academic-calendar" },
      { label: "Study Plan/ Curriculum", link: "/academics/study-plan" },
      {
        label: "Structure of the faculty",
        link: "/academics/faculty-structure",
      },
    ],
  },
  {
    label: "International relations",
    dropdown: [
      {
        label: "International Relations Office",
        link: "/international-relations",
      },
      { label: "ERASMUS+", link: "https://erasmus-plus.ec.europa.eu/" },
    ],
  },
  {
    label: "Student Life in AIU",
    link: "/schools",
    dropdown: [
      {
        label: "Council of the Academic Activities",
        link: "/academic-council",
      },
      {
        label: "Council for the Scientific Activities",
        link: "/scientific-council",
      },
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
        submenu: [{ label: "Login", link: "/login" }],
      },
    ],
  },
  { label: "Hospitals affiliated", link: "/hospitals" },
  { label: "Research and Publications", link: "/research" },
  { label: "FAQ", link: "/international/faq" },
];
