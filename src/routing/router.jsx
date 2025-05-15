import {createBrowserRouter, Navigate} from "react-router-dom";
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


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/student/dashboard',
                element: (
                    <ProtectedRoute allowedRoles={["student"]}>
                        <StudentDashboard/>
                    </ProtectedRoute>
                )
            },
            {
                path: '/news/all',
                element: <AllNewsPage/>
            },
            {
                path: '/news/:id',
                element: <NewsInDetail/>
            },
            {
                path: '/about/leadership',
                element: <Leadership/>
            }, {
                path: '/about/aiu/vision',
                element: <Vision/>
            },
            {
                path: '/about/aiu/mission',
                element: <Mission/>
            }, {
                path: '/about/aiu/history',
                element: <History/>
            },
            {
                path: '/about/aiu/administration',
                element: <Administration/>
            },
            {
                path: '/about/aiu/vice-rector/academic',
                element: <ViceRectorAcademic/>
            },
            {
                path: '/about/aiu/vice-rector/youth',
                element: <ViceRectorForYouth/>
            },
            {
                path: '/about/aiu/vice-rector/innovation',
                element: <ViceRectorForInnovation/>
            },
            {
                path: '/about/aiu/vice-rector/financial',
                element: <ViceRectorForFinancial/>
            },
            {
                path: '/about/aiu/international',
                element: <HeadOfInterRelat/>
            },
            {
                path: '/about/aiu/registrar',
                element: <HeadOfAdministration/>
            },
            {
                path: '/international-relations',
                element: <InternationalRelations/>
            },
            {
                path: '/about/aiu/structure-of-university',
                element: <StructureOfUiversity/> //prorektor pagega navigate bo'ladi
            },
            {
                path: '/admissions/md',
                element: <Md/>
            },
            {
                path: '/admissions/bsba',
                element: <BSBA/>
            },
            {
                path: '/admissions/bsit',
                element: <BSIT/>
            },
            {
                path: '/admissions/mba',
                element: <MBA/>
            },
            {
                path: '/admissions/mbbs',
                element: <Mbbs/>
            },
            {
                path: '/find-programs',
                element: <FindProgramms/>
            },
            {
                path: '/academics/academic-calendar',
                element: <AcademicCalendar/>
            },
            {
                path: '/academics/faculty-structure',
                element: <StructureOfFaculty/>
            },
            {
                path: '/international-form',
                element: <IntForm/>
            },
            {
                path: '/academics/study-plan',
                element: <StudyPlan/>
            }, {
                path: '/about-uzbekistan',
                element: <AboutUz/>
            }, {
                path: '/life-in-bukhara',
                element: <LifeInBukhara/>
            }, {
                path: '/scholarships',
                element: <ScholarshipPage/>
            }, {
                path: '/students-council',
                element: <StudentCouncilPage/>
            }, {
                path: '/academic-council',
                element: <AcademicCouncilPage/>
            }, {
                path: '/scientific-council',
                element: <ScientificCouncilPage/>
            }, {
                path: '/sports-council',
                element: <SportsCouncilPage/>
            }, {
                path: '/cultural-council',
                element: <CulturalCouncilPage/>
            }, {
                path: '/it-media-council',
                element: <ITMediaCouncilPage/>
            }, {
                path: '/about/departments/fundamental-medicine',
                element: <DepartmentOfFundamentalMedicinePage/>
            }, {
                path: '/about/departments/clinical-science',
                element: <ClinicalSciencesPage/>
            }, {
                path: '/about/departments/general-science',
                element: <GeneralSciencesPage/>
            }, {
                path: '/tuition-fees',
                element: <TuitionFeesPage/>
            }, {
                path: '/about/aiu/regulatory-documents',
                element: <RegulatoryDocuments/>
            },
            {
                path: '/research',
                element: <ResearchAndPublications/>
            },
            {
                path: '/campuses/:id',
                element: <CampusDetailPage/>
            },
            {
                path: '/international-relations/contact',
                element: <InternationalRelationsContact/>
            },
            {
                path: '/international/faq',
                element: <FAQ/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                path: 'dashboard',
                element: (
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <AdminDashboard/>
                    </ProtectedRoute>
                )
            },
            {
                path: 'dashboard/users',
                element: (
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <AdminUsersPage/>
                    </ProtectedRoute>
                )
            },

            // Можно добавить другие маршруты для административной части
        ]
    },
    {
        path: '/agent',
        element: <AgentLayout/>,
        children: [
            {
                path: 'dashboard',
                element: (
                    <ProtectedRoute allowedRoles={["agent"]}>
                        <AgentDashboard/>
                    </ProtectedRoute>
                )
            },

            // Можно добавить другие маршруты для административной части
        ]
    },
    {
        path: '/manager',
        element: <ManagerLayout/>,
        children: [
            {
                path: 'dashboard',
                element: (
                    <ProtectedRoute allowedRoles={["manager"]}>
                        <ManagerDashboard/>
                    </ProtectedRoute>
                )
            },
            {
                path: 'dashboard/users',
                element: (
                    <ProtectedRoute allowedRoles={["manager"]}>
                        <ManagerUsersPage/>
                    </ProtectedRoute>
                )
            },
            {
                path: 'dashboard/category',
                element: (
                    <ProtectedRoute allowedRoles={["manager"]}>
                        <ManagerCategoriesPage/>
                    </ProtectedRoute>
                )
            },
            {
                path: 'dashboard/posts',
                element: (
                    <ProtectedRoute allowedRoles={["manager"]}>
                        <ManagerPostsPage/>
                    </ProtectedRoute>
                )
            },

            // Можно добавить другие маршруты для административной части
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;