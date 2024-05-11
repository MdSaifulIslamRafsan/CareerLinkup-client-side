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
            element: <PrivateRoute><AllJobs></AllJobs></PrivateRoute>
        },
        {
            path: '/job/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
        },
    ]
  },
]);

export default router;
