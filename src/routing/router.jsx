    import {createBrowserRouter, Navigate} from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Home from "../pages/HomePage.jsx";
import NotFound from "../pages/NotFound.jsx";
import Leadership from "../pages/about/leadership/Leadership.jsx";
import Vision from "../pages/about/aiu/Vision.jsx";
import Mission from "../pages/about/aiu/Mission.jsx";
import History from "../pages/about/aiu/History.jsx";
import Registrar from "../pages/about/aiu/Registrar.jsx";
import Administration from "../pages/about/aiu/Administration.jsx";
import InternationalRelations from "../pages/about/aiu/InternationalRelations.jsx";
import Md from "../pages/admissions/programs/Md.jsx";
import Mbbs from "../pages/admissions/programs/Mbbs.jsx";
    import AcademicCalendar from "../pages/academics/AcademicCalendar.jsx";
    import StudyPlan from "../pages/academics/StudyPlan.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about/leadership',
                element: <Leadership />
            },{
                path: '/about/aiu/vision',
                element: <Vision />
            },
            {
                path: '/about/aiu/mission',
                element: <Mission />
            },{
                path: '/about/aiu/history',
                element: <History />
            },{
                path: '/about/aiu/registrar',
                element: <Registrar />
            },{
                path: '/about/aiu/administration',
                element: <Administration />
            },{
                path: '/about/aiu/international-relations',
                element: <InternationalRelations />
            },{
                path: '/admissions/md',
                element: <Md />
            }
            ,{
                path: '/admissions/mbbs',
                element: <Mbbs />
            },
            {
                path: '/academics/academic-calendar',
                element: <AcademicCalendar />
            },

            {
                path: '/academics/study-plan',
                element: <StudyPlan />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;