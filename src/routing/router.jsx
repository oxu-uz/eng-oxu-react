import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Home from "../pages/HomePage.jsx";
import NotFound from "../pages/NotFound.jsx";
import Leadership from "../pages/about/leadership/Leadership.jsx";
import Vision from "../pages/about/aiu/Vision.jsx";
import Mission from "../pages/about/aiu/Mission.jsx";
import History from "../pages/about/aiu/History.jsx";
import HeadOfAdministration from "../pages/about/aiu/HeadOfAdministration.jsx";
import Administration from "../pages/about/aiu/Administration.jsx";
import InternationalRelations from "../pages/about/aiu/InternationalRelations.jsx";
import Md from "../pages/admissions/programs/Md.jsx";
import Mbbs from "../pages/admissions/programs/Mbbs.jsx";
import AcademicCalendar from "../pages/academics/AcademicCalendar.jsx";
import StudyPlan from "../pages/academics/StudyPlan.jsx";
import AboutUz from "../pages/about-uz/AboutUz.jsx";
import LifeInBukhara from "../pages/about-uz/LifeInBukhara.jsx";
import ScholarshipPage from "../pages/ScholarshipPage.jsx";
import StudentCouncilPage from "../pages/StudentCouncilPage.jsx";
import AcademicCouncilPage from "../pages/AcademicCouncilPage.jsx";
import ScientificCouncilPage from "../pages/ScientificCouncilPage.jsx";
import SportsCouncilPage from "../pages/SportsCouncilPage.jsx";
import CulturalCouncilPage from "../pages/CulturalCouncilPage.jsx";
import ITMediaCouncilPage from "../pages/ITMediaCouncilPage.jsx";
import DepartmentOfFundamentalMedicinePage from "../pages/departments/DepartmentOfFundamentalMedicinePage.jsx";
import ClinicalSciencesPage from "../pages/departments/ClinicalSciences.jsx";
import GeneralSciencesPage from "../pages/departments/GeneralSciencesPage.jsx";
import TuitionFeesPage from "../pages/admissions/TuitionsFeePage.jsx";
import FindProgramms from "../pages/FindProgramms.jsx";
import RegulatoryDocuments from "../pages/about/aiu/RegulatoryDocuments.jsx";
import Gallery from "../pages/Gallery.jsx";
import IntHome from "../pages/IntHome.jsx";
import LoginPage from "../auth/Login.jsx";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import StudentDashboard from "../pages/authentificated/StudentDashboard.jsx";
import RegisterPage from "../auth/RegisterPage.jsx";
import AdminDashboard from "../pages/authentificated/AdminDashboard.jsx";
import AdminLayout from "../pages/AdminLayout.jsx";
import AdminUsersPage from "../pages/authentificated/AdminUsersPage.jsx";
import AgentDashboard from "../pages/authentificated/AgentDashboard.jsx";
import AgentLayout from "../pages/AgentLayout.jsx";
import ManagerLayout from "../pages/ManagerLayout.jsx";
import ManagerDashboard from "../pages/authentificated/ManagerDashboard.jsx";
import ManagerUsersPage from "../pages/authentificated/ManagerUsersPage.jsx";
import ManagerCategoriesPage from "../pages/authentificated/ManagerCategoriesPage.jsx";
import ManagerPostsPage from "../pages/authentificated/ManagerPostsPage.jsx";
import NewsInDetail from "../components/home/NewsInDetail.jsx";
import InternationalRelationsContact from "../pages/InternationalRelationsContact.jsx";
import IntForm from "../pages/IntForm.jsx";
import FAQ from "../pages/FAQ.jsx";
import ViceRectorAcademic from "../pages/about/aiu/ViceRectorAcademic.jsx";
import ViceRectorForYouth from "../pages/about/aiu/ViceRectorForYouth.jsx";
import ViceRectorForInnovation from "../pages/about/aiu/ViceRectorForInnovation.jsx";
import ViceRectorForFinancial from "../pages/about/aiu/ViceRectorForFinancial.jsx";
import HeadOfInterRelat from "../pages/HeadOfInterRelat.jsx";
import ResearchAndPublications from "../pages/ResearchAndPublications.jsx";
import StructureOfFaculty from "../pages/academics/StructureOfFaculty.jsx";
import StructureOfUiversity from "../pages/about/aiu/StructureOfUiversity.jsx";
import BSBA from "../pages/admissions/programs/BSBA.jsx";
import BSIT from "../pages/admissions/programs/BSIT.jsx";
import MBA from "../pages/admissions/programs/MBA.jsx";
import CampusDetailPage from "../components/home/CampusDetailPage.jsx";
import AllNewsPage from "../components/home/AllNewsPage.jsx";
import ManagerApplicants from "../pages/authentificated/ManagerApplicants.jsx";
import ManagerMouPage from "../pages/authentificated/ManagerMouPage.jsx";
import HospitalAffiliated from "../pages/HospitalAffiliated.jsx";
import SustainableGoals from "../pages/about/SustainableGoals.jsx";
import Sdg1Page from "../pages/about/sdg/Sdg1Page.jsx";
import Sdg2Page from "../pages/about/sdg/Sdg2Page.jsx";
import Sdg3Page from "../pages/about/sdg/Sdg3Page.jsx";
import Sdg4Page from "../pages/about/sdg/Sdg4Page.jsx";
import Sdg5Page from "../pages/about/sdg/Sdg5Page.jsx";
import Sdg6Page from "../pages/about/sdg/Sdg6Page.jsx";
import Sdg7Page from "../pages/about/sdg/Sdg7Page.jsx";
import Sdg8Page from "../pages/about/sdg/Sdg8Page.jsx";
import Sdg9Page from "../pages/about/sdg/Sdg9Page.jsx";
import Sdg10Page from "../pages/about/sdg/Sdg10Page.jsx";
import Sdg11Page from "../pages/about/sdg/Sdg11Page.jsx";
import Sdg12Page from "../pages/about/sdg/Sdg12Page.jsx";
import Sdg13Page from "../pages/about/sdg/Sdg13Page.jsx";
import Sdg14Page from "../pages/about/sdg/Sdg14Page.jsx";
import Sdg15Page from "../pages/about/sdg/Sdg15Page.jsx";
import Sdg17Page from "../pages/about/sdg/Sdg17Page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/student/dashboard",
        element: (
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/news/all",
        element: <AllNewsPage />,
      },
      {
        path: "/news/:id",
        element: <NewsInDetail />,
      },
      {
        path: "/about/leadership",
        element: <Leadership />,
      },
      {
        path: "/about/aiu/vision",
        element: <Vision />,
      },
      {
        path: "/about/aiu/mission",
        element: <Mission />,
      },
      {
        path: "/about/aiu/history",
        element: <History />,
      },
      {
        path: "/about/aiu/administration",
        element: <Administration />,
      },
      {
        path: "/about/aiu/vice-rector/academic",
        element: <ViceRectorAcademic />,
      },
      {
        path: "/about/aiu/vice-rector/youth",
        element: <ViceRectorForYouth />,
      },
      {
        path: "/about/aiu/sustainable-development-goals",
        element: <SustainableGoals />,
      },
      {
        path: "/sustainable-development-goals-1",
        element: <Sdg1Page />,
      },
      {
        path: "/sustainable-development-goals-2",
        element: <Sdg2Page />,
      },
      {
        path: "/sustainable-development-goals-3",
        element: <Sdg3Page />,
      },
      {
        path: "/sustainable-development-goals-4",
        element: <Sdg4Page />,
      },
      {
        path: "/sustainable-development-goals-5",
        element: <Sdg5Page />,
      },
      {
        path: "/sustainable-development-goals-6",
        element: <Sdg6Page />,
      },
      {
        path: "/sustainable-development-goals-7",
        element: <Sdg7Page />,
      },
      {
        path: "/sustainable-development-goals-8",
        element: <Sdg8Page />,
      },
      {
        path: "/sustainable-development-goals-9",
        element: <Sdg9Page />,
      },
      {
        path: "/sustainable-development-goals-10",
        element: <Sdg10Page />,
      },
      {
        path: "/sustainable-development-goals-11",
        element: <Sdg11Page />,
      },
      {
        path: "/sustainable-development-goals-12",
        element: <Sdg12Page />,
      },
      {
        path: "/sustainable-development-goals-13",
        element: <Sdg13Page />,
      },
      {
        path: "/sustainable-development-goals-14",
        element: <Sdg14Page />,
      },
      {
        path: "/sustainable-development-goals-15",
        element: <Sdg15Page />,
      },
      {
        path: "/sustainable-development-goals-16",
        element: <Sdg14Page />,
      },
      {
        path: "/sustainable-development-goals-17",
        element: <Sdg17Page />,
      },
      {
        path: "/about/aiu/vice-rector/innovation",
        element: <ViceRectorForInnovation />,
      },
      {
        path: "/about/aiu/vice-rector/financial",
        element: <ViceRectorForFinancial />,
      },
      {
        path: "/about/aiu/international",
        element: <HeadOfInterRelat />,
      },
      {
        path: "/about/aiu/registrar",
        element: <HeadOfAdministration />,
      },
      {
        path: "/international-relations",
        element: <InternationalRelations />,
      },
      {
        path: "/about/aiu/structure-of-university",
        element: <StructureOfUiversity />, //prorektor pagega navigate bo'ladi
      },
      {
        path: "/admissions/md",
        element: <Md />,
      },
      {
        path: "/admissions/bsba",
        element: <BSBA />,
      },
      {
        path: "/admissions/bsit",
        element: <BSIT />,
      },
      {
        path: "/admissions/mba",
        element: <MBA />,
      },
      {
        path: "/admissions/mbbs",
        element: <Mbbs />,
      },
      {
        path: "/find-programs",
        element: <FindProgramms />,
      },
      {
        path: "/academics/academic-calendar",
        element: <AcademicCalendar />,
      },
      {
        path: "/academics/faculty-structure",
        element: <StructureOfFaculty />,
      },
      {
        path: "/international-form",
        element: <IntForm />,
      },
      {
        path: "/academics/study-plan",
        element: <StudyPlan />,
      },
      {
        path: "/about-uzbekistan",
        element: <AboutUz />,
      },
      {
        path: "/life-in-bukhara",
        element: <LifeInBukhara />,
      },
      {
        path: "/scholarships",
        element: <ScholarshipPage />,
      },
      {
        path: "/students-council",
        element: <StudentCouncilPage />,
      },
      {
        path: "/academic-council",
        element: <AcademicCouncilPage />,
      },
      {
        path: "/scientific-council",
        element: <ScientificCouncilPage />,
      },
      {
        path: "/sports-council",
        element: <SportsCouncilPage />,
      },
      {
        path: "/cultural-council",
        element: <CulturalCouncilPage />,
      },
      {
        path: "/it-media-council",
        element: <ITMediaCouncilPage />,
      },
      {
        path: "/about/departments/fundamental-medicine",
        element: <DepartmentOfFundamentalMedicinePage />,
      },
      {
        path: "/about/departments/clinical-science",
        element: <ClinicalSciencesPage />,
      },
      {
        path: "/about/departments/general-science",
        element: <GeneralSciencesPage />,
      },
      {
        path: "/tuition-fees",
        element: <TuitionFeesPage />,
      },
      {
        path: "/about/aiu/regulatory-documents",
        element: <RegulatoryDocuments />,
      },
      {
        path: "/hospitals",
        element: <HospitalAffiliated />,
      },
      {
        path: "/research",
        element: <ResearchAndPublications />,
      },
      {
        path: "/campuses/:id",
        element: <CampusDetailPage />,
      },
      {
        path: "/international-relations/contact",
        element: <InternationalRelationsContact />,
      },
      {
        path: "/international/faq",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/users",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminUsersPage />
          </ProtectedRoute>
        ),
      },

      // Можно добавить другие маршруты для административной части
    ],
  },
  {
    path: "/agent",
    element: <AgentLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedRoles={["agent"]}>
            <AgentDashboard />
          </ProtectedRoute>
        ),
      },

      // Можно добавить другие маршруты для административной части
    ],
  },
  {
    path: "/manager",
    element: <ManagerLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedRoles={["manager"]}>
            <ManagerDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/users",
        element: (
          <ProtectedRoute allowedRoles={["manager"]}>
            <ManagerUsersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/applicants",
        element: (
          <ProtectedRoute allowedRoles={["manager"]}>
            <ManagerApplicants />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/mou",
        element: (
          <ProtectedRoute allowedRoles={["manager"]}>
            <ManagerMouPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/category",
        element: (
          <ProtectedRoute allowedRoles={["manager"]}>
            <ManagerCategoriesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/posts",
        element: (
          <ProtectedRoute allowedRoles={["manager"]}>
            <ManagerPostsPage />
          </ProtectedRoute>
        ),
      },

      // Можно добавить другие маршруты для административной части
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
