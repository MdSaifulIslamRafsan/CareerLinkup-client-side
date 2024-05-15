import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blogs from "../Pages/Blogs";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../Pages/AllJobs";
import AddAJobs from "../Pages/AddAJob";
import MyJobs from "../Pages/MyJobs";
import UpdateAJob from "../Pages/UpdateAJob";
import AppliedJobs from "../Pages/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/all-jobs',
            element: <AllJobs></AllJobs>
        },
        {
            path: '/add-a-job',
            element: <PrivateRoute><AddAJobs></AddAJobs></PrivateRoute>
        },
        {
            path: '/update-a-job/:id',
            element: <PrivateRoute><UpdateAJob></UpdateAJob></PrivateRoute>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params?.id}`)
        },
        {
            path: '/my-jobs',
            element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
        },
        {
            path: '/job/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            
        },
        {
            path: '/applied-jobs',
            element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
            
        },
    ]
  },
]);

export default router;
